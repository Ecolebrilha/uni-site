import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
    pt: {
        report: {
            heroTitle: 'Fazer Reclamação',
            heroSubtitle: 'Registre suas reclamações de forma segura e transparente',
            terms: {
                title: 'Termos e Condições',
                responsibility: {
                    title: 'Responsabilidade do Relator',
                    text: 'A veracidade das informações providas é uma responsabilidade do relator. Todas as informações serão verificadas durante o processo de averiguação conduzida pela área de Compliance.'
                },
                process: {
                    title: 'Processo de Averiguação',
                    text: 'As possíveis ações decorrentes serão tomadas a critério exclusivo da Uni Hospitalar, conforme procedimentos internos estabelecidos e em conformidade com a legislação vigente.'
                },
                accept: 'Concordo com os termos acima',
                reject: 'Não concordo com os termos acima'
            },
            steps: {
                basic: 'Informações Básicas',
                details: 'Detalhes do Incidente',
                evidence: 'Evidências e Finalização'
            },
            form: {
                title: 'Formulário de Relato Confidencial',
                subtitle: 'Agradecemos sua iniciativa e confiança. Por favor, descreva a situação de forma completa e detalhada.',
                step1: {
                    title: 'Informações Básicas do Relato',
                    relationship: {
                        label: 'Qual a sua relação com a Uni Hospitalar?',
                        placeholder: 'Selecione sua relação',
                        options: {
                            client: 'Cliente',
                            other: 'Outros'
                        }
                    },
                    violationType: {
                        label: 'Tipo da reclamação',
                        placeholder: 'Selecione o tipo de reclamação',
                        options: {
                            productDefect: 'Defeito no produto',
                            wrongQuantity: 'Quantidade incorreta',
                            expiredProduct: 'Produto vencido',
                            productViolation: 'Violação de especificações do produto',
                            damagedProduct: 'Produto danificado',
                            incorrectProduct: 'Produto incorreto/trocado',
                            missingItems: 'Itens faltando na entrega',
                            packagingIssue: 'Problema na embalagem',
                            qualityIssue: 'Problema de qualidade',
                            other: 'Outros'
                        }
                    },
                },
                step2: {
                    title: 'Detalhes do Incidente',
                    date: 'Qual a data ou período aproximado em que a situação ocorreu?',
                    invoiceNumber: 'Número da Nota Fiscal',
                    invoiceNumberPlaceholder: 'Digite o número da NF',
                    productName: 'Nome do produto',
                    productNamePlaceholder: 'Digite o nome do produto',
                    description: 'Descreva detalhadamente a situação',
                    descriptionPlaceholder: 'Descreva o que aconteceu de forma completa e detalhada...',
                    descriptionHelp: 'É importante que sua reclamação seja completa e detalhada. Não se esqueça de incluir:',
                    helpItems: {
                        what: 'O que aconteceu (descrição da situação)',
                        when: 'Quando (data em que aconteceu)',
                        where: 'Onde (local da compra ou entrega)',
                        how: 'Como (circunstâncias do problema)',
                        evidence: 'Evidências (fotos, documentos, etc.)'
                    }
                },
                step3: {
                    title: 'Evidências e Informações Adicionais',
                    relatedReport: 'Este relato está ligado a outro registro anterior?',
                    relatedReportPlaceholder: 'Se sim, informe o número do protocolo anterior',
                    evidence: 'Anexar arquivos de evidência',
                    evidenceHelp: 'Clique ou arraste arquivos aqui',
                    evidenceFormats: 'Formatos aceitos: PDF, DOC, DOCX, JPG, JPEG, PNG',
                    confidenceLevel: 'Qual o seu nível de confiança neste canal?',
                    noConfidence: 'Não confia',
                    fullConfidence: 'Confia muito',
                    personalData: 'Dados Pessoais obrigatórios',
                    name: 'Nome completo',
                    namePlaceholder: 'Seu nome completo',
                    institution: 'Nome da Instituição',
                    institutionPlaceholder: 'Nome da sua instituição',
                    email: 'E-mail',
                    emailPlaceholder: 'Seu e-mail para contato',
                    phone: 'Telefone',
                    phonePlaceholder: 'Seu telefone'
                },
                navigation: {
                    previous: 'Anterior',
                    next: 'Próximo',
                    submit: 'Enviar Relato',
                    submitting: 'Enviando...'
                }
            },
            success: {
                title: 'Relato Enviado com Sucesso!',
                message: 'Seu relato foi recebido e será analisado pela nossa equipe de Compliance. Mantenha os códigos abaixo para acompanhar o andamento.',
                trackingInfo: 'Informações para Acompanhamento',
                protocolNumber: 'Número do Protocolo',
                accessCode: 'Código de Acesso',
                copyBoth: 'Copiar Ambos os Códigos',
                instructions: 'IMPORTANTE: Anote estes códigos para poder acompanhar o andamento das averiguações. Você precisará de AMBOS os códigos para consultar o status do seu relato.',
                backToChannel: 'Voltar ao Canal',
                homePage: 'Página Inicial'
            },
            validation: {
                required: 'Este campo é obrigatório',
                minLength: 'Mínimo de {min} caracteres',
                descriptionMinLength: 'A descrição deve ter pelo menos 20 caracteres',
                invalidEmail: 'E-mail inválido',
                invalidPhone: 'Telefone inválido',
                futureDate: 'A data não pode ser no futuro'
            },
        }
    },
    en: {
        report: {
            heroTitle: 'Make Complaint',
            heroSubtitle: 'Register your complaints safely and transparently',
            terms: {
                title: 'Terms and Conditions',
                responsibility: {
                    title: 'Reporter Responsibility',
                    text: 'The veracity of the information provided is the responsibility of the reporter. All information will be verified during the investigation process conducted by the Compliance area.'
                },
                process: {
                    title: 'Investigation Process',
                    text: 'Possible resulting actions will be taken at the exclusive discretion of Uni Hospitalar, according to established internal procedures and in compliance with current legislation.'
                },
                accept: 'I agree with the terms above',
                reject: 'I do not agree with the terms above'
            },
            steps: {
                basic: 'Basic Information',
                details: 'Incident Details',
                evidence: 'Evidence and Completion'
            },
            form: {
                title: 'Confidential Report Form',
                subtitle: 'We appreciate your initiative and trust. Please describe the situation completely and in detail.',
                step1: {
                    title: 'Basic Report Information',
                    relationship: {
                        label: 'What is your relationship with Uni Hospitalar?',
                        placeholder: 'Select your relationship',
                        options: {
                            client: 'Client',
                            other: 'Others'
                        }
                    },
                    violationType: {
                        label: 'Type of complaint',
                        placeholder: 'Select the type of complaint',
                        options: {
                            productDefect: 'Product defect',
                            wrongQuantity: 'Wrong quantity',
                            expiredProduct: 'Expired product',
                            productViolation: 'Product specification violation',
                            damagedProduct: 'Damaged product',
                            incorrectProduct: 'Incorrect/wrong product',
                            missingItems: 'Missing items in delivery',
                            packagingIssue: 'Packaging issue',
                            qualityIssue: 'Quality issue',
                            other: 'Others'
                        }
                    },
                },
                step2: {
                    title: 'Incident Details',
                    date: 'What is the approximate date or period when the situation occurred?',
                    invoiceNumber: 'Invoice Number',
                    invoiceNumberPlaceholder: 'Enter the invoice number',
                    productName: 'Product name',
                    productNamePlaceholder: 'Enter the product name',
                    description: 'Describe the situation in detail',
                    descriptionPlaceholder: 'Describe what happened completely and in detail...',
                    descriptionHelp: 'It is important that your complaint is complete and detailed. Do not forget to include:',
                    helpItems: {
                        what: 'What happened (description of the situation)',
                        when: 'When (date it happened)',
                        where: 'Where (place of purchase or delivery)',
                        how: 'How (circumstances of the problem)',
                        evidence: 'Evidence (photos, documents, etc.)'
                    }
                },
                step3: {
                    title: 'Evidence and Additional Information',
                    relatedReport: 'Is this report linked to another previous record?',
                    relatedReportPlaceholder: 'If yes, provide the previous protocol number',
                    evidence: 'Attach evidence files',
                    evidenceHelp: 'Click or drag files here',
                    evidenceFormats: 'Accepted formats: PDF, DOC, DOCX, JPG, JPEG, PNG',
                    confidenceLevel: 'What is your level of confidence in this channel?',
                    noConfidence: 'No confidence',
                    fullConfidence: 'Full confidence',
                    personalData: 'Personal Data required',
                    name: 'Full name',
                    namePlaceholder: 'Your full name',
                    institution: 'Institution Name',
                    institutionPlaceholder: 'Your institution name',
                    email: 'Email',
                    emailPlaceholder: 'Your contact email',
                    phone: 'Phone',
                    phonePlaceholder: 'Your phone number'
                },
                navigation: {
                    previous: 'Previous',
                    next: 'Next',
                    submit: 'Submit Report',
                    submitting: 'Submitting...'
                }
            },
            success: {
                title: 'Report Successfully Submitted!',
                message: 'Your report has been received and will be analyzed by our Compliance team. Keep the codes below to track progress.',
                trackingInfo: 'Tracking Information',
                protocolNumber: 'Protocol Number',
                accessCode: 'Access Code',
                copyBoth: 'Copy Both Codes',
                instructions: 'IMPORTANT: Write down these codes to be able to track the progress of investigations. You will need BOTH codes to check the status of your report.',
                backToChannel: 'Back to Channel',
                homePage: 'Home Page'
            },
            validation: {
                required: 'This field is required',
                minLength: 'Minimum {min} characters',
                descriptionMinLength: 'Description must have at least 20 characters',
                invalidEmail: 'Invalid email',
                invalidPhone: 'Invalid phone',
                futureDate: 'Date cannot be in the future'
            },
        }
    },
    es: {
        report: {
            heroTitle: 'Hacer Queja',
            heroSubtitle: 'Registre sus quejas de forma segura y transparente',
            terms: {
                title: 'Términos y Condiciones',
                responsibility: {
                    title: 'Responsabilidad del Reportero',
                    text: 'La veracidad de las informaciones provistas es una responsabilidad del reportero. Todas las informaciones serán verificadas durante el proceso de averiguación conducida por el área de Compliance.'
                },
                process: {
                    title: 'Proceso de Averiguación',
                    text: 'Las posibles acciones resultantes serán tomadas a criterio exclusivo de Uni Hospitalar, conforme procedimientos internos establecidos y en conformidad con la legislación vigente.'
                },
                accept: 'Estoy de acuerdo con los términos arriba',
                reject: 'No estoy de acuerdo con los términos arriba'
            },
            steps: {
                basic: 'Información Básica',
                details: 'Detalles del Incidente',
                evidence: 'Evidencias y Finalización'
            },
            form: {
                title: 'Formulario de Reporte Confidencial',
                subtitle: 'Agradecemos su iniciativa y confianza. Por favor, describa la situación de forma completa y detallada.',
                step1: {
                    title: 'Información Básica del Reporte',
                    relationship: {
                        label: '¿Cuál es su relación con Uni Hospitalar?',
                        placeholder: 'Seleccione su relación',
                        options: {
                            client: 'Cliente',
                            other: 'Otros'
                        }
                    },
                    violationType: {
                        label: 'Tipo de queja',
                        placeholder: 'Seleccione el tipo de queja',
                        options: {
                            productDefect: 'Defecto del producto',
                            wrongQuantity: 'Cantidad incorrecta',
                            expiredProduct: 'Producto vencido',
                            productViolation: 'Violación de especificaciones del producto',
                            damagedProduct: 'Producto dañado',
                            incorrectProduct: 'Producto incorrecto/cambiado',
                            missingItems: 'Artículos faltantes en la entrega',
                            packagingIssue: 'Problema en el empaque',
                            qualityIssue: 'Problema de calidad',
                            other: 'Otros'
                        }
                    },
                },
                step2: {
                    title: 'Detalles del Incidente',
                    date: '¿Cuál es la fecha o período aproximado en que ocurrió la situación?',
                    invoiceNumber: 'Número de Factura',
                    invoiceNumberPlaceholder: 'Ingrese el número de factura',
                    productName: 'Nombre del producto',
                    productNamePlaceholder: 'Ingrese el nombre del producto',
                    description: 'Describa detalladamente la situación',
                    descriptionPlaceholder: 'Describa lo que pasó de forma completa y detallada...',
                    descriptionHelp: 'Es importante que su queja sea completa y detallada. No se olvide de incluir:',
                    helpItems: {
                        what: 'Qué pasó (descripción de la situación)',
                        when: 'Cuándo (fecha en que pasó)',
                        where: 'Dónde (lugar de compra o entrega)',
                        how: 'Cómo (circunstancias del problema)',
                        evidence: 'Evidencias (fotos, documentos, etc.)'
                    }
                },
                step3: {
                    title: 'Evidencias e Información Adicional',
                    relatedReport: '¿Este reporte está ligado a otro registro anterior?',
                    relatedReportPlaceholder: 'Si sí, informe el número del protocolo anterior',
                    evidence: 'Adjuntar archivos de evidencia',
                    evidenceHelp: 'Haga clic o arrastre archivos aquí',
                    evidenceFormats: 'Formatos aceptados: PDF, DOC, DOCX, JPG, JPEG, PNG',
                    confidenceLevel: '¿Cuál es su nivel de confianza en este canal?',
                    noConfidence: 'No confía',
                    fullConfidence: 'Confía mucho',
                    personalData: 'Datos Personales obligatorios',
                    name: 'Nombre completo',
                    namePlaceholder: 'Su nombre completo',
                    institution: 'Nombre de la Institución',
                    institutionPlaceholder: 'Nombre de su institución',
                    email: 'E-mail',
                    emailPlaceholder: 'Su e-mail para contacto',
                    phone: 'Teléfono',
                    phonePlaceholder: 'Su número de teléfono',
                },
                navigation: {
                    previous: 'Anterior',
                    next: 'Siguiente',
                    submit: 'Enviar Reporte',
                    submitting: 'Enviando...'
                }
            },
            success: {
                title: '¡Reporte Enviado con Éxito!',
                message: 'Su reporte fue recibido y será analizado por nuestro equipo de Compliance. Mantenga los códigos abajo para acompañar el progreso.',
                trackingInfo: 'Información para Seguimiento',
                protocolNumber: 'Número de Protocolo',
                accessCode: 'Código de Acceso',
                copyBoth: 'Copiar Ambos Códigos',
                instructions: 'IMPORTANTE: Anote estos códigos para poder acompañar el progreso de las averiguaciones. Necesitará AMBOS códigos para consultar el estado de su reporte.',
                backToChannel: 'Volver al Canal',
                homePage: 'Página Inicial'
            },
            validation: {
                required: 'Este campo es obligatorio',
                minLength: 'Mínimo {min} caracteres',
                descriptionMinLength: 'La descripción debe tener al menos 20 caracteres',
                invalidEmail: 'E-mail inválido',
                invalidPhone: 'Teléfono inválido',
                futureDate: 'La fecha no puede ser en el futuro'
            }
        }
    }
})

export function useComplaintTranslation() {
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
