import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    responsabilidadeSocial: {
      heroTitle: 'Responsabilidade Social',
      heroSubtitle: 'Compromisso com a Sustentabilidade e Bem-Estar Social',
      overviewTitle: 'Nosso Compromisso Social',
      overviewText: 'A Uni Hospitalar está comprometida com a sustentabilidade e o bem-estar social. Acreditamos que é nosso dever contribuir para um futuro mais saudável, reduzindo o impacto ambiental de nossas operações e promovendo práticas sustentáveis em todos os nossos processos.',
      values: {
        sustainability: {
          title: 'Sustentabilidade',
          description: 'Implementamos práticas sustentáveis que reduzem nosso impacto ambiental e promovem o uso consciente de recursos naturais.'
        },
        community: {
          title: 'Comunidade',
          description: 'Apoiamos projetos sociais que promovem saúde e educação, com foco especial em populações vulneráveis.'
        },
        innovation: {
          title: 'Inovação Verde',
          description: 'Utilizamos tecnologias inovadoras para reduzir o consumo de energia e implementar soluções ambientalmente responsáveis.'
        },
        ethics: {
          title: 'Ética Empresarial',
          description: 'Mantemos os mais altos padrões éticos em todas as nossas operações, promovendo transparência e responsabilidade corporativa.'
        }
      },
      initiativesTitle: 'Nossas Iniciativas Sociais',
      initiatives: {
        wasteManagement: {
          title: 'Gestão de Resíduos',
          description: 'Adotamos políticas rigorosas de gestão de resíduos hospitalares, garantindo descarte adequado e reciclagem sempre que possível.'
        },
        energyEfficiency: {
          title: 'Eficiência Energética',
          description: 'Implementamos sistemas de energia renovável e equipamentos de baixo consumo para reduzir nossa pegada de carbono.'
        },
        socialProjects: {
          title: 'Projetos Sociais',
          description: 'Investimos em projetos que promovem saúde preventiva e educação em comunidades carentes através de parcerias locais.'
        },
        healthCampaigns: {
          title: 'Campanhas de Saúde',
          description: 'Promovemos campanhas de conscientização sobre saúde preventiva, incentivando hábitos saudáveis na comunidade.'
        },
        diversity: {
          title: 'Diversidade e Inclusão',
          description: 'Valorizamos a diversidade e promovemos um ambiente de trabalho inclusivo que respeita os direitos humanos.'
        },
        partnerships: {
          title: 'Parcerias Comunitárias',
          description: 'Estabelecemos parcerias com organizações locais para maximizar o impacto positivo de nossas ações sociais.'
        }
      },
      contactTitle: 'Participe de Nossas Iniciativas',
      contactText: 'Interessado em conhecer mais sobre nossos projetos sociais ou participar de nossas iniciativas? Entre em contato conosco.',
      contactButton: 'Saiba Mais'
    }
  },
  en: {
    responsabilidadeSocial: {
      heroTitle: 'Social Responsibility',
      heroSubtitle: 'Commitment to Sustainability and Social Well-being',
      overviewTitle: 'Our Social Commitment',
      overviewText: 'Uni Hospitalar is committed to sustainability and social well-being. We believe it is our duty to contribute to a healthier future, reducing the environmental impact of our operations and promoting sustainable practices in all our processes.',
      values: {
        sustainability: {
          title: 'Sustainability',
          description: 'We implement sustainable practices that reduce our environmental impact and promote conscious use of natural resources.'
        },
        community: {
          title: 'Community',
          description: 'We support social projects that promote health and education, with special focus on vulnerable populations.'
        },
        innovation: {
          title: 'Green Innovation',
          description: 'We use innovative technologies to reduce energy consumption and implement environmentally responsible solutions.'
        },
        ethics: {
          title: 'Business Ethics',
          description: 'We maintain the highest ethical standards in all our operations, promoting transparency and corporate responsibility.'
        }
      },
      initiativesTitle: 'Our Social Initiatives',
      initiatives: {
        wasteManagement: {
          title: 'Waste Management',
          description: 'We adopt rigorous hospital waste management policies, ensuring proper disposal and recycling whenever possible.'
        },
        energyEfficiency: {
          title: 'Energy Efficiency',
          description: 'We implement renewable energy systems and low-consumption equipment to reduce our carbon footprint.'
        },
        socialProjects: {
          title: 'Social Projects',
          description: 'We invest in projects that promote preventive health and education in underserved communities through local partnerships.'
        },
        healthCampaigns: {
          title: 'Health Campaigns',
          description: 'We promote awareness campaigns about preventive health, encouraging healthy habits in the community.'
        },
        diversity: {
          title: 'Diversity and Inclusion',
          description: 'We value diversity and promote an inclusive work environment that respects human rights.'
        },
        partnerships: {
          title: 'Community Partnerships',
          description: 'We establish partnerships with local organizations to maximize the positive impact of our social actions.'
        }
      },
      contactTitle: 'Join Our Initiatives',
      contactText: 'Interested in learning more about our social projects or participating in our initiatives? Contact us.',
      contactButton: 'Learn More'
    }
  },
  es: {
    responsabilidadeSocial: {
      heroTitle: 'Responsabilidad Social',
      heroSubtitle: 'Compromiso con la Sostenibilidad y Bienestar Social',
      overviewTitle: 'Nuestro Compromiso Social',
      overviewText: 'Uni Hospitalar está comprometida con la sostenibilidad y el bienestar social. Creemos que es nuestro deber contribuir a un futuro más saludable, reduciendo el impacto ambiental de nuestras operaciones y promoviendo prácticas sostenibles en todos nuestros procesos.',
      values: {
        sustainability: {
          title: 'Sostenibilidad',
          description: 'Implementamos prácticas sostenibles que reducen nuestro impacto ambiental y promueven el uso consciente de recursos naturales.'
        },
        community: {
          title: 'Comunidad',
          description: 'Apoyamos proyectos sociales que promueven salud y educación, con enfoque especial en poblaciones vulnerables.'
        },
        innovation: {
          title: 'Innovación Verde',
          description: 'Utilizamos tecnologías innovadoras para reducir el consumo de energía e implementar soluciones ambientalmente responsables.'
        },
        ethics: {
          title: 'Ética Empresarial',
          description: 'Mantenemos los más altos estándares éticos en todas nuestras operaciones, promoviendo transparencia y responsabilidad corporativa.'
        }
      },
      initiativesTitle: 'Nuestras Iniciativas Sociales',
      initiatives: {
        wasteManagement: {
          title: 'Gestión de Residuos',
          description: 'Adoptamos políticas rigurosas de gestión de residuos hospitalarios, garantizando disposición adecuada y reciclaje cuando sea posible.'
        },
        energyEfficiency: {
          title: 'Eficiencia Energética',
          description: 'Implementamos sistemas de energía renovable y equipos de bajo consumo para reducir nuestra huella de carbono.'
        },
        socialProjects: {
          title: 'Proyectos Sociales',
          description: 'Invertimos en proyectos que promueven salud preventiva y educación en comunidades carentes a través de alianzas locales.'
        },
        healthCampaigns: {
          title: 'Campañas de Salud',
          description: 'Promovemos campañas de concientización sobre salud preventiva, incentivando hábitos saludables en la comunidad.'
        },
        diversity: {
          title: 'Diversidad e Inclusión',
          description: 'Valoramos la diversidad y promovemos un ambiente de trabajo inclusivo que respeta los derechos humanos.'
        },
        partnerships: {
          title: 'Alianzas Comunitarias',
          description: 'Establecemos alianzas con organizaciones locales para maximizar el impacto positivo de nuestras acciones sociales.'
        }
      },
      contactTitle: 'Participa en Nuestras Iniciativas',
      contactText: '¿Interesado en conocer más sobre nuestros proyectos sociales o participar en nuestras iniciativas? Contáctanos.',
      contactButton: 'Saber Más'
    }
  }
})

export function useSocialResponsibilityTranslation() {
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
