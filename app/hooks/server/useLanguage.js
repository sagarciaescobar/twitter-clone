import config from '../../../config/default'
import d from '../../../dictionaries'
import { cookies as Cookies } from 'next/headers'

const useLanguage = () => {
  let lang
  const cookies = Cookies();
  const hasLocale = cookies.has('locale')

  if (hasLocale) lang = cookies.get('locale').value
  if (!lang) lang = config.i18n.defaultLocale

  const t = (text) => {
    let key
    const label = `${text}-${Math.random()}`
    for (let [Dictionarykey, value] of d[config.i18n.searchLocale].entries()) {
      if (value === text) key = Dictionarykey
    }
    return d[lang].get(key)
  }

  return { t, lang }
}

export { useLanguage }
