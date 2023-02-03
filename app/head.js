import { useLanguage } from './hooks/server/useLanguage'

export default function Head() {
  const { t } = useLanguage()
  return (
    <>
      <title>{t('Esto es una prueba')}</title>
    </>
  )
}
