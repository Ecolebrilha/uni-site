import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    terms: {
      heroTitle: 'Termos Legais',
      heroSubtitle: 'Condições de uso do nosso site',
      introTitle: 'Nossos Termos de Uso',
      introText: 'O nosso site foi desenvolvido para os clientes, colaboradores, parceiros e todos que se relacionam com a Uni Hospitalar, assim como para visitantes interessados em nossos serviços. Estes Termos de Uso podem ser alterados a qualquer momento pela Uni Hospitalar, sendo uma nova versão atualizada publicada em nosso site.',
      sections: {
        usage: {
          title: 'Termos de Uso',
          text: 'O nosso site foi desenvolvido para os clientes, colaboradores, parceiros e todos que se relacionam com a Uni Hospitalar, assim como para visitantes interessados em nossos serviços. Estes Termos de Uso podem ser alterados a qualquer momento pela Uni Hospitalar, sendo uma nova versão atualizada publicada em nosso site.'
        },
        access: {
          title: 'Acesso ao Site',
          text: 'O site da Uni Hospitalar funciona 24 horas por dia, podendo haver interrupções temporárias para manutenção, o que tornará o site indisponível pelo tempo necessário. O acesso ao site é permitido apenas para maiores de 18 anos ou menores de idade que possuam autorização de seus responsáveis legais. Ao acessar, navegar ou utilizar o site da Uni Hospitalar, todos os visitantes concordam com estes Termos de Uso. Caso discorde de qualquer parte deste documento, recomendamos que interrompa imediatamente a navegação.'
        },
        license: {
          title: 'Uso de Licença e Cópia',
          text1: 'É concedida permissão para acessar todo o conteúdo do site da Uni Hospitalar, incluindo a realização de downloads e cópias dos materiais, mas apenas para uso pessoal e não comercial. Esta permissão não implica em cessão de direitos ou qualquer tipo de licença permanente. Esta licença será automaticamente revogada em caso de violação de suas condições, podendo ser rescindida unilateralmente pela Uni Hospitalar a qualquer momento.',
          text2: 'Os visitantes devem utilizar o site e as informações nele contidas de maneira adequada e lícita, em conformidade com a legislação aplicável e as boas práticas de mercado. O uso indevido do site ou de seus conteúdos pode violar os direitos de propriedade intelectual da Uni Hospitalar, sendo punível nos termos da legislação vigente.'
        }
      },
      responsibilitiesTitle: 'Responsabilidades',
      responsibilities: {
        user: {
          title: 'Responsabilidade do Usuário',
          description: 'O usuário é responsável por todas as ações realizadas em sua navegação no site.'
        },
        security: {
          title: 'Segurança da Informação',
          description: 'Adotamos medidas de segurança para proteger suas informações durante a navegação.'
        },
        legislation: {
          title: 'Legislação Aplicável',
          description: 'Nossos termos estão em conformidade com a legislação brasileira vigente.'
        },
        commitment: {
          title: 'Compromisso Mútuo',
          description: 'Buscamos uma relação transparente e respeitosa com todos os usuários.'
        }
      },
      intellectualTitle: 'Propriedade Intelectual',
      intellectualText: 'Todo o conteúdo disponível no site da Uni Hospitalar, incluindo, mas não se limitando a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade exclusiva da Uni Hospitalar ou de seus fornecedores de conteúdo e está protegido pelas leis brasileiras e tratados internacionais de direitos autorais.',
      intellectualFeatures: {
        trademarks: 'Marcas e logotipos são propriedade da Uni Hospitalar',
        reproduction: 'Reprodução de conteúdo apenas com autorização prévia',
        misuse: 'Uso indevido sujeito às penalidades legais',
        respect: 'Respeito aos direitos autorais e propriedade intelectual'
      },
      ctaTitle: 'Dúvidas sobre nossos termos?',
      ctaText: 'Se você tiver qualquer dúvida sobre nossos termos legais ou precisar de esclarecimentos adicionais, entre em contato conosco.',
      ctaButtons: {
        privacy: 'Política de Privacidade',
        contact: 'Fale Conosco'
      }
    }
  },
  en: {
    terms: {
      heroTitle: 'Legal Terms',
      heroSubtitle: 'Terms and conditions of use of our website',
      introTitle: 'Our Terms of Use',
      introText: 'Our website was developed for customers, employees, partners and all those who relate to Uni Hospitalar, as well as for visitors interested in our services. These Terms of Use may be changed at any time by Uni Hospitalar, with a new updated version published on our website.',
      sections: {
        usage: {
          title: 'Terms of Use',
          text: 'Our website was developed for customers, employees, partners and all those who relate to Uni Hospitalar, as well as for visitors interested in our services. These Terms of Use may be changed at any time by Uni Hospitalar, with a new updated version published on our website.'
        },
        access: {
          title: 'Website Access',
          text: 'The Uni Hospitalar website operates 24 hours a day, and there may be temporary interruptions for maintenance, which will make the site unavailable for the necessary time. Access to the site is permitted only for those over 18 years of age or minors who have authorization from their legal guardians. By accessing, browsing or using the Uni Hospitalar website, all visitors agree to these Terms of Use. If you disagree with any part of this document, we recommend that you immediately stop browsing.'
        },
        license: {
          title: 'License and Copy Usage',
          text1: 'Permission is granted to access all content on the Uni Hospitalar website, including downloading and copying materials, but only for personal and non-commercial use. This permission does not imply assignment of rights or any type of permanent license. This license will be automatically revoked in case of violation of its conditions and may be terminated unilaterally by Uni Hospitalar at any time.',
          text2: 'Visitors must use the site and the information contained therein in an appropriate and lawful manner, in accordance with applicable legislation and good market practices. Misuse of the site or its contents may violate Uni Hospitalar\'s intellectual property rights and is punishable under current legislation.'
        }
      },
      responsibilitiesTitle: 'Responsibilities',
      responsibilities: {
        user: {
          title: 'User Responsibility',
          description: 'The user is responsible for all actions performed while browsing the site.'
        },
        security: {
          title: 'Information Security',
          description: 'We adopt security measures to protect your information during browsing.'
        },
        legislation: {
          title: 'Applicable Legislation',
          description: 'Our terms are in compliance with current Brazilian legislation.'
        },
        commitment: {
          title: 'Mutual Commitment',
          description: 'We seek a transparent and respectful relationship with all users.'
        }
      },
      intellectualTitle: 'Intellectual Property',
      intellectualText: 'All content available on the Uni Hospitalar website, including but not limited to texts, graphics, logos, icons, images, audio clips, digital downloads and data compilations, is the exclusive property of Uni Hospitalar or its content suppliers and is protected by Brazilian laws and international copyright treaties.',
      intellectualFeatures: {
        trademarks: 'Trademarks and logos are property of Uni Hospitalar',
        reproduction: 'Content reproduction only with prior authorization',
        misuse: 'Misuse subject to legal penalties',
        respect: 'Respect for copyright and intellectual property'
      },
      ctaTitle: 'Questions about our terms?',
      ctaText: 'If you have any questions about our legal terms or need additional clarification, contact us.',
      ctaButtons: {
        privacy: 'Privacy Policy',
        contact: 'Contact Us'
      }
    }
  },
  es: {
    terms: {
      heroTitle: 'Términos Legales',
      heroSubtitle: 'Condiciones de uso de nuestro sitio web',
      introTitle: 'Nuestros Términos de Uso',
      introText: 'Nuestro sitio web fue desarrollado para clientes, empleados, socios y todos aquellos que se relacionan con Uni Hospitalar, así como para visitantes interesados en nuestros servicios. Estos Términos de Uso pueden ser modificados en cualquier momento por Uni Hospitalar, siendo publicada una nueva versión actualizada en nuestro sitio web.',
      sections: {
        usage: {
          title: 'Términos de Uso',
          text: 'Nuestro sitio web fue desarrollado para clientes, empleados, socios y todos aquellos que se relacionan con Uni Hospitalar, así como para visitantes interesados en nuestros servicios. Estos Términos de Uso pueden ser modificados en cualquier momento por Uni Hospitalar, siendo publicada una nueva versión actualizada en nuestro sitio web.'
        },
        access: {
          title: 'Acceso al Sitio Web',
          text: 'El sitio web de Uni Hospitalar funciona 24 horas al día, pudiendo haber interrupciones temporales para mantenimiento, lo que hará que el sitio no esté disponible por el tiempo necesario. El acceso al sitio está permitido solo para mayores de 18 años o menores de edad que posean autorización de sus responsables legales. Al acceder, navegar o utilizar el sitio web de Uni Hospitalar, todos los visitantes aceptan estos Términos de Uso. Si no está de acuerdo con cualquier parte de este documento, recomendamos que interrumpa inmediatamente la navegación.'
        },
        license: {
          title: 'Uso de Licencia y Copia',
          text1: 'Se concede permiso para acceder a todo el contenido del sitio web de Uni Hospitalar, incluyendo la realización de descargas y copias de los materiales, pero solo para uso personal y no comercial. Este permiso no implica cesión de derechos o cualquier tipo de licencia permanente. Esta licencia será automáticamente revocada en caso de violación de sus condiciones, pudiendo ser rescindida unilateralmente por Uni Hospitalar en cualquier momento.',
          text2: 'Los visitantes deben utilizar el sitio y la información contenida en él de manera adecuada y lícita, en conformidad con la legislación aplicable y las buenas prácticas del mercado. El uso indebido del sitio o de sus contenidos puede violar los derechos de propiedad intelectual de Uni Hospitalar, siendo punible según los términos de la legislación vigente.'
        }
      },
      responsibilitiesTitle: 'Responsabilidades',
      responsibilities: {
        user: {
          title: 'Responsabilidad del Usuario',
          description: 'El usuario es responsable de todas las acciones realizadas durante su navegación en el sitio.'
        },
        security: {
          title: 'Seguridad de la Información',
          description: 'Adoptamos medidas de seguridad para proteger su información durante la navegación.'
        },
        legislation: {
          title: 'Legislación Aplicable',
          description: 'Nuestros términos están en conformidad con la legislación brasileña vigente.'
        },
        commitment: {
          title: 'Compromiso Mutuo',
          description: 'Buscamos una relación transparente y respetuosa con todos los usuarios.'
        }
      },
      intellectualTitle: 'Propiedad Intelectual',
      intellectualText: 'Todo el contenido disponible en el sitio web de Uni Hospitalar, incluyendo pero no limitándose a textos, gráficos, logotipos, íconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad exclusiva de Uni Hospitalar o de sus proveedores de contenido y está protegido por las leyes brasileñas y tratados internacionales de derechos de autor.',
      intellectualFeatures: {
        trademarks: 'Marcas y logotipos son propiedad de Uni Hospitalar',
        reproduction: 'Reproducción de contenido solo con autorización previa',
        misuse: 'Uso indebido sujeto a penalidades legales',
        respect: 'Respeto a los derechos de autor y propiedad intelectual'
      },
      ctaTitle: '¿Dudas sobre nuestros términos?',
      ctaText: 'Si tiene alguna duda sobre nuestros términos legales o necesita aclaraciones adicionales, contáctenos.',
      ctaButtons: {
        privacy: 'Política de Privacidad',
        contact: 'Contáctenos'
      }
    }
  }
})

export function useTermsTranslation() {
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
