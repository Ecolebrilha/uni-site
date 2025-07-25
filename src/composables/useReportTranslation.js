import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
    pt: {
        report: {
            heroTitle: 'Fazer Relato',
            heroSubtitle: 'Relate situações de forma segura e confidencial',
            terms: {
                title: 'Termos e Condições',
                intro: 'Este canal é uma ferramenta oficial disponível para que colaboradores, fornecedores, clientes, parceiros comerciais e público em geral possam comunicar, de forma anônima ou identificada, condutas não condizentes com os valores da Uni Hospitalar ou que violem a legislação vigente, nosso Código de Ética e Conduta, políticas internas e demais normas e procedimentos.',
                confidentiality: {
                  title: 'Confidencialidade Absoluta',
                  text: 'As informações aqui registradas serão recebidas por uma empresa independente e especializada, assegurando sigilo absoluto. Sua identidade será protegida durante todo o processo, com garantia de anonimato quando solicitado. O acesso às informações é restrito aos profissionais responsáveis pela apuração.'
                },
                responsibility: {
                  title: 'Responsabilidade do Relator',
                  text: 'A veracidade das informações providas é uma responsabilidade do relator. Todas as informações serão verificadas durante o processo de averiguação conduzida pela área de Compliance.'
                },
                process: {
                  title: 'Processo de Averiguação',
                  text: 'As possíveis ações decorrentes serão tomadas a critério exclusivo da Uni Hospitalar, conforme procedimentos internos estabelecidos e em conformidade com a legislação vigente. A Uni Hospitalar assegura total proteção institucional ao denunciante de boa-fé, não admitindo qualquer forma de retaliação.'
                },
                tracking: {
                  title: 'Acompanhamento da Denúncia',
                  text: 'Ao finalizar seu relato, você receberá um número de protocolo para acompanhamento. O acesso periódico ao sistema é recomendado para verificar o status e fornecer informações complementares quando solicitadas.'
                },
                dataProtection: {
                  title: 'Proteção de Dados',
                  text: 'O tratamento de dados pessoais segue rigorosamente a Lei Geral de Proteção de Dados (LGPD). Todas as informações são tratadas confidencialmente e utilizadas exclusivamente para apuração das denúncias, sendo armazenadas pelo período determinado em lei.'
                },
                acceptance: 'O uso deste canal implica em aceitação integral destes termos.',
                accept: 'Concordo com os termos acima',
                reject: 'Não concordo com os termos acima',
                disclaimer: 'Este canal destina-se exclusivamente a denúncias. Para questões comerciais, pedidos ou suporte operacional, utilize os canais de atendimento regulares.'
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
                            employee: 'Colaborador',
                            exEmployee: 'Ex-colaborador',
                            supplier: 'Fornecedor',
                            client: 'Cliente',
                            society: 'Pessoa interessada da sociedade',
                            other: 'Outros'
                        }
                    },
                    involvement: {
                        label: 'Sobre o seu relato, você:',
                        placeholder: 'Selecione seu envolvimento',
                        options: {
                            experienced: 'Vivenciou a situação',
                            witnessed: 'Testemunhou a situação',
                            heard: 'Ouviu boatos sobre a situação',
                            other: 'Outros'
                        }
                    },
                    violationType: {
                        label: 'Tipo do relato',
                        placeholder: 'Selecione o tipo de violação',
                        options: {
                            sexualHarassment: 'Assédio sexual',
                            moralHarassment: 'Assédio moral',
                            physicalAggression: 'Agressão física',
                            unfairCompetition: 'Concorrência desleal',
                            inappropriateBehavior: 'Comportamento inadequado',
                            conflictInterest: 'Conflito de Interesses',
                            workEnvironment: 'Clima organizacional (ambiente de trabalho)',
                            theft: 'Desvios, furtos e roubos',
                            discrimination: 'Discriminação',
                            salaryDiscrimination: 'Discriminação salarial',
                            sexualImportuning: 'Importunação sexual',
                            environmental: 'Questões ambientais',
                            workSafety: 'Segurança do Trabalho',
                            corruption: 'Suborno, corrupção ou fraude',
                            childLabor: 'Trabalho Infantil',
                            slaveLabor: 'Trabalho escravo ou análogo à escravidão',
                            dataBreach: 'Vazamento de dados',
                            researchViolations: 'Violações éticas nas pesquisas e desenvolvimento',
                            intellectualProperty: 'Violações à propriedade intelectual',
                            lawViolation: 'Violação de lei',
                            other: 'Outros'
                        }
                    },
                    area: {
                        label: 'Em qual área a situação aconteceu?',
                        placeholder: 'Selecione a área',
                        options: {
                            administrative: 'Administrativo',
                            commercial: 'Comercial',
                            financial: 'Financeiro',
                            hr: 'Gente e Gestão',
                            integration: 'Integração',
                            legal: 'Jurídico e Compliance',
                            ma: 'M&A',
                            operations: 'Operações',
                            regulatory: 'Regulatório',
                            it: 'TI',
                            other: 'Outras'
                        }
                    },
                    anonymous: 'Fazer relato anônimo',
                    confidentialityNotice: 'Este é um canal seguro e confidencial. Ao prosseguir, você declara estar ciente de que as informações fornecidas serão tratadas com sigilo absoluto. Você pode optar por fazer um relato anônimo, garantindo total proteção à sua identidade. Os dados coletados serão utilizados exclusivamente para análise e encaminhamento adequado da denúncia ao setor de compliance.'
                },
                step2: {
                    title: 'Detalhes do Incidente',
                    date: 'Data aproximada do ocorrido',
                    location: 'Local onde a situação ocorreu',
                    locationPlaceholder: 'Descreva o local específico',
                    accusedName: 'Nome do(s) denunciado(s)',
                    accusedNamePlaceholder: 'Nome completo da(s) pessoa(s) envolvida(s)',
                    accusedPosition: 'Qual o cargo do(s) denunciado(s)?',
                    accusedPositionPlaceholder: 'Cargo ou função exercida',
                    witnesses: 'Há testemunha(s)? Se sim, informar o(s) nome(s):',
                    witnessesPlaceholder: 'Liste as testemunhas, se houver',
                    hrContact: 'Você relatou a situação com alguém da empresa?',
                    hrContactPlaceholder: 'Se sim, informar o nome da pessoa',
                    description: 'Descreva detalhadamente a situação',
                    descriptionPlaceholder: 'Descreva o que aconteceu de forma completa e detalhada...',
                    descriptionHelp: 'É importante que seu relato seja completo e detalhado. Não se esqueça de incluir no relato:',
                    helpItems: {
                        what: 'O quê (descrição da situação)',
                        who: 'Quem (nome das pessoas envolvidas, inclusive testemunhas)',
                        when: 'Quando (data em que aconteceu, acontece ou acontecerá)',
                        where: 'Onde (Local do relato)',
                        why: 'Por que (a causa ou motivo)',
                        how: 'Quanto (se for possível medir)',
                        evidence: 'Provas ou demais evidências (se existem e onde podem ser encontradas)'
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
                    personalData: 'Dados Pessoais (obrigatório para relatos não anônimos)',
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
            heroTitle: 'Make a Report',
            heroSubtitle: 'Report situations safely and confidentially',
            terms: {
                title: 'Terms and Conditions',
                intro: 'This channel is an official tool available for employees, suppliers, customers, business partners and the general public to communicate, anonymously or identified, conduct that is not consistent with Uni Hospitalar\'s values or that violates current legislation, our Code of Ethics and Conduct, internal policies and other standards and procedures.',
                confidentiality: {
                  title: 'Absolute Confidentiality',
                  text: 'The information registered here will be received by an independent and specialized company, ensuring absolute confidentiality. Your identity will be protected throughout the process, with anonymity guaranteed when requested. Access to information is restricted to professionals responsible for investigation.'
                },
                responsibility: {
                  title: 'Reporter Responsibility',
                  text: 'The veracity of the information provided is the responsibility of the reporter. All information will be verified during the investigation process conducted by the Compliance area.'
                },
                process: {
                  title: 'Investigation Process',
                  text: 'Possible resulting actions will be taken at the exclusive discretion of Uni Hospitalar, according to established internal procedures and in compliance with current legislation. Uni Hospitalar ensures total institutional protection to the good faith whistleblower, not admitting any form of retaliation.'
                },
                tracking: {
                  title: 'Report Tracking',
                  text: 'Upon completing your report, you will receive a protocol number for tracking. Periodic access to the system is recommended to check status and provide additional information when requested.'
                },
                dataProtection: {
                  title: 'Data Protection',
                  text: 'The processing of personal data strictly follows the General Data Protection Law (LGPD). All information is treated confidentially and used exclusively for investigating reports, being stored for the period determined by law.'
                },
                acceptance: 'The use of this channel implies full acceptance of these terms.',
                accept: 'I agree with the terms above',
                reject: 'I do not agree with the terms above',
                disclaimer: 'This channel is exclusively for reports. For commercial issues, orders or operational support, use regular service channels.'
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
                            employee: 'Employee',
                            exEmployee: 'Former employee',
                            supplier: 'Supplier',
                            client: 'Client',
                            society: 'Interested person from society',
                            other: 'Others'
                        }
                    },
                    involvement: {
                        label: 'About your report, you:',
                        placeholder: 'Select your involvement',
                        options: {
                            experienced: 'Experienced the situation',
                            witnessed: 'Witnessed the situation',
                            heard: 'Heard rumors about the situation'
                        }
                    },
                    violationType: {
                        label: 'Type of report',
                        placeholder: 'Select the type of violation',
                        options: {
                            sexualHarassment: 'Sexual harassment',
                            moralHarassment: 'Moral harassment',
                            physicalAggression: 'Physical aggression',
                            unfairCompetition: 'Unfair competition',
                            inappropriateBehavior: 'Inappropriate behavior',
                            conflictInterest: 'Conflict of Interest',
                            workEnvironment: 'Organizational climate (work environment)',
                            theft: 'Deviations, theft and robbery',
                            discrimination: 'Discrimination',
                            salaryDiscrimination: 'Salary discrimination',
                            sexualImportuning: 'Sexual importuning',
                            environmental: 'Environmental issues',
                            workSafety: 'Work Safety',
                            corruption: 'Bribery, corruption or fraud',
                            childLabor: 'Child Labor',
                            slaveLabor: 'Slave labor or analogous to slavery',
                            dataBreach: 'Data breach',
                            researchViolations: 'Ethical violations in research and development',
                            intellectualProperty: 'Intellectual property violations',
                            lawViolation: 'Law violation',
                            other: 'Others'
                        }
                    },
                    area: {
                        label: 'In which area did the situation happen?',
                        placeholder: 'Select the area',
                        options: {
                            administrative: 'Administrative',
                            commercial: 'Commercial',
                            financial: 'Financial',
                            hr: 'People and Management',
                            integration: 'Integration',
                            legal: 'Legal and Compliance',
                            ma: 'M&A',
                            operations: 'Operations',
                            regulatory: 'Regulatory',
                            it: 'IT',
                            other: 'Others'
                        }
                    },
                    anonymous: 'Make anonymous report',
                    confidentialityNotice: 'This is a secure and confidential channel. By proceeding, you declare that you are aware that the information provided will be treated with absolute confidentiality. You can choose to make an anonymous report, ensuring total protection of your identity. The data collected will be used exclusively for analysis and proper forwarding of the complaint to the compliance sector.'
                },
                step2: {
                    title: 'Incident Details',
                    date: 'Approximate date of occurrence',
                    location: 'Location where the situation occurred',
                    locationPlaceholder: 'Describe the specific location',
                    accusedName: 'Name of the accused person(s)',
                    accusedNamePlaceholder: 'Full name of the person(s) involved',
                    accusedPosition: 'What is the position of the accused?',
                    accusedPositionPlaceholder: 'Position or function performed',
                    witnesses: 'Are there witness(es)? If yes, provide the name(s):',
                    witnessesPlaceholder: 'List witnesses, if any',
                    hrContact: 'Did you report the situation to someone in the company?',
                    hrContactPlaceholder: 'If yes, provide the person\'s name',
                    description: 'Describe the situation in detail',
                    descriptionPlaceholder: 'Describe what happened completely and in detail...',
                    descriptionHelp: 'It is important that your report is complete and detailed. Do not forget to include in the report:',
                    helpItems: {
                        what: 'What (description of the situation)',
                        who: 'Who (names of people involved, including witnesses)',
                        when: 'When (date it happened, happens or will happen)',
                        where: 'Where (Location of the report)',
                        why: 'Why (the cause or reason)',
                        how: 'How much (if it can be measured)',
                        evidence: 'Evidence or other evidence (if they exist and where they can be found)'
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
                    personalData: 'Personal Data (required for non-anonymous reports)',
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
            heroTitle: 'Hacer Reporte',
            heroSubtitle: 'Reporte situaciones de forma segura y confidencial',
            terms: {
                title: 'Términos y Condiciones',
                intro: 'Este canal es una herramienta oficial disponible para que colaboradores, proveedores, clientes, socios comerciales y público en general puedan comunicar, de forma anónima o identificada, conductas no acordes con los valores de Uni Hospitalar o que violen la legislación vigente, nuestro Código de Ética y Conducta, políticas internas y demás normas y procedimientos.',
                confidentiality: {
                  title: 'Confidencialidad Absoluta',
                  text: 'Las informaciones aquí registradas serán recibidas por una empresa independiente y especializada, asegurando sigilo absoluto. Su identidad será protegida durante todo el proceso, con garantía de anonimato cuando solicitado. El acceso a las informaciones está restringido a los profesionales responsables por la investigación.'
                },
                responsibility: {
                  title: 'Responsabilidad del Reportero',
                  text: 'La veracidad de las informaciones provistas es una responsabilidad del reportero. Todas las informaciones serán verificadas durante el proceso de averiguación conducida por el área de Compliance.'
                },
                process: {
                  title: 'Proceso de Averiguación',
                  text: 'Las posibles acciones resultantes serán tomadas a criterio exclusivo de Uni Hospitalar, conforme procedimientos internos establecidos y en conformidad con la legislación vigente. Uni Hospitalar asegura total protección institucional al denunciante de buena fe, no admitiendo cualquier forma de represalia.'
                },
                tracking: {
                  title: 'Seguimiento de la Denuncia',
                  text: 'Al finalizar su reporte, recibirá un número de protocolo para seguimiento. El acceso periódico al sistema es recomendado para verificar el estado y proporcionar informaciones complementarias cuando solicitadas.'
                },
                dataProtection: {
                  title: 'Protección de Datos',
                  text: 'El tratamiento de datos personales sigue rigurosamente la Ley General de Protección de Datos (LGPD). Todas las informaciones son tratadas confidencialmente y utilizadas exclusivamente para investigación de denuncias, siendo almacenadas por el período determinado en ley.'
                },
                acceptance: 'El uso de este canal implica aceptación integral de estos términos.',
                accept: 'Estoy de acuerdo con los términos arriba',
                reject: 'No estoy de acuerdo con los términos arriba',
                disclaimer: 'Este canal se destina exclusivamente a denuncias. Para cuestiones comerciales, pedidos o soporte operacional, utilice los canales de atención regulares.'
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
                            employee: 'Colaborador',
                            exEmployee: 'Ex-colaborador',
                            supplier: 'Proveedor',
                            client: 'Cliente',
                            society: 'Persona interesada de la sociedad',
                            other: 'Otros'
                        }
                    },
                    involvement: {
                        label: 'Sobre su reporte, usted:',
                        placeholder: 'Seleccione su participación',
                        options: {
                            experienced: 'Vivió la situación',
                            witnessed: 'Fue testigo de la situación',
                            heard: 'Escuchó rumores sobre la situación'
                        }
                    },
                    violationType: {
                        label: 'Tipo del reporte',
                        placeholder: 'Seleccione el tipo de violación',
                        options: {
                            sexualHarassment: 'Acoso sexual',
                            moralHarassment: 'Acoso moral',
                            physicalAggression: 'Agresión física',
                            unfairCompetition: 'Competencia desleal',
                            inappropriateBehavior: 'Comportamiento inadecuado',
                            conflictInterest: 'Conflicto de Intereses',
                            workEnvironment: 'Clima organizacional (ambiente de trabajo)',
                            theft: 'Desvíos, hurtos y robos',
                            discrimination: 'Discriminación',
                            salaryDiscrimination: 'Discriminación salarial',
                            sexualImportuning: 'Importunación sexual',
                            environmental: 'Cuestiones ambientales',
                            workSafety: 'Seguridad del Trabajo',
                            corruption: 'Soborno, corrupción o fraude',
                            childLabor: 'Trabajo Infantil',
                            slaveLabor: 'Trabajo esclavo o análogo a la esclavitud',
                            dataBreach: 'Filtración de datos',
                            researchViolations: 'Violaciones éticas en investigación y desarrollo',
                            intellectualProperty: 'Violaciones a la propiedad intelectual',
                            lawViolation: 'Violación de ley',
                            other: 'Otros'
                        }
                    },
                    area: {
                        label: '¿En qué área ocurrió la situación?',
                        placeholder: 'Seleccione el área',
                        options: {
                            administrative: 'Administrativo',
                            commercial: 'Comercial',
                            financial: 'Financiero',
                            hr: 'Gente y Gestión',
                            integration: 'Integración',
                            legal: 'Jurídico y Compliance',
                            ma: 'M&A',
                            operations: 'Operaciones',
                            regulatory: 'Regulatorio',
                            it: 'TI',
                            other: 'Otros'
                        }
                    },
                    anonymous: 'Hacer reporte anónimo',
                    confidentialityNotice: 'Este es un canal seguro y confidencial. Al proceder, usted declara estar consciente de que las informaciones proporcionadas serán tratadas con sigilo absoluto. Puede optar por hacer un reporte anónimo, garantizando total protección a su identidad. Los datos recolectados serán utilizados exclusivamente para análisis y encaminamiento adecuado de la denuncia al sector de compliance.'
                },
                step2: {
                    title: 'Detalles del Incidente',
                    date: 'Fecha aproximada de ocurrencia',
                    location: 'Local donde ocurrió la situación',
                    locationPlaceholder: 'Describa el local específico',
                    accusedName: 'Nombre del/de los denunciado(s)',
                    accusedNamePlaceholder: 'Nombre completo de la(s) persona(s) involucrada(s)',
                    accusedPosition: '¿Cuál es el cargo del(los) denunciado(s)?',
                    accusedPositionPlaceholder: 'Cargo o función ejercida',
                    witnesses: '¿Hay testigo(s)? Si sí, informar el(los) nombre(s):',
                    witnessesPlaceholder: 'Liste los testigos, si los hay',
                    hrContact: '¿Reportó la situación a alguien de la empresa?',
                    hrContactPlaceholder: 'Si sí, informar el nombre de la persona',
                    description: 'Describa detalladamente la situación',
                    descriptionPlaceholder: 'Describa lo que pasó de forma completa y detallada...',
                    descriptionHelp: 'Es importante que su reporte sea completo y detallado. No se olvide de incluir en el reporte:',
                    helpItems: {
                        what: 'Qué (descripción de la situación)',
                        who: 'Quién (nombres de personas involucradas, inclusive testigos)',
                        when: 'Cuándo (fecha en que pasó, pasa o pasará)',
                        where: 'Dónde (Local del reporte)',
                        why: 'Por qué (la causa o motivo)',
                        how: 'Cuánto (si es posible medir)',
                        evidence: 'Pruebas o demás evidencias (si existen y dónde pueden ser encontradas)'
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
                    personalData: 'Datos Personales (obligatorio para reportes no anónimos)',
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

export function useReportTranslation() {
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
