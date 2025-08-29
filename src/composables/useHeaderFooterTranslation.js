import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    header: {
      navigation: {
        home: 'Início',
        about: 'Sobre',
        differentials: 'Diferenciais',
        services: 'Estrutura',
        products: 'Produtos',
        compliance: 'Compliance',
        lgpd: 'LGPD',
        contact: 'Contato'
      },
      dropdown: {
        products: {
          makeComplaint: 'Faça uma Reclamação',
          checkStatus: 'Consultar Status'
        },
        compliance: {
          confidentialChannel: 'Canal Confidencial',
          makeReport: 'Faça um Relato',
          checkStatus: 'Consultar Status'
        },
        lgpd: {
          privacyPolicy: 'Política de Privacidade',
          privacyNotice: 'Aviso de Privacidade'
        },
        contact: {
          talkToUs: 'Entre em Contato',
          workWithUs: 'Trabalhe Conosco',
          bePartner: 'Seja Nosso Parceiro'
        }
      },
      social: {
        follow: 'Siga-nos',
        language: 'Idioma'
      }
    },
    footer: {
      copyright: '© 2025 | Uni Hospitalar Ltda. – Todos os direitos reservados',
      developedBy: 'Desenvolvido por',
      legalTerms: 'Termos Legais'
    }
  },
  en: {
    header: {
      navigation: {
        home: 'Home',
        about: 'About',
        differentials: 'Differentials',
        services: 'Structure',
        products: 'Products',
        compliance: 'Compliance',
        lgpd: 'LGPD',
        contact: 'Contact'
      },
      dropdown: {
        products: {
          makeComplaint: 'Make a Complaint',
          checkStatus: 'Check Status'
        },
        compliance: {
          confidentialChannel: 'Confidential Channel',
          makeReport: 'Make a Report',
          checkStatus: 'Check Status'
        },
        lgpd: {
          privacyPolicy: 'Privacy Policy',
          privacyNotice: 'Privacy Notice'
        },
        contact: {
          talkToUs: 'Contact Us',
          workWithUs: 'Work With Us',
          bePartner: 'Be Our Partner'
        }
      },
      social: {
        follow: 'Follow us',
        language: 'Language'
      }
    },
    footer: {
      copyright: '© 2025 | Uni Hospitalar Ltd. – All rights reserved',
      developedBy: 'Developed by',
      legalTerms: 'Legal Terms'
    }
  },
  es: {
    header: {
      navigation: {
        home: 'Inicio',
        about: 'Acerca de',
        differentials: 'Diferenciales',
        services: 'Estructura',
        products: 'Productos',
        compliance: 'Compliance',
        lgpd: 'LGPD',
        contact: 'Contacto'
      },
      dropdown: {
        products: {
          makeComplaint: 'Hacer una Queja',
          checkStatus: 'Consultar Estado'
        },
        compliance: {
          confidentialChannel: 'Canal Confidencial',
          makeReport: 'Hacer un Reporte',
          checkStatus: 'Consultar Estado'
        },
        lgpd: {
          privacyPolicy: 'Política de Privacidad',
          privacyNotice: 'Aviso de Privacidad'
        },
        contact: {
          talkToUs: 'Contáctanos',
          workWithUs: 'Trabaja con Nosotros',
          bePartner: 'Sea Nuestro Socio'
        }
      },
      social: {
        follow: 'Síguenos',
        language: 'Idioma'
      }
    },
    footer: {
      copyright: '© 2025 | Uni Hospitalar Ltda. – Todos los derechos reservados',
      developedBy: 'Desarrollado por',
      legalTerms: 'Términos Legales'
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
