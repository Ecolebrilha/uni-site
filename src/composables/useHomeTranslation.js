import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    home: {
      hero: {
        title: 'Respeito às relações humanas',
        subtitle: 'O nosso foco está na distribuição <br> de medicamentos hospitalares, <br> oncológicos e excepcionais.',
        scrollIndicator: 'Role para baixo'
      },
      stats: {
        title: 'Nossa Trajetória em Números',
        years: 'Anos de Experiência',
        units: 'Unidades Estratégicas',
        clients: 'Clientes Satisfeitos',
        delivery: 'Entregas Rápidas'
      },
      services: {
        title: 'Nossos Serviços',
        subtitle: 'Conheça o que oferecemos para você',
        storage: {
          title: 'ESTOQUE',
          description: 'Nossa área de armazenamento segue rigorosamente as normas exigidas pela Anvisa.',
          link: 'Saiba mais'
        },
        differentials: {
          title: 'DIFERENCIAIS',
          description: 'Profissionais preparados e alinhados com a cultura da empresa, somado à linha de produtos e logística.',
          link: 'Saiba mais'
        },
        logistics: {
          title: 'LOGÍSTICA',
          description: 'Entregas para o Norte e Nordeste em até 48 horas com toda segurança e garantia.',
          link: 'Saiba mais'
        },
        businessUnit: {
          title: 'UNIDADE DE NEGÓCIOS',
          description: 'Estamos abrindo uma nova unidade em Fortaleza, na busca pelo melhor atendimento e prestação de serviço.',
          link: 'Saiba mais'
        },
        mainClients: {
          title: 'PRINCIPAIS CLIENTES',
          description: 'Buscando melhor atender as demandas do mercado farmacêutico, atendemos a indústrias e hospitais, públicos e privados e clínicas particulares.',
          link: 'Saiba mais'
        },
        mainProducts: {
          title: 'PRINCIPAIS PRODUTOS',
          description: 'Foco na distribuição e padronização de medicamentos hospitalares, oncológicos e excepcionais, trabalhando em nichos específicos.',
          link: 'Saiba mais'
        }
      },
      testimonials: {
        title: 'O que dizem sobre nós',
        subtitle: 'Depoimentos de nossos parceiros e clientes',
        testimonial1: {
          text: 'A Uni Hospitalar tem sido uma parceira excepcional e confiável. Sua eficiência logística impecável e compromisso inabalável com a qualidade fazem toda a diferença para nossa operação diária.',
          author: 'Dr. Carlos Silva',
          position: 'Diretor Médico - Hospital Santa Clara'
        },
        testimonial2: {
          text: 'Trabalhamos com a Uni Hospitalar há mais de 5 anos e sempre fomos atendidos com excelência. A pontualidade nas entregas e a qualidade dos produtos são impecáveis.',
          author: 'Dra. Ana Martins',
          position: 'Gerente de Suprimentos - Clínica São Lucas'
        },
        testimonial3: {
          text: 'A equipe da Uni Hospitalar demonstra um profundo conhecimento do setor farmacêutico e sempre nos oferece as melhores soluções para nossas necessidades.',
          author: 'Paulo Mendes',
          position: 'Coordenador de Compras - Hospital Regional'
        }
      },
      partners: {
        title: 'Nossos Parceiros',
        subtitle: 'Empresas que confiam em nosso trabalho',
        button: 'VER TODOS OS PARCEIROS'
      },
      cta: {
        title: 'Seja um parceiro da Uni Hospitalar',
        description: 'Junte-se a nós e faça parte de uma empresa comprometida com a excelência e a qualidade em distribuição de medicamentos.',
        button: 'QUERO SER PARCEIRO'
      },
      contact: {
        title: 'Entre em contato conosco',
        subtitle: 'Estamos prontos para atender suas necessidades e responder a todas as suas dúvidas.',
        branches: {
          recife: 'Uni Hospitalar LTDA',
          fortaleza: 'Uni Hospitalar Ceará LTDA',
          saopaulo: 'SP Hospitalar LTDA'
        },
        hours: 'Segunda a Sexta: 8h às 18h'
      },
      cookies: {
        banner: {
          title: 'Utilizamos cookies',
          text: 'Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa',
          privacyPolicy: 'Política de Privacidade',
          accept: 'Aceitar',
          settings: 'Configurações'
        },
        settings: {
          title: 'Configurações de Cookies',
          essential: {
            title: 'Cookies Essenciais',
            description: 'Necessários para o funcionamento básico do site. Não podem ser desativados.'
          },
          analytics: {
            title: 'Cookies de Análise',
            description: 'Nos ajudam a entender como os visitantes interagem com o site.'
          },
          marketing: {
            title: 'Cookies de Marketing',
            description: 'Utilizados para exibir anúncios relevantes com base em seus interesses.'
          },
          save: 'Salvar Preferências'
        }
      }
    }
  },
  en: {
    home: {
      hero: {
        title: 'Respect for human relationships',
        subtitle: 'Our focus is on the distribution <br> of hospital, oncological <br> and exceptional medicines.',
        scrollIndicator: 'Scroll down'
      },
      stats: {
        title: 'Our Journey in Numbers',
        years: 'Years of Experience',
        units: 'Strategic Units',
        clients: 'Satisfied Clients',
        delivery: 'Fast Deliveries'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Discover what we offer you',
        storage: {
          title: 'STORAGE',
          description: 'Our storage area strictly follows the standards required by Anvisa.',
          link: 'Learn more'
        },
        differentials: {
          title: 'DIFFERENTIALS',
          description: 'Prepared professionals aligned with the company culture, combined with product line and logistics.',
          link: 'Learn more'
        },
        logistics: {
          title: 'LOGISTICS',
          description: 'Deliveries to the North and Northeast within 48 hours with complete safety and guarantee.',
          link: 'Learn more'
        },
        businessUnit: {
          title: 'BUSINESS UNIT',
          description: 'We are opening a new unit in Fortaleza, seeking the best service and customer care.',
          link: 'Learn more'
        },
        mainClients: {
          title: 'MAIN CLIENTS',
          description: 'Seeking to better serve the demands of the pharmaceutical market, we serve industries and hospitals, public and private, and private clinics.',
          link: 'Learn more'
        },
        mainProducts: {
          title: 'MAIN PRODUCTS',
          description: 'Focus on distribution and standardization of hospital, oncological and exceptional medicines, working in specific niches.',
          link: 'Learn more'
        }
      },
      testimonials: {
        title: 'What they say about us',
        subtitle: 'Testimonials from our partners and clients',
        testimonial1: {
          text: 'Uni Hospitalar has been an exceptional and reliable partner. Their impeccable logistical efficiency and unwavering commitment to quality make all the difference to our daily operation.',
          author: 'Dr. Carlos Silva',
          position: 'Medical Director - Santa Clara Hospital'
        },
        testimonial2: {
          text: 'We have worked with Uni Hospitalar for over 5 years and have always been served with excellence. The punctuality in deliveries and product quality are impeccable.',
          author: 'Dr. Ana Martins',
          position: 'Supply Manager - São Lucas Clinic'
        },
        testimonial3: {
          text: 'The Uni Hospitalar team demonstrates deep knowledge of the pharmaceutical sector and always offers us the best solutions for our needs.',
          author: 'Paulo Mendes',
          position: 'Purchasing Coordinator - Regional Hospital'
        }
      },
      partners: {
        title: 'Our Partners',
        subtitle: 'Companies that trust our work',
        button: 'VIEW ALL PARTNERS'
      },
      cta: {
        title: 'Become a partner of Uni Hospitalar',
        description: 'Join us and be part of a company committed to excellence and quality in medicine distribution.',
        button: 'I WANT TO BE A PARTNER'
      },
      contact: {
        title: 'Contact us',
        subtitle: 'We are ready to meet your needs and answer all your questions.',
        branches: {
          recife: 'Uni Hospitalar LTDA',
          fortaleza: 'Uni Hospitalar Ceará LTDA',
          saopaulo: 'SP Hospitalar LTDA'
        },
        hours: 'Monday to Friday: 8am to 6pm'
      },
      cookies: {
        banner: {
          title: 'We use cookies',
          text: 'This site uses cookies to improve your experience. By continuing to browse, you agree to our',
          privacyPolicy: 'Privacy Policy',
          accept: 'Accept',
          settings: 'Settings'
        },
        settings: {
          title: 'Cookie Settings',
          essential: {
            title: 'Essential Cookies',
            description: 'Necessary for basic site functionality. Cannot be disabled.'
          },
          analytics: {
            title: 'Analytics Cookies',
            description: 'Help us understand how visitors interact with the site.'
          },
          marketing: {
            title: 'Marketing Cookies',
            description: 'Used to display relevant ads based on your interests.'
          },
          save: 'Save Preferences'
        }
      }
    }
  },
  es: {
    home: {
      hero: {
        title: 'Respeto a las relaciones humanas',
        subtitle: 'Nuestro enfoque está en la distribución <br> de medicamentos hospitalarios, <br> oncológicos y excepcionales.',
        scrollIndicator: 'Desplázate hacia abajo'
      },
      stats: {
        title: 'Nuestro Recorrido en Números',
        years: 'Años de Experiencia',
        units: 'Unidades Estratégicas',
        clients: 'Clientes Satisfechos',
        delivery: 'Entregas Rápidas'
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Descubre lo que te ofrecemos',
        storage: {
          title: 'ALMACÉN',
          description: 'Nuestra área de almacenamiento sigue rigurosamente las normas exigidas por Anvisa.',
          link: 'Saber más'
        },
        differentials: {
          title: 'DIFERENCIALES',
          description: 'Profesionales preparados y alineados con la cultura de la empresa, sumado a la línea de productos y logística.',
          link: 'Saber más'
        },
        logistics: {
          title: 'LOGÍSTICA',
          description: 'Entregas para el Norte y Nordeste en hasta 48 horas con toda seguridad y garantía.',
          link: 'Saber más'
        },
        businessUnit: {
          title: 'UNIDAD DE NEGOCIOS',
          description: 'Estamos abriendo una nueva unidad en Fortaleza, en busca del mejor servicio y atención al cliente.',
          link: 'Saber más'
        },
        mainClients: {
          title: 'PRINCIPALES CLIENTES',
          description: 'Buscando atender mejor las demandas del mercado farmacéutico, atendemos a industrias y hospitales, públicos y privados y clínicas particulares.',
          link: 'Saber más'
        },
        mainProducts: {
          title: 'PRINCIPALES PRODUCTOS',
          description: 'Enfoque en la distribución y estandarización de medicamentos hospitalarios, oncológicos y excepcionales, trabajando en nichos específicos.',
          link: 'Saber más'
        }
      },
      testimonials: {
        title: 'Lo que dicen de nosotros',
        subtitle: 'Testimonios de nuestros socios y clientes',
        testimonial1: {
          text: 'Uni Hospitalar ha sido un socio excepcional y confiable. Su eficiencia logística impecable y compromiso inquebrantable con la calidad hacen toda la diferencia en nuestra operación diaria.',
          author: 'Dr. Carlos Silva',
          position: 'Director Médico - Hospital Santa Clara'
        },
        testimonial2: {
          text: 'Trabajamos con Uni Hospitalar desde hace más de 5 años y siempre hemos sido atendidos con excelencia. La puntualidad en las entregas y la calidad de los productos son impecables.',
          author: 'Dra. Ana Martins',
          position: 'Gerente de Suministros - Clínica São Lucas'
        },
        testimonial3: {
          text: 'El equipo de Uni Hospitalar demuestra un profundo conocimiento del sector farmacéutico y siempre nos ofrece las mejores soluciones para nuestras necesidades.',
          author: 'Paulo Mendes',
          position: 'Coordinador de Compras - Hospital Regional'
        }
      },
      partners: {
        title: 'Nuestros Socios',
        subtitle: 'Empresas que confían en nuestro trabajo',
        button: 'VER TODOS LOS SOCIOS'
      },
      cta: {
        title: 'Sé un socio de Uni Hospitalar',
        description: 'Únete a nosotros y forma parte de una empresa comprometida con la excelencia y la calidad en distribución de medicamentos.',
        button: 'QUIERO SER SOCIO'
      },
      contact: {
        title: 'Contáctanos',
        subtitle: 'Estamos listos para atender tus necesidades y responder todas tus preguntas.',
        branches: {
          recife: 'Uni Hospitalar LTDA',
          fortaleza: 'Uni Hospitalar Ceará LTDA',
          saopaulo: 'SP Hospitalar LTDA'
        },
        hours: 'Lunes a Viernes: 8h a 18h'
      },
      cookies: {
        banner: {
          title: 'Utilizamos cookies',
          text: 'Este sitio utiliza cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra',
          privacyPolicy: 'Política de Privacidad',
          accept: 'Aceptar',
          settings: 'Configuraciones'
        },
        settings: {
          title: 'Configuraciones de Cookies',
          essential: {
            title: 'Cookies Esenciales',
            description: 'Necesarios para el funcionamiento básico del sitio. No se pueden desactivar.'
          },
          analytics: {
            title: 'Cookies de Análisis',
            description: 'Nos ayudan a entender cómo los visitantes interactúan con el sitio.'
          },
          marketing: {
            title: 'Cookies de Marketing',
            description: 'Utilizados para mostrar anuncios relevantes basados en tus intereses.'
          },
          save: 'Guardar Preferencias'
        }
      }
    }
  }
})

export function useHomeTranslation() {
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
