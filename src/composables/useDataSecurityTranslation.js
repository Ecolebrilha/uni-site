import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    segurancaDados: {
      heroTitle: 'Segurança de Dados',
      heroSubtitle: 'Proteção Máxima com Tecnologia de Ponta',
      
      stats: {
        uptime: 'Disponibilidade',
        encryption: 'Criptografia',
        monitoring: 'Monitoramento',
        compliance: 'Conformidade'
      },
      
      layersTitle: 'Proteção em Múltiplas Camadas',
      layersSubtitle: 'Nossa arquitetura de segurança implementa proteção em diferentes níveis para garantir máxima segurança dos dados.',
      
      layers: {
        perimeter: {
          title: 'Proteção Perimetral',
          description: 'Firewalls avançados e sistemas de detecção de intrusão protegem nossa infraestrutura contra ameaças externas.'
        },
        access: {
          title: 'Controle de Acesso',
          description: 'Autenticação multifator e controles rigorosos garantem que apenas usuários autorizados acessem os sistemas.'
        },
        encryption: {
          title: 'Criptografia de Dados',
          description: 'Todos os dados são criptografados em trânsito e em repouso usando algoritmos de criptografia de última geração.'
        },
        monitoring: {
          title: 'Monitoramento Contínuo',
          description: 'Sistemas de monitoramento 24/7 detectam e respondem a qualquer atividade suspeita em tempo real.'
        }
      },
      
      certificationsTitle: 'Certificações e Conformidade',
      certificationsSubtitle: 'Mantemos as mais rigorosas certificações de segurança e conformidade regulatória.',
      
      certifications: {
        lgpd: {
          title: 'Lei Geral de Proteção de Dados',
          description: 'Conformidade total com a legislação brasileira de proteção de dados pessoais.'
        },
        gdpr: {
          title: 'Regulamento Geral de Proteção de Dados',
          description: 'Aderência às normas europeias de proteção de dados e privacidade.'
        },
        iso: {
          title: 'ISO 27001:2013',
          description: 'Certificação internacional em gestão de segurança da informação.'
        },
        compliant: 'Conforme',
        certified: 'Certificado'
      },
      
      techTitle: 'Tecnologias de Segurança',
      techSubtitle: 'Utilizamos as mais avançadas tecnologias para proteger seus dados.',
      
      tech: {
        infrastructure: {
          title: 'Infraestrutura Segura',
          item1: 'Data centers certificados Tier III',
          item2: 'Redundância geográfica',
          item3: 'Backup automático diário'
        },
        network: {
          title: 'Segurança de Rede',
          item1: 'Firewall de próxima geração',
          item2: 'VPN criptografada',
          item3: 'Detecção de intrusão'
        },
        data: {
          title: 'Proteção de Dados',
          item1: 'Criptografia AES-256',
          item2: 'Tokenização de dados sensíveis',
          item3: 'Controle de acesso baseado em função'
        },
        monitoring: {
          title: 'Monitoramento e Análise',
          item1: 'SIEM em tempo real',
          item2: 'Análise comportamental',
          item3: 'Resposta automatizada a incidentes'
        }
      },
      
      ctaTitle: 'Precisa de Mais Informações?',
      ctaText: 'Entre em contato conosco para saber mais sobre nossas políticas de segurança e como protegemos seus dados.',
      
      ctaButtons: {
        privacy: 'Política de Privacidade',
        contact: 'Fale Conosco'
      }
    }
  },
  en: {
    segurancaDados: {
      heroTitle: 'Data Security',
      heroSubtitle: 'Maximum Protection with Cutting-Edge Technology',
      
      stats: {
        uptime: 'Uptime',
        encryption: 'Encryption',
        monitoring: 'Monitoring',
        compliance: 'Compliance'
      },
      
      layersTitle: 'Multi-Layer Protection',
      layersSubtitle: 'Our security architecture implements protection at different levels to ensure maximum data security.',
      
      layers: {
        perimeter: {
          title: 'Perimeter Protection',
          description: 'Advanced firewalls and intrusion detection systems protect our infrastructure against external threats.'
        },
        access: {
          title: 'Access Control',
          description: 'Multi-factor authentication and strict controls ensure only authorized users access the systems.'
        },
        encryption: {
          title: 'Data Encryption',
          description: 'All data is encrypted in transit and at rest using state-of-the-art encryption algorithms.'
        },
        monitoring: {
          title: 'Continuous Monitoring',
          description: '24/7 monitoring systems detect and respond to any suspicious activity in real time.'
        }
      },
      
      certificationsTitle: 'Certifications and Compliance',
      certificationsSubtitle: 'We maintain the most rigorous security certifications and regulatory compliance.',
      
      certifications: {
        lgpd: {
          title: 'General Data Protection Law',
          description: 'Full compliance with Brazilian personal data protection legislation.'
        },
        gdpr: {
          title: 'General Data Protection Regulation',
          description: 'Adherence to European data protection and privacy standards.'
        },
        iso: {
          title: 'ISO 27001:2013',
          description: 'International certification in information security management.'
        },
        compliant: 'Compliant',
        certified: 'Certified'
      },
      
      techTitle: 'Security Technologies',
      techSubtitle: 'We use the most advanced technologies to protect your data.',
      
      tech: {
        infrastructure: {
          title: 'Secure Infrastructure',
          item1: 'Tier III certified data centers',
          item2: 'Geographic redundancy',
          item3: 'Daily automatic backup'
        },
        network: {
          title: 'Network Security',
          item1: 'Next-generation firewall',
          item2: 'Encrypted VPN',
          item3: 'Intrusion detection'
        },
        data: {
          title: 'Data Protection',
          item1: 'AES-256 encryption',
          item2: 'Sensitive data tokenization',
          item3: 'Role-based access control'
        },
        monitoring: {
          title: 'Monitoring and Analysis',
          item1: 'Real-time SIEM',
          item2: 'Behavioral analysis',
          item3: 'Automated incident response'
        }
      },
      
      ctaTitle: 'Need More Information?',
      ctaText: 'Contact us to learn more about our security policies and how we protect your data.',
      
      ctaButtons: {
        privacy: 'Privacy Policy',
        contact: 'Contact Us'
      }
    }
  },
  es: {
    segurancaDados: {
      heroTitle: 'Seguridad de Datos',
      heroSubtitle: 'Protección Máxima con Tecnología de Vanguardia',
      
      stats: {
        uptime: 'Disponibilidad',
        encryption: 'Encriptación',
        monitoring: 'Monitoreo',
        compliance: 'Cumplimiento'
      },
      
      layersTitle: 'Protección en Múltiples Capas',
      layersSubtitle: 'Nuestra arquitectura de seguridad implementa protección en diferentes niveles para garantizar máxima seguridad de los datos.',
      
      layers: {
        perimeter: {
          title: 'Protección Perimetral',
          description: 'Firewalls avanzados y sistemas de detección de intrusiones protegen nuestra infraestructura contra amenazas externas.'
        },
        access: {
          title: 'Control de Acceso',
          description: 'Autenticación multifactor y controles estrictos garantizan que solo usuarios autorizados accedan a los sistemas.'
        },
        encryption: {
          title: 'Encriptación de Datos',
          description: 'Todos los datos están encriptados en tránsito y en reposo usando algoritmos de encriptación de última generación.'
        },
        monitoring: {
          title: 'Monitoreo Continuo',
          description: 'Sistemas de monitoreo 24/7 detectan y responden a cualquier actividad sospechosa en tiempo real.'
        }
      },
      
      certificationsTitle: 'Certificaciones y Cumplimiento',
      certificationsSubtitle: 'Mantenemos las más rigurosas certificaciones de seguridad y cumplimiento regulatorio.',
      
      certifications: {
        lgpd: {
          title: 'Ley General de Protección de Datos',
          description: 'Cumplimiento total con la legislación brasileña de protección de datos personales.'
        },
        gdpr: {
          title: 'Reglamento General de Protección de Datos',
          description: 'Adherencia a las normas europeas de protección de datos y privacidad.'
        },
        iso: {
          title: 'ISO 27001:2013',
          description: 'Certificación internacional en gestión de seguridad de la información.'
        },
        compliant: 'Conforme',
        certified: 'Certificado'
      },
      
      techTitle: 'Tecnologías de Seguridad',
      techSubtitle: 'Utilizamos las tecnologías más avanzadas para proteger sus datos.',
      
      tech: {
        infrastructure: {
          title: 'Infraestructura Segura',
          item1: 'Centros de datos certificados Tier III',
          item2: 'Redundancia geográfica',
          item3: 'Respaldo automático diario'
        },
        network: {
          title: 'Seguridad de Red',
          item1: 'Firewall de próxima generación',
          item2: 'VPN encriptada',
          item3: 'Detección de intrusiones'
        },
        data: {
          title: 'Protección de Datos',
          item1: 'Encriptación AES-256',
          item2: 'Tokenización de datos sensibles',
          item3: 'Control de acceso basado en roles'
        },
        monitoring: {
          title: 'Monitoreo y Análisis',
          item1: 'SIEM en tiempo real',
          item2: 'Análisis comportamental',
          item3: 'Respuesta automatizada a incidentes'
        }
      },
      
      ctaTitle: '¿Necesita Más Información?',
      ctaText: 'Contáctenos para saber más sobre nuestras políticas de seguridad y cómo protegemos sus datos.',
      
      ctaButtons: {
        privacy: 'Política de Privacidad',
        contact: 'Contáctanos'
      }
    }
  }
})

export function useDataSecurityTranslation() {
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
