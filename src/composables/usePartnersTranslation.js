import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    partners: {
      hero: {
        title: 'Nossos Parceiros',
        subtitle: 'Empresas que confiam em nossa excelência'
      },
      stats: {
        strategicPartners: 'Parceiros Estratégicos',
        statesServed: 'Estados Atendidos',
        yearsOfTrust: 'Anos de Confiança'
      },
      showcase: {
        title: 'Parceiros de Confiança',
        subtitle: 'Conheça as organizações que escolheram a Uni Hospitalar como parceira estratégica'
      },
      testimonials: {
        title: 'O que nossos parceiros dizem',
        testimonial1: {
          text: 'A Uni Hospitalar é nossa parceira há mais de 8 anos. Sempre demonstraram profissionalismo e qualidade excepcionais.',
          author: 'Dr. Carlos Silva',
          company: 'Hospital Santa Clara'
        },
        testimonial2: {
          text: 'Confiamos na Uni Hospitalar para nossos medicamentos mais críticos. Nunca nos decepcionaram.',
          author: 'Dra. Ana Martins',
          company: 'Clínica São Lucas'
        },
        testimonial3: {
          text: 'Parceria sólida e confiável. A Uni Hospitalar entende nossas necessidades e sempre entrega resultados.',
          author: 'Paulo Mendes',
          company: 'Hospital Regional'
        }
      },
      cta: {
        title: 'Seja nosso próximo parceiro',
        description: 'Junte-se a essas empresas de sucesso e faça parte da nossa rede de parceiros estratégicos',
        button: 'Quero ser parceiro'
      }
    }
  },
  en: {
    partners: {
      hero: {
        title: 'Our Partners',
        subtitle: 'Companies that trust our excellence'
      },
      stats: {
        strategicPartners: 'Strategic Partners',
        statesServed: 'States Served',
        yearsOfTrust: 'Years of Trust'
      },
      showcase: {
        title: 'Trusted Partners',
        subtitle: 'Meet the organizations that chose Uni Hospitalar as their strategic partner'
      },
      testimonials: {
        title: 'What our partners say',
        testimonial1: {
          text: 'Uni Hospitalar has been our partner for over 8 years. They have always demonstrated exceptional professionalism and quality.',
          author: 'Dr. Carlos Silva',
          company: 'Santa Clara Hospital'
        },
        testimonial2: {
          text: 'We trust Uni Hospitalar for our most critical medications. They have never disappointed us.',
          author: 'Dr. Ana Martins',
          company: 'São Lucas Clinic'
        },
        testimonial3: {
          text: 'Solid and reliable partnership. Uni Hospitalar understands our needs and always delivers results.',
          author: 'Paulo Mendes',
          company: 'Regional Hospital'
        }
      },
      cta: {
        title: 'Be our next partner',
        description: 'Join these successful companies and become part of our strategic partner network',
        button: 'I want to be a partner'
      }
    }
  },
  es: {
    partners: {
      hero: {
        title: 'Nuestros Socios',
        subtitle: 'Empresas que confían en nuestra excelencia'
      },
      stats: {
        strategicPartners: 'Socios Estratégicos',
        statesServed: 'Estados Atendidos',
        yearsOfTrust: 'Años de Confianza'
      },
      showcase: {
        title: 'Socios de Confianza',
        subtitle: 'Conozca las organizaciones que eligieron a Uni Hospitalar como socio estratégico'
      },
      testimonials: {
        title: 'Lo que dicen nuestros socios',
        testimonial1: {
          text: 'Uni Hospitalar es nuestro socio desde hace más de 8 años. Siempre han demostrado profesionalismo y calidad excepcionales.',
          author: 'Dr. Carlos Silva',
          company: 'Hospital Santa Clara'
        },
        testimonial2: {
          text: 'Confiamos en Uni Hospitalar para nuestros medicamentos más críticos. Nunca nos han decepcionado.',
          author: 'Dra. Ana Martins',
          company: 'Clínica São Lucas'
        },
        testimonial3: {
          text: 'Asociación sólida y confiable. Uni Hospitalar entiende nuestras necesidades y siempre entrega resultados.',
          author: 'Paulo Mendes',
          company: 'Hospital Regional'
        }
      },
      cta: {
        title: 'Sé nuestro próximo socio',
        description: 'Únete a estas empresas exitosas y forma parte de nuestra red de socios estratégicos',
        button: 'Quiero ser socio'
      }
    }
  }
})

export function usePartnersTranslation() {
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
