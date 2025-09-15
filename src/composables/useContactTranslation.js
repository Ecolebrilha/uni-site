import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    contact: {
      heroTitle: 'Contato',
      heroSubtitle: 'Estamos à sua disposição',
      introTitle: 'Fale Conosco',
      introText: 'Estamos prontos para atender suas necessidades. Escolha o departamento desejado e entre em contato conosco.',
      departments: {
        support: {
          title: 'Suporte',
          fullTitle: 'Suporte ao Cliente',
          email: 'contato@unihospitalar.com.br',
          phone: '+55 (81) 3472 7201',
          hours: 'Segunda a Sexta: 8h às 18h'
        },
        commercial: {
          title: 'Comercial',
          fullTitle: 'Departamento Comercial',
          email: 'vendas@unihospitalar.com.br',
          phone: '+55 (81) 3472 7223',
          hours: 'Segunda a Sexta: 8h às 18h'
        },
        bidding: {
          title: 'Licitação',
          fullTitle: 'Departamento de Licitação',
          email: 'licitacao@unihospitalar.com.br',
          phone: '+55 (81) 3472 7214',
          hours: 'Segunda a Sexta: 8h às 18h'
        },
        financial: {
          title: 'Financeiro',
          fullTitle: 'Departamento Financeiro',
          email: 'financeiro@unihospitalar.com.br',
          phone: '+55 (81) 3472 7207',
          hours: 'Segunda a Sexta: 8h às 18h'
        },
        lgpd: {
          title: 'LGPD',
          fullTitle: 'Lei Geral de Proteção de Dados',
          email: 'dpo@unihospitalar.com.br',
          phone: '+55 (81) 3472 7231',
          hours: 'Segunda a Sexta: 8h às 18h'
        }
      },
      messageSection: {
        title: 'Envie sua mensagem',
        description: 'Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!'
      },
      locationsTitle: 'Nossas Localizações',
      branches: {
        recife: {
          name: 'Uni Hospitalar',
          city: 'Recife - PE',
          address: 'Rua Alagoas, 253 - Ipsep, Recife - PE',
          cep: '51350-000',
          phone: '+55 (81) 3472 7200',
          email: 'contato@unihospitalar.com.br',
          hours: 'Segunda a Sexta: 8h às 18h'
        },
        fortaleza: {
          name: 'Uni Hospitalar Ceará',
          city: 'Fortaleza - CE',
          address: 'Rua Flôres, 38 - Cajazeiras, Fortaleza - CE',
          cep: '60864-520',
          phone: '+55 (81) 3472 7202',
          email: 'fortaleza@unihospitalar.com.br',
          hours: 'Segunda a Sexta: 8h às 18h'
        },
        saopaulo: {
          name: 'SP Hospitalar',
          city: 'Cotia - SP',
          address: 'R. Pinhal, 165 - Jardim Sabiá, Cotia - SP',
          cep: '06716-575',
          phone: '+55 (11) 4777-2159',
          email: 'sp@unihospitalar.com.br',
          hours: 'Segunda a Sexta: 8h às 18h'
        }
      },
      locationDetails: {
        address: 'Endereço:',
        cep: 'CEP:',
        phone: 'Telefone:',
        email: 'E-mail:',
        hours: 'Horário de Funcionamento:',
        directions: 'Como Chegar'
      },
      form: {
        fields: {
          name: {
            label: 'Nome',
            placeholder: 'Seu nome completo'
          },
          email: {
            label: 'E-mail',
            placeholder: 'Seu e-mail'
          },
          phone: {
            label: 'Telefone',
            placeholder: 'Seu telefone'
          },
          company: {
            label: 'Empresa',
            placeholder: 'Sua empresa'
          },
          message: {
            label: 'Mensagem',
            placeholder: 'Sua mensagem'
          }
        },
        buttons: {
          submit: 'Enviar mensagem',
          submitting: 'Enviando...'
        },
        validation: {
          name: 'Nome deve ter pelo menos 2 caracteres',
          email: 'Email inválido',
          phone: 'Telefone inválido. Use o formato (xx) xxxxx-xxxx',
          company: 'Nome da empresa deve ter pelo menos 2 caracteres',
          message: 'Mensagem deve ter pelo menos 10 caracteres'
        },
        success: {
          title: 'Mensagem Enviada com Sucesso!',
          subtitle: 'Sua mensagem foi recebida por nossa equipe. Retornaremos em breve!',
          summary: {
            title: 'Resumo do seu contato:',
            name: 'Nome:',
            email: 'Email:',
            phone: 'Telefone:',
            company: 'Empresa:',
            message: 'Mensagem:'
          },
          responseInfo: {
            responseTime: {
              label: 'Prazo de resposta:',
              value: 'até 24 horas úteis'
            },
            confirmationEmail: {
              label: 'Email de confirmação:',
              value: 'enviado para {email}'
            }
          },
          buttons: {
            understood: 'Entendido',
            sendAnother: 'Enviar nova mensagem'
          }
        },
        termsNotice: {
          text: 'Ao enviar este formulário, você reconhece nossa',
          privacyPolicy: 'Política de Privacidade',
          continuation: 'e está ciente de que seus dados serão utilizados conforme a natureza de sua solicitação, para atendimento adequado e comunicações necessárias ao acompanhamento da demanda junto à Uni Hospitalar.'
        }
      }
    }
  },
  en: {
    contact: {
      heroTitle: 'Contact',
      heroSubtitle: 'We are at your disposal',
      introTitle: 'Contact Us',
      introText: 'We are ready to meet your needs. Choose the desired department and contact us.',
      departments: {
        support: {
          title: 'Support',
          fullTitle: 'Customer Support',
          email: 'contato@unihospitalar.com.br',
          phone: '+55 (81) 3472 7201',
          hours: 'Monday to Friday: 8am to 6pm'
        },
        commercial: {
          title: 'Commercial',
          fullTitle: 'Commercial Department',
          email: 'vendas@unihospitalar.com.br',
          phone: '+55 (81) 3472 7223',
          hours: 'Monday to Friday: 8am to 6pm'
        },
        bidding: {
          title: 'Bidding',
          fullTitle: 'Bidding Department',
          email: 'licitacao@unihospitalar.com.br',
          phone: '+55 (81) 3472 7214',
          hours: 'Monday to Friday: 8am to 6pm'
        },
        financial: {
          title: 'Financial',
          fullTitle: 'Financial Department',
          email: 'financeiro@unihospitalar.com.br',
          phone: '+55 (81) 3472 7207',
          hours: 'Monday to Friday: 8am to 6pm'
        },
        lgpd: {
          title: 'LGPD',
          fullTitle: 'General Data Protection Law',
          email: 'dpo@unihospitalar.com.br',
          phone: '+55 (81) 3472 7231',
          hours: 'Monday to Friday: 8am to 6pm'
        }
      },
      messageSection: {
        title: 'Send your message',
        description: 'To send your message, fill in the fields below and we will get back to you soon. Thank you!'
      },
      locationsTitle: 'Our Locations',
      branches: {
        recife: {
          name: 'Uni Hospitalar',
          city: 'Recife - PE',
          address: 'Rua Alagoas, 253 - Ipsep, Recife - PE',
          cep: '51350-000',
          phone: '+55 (81) 3472 7200',
          email: 'contato@unihospitalar.com.br',
          hours: 'Monday to Friday: 8am to 6pm'
        },
        fortaleza: {
          name: 'Uni Hospitalar Ceará',
          city: 'Fortaleza - CE',
          address: 'Rua Flôres, 38 - Cajazeiras, Fortaleza - CE',
          cep: '60864-520',
          phone: '+55 (81) 3472 7202',
          email: 'fortaleza@unihospitalar.com.br',
          hours: 'Monday to Friday: 8am to 6pm'
        },
        saopaulo: {
          name: 'SP Hospitalar',
          city: 'Cotia - SP',
          address: 'R. Pinhal, 165 - Jardim Sabiá, Cotia - SP',
          cep: '06716-575',
          phone: '+55 (11) 4777-2159',
          email: 'sp@unihospitalar.com.br',
          hours: 'Monday to Friday: 8am to 6pm'
        }
      },
      locationDetails: {
        address: 'Address:',
        cep: 'ZIP Code:',
        phone: 'Phone:',
        email: 'Email:',
        hours: 'Business Hours:',
        directions: 'Get Directions'
      },
      form: {
        fields: {
          name: {
            label: 'Name',
            placeholder: 'Your full name'
          },
          email: {
            label: 'Email',
            placeholder: 'Your email'
          },
          phone: {
            label: 'Phone',
            placeholder: 'Your phone'
          },
          company: {
            label: 'Company',
            placeholder: 'Your company'
          },
          message: {
            label: 'Message',
            placeholder: 'Your message'
          }
        },
        buttons: {
          submit: 'Send message',
          submitting: 'Sending...'
        },
        validation: {
          name: 'Name must have at least 2 characters',
          email: 'Invalid email',
          phone: 'Invalid phone. Use format (xx) xxxxx-xxxx',
          company: 'Company name must have at least 2 characters',
          message: 'Message must have at least 10 characters'
        },
        success: {
          title: 'Message Sent Successfully!',
          subtitle: 'Your message has been received by our team. We will get back to you soon!',
          summary: {
            title: 'Summary of your contact:',
            name: 'Name:',
            email: 'Email:',
            phone: 'Phone:',
            company: 'Company:',
            message: 'Message:'
          },
          responseInfo: {
            responseTime: {
              label: 'Response time:',
              value: 'up to 24 business hours'
            },
            confirmationEmail: {
              label: 'Confirmation email:',
              value: 'sent to {email}'
            }
          },
          buttons: {
            understood: 'Understood',
            sendAnother: 'Send new message'
          }
        },
        termsNotice: {
          text: 'By submitting this form, you acknowledge our',
          privacyPolicy: 'Privacy Policy',
          continuation: 'and are aware that your data will be used according to the nature of your request, for adequate service and necessary communications to follow up on the demand with Uni Hospitalar.'
        }
      }
    }
  },
  es: {
    contact: {
      heroTitle: 'Contacto',
      heroSubtitle: 'Estamos a su disposición',
      introTitle: 'Contáctenos',
      introText: 'Estamos listos para satisfacer sus necesidades. Elija el departamento deseado y contáctenos.',
      departments: {
        support: {
          title: 'Soporte',
          fullTitle: 'Soporte al Cliente',
          email: 'contato@unihospitalar.com.br',
          phone: '+55 (81) 3472 7201',
          hours: 'Lunes a Viernes: 8h a 18h'
        },
        commercial: {
          title: 'Comercial',
          fullTitle: 'Departamento Comercial',
          email: 'vendas@unihospitalar.com.br',
          phone: '+55 (81) 3472 7223',
          hours: 'Lunes a Viernes: 8h a 18h'
        },
        bidding: {
          title: 'Licitación',
          fullTitle: 'Departamento de Licitación',
          email: 'licitacao@unihospitalar.com.br',
          phone: '+55 (81) 3472 7214',
          hours: 'Lunes a Viernes: 8h a 18h'
        },
        financial: {
          title: 'Financiero',
          fullTitle: 'Departamento Financiero',
          email: 'financeiro@unihospitalar.com.br',
          phone: '+55 (81) 3472 7207',
          hours: 'Lunes a Viernes: 8h a 18h'
        },
        lgpd: {
          title: 'LGPD',
          fullTitle: 'Ley General de Protección de Datos',
          email: 'dpo@unihospitalar.com.br',
          phone: '+55 (81) 3472 7231',
          hours: 'Lunes a Viernes: 8h a 18h'
        }
      },
      messageSection: {
        title: 'Envíe su mensaje',
        description: 'Para enviar su mensaje, complete los campos a continuación y le responderemos pronto. ¡Gracias!'
      },
      locationsTitle: 'Nuestras Ubicaciones',
      branches: {
        recife: {
          name: 'Uni Hospitalar',
          city: 'Recife - PE',
          address: 'Rua Alagoas, 253 - Ipsep, Recife - PE',
          cep: '51350-000',
          phone: '+55 (81) 3472 7200',
          email: 'contato@unihospitalar.com.br',
          hours: 'Lunes a Viernes: 8h a 18h'
        },
        fortaleza: {
          name: 'Uni Hospitalar Ceará',
          city: 'Fortaleza - CE',
          address: 'Rua Flôres, 38 - Cajazeiras, Fortaleza - CE',
          cep: '60864-520',
          phone: '+55 (81) 3472 7202',
          email: 'fortaleza@unihospitalar.com.br',
          hours: 'Lunes a Viernes: 8h a 18h'
        },
        saopaulo: {
          name: 'SP Hospitalar',
          city: 'Cotia - SP',
          address: 'R. Pinhal, 165 - Jardim Sabiá, Cotia - SP',
          cep: '06716-575',
          phone: '+55 (11) 4777-2159',
          email: 'sp@unihospitalar.com.br',
          hours: 'Lunes a Viernes: 8h a 18h'
        }
      },
      locationDetails: {
        address: 'Dirección:',
        cep: 'Código Postal:',
        phone: 'Teléfono:',
        email: 'Correo:',
        hours: 'Horario de Funcionamiento:',
        directions: 'Cómo Llegar'
      },
      form: {
        fields: {
          name: {
            label: 'Nombre',
            placeholder: 'Su nombre completo'
          },
          email: {
            label: 'Correo',
            placeholder: 'Su correo electrónico'
          },
          phone: {
            label: 'Teléfono',
            placeholder: 'Su teléfono'
          },
          company: {
            label: 'Empresa',
            placeholder: 'Su empresa'
          },
          message: {
            label: 'Mensaje',
            placeholder: 'Su mensaje'
          }
        },
        buttons: {
          submit: 'Enviar mensaje',
          submitting: 'Enviando...'
        },
        validation: {
          name: 'El nombre debe tener al menos 2 caracteres',
          email: 'Correo inválido',
          phone: 'Teléfono inválido. Use el formato (xx) xxxxx-xxxx',
          company: 'El nombre de la empresa debe tener al menos 2 caracteres',
          message: 'El mensaje debe tener al menos 10 caracteres'
        },
        success: {
          title: '¡Mensaje Enviado Exitosamente!',
          subtitle: '¡Su mensaje ha sido recibido por nuestro equipo. Le responderemos pronto!',
          summary: {
            title: 'Resumen de su contacto:',
            name: 'Nombre:',
            email: 'Correo:',
            phone: 'Teléfono:',
            company: 'Empresa:',
            message: 'Mensaje:'
          },
          responseInfo: {
            responseTime: {
              label: 'Tiempo de respuesta:',
              value: 'hasta 24 horas hábiles'
            },
            confirmationEmail: {
              label: 'Correo de confirmación:',
              value: 'enviado a {email}'
            }
          },
          buttons: {
            understood: 'Entendido',
            sendAnother: 'Enviar nuevo mensaje'
          }
        },
        termsNotice: {
          text: 'Al enviar este formulario, reconoces nuestra',
          privacyPolicy: 'Política de Privacidad',
          continuation: 'y estás consciente de que tus datos serán utilizados conforme a la naturaleza de tu solicitud, para atención adecuada y comunicaciones necesarias para el seguimiento de la demanda con Uni Hospitalar.'
        }
      }
    }
  }
})

export function useContactTranslation() {
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
