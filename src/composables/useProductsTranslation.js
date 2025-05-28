import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    products: {
      heroTitle: 'Nossos Produtos',
      heroSubtitle: 'Soluções completas para o setor de saúde',
      introTitle: 'Conheça Nossa Linha de Produtos',
      introText: 'A Uni Hospitalar trabalha com uma extensa linha de produtos, procurando sempre ser complementar e oferecendo soluções eficazes no tratamento das mais diversas patologias. Nossa qualidade e compromisso são reconhecidos no mercado de saúde.',
      categories: {
        productLine: {
          title: 'LINHA DE PRODUTOS',
          description: 'A Uni Hospitalar trabalha com uma extensa linha de produtos, procurando sempre ser complementar e oferecendo desta forma soluções no tratamento das mais diversas patologias.',
          features: ['Qualidade', 'Variedade', 'Eficácia']
        },
        diverseMedicines: {
          title: 'MEDICAMENTOS DIVERSOS',
          description: 'São medicamentos utilizados para doenças crônico degenerativas que requerem especialidade para seu correto armazenamento.',
          features: ['Armazenamento Especializado', 'Controle de Temperatura', 'Rastreabilidade']
        },
        oncologyMedicines: {
          title: 'MEDICAMENTOS PARA ONCOLOGIA',
          description: 'São medicamentos quimioterápicos utilizados para o tratamento do câncer.',
          features: ['Alta Eficácia', 'Protocolos Específicos', 'Manuseio Seguro']
        },
        hospitalMedicines: {
          title: 'MEDICAMENTOS HOSPITALARES',
          description: 'São medicamentos utilizados em ambiente hospitalar necessários aos procedimentos médico-cirúrgicos.',
          features: ['Uso Hospitalar', 'Procedimentos Médicos', 'Pronta Entrega']
        }
      },
      differentialsTitle: 'Nossos Diferenciais',
      differentials: {
        logistics: {
          title: 'Logística Especializada',
          description: 'Entrega rápida e segura, com controle de temperatura e rastreabilidade completa.'
        },
        certified: {
          title: 'Produtos Certificados',
          description: 'Todos os nossos produtos possuem certificação e registro nos órgãos competentes.'
        },
        stock: {
          title: 'Estoque Estratégico',
          description: 'Mantemos estoque adequado para atender às demandas com agilidade.'
        },
        partnerships: {
          title: 'Parcerias Confiáveis',
          description: 'Trabalhamos com os melhores fornecedores do mercado farmacêutico.'
        }
      },
      catalog: {
        title: 'Catálogo Completo de Produtos',
        description: 'Acesse nosso catálogo completo com todas as linhas de produtos, especificações técnicas e informações detalhadas.',
        downloadButton: 'BAIXAR CATÁLOGO DE PRODUTOS'
      },
      cta: {
        title: 'Precisa de mais informações?',
        description: 'Nossa equipe está pronta para ajudar com informações detalhadas sobre nossos produtos e como eles podem atender às suas necessidades.',
        contactButton: 'Fale Conosco',
        catalogButton: 'Baixar Catálogo'
      }
    }
  },
  en: {
    products: {
      heroTitle: 'Our Products',
      heroSubtitle: 'Complete solutions for the healthcare sector',
      introTitle: 'Discover Our Product Line',
      introText: 'Uni Hospitalar works with an extensive product line, always seeking to be complementary and offering effective solutions in the treatment of the most diverse pathologies. Our quality and commitment are recognized in the healthcare market.',
      categories: {
        productLine: {
          title: 'PRODUCT LINE',
          description: 'Uni Hospitalar works with an extensive product line, always seeking to be complementary and thus offering solutions in the treatment of the most diverse pathologies.',
          features: ['Quality', 'Variety', 'Efficacy']
        },
        diverseMedicines: {
          title: 'DIVERSE MEDICINES',
          description: 'These are medicines used for chronic degenerative diseases that require specialty for their correct storage.',
          features: ['Specialized Storage', 'Temperature Control', 'Traceability']
        },
        oncologyMedicines: {
          title: 'ONCOLOGY MEDICINES',
          description: 'These are chemotherapy drugs used for cancer treatment.',
          features: ['High Efficacy', 'Specific Protocols', 'Safe Handling']
        },
        hospitalMedicines: {
          title: 'HOSPITAL MEDICINES',
          description: 'These are medicines used in hospital environments necessary for medical-surgical procedures.',
          features: ['Hospital Use', 'Medical Procedures', 'Ready Delivery']
        }
      },
      differentialsTitle: 'Our Differentials',
      differentials: {
        logistics: {
          title: 'Specialized Logistics',
          description: 'Fast and safe delivery, with temperature control and complete traceability.'
        },
        certified: {
          title: 'Certified Products',
          description: 'All our products have certification and registration with competent authorities.'
        },
        stock: {
          title: 'Strategic Stock',
          description: 'We maintain adequate stock to meet demands with agility.'
        },
        partnerships: {
          title: 'Reliable Partnerships',
          description: 'We work with the best suppliers in the pharmaceutical market.'
        }
      },
      catalog: {
        title: 'Complete Product Catalog',
        description: 'Access our complete catalog with all product lines, technical specifications and detailed information.',
        downloadButton: 'DOWNLOAD PRODUCT CATALOG'
      },
      cta: {
        title: 'Need more information?',
        description: 'Our team is ready to help with detailed information about our products and how they can meet your needs.',
        contactButton: 'Contact Us',
        catalogButton: 'Download Catalog'
      }
    }
  },
  es: {
    products: {
      heroTitle: 'Nuestros Productos',
      heroSubtitle: 'Soluciones completas para el sector sanitario',
      introTitle: 'Conozca Nuestra Línea de Productos',
      introText: 'Uni Hospitalar trabaja con una extensa línea de productos, buscando siempre ser complementaria y ofreciendo soluciones eficaces en el tratamiento de las más diversas patologías. Nuestra calidad y compromiso son reconocidos en el mercado de la salud.',
      categories: {
        productLine: {
          title: 'LÍNEA DE PRODUCTOS',
          description: 'Uni Hospitalar trabaja con una extensa línea de productos, buscando siempre ser complementaria y ofreciendo de esta forma soluciones en el tratamiento de las más diversas patologías.',
          features: ['Calidad', 'Variedad', 'Eficacia']
        },
        diverseMedicines: {
          title: 'MEDICAMENTOS DIVERSOS',
          description: 'Son medicamentos utilizados para enfermedades crónico degenerativas que requieren especialidad para su correcto almacenamiento.',
          features: ['Almacenamiento Especializado', 'Control de Temperatura', 'Trazabilidad']
        },
        oncologyMedicines: {
          title: 'MEDICAMENTOS PARA ONCOLOGÍA',
          description: 'Son medicamentos quimioterápicos utilizados para el tratamiento del cáncer.',
          features: ['Alta Eficacia', 'Protocolos Específicos', 'Manejo Seguro']
        },
        hospitalMedicines: {
          title: 'MEDICAMENTOS HOSPITALARIOS',
          description: 'Son medicamentos utilizados en ambiente hospitalario necesarios para los procedimientos médico-quirúrgicos.',
          features: ['Uso Hospitalario', 'Procedimientos Médicos', 'Entrega Inmediata']
        }
      },
      differentialsTitle: 'Nuestros Diferenciales',
      differentials: {
        logistics: {
          title: 'Logística Especializada',
          description: 'Entrega rápida y segura, con control de temperatura y trazabilidad completa.'
        },
        certified: {
          title: 'Productos Certificados',
          description: 'Todos nuestros productos poseen certificación y registro en los órganos competentes.'
        },
        stock: {
          title: 'Stock Estratégico',
          description: 'Mantenemos stock adecuado para atender las demandas con agilidad.'
        },
        partnerships: {
          title: 'Alianzas Confiables',
          description: 'Trabajamos con los mejores proveedores del mercado farmacéutico.'
        }
      },
      catalog: {
        title: 'Catálogo Completo de Productos',
        description: 'Acceda a nuestro catálogo completo con todas las líneas de productos, especificaciones técnicas e información detallada.',
        downloadButton: 'DESCARGAR CATÁLOGO DE PRODUCTOS'
      },
      cta: {
        title: '¿Necesita más información?',
        description: 'Nuestro equipo está listo para ayudar con información detallada sobre nuestros productos y cómo pueden satisfacer sus necesidades.',
        contactButton: 'Contáctanos',
        catalogButton: 'Descargar Catálogo'
      }
    }
  }
})

export function useProductsTranslation() {
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
