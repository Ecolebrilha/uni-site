import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      hello: 'Hello World'
    }
  },
  pt: {
    message: {
      hello: 'Olá Mundo'
    }
  }
};

const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages,
});

export default i18n;