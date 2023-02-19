'use client'

import { Button, ButtonLink } from '../Button'
import { useLanguage } from '@/app/hooks/client/useLanguage'
import styles from './index.module.scss'
import { Suspense, useEffect, useState } from 'react'
import Login from '@/app/container/login'
import { LoginForm } from '../LoginForm'
import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from 'next/navigation'
import { Loading } from '../Loading'

const Banner = ({ children, lang }) => {
  const { t } = useLanguage(lang)
  const search = useSearchParams()
  const path = usePathname()
  const router = useRouter()
  const [login, setLogin] = useState(false)
  const match = search.toString().match(/^login=$/)

  const handleClick = () => {
    window.history.replaceState({}, '', '/?login')
    setLogin(true)
  }

  useEffect(() => {
    if (match) {
      setLogin(true)
    } else if (search.entries().next().done) {
      setLogin(false)
    } else {
      window.location.href = '/'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div role="banner" className={styles.banner}>
        <div className={styles.banner_container}>
          <div>
            <h2 className={styles.title}>{t('No te pierdas de lo que esta pasando')}</h2>
            <p className={styles.label}>
              {t('Las personas en Twitter son las primeras en saberlo.')}
            </p>
          </div>
          <div className={styles.btn_container}>
            <Button type="outline" onClick={handleClick}>
              {t('Ingresar')}
            </Button>
            <Button type="solid" onClick={handleClick}>
              {t('Registrarse')}
            </Button>
          </div>
        </div>
      </div>
      <div style={{ display: login ? 'block' : 'none' }}>
        <Login showForm={setLogin}>
          {login && <LoginForm t={t}/>}
        </Login>
      </div>
    </>
  )
}

export { Banner }
