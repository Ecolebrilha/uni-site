import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    normasSetoriais: {
      heroTitle: 'Normas Setoriais',
      heroSubtitle: 'Excelência em Conformidade Regulatória',
      
      stats: {
        certifications: {
          number: '15+',
          label: 'Certificações Ativas'
        },
        compliance: {
          number: '100%',
          label: 'Taxa de Conformidade'
        },
        monitoring: {
          number: '24/7',
          label: 'Monitoramento Contínuo'
        },
        training: {
          number: '500+',
          label: 'Funcionários Treinados'
        }
      },
      
      overview: {
        badge: 'Certificação Oficial',
        title: 'Compromisso com a Excelência Regulatória',
        description: 'Mantemos os mais altos padrões de conformidade com todas as normas setoriais aplicáveis ao setor farmacêutico e hospitalar, garantindo qualidade, segurança e eficácia em todos os nossos processos.',
        compliance: 'Conformidade',
        highlights: {
          regulatory: 'Conformidade com regulamentações nacionais e internacionais',
          quality: 'Sistemas de gestão da qualidade certificados',
          safety: 'Protocolos rigorosos de segurança e controle',
          environmental: 'Práticas sustentáveis e responsabilidade ambiental'
        }
      },
      
      standards: {
        title: 'Normas e Regulamentações',
        subtitle: 'Seguimos rigorosamente todas as normas aplicáveis ao nosso setor, mantendo certificações atualizadas e processos auditados.',
        
        categories: {
          health: {
            title: 'Regulamentações de Saúde',
            items: {
              anvisa: {
                code: 'ANVISA',
                name: 'Agência Nacional de Vigilância Sanitária'
              },
              rdc: {
                code: 'RDC',
                name: 'Resoluções da Diretoria Colegiada'
              },
              bpf: {
                code: 'BPF',
                name: 'Boas Práticas de Fabricação'
              }
            }
          },
          quality: {
            title: 'Normas de Qualidade',
            items: {
              iso9001: {
                code: 'ISO 9001',
                name: 'Sistema de Gestão da Qualidade'
              },
              iso13485: {
                code: 'ISO 13485',
                name: 'Dispositivos Médicos'
              },
              iso15378: {
                code: 'ISO 15378',
                name: 'Materiais de Embalagem Primária'
              }
            }
          },
          environmental: {
            title: 'Normas Ambientais',
            items: {
              iso14001: {
                code: 'ISO 14001',
                name: 'Sistema de Gestão Ambiental'
              },
              conama: {
                code: 'CONAMA',
                name: 'Conselho Nacional do Meio Ambiente'
              },
              pnrs: {
                code: 'PNRS',
                name: 'Política Nacional de Resíduos Sólidos'
              }
            }
          }
        }
      },
      
      audit: {
        title: 'Processo de Auditoria',
        subtitle: 'Nosso processo de auditoria é estruturado e contínuo, garantindo a manutenção dos padrões de qualidade e conformidade.',
        
        steps: {
          planning: {
            title: 'Planejamento',
            description: 'Definição do escopo, cronograma e recursos necessários para a auditoria.'
          },
          execution: {
            title: 'Execução',
            description: 'Realização das verificações e coleta de evidências conforme os critérios estabelecidos.'
          },
          analysis: {
            title: 'Análise',
            description: 'Avaliação dos resultados e identificação de não conformidades ou oportunidades de melhoria.'
          },
          improvement: {
            title: 'Melhoria',
            description: 'Implementação de ações corretivas e preventivas para garantir a melhoria contínua.'
          }
        }
      },
      
      monitoring: {
        title: 'Monitoramento Contínuo',
        description: 'Implementamos sistemas avançados de monitoramento que garantem o acompanhamento em tempo real de todos os indicadores de conformidade e qualidade.',
        
        features: {
          realtime: {
            title: 'Monitoramento em Tempo Real',
            description: 'Acompanhamento contínuo de todos os processos críticos'
          },
          alerts: {
            title: 'Sistema de Alertas',
            description: 'Notificações automáticas para desvios e não conformidades'
          },
          reports: {
            title: 'Relatórios Automatizados',
            description: 'Geração automática de relatórios de conformidade'
          },
          updates: {
            title: 'Atualizações Regulatórias',
            description: 'Acompanhamento de mudanças nas normas e regulamentações'
          }
        },
        
        dashboard: {
          title: 'Painel de Controle',
          status: 'Sistema Ativo',
          metrics: {
            compliance: 'Taxa de Conformidade',
            monitoring: 'Monitoramento',
            response: 'Tempo de Resposta',
            stable: 'Estável'
          },
          chart: 'Gráfico de Tendências de Conformidade'
        }
      },
      
      certifications: {
        title: 'Certificações e Acreditações',
        subtitle: 'Mantemos um portfólio abrangente de certificações que atestam nossa conformidade com os mais altos padrões do setor.',
        featured: 'Destaque',
        
        main: {
          title: 'Certificação Principal ISO 9001:2015',
          description: 'Nossa certificação principal que atesta a conformidade do nosso sistema de gestão da qualidade com os padrões internacionais.',
          issued: 'Emitida em:',
          issuedDate: 'Janeiro 2023',
          valid: 'Válida até:',
          validUntil: 'Janeiro 2026'
        },
        
        items: {
          gmp: {
            title: 'Boas Práticas de Fabricação',
            description: 'Certificação para processos de fabricação farmacêutica'
          },
          environmental: {
            title: 'Gestão Ambiental',
            description: 'Conformidade com normas de sustentabilidade'
          },
          safety: {
            title: 'Segurança Ocupacional',
            description: 'Padrões de segurança no trabalho'
          },
          security: {
            title: 'Segurança da Informação',
            description: 'Proteção de dados e informações sensíveis'
          }
        },
        
        status: {
          valid: 'Válida'
        }
      },
      
      contact: {
        title: 'Precisa de Mais Informações?',
        description: 'Entre em contato conosco para obter informações detalhadas sobre nossas certificações e processos de conformidade.',
        button: 'Fale Conosco'
      }
    }
  },
  
  en: {
    normasSetoriais: {
      heroTitle: 'Sector Standards',
      heroSubtitle: 'Excellence in Regulatory Compliance',
      
      stats: {
        certifications: {
          number: '15+',
          label: 'Active Certifications'
        },
        compliance: {
          number: '100%',
          label: 'Compliance Rate'
        },
        monitoring: {
          number: '24/7',
          label: 'Continuous Monitoring'
        },
        training: {
          number: '500+',
          label: 'Trained Employees'
        }
      },
      
      overview: {
        badge: 'Official Certification',
        title: 'Commitment to Regulatory Excellence',
        description: 'We maintain the highest standards of compliance with all sector standards applicable to the pharmaceutical and hospital sector, ensuring quality, safety and effectiveness in all our processes.',
        compliance: 'Compliance',
        highlights: {
          regulatory: 'Compliance with national and international regulations',
          quality: 'Certified quality management systems',
          safety: 'Rigorous safety and control protocols',
          environmental: 'Sustainable practices and environmental responsibility'
        }
      },
      
      standards: {
        title: 'Standards and Regulations',
        subtitle: 'We rigorously follow all standards applicable to our sector, maintaining updated certifications and audited processes.',
        
        categories: {
          health: {
            title: 'Health Regulations',
            items: {
              anvisa: {
                code: 'ANVISA',
                name: 'National Health Surveillance Agency'
              },
              rdc: {
                code: 'RDC',
                name: 'Collegiate Board Resolutions'
              },
              bpf: {
                code: 'GMP',
                name: 'Good Manufacturing Practices'
              }
            }
          },
          quality: {
            title: 'Quality Standards',
            items: {
              iso9001: {
                code: 'ISO 9001',
                name: 'Quality Management System'
              },
              iso13485: {
                code: 'ISO 13485',
                name: 'Medical Devices'
              },
              iso15378: {
                code: 'ISO 15378',
                name: 'Primary Packaging Materials'
              }
            }
          },
          environmental: {
            title: 'Environmental Standards',
            items: {
              iso14001: {
                code: 'ISO 14001',
                name: 'Environmental Management System'
              },
              conama: {
                code: 'CONAMA',
                name: 'National Environment Council'
              },
              pnrs: {
                code: 'NSWP',
                name: 'National Solid Waste Policy'
              }
            }
          }
        }
      },
      
      audit: {
        title: 'Audit Process',
        subtitle: 'Our audit process is structured and continuous, ensuring the maintenance of quality and compliance standards.',
        
        steps: {
          planning: {
            title: 'Planning',
            description: 'Definition of scope, schedule and resources needed for the audit.'
          },
          execution: {
            title: 'Execution',
            description: 'Performing verifications and collecting evidence according to established criteria.'
          },
          analysis: {
            title: 'Analysis',
            description: 'Evaluation of results and identification of non-conformities or improvement opportunities.'
          },
          improvement: {
            title: 'Improvement',
            description: 'Implementation of corrective and preventive actions to ensure continuous improvement.'
          }
        }
      },
      
      monitoring: {
        title: 'Continuous Monitoring',
        description: 'We implement advanced monitoring systems that ensure real-time tracking of all compliance and quality indicators.',
        
        features: {
          realtime: {
            title: 'Real-Time Monitoring',
            description: 'Continuous monitoring of all critical processes'
          },
          alerts: {
            title: 'Alert System',
            description: 'Automatic notifications for deviations and non-conformities'
          },
          reports: {
            title: 'Automated Reports',
            description: 'Automatic generation of compliance reports'
          },
          updates: {
            title: 'Regulatory Updates',
            description: 'Tracking changes in standards and regulations'
          }
        },
        
        dashboard: {
          title: 'Control Panel',
          status: 'System Active',
          metrics: {
            compliance: 'Compliance Rate',
            monitoring: 'Monitoring',
            response: 'Response Time',
            stable: 'Stable'
          },
          chart: 'Compliance Trends Chart'
        }
      },
      
      certifications: {
        title: 'Certifications and Accreditations',
        subtitle: 'We maintain a comprehensive portfolio of certifications that attest to our compliance with the highest industry standards.',
        featured: 'Featured',
        
        main: {
          title: 'Main Certification ISO 9001:2015',
          description: 'Our main certification that attests to the compliance of our quality management system with international standards.',
          issued: 'Issued on:',
          issuedDate: 'January 2023',
          valid: 'Valid until:',
          validUntil: 'January 2026'
        },
        
        items: {
          gmp: {
            title: 'Good Manufacturing Practices',
            description: 'Certification for pharmaceutical manufacturing processes'
          },
          environmental: {
            title: 'Environmental Management',
            description: 'Compliance with sustainability standards'
          },
          safety: {
            title: 'Occupational Safety',
            description: 'Workplace safety standards'
          },
          security: {
            title: 'Information Security',
            description: 'Protection of data and sensitive information'
          }
        },
        
        status: {
          valid: 'Valid'
        }
      },
      
      contact: {
        title: 'Need More Information?',
        description: 'Contact us to obtain detailed information about our certifications and compliance processes.',
        button: 'Contact Us'
      }
    }
  },
  
  es: {
    normasSetoriais: {
      heroTitle: 'Normas Sectoriales',
      heroSubtitle: 'Excelencia en Cumplimiento Regulatorio',
      
      stats: {
        certifications: {
          number: '15+',
          label: 'Certificaciones Activas'
        },
        compliance: {
          number: '100%',
          label: 'Tasa de Cumplimiento'
        },
        monitoring: {
          number: '24/7',
          label: 'Monitoreo Continuo'
        },
        training: {
          number: '500+',
          label: 'Empleados Capacitados'
        }
      },
      
      overview: {
        badge: 'Certificación Oficial',
        title: 'Compromiso con la Excelencia Regulatoria',
        description: 'Mantenemos los más altos estándares de cumplimiento con todas las normas sectoriales aplicables al sector farmacéutico y hospitalario, garantizando calidad, seguridad y eficacia en todos nuestros procesos.',
        compliance: 'Cumplimiento',
        highlights: {
          regulatory: 'Cumplimiento con regulaciones nacionales e internacionales',
          quality: 'Sistemas de gestión de calidad certificados',
          safety: 'Protocolos rigurosos de seguridad y control',
          environmental: 'Prácticas sostenibles y responsabilidad ambiental'
        }
      },
      
      standards: {
        title: 'Normas y Regulaciones',
        subtitle: 'Seguimos rigurosamente todas las normas aplicables a nuestro sector, manteniendo certificaciones actualizadas y procesos auditados.',
        
        categories: {
          health: {
            title: 'Regulaciones de Salud',
            items: {
              anvisa: {
                code: 'ANVISA',
                name: 'Agencia Nacional de Vigilancia Sanitaria'
              },
              rdc: {
                code: 'RDC',
                name: 'Resoluciones de la Dirección Colegiada'
              },
              bpf: {
                code: 'BPF',
                name: 'Buenas Prácticas de Fabricación'
              }
            }
          },
          quality: {
            title: 'Normas de Calidad',
            items: {
              iso9001: {
                code: 'ISO 9001',
                name: 'Sistema de Gestión de Calidad'
              },
              iso13485: {
                code: 'ISO 13485',
                name: 'Dispositivos Médicos'
              },
              iso15378: {
                code: 'ISO 15378',
                name: 'Materiales de Embalaje Primario'
              }
            }
          },
          environmental: {
            title: 'Normas Ambientales',
            items: {
              iso14001: {
                code: 'ISO 14001',
                name: 'Sistema de Gestión Ambiental'
              },
              conama: {
                code: 'CONAMA',
                name: 'Consejo Nacional del Medio Ambiente'
              },
              pnrs: {
                code: 'PNRS',
                name: 'Política Nacional de Residuos Sólidos'
              }
            }
          }
        }
      },
      
      audit: {
        title: 'Proceso de Auditoría',
        subtitle: 'Nuestro proceso de auditoría es estructurado y continuo, garantizando el mantenimiento de los estándares de calidad y cumplimiento.',
        
        steps: {
          planning: {
            title: 'Planificación',
            description: 'Definición del alcance, cronograma y recursos necesarios para la auditoría.'
          },
          execution: {
            title: 'Ejecución',
            description: 'Realización de verificaciones y recolección de evidencias según los criterios establecidos.'
          },
          analysis: {
            title: 'Análisis',
            description: 'Evaluación de resultados e identificación de no conformidades u oportunidades de mejora.'
          },
          improvement: {
            title: 'Mejora',
            description: 'Implementación de acciones correctivas y preventivas para garantizar la mejora continua.'
          }
        }
      },
      
      monitoring: {
        title: 'Monitoreo Continuo',
        description: 'Implementamos sistemas avanzados de monitoreo que garantizan el seguimiento en tiempo real de todos los indicadores de cumplimiento y calidad.',
        
        features: {
          realtime: {
            title: 'Monitoreo en Tiempo Real',
            description: 'Seguimiento continuo de todos los procesos críticos'
          },
          alerts: {
            title: 'Sistema de Alertas',
            description: 'Notificaciones automáticas para desviaciones y no conformidades'
          },
          reports: {
            title: 'Reportes Automatizados',
            description: 'Generación automática de reportes de cumplimiento'
          },
          updates: {
            title: 'Actualizaciones Regulatorias',
            description: 'Seguimiento de cambios en normas y regulaciones'
          }
        },
        
        dashboard: {
          title: 'Panel de Control',
          status: 'Sistema Activo',
          metrics: {
            compliance: 'Tasa de Cumplimiento',
            monitoring: 'Monitoreo',
            response: 'Tiempo de Respuesta',
            stable: 'Estable'
          },
          chart: 'Gráfico de Tendencias de Cumplimiento'
        }
      },
      
      certifications: {
        title: 'Certificaciones y Acreditaciones',
        subtitle: 'Mantenemos un portafolio integral de certificaciones que atestiguan nuestro cumplimiento con los más altos estándares del sector.',
        featured: 'Destacado',
        
        main: {
          title: 'Certificación Principal ISO 9001:2015',
          description: 'Nuestra certificación principal que atestigua el cumplimiento de nuestro sistema de gestión de calidad con los estándares internacionales.',
          issued: 'Emitida en:',
          issuedDate: 'Enero 2023',
          valid: 'Válida hasta:',
          validUntil: 'Enero 2026'
        },
        
        items: {
          gmp: {
            title: 'Buenas Prácticas de Fabricación',
            description: 'Certificación para procesos de fabricación farmacéutica'
          },
          environmental: {
            title: 'Gestión Ambiental',
            description: 'Cumplimiento con normas de sostenibilidad'
          },
          safety: {
            title: 'Seguridad Ocupacional',
            description: 'Estándares de seguridad en el trabajo'
          },
          security: {
            title: 'Seguridad de la Información',
            description: 'Protección de datos e información sensible'
          }
        },
        
        status: {
          valid: 'Válida'
        }
      },
      
      contact: {
        title: '¿Necesita Más Información?',
        description: 'Contáctenos para obtener información detallada sobre nuestras certificaciones y procesos de cumplimiento.',
        button: 'Contáctanos'
      }
    }
  }
})

export function useSectorStandardsTranslation() {
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
