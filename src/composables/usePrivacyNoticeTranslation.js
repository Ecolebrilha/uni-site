import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    privacyNotice: {
      heroTitle: 'Aviso de Privacidade',
      heroSubtitle: 'Proteção de Dados Pessoais',
      
      header: {
        title: 'Aviso de Privacidade - Processos Seletivos',
        lastUpdated: 'Última atualização:'
      },
      
      sections: {
        purpose: {
          title: '1. Finalidade do Tratamento',
          content: 'A Uni Hospitalar coleta e trata seus dados pessoais exclusivamente para fins de processos seletivos, avaliação de candidaturas e formação de banco de talentos, quando autorizado pelo titular dos dados.'
        },
        
        dataCollected: {
          title: '2. Dados Coletados',
          intro: 'Durante o processo seletivo, coletamos as seguintes categorias de dados:',
          items: {
            identification: 'Dados de identificação (nome, CPF, RG)',
            contact: 'Dados de contato (telefone, e-mail, endereço)',
            professional: 'Dados profissionais (experiência, formação, habilidades)',
            documents: 'Documentos anexados (currículo, certificados)',
            interviews: 'Informações fornecidas em entrevistas e avaliações'
          }
        },
        
        legalBasis: {
          title: '3. Base Legal',
          content: 'O tratamento de seus dados pessoais é realizado com base no legítimo interesse da empresa para condução de processos seletivos e, quando aplicável, no consentimento específico para inclusão no banco de talentos.'
        },
        
        dataSharing: {
          title: '4. Compartilhamento de Dados',
          intro: 'Seus dados pessoais podem ser compartilhados com:',
          items: {
            hr: 'Equipe interna de Recursos Humanos',
            managers: 'Gestores das áreas solicitantes',
            providers: 'Prestadores de serviços especializados em recrutamento',
            authorities: 'Autoridades competentes, quando exigido por lei'
          }
        },
        
        dataRetention: {
          title: '5. Retenção de Dados',
          withAuthorization: {
            title: 'Com Autorização para Banco de Talentos',
            content: 'Seus dados serão mantidos em nosso banco de talentos por até 2 (dois) anos, podendo ser utilizados para futuras oportunidades compatíveis com seu perfil.'
          },
          withoutAuthorization: {
            title: 'Sem Autorização para Banco de Talentos',
            content: 'Seus dados serão utilizados apenas para esta candidatura específica. Após a conclusão do processo seletivo, serão eliminados, preservando somente informações necessárias para registro histórico e cumprimento de obrigações legais.'
          }
        },
        
        rights: {
          title: '6. Seus Direitos',
          intro: 'Como titular dos dados, você possui os seguintes direitos:',
          items: {
            confirmation: 'Confirmação da existência de tratamento',
            access: 'Acesso aos dados',
            correction: 'Correção de dados incompletos ou inexatos',
            blocking: 'Bloqueio ou eliminação de dados',
            portability: 'Portabilidade dos dados',
            revocation: 'Revogação do consentimento'
          }
        },
        
        security: {
          title: '7. Segurança dos Dados',
          content: 'Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição não autorizada.'
        },
        
        contact: {
          title: '8. Contato - Data Protection Officer (DPO)',
          email: 'E-mail:',
          phone: 'Telefone:',
          address: 'Endereço:'
        },

        address: {
          description: ' Rua Alagoas, 253 - Ipsep, Recife - PE, 51350-000'
        },
        
        changes: {
          title: '9. Alterações neste Aviso',
          content: 'Este aviso de privacidade pode ser atualizado periodicamente. Recomendamos que consulte regularmente esta página para se manter informado sobre eventuais alterações.'
        }
      },
      
      backButton: 'Voltar'
    }
  },
  
  en: {
    privacyNotice: {
      heroTitle: 'Privacy Notice',
      heroSubtitle: 'Personal Data Protection',
      
      header: {
        title: 'Privacy Notice - Selection Processes',
        lastUpdated: 'Last updated:'
      },
      
      sections: {
        purpose: {
          title: '1. Purpose of Processing',
          content: 'Uni Hospitalar collects and processes your personal data exclusively for selection processes, candidate evaluation and talent pool formation, when authorized by the data subject.'
        },
        
        dataCollected: {
          title: '2. Data Collected',
          intro: 'During the selection process, we collect the following categories of data:',
          items: {
            identification: 'Identification data (name, CPF, ID)',
            contact: 'Contact data (phone, email, address)',
            professional: 'Professional data (experience, education, skills)',
            documents: 'Attached documents (resume, certificates)',
            interviews: 'Information provided in interviews and evaluations'
          }
        },
        
        legalBasis: {
          title: '3. Legal Basis',
          content: 'The processing of your personal data is carried out based on the legitimate interest of the company for conducting selection processes and, when applicable, on specific consent for inclusion in the talent pool.'
        },
        
        dataSharing: {
          title: '4. Data Sharing',
          intro: 'Your personal data may be shared with:',
          items: {
            hr: 'Internal Human Resources team',
            managers: 'Managers of requesting areas',
            providers: 'Specialized recruitment service providers',
            authorities: 'Competent authorities, when required by law'
          }
        },
        
        dataRetention: {
          title: '5. Data Retention',
          withAuthorization: {
            title: 'With Authorization for Talent Pool',
            content: 'Your data will be kept in our talent pool for up to 2 (two) years and may be used for future opportunities compatible with your profile.'
          },
          withoutAuthorization: {
            title: 'Without Authorization for Talent Pool',
            content: 'Your data will be used only for this specific application. After completion of the selection process, it will be deleted, preserving only information necessary for historical records and compliance with legal obligations.'
          }
        },
        
        rights: {
          title: '6. Your Rights',
          intro: 'As a data subject, you have the following rights:',
          items: {
            confirmation: 'Confirmation of the existence of processing',
            access: 'Access to data',
            correction: 'Correction of incomplete or inaccurate data',
            blocking: 'Blocking or deletion of data',
            portability: 'Data portability',
            revocation: 'Revocation of consent'
          }
        },
        
        security: {
          title: '7. Data Security',
          content: 'We implement adequate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure or unauthorized destruction.'
        },
        
        contact: {
          title: '8. Contact - Data Protection Officer (DPO)',
          email: 'Email:',
          phone: 'Phone:',
          address: 'Address:'
        },

        address: {
          description: ' 253 Alagoas Street – Ipsep, Recife – PE, 51350-000, Brazil'
        },
        
        changes: {
          title: '9. Changes to this Notice',
          content: 'This privacy notice may be updated periodically. We recommend that you regularly check this page to stay informed about any changes.'
        }
      },
      
      backButton: 'Back'
    }
  },
  
  es: {
    privacyNotice: {
      heroTitle: 'Aviso de Privacidad',
      heroSubtitle: 'Protección de Datos Personales',
      
      header: {
        title: 'Aviso de Privacidad - Procesos Selectivos',
        lastUpdated: 'Última actualización:'
      },
      
      sections: {
        purpose: {
          title: '1. Finalidad del Tratamiento',
          content: 'Uni Hospitalar recopila y trata sus datos personales exclusivamente para fines de procesos selectivos, evaluación de candidaturas y formación de banco de talentos, cuando sea autorizado por el titular de los datos.'
        },
        
        dataCollected: {
          title: '2. Datos Recopilados',
          intro: 'Durante el proceso selectivo, recopilamos las siguientes categorías de datos:',
          items: {
            identification: 'Datos de identificación (nombre, CPF, cédula)',
            contact: 'Datos de contacto (teléfono, correo electrónico, dirección)',
            professional: 'Datos profesionales (experiencia, formación, habilidades)',
            documents: 'Documentos adjuntos (currículum, certificados)',
            interviews: 'Información proporcionada en entrevistas y evaluaciones'
          }
        },
        
        legalBasis: {
          title: '3. Base Legal',
          content: 'El tratamiento de sus datos personales se realiza con base en el interés legítimo de la empresa para la conducción de procesos selectivos y, cuando sea aplicable, en el consentimiento específico para inclusión en el banco de talentos.'
        },
        
        dataSharing: {
          title: '4. Compartir Datos',
          intro: 'Sus datos personales pueden ser compartidos con:',
          items: {
            hr: 'Equipo interno de Recursos Humanos',
            managers: 'Gerentes de las áreas solicitantes',
            providers: 'Proveedores de servicios especializados en reclutamiento',
            authorities: 'Autoridades competentes, cuando sea exigido por ley'
          }
        },
        
        dataRetention: {
          title: '5. Retención de Datos',
          withAuthorization: {
            title: 'Con Autorización para Banco de Talentos',
            content: 'Sus datos serán mantenidos en nuestro banco de talentos por hasta 2 (dos) años, pudiendo ser utilizados para futuras oportunidades compatibles con su perfil.'
          },
          withoutAuthorization: {
            title: 'Sin Autorización para Banco de Talentos',
            content: 'Sus datos serán utilizados solo para esta candidatura específica. Después de la conclusión del proceso selectivo, serán eliminados, preservando solamente información necesaria para registro histórico y cumplimiento de obligaciones legales.'
          }
        },
        
        rights: {
          title: '6. Sus Derechos',
          intro: 'Como titular de los datos, usted posee los siguientes derechos:',
          items: {
            confirmation: 'Confirmación de la existencia de tratamiento',
            access: 'Acceso a los datos',
            correction: 'Corrección de datos incompletos o inexactos',
            blocking: 'Bloqueo o eliminación de datos',
            portability: 'Portabilidad de los datos',
            revocation: 'Revocación del consentimiento'
          }
        },
        
        security: {
          title: '7. Seguridad de los Datos',
          content: 'Implementamos medidas técnicas y organizacionales adecuadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción no autorizada.'
        },
        
        contact: {
          title: '8. Contacto - Data Protection Officer (DPO)',
          email: 'Correo electrónico:',
          phone: 'Teléfono:',
          address: 'Dirección:'
        },

        address: {
          description: ' Calle Alagoas 253 – Ipsep, Recife – PE, 51350-000, Brasil'
        },
        
        changes: {
          title: '9. Cambios en este Aviso',
          content: 'Este aviso de privacidad puede ser actualizado periódicamente. Recomendamos que consulte regularmente esta página para mantenerse informado sobre eventuales cambios.'
        }
      },
      
      backButton: 'Volver'
    }
  }
})

export function usePrivacyNoticeTranslation() {
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
