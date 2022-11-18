import { Config } from 'react-translator-component'

/* Default Language */
export const langDefault = Config.default = 'en';

/* Language List */
export const langList = Config.list = {
  en: {
    text: 'English',
    file: require('./locale/en')
  },
  es: {
    text: 'Espanyol',
    file: require('./locale/es')
  },
  fr: {
    text: 'France',
    file: require('./locale/fr')
  }
}
