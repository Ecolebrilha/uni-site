import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    privacyPolicy: {
      heroTitle: 'Política de Privacidade',
      heroSubtitle: 'Nosso compromisso com a segurança e proteção de dados',
      introTitle: 'Compromisso com sua Privacidade',
      introText: 'A Uni Hospitalar valoriza a ética e a integridade em todas as suas ações. Esta Política de Privacidade tem como objetivo informar os titulares de dados pessoais sobre como suas informações são tratadas, assegurando uma relação transparente e segura.',
      dpoTitle: 'Encarregado de Proteção de Dados (dpo)',
      dpoName: 'Responsável',
      dpoEmail: 'E-mail de Contato',
      sections: {
        about: {
          title: 'Sobre a Política de Privacidade',
          text: 'Bem-vindo à Política de Privacidade da Uni Hospitalar. Nós levamos sua privacidade a sério e estamos comprometidos em proteger suas informações pessoais. Coletamos informações pessoais como nome, e-mail, telefone e empresa quando você interage com nossos serviços, sempre com seu consentimento. As informações coletadas são utilizadas para melhorar nossos serviços, personalizar sua experiência e garantir a segurança das transações.'
        },
        security: {
          title: 'Segurança e Direitos dos Usuários',
          text: 'Implementamos medidas de segurança avançadas para proteger suas informações contra acesso não autorizado e outras ameaças. Não compartilhamos suas informações com terceiros, exceto quando exigido por lei ou para proteger nossos direitos legais. Você tem o direito de acessar, corrigir e excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.'
        },
        objective: {
          title: 'Objetivo da Política de Privacidade',
          text: 'A Uni Hospitalar valoriza a ética e a integridade em todas as suas ações. Esta Política de Privacidade tem como objetivo informar os titulares de dados pessoais sobre como suas informações são tratadas, assegurando uma relação transparente e segura.'
        },
        commitment: {
          title: 'Nosso Compromisso',
          text: 'A Uni Hospitalar se compromete a oferecer um atendimento de qualidade a todos que acessam nossas plataformas digitais. Baseados no princípio da segurança, protegemos a privacidade e os dados pessoais, apresentando esta Política com clareza sobre o tratamento dos dados de nossos colaboradores, clientes e visitantes.'
        },
        protection: {
          title: 'Proteção dos Dados Pessoais',
          text: 'A Uni Hospitalar adota as melhores práticas de segurança para garantir a integridade e confidencialidade dos dados tratados. Utilizamos mecanismos robustos para proteger contra uso indevido, acessos não autorizados, danos, fraudes e outras ameaças.'
        },
        treatment: {
          title: 'Tratamento de Dados',
          text: 'A Uni Hospitalar trata os dados pessoais de maneira responsável e ética. Coletamos dados para executar atividades relacionadas aos nossos serviços, incluindo identificação, contato, informações financeiras, dados de navegação, saúde, biometria, entre outros. Todos os dados são utilizados para fins legítimos e de acordo com as legislações vigentes.'
        }
      },
      rightsTitle: 'Seus Direitos',
      rightsIntro: 'Conheça os direitos que você possui em relação aos seus dados pessoais',
      rights: {
        access: {
          title: 'Acesso aos Dados',
          description: 'Você tem o direito de acessar seus dados pessoais que estão em nossa posse.'
        },
        correction: {
          title: 'Correção',
          description: 'Você pode solicitar a correção de dados incompletos, inexatos ou desatualizados.'
        },
        deletion: {
          title: 'Exclusão',
          description: 'Você pode solicitar a exclusão de seus dados pessoais armazenados em nossos sistemas.'
        },
        opposition: {
          title: 'Oposição',
          description: 'Você pode se opor ao tratamento de seus dados pessoais em determinadas situações.'
        }
      },
      ctaTitle: 'Dúvidas sobre nossa política?',
      ctaText: 'Se você tiver qualquer dúvida sobre como tratamos seus dados ou quiser exercer seus direitos, entre em contato conosco.',
      ctaButton: 'Entre em Contato'
    }
  },
  en: {
    privacyPolicy: {
      heroTitle: 'Privacy Policy',
      heroSubtitle: 'Our commitment to data security and protection',
      introTitle: 'Commitment to Your Privacy',
      introText: 'Uni Hospitalar values ethics and integrity in all its actions. This Privacy Policy aims to inform personal data holders about how their information is treated, ensuring a transparent and secure relationship.',
      dpoTitle: 'Data Protection Officer (DPO)',
      dpoName: 'Responsible',
      dpoEmail: 'Contact Email',
      sections: {
        about: {
          title: 'About the Privacy Policy',
          text: 'Welcome to Uni Hospitalar\'s Privacy Policy. We take your privacy seriously and are committed to protecting your personal information. We collect personal information such as name, email, phone and company when you interact with our services, always with your consent. The information collected is used to improve our services, personalize your experience and ensure transaction security.'
        },
        security: {
          title: 'Security and User Rights',
          text: 'We implement advanced security measures to protect your information against unauthorized access and other threats. We do not share your information with third parties, except when required by law or to protect our legal rights. You have the right to access, correct and delete your personal information. Contact us to exercise these rights.'
        },
        objective: {
          title: 'Privacy Policy Objective',
          text: 'Uni Hospitalar values ethics and integrity in all its actions. This Privacy Policy aims to inform personal data holders about how their information is treated, ensuring a transparent and secure relationship.'
        },
        commitment: {
          title: 'Our Commitment',
          text: 'Uni Hospitalar is committed to providing quality service to all who access our digital platforms. Based on the principle of security, we protect privacy and personal data, presenting this Policy with clarity about the treatment of data from our employees, clients and visitors.'
        },
        protection: {
          title: 'Personal Data Protection',
          text: 'Uni Hospitalar adopts the best security practices to ensure the integrity and confidentiality of the data processed. We use robust mechanisms to protect against misuse, unauthorized access, damage, fraud and other threats.'
        },
        treatment: {
          title: 'Data Treatment',
          text: 'Uni Hospitalar treats personal data in a responsible and ethical manner. We collect data to perform activities related to our services, including identification, contact, financial information, browsing data, health, biometrics, among others. All data is used for legitimate purposes and in accordance with current legislation.'
        }
      },
      rightsTitle: 'Your Rights',
      rightsIntro: 'Know the rights you have regarding your personal data',
      rights: {
        access: {
          title: 'Data Access',
          description: 'You have the right to access your personal data that is in our possession.'
        },
        correction: {
          title: 'Correction',
          description: 'You can request the correction of incomplete, inaccurate or outdated data.'
        },
        deletion: {
          title: 'Deletion',
          description: 'You can request the deletion of your personal data stored in our systems.'
        },
        opposition: {
          title: 'Opposition',
          description: 'You can oppose the processing of your personal data in certain situations.'
        }
      },
      ctaTitle: 'Questions about our policy?',
      ctaText: 'If you have any questions about how we handle your data or want to exercise your rights, contact us.',
      ctaButton: 'Contact Us'
    }
  },
  es: {
    privacyPolicy: {
      heroTitle: 'Política de Privacidad',
      heroSubtitle: 'Nuestro compromiso con la seguridad y protección de datos',
      introTitle: 'Compromiso con su Privacidad',
      introText: 'Uni Hospitalar valora la ética y la integridad en todas sus acciones. Esta Política de Privacidad tiene como objetivo informar a los titulares de datos personales sobre cómo se tratan sus informaciones, asegurando una relación transparente y segura.',
      dpoTitle: 'Oficial de Protección de Datos (dpo)',
      dpoName: 'Responsable',
      dpoEmail: 'Correo de Contacto',
      sections: {
        about: {
          title: 'Sobre la Política de Privacidad',
          text: 'Bienvenido a la Política de Privacidad de Uni Hospitalar. Nos tomamos su privacidad en serio y estamos comprometidos a proteger su información personal. Recolectamos información personal como nombre, email, teléfono y empresa cuando usted interactúa con nuestros servicios, siempre con su consentimiento. La información recolectada es utilizada para mejorar nuestros servicios, personalizar su experiencia y garantizar la seguridad de las transacciones.'
        },
        security: {
          title: 'Seguridad y Derechos de los Usuarios',
          text: 'Implementamos medidas de seguridad avanzadas para proteger su información contra acceso no autorizado y otras amenazas. No compartimos su información con terceros, excepto cuando sea exigido por ley o para proteger nuestros derechos legales. Usted tiene el derecho de acceder, corregir y eliminar su información personal. Contáctenos para ejercer estos derechos.'
        },
        objective: {
          title: 'Objetivo de la Política de Privacidad',
          text: 'Uni Hospitalar valora la ética y la integridad en todas sus acciones. Esta Política de Privacidad tiene como objetivo informar a los titulares de datos personales sobre cómo se tratan sus informaciones, asegurando una relación transparente y segura.'
        },
        commitment: {
          title: 'Nuestro Compromiso',
          text: 'Uni Hospitalar se compromete a ofrecer una atención de calidad a todos los que acceden a nuestras plataformas digitales. Basados en el principio de seguridad, protegemos la privacidad y los datos personales, presentando esta Política con claridad sobre el tratamiento de los datos de nuestros colaboradores, clientes y visitantes.'
        },
        protection: {
          title: 'Protección de los Datos Personales',
          text: 'Uni Hospitalar adopta las mejores prácticas de seguridad para garantizar la integridad y confidencialidad de los datos tratados. Utilizamos mecanismos robustos para proteger contra uso indebido, accesos no autorizados, daños, fraudes y otras amenazas.'
        },
        treatment: {
          title: 'Tratamiento de Datos',
          text: 'Uni Hospitalar trata los datos personales de manera responsable y ética. Recolectamos datos para ejecutar actividades relacionadas a nuestros servicios, incluyendo identificación, contacto, informaciones financieras, datos de navegación, salud, biometría, entre otros. Todos los datos son utilizados para fines legítimos y de acuerdo con las legislaciones vigentes.'
        }
      },
      rightsTitle: 'Sus Derechos',
      rightsIntro: 'Conozca los derechos que usted posee en relación a sus datos personales',
      rights: {
        access: {
          title: 'Acceso a los Datos',
          description: 'Usted tiene el derecho de acceder a sus datos personales que están en nuestra posesión.'
        },
        correction: {
          title: 'Corrección',
          description: 'Usted puede solicitar la corrección de datos incompletos, inexactos o desactualizados.'
        },
        deletion: {
          title: 'Exclusión',
          description: 'Usted puede solicitar la exclusión de sus datos personales almacenados en nuestros sistemas.'
        },
        opposition: {
          title: 'Oposición',
          description: 'Usted puede oponerse al tratamiento de sus datos personales en determinadas situaciones.'
        }
      },
      ctaTitle: '¿Dudas sobre nuestra política?',
      ctaText: 'Si usted tiene alguna duda sobre cómo tratamos sus datos o quiere ejercer sus derechos, contáctenos.',
      ctaButton: 'Contáctenos'
    }
  }
})

export function usePrivacyPolicyTranslation() {
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
