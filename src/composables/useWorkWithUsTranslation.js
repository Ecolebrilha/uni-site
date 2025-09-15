import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    career: {
      heroTitle: 'Trabalhe Conosco',
      heroSubtitle: 'Faça parte do nosso time',
      introTitle: 'Junte-se à Nossa Equipe',
      introText: 'Na Uni Hospitalar, acreditamos que nossos colaboradores são o principal pilar da nossa trajetória. Aqui, cada talento encontra a oportunidade única de trilhar seu próprio caminho e crescer em um ambiente de apoio, colaboração e diversidade. Nossa força está nas pessoas que compartilham nossos valores e nos ajudam a transformar a distribuição de medicamentos com ética, integridade, inovação e qualidade.',
      introText2: 'Se você busca fazer a diferença e desenvolver seu potencial em uma cultura que valoriza o crescimento pessoal e profissional, venha fazer parte do nosso time.',
      values: {
        title: 'Nossos Valores',
        integrity: {
          title: 'Integridade',
          description: 'Agimos com ética, transparência e responsabilidade em todas as nossas relações.'
        },
        collaboration: {
          title: 'Colaboração',
          description: 'Trabalhamos juntos, valorizando sempre a diversidade, a inclusão e o respeito mútuo.'
        },
        innovation: {
          title: 'Inovação',
          description: 'Reinventar-se é parte da nossa jornada. Unimos resiliência e criatividade para desenvolver soluções que fortalecem a distribuição de medicamentos e criam novas oportunidades de crescimento.'
        },
        excellence: {
          title: 'Excelência',
          description: 'A excelência guia nossas ações: buscamos sempre ir além, transformando dedicação e atenção aos detalhes em resultados extraordinários.'
        }
      },
      jobs: {
        title: 'Vagas Disponíveis',
        intro: 'Confira nossas oportunidades atuais e candidate-se à vaga que mais combina com seu perfil.',
        loading: 'Carregando vagas disponíveis...',
        applyButton: 'Candidatar-se',
        noJobs: {
          title: 'Nenhuma vaga disponível no momento',
          description: 'Não temos vagas abertas atualmente, mas você pode enviar seu currículo para nosso banco de talentos. Entraremos em contato quando surgir uma oportunidade compatível com seu perfil.',
          talentBankButton: 'Cadastrar no Banco de Talentos'
        },
        expandButtons: {
          seeMore: 'Ver mais',
          seeLess: 'Ver menos',
          seeComplete: 'Ver descrição completa',
          seeLessDetails: 'Ver menos detalhes',
          moreRequirements: 'requisitos',
          moreBenefits: 'benefícios'
        },
        sections: {
          description: 'Descrição da Vaga:',
          detailedDescription: 'Descrição Detalhada:',
          mainRequirements: 'Requisitos Principais:',
          additionalRequirements: 'Requisitos Adicionais:',
          benefits: 'Benefícios:'
        }
      },
      form: {
        applicationTitle: 'Candidatar-se para:',
        talentBankTitle: 'Banco de Talentos',
        backToJobs: 'Voltar às vagas',
        applicationIntro: 'Preencha o formulário abaixo para se candidatar a esta vaga. Anexe seu currículo e nos conte um pouco sobre você e suas expectativas.',
        talentBankIntro: 'Preencha o formulário abaixo para fazer parte do nosso banco de talentos. Entraremos em contato quando surgir uma oportunidade compatível com seu perfil.',
        fields: {
          name: {
            label: 'Nome Completo',
            placeholder: 'Seu nome completo'
          },
          email: {
            label: 'E-mail',
            placeholder: 'seu.email@exemplo.com'
          },
          phone: {
            label: 'Telefone',
            placeholder: '(00) 00000-0000'
          },
          position: {
            label: 'Área de Interesse',
            placeholder: 'Selecione uma área',
            options: {
              administrative: 'Administrativo',
              commercial: 'Comercial',
              inventory: 'Estoque',
              financial: 'Financeiro',
              fiscal: 'Fiscal',
              bidding: 'Licitação',
              logistics: 'Logística',
              it: 'TI',
              other: 'Outro'
            }
          },
          education: {
            label: 'Formação Acadêmica',
            placeholder: 'Selecione sua formação',
            options: {
              highSchool: 'Ensino Médio',
              technical: 'Ensino Técnico',
              universityIncomplete: 'Ensino Superior Incompleto',
              universityComplete: 'Ensino Superior Completo',
              postGrad: 'Pós-graduação',
              masters: 'Mestrado',
              doctorate: 'Doutorado'
            }
          },
          experience: {
            label: 'Experiência Profissional',
            placeholder: 'Selecione sua experiência',
            options: {
              noExperience: 'Sem experiência',
              upTo1Year: 'Até 1 ano',
              from1To3Years: '1 a 3 anos',
              from3To5Years: '3 a 5 anos',
              from5To10Years: '5 a 10 anos',
              moreThan10Years: 'Mais de 10 anos'
            }
          },
          resume: {
            label: 'Currículo (PDF)',
            placeholder: 'Clique para anexar seu currículo (PDF)'
          },
          message: {
            label: 'Apresentação Pessoal',
            placeholder: 'Conte-nos um pouco sobre você, suas experiências, motivações e por que gostaria de trabalhar na Uni Hospitalar...'
          },
          expectations: {
            label: 'Expectativas Salariais',
            placeholder: 'Ex: R$ 3.000,00 - R$ 4.000,00 (opcional)'
          },
          privacy: {
            label: 'Autorizo a Uni Hospitalar a manter em seu banco de talentos meus dados pessoais fornecidos durante a candidatura e processo seletivo, permitindo que eu seja considerado para futuras oportunidades compatíveis com meu perfil profissional.',
            disclaimer1: 'Se você optar por não autorizar, utilizaremos seus dados apenas para esta candidatura específica. Após a conclusão do processo seletivo, seus dados serão eliminados, preservando somente as informações necessárias para registro histórico e cumprimento de obrigações legais. Você pode revogar esta autorização a qualquer momento através de contato com o nosso DPO.',
            disclaimer2: 'Para mais informações sobre como tratamos seus dados pessoais, acesse nosso',
            privacyNoticeLink: 'Aviso de Privacidade'
          }
        },
        buttons: {
          cancel: 'Cancelar',
          submit: 'Enviar Candidatura',
          submitting: 'Enviando...'
        },
        validation: {
          pdfOnly: 'Por favor, selecione apenas arquivos PDF.',
          fileSize: 'O arquivo deve ter no máximo 5MB.',
          nameRequired: 'Nome é obrigatório.',
          emailRequired: 'E-mail é obrigatório.',
          emailInvalid: 'E-mail inválido.',
          phoneRequired: 'Telefone é obrigatório.',
          positionRequired: 'Área de interesse é obrigatória.',
          educationRequired: 'Formação acadêmica é obrigatória.',
          experienceRequired: 'Experiência profissional é obrigatória.',
          resumeRequired: 'Currículo é obrigatório.',
          messageRequired: 'Apresentação pessoal é obrigatória.'
        },
        errors: {
          submitError: 'Erro ao enviar candidatura. ',
          connectionError: 'Verifique sua conexão com a internet e tente novamente.',
          pdfError: 'Problema com o arquivo PDF. Verifique se o arquivo não está corrompido.',
          genericError: 'Tente novamente em alguns instantes.'
        }
      },
      success: {
        applicationTitle: 'Candidatura Enviada com Sucesso!',
        talentBankTitle: 'Cadastro no Banco de Talentos Realizado!',
        applicationMessage: 'Sua candidatura foi enviada com sucesso. Nossa equipe de recursos humanos analisará seu perfil e entrará em contato em breve.',
        talentBankMessage: 'Seu perfil foi adicionado ao nosso banco de talentos. Entraremos em contato quando surgir uma oportunidade compatível.',
        nextSteps: {
          title: 'Próximos passos:',
          application: {
            confirmation: 'Você receberá um e-mail de confirmação',
            analysis: 'Nossa equipe analisará seu perfil',
            contact: 'Entraremos em contato em breve'
          },
          talentBank: {
            title: 'O que acontece agora:',
            saved: 'Seu perfil foi salvo em nosso sistema',
            notifications: 'Você será notificado sobre novas oportunidades',
            contact: 'Manteremos contato para futuras vagas'
          }
        },
        buttons: {
          backHome: 'Voltar ao Início',
          viewMoreJobs: 'Ver Mais Vagas'
        }
      }
    }
  },
  en: {
    career: {
      heroTitle: 'Work With Us',
      heroSubtitle: 'Join our team',
      introTitle: 'Join Our Team',
      introText: 'At Uni Hospitalar, we believe that our employees are the main pillar of our journey. Here, each talent finds the unique opportunity to chart their own path and grow in an environment of support, collaboration and diversity. Our strength lies in the people who share our values and help us transform pharmaceutical distribution with ethics, integrity, innovation and quality.',
      introText2: 'If you seek to make a difference and develop your potential in a culture that values personal and professional growth, come be part of our team.',
      values: {
        title: 'Our Values',
        integrity: {
          title: 'Integrity',
          description: 'We act with ethics, transparency and responsibility in all our relationships.'
        },
        collaboration: {
          title: 'Collaboration',
          description: 'We work together, always valuing diversity, inclusion and mutual respect.'
        },
        innovation: {
          title: 'Innovation',
          description: 'Reinventing ourselves is part of our journey. We combine resilience and creativity to develop solutions that strengthen pharmaceutical distribution and create new growth opportunities.'
        },
        excellence: {
          title: 'Excellence',
          description: 'Excellence guides our actions: we always seek to go beyond, transforming dedication and attention to detail into extraordinary results.'
        }
      },
      jobs: {
        title: 'Available Positions',
        intro: 'Check out our current opportunities and apply for the position that best matches your profile.',
        loading: 'Loading available positions...',
        applyButton: 'Apply',
        noJobs: {
          title: 'No positions available at the moment',
          description: 'We currently have no open positions, but you can send your resume to our talent pool. We will contact you when an opportunity compatible with your profile arises.',
          talentBankButton: 'Register in Talent Pool'
        },
        expandButtons: {
          seeMore: 'See more',
          seeLess: 'See less',
          seeComplete: 'See complete description',
          seeLessDetails: 'See less details',
          moreRequirements: 'requirements',
          moreBenefits: 'benefits'
        },
        sections: {
          description: 'Job Description:',
          detailedDescription: 'Detailed Description:',
          mainRequirements: 'Main Requirements:',
          additionalRequirements: 'Additional Requirements:',
          benefits: 'Benefits:'
        }
      },
      form: {
        applicationTitle: 'Apply for:',
        talentBankTitle: 'Talent Pool',
        backToJobs: 'Back to jobs',
        applicationIntro: 'Fill out the form below to apply for this position. Attach your resume and tell us a little about yourself and your expectations.',
        talentBankIntro: 'Fill out the form below to join our talent pool. We will contact you when an opportunity compatible with your profile arises.',
        fields: {
          name: {
            label: 'Full Name',
            placeholder: 'Your full name'
          },
          email: {
            label: 'Email',
            placeholder: 'your.email@example.com'
          },
          phone: {
            label: 'Phone',
            placeholder: '(00) 00000-0000'
          },
          position: {
            label: 'Area of Interest',
            placeholder: 'Select an area',
            options: {
              administrative: 'Administrative',
              commercial: 'Commercial',
              inventory: 'Inventory',
              financial: 'Financial',
              fiscal: 'Fiscal',
              bidding: 'Bidding',
              logistics: 'Logistics',
              it: 'IT',
              other: 'Other'
            }
          },
          education: {
            label: 'Academic Background',
            placeholder: 'Select your education',
            options: {
              highSchool: 'High School',
              technical: 'Technical Education',
              universityIncomplete: 'Incomplete University',
              universityComplete: 'Complete University',
              postGrad: 'Post-graduation',
              masters: 'Masters',
              doctorate: 'Doctorate'
            }
          },
          experience: {
            label: 'Professional Experience',
            placeholder: 'Select your experience',
            options: {
              noExperience: 'No experience',
              upTo1Year: 'Up to 1 year',
              from1To3Years: '1 to 3 years',
              from3To5Years: '3 to 5 years',
              from5To10Years: '5 to 10 years',
              moreThan10Years: 'More than 10 years'
            }
          },
          resume: {
            label: 'Resume (PDF)',
            placeholder: 'Click to attach your resume (PDF)'
          },
          message: {
            label: 'Personal Presentation',
            placeholder: 'Tell us a little about yourself, your experiences, motivations and why you would like to work at Uni Hospitalar...'
          },
          expectations: {
            label: 'Salary Expectations',
            placeholder: 'Ex: R$ 3,000.00 - R$ 4,000.00 (optional)'
          },
          privacy: {
            label: 'I authorize Uni Hospitalar to maintain my personal data provided during the application and selection process in its talent pool, allowing me to be considered for future opportunities compatible with my professional profile.',
            disclaimer1: 'If you choose not to authorize, we will use your data only for this specific application. After completion of the selection process, your data will be deleted, preserving only the information necessary for historical records and compliance with legal obligations. You can revoke this authorization at any time by contacting our DPO.',
            disclaimer2: 'For more information on how we handle your personal data, access our',
            privacyNoticeLink: 'Privacy Notice'
          }
        },
        buttons: {
          cancel: 'Cancel',
          submit: 'Send Application',
          submitting: 'Sending...'
        },
        validation: {
          pdfOnly: 'Please select only PDF files.',
          fileSize: 'File must be no larger than 5MB.',
          nameRequired: 'Name is required.',
          emailRequired: 'Email is required.',
          emailInvalid: 'Invalid email.',
          phoneRequired: 'Phone is required.',
          positionRequired: 'Area of interest is required.',
          educationRequired: 'Academic background is required.',
          experienceRequired: 'Professional experience is required.',
          resumeRequired: 'Resume is required.',
          messageRequired: 'Personal presentation is required.'
        },
        errors: {
          submitError: 'Error sending application. ',
          connectionError: 'Check your internet connection and try again.',
          pdfError: 'Problem with PDF file. Check if the file is not corrupted.',
          genericError: 'Please try again in a few moments.'
        }
      },
      success: {
        applicationTitle: 'Application Sent Successfully!',
        talentBankTitle: 'Talent Pool Registration Completed!',
        applicationMessage: 'Your application has been sent successfully. Our human resources team will analyze your profile and contact you soon.',
        talentBankMessage: 'Your profile has been added to our talent pool. We will contact you when a compatible opportunity arises.',
        nextSteps: {
          title: 'Next steps:',
          application: {
            confirmation: 'You will receive a confirmation email',
            analysis: 'Our team will analyze your profile',
            contact: 'We will contact you soon'
          },
          talentBank: {
            title: 'What happens now:',
            saved: 'Your profile has been saved in our system',
            notifications: 'You will be notified about new opportunities',
            contact: 'We will stay in touch for future positions'
          }
        },
        buttons: {
          backHome: 'Back to Home',
          viewMoreJobs: 'View More Jobs'
        }
      }
    }
  },
  es: {
    career: {
      heroTitle: 'Trabaja con Nosotros',
      heroSubtitle: 'Forma parte de nuestro equipo',
      introTitle: 'Únete a Nuestro Equipo',
      introText: 'En Uni Hospitalar, creemos que nuestros colaboradores son el pilar principal de nuestra trayectoria. Aquí, cada talento encuentra la oportunidad única de trazar su propio camino y crecer en un ambiente de apoyo, colaboración y diversidad. Nuestra fuerza está en las personas que comparten nuestros valores y nos ayudan a transformar la distribución de medicamentos con ética, integridad, innovación y calidad.',
      introText2: 'Si buscas hacer la diferencia y desarrollar tu potencial en una cultura que valora el crecimiento personal y profesional, ven a formar parte de nuestro equipo.',
      values: {
        title: 'Nuestros Valores',
        integrity: {
          title: 'Integridad',
          description: 'Actuamos con ética, transparencia y responsabilidad en todas nuestras relaciones.'
        },
        collaboration: {
          title: 'Colaboración',
          description: 'Trabajamos juntos, valorando siempre la diversidad, la inclusión y el respeto mutuo.'
        },
        innovation: {
          title: 'Innovación',
          description: 'Reinventarse es parte de nuestro viaje. Unimos resistencia y creatividad para desarrollar soluciones que fortalecen la distribución de medicamentos y crean nuevas oportunidades de crecimiento.'
        },
        excellence: {
          title: 'Excelencia',
          description: 'La excelencia guía nuestras acciones: buscamos siempre ir más allá, transformando dedicación y atención a los detalles en resultados extraordinarios.'
        }
      },
      jobs: {
        title: 'Puestos Disponibles',
        intro: 'Consulta nuestras oportunidades actuales y postúlate para el puesto que mejor se adapte a tu perfil.',
        loading: 'Cargando puestos disponibles...',
        applyButton: 'Postularse',
        noJobs: {
          title: 'No hay puestos disponibles en este momento',
          description: 'Actualmente no tenemos puestos abiertos, pero puedes enviar tu currículum a nuestro banco de talentos. Te contactaremos cuando surja una oportunidad compatible con tu perfil.',
          talentBankButton: 'Registrarse en el Banco de Talentos'
        },
        expandButtons: {
          seeMore: 'Ver más',
          seeLess: 'Ver menos',
          seeComplete: 'Ver descripción completa',
          seeLessDetails: 'Ver menos detalles',
          moreRequirements: 'requisitos',
          moreBenefits: 'beneficios'
        },
        sections: {
          description: 'Descripción del Puesto:',
          detailedDescription: 'Descripción Detallada:',
          mainRequirements: 'Requisitos Principales:',
          additionalRequirements: 'Requisitos Adicionales:',
          benefits: 'Beneficios:'
        }
      },
      form: {
        applicationTitle: 'Postularse para:',
        talentBankTitle: 'Banco de Talentos',
        backToJobs: 'Volver a los puestos',
        applicationIntro: 'Completa el formulario a continuación para postularte a este puesto. Adjunta tu currículum y cuéntanos un poco sobre ti y tus expectativas.',
        talentBankIntro: 'Completa el formulario a continuación para unirte a nuestro banco de talentos. Te contactaremos cuando surja una oportunidad compatible con tu perfil.',
        fields: {
          name: {
            label: 'Nombre Completo',
            placeholder: 'Tu nombre completo'
          },
          email: {
            label: 'Correo Electrónico',
            placeholder: 'tu.correo@ejemplo.com'
          },
          phone: {
            label: 'Teléfono',
            placeholder: '(00) 00000-0000'
          },
          position: {
            label: 'Área de Interés',
            placeholder: 'Selecciona un área',
            options: {
              administrative: 'Administrativo',
              commercial: 'Comercial',
              inventory: 'Inventario',
              financial: 'Financiero',
              fiscal: 'Fiscal',
              bidding: 'Licitación',
              logistics: 'Logística',
              it: 'TI',
              other: 'Otro'
            }
          },
          education: {
            label: 'Formación Académica',
            placeholder: 'Selecciona tu formación',
            options: {
              highSchool: 'Educación Secundaria',
              technical: 'Educación Técnica',
              universityIncomplete: 'Universidad Incompleta',
              universityComplete: 'Universidad Completa',
              postGrad: 'Posgrado',
              masters: 'Maestría',
              doctorate: 'Doctorado'
            }
          },
          experience: {
            label: 'Experiencia Profesional',
            placeholder: 'Selecciona tu experiencia',
            options: {
              noExperience: 'Sin experiencia',
              upTo1Year: 'Hasta 1 año',
              from1To3Years: '1 a 3 años',
              from3To5Years: '3 a 5 años',
              from5To10Years: '5 a 10 años',
              moreThan10Years: 'Más de 10 años'
            }
          },
          resume: {
            label: 'Currículum (PDF)',
            placeholder: 'Haz clic para adjuntar tu currículum (PDF)'
          },
          message: {
            label: 'Presentación Personal',
            placeholder: 'Cuéntanos un poco sobre ti, tus experiencias, motivaciones y por qué te gustaría trabajar en Uni Hospitalar...'
          },
          expectations: {
            label: 'Expectativas Salariales',
            placeholder: 'Ej: R$ 3.000,00 - R$ 4.000,00 (opcional)'
          },
          privacy: {
            label: 'Autorizo a Uni Hospitalar a mantener en su banco de talentos mis datos personales proporcionados durante la postulación y proceso de selección, permitiendo que sea considerado para futuras oportunidades compatibles con mi perfil profesional.',
            disclaimer1: 'Si eliges no autorizar, utilizaremos tus datos solo para esta postulación específica. Después de la conclusión del proceso de selección, tus datos serán eliminados, preservando solo la información necesaria para registros históricos y cumplimiento de obligaciones legales. Puedes revocar esta autorización en cualquier momento contactando a nuestro DPO.',
            disclaimer2: 'Para más información sobre cómo manejamos tus datos personales, accede a nuestro',
            privacyNoticeLink: 'Aviso de Privacidad'
          }
        },
        buttons: {
          cancel: 'Cancelar',
          submit: 'Enviar Postulación',
          submitting: 'Enviando...'
        },
        validation: {
          pdfOnly: 'Por favor, selecciona solo archivos PDF.',
          fileSize: 'El archivo debe tener como máximo 5MB.',
          nameRequired: 'El nombre es obligatorio.',
          emailRequired: 'El correo electrónico es obligatorio.',
          emailInvalid: 'Correo electrónico inválido.',
          phoneRequired: 'El teléfono es obligatorio.',
          positionRequired: 'El área de interés es obligatoria.',
          educationRequired: 'La formación académica es obligatoria.',
          experienceRequired: 'La experiencia profesional es obligatoria.',
          resumeRequired: 'El currículum es obligatorio.',
          messageRequired: 'La presentación personal es obligatoria.'
        },
        errors: {
          submitError: 'Error al enviar postulación. ',
          connectionError: 'Verifica tu conexión a internet y intenta nuevamente.',
          pdfError: 'Problema con el archivo PDF. Verifica que el archivo no esté dañado.',
          genericError: 'Intenta nuevamente en algunos momentos.'
        }
      },
      success: {
        applicationTitle: '¡Postulación Enviada con Éxito!',
        talentBankTitle: '¡Registro en el Banco de Talentos Completado!',
        applicationMessage: 'Tu postulación ha sido enviada con éxito. Nuestro equipo de recursos humanos analizará tu perfil y se pondrá en contacto pronto.',
        talentBankMessage: 'Tu perfil ha sido agregado a nuestro banco de talentos. Nos pondremos en contacto cuando surja una oportunidad compatible.',
        nextSteps: {
          title: 'Próximos pasos:',
          application: {
            confirmation: 'Recibirás un correo de confirmación',
            analysis: 'Nuestro equipo analizará tu perfil',
            contact: 'Nos pondremos en contacto pronto'
          },
          talentBank: {
            title: 'Lo que sucede ahora:',
            saved: 'Tu perfil ha sido guardado en nuestro sistema',
            notifications: 'Serás notificado sobre nuevas oportunidades',
            contact: 'Mantendremos contacto para futuras vacantes'
          }
        },
        buttons: {
          backHome: 'Volver al Inicio',
          viewMoreJobs: 'Ver Más Puestos'
        }
      }
    }
  }
})

export function useWorkWithUsTranslation() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
  }

  const t = (key, params = {}) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    if (!value) return key
    
    // Interpolação de parâmetros
    return value.replace(/\{(\w+)\}/g, (match, paramName) => {
      return params[paramName] || match
    })
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
