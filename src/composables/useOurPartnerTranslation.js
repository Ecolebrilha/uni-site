import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    partner: {
      heroTitle: 'Seja Nosso Parceiro',
      heroSubtitle: 'Faça parte da nossa rede de sucesso',
      introTitle: 'Cadastre-se como Parceiro',
      introText: 'Preencha o formulário abaixo para se tornar um parceiro ou cliente da Uni Hospitalar. Nossa equipe analisará suas informações e entrará em contato em breve.',
      form: {
        title: 'Formulário de Parceria',
        fields: {
          companyName: {
            label: 'Nome / Razão Social',
            placeholder: 'Digite o nome ou razão social da empresa'
          },
          state: {
            label: 'UF',
            placeholder: 'Selecione o estado'
          },
          businessArea: {
            label: 'Ramo de Atuação',
            placeholder: 'Selecione o ramo de atuação'
          },
          cnpj: {
            label: 'CNPJ',
            placeholder: '00.000.000/0000-00'
          },
          email: {
            label: 'E-mail',
            placeholder: 'exemplo@empresa.com.br'
          },
          mobile: {
            label: 'Celular',
            placeholder: '(00) 00000-0000'
          },
          phone: {
            label: 'Telefone Fixo',
            placeholder: '(00) 0000-0000'
          },
          address: {
            label: 'Endereço',
            placeholder: 'Endereço será preenchido automaticamente via CNPJ',
            help: 'Este campo será preenchido automaticamente ao informar um CNPJ válido.'
          }
        },
        businessAreas: [
          'Hospital Público',
          'Hospital Privado',
          'Clínica Médica',
          'Laboratório',
          'Farmácia',
          'Distribuidora',
          'Indústria Farmacêutica',
          'Órgão Público',
          'Consultório Médico',
          'Home Care',
          'Outro'
        ],
        states: [
          { code: 'AC', name: 'Acre' },
          { code: 'AL', name: 'Alagoas' },
          { code: 'AP', name: 'Amapá' },
          { code: 'AM', name: 'Amazonas' },
          { code: 'BA', name: 'Bahia' },
          { code: 'CE', name: 'Ceará' },
          { code: 'DF', name: 'Distrito Federal' },
          { code: 'ES', name: 'Espírito Santo' },
          { code: 'GO', name: 'Goiás' },
          { code: 'MA', name: 'Maranhão' },
          { code: 'MT', name: 'Mato Grosso' },
          { code: 'MS', name: 'Mato Grosso do Sul' },
          { code: 'MG', name: 'Minas Gerais' },
          { code: 'PA', name: 'Pará' },
          { code: 'PB', name: 'Paraíba' },
          { code: 'PR', name: 'Paraná' },
          { code: 'PE', name: 'Pernambuco' },
          { code: 'PI', name: 'Piauí' },
          { code: 'RJ', name: 'Rio de Janeiro' },
          { code: 'RN', name: 'Rio Grande do Norte' },
          { code: 'RS', name: 'Rio Grande do Sul' },
          { code: 'RO', name: 'Rondônia' },
          { code: 'RR', name: 'Roraima' },
          { code: 'SC', name: 'Santa Catarina' },
          { code: 'SP', name: 'São Paulo' },
          { code: 'SE', name: 'Sergipe' },
          { code: 'TO', name: 'Tocantins' }
        ],
        termsNotice: {
          text: 'Ao enviar este formulário, você reconhece nossa',
  privacyPolicy: 'Política de Privacidade',
  continuation: 'e está ciente de que seus dados serão utilizados para análise de parceria comercial e comunicações relacionadas ao processo de credenciamento junto à Uni Hospitalar.'
        },
        submitButton: {
          default: 'Solicitar Análise',
          loading: 'Enviando...'
        },
        messages: {
          success: 'Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.',
          error: 'Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.',
          cnpjError: 'CNPJ inválido. Verifique os números digitados.',
          cnpjNotFound: 'Não foi possível consultar o CNPJ. Verifique sua conexão ou tente novamente.',
          cnpjServiceUnavailable: 'Serviço de consulta CNPJ temporariamente indisponível. Preencha o endereço manualmente.',
          phoneRequired: 'Por favor, preencha pelo menos um telefone de contato (celular ou fixo).'
        },
        documents: {
          title: 'Documentos Obrigatórios',
          cnpj: 'Comprovante de CNPJ',
          razaoSocial: 'Comprovante de Razão Social',
          estadual: 'Inscrição Estadual',
          municipal: 'Inscrição Municipal',
          alvara: 'Alvará de Funcionamento',
          contratoSocial: 'Contrato Social',
          info: 'Anexe os documentos correspondentes a cada campo. Formatos aceitos: PDF, DOC, DOCX, JPG, JPEG, PNG. Máximo 10MB por arquivo.',
          error: 'Todos os documentos são obrigatórios para completar o cadastro.'
        }
      },
      benefits: {
        title: 'Benefícios de ser nosso parceiro',
        logistics: {
          icon: 'fas fa-truck-loading',
          title: 'Logística Eficiente',
          description: 'Entregas rápidas e seguras para todo o Norte e Nordeste brasileiro em até 48 horas úteis.'
        },
        quality: {
          icon: 'fas fa-medal',
          title: 'Produtos de Qualidade',
          description: 'Acesso a medicamentos e produtos hospitalares de alta qualidade e confiabilidade.'
        },
        relationship: {
          icon: 'fas fa-handshake',
          title: 'Relacionamento Duradouro',
          description: 'Construímos parcerias sólidas e duradouras baseadas em confiança e compromisso mútuo.'
        },
        growth: {
          icon: 'fas fa-chart-line',
          title: 'Crescimento Conjunto',
          description: 'Oportunidades de expansão e desenvolvimento de negócios em conjunto.'
        },
        support: {
          icon: 'fas fa-headset',
          title: 'Suporte Dedicado',
          description: 'Equipe de atendimento especializada para resolver suas necessidades com agilidade.'
        },
        certifications: {
          icon: 'fas fa-certificate',
          title: 'Certificações',
          description: 'Trabalhamos com os mais altos padrões de qualidade e segurança do mercado.'
        }
      }
    }
  },
  en: {
    partner: {
      heroTitle: 'Become Our Partner',
      heroSubtitle: 'Join our success network',
      introTitle: 'Register as a Partner',
      introText: 'Fill out the form below to become a partner or client of Uni Hospitalar. Our team will analyze your information and contact you soon.',
      form: {
        title: 'Partnership Form',
        fields: {
          companyName: {
            label: 'Name / Company Name',
            placeholder: 'Enter the name or company name'
          },
          state: {
            label: 'State',
            placeholder: 'Select the state'
          },
          businessArea: {
            label: 'Business Area',
            placeholder: 'Select the business area'
          },
          cnpj: {
            label: 'Tax ID (CNPJ)',
            placeholder: '00.000.000/0000-00'
          },
          email: {
            label: 'Email',
            placeholder: 'example@company.com'
          },
          mobile: {
            label: 'Mobile Phone',
            placeholder: '(00) 00000-0000'
          },
          phone: {
            label: 'Landline Phone',
            placeholder: '(00) 0000-0000'
          },
          address: {
            label: 'Address',
            placeholder: 'Address will be filled automatically via Tax ID',
            help: 'This field will be filled automatically when entering a valid Tax ID.'
          }
        },
        businessAreas: [
          'Public Hospital',
          'Private Hospital',
          'Medical Clinic',
          'Laboratory',
          'Pharmacy',
          'Distributor',
          'Pharmaceutical Industry',
          'Public Agency',
          'Medical Office',
          'Home Care',
          'Other'
        ],
        states: [
          { code: 'AC', name: 'Acre' },
          { code: 'AL', name: 'Alagoas' },
          { code: 'AP', name: 'Amapá' },
          { code: 'AM', name: 'Amazonas' },
          { code: 'BA', name: 'Bahia' },
          { code: 'CE', name: 'Ceará' },
          { code: 'DF', name: 'Federal District' },
          { code: 'ES', name: 'Espírito Santo' },
          { code: 'GO', name: 'Goiás' },
          { code: 'MA', name: 'Maranhão' },
          { code: 'MT', name: 'Mato Grosso' },
          { code: 'MS', name: 'Mato Grosso do Sul' },
          { code: 'MG', name: 'Minas Gerais' },
          { code: 'PA', name: 'Pará' },
          { code: 'PB', name: 'Paraíba' },
          { code: 'PR', name: 'Paraná' },
          { code: 'PE', name: 'Pernambuco' },
          { code: 'PI', name: 'Piauí' },
          { code: 'RJ', name: 'Rio de Janeiro' },
          { code: 'RN', name: 'Rio Grande do Norte' },
          { code: 'RS', name: 'Rio Grande do Sul' },
          { code: 'RO', name: 'Rondônia' },
          { code: 'RR', name: 'Roraima' },
          { code: 'SC', name: 'Santa Catarina' },
          { code: 'SP', name: 'São Paulo' },
          { code: 'SE', name: 'Sergipe' },
          { code: 'TO', name: 'Tocantins' }
        ],
        termsNotice: {
          text: 'By submitting this form, you acknowledge our',
  privacyPolicy: 'Privacy Policy',
  continuation: 'and are aware that your data will be used for commercial partnership analysis and communications related to the accreditation process with Uni Hospitalar.'
        },
        submitButton: {
          default: 'Request Analysis',
          loading: 'Sending...'
        },
        messages: {
          success: 'Your request has been sent successfully! We will contact you soon.',
          error: 'An error occurred while sending your request. Please try again.',
          cnpjError: 'Invalid Tax ID. Please check the numbers entered.',
          cnpjNotFound: 'Unable to query Tax ID. Check your connection or try again.',
          cnpjServiceUnavailable: 'Tax ID query service temporarily unavailable. Please fill in the address manually.',
          phoneRequired: 'Please fill in at least one contact phone (mobile or landline).'
        },
        documents: {
          title: 'Required Documents',
          cnpj: 'Tax ID (CNPJ) Certificate',
          razaoSocial: 'Corporate Name Certificate',
          estadual: 'State Registration',
          municipal: 'Municipal Registration',
          alvara: 'Operating License',
          contratoSocial: 'Articles of Association',
          info: 'Attach the documents corresponding to each field. Accepted formats: PDF, DOC, DOCX, JPG, JPEG, PNG. Maximum 10MB per file.',
          error: 'All documents are required to complete the registration.'
        }
      },
      benefits: {
        title: 'Benefits of being our partner',
        logistics: {
          icon: 'fas fa-truck-loading',
          title: 'Efficient Logistics',
          description: 'Fast and secure deliveries throughout North and Northeast Brazil within 48 business hours.'
        },
        quality: {
          icon: 'fas fa-medal',
          title: 'Quality Products',
          description: 'Access to high-quality and reliable medicines and hospital products.'
        },
        relationship: {
          icon: 'fas fa-handshake',
          title: 'Lasting Relationships',
          description: 'We build solid and lasting partnerships based on trust and mutual commitment.'
        },
        growth: {
          icon: 'fas fa-chart-line',
          title: 'Joint Growth',
          description: 'Opportunities for expansion and business development together.'
        },
        support: {
          icon: 'fas fa-headset',
          title: 'Dedicated Support',
          description: 'Specialized customer service team to solve your needs with agility.'
        },
        certifications: {
          icon: 'fas fa-certificate',
          title: 'Certifications',
          description: 'We work with the highest quality and safety standards in the market.'
        }
      }
    }
  },
  es: {
    partner: {
      heroTitle: 'Conviértete en Nuestro Socio',
      heroSubtitle: 'Únete a nuestra red de éxito',
      introTitle: 'Regístrate como Socio',
      introText: 'Complete el formulario a continuación para convertirse en socio o cliente de Uni Hospitalar. Nuestro equipo analizará su información y se pondrá en contacto pronto.',
      form: {
        title: 'Formulario de Asociación',
        fields: {
          companyName: {
            label: 'Nombre / Razón Social',
            placeholder: 'Ingrese el nombre o razón social de la empresa'
          },
          state: {
            label: 'Estado',
            placeholder: 'Seleccione el estado'
          },
          businessArea: {
            label: 'Área de Negocio',
            placeholder: 'Seleccione el área de negocio'
          },
          cnpj: {
            label: 'CNPJ',
            placeholder: '00.000.000/0000-00'
          },
          email: {
            label: 'Correo Electrónico',
            placeholder: 'ejemplo@empresa.com'
          },
          mobile: {
            label: 'Teléfono Móvil',
            placeholder: '(00) 00000-0000'
          },
          phone: {
            label: 'Teléfono Fijo',
            placeholder: '(00) 0000-0000'
          },
          address: {
            label: 'Dirección',
            placeholder: 'La dirección se completará automáticamente vía CNPJ',
            help: 'Este campo se completará automáticamente al ingresar un CNPJ válido.'
          }
        },
        businessAreas: [
          'Hospital Público',
          'Hospital Privado',
          'Clínica Médica',
          'Laboratorio',
          'Farmacia',
          'Distribuidora',
          'Industria Farmacéutica',
          'Órgano Público',
          'Consultorio Médico',
          'Atención Domiciliaria',
          'Otro'
        ],
        states: [
          { code: 'AC', name: 'Acre' },
          { code: 'AL', name: 'Alagoas' },
          { code: 'AP', name: 'Amapá' },
          { code: 'AM', name: 'Amazonas' },
          { code: 'BA', name: 'Bahia' },
          { code: 'CE', name: 'Ceará' },
          { code: 'DF', name: 'Distrito Federal' },
          { code: 'ES', name: 'Espírito Santo' },
          { code: 'GO', name: 'Goiás' },
          { code: 'MA', name: 'Maranhão' },
          { code: 'MT', name: 'Mato Grosso' },
          { code: 'MS', name: 'Mato Grosso do Sul' },
          { code: 'MG', name: 'Minas Gerais' },
          { code: 'PA', name: 'Pará' },
          { code: 'PB', name: 'Paraíba' },
          { code: 'PR', name: 'Paraná' },
          { code: 'PE', name: 'Pernambuco' },
          { code: 'PI', name: 'Piauí' },
          { code: 'RJ', name: 'Rio de Janeiro' },
          { code: 'RN', name: 'Rio Grande do Norte' },
          { code: 'RS', name: 'Rio Grande do Sul' },
          { code: 'RO', name: 'Rondônia' },
          { code: 'RR', name: 'Roraima' },
          { code: 'SC', name: 'Santa Catarina' },
          { code: 'SP', name: 'São Paulo' },
          { code: 'SE', name: 'Sergipe' },
          { code: 'TO', name: 'Tocantins' }
        ],
        termsNotice: {
          text: 'Al enviar este formulario, reconoces nuestra',
  privacyPolicy: 'Política de Privacidad',
  continuation: 'y estás consciente de que tus datos serán utilizados para análisis de asociación comercial y comunicaciones relacionadas con el proceso de acreditación con Uni Hospitalar.'
        },
        submitButton: {
          default: 'Solicitar Análisis',
          loading: 'Enviando...'
        },
        messages: {
          success: '¡Su solicitud ha sido enviada con éxito! Nos pondremos en contacto pronto.',
          error: 'Ocurrió un error al enviar su solicitud. Por favor, inténtelo de nuevo.',
          cnpjError: 'CNPJ inválido. Verifique los números ingresados.',
          cnpjNotFound: 'No fue posible consultar el CNPJ. Verifique su conexión o inténtelo de nuevo.',
          cnpjServiceUnavailable: 'Servicio de consulta CNPJ temporalmente no disponible. Complete la dirección manualmente.',
          phoneRequired: 'Por favor, complete al menos un teléfono de contacto (móvil o fijo).'
        },
        documents: {
          title: 'Documentos Obligatorios',
          cnpj: 'Certificado de CNPJ',
          razaoSocial: 'Certificado de Razón Social',
          estadual: 'Inscripción Estadual',
          municipal: 'Inscripción Municipal',
          alvara: 'Licencia de Funcionamiento',
          contratoSocial: 'Contrato Social',
          info: 'Adjunte los documentos correspondientes a cada campo. Formatos aceptados: PDF, DOC, DOCX, JPG, JPEG, PNG. Máximo 10MB por archivo.',
          error: 'Todos los documentos son obligatorios para completar el registro.'
        }
      },
      benefits: {
        title: 'Beneficios de ser nuestro socio',
        logistics: {
          icon: 'fas fa-truck-loading',
          title: 'Logística Eficiente',
          description: 'Entregas rápidas y seguras para todo el Norte y Nordeste brasileño en hasta 48 horas útiles.'
        },
        quality: {
          icon: 'fas fa-medal',
          title: 'Productos de Calidad',
          description: 'Acceso a medicamentos y productos hospitalarios de alta calidad y confiabilidad.'
        },
        relationship: {
          icon: 'fas fa-handshake',
          title: 'Relaciones Duraderas',
          description: 'Construimos alianzas sólidas y duraderas basadas en confianza y compromiso mutuo.'
        },
        growth: {
          icon: 'fas fa-chart-line',
          title: 'Crecimiento Conjunto',
          description: 'Oportunidades de expansión y desarrollo de negocios en conjunto.'
        },
        support: {
          icon: 'fas fa-headset',
          title: 'Soporte Dedicado',
          description: 'Equipo de atención especializada para resolver sus necesidades con agilidad.'
        },
        certifications: {
          icon: 'fas fa-certificate',
          title: 'Certificaciones',
          description: 'Trabajamos con los más altos estándares de calidad y seguridad del mercado.'
        }
      }
    }
  }
})

export function useOurPartnerTranslation() {
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
