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
        validation: {
          invalidFileType: 'Arquivo {fileName} não é um tipo válido. Use PDF, DOC, DOCX, JPG, JPEG ou PNG.',
          fileTooLarge: 'Arquivo {fileName} é muito grande. Máximo 10MB.',
          cnpjRequired: 'CNPJ é obrigatório',
          companyNameRequired: 'Nome/Razão Social é obrigatório',
          stateRequired: 'UF é obrigatório',
          businessFieldRequired: 'Ramo de Atuação é obrigatório',
          emailRequired: 'Email é obrigatório',
          phoneRequired: 'Celular ou Telefone Fixo é obrigatório',
          partnerTypeRequired: 'Tipo de Parceiro é obrigatório',
          documentRequired: 'Documento obrigatório'
        },
        notifications: {
          uploadSuccess: 'Documento "{documentName}" ({fileName}) anexado com sucesso!',
          removeSuccess: 'Documento "{documentName}" ({fileName}) removido com sucesso!'
        },
        documents: {
          title: 'Documentos Obrigatórios',
          cnpj: 'Cartão CNPJ',
          crf: 'Certificado de Regularidade do FGTS',
          contatoComprador: 'Contato do Comprador',
          contatoFinanceiro: 'Contato do Financeiro',
          alvara: 'Alvará de Funcionamento',
          contratoSocial: 'Contrato Social',
          info: 'Anexe os documentos correspondentes a cada campo. Formatos aceitos: PDF, DOC, DOCX, JPG, JPEG, PNG. Máximo 10MB por arquivo.',
          warning: 'Todos os documentos anexados devem pertencer ao mesmo CNPJ informado no cadastro.',
          error: 'Todos os documentos são obrigatórios para completar o cadastro.'
        },
        partnerType: {
          label: 'Tipo de Parceiro',
          placeholder: 'Selecione o tipo de parceiro',
          options: {
            transportadora: 'Transportadora',
            cliente: 'Cliente',
            fornecedor: 'Fornecedor'
          }
        },
        businessAreasByType: {
          TRANSPORTADORA: [
            'Transporte de Cargas',
            'Logística',
            'Transporte Expresso',
            'Transporte Refrigerado',
            'Transporte de Veículos',
            'Mudanças e Fretes'
          ],
          CLIENTE: [
            'Hospital',
            'Clínica',
            'Laboratório',
            'Farmácia',
            'Distribuidora',
            'Órgão Público',
            'Empresa Privada',
            'ONG',
            'Cooperativa'
          ],
          FORNECEDOR: [
            'Equipamentos Médicos',
            'Medicamentos',
            'Material Hospitalar',
            'Tecnologia da Informação',
            'Serviços de Manutenção',
            'Consultoria',
            'Alimentos e Bebidas',
            'Produtos de Limpeza'
          ]
        },
        success: {
          title: 'Sua solicitação foi enviada com sucesso!',
          detailsTitle: 'Detalhes da Solicitação',
          nextStepsTitle: 'Próximos Passos',
          labels: {
            company: 'Empresa',
            cnpj: 'CNPJ',
            email: 'Email',
            documents: 'Documentos',
            documentsCount: 'documento(s) enviado(s)'
          },
          steps: {
            analysis: {
              title: 'Análise',
              description: 'Nossa equipe comercial analisará sua solicitação'
            },
            contact: {
              title: 'Contato',
              description: 'Entraremos em contato em até <strong>72 horas úteis</strong>'
            },
            updates: {
              title: 'Atualizações',
              description: 'Você receberá todas as atualizações por email'
            },
            keepUpdated: {
              title: 'Dados Atualizados',
              description: 'Mantenha seus dados de contato atualizados'
            }
          },
          important: {
            title: 'Importante',
            description: 'Todas as comunicações sobre o processo de parceria serão enviadas para o email informado. Verifique regularmente sua caixa de entrada e pasta de spam.'
          },
          homeButton: 'Página Inicial'
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
        validation: {
          invalidFileType: 'File {fileName} is not a valid type. Use PDF, DOC, DOCX, JPG, JPEG or PNG.',
          fileTooLarge: 'File {fileName} is too large. Maximum 10MB.',
          cnpjRequired: 'CNPJ is required',
          companyNameRequired: 'Name/Company Name is required',
          stateRequired: 'State is required',
          businessFieldRequired: 'Business Area is required',
          emailRequired: 'Email is required',
          phoneRequired: 'Mobile Phone or Landline Phone is required',
          partnerTypeRequired: 'Partner Type is required',
          documentRequired: 'Document is required'
        },
        notifications: {
          uploadSuccess: 'Document "{documentName}" ({fileName}) uploaded successfully!',
          removeSuccess: 'Document "{documentName}" ({fileName}) removed successfully!'
        },
        documents: {
          title: 'Required Documents',
          cnpj: 'CNPJ Card',
          crf: 'FGTS Regularity Certificate',
          contatoComprador: 'Buyer Contact',
          contatoFinanceiro: 'Finance Contact',
          alvara: 'Operating License',
          contratoSocial: 'Articles of Association',
          info: 'Attach the documents corresponding to each field. Accepted formats: PDF, DOC, DOCX, JPG, JPEG, PNG. Maximum 10MB per file.',
          warning: 'All attached documents must belong to the same CNPJ informed in the registration.',
          error: 'All documents are required to complete the registration.'
        },
        partnerType: {
          label: 'Partner Type',
          placeholder: 'Select partner type',
          options: {
            transportadora: 'Transportation Company',
            cliente: 'Client',
            fornecedor: 'Supplier'
          }
        },
        businessAreasByType: {
          TRANSPORTADORA: [
            'Cargo Transportation',
            'Logistics',
            'Express Transportation',
            'Refrigerated Transportation',
            'Vehicle Transportation',
            'Moving and Freight'
          ],
          CLIENTE: [
            'Hospital',
            'Clinic',
            'Laboratory',
            'Pharmacy',
            'Distributor',
            'Public Agency',
            'Private Company',
            'NGO',
            'Cooperative'
          ],
          FORNECEDOR: [
            'Medical Equipment',
            'Medicines',
            'Hospital Supplies',
            'Information Technology',
            'Maintenance Services',
            'Consulting',
            'Food and Beverages',
            'Cleaning Products'
          ]
        },
        success: {
          title: 'Your request has been sent successfully!',
          detailsTitle: 'Request Details',
          nextStepsTitle: 'Next Steps',
          labels: {
            company: 'Company',
            cnpj: 'CNPJ',
            email: 'Email',
            documents: 'Documents',
            documentsCount: 'document(s) sent'
          },
          steps: {
            analysis: {
              title: 'Analysis',
              description: 'Our commercial team will analyze your request'
            },
            contact: {
              title: 'Contact',
              description: 'We will contact you within <strong>72 business hours</strong>'
            },
            updates: {
              title: 'Updates',
              description: 'You will receive all updates via email'
            },
            keepUpdated: {
              title: 'Updated Data',
              description: 'Keep your contact information updated'
            }
          },
          important: {
            title: 'Important',
            description: 'All communications about the partnership process will be sent to the informed email. Check your inbox and spam folder regularly.'
          },
          homeButton: 'Home Page'
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
        validation: {
          invalidFileType: 'Archivo {fileName} no es un tipo válido. Use PDF, DOC, DOCX, JPG, JPEG o PNG.',
          fileTooLarge: 'Archivo {fileName} es muy grande. Máximo 10MB.',
          cnpjRequired: 'CNPJ es obligatorio',
          companyNameRequired: 'Nombre/Razón Social es obligatorio',
          stateRequired: 'Estado es obligatorio',
          businessFieldRequired: 'Área de Negocio es obligatorio',
          emailRequired: 'Correo electrónico es obligatorio',
          phoneRequired: 'Teléfono móvil o fijo es obligatorio',
          partnerTypeRequired: 'Tipo de Socio es obligatorio',
          documentRequired: 'Documento es obligatorio'
        },
        notifications: {
          uploadSuccess: 'Documento "{documentName}" ({fileName}) cargado con éxito!',
          removeSuccess: 'Documento "{documentName}" ({fileName}) eliminado con éxito!'
        },
        documents: {
          title: 'Documentos Obligatorios',
          cnpj: 'Tarjeta CNPJ',
          crf: 'Certificado de Regularidad del FGTS',
          contatoComprador: 'Contacto del Comprador',
          contatoFinanceiro: 'Contacto del Financiero',
          alvara: 'Licencia de Funcionamiento',
          contratoSocial: 'Contrato Social',
          info: 'Adjunte los documentos correspondientes a cada campo. Formatos aceptados: PDF, DOC, DOCX, JPG, JPEG, PNG. Máximo 10MB por archivo.',
          warning: 'Todos los documentos adjuntos deben pertenecer al mismo CNPJ informado en el registro.',
          error: 'Todos los documentos son obligatorios para completar el registro.'
        },
        partnerType: {
          label: 'Tipo de Socio',
          placeholder: 'Seleccione el tipo de socio',
          options: {
            transportadora: 'Empresa de Transporte',
            cliente: 'Cliente',
            fornecedor: 'Proveedor'
          }
        },
        businessAreasByType: {
          TRANSPORTADORA: [
            'Transporte de Cargas',
            'Logística',
            'Transporte Expreso',
            'Transporte Refrigerado',
            'Transporte de Vehículos',
            'Mudanzas y Fletes'
          ],
          CLIENTE: [
            'Hospital',
            'Clínica',
            'Laboratorio',
            'Farmacia',
            'Distribuidora',
            'Órgano Público',
            'Empresa Privada',
            'ONG',
            'Cooperativa'
          ],
          FORNECEDOR: [
            'Equipos Médicos',
            'Medicamentos',
            'Material Hospitalario',
            'Tecnología de la Información',
            'Servicios de Mantenimiento',
            'Consultoría',
            'Alimentos y Bebidas',
            'Productos de Limpieza'
          ]
        },
        success: {
          title: '¡Su solicitud ha sido enviada con éxito!',
          detailsTitle: 'Detalles de la Solicitud',
          nextStepsTitle: 'Próximos Pasos',
          labels: {
            company: 'Empresa',
            cnpj: 'CNPJ',
            email: 'Correo',
            documents: 'Documentos',
            documentsCount: 'documento(s) enviado(s)'
          },
          steps: {
            analysis: {
              title: 'Análisis',
              description: 'Nuestro equipo comercial analizará su solicitud'
            },
            contact: {
              title: 'Contacto',
              description: 'Nos pondremos en contacto en hasta <strong>72 horas hábiles</strong>'
            },
            updates: {
              title: 'Actualizaciones',
              description: 'Recibirá todas las actualizaciones por correo'
            },
            keepUpdated: {
              title: 'Datos Actualizados',
              description: 'Mantenga sus datos de contacto actualizados'
            }
          },
          important: {
            title: 'Importante',
            description: 'Todas las comunicaciones sobre el proceso de asociación serán enviadas al correo informado. Verifique regularmente su bandeja de entrada y carpeta de spam.'
          },
          homeButton: 'Página de Inicio'
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
