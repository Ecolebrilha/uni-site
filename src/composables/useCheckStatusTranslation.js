import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    consultaStatus: {
      heroTitle: 'Consulta de Status',
      heroSubtitle: 'Acompanhe o andamento das suas solicitações registradas em nosso sistema',
      consultarTitle: 'Consultar Status',
      consultarDescription: 'Digite os códigos fornecidos quando você fez seu relato ou reclamação',
      tipoRelato: 'Relato',
      tipoReclamacao: 'Reclamação',
      numeroProtocolo: 'Número do Protocolo',
      codigoAcesso: 'Código de Acesso',
      codigoAcessoPlaceholder: 'Ex: ABC123',
      codigoAcessoHint: 'Código de 6 caracteres fornecido no envio',
      consultarButton: 'Consultar Status',
      consultandoButton: 'Consultando...',
      tentarNovamente: 'Tentar Novamente',
      possiveisSolucoes: 'Possíveis soluções:',
      solucao1: 'Verifique se o número do protocolo está correto',
      solucao2: 'Confirme se o código de acesso tem 6 caracteres',
      solucao3: 'Certifique-se de ter selecionado o tipo correto (Relato ou Reclamação)',
      solucao4: 'Verifique se não há espaços extras nos códigos',
      dicasImportantes: 'Dicas importantes:',
      dicas: {
        codigosAcesso: {
          title: 'Códigos de Acesso',
          description: 'Guarde sempre o número do protocolo e código de acesso em local seguro'
        },
        emailConfirmacao: {
          title: 'Email de Confirmação',
          description: 'Os códigos são enviados por email após o envio. Verifique sua caixa de spam'
        },
        confidencialidade: {
          title: 'Confidencialidade',
          description: 'Não compartilhe seus códigos de acesso com terceiros'
        },
        atualizacoes: {
          title: 'Atualizações',
          description: 'O status é atualizado conforme o andamento da análise'
        },
        prazoResposta: {
          title: 'Prazo de Resposta',
          description: 'O prazo médio para análise e resposta é de 5 a 30 dias úteis, contado a partir da atualização do status da solicitação, podendo variar conforme a complexidade do caso.'
        },
        confidencialidadeGarantida: {
          title: 'Confidencialidade Garantida',
          description: 'Todas as consultas são tratadas com absoluto sigilo. Seus dados pessoais são protegidos conforme a LGPD.'
        }
      },
      tempoMedioProcessamento: 'Tempo Médio de Processamento',
      stats: {
        analiseInicial: 'dias úteis para análise inicial',
        resolucao: 'dias úteis para resolução',
        reavaliacoes: 'dias úteis para reavaliações'
      },
      statusDoRelato: 'Status do Relato',
      statusDaReclamacao: 'Status da Reclamação',
      dataCriacao: 'Data de Criação:',
      ultimaAtualizacao: 'Última Atualização:',
      ultimoFeedback: 'Último Feedback:',
      tipoViolacao: 'Tipo de Violação:',
      descricaoDoRelato: 'Descrição do Relato:',
      descricaoDaReclamacao: 'Descrição da Reclamação:',
      historicoAtualizacoes: 'Histórico de Atualizações Detalhado',
      carregandoHistorico: 'Carregando histórico detalhado...',
      nenhumaObservacao: 'Nenhuma observação informada',
      atual: 'Atual',
      criacao: 'Criação',
      sistema: 'Sistema',
      timeline: {
        recebido: 'Recebido',
        relatoRegistrado: 'Relato registrado no sistema',
        reclamacaoRegistrada: 'Reclamação registrada no sistema',
        emAnalise: 'Em Análise',
        equipeAnalisando: 'Equipe responsável está analisando',
        resolvido: 'Resolvido',
        questaoSolucionada: 'Questão foi solucionada',
        finalizado: 'Finalizado',
        casoEncerrado: 'Caso encerrado'
      },
      tempoProcessamento: 'Tempo de Processamento',
      proximaAtualizacao: 'Próxima Atualização',
      novaConsulta: 'Nova Consulta',
      compartilharStatus: 'Compartilhar Status',
      shareModal: {
        title: 'Compartilhar Status',
        whatsapp: 'WhatsApp',
        email: 'Email',
        sms: 'SMS',
        copiarLink: 'Copiar Link'
      },
      placeholders: {
        protocoloRelato: 'Ex: UNI-REL12345',
        protocoloReclamacao: 'Ex: UNI-REC54321'
      },
      hints: {
        protocoloRelato: 'Protocolo do relato (formato: UNI-REL + números e letras)',
        protocoloReclamacao: 'Protocolo da reclamação (formato: UNI-REC + números e letras)'
      },
      status: {
        new: 'Novo',
        pending: 'Pendente',
        inProgress: 'Em Análise',
        resolved: 'Resolvido',
        closed: 'Finalizado'
      },
      errors: {
        formatoInvalido: 'Formato inválido',
        protocoloDeveComecardCom: 'O protocolo deve começar com "{expectedPrefix}". Verifique se você selecionou o tipo correto.'
      }
    }
  },
  en: {
    consultaStatus: {
      heroTitle: 'Status Inquiry',
      heroSubtitle: 'Track the progress of your requests registered in our system',
      consultarTitle: 'Check Status',
      consultarDescription: 'Enter the codes provided when you made your report or complaint',
      tipoRelato: 'Report',
      tipoReclamacao: 'Complaint',
      numeroProtocolo: 'Protocol Number',
      codigoAcesso: 'Access Code',
      codigoAcessoPlaceholder: 'Ex: ABC123',
      codigoAcessoHint: '6-character code provided on submission',
      consultarButton: 'Check Status',
      consultandoButton: 'Checking...',
      tentarNovamente: 'Try Again',
      possiveisSolucoes: 'Possible solutions:',
      solucao1: 'Check if the protocol number is correct',
      solucao2: 'Confirm if the access code has 6 characters',
      solucao3: 'Make sure you selected the correct type (Report or Complaint)',
      solucao4: 'Check if there are no extra spaces in the codes',
      dicasImportantes: 'Important tips:',
      dicas: {
        codigosAcesso: {
          title: 'Access Codes',
          description: 'Always keep the protocol number and access code in a safe place'
        },
        emailConfirmacao: {
          title: 'Confirmation Email',
          description: 'Codes are sent by email after submission. Check your spam folder'
        },
        confidencialidade: {
          title: 'Confidentiality',
          description: 'Do not share your access codes with third parties'
        },
        atualizacoes: {
          title: 'Updates',
          description: 'Status is updated according to the analysis progress'
        },
        prazoResposta: {
          title: 'Response Time',
          description: 'The average time for analysis and response is 5 to 30 business days, counted from the status update of the request, and may vary according to the complexity of the case.'
        },
        confidencialidadeGarantida: {
          title: 'Guaranteed Confidentiality',
          description: 'All inquiries are handled with absolute confidentiality. Your personal data is protected according to LGPD.'
        }
      },
      tempoMedioProcessamento: 'Average Processing Time',
      stats: {
        analiseInicial: 'business days for initial analysis',
        resolucao: 'business days for resolution',
        reavaliacoes: 'business days for re-evaluations'
      },
      statusDoRelato: 'Report Status',
      statusDaReclamacao: 'Complaint Status',
      dataCriacao: 'Creation Date:',
      ultimaAtualizacao: 'Last Update:',
      ultimoFeedback: 'Last Feedback:',
      tipoViolacao: 'Violation Type:',
      descricaoDoRelato: 'Report Description:',
      descricaoDaReclamacao: 'Complaint Description:',
      historicoAtualizacoes: 'Detailed Update History',
      carregandoHistorico: 'Loading detailed history...',
      nenhumaObservacao: 'No observation provided',
      atual: 'Current',
      criacao: 'Creation',
      sistema: 'System',
      timeline: {
        recebido: 'Received',
        relatoRegistrado: 'Report registered in the system',
        reclamacaoRegistrada: 'Complaint registered in the system',
        emAnalise: 'Under Analysis',
        equipeAnalisando: 'Responsible team is analyzing',
        resolvido: 'Resolved',
        questaoSolucionada: 'Issue has been resolved',
        finalizado: 'Finalized',
        casoEncerrado: 'Case closed'
      },
      tempoProcessamento: 'Processing Time',
      proximaAtualizacao: 'Next Update',
      novaConsulta: 'New Query',
      compartilharStatus: 'Share Status',
      shareModal: {
        title: 'Share Status',
        whatsapp: 'WhatsApp',
        email: 'Email',
        sms: 'SMS',
        copiarLink: 'Copy Link'
      },
      placeholders: {
        protocoloRelato: 'Ex: UNI-REL12345',
        protocoloReclamacao: 'Ex: UNI-REC54321'
      },
      hints: {
        protocoloRelato: 'Report protocol (format: UNI-REL + numbers and letters)',
        protocoloReclamacao: 'Complaint protocol (format: UNI-REC + numbers and letters)'
      },
      status: {
        new: 'New',
        pending: 'Pending',
        inProgress: 'In Analysis',
        resolved: 'Resolved',
        closed: 'Closed'
      },
      errors: {
        formatoInvalido: 'Invalid format',
        protocoloDeveComecardCom: 'The protocol must start with "{expectedPrefix}". Please check if you selected the correct type.'
      }
    }
  },
  es: {
    consultaStatus: {
      heroTitle: 'Consulta de Estado',
      heroSubtitle: 'Sigue el progreso de tus solicitudes registradas en nuestro sistema',
      consultarTitle: 'Consultar Estado',
      consultarDescription: 'Ingresa los códigos proporcionados cuando hiciste tu reporte o queja',
      tipoRelato: 'Reporte',
      tipoReclamacao: 'Queja',
      numeroProtocolo: 'Número de Protocolo',
      codigoAcesso: 'Código de Acceso',
      codigoAcessoPlaceholder: 'Ej: ABC123',
      codigoAcessoHint: 'Código de 6 caracteres proporcionado al enviar',
      consultarButton: 'Consultar Estado',
      consultandoButton: 'Consultando...',
      tentarNovamente: 'Intentar de Nuevo',
      possiveisSolucoes: 'Posibles soluciones:',
      solucao1: 'Verifica si el número de protocolo es correcto',
      solucao2: 'Confirma si el código de acceso tiene 6 caracteres',
      solucao3: 'Asegúrate de haber seleccionado el tipo correcto (Reporte o Queja)',
      solucao4: 'Verifica si no hay espacios extra en los códigos',
      dicasImportantes: 'Consejos importantes:',
      dicas: {
        codigosAcesso: {
          title: 'Códigos de Acceso',
          description: 'Guarda siempre el número de protocolo y código de acceso en un lugar seguro'
        },
        emailConfirmacao: {
          title: 'Email de Confirmación',
          description: 'Los códigos se envían por email después del envío. Verifica tu carpeta de spam'
        },
        confidencialidade: {
          title: 'Confidencialidad',
          description: 'No compartas tus códigos de acceso con terceros'
        },
        atualizacoes: {
          title: 'Actualizaciones',
          description: 'El estado se actualiza según el progreso del análisis'
        },
        prazoResposta: {
          title: 'Plazo de Respuesta',
          description: 'El tiempo promedio para análisis y respuesta es de 5 a 30 días hábiles, contado desde la actualización del estado de la solicitud, pudiendo variar según la complejidad del caso.'
        },
        confidencialidadeGarantida: {
          title: 'Confidencialidad Garantizada',
          description: 'Todas las consultas se tratan con absoluto sigilo. Tus datos personales están protegidos según la LGPD.'
        }
      },
      tempoMedioProcessamento: 'Tiempo Promedio de Procesamiento',
      stats: {
        analiseInicial: 'días hábiles para análisis inicial',
        resolucao: 'días hábiles para resolución',
        reavaliacoes: 'días hábiles para reevaluaciones'
      },
      statusDoRelato: 'Estado del Reporte',
      statusDaReclamacao: 'Estado de la Queja',
      dataCriacao: 'Fecha de Creación:',
      ultimaAtualizacao: 'Última Actualización:',
      ultimoFeedback: 'Última Retroalimentación:',
      tipoViolacao: 'Tipo de Violación:',
      descricaoDoRelato: 'Descripción del Reporte:',
      descricaoDaReclamacao: 'Descripción de la Queja:',
      historicoAtualizacoes: 'Historial Detallado de Actualizaciones',
      carregandoHistorico: 'Cargando historial detallado...',
      nenhumaObservacao: 'No se proporcionó observación',
      atual: 'Actual',
      criacao: 'Creación',
      sistema: 'Sistema',
      timeline: {
        recebido: 'Recibido',
        relatoRegistrado: 'Reporte registrado en el sistema',
        reclamacaoRegistrada: 'Queja registrada en el sistema',
        emAnalise: 'En Análisis',
        equipeAnalisando: 'El equipo responsable está analizando',
        resolvido: 'Resuelto',
        questaoSolucionada: 'La cuestión ha sido solucionada',
        finalizado: 'Finalizado',
        casoEncerrado: 'Caso cerrado'
      },
      tempoProcessamento: 'Tiempo de Procesamiento',
      proximaAtualizacao: 'Próxima Actualización',
      novaConsulta: 'Nueva Consulta',
      compartilharStatus: 'Compartir Estado',
      shareModal: {
        title: 'Compartir Estado',
        whatsapp: 'WhatsApp',
        email: 'Email',
        sms: 'SMS',
        copiarLink: 'Copiar Enlace'
      },
      placeholders: {
        protocoloRelato: 'Ej: UNI-REL12345',
        protocoloReclamacao: 'Ej: UNI-REC54321'
      },
      hints: {
        protocoloRelato: 'Protocolo del reporte (formato: UNI-REL + números y letras)',
        protocoloReclamacao: 'Protocolo de la queja (formato: UNI-REC + números y letras)'
      },
      status: {
        new: 'Nuevo',
        pending: 'Pendiente',
        inProgress: 'En Análisis',
        resolved: 'Resuelto',
        closed: 'Finalizado'
      },
      errors: {
        formatoInvalido: 'Formato inválido',
        protocoloDeveComecardCom: 'El protocolo debe comenzar con "{expectedPrefix}". Verifica si seleccionaste el tipo correcto.'
      }
    }
  }
})

export function useCheckStatusTranslation() {
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
    
    // Substituir parâmetros se fornecidos
    let result = value
    Object.keys(params).forEach(param => {
      result = result.replace(`{${param}}`, params[param])
    })
    
    return result
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
