import Script from 'next/script'
import { useLanguage } from './hooks/server/useLanguage'

export default function Head() {
  const { t } = useLanguage()
  return (
    <>
      <title>{t('Esto es una prueba')}</title>
      <Script
        src="https://apis.google.com/js/api:client.js"
      />
    </>
  )
}
