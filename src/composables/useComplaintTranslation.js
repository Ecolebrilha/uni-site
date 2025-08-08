import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
    pt: {
        report: {
            heroTitle: 'Fazer Reclamação',
            heroSubtitle: 'Registre suas reclamações de forma segura e transparente',
            terms: {
                title: 'Termos e Condições',
                intro: 'Antes de prosseguir com sua reclamação, é importante que você leia e concorde com os termos e condições abaixo. Sua reclamação será tratada com total confidencialidade e seriedade.',
                confidentiality: {
                    title: 'Confidencialidade e Privacidade',
                    text: 'Todas as informações fornecidas serão tratadas com absoluta confidencialidade. Seus dados pessoais serão protegidos conforme a Lei Geral de Proteção de Dados (LGPD) e utilizados exclusivamente para a análise e resolução de sua reclamação.'
                },
                responsibility: {
                    title: 'Responsabilidade do Reclamante',
                    text: 'A veracidade das informações fornecidas é de responsabilidade do reclamante. Todas as informações serão verificadas durante o processo de análise conduzido pela área de Atendimento ao Cliente e Qualidade.'
                },
                process: {
                    title: 'Processo de Análise',
                    text: 'Sua reclamação será analisada por nossa equipe especializada e as ações corretivas necessárias serão tomadas conforme nossos procedimentos internos de qualidade e em conformidade com a legislação de defesa do consumidor.'
                },
                tracking: {
                    title: 'Acompanhamento da Reclamação',
                    text: 'Você receberá um código de protocolo para acompanhar o andamento de sua reclamação. Manteremos você informado sobre todas as etapas do processo de resolução através dos canais de contato fornecidos.'
                },
                dataProtection: {
                    title: 'Proteção de Dados',
                    text: 'Seus dados pessoais e informações da reclamação serão armazenados de forma segura e utilizados apenas para fins de resolução da questão apresentada. Você tem direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento.'
                },
                acceptance: 'Ao prosseguir, você declara ter lido, compreendido e concordado com todos os termos acima apresentados.',
                disclaimer: 'Lembre-se: reclamações falsas ou com informações incorretas podem prejudicar a análise e resolução do seu caso.',
                accept: 'Concordo com os termos acima',
                reject: 'Não concordo com os termos acima'
            },
            steps: {
                basic: 'Informações Básicas',
                details: 'Detalhes do Incidente',
                evidence: 'Evidências e Finalização'
            },
            form: {
                title: 'Formulário de Reclamação',
                subtitle: 'Agradecemos sua iniciativa e confiança. Por favor, descreva a situação de forma completa e detalhada.',
                step1: {
                    title: 'Informações Básicas da Reclamação',
                    relationship: {
                        label: 'Sua relação com a Uni Hospitalar',
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
                            preExpiredProduct: 'Produto pré-vencido',
                            expiredProduct: 'Produto vencido',
                            productViolation: 'Violação de especificações do produto',
                            damagedProduct: 'Produto danificado',
                            incorrectProduct: 'Produto incorreto/trocado',
                            missingItems: 'Itens faltando na entrega',
                            packagingIssue: 'Violação na embalagem',
                            qualityIssue: 'Problema de qualidade',
                            other: 'Outros'
                        }
                    },
                    clientType: {
                        label: 'Tipo de cliente',
                        placeholder: 'Selecione seu tipo',
                        options: {
                            hospitalClinic: 'Hospital/Clínica',
                            pharmacy: 'Farmácia',
                            laboratory: 'Laboratório',
                            distributor: 'Distribuidora',
                            individual: 'Pessoa Física',
                            other: 'Outros'
                        }
                    },
                    previousContact: {
                        label: 'Problema já relatado?',
                        placeholder: 'Selecione uma opção',
                        options: {
                            no: 'Não, é o primeiro contato',
                            phone: 'Sim, por telefone',
                            email: 'Sim, por e-mail',
                            whatsapp: 'Sim, por WhatsApp',
                            representative: 'Sim, com representante',
                            multiple: 'Sim, por múltiplos canais'
                        }
                    },
                    confidentialityNotice: 'Suas informações pessoais são obrigatórias para o processamento da reclamação e serão tratadas com total segurança e confidencialidade, conforme nossa política de privacidade e a LGPD.'
                },
                step2: {
                    title: 'Detalhes do Incidente',
                    date: 'Data aproximada do ocorrido',
                    invoiceNumber: 'Número da(s) Nota(s) Fiscal(is)',
                    invoiceNumberPlaceholder: 'Digite o(s) número(s) da(s) NF(s)',
                    invoiceNumberHelp: 'Para múltiplas notas fiscais, separe por vírgula (ex: 12345, 67890)',
                    productName: 'Nome do produto',
                    productNamePlaceholder: 'Digite o nome do produto',
                    quantity: 'Quantidade envolvida',
                    quantityPlaceholder: 'Ex: 10 unidades, 2 caixas',
                    supplier: 'Fornecedor/Representante',
                    supplierPlaceholder: 'Nome do fornecedor ou representante',
                    supplierHelp: 'Quem vendeu ou entregou o produto',
                    incidentLocation: 'Local onde ocorreu o problema',
                    incidentLocationPlaceholder: 'Selecione o local',
                    incidentLocationOptions: {
                        delivery: 'Na entrega',
                        usage: 'Durante o uso',
                        opening: 'Ao abrir a embalagem',
                        transport: 'No transporte',
                        other: 'Outros'
                    },
                    actionsTaken: 'Ações já tomadas',
                    actionsTakenPlaceholder: 'Selecione as ações',
                    actionsTakenOptions: {
                        none: 'Nenhuma ação tomada',
                        isolated: 'Produto isolado/separado',
                        stopped: 'Uso interrompido',
                        reported: 'Reportado internamente',
                        documented: 'Documentado/fotografado',
                        replaced: 'Produto substituído',
                        multiple: 'Múltiplas ações'
                    },
                    responsiblePerson: 'Responsável no momento do incidente',
                    responsiblePersonPlaceholder: 'Nome do responsável',
                    description: 'Descreva detalhadamente a situação',
                    descriptionPlaceholder: 'Descreva o que aconteceu de forma completa e detalhada...',
                    descriptionHelp: 'É importante que sua reclamação seja completa e detalhada. Considere incluir:',
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
                    relatedReport: 'Esta reclamação está ligada a outro registro anterior?',
                    relatedReportPlaceholder: 'Se sim, informe o número do protocolo anterior',
                    evidence: 'Anexar arquivos de evidência',
                    evidenceHelp: 'Clique ou arraste arquivos aqui',
                    evidenceFormats: 'Formatos aceitos: PDF, DOC, DOCX, JPG, JPEG, PNG',
                    evidenceDisclaimer: 'Limite máximo: 5 arquivos',
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
                    phonePlaceholder: 'Seu número de telefone/celular',
                    phoneHelp: 'Digite apenas números. Será formatado automaticamente.'
                },
                navigation: {
                    previous: 'Anterior',
                    next: 'Próximo',
                    submit: 'Enviar Reclamação',
                    submitting: 'Enviando...'
                }
            },
            success: {
                title: 'Reclamação Enviada com Sucesso!',
                message: 'Sua reclamação foi recebida e será analisada pela nossa equipe especializada. Mantenha os códigos abaixo para acompanhar o andamento. Um e-mail de confirmação foi enviado para o seu endereço com os códigos dos protocolos.',
                trackingInfo: 'Informações para Acompanhamento',
                protocolNumber: 'Número do Protocolo',
                accessCode: 'Código de Acesso',
                copyBoth: 'Copiar Ambos os Códigos',
                instructions: 'IMPORTANTE: Anote estes códigos para poder acompanhar o andamento das averiguações. Você precisará de AMBOS os códigos para consultar o status da sua reclamação.',
                checkStatus: 'Consultar Status',
                homePage: 'Página Inicial'
            },
            validation: {
                required: 'Este campo é obrigatório',
                minLength: 'Mínimo de {min} caracteres',
                maxLength: 'Máximo de {max} caracteres',
                numbersOnly: 'Este campo aceita apenas números',
                invalidDate: 'Data inválida',
                descriptionMinLength: 'A descrição deve ter pelo menos 20 caracteres',
                invalidEmail: 'E-mail inválido',
                futureDate: 'A data não pode ser no futuro',
                invalidPhone: 'Telefone inválido',
                phoneMinDigits: 'Telefone deve ter pelo menos 10 dígitos (DDD + número)',
                phoneMaxDigits: 'Telefone deve ter no máximo 11 dígitos'
            },
        }
    },
    en: {
        report: {
            heroTitle: 'Make Complaint',
            heroSubtitle: 'Register your complaints safely and transparently',
            terms: {
                title: 'Terms and Conditions',
                intro: 'Before proceeding with your complaint, it is important that you read and agree to the terms and conditions below. Your complaint will be treated with complete confidentiality and seriousness.',
                confidentiality: {
                    title: 'Confidentiality and Privacy',
                    text: 'All information provided will be treated with absolute confidentiality. Your personal data will be protected according to data protection laws and used exclusively for the analysis and resolution of your complaint.'
                },
                responsibility: {
                    title: 'Complainant Responsibility',
                    text: 'The veracity of the information provided is the responsibility of the complainant. All information will be verified during the analysis process conducted by the Customer Service and Quality area.'
                },
                process: {
                    title: 'Analysis Process',
                    text: 'Your complaint will be analyzed by our specialized team and necessary corrective actions will be taken according to our internal quality procedures and in compliance with consumer protection legislation.'
                },
                tracking: {
                    title: 'Complaint Tracking',
                    text: 'You will receive a protocol code to track the progress of your complaint. We will keep you informed about all stages of the resolution process through the contact channels provided.'
                },
                dataProtection: {
                    title: 'Data Protection',
                    text: 'Your personal data and complaint information will be stored securely and used only for the purpose of resolving the issue presented. You have the right to access, correct or request deletion of your data at any time.'
                },
                acceptance: 'By proceeding, you declare that you have read, understood and agreed to all the terms presented above.',
                disclaimer: 'Remember: false complaints or incorrect information may harm the analysis and resolution of your case.',
                accept: 'I agree with the terms above',
                reject: 'I do not agree with the terms above'
            },
            steps: {
                basic: 'Basic Information',
                details: 'Incident Details',
                evidence: 'Evidence and Completion'
            },
            form: {
                title: 'Complaint Form',
                subtitle: 'We appreciate your initiative and trust. Please describe the situation completely and in detail.',
                step1: {
                    title: 'Basic Complaint Information',
                    relationship: {
                        label: 'Your relationship with Uni Hospitalar',
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
                            preExpiredProduct: 'Pre-expired product',
                            expiredProduct: 'Expired product',
                            productViolation: 'Product specification violation',
                            damagedProduct: 'Damaged product',
                            incorrectProduct: 'Incorrect/wrong product',
                            missingItems: 'Missing items in delivery',
                            packagingIssue: 'Violation of packaging',
                            qualityIssue: 'Quality issue',
                            other: 'Others'
                        }
                    },
                    clientType: {
                        label: 'Client type',
                        placeholder: 'Select your type',
                        options: {
                            hospitalClinic: 'Hospital/Clinic',
                            pharmacy: 'Pharmacy',
                            laboratory: 'Laboratory',
                            distributor: 'Distributor',
                            individual: 'Individual',
                            other: 'Others'
                        }
                    },
                    previousContact: {
                        label: 'Problem already reported?',
                        placeholder: 'Select an option',
                        options: {
                            no: 'No, this is the first contact',
                            phone: 'Yes, by phone',
                            email: 'Yes, by email',
                            whatsapp: 'Yes, by WhatsApp',
                            representative: 'Yes, with representative',
                            multiple: 'Yes, through multiple channels'
                        }
                    },
                    confidentialityNotice: 'Your personal information is required for complaint processing and will be treated with complete security and confidentiality, according to our privacy policy and data protection laws.'
                },
                step2: {
                    title: 'Incident Details',
                    date: 'Approximate date of occurrence',
                    invoiceNumber: 'Invoice Number(s)',
                    invoiceNumberPlaceholder: 'Enter the invoice number(s)',
                    invoiceNumberHelp: 'For multiple invoices, separate with commas (e.g., 12345, 67890)',
                    productName: 'Product name',
                    productNamePlaceholder: 'Enter the product name',
                    quantity: 'Quantity involved',
                    quantityPlaceholder: 'Ex: 10 units, 2 boxes',
                    supplier: 'Supplier/Representative',
                    supplierPlaceholder: 'Supplier or representative name',
                    supplierHelp: 'Who sold or delivered the product',
                    incidentLocation: 'Where the problem occurred',
                    incidentLocationPlaceholder: 'Select the location',
                    incidentLocationOptions: {
                        delivery: 'During delivery',
                        storage: 'In storage',
                        usage: 'During use',
                        opening: 'When opening package',
                        transport: 'In transport',
                        other: 'Others'
                    },
                    actionsTaken: 'Actions already taken',
                    actionsTakenPlaceholder: 'Select actions',
                    actionsTakenOptions: {
                        none: 'No action taken',
                        isolated: 'Product isolated/separated',
                        stopped: 'Use stopped',
                        reported: 'Reported internally',
                        documented: 'Documented/photographed',
                        replaced: 'Product replaced',
                        multiple: 'Multiple actions'
                    },
                    responsiblePerson: 'Person responsible at the time of incident',
                    responsiblePersonPlaceholder: 'Name of responsible person',
                    description: 'Describe the situation in detail',
                    descriptionPlaceholder: 'Describe what happened completely and in detail...',
                    descriptionHelp: 'It is important that your complaint is complete and detailed. Consider including:',
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
                    relatedReport: 'Is this complaint linked to another previous record?',
                    relatedReportPlaceholder: 'If yes, provide the previous protocol number',
                    evidence: 'Attach evidence files',
                    evidenceHelp: 'Click or drag files here',
                    evidenceFormats: 'Accepted formats: PDF, DOC, DOCX, JPG, JPEG, PNG',
                    evidenceDisclaimer: 'Maximum limit: 5 files',
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
                    phonePlaceholder: 'Your phone/cell phone number',
                    phoneHelp: 'Enter numbers only. Will be formatted automatically.'
                },
                navigation: {
                    previous: 'Previous',
                    next: 'Next',
                    submit: 'Submit Complaint',
                    submitting: 'Submitting...'
                }
            },
            success: {
                title: 'Complaint Successfully Submitted!',
                message: 'Your complaint has been received and will be analyzed by our specialized team. Keep the codes below to track the progress. A confirmation email has been sent to your address with the protocol codes.',
                trackingInfo: 'Tracking Information',
                protocolNumber: 'Protocol Number',
                accessCode: 'Access Code',
                copyBoth: 'Copy Both Codes',
                instructions: 'IMPORTANT: Write down these codes to be able to track the progress of investigations. You will need BOTH codes to check the status of your complaint.',
                checkStatus: 'Check Status',
                homePage: 'Home Page'
            },
            validation: {
                required: 'This field is required',
                minLength: 'Minimum {min} characters',
                maxLength: 'Maximum {max} characters',
                numbersOnly: 'This field accepts only numbers',
                invalidDate: 'Invalid date',
                descriptionMinLength: 'Description must have at least 20 characters',
                invalidEmail: 'Invalid email',
                futureDate: 'Date cannot be in the future',
                invalidPhone: 'Invalid phone',
                phoneMinDigits: 'Phone must have at least 10 digits (area code + number)',
                phoneMaxDigits: 'Phone must have at most 11 digits'
            },
        }
    },
    es: {
        report: {
            heroTitle: 'Hacer Queja',
            heroSubtitle: 'Registre sus quejas de forma segura y transparente',
            terms: {
                title: 'Términos y Condiciones',
                intro: 'Antes de proceder con su queja, es importante que lea y esté de acuerdo con los términos y condiciones a continuación. Su queja será tratada con total confidencialidad y seriedad.',
                confidentiality: {
                    title: 'Confidencialidad y Privacidad',
                    text: 'Toda la información proporcionada será tratada con absoluta confidencialidad. Sus datos personales serán protegidos conforme a las leyes de protección de datos y utilizados exclusivamente para el análisis y resolución de su queja.'
                },
                responsibility: {
                    title: 'Responsabilidad del Reclamante',
                    text: 'La veracidad de las informaciones proporcionadas es responsabilidad del reclamante. Todas las informaciones serán verificadas durante el proceso de análisis conducido por el área de Atención al Cliente y Calidad.'
                },
                process: {
                    title: 'Proceso de Análisis',
                    text: 'Su queja será analizada por nuestro equipo especializado y las acciones correctivas necesarias serán tomadas conforme a nuestros procedimientos internos de calidad y en conformidad con la legislación de defensa del consumidor.'
                },
                tracking: {
                    title: 'Seguimiento de la Queja',
                    text: 'Recibirá un código de protocolo para acompañar el progreso de su queja. Lo mantendremos informado sobre todas las etapas del proceso de resolución a través de los canales de contacto proporcionados.'
                },
                dataProtection: {
                    title: 'Protección de Datos',
                    text: 'Sus datos personales e información de la queja serán almacenados de forma segura y utilizados solo para fines de resolución del asunto presentado. Tiene derecho a acceder, corregir o solicitar la eliminación de sus datos en cualquier momento.'
                },
                acceptance: 'Al proceder, declara haber leído, comprendido y estar de acuerdo con todos los términos presentados arriba.',
                disclaimer: 'Recuerde: quejas falsas o con información incorrecta pueden perjudicar el análisis y resolución de su caso.',
                accept: 'Estoy de acuerdo con los términos arriba',
                reject: 'No estoy de acuerdo con los términos arriba'
            },
            steps: {
                basic: 'Información Básica',
                details: 'Detalles del Incidente',
                evidence: 'Evidencias y Finalización'
            },
            form: {
                title: 'Formulario de Queja',
                subtitle: 'Agradecemos su iniciativa y confianza. Por favor, describa la situación de forma completa y detallada.',
                step1: {
                    title: 'Información Básica del Queja',
                    relationship: {
                        label: 'Su relación con Uni Hospitalar',
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
                            preExpiredProduct: 'Producto pre-vencido',
                            expiredProduct: 'Producto vencido',
                            productViolation: 'Violación de especificaciones del producto',
                            damagedProduct: 'Producto dañado',
                            incorrectProduct: 'Producto incorrecto/cambiado',
                            missingItems: 'Artículos faltantes en la entrega',
                            packagingIssue: 'Violación del embalaje',
                            qualityIssue: 'Problema de calidad',
                            other: 'Otros'
                        }
                    },
                    clientType: {
                        label: 'Tipo de cliente',
                        placeholder: 'Seleccione su tipo',
                        options: {
                            hospitalClinic: 'Hospital/Clínica',
                            pharmacy: 'Farmacia',
                            laboratory: 'Laboratorio',
                            distributor: 'Distribuidor',
                            individual: 'Persona Física',
                            other: 'Otros'
                        }
                    },
                    previousContact: {
                        label: '¿Ya se informó el problema?',
                        placeholder: 'Seleccione una opción',
                        options: {
                            no: 'No, es el primer contacto',
                            phone: 'Sí, por teléfono',
                            email: 'Sí, por correo electrónico',
                            whatsapp: 'Sí, por WhatsApp',
                            representative: 'Sí, con representante',
                            multiple: 'Sí, por múltiples canales'
                        }
                    },
                    confidentialityNotice: 'Su información personal es obligatoria para el procesamiento de la queja y será tratada con total seguridad y confidencialidad, conforme a nuestra política de privacidad y las leyes de protección de datos.'
                },
                step2: {
                    title: 'Detalles del Incidente',
                    date: 'Fecha aproximada de ocurrencia',
                    invoiceNumber: 'Número(s) de Factura(s)',
                    invoiceNumberPlaceholder: 'Ingrese el/los número(s) de la(s) factura(s)',
                    invoiceNumberHelp: 'Para múltiples facturas, sepáralas con comas (ej.: 12345, 67890)',
                    productName: 'Nombre del producto',
                    productNamePlaceholder: 'Ingrese el nombre del producto',
                    quantity: 'Cantidad involucrada',
                    quantityPlaceholder: 'Ej: 10 unidades, 2 cajas',
                    supplier: 'Proveedor/Representante',
                    supplierPlaceholder: 'Nombre del proveedor o representante',
                    supplierHelp: 'Quien vendió o entregó el producto',
                    incidentLocation: 'Lugar donde ocurrió el problema',
                    incidentLocationPlaceholder: 'Seleccione el lugar',
                    incidentLocationOptions: {
                        delivery: 'En la entrega',
                        storage: 'En el almacenamiento',
                        usage: 'Durante el uso',
                        opening: 'Al abrir el empaque',
                        transport: 'En el transporte',
                        other: 'Otros'
                    },
                    actionsTaken: 'Acciones ya tomadas',
                    actionsTakenPlaceholder: 'Seleccione las acciones',
                    actionsTakenOptions: {
                        none: 'Ninguna acción tomada',
                        isolated: 'Producto aislado/separado',
                        stopped: 'Uso interrumpido',
                        reported: 'Reportado internamente',
                        documented: 'Documentado/fotografiado',
                        replaced: 'Producto reemplazado',
                        multiple: 'Múltiples acciones'
                    },
                    responsiblePerson: 'Responsable en el momento del incidente',
                    responsiblePersonPlaceholder: 'Nombre del responsable',
                    description: 'Describa detalladamente la situación',
                    descriptionPlaceholder: 'Describa lo que pasó de forma completa y detallada...',
                    descriptionHelp: 'Es importante que su queja sea completa y detallada. Considere incluir:',
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
                    relatedReport: '¿Esta denuncia está vinculada a otro registro anterior?',
                    relatedReportPlaceholder: 'Si sí, informe el número del protocolo anterior',
                    evidence: 'Adjuntar archivos de evidencia',
                    evidenceHelp: 'Haga clic o arrastre archivos aquí',
                    evidenceFormats: 'Formatos aceptados: PDF, DOC, DOCX, JPG, JPEG, PNG',
                    evidenceDisclaimer: 'Límite máximo: 5 archivos',
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
                    phonePlaceholder: 'Su número de teléfono/celular',
                    phoneHelp: 'Ingrese solo números. Se formateará automáticamente.',
                },
                navigation: {
                    previous: 'Anterior',
                    next: 'Siguiente',
                    submit: 'Enviar Queja',
                    submitting: 'Enviando...'
                }
            },
            success: {
                title: '¡Queja Enviada con Éxito!',
                message: 'Su queja ha sido recibida y nuestro equipo especializado la analizará. Conserve los códigos a continuación para seguir el progreso. Se le ha enviado un correo electrónico de confirmación con los códigos de protocolo.',
                trackingInfo: 'Información para Seguimiento',
                protocolNumber: 'Número de Protocolo',
                accessCode: 'Código de Acceso',
                copyBoth: 'Copiar Ambos Códigos',
                instructions: 'IMPORTANTE: Anote estos códigos para poder acompañar el progreso de las averiguaciones. Necesitará AMBOS códigos para consultar el estado de su queja.',
                checkStatus: 'Consultar Estado',
                homePage: 'Página Inicial'
            },
            validation: {
                required: 'Este campo es obligatorio',
                minLength: 'Mínimo {min} caracteres',
                maxLength: 'Máximo {max} caracteres',
                numbersOnly: 'Este campo acepta solo números',
                invalidDate: 'Fecha inválida',
                descriptionMinLength: 'La descripción debe tener al menos 20 caracteres',
                invalidEmail: 'E-mail inválido',
                futureDate: 'La fecha no puede ser en el futuro',
                invalidPhone: 'Teléfono inválido',
                phoneMinDigits: 'El teléfono debe tener al menos 10 dígitos (código de área + número)',
                phoneMaxDigits: 'El teléfono debe tener como máximo 11 dígitos'
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
