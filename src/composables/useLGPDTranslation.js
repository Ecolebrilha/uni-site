import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    lgpd: {
      heroTitle: 'Privacidade e Proteção de Dados',
      heroSubtitle: 'Seu parceiro de confiança em distribuição farmacêutica',
      introTitle: 'Nosso Compromisso com a Privacidade',
      introText: 'A Uni Hospitalar reconhece a importância fundamental da Lei Geral de Proteção de Dados (LGPD) e está comprometida com a implementação de práticas de proteção de dados pessoais. Compreendemos que o setor de saúde demanda padrões elevados de segurança e confidencialidade, e por isso dedicamos recursos e esforços contínuos para garantir a proteção adequada das informações dos titulares que atendemos.',
      introText2: 'Nossa abordagem para a proteção de dados é baseada em princípios éticos e no respeito aos direitos dos titulares. Trabalhamos continuamente para assegurar que o tratamento de dados pessoais em nossas operações seja realizado de forma transparente e em conformidade com a legislação aplicável, refletindo nossos valores corporativos e responsabilidade social.',
      introText3: 'Mantemos um programa estruturado de governança em privacidade que abrange desde a adequação de processos internos até a capacitação contínua de nossa equipe. Para nós, o cumprimento da LGPD representa não apenas uma obrigação legal, mas também um diferencial ético que fortalece as relações comerciais e contribui para um ecossistema de saúde mais seguro e confiável.',
      dpoTitle: 'Encarregado de Proteção de Dados (DPO)',
      dpoName: 'Responsável',
      dpoEmail: 'E-mail de Contato',
      security: {
        title: 'Segurança da Informação',
        card1: {
          text: 'A Uni Hospitalar valoriza a segurança da informação como elemento fundamental nas relações comerciais com nossos parceiros. Adotamos medidas de proteção adequadas ao nosso segmento de atuação, buscando resguardar tanto as informações de negócio quanto os dados pessoais tratados em nossas operações.'
        },
        card2: {
          text: 'Nossas práticas de segurança são estruturadas para manter a confidencialidade das informações comerciais sensíveis, a integridade dos dados operacionais e a disponibilidade dos recursos necessários ao atendimento de nossos clientes.'
        },
        card3: {
          text: 'Entendemos que a confiança se constrói através de práticas consistentes. Por isso, mantemos uma estrutura dedicada à segurança e promovemos a conscientização de nossa equipe sobre a importância da proteção das informações.'
        },
        card4: {
          text: 'Isso inclui cuidados específicos com dados pessoais, em alinhamento com as exigências da LGPD, assim como a proteção adequada das informações comerciais compartilhadas por nossos parceiros.'
        },
        card5: {
          text: 'A Uni Hospitalar mantém sua estrutura de segurança em constante aprimoramento, acompanhando as necessidades do mercado farmacêutico e hospitalar.'
        },
        card6: {
          text: 'Sempre com o objetivo de ser um parceiro confiável para as instituições que atendemos.'
        }
      },
      documents: {
        title: 'Documentos de Privacidade',
        privacyPolicy: {
          title: 'Política de Privacidade',
          description: 'Acesse nossa política para compreender como tratamos os dados pessoais na Uni Hospitalar.'
        },
        cookiesPolicy: {
          title: 'Declaração de Cookies',
          description: 'Saiba como utilizamos cookies e tecnologias similares em nosso site.'
        },
        recruitmentNotice: {
          title: 'Aviso de Privacidade - Processos Seletivos',
          description: 'Informações específicas para candidatos que participam dos nossos processos de recrutamento e seleção.'
        }
      },
      dataSubject: {
        title: 'Área do Titular de Dados',
        intro: 'Se você é um titular de dados pessoais cujas informações são tratadas pela Uni Hospitalar, saiba que a Lei Geral de Proteção de Dados (LGPD) lhe assegura uma série de direitos. Reconhecemos e respeitamos todos esses direitos, e disponibilizamos canais adequados para que você possa exercê-los de forma simples e efetiva. A transparência e o respeito aos direitos dos titulares são fundamentais em nossa atuação.',
        rightsTitle: 'Seus Direitos como Titular de Dados',
        rightsText: 'A LGPD garante diversos direitos aos titulares de dados pessoais, incluindo, por exemplo, o direito de confirmação sobre a existência de tratamento, acesso aos dados, correção de informações incompletas ou desatualizadas, anonimização ou eliminação de dados desnecessários, portabilidade, informação sobre o compartilhamento, além da possibilidade de revogar consentimento quando aplicável.',
        rightsText2: 'Para conhecer todos os seus direitos e obter informações detalhadas sobre como exercê-los, consulte nossa Política de Privacidade.',
        exerciseTitle: 'Como Exercer Seus Direitos',
        exerciseText: 'Para exercer qualquer um dos seus direitos ou esclarecer dúvidas sobre o tratamento dos seus dados pessoais, você pode entrar em contato com nosso Encarregado de Proteção de Dados:',
        formTitle: 'Exerça seus direitos',
        formSubtitle: 'Preencha os campos abaixo para solicitar o exercício de seus direitos previstos na LGPD. Todas as solicitações serão analisadas e respondidas em conformidade com os prazos legais estabelecidos.',
        form: {
          name: 'Nome completo',
          email: 'E-mail',
          phone: 'Telefone',
          relationship: 'Tipo de relação do titular com a Uni Hospitalar',
          relationshipOptions: {
            client: 'Cliente',
            employee: 'Colaborador',
            exEmployee: 'Ex-colaborador',
            supplier: 'Fornecedor ou prestador de serviço',
            candidate: 'Candidato à Vaga de Emprego',
            other: 'Outro'
          },
          requestType: 'Tipo de solicitação',
          requestTypeOptions: {
            confirm: 'Confirmar a existência de tratamento dos dados',
            access: 'Solicitar acesso',
            portability: 'Solicitar portabilidade',
            deletion: 'Eliminação ou exclusão de dados pessoais',
            correction: 'Atualização e correção de dados pessoais',
            sharing: 'Informações sobre o uso compartilhado de dados pessoais',
            revoke: 'Revogação de consentimento',
            other: 'Outro'
          },
          details: 'Detalhe da solicitação (opcional)',
          disclaimer: {
            text: 'Ao enviar este formulário, você reconhece nossa',
            privacyPolicy: 'Política de Privacidade',
            continuation: 'e está ciente de que seus dados pessoais serão tratados exclusivamente para fins de identificação, validação e atendimento da sua solicitação relacionada ao exercício dos seus direitos como titular de dados. As informações fornecidas serão utilizadas pelo nosso Encarregado de Proteção de Dados para processar adequadamente sua demanda, manter registro do atendimento conforme exigências legais e realizar as comunicações necessárias durante o processo.',
          },
          submit: 'Enviar solicitação',
          placeholders: {
            name: 'Digite seu nome completo',
            email: 'Digite seu e-mail',
            phone: 'Digite seu telefone',
            relationship: 'Selecione sua relação com a empresa',
            requestType: 'Selecione o tipo de solicitação',
            details: 'Descreva detalhadamente sua solicitação...'
          },
        }
      },
      ctaTitle: 'Na Uni Hospitalar, reconhecemos a importância fundamental da proteção de dados no setor de saúde.',
      ctaText: 'Como distribuidora no segmento B2B de medicamentos, estamos comprometidos em construir relacionamentos transparentes e seguros com nossos parceiros comerciais.',
      ctaButtons: {
        privacy: 'Política de Privacidade',
        contact: 'Fale Conosco'
      }
    }
  },
  en: {
    lgpd: {
      heroTitle: 'Privacy and Data Protection',
      heroSubtitle: 'Your trusted partner in pharmaceutical distribution',
      introTitle: 'Our Commitment to Privacy',
      introText: 'Uni Hospitalar recognizes the fundamental importance of the General Data Protection Law (LGPD) and is committed to implementing personal data protection practices. We understand that the healthcare sector demands high standards of security and confidentiality, and therefore we dedicate continuous resources and efforts to ensure adequate protection of the information of the data subjects we serve.',
      introText2: 'Our approach to data protection is based on ethical principles and respect for the rights of data subjects. We work continuously to ensure that the processing of personal data in our operations is carried out transparently and in compliance with applicable legislation, reflecting our corporate values and social responsibility.',
      introText3: 'We maintain a structured privacy governance program that ranges from adapting internal processes to continuous training of our team. For us, LGPD compliance represents not only a legal obligation, but also an ethical differential that strengthens commercial relationships and contributes to a safer and more reliable healthcare ecosystem.',
      dpoTitle: 'Data Protection Officer (DPO)',
      dpoName: 'Responsible',
      dpoEmail: 'Contact Email',
      security: {
        title: 'Information Security',
        card1: {
          text: 'Uni Hospitalar values information security as a fundamental element in commercial relationships with our partners. We adopt protection measures appropriate to our segment of operation, seeking to safeguard both business information and personal data processed in our operations.'
        },
        card2: {
          text: 'Our security practices are structured to maintain the confidentiality of sensitive commercial information, the integrity of operational data and the availability of resources necessary to serve our clients.'
        },
        card3: {
          text: 'We understand that trust is built through consistent practices. Therefore, we maintain a structure dedicated to security and promote awareness among our team about the importance of information protection.'
        },
        card4: {
          text: 'This includes specific care with personal data, in alignment with LGPD requirements, as well as adequate protection of commercial information shared by our partners.'
        },
        card5: {
          text: 'Uni Hospitalar maintains its security structure in constant improvement, following the needs of the pharmaceutical and hospital market.'
        },
        card6: {
          text: 'Always with the objective of being a reliable partner for the institutions we serve.'
        }
      },
      documents: {
        title: 'Privacy Documents',
        privacyPolicy: {
          title: 'Privacy Policy',
          description: 'Access our policy to understand how we handle personal data at Uni Hospitalar.'
        },
        cookiesPolicy: {
          title: 'Cookie Statement',
          description: 'Learn how we use cookies and similar technologies on our website.'
        },
        recruitmentNotice: {
          title: 'Privacy Notice - Selection Processes',
          description: 'Specific information for candidates who participate in our recruitment and selection processes.'
        }
      },
      dataSubject: {
        title: 'Data Subject Area',
        intro: 'If you are a personal data subject whose information is processed by Uni Hospitalar, know that the General Data Protection Law (LGPD) guarantees you a series of rights. We recognize and respect all these rights, and we provide adequate channels so that you can exercise them in a simple and effective way. Transparency and respect for the rights of data subjects are fundamental in our operations.',
        rightsTitle: 'Your Rights as a Data Subject',
        rightsText: 'The LGPD guarantees various rights to personal data subjects, including, for example, the right to confirmation about the existence of processing, access to data, correction of incomplete or outdated information, anonymization or elimination of unnecessary data, portability, information about sharing, in addition to the possibility of revoking consent when applicable.',
        rightsText2: 'To know all your rights and obtain detailed information on how to exercise them, consult our Privacy Policy.',
        exerciseTitle: 'How to Exercise Your Rights',
        exerciseText: 'To exercise any of your rights or clarify doubts about the processing of your personal data, you can contact our Data Protection Officer:',
        formTitle: 'Exercise your rights',
        formSubtitle: 'Fill in the fields below to request the exercise of your rights provided for in the LGPD. All requests will be analyzed and responded to in accordance with established legal deadlines.',
        form: {
          name: 'Full name',
          email: 'Email',
          phone: 'Phone',
          relationship: 'Type of relationship between the data subject and Uni Hospitalar',
          relationshipOptions: {
            client: 'Client',
            employee: 'Employee',
            exEmployee: 'Former employee',
            supplier: 'Supplier or service provider',
            candidate: 'Job Candidate',
            other: 'Other'
          },
          requestType: 'Type of request',
          requestTypeOptions: {
            confirm: 'Confirm the existence of data processing',
            access: 'Request access',
            portability: 'Request portability',
            deletion: 'Elimination or deletion of personal data',
            correction: 'Update and correction of personal data',
            sharing: 'Information about shared use of personal data',
            revoke: 'Revocation of consent',
            other: 'Other'
          },
          details: 'Request details (optional)',
          disclaimer: {
            text: 'By submitting this form, you acknowledge our',
            privacyPolicy: 'Privacy Policy',
            continuation: 'and are aware that your personal data will be processed exclusively for identification, validation and service purposes of your request related to the exercise of your rights as a data subject. The information provided will be used by our Data Protection Officer to properly process your demand, maintain service records according to legal requirements and carry out the necessary communications during the process.',
          },
          submit: 'Submit request',
          placeholders: {
            name: 'Enter your full name',
            email: 'Enter your email',
            phone: 'Enter your phone',
            relationship: 'Select your relationship with the company',
            requestType: 'Select the type of request',
            details: 'Describe your request in detail...'
          },
        }
      },
      ctaTitle: 'At Uni Hospitalar, we recognize the fundamental importance of data protection in the healthcare sector.',
      ctaText: 'As a distributor in the B2B pharmaceutical segment, we are committed to building transparent and secure relationships with our commercial partners.',
      ctaButtons: {
        privacy: 'Privacy Policy',
        contact: 'Contact Us'
      }
    }
  },
  es: {
    lgpd: {
      heroTitle: 'Privacidad y Protección de Datos',
      heroSubtitle: 'Su socio de confianza en distribución farmacéutica',
      introTitle: 'Nuestro Compromiso con la Privacidad',
      introText: 'Uni Hospitalar reconoce la importancia fundamental de la Ley General de Protección de Datos (LGPD) y está comprometida con la implementación de prácticas de protección de datos personales. Comprendemos que el sector de salud demanda estándares elevados de seguridad y confidencialidad, y por eso dedicamos recursos y esfuerzos continuos para garantizar la protección adecuada de las informaciones de los titulares que atendemos.',
      introText2: 'Nuestro enfoque para la protección de datos se basa en principios éticos y en el respeto a los derechos de los titulares. Trabajamos continuamente para asegurar que el tratamiento de datos personales en nuestras operaciones sea realizado de forma transparente y en conformidad con la legislación aplicable, reflejando nuestros valores corporativos y responsabilidad social.',
      introText3: 'Mantenemos un programa estructurado de gobernanza en privacidad que abarca desde la adecuación de procesos internos hasta la capacitación continua de nuestro equipo. Para nosotros, el cumplimiento de la LGPD representa no solo una obligación legal, sino también un diferencial ético que fortalece las relaciones comerciales y contribuye para un ecosistema de salud más seguro y confiable.',
      dpoTitle: 'Oficial de Protección de Datos (DPO)',
      dpoName: 'Responsable',
      dpoEmail: 'Correo de Contacto',
      security: {
        title: 'Seguridad de la Información',
        card1: {
          text: 'Uni Hospitalar valora la seguridad de la información como elemento fundamental en las relaciones comerciales con nuestros socios. Adoptamos medidas de protección adecuadas a nuestro segmento de actuación, buscando resguardar tanto las informaciones de negocio como los datos personales tratados en nuestras operaciones.'
        },
        card2: {
          text: 'Nuestras prácticas de seguridad están estructuradas para mantener la confidencialidad de las informaciones comerciales sensibles, la integridad de los datos operacionales y la disponibilidad de los recursos necesarios para la atención de nuestros clientes.'
        },
        card3: {
          text: 'Entendemos que la confianza se construye a través de prácticas consistentes. Por eso, mantenemos una estructura dedicada a la seguridad y promovemos la concientización de nuestro equipo sobre la importancia de la protección de las informaciones.'
        },
        card4: {
          text: 'Esto incluye cuidados específicos con datos personales, en alineación con las exigencias de la LGPD, así como la protección adecuada de las informaciones comerciales compartidas por nuestros socios.'
        },
        card5: {
          text: 'Uni Hospitalar mantiene su estructura de seguridad en constante mejoramiento, acompañando las necesidades del mercado farmacéutico y hospitalario.'
        },
        card6: {
          text: 'Siempre con el objetivo de ser un socio confiable para las instituciones que atendemos.'
        }
      },
      documents: {
        title: 'Documentos de Privacidad',
        privacyPolicy: {
          title: 'Política de Privacidad',
          description: 'Acceda a nuestra política para comprender cómo tratamos los datos personales en Uni Hospitalar.'
        },
        cookiesPolicy: {
          title: 'Declaración de Cookies',
          description: 'Sepa cómo utilizamos cookies y tecnologías similares en nuestro sitio.'
        },
        recruitmentNotice: {
          title: 'Aviso de Privacidad - Procesos Selectivos',
          description: 'Informaciones específicas para candidatos que participan de nuestros procesos de reclutamiento y selección.'
        }
      },
      dataSubject: {
        title: 'Área del Titular de Datos',
        intro: 'Si usted es un titular de datos personales cuyas informaciones son tratadas por Uni Hospitalar, sepa que la Ley General de Protección de Datos (LGPD) le asegura una serie de derechos. Reconocemos y respetamos todos esos derechos, y disponibilizamos canales adecuados para que usted pueda ejercerlos de forma simple y efectiva. La transparencia y el respeto a los derechos de los titulares son fundamentales en nuestra actuación.',
        rightsTitle: 'Sus Derechos como Titular de Datos',
        rightsText: 'La LGPD garantiza diversos derechos a los titulares de datos personales, incluyendo, por ejemplo, el derecho de confirmación sobre la existencia de tratamiento, acceso a los datos, corrección de informaciones incompletas o desactualizadas, anonimización o eliminación de datos innecesarios, portabilidad, información sobre el compartimiento, además de la posibilidad de revocar consentimiento cuando aplicable.',
        rightsText2: 'Para conocer todos sus derechos y obtener informaciones detalladas sobre cómo ejercerlos, consulte nuestra Política de Privacidad.',
        exerciseTitle: 'Cómo Ejercer Sus Derechos',
        exerciseText: 'Para ejercer cualquiera de sus derechos o aclarar dudas sobre el tratamiento de sus datos personales, puede entrar en contacto con nuestro Oficial de Protección de Datos:',
        formTitle: 'Ejerza sus derechos',
        formSubtitle: 'Complete los campos abajo para solicitar el ejercicio de sus derechos previstos en la LGPD. Todas las solicitudes serán analizadas y respondidas en conformidad con los plazos legales establecidos.',
        form: {
          name: 'Nombre completo',
          email: 'Correo electrónico',
          phone: 'Teléfono',
          relationship: 'Tipo de relación del titular con Uni Hospitalar',
          relationshipOptions: {
            client: 'Cliente',
            employee: 'Colaborador',
            exEmployee: 'Ex-colaborador',
            supplier: 'Proveedor o prestador de servicio',
            candidate: 'Candidato a Vacante de Empleo',
            other: 'Otro'
          },
          requestType: 'Tipo de solicitud',
          requestTypeOptions: {
            confirm: 'Confirmar la existencia de tratamiento de los datos',
            access: 'Solicitar acceso',
            portability: 'Solicitar portabilidad',
            deletion: 'Eliminación o exclusión de datos personales',
            correction: 'Actualización y corrección de datos personales',
            sharing: 'Informaciones sobre el uso compartido de datos personales',
            revoke: 'Revocación de consentimiento',
            other: 'Otro'
          },
          details: 'Detalle de la solicitud (opcional)',
          disclaimer: {
            text: 'Al enviar este formulario, usted reconoce nuestra',
            privacyPolicy: 'Política de Privacidad',
            continuation: 'y está consciente de que sus datos personales serán tratados exclusivamente para fines de identificación, validación y atención de su solicitud relacionada al ejercicio de sus derechos como titular de datos. Las informaciones proporcionadas serán utilizadas por nuestro Oficial de Protección de Datos para procesar adecuadamente su demanda, mantener registro de la atención conforme exigencias legales y realizar las comunicaciones necesarias durante el proceso.',
          },
          submit: 'Enviar solicitud',
          placeholders: {
            name: 'Ingrese su nombre completo',
            email: 'Ingrese su correo electrónico',
            phone: 'Ingrese su teléfono',
            relationship: 'Seleccione su relación con la empresa',
            requestType: 'Seleccione el tipo de solicitud',
            details: 'Describa su solicitud en detalle...'
          }
        }
      },
      ctaTitle: 'En Uni Hospitalar, reconocemos la importancia fundamental de la protección de datos en el sector de salud.',
      ctaText: 'Como distribuidora en el segmento B2B de medicamentos, estamos comprometidos en construir relaciones transparentes y seguras con nuestros socios comerciales.',
      ctaButtons: {
        privacy: 'Política de Privacidad',
        contact: 'Contáctenos'
      }
    }
  }
})

export function useLGPDTranslation() {
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
