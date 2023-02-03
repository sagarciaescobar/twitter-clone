'use client'

import { Button, ButtonLink } from '../Button'
import { useLanguage } from '@/app/hooks/client/useLanguage'
import { banner, title, label, btnContainer } from './index.module.scss'

const Banner = ({ children, lang }) => {
  const { t } = useLanguage(lang)

  const handleClick = () => {
    console.log('funciono')
  }

  return (
    <div role="banner" className={banner}>
      <div>
        <h2 className={title}>{t('No te pierdas de lo que esta pasando')}</h2>
        <p className={label}>
          {t('Las personas en Twitter son las primeras en saberlo.')}
        </p>
      </div>
      <div className={btnContainer}>
        <ButtonLink type="outline" href="/login">
          {t('Ingresar')}
        </ButtonLink>
        <Button type="solid" href="/register">
          {t('Registrarse')}
        </Button>
      </div>
    </div>
  )
}

export { Banner }
