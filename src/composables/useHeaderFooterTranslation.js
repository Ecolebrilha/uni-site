import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    header: {
      navigation: {
        home: 'Início',
        about: 'Sobre',
        differentials: 'Diferenciais',
        services: 'Serviços',
        products: 'Produtos',
        compliance: 'Compliance',
        lgpd: 'LGPD',
        contact: 'Contato'
      },
      dropdown: {
        lgpd: {
          privacyPolicy: 'Política de Privacidade',
          legalTerms: 'Termos Legais'
        },
        contact: {
          bePartner: 'Seja Nosso Parceiro',
          workWithUs: 'Trabalhe Conosco',
          talkToUs: 'Entre em Contato'
        }
      },
      social: {
        follow: 'Siga-nos',
        language: 'Idioma'
      }
    },
    footer: {
      copyright: '© 2025 | Uni Hospitalar Ltda. – Todos os direitos reservados',
      developedBy: 'Desenvolvido por'
    }
  },
  en: {
    header: {
      navigation: {
        home: 'Home',
        about: 'About',
        differentials: 'Differentials',
        services: 'Services',
        products: 'Products',
        compliance: 'Compliance',
        lgpd: 'LGPD',
        contact: 'Contact'
      },
      dropdown: {
        lgpd: {
          privacyPolicy: 'Privacy Policy',
          legalTerms: 'Legal Terms'
        },
        contact: {
          bePartner: 'Be Our Partner',
          workWithUs: 'Work With Us',
          talkToUs: 'Contact Us'
        }
      },
      social: {
        follow: 'Follow us',
        language: 'Language'
      }
    },
    footer: {
      copyright: '© 2025 | Uni Hospitalar Ltd. – All rights reserved',
      developedBy: 'Developed by'
    }
  },
  es: {
    header: {
      navigation: {
        home: 'Inicio',
        about: 'Acerca de',
        differentials: 'Diferenciales',
        services: 'Servicios',
        products: 'Productos',
        compliance: 'Compliance',
        lgpd: 'LGPD',
        contact: 'Contacto'
      },
      dropdown: {
        lgpd: {
          privacyPolicy: 'Política de Privacidad',
          legalTerms: 'Términos Legales'
        },
        contact: {
          bePartner: 'Sea Nuestro Socio',
          workWithUs: 'Trabaja con Nosotros',
          talkToUs: 'Contáctanos'
        }
      },
      social: {
        follow: 'Síguenos',
        language: 'Idioma'
      }
    },
    footer: {
      copyright: '© 2025 | Uni Hospitalar Ltda. – Todos los derechos reservados',
      developedBy: 'Desarrollado por'
    }
  }
})

export function useHeaderFooterTranslation() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  // Inicializar com idioma salvo
  const savedLang = localStorage.getItem('language')
  if (savedLang && ['pt', 'en', 'es'].includes(savedLang)) {
    currentLanguage.value = savedLang
  }

  return {
    currentLanguage,
    setLanguage,
    t
  }
}
