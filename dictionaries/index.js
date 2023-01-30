import en from './en.json'
import es from './es.json'

const dictionaries = {
  en: new Map(Object.entries(en)),
  es: new Map(Object.entries(es))
}

export default dictionaries;
