
import { Button } from '../Button'
import { useLanguage } from '@/app/hooks/server/useLanguage'

const Banner = ({ children }) => {
  const { t } = useLanguage()

  return (
    <div role="banner">
      <div>
        <h2>{t('No te pierdas de lo que esta pasando')}</h2>
        <p>{t('Las personas en Twitter son las primeras en saberlo.')}</p>
      </div>
      <div>
        <Button>{t('Ingresar')}</Button>
        <Button>{t('Registrarse')}</Button>
      </div>
    </div>
  )
}

export { Banner }
