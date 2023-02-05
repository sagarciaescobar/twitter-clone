import config from '../../../config/default'
import d from '../../../dictionaries'

const useLanguage = (lang) => {
  const t = (text) => {
    let key
    if (lang === config.i18n.searchLocale) return text
    for (let [Dictionarykey, value] of d[config.i18n.searchLocale].entries()) {
      if (value === text) key = Dictionarykey
    }
    return d[lang].get(key)
  }
  return { t }
}

export { useLanguage }
