'use client'

import { Button, ButtonLink } from '../Button'
import { useLanguage } from '@/app/hooks/client/useLanguage'
import { banner, title, label, btnContainer } from './index.module.scss'
import { Suspense, useEffect, useState } from 'react'
import Login from '@/app/container/login'
import { LoginForm } from '../LoginForm'
import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from 'next/navigation'

const Banner = ({ children, lang }) => {
  const { t } = useLanguage(lang)
  const search = useSearchParams()
  const router = useRouter()
  const [login, setLogin] = useState(false)
  const match = search.toString().match(/^login=$/)

  const handleClick = () => {
    router.replace('/?login')
  }

  useEffect(() => {
    if (match) {
      setLogin(true)
    } else {
      setLogin(false)
      router.push('/', { forceOptimisticNavigation: true })
    }
  }, [match, router])

  return (
    <>
      <div role="banner" className={banner}>
        <div>
          <h2 className={title}>{t('Don’t miss what’s happening')}</h2>
          <p className={label}>
            {t('People on Twitter are the first to know.')}
          </p>
        </div>
        <div className={btnContainer}>
          <Button type="outline" onClick={handleClick}>
            {t('Ingresar')}
          </Button>
          <Button type="solid" onClick={handleClick}>
            {t('Registrarse')}
          </Button>
        </div>
      </div>
      {login && (
        <Login>
          <LoginForm lang={lang} />
        </Login>
      )}
    </>
  )
}

export { Banner }
