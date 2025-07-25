<template>
  <div class="consulta-status-page">
    <HomeHeader />

    <!-- Hero Section com Logo e Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
      </div>
    </section>

    <!-- Seção de Consulta -->
    <section class="consulta-section">
      <div class="container">
        <div class="consulta-container">
          <div v-show="!resultado" class="consulta-form-content">
          <div class="consulta-header">
            <h2>Consultar Status</h2>
            <p>Digite os códigos fornecidos quando você fez seu relato ou reclamação</p>
          </div>

          <div class="tipo-consulta">
            <label class="radio-option" :class="{ active: tipoConsulta === 'relato' }">
              <input type="radio" v-model="tipoConsulta" value="relato">
              <span class="radio-custom"></span>
              <div class="radio-content">
                <i class="fas fa-shield-alt"></i>
                <span>Relato Confidencial</span>
              </div>
            </label>

            <label class="radio-option" :class="{ active: tipoConsulta === 'reclamacao' }">
              <input type="radio" v-model="tipoConsulta" value="reclamacao">
              <span class="radio-custom"></span>
              <div class="radio-content">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Reclamação</span>
              </div>
            </label>
          </div>

          <form @submit.prevent="consultarStatus" class="consulta-form">
            <div class="form-group">
              <label for="trackingCode">
                Número do Protocolo <span class="required">*</span>
              </label>
              <input type="text" id="trackingCode" v-model="formData.trackingCode" required
                :placeholder="getProtocolPlaceholder()" :disabled="isLoading" @input="clearResults" @paste="handlePaste"
                class="protocol-input">
              <small class="input-hint">
                {{ getProtocolHint() }}
              </small>
            </div>

            <div class="form-group">
              <label for="accessCode">
                Código de Acesso <span class="required">*</span>
              </label>
              <input type="text" id="accessCode" v-model="formData.accessCode" required placeholder="Ex: ABC123"
                :disabled="isLoading" @input="clearResults" maxlength="6" class="access-input">
              <small class="input-hint">
                Código de 6 caracteres fornecido no envio
              </small>
            </div>

            <button type="submit" class="consultar-btn" :disabled="isLoading || !canSubmit">
              <i class="fas fa-search" v-if="!isLoading"></i>
              <i class="fas fa-spinner fa-spin" v-else></i>
              {{ isLoading ? 'Consultando...' : 'Consultar Status' }}
            </button>
          </form>

          <!-- Mensagem de Erro -->
          <div v-if="erro" class="erro-container">
            <div class="erro-content">
              <i class="fas fa-exclamation-circle"></i>
              <h3>{{ erro.title }}</h3>
              <p>{{ erro.message }}</p>

              <!-- Sugestões de erro -->
              <div class="erro-sugestoes">
                <h5>Possíveis soluções:</h5>
                <ul>
                  <li>Verifique se o número do protocolo está correto</li>
                  <li>Confirme se o código de acesso tem 6 caracteres</li>
                  <li>Certifique-se de ter selecionado o tipo correto (Relato ou Reclamação)</li>
                  <li>Verifique se não há espaços extras nos códigos</li>
                </ul>
              </div>

              <div class="erro-acoes">
                <button @click="clearError" class="retry-btn">
                  <i class="fas fa-redo"></i>
                  Tentar Novamente
                </button>

                <button @click="limparFormulario" class="clear-btn">
                  <i class="fas fa-eraser"></i>
                  Limpar Campos
                </button>
              </div>
            </div>
          </div>

          <!-- Dicas de uso -->
          <div v-if="!resultado && !erro && !isLoading" class="dicas-container">
            <div class="dicas-content">
              <h4><i class="fas fa-lightbulb"></i> Dicas importantes:</h4>
              <div class="dicas-grid">
                <div class="dica-item">
                  <i class="fas fa-key"></i>
                  <div>
                    <strong>Códigos de Acesso</strong>
                    <p>Guarde sempre o número do protocolo e código de acesso em local seguro</p>
                  </div>
                </div>

                <div class="dica-item">
                  <i class="fas fa-envelope"></i>
                  <div>
                    <strong>Email de Confirmação</strong>
                    <p>Os códigos são enviados por email após o envio. Verifique sua caixa de spam</p>
                  </div>
                </div>

                <div class="dica-item">
                  <i class="fas fa-user-shield"></i>
                  <div>
                    <strong>Confidencialidade</strong>
                    <p>Não compartilhe seus códigos de acesso com terceiros</p>
                  </div>
                </div>

                <div class="dica-item">
                  <i class="fas fa-sync-alt"></i>
                  <div>
                    <strong>Atualizações</strong>
                    <p>O status é atualizado conforme o andamento da análise</p>
                  </div>
                </div>

                <div class="dica-item">
                  <i class="fas fa-calendar-check"></i>
                  <div>
                    <strong>Prazo de Resposta</strong>
                    <p>O prazo médio para análise e resposta é de 5 a 15 dias úteis, dependendo da complexidade do caso.
                    </p>
                  </div>
                </div>

                <div class="dica-item">
                  <i class="fas fa-lock"></i>
                  <div>
                    <strong>Confidencialidade Garantida</strong>
                    <p>Todas as consultas são tratadas com absoluto sigilo. Seus dados pessoais são protegidos conforme
                      a LGPD.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Estatísticas gerais (opcional) -->
          <div v-if="!resultado && !erro && !isLoading" class="stats-container">
            <div class="stats-content">
              <h4>Tempo Médio de Processamento</h4>
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-number">2-3</div>
                  <div class="stat-label">dias úteis para análise inicial</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">5-7</div>
                  <div class="stat-label">dias úteis para resolução</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">24h</div>
                  <div class="stat-label">para casos urgentes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <!-- Resultado da Consulta -->
          <div v-if="resultado" class="resultado-container">
            <div class="resultado-header">
              <h3>Status {{ tipoConsulta === 'relato' ? 'do Relato Confidencial' : 'da Reclamação' }}</h3>
              <span class="protocolo">{{ resultado.tracking_code }}</span>
            </div>

            <div class="status-info">
              <div class="status-badge" :class="getStatusClass(resultado.status)">
                <i :class="getStatusIcon(resultado.status)"></i>
                {{ getStatusLabel(resultado.status) }}
              </div>

              <div class="status-details">
  <div class="detail-item strong">
    <strong>Data de Criação:</strong>
    {{ formatDate(resultado.created_at) }}
  </div>
  <div class="detail-item strong">
    <strong>Última Atualização:</strong>
    {{ formatDate(resultado.updated_at) }}
  </div>
  <div v-if="resultado.status_message" class="detail-item strong feedback">
    <strong>Último Feedback:</strong>
    <p class="status-message">{{ resultado.status_message }}</p>
  </div>
  <div v-if="resultado.category" class="detail-item">
    <strong>Tipo de Violação:</strong>
    {{ getViolationTypeLabel(resultado.category) }}
  </div>
  <div v-if="resultado.description" class="detail-item-description">
  <strong>Descrição {{ tipoConsulta === 'relato' ? 'do Relato' : 'da Reclamação' }}:</strong>
  <p class="report-description">{{ resultado.description }}</p>
</div>
</div>
            </div>

            <div class="status-timeline">
  <!-- Histórico dinâmico do banco de dados -->
  <div v-if="statusHistory.length > 0" class="timeline-database">
    <h4><i class="fas fa-clipboard-list"></i> Histórico de Atualizações Detalhado</h4>
    <div class="timeline-history">
      <div 
        v-for="(entry, index) in statusHistory" 
        :key="`history-${index}`"
        class="history-item"
        :class="{ 
          'current-status': entry.status === currentStatus,
          'creation-entry': entry.is_creation 
        }"
      >
        <div class="history-dot" :class="`status-${entry.status}`"></div>
        <div class="history-content">
          <div class="history-header">
            <span class="history-status" :class="`status-${entry.status}`">
              <i :class="getStatusIcon(entry.status)"></i>
              {{ getStatusLabel(entry.status) }}
            </span>
            <span v-if="entry.status === currentStatus" class="current-indicator">
              <i class="fas fa-star"></i> Atual
            </span>
            <span v-if="entry.is_creation" class="creation-indicator">
              <i class="fas fa-plus"></i> Criação
            </span>
          </div>
          
          <div class="history-message">
            {{ entry.message || 'Nenhuma observação informada' }}
          </div>
          
          <div class="history-footer">
            <span class="history-admin">
              <i class="fas fa-user"></i>
              {{ entry.admin_name || 'Sistema' }}
            </span>
            <span class="history-date">
    <i class="fas fa-clock"></i>
    {{ index === statusHistory.length - 1 ? formatDate(entry.created_at) : formatDateTwo(entry.created_at) }}
  </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading do histórico -->
  <div v-else-if="loadingHistory" class="loading-history">
    <i class="fas fa-spinner fa-spin"></i>
    <p>Carregando histórico detalhado...</p>
  </div>

  <!-- Timeline estática (fallback) -->
  <div v-else class="timeline">
    <!-- Manter sua timeline estática atual como fallback -->
    <div class="timeline-item" :class="{ active: true }">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h5>Recebido</h5>
        <p>{{ formatDate(resultado.created_at) }}</p>
        <small>{{ tipoConsulta === 'relato' ? 'Relato' : 'Reclamação' }} registrado no sistema</small>
      </div>
    </div>

    <div class="timeline-item"
      :class="{ active: isStatusReached('investigating') || isStatusReached('in-progress') }">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h5>Em Análise</h5>
        <p v-if="isStatusReached('investigating') || isStatusReached('in-progress')">
          {{ formatDate(resultado.updated_at) }}
        </p>
        <small>Equipe responsável está analisando</small>
      </div>
    </div>

    <div class="timeline-item" :class="{ active: isStatusReached('resolved') }">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h5>Resolvido</h5>
        <p v-if="isStatusReached('resolved')">
          {{ formatDate(resultado.updated_at) }}
        </p>
        <small>Questão foi solucionada</small>
      </div>
    </div>

    <div class="timeline-item" :class="{ active: isStatusReached('closed') }">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h5>Finalizado</h5>
        <p v-if="isStatusReached('closed')">
          {{ formatDate(resultado.updated_at) }}
        </p>
        <small>Caso encerrado</small>
      </div>
    </div>
  </div>
</div>

            <!-- Informações adicionais -->
            <div class="info-adicional">
              <div class="info-card">
                <i class="fas fa-clock"></i>
                <div>
                  <h5>Tempo de Processamento</h5>
                  <p>{{ getTempoProcessamento() }}</p>
                </div>
              </div>

              <div class="info-card">
                <i class="fas fa-bell"></i>
                <div>
                  <h5>Próxima Atualização</h5>
                  <p>{{ getProximaAtualizacao() }}</p>
                </div>
              </div>
            </div>

            <!-- Botão para nova consulta -->
            <div class="nova-consulta">
              <button @click="novaConsulta" class="nova-consulta-btn">
                <i class="fas fa-redo"></i>
                Nova Consulta
              </button>

              <button @click="compartilharStatus" class="compartilhar-btn">
                <i class="fas fa-share-alt"></i>
                Compartilhar Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import API_CONFIG from '@/config/api.js';

export default {
  name: 'ConsultaStatus',
  components: {
    HomeHeader,
    HomeFooter
  },
  data() {
    return {
      tipoConsulta: 'relato',
      formData: {
        trackingCode: '',
        accessCode: ''
      },
      resultado: null,
      erro: null,
      isLoading: false,
      statusHistory: [],
    loadingHistory: false,
    currentStatus: null
    };
  },
  computed: {
    canSubmit() {
      return this.formData.trackingCode.trim() &&
        this.formData.accessCode.trim() &&
        this.formData.accessCode.trim().length === 6;
    }
  },
  mounted() {
    this.checkUrlParams();
  },
  methods: {
    // Verificar parâmetros da URL
    checkUrlParams() {
      const urlParams = new URLSearchParams(window.location.search);
      const protocol = urlParams.get('protocol');
      const accessCode = urlParams.get('access');
      const type = urlParams.get('type');

      if (protocol && accessCode) {
        this.formData.trackingCode = protocol;
        this.formData.accessCode = accessCode;

        if (type === 'complaint' || type === 'reclamacao') {
          this.tipoConsulta = 'reclamacao';
        } else {
          this.tipoConsulta = 'relato';
        }

        this.$nextTick(() => {
          this.consultarStatus();
        });
      }
    },

    // Placeholders dinâmicos
    getProtocolPlaceholder() {
      return this.tipoConsulta === 'relato' ? 'Ex: UNI-REL12345' : 'Ex: UNI-REC54321';
    },

    getProtocolHint() {
      return this.tipoConsulta === 'relato'
        ? 'Protocolo do relato confidencial (formato: UNI-REL + números e letras)'
        : 'Protocolo da reclamação (formato: UNI-REC + números e letras)';
    },

    // Manipular colagem de texto
    handlePaste(event) {
      const pastedText = event.clipboardData.getData('text');
      // Limpar espaços e caracteres especiais
      const cleanText = pastedText.replace(/\s+/g, '').toUpperCase();
      this.formData.trackingCode = cleanText;
      event.preventDefault();
    },

    async consultarStatus() {
  if (!this.canSubmit) {
    this.showError('Campos obrigatórios', 'Por favor, preencha todos os campos corretamente.');
    return;
  }

  // Validar formato do protocolo
  if (!this.validarFormatoProtocolo()) {
    return;
  }

  this.isLoading = true;
  this.resultado = null;
  this.erro = null;
  this.statusHistory = []; // Limpar histórico anterior
  this.loadingHistory = false;

  try {
    const trackingCode = this.formData.trackingCode.trim().toUpperCase();
    const accessCode = this.formData.accessCode.trim().toUpperCase();
    
    console.log(`🔍 Consultando ${this.tipoConsulta} com:`, {
      tracking_code: trackingCode,
      access_code: accessCode
    });

    let response;
    
    if (this.tipoConsulta === 'relato') {
      // Para relatos: usar endpoint /status (POST)
      response = await fetch(`${API_CONFIG.BASE_URL}/api/reports/status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tracking_code: trackingCode,
          access_code: accessCode
        })
      });
    } else {
      // Para reclamações: usar endpoint /history (GET)
      response = await fetch(`${API_CONFIG.BASE_URL}/api/complaints/${trackingCode}/history?accessCode=${accessCode}`);
    }

    console.log('📡 Response status:', response.status);

    if (response.ok) {
      const data = await response.json();
      
      console.log('✅ Dados recebidos:', data);
      
      if (this.tipoConsulta === 'relato') {
        // Para relatos: estrutura direta
        this.resultado = data;
        await this.loadStatusHistory();
      } else {
        // Para reclamações: estrutura com success
        if (data.success) {
          this.resultado = {
            tracking_code: data.trackingCode,
            protocol: data.trackingCode,
            status: data.currentStatus,
            ...data, // Inclui todos os outros campos (description, category, etc.)
          };
          
          // Histórico já vem na resposta
          this.statusHistory = data.history || [];
          this.currentStatus = data.currentStatus;
        } else {
          throw new Error(data.error || 'Resposta inválida do servidor');
        }
      }
      
      console.log('✅ Resultado processado:', this.resultado);
      console.log('📝 Descrição:', this.resultado.description);
      console.log('📝 Todos os campos:', Object.keys(this.resultado));
      
      this.$nextTick(() => {
        const resultElement = document.querySelector('.resultado-container');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      
    } else if (response.status === 404) {
      this.showError(
        'Registro não encontrado',
        'Nenhum registro foi encontrado com os códigos informados. Verifique se os códigos estão corretos e se você selecionou o tipo correto.'
      );
    } else if (response.status === 400) {
      const errorData = await response.json();
      this.showError(
        'Dados inválidos',
        errorData.error || 'Os dados fornecidos são inválidos. Verifique os códigos e tente novamente.'
      );
    } else {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error('❌ Erro na consulta:', error);
    this.showError(
      'Erro de conexão',
      'Não foi possível consultar o status. Verifique sua conexão com a internet e tente novamente.'
    );
  } finally {
    this.isLoading = false;
  }
},

async loadStatusHistory() {
  if (!this.formData.trackingCode || !this.formData.accessCode) {
    console.log('❌ Códigos não disponíveis para carregar histórico');
    return;
  }

  this.loadingHistory = true;
  console.log('🔄 Carregando histórico...');

  try {
    const trackingCode = this.formData.trackingCode.trim().toUpperCase();
    const accessCode = this.formData.accessCode.trim().toUpperCase();
    
    const endpoint = this.tipoConsulta === 'relato' ? 'reports' : 'complaints';
    
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/api/${endpoint}/${trackingCode}/history?accessCode=${accessCode}`
    );

    console.log('📡 Response histórico status:', response.status);

    if (response.ok) {
      const data = await response.json();
      
      if (data.success && Array.isArray(data.history)) {
        this.statusHistory = data.history;
        this.currentStatus = data.currentStatus;
        
        console.log('✅ Histórico carregado:', {
          total_entries: this.statusHistory.length,
          current_status: this.currentStatus,
          history_data: this.statusHistory
        });
      } else {
        console.error('❌ Dados do histórico inválidos:', data);
        this.statusHistory = [];
      }
      
    } else if (response.status === 404) {
      console.log('⚠️ Histórico não encontrado');
      this.statusHistory = [];
    } else {
      const errorData = await response.json();
      console.error('❌ Erro na resposta:', errorData);
      throw new Error(errorData.message || 'Erro ao carregar histórico');
    }
    
  } catch (error) {
    console.error('❌ Erro ao carregar histórico:', error);
    this.statusHistory = [];
  } finally {
    this.loadingHistory = false;
  }
},

    // Validar formato do protocolo
    validarFormatoProtocolo() {
      const codigo = this.formData.trackingCode.trim().toUpperCase();
      const expectedPrefix = this.tipoConsulta === 'relato' ? 'UNI-REL' : 'UNI-REC';

      if (!codigo.startsWith(expectedPrefix)) {
        this.showError(
          'Formato inválido',
          `O protocolo deve começar com "${expectedPrefix}". Verifique se você selecionou o tipo correto.`
        );
        return false;
      }

      return true;
    },

    // Função auxiliar para mostrar erros
    showError(title, message) {
      this.erro = { title, message };

      this.$nextTick(() => {
        const errorElement = document.querySelector('.erro-container');
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    },

    // Limpar resultados quando os campos mudarem
    clearResults() {
      this.resultado = null;
      this.erro = null;
    },

    // Limpar erro
    clearError() {
      this.erro = null;
    },

    // Limpar formulário
    limparFormulario() {
      this.formData.trackingCode = '';
      this.formData.accessCode = '';
      this.clearResults();

      this.$nextTick(() => {
        document.getElementById('trackingCode').focus();
      });
    },

    // Nova consulta
    novaConsulta() {
      this.limparFormulario();
    },

    // Compartilhar status
    compartilharStatus() {
      if (!this.resultado) return;

      const url = `${window.location.origin}${window.location.pathname}?protocol=${this.resultado.tracking_code}&access=${this.formData.accessCode}&type=${this.tipoConsulta}`;

      if (navigator.share) {
        navigator.share({
          title: 'Status do ' + (this.tipoConsulta === 'relato' ? 'Relato' : 'Reclamação'),
          text: `Status: ${this.getStatusLabel(this.resultado.status)}`,
          url: url
        });
      } else {
        // Fallback para copiar para clipboard
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copiado para a área de transferência!');
        });
      }
    },

    // Calcular tempo de processamento
    getTempoProcessamento() {
      if (!this.resultado) return 'N/A';

      const created = new Date(this.resultado.created_at);
      const now = new Date();
      const diffTime = Math.abs(now - created);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) return '1 dia';
      return `${diffDays} dias`;
    },

    // Estimar próxima atualização
    getProximaAtualizacao() {
      if (!this.resultado) return 'N/A';

      const status = this.resultado.status;

      switch (status) {
        case 'pending':
          return 'Em até 2 dias úteis';
        case 'investigating':
        case 'in-progress':
          return 'Em até 5 dias úteis';
        case 'resolved':
        case 'closed':
          return 'Finalizado';
        default:
          return 'Em breve';
      }
    },

    getStatusClass(status) {
      const classes = {
        'new': 'status-new',
        'pending': 'status-pending',
        'in-progress': 'status-in-progress',
        'resolved': 'status-resolved',
        'closed': 'status-closed'
      };
      return classes[status] || 'status-pending';
    },
    getStatusIcon(status) {
      const icons = {
        'new': 'fas fa-plus-circle',
        'pending': 'fas fa-clock',
        'in-progress': 'fas fa-cog fa-spin',
        'resolved': 'fas fa-check-circle',
        'closed': 'fas fa-archive'
      };
      return icons[status] || 'fas fa-clock';
    },

    getStatusLabel(status) {
      const labels = {
        'new': 'Novo',
        'pending': 'Pendente',
        'in-progress': 'Em Análise',
        'resolved': 'Resolvido',
        'closed': 'Finalizado'
      };
      return labels[status] || 'Pendente';
    },

    getViolationTypeLabel(category) {
            const labels = {
                'sexual-harassment': 'Assédio sexual',
                'moral-harassment': 'Assédio moral',
                'physical-aggression': 'Agressão física',
                'unfair-competition': 'Concorrência desleal',
                'inappropriate-behavior': 'Comportamento inadequado',
                'conflict-interest': 'Conflito de Interesses',
                'work-environment': 'Clima organizacional (ambiente de trabalho)',
                'theft': 'Desvios, furtos e roubos',
                'discrimination': 'Discriminação',
                'salary-discrimination': 'Discriminação salarial',
                'sexual-importuning': 'Importunação sexual',
                'environmental': 'Questões ambientais',
                'work-safety': 'Segurança do Trabalho',
                'corruption': 'Suborno, corrupção ou fraude',
                'child-labor': 'Trabalho Infantil',
                'slave-labor': 'Trabalho escravo ou análogo à escravidão',
                'data-breach': 'Vazamento de dados',
                'research-violations': 'Violações éticas nas pesquisas e desenvolvimento',
                'intellectual-property': 'Violações à propriedade intelectual',
                'law-violation': 'Violação de lei',
                'product-defect': 'Defeito no produto',
                'wrong-quantity': 'Quantidade incorreta',
                'expired-product': 'Produto vencido',
                'product-violation': 'Violação de especificações',
                'damaged-product': 'Produto danificado',
                'incorrect-product': 'Produto incorreto/trocado',
                'missing-items': 'Itens faltando na entrega',
                'packaging-issue': 'Problema na embalagem',
                'quality-issue': 'Problema de qualidade',
                'other': 'Outros'
            };
            return labels[category] || category;
        },

    isStatusReached(targetStatus) {
      if (!this.resultado) return false;

      const currentStatus = this.resultado.status;
      const statusOrder = ['new', 'pending', 'in-progress', 'resolved', 'closed'];
      const currentIndex = statusOrder.indexOf(currentStatus);
      const targetIndex = statusOrder.indexOf(targetStatus);

      return currentIndex >= targetIndex;
    },

    formatDate(dateString) {
  if (!dateString) return 'Data não disponível';

  try {
    const date = new Date(dateString);
    // Subtrai 3 horas para ajustar o fuso horário
    date.setHours(date.getHours());
    
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  } catch (error) {
    console.error('Erro ao formatar data:', error);
    return 'Data inválida';
  }
},

formatDateTwo(dateString) {
  if (!dateString) return 'Data não disponível';

  try {
    const date = new Date(dateString);
    // Subtrai 3 horas para ajustar o fuso horário
    date.setHours(date.getHours());
    
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  } catch (error) {
    console.error('Erro ao formatar data:', error);
    return 'Data inválida';
  }
}
  }
};
</script>

<style scoped>
.consulta-status-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.hero-section {
  position: relative;
  height: 85.3vh;
  min-height: 500px;
  overflow: hidden;
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  background-image: url('@/assets/fundo-logo-uni.png');
  background-size: contain;
  background-position: center calc(50% - 80px);
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.8), rgba(0, 0, 0, 0.6));
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.consulta-section {
  padding: 80px 0;
}

.consulta-container {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(174, 44, 42, 0.1);
  position: relative;
}

.consulta-container::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 2px;
  right: 2px;
  height: 10px;
  background: linear-gradient(90deg, #AE2C2A, #D2342C, #AE2C2A);
  border-radius: 20px 20px 0 0;
}

.consulta-header {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 2px solid #f8f9fa;
}

.consulta-header h2 {
  color: #AE2C2A;
  font-size: 2.2rem;
  margin-bottom: 15px;
  font-weight: 700;
}


.consulta-header p {
  color: #666;
  font-size: 1.2rem;
  line-height: 1.6;
}

.tipo-consulta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 40px;
}

.radio-option {
  display: flex;
  align-items: center;
  padding: 25px;
  border: 2px solid #e9ecef;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: #fafafa;
}

.radio-option:hover {
  border-color: #AE2C2A;
  background: rgba(174, 44, 42, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.15);
}

.radio-option.active {
  border-color: #AE2C2A;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(210, 52, 44, 0.05));
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.2);
}

.radio-option input[type="radio"] {
  display: none;
}

.radio-custom {
  width: 22px;
  height: 22px;
  border: 2px solid #ddd;
  border-radius: 50%;
  margin-right: 18px;
  position: relative;
  transition: all 0.3s ease;
}

.radio-option.active .radio-custom {
  border-color: #AE2C2A;
  background: #AE2C2A;
}

.radio-option.active .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

.radio-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.radio-content i {
  color: #AE2C2A;
  font-size: 1.4rem;
}

.radio-content span {
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
}

.consulta-form {
  margin-bottom: 40px;
}

.form-group {
  margin-bottom: 30px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  font-size: 1.1rem;
}

.required {
  color: #AE2C2A;
}

.form-group input {
  width: 100%;
  padding: 18px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1.1rem;
  transition: all 0s ease;
  text-transform: uppercase;
  background: #fafafa;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #AE2C2A;
  box-shadow: 0 0 0 4px rgba(174, 44, 42, 0.1);
  background: white;
  transform: translateY(-1px);
}

.form-group input:disabled {
  background: #f1f3f4;
  cursor: not-allowed;
  opacity: 0.7;
}

.input-hint {
  display: block;
  margin-top: 8px;
  color: #666;
  font-size: 0.95rem;
  font-style: italic;
}

.consultar-btn {
  width: 100%;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  color: white;
  border: none;
  padding: 18px 35px;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 4px 15px rgba(174, 44, 42, 0.3);
}

.consultar-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.4);
}

.consultar-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 4px 15px rgba(174, 44, 42, 0.2);
}

/* Resultado */
.resultado-container {
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 20px;
  padding: 45px;
  margin-top: 40px;
  border-left: 6px solid #AE2C2A;
  animation: slideIn 0.5s ease-out;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  position: relative;
  overflow: hidden;
}

.resultado-container::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  height: 6px;
  background: linear-gradient(90deg, #AE2C2A, #D2342C, #AE2C2A);
  border-radius: 18px 18px 0 0;
}

.resultado-container::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(174, 44, 42, 0.03) 0%, transparent 70%);
  pointer-events: none;
}

.resultado-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  padding-bottom: 25px;
  border-bottom: 3px solid #e9ecef;
  position: relative;
}

.resultado-header::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #AE2C2A, #D2342C);
  border-radius: 2px;
}

.resultado-header h3 {
  color: #AE2C2A;
  font-size: 1.8rem;
  margin: 0;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.protocolo {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 6px 20px rgba(174, 44, 42, 0.4);
  position: relative;
  overflow: hidden;
}

.protocolo::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Status Info */
.status-info {
  margin-bottom: 40px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.status-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: statusShimmer 3s infinite;
}

@keyframes statusShimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.status-new {
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  color: #7b1fa2;
  border: 2px solid #9c27b0;
}

.status-pending {
  background: linear-gradient(135deg, #fff3e0, #ffe0b3);
  color: #e65100;
  border: 2px solid #ff9800;
}

.status-in-progress {
  background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
  color: #00695c;
  border: 2px solid #00bcd4;
}

.status-resolved {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  color: #1b5e20;
  border: 2px solid #4caf50;
}

.status-closed {
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
  color: #b71c1c;
  border: 2px solid #f44336;
}

.status-details {
  background: linear-gradient(135deg, #fafafa, #f5f5f5);
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.detail-item {
  margin-bottom: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.detail-item.strong {
  font-weight: 700;
  color: #333;
}

.detail-item-description {
  display: block;
  color: #AE2C2A;
  font-weight: 700;
  min-width: 160px;
  font-size: 1rem;
}

.feedback {
  display: block;
  min-width: 160px;
}

.detail-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.detail-item strong {
  color: #AE2C2A;
  font-weight: 700;
  min-width: 140px;
  font-size: 1rem;
}

.detail-item p {
  margin: 0;
  color: #555;
  line-height: 1.6;
  flex: 1;
}

/* Timeline */
.status-timeline {
  margin: 40px 0;
}

.status-timeline h4 {
  color: #AE2C2A;
  font-size: 1.4rem;
  margin-bottom: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #AE2C2A, #D2342C);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.timeline-item.active {
  opacity: 1;
}

.timeline-dot {
  position: absolute;
  left: -22px;
  top: 5px;
  width: 16px;
  height: 16px;
  background: #e0e0e0;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.timeline-item.active .timeline-dot {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  transform: scale(1.2);
  box-shadow: 0 4px 15px rgba(174, 44, 42, 0.4);
}

.timeline-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.timeline-item.active .timeline-content {
  border-color: #AE2C2A;
  box-shadow: 0 4px 20px rgba(174, 44, 42, 0.1);
}

.timeline-content h5 {
  color: #333;
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.timeline-content p {
  color: #AE2C2A;
  margin: 0 0 5px 0;
  font-weight: 600;
  font-size: 0.95rem;
}

.timeline-content small {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Informações Adicionais */
.info-adicional {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 40px 0;
}

.info-card {
  background: linear-gradient(135deg, #fff5f5, #ffebee);
  padding: 25px;
  border-radius: 15px;
  border: 1px solid rgba(174, 44, 42, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: all 0.3s ease;
  text-align: center;
}

.info-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.15);
}

.info-card i {
  font-size: 2rem;
  color: #AE2C2A;
  flex-shrink: 0;
}

.info-card h5 {
  color: #333;
  margin: 0 0 5px 0;
  font-size: 1rem;
  font-weight: 700;
}

.info-card p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Botões de Ação */
.nova-consulta {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid #e9ecef;
}

.nova-consulta-btn,
.compartilhar-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  min-width: 180px;
  justify-content: center;
}

.nova-consulta-btn {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  color: white;
  box-shadow: 0 4px 15px rgba(174, 44, 42, 0.3);
}

.nova-consulta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(174, 44, 42, 0.4);
}

.compartilhar-btn {
  background: linear-gradient(135deg, #6c757d, #5a6268);
  color: white;
  box-shadow: 0 4px 15px rgba(108, 117, 125, 0.3);
}

.compartilhar-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(108, 117, 125, 0.4);
}

/* Erro */
.erro-container {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 12px;
  padding: 30px;
  margin-top: 30px;
  text-align: center;
  animation: slideIn 0.5s ease-out;
}

.erro-content i {
  font-size: 3rem;
  color: #721c24;
  margin-bottom: 15px;
}

.erro-content h3 {
  color: #721c24;
  margin-bottom: 10px;
}

.erro-content p {
  color: #721c24;
  margin-bottom: 20px;
  line-height: 1.6;
}

.erro-sugestoes {
  background: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  text-align: left;
}

.erro-sugestoes h5 {
  color: #721c24;
  margin-bottom: 10px;
  font-size: 1rem;
}

.erro-sugestoes ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.erro-sugestoes li {
  color: #721c24;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  font-size: 0.9rem;
}

.erro-sugestoes li::before {
  content: '•';
  color: #AE2C2A;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.erro-acoes {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.retry-btn,
.clear-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.clear-btn {
  background: #6c757d;
}

.retry-btn:hover {
  background: #c82333;
  transform: translateY(-1px);
}

.clear-btn:hover {
  background: #5a6268;
  transform: translateY(-1px);
}

/* Dicas */
.dicas-container {
  background: linear-gradient(135deg, #fff5f5, #ffebee);
  border: 2px solid rgba(174, 44, 42, 0.2);
  border-radius: 15px;
  padding: 30px;
  margin-top: 30px;
  position: relative;
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.1);
}

.dicas-container::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  height: 10px;
  background: linear-gradient(90deg, #AE2C2A, #D2342C, #AE2C2A);
  border-radius: 20px 20px 0 0;
}

.dicas-content h4 {
  color: #AE2C2A;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
}

.dicas-content h4 i {
  color: #ffc107;
  font-size: 1.5rem;
  animation: lightbulbGlow 2s ease-in-out infinite;
}

@keyframes lightbulbGlow {

  0%,
  100% {
    transform: scale(1);
    filter: brightness(1);
  }

  50% {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
}

.dicas-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.dica-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 25px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  border-radius: 12px;
  border: 1px solid rgba(174, 44, 42, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.dica-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #AE2C2A, #D2342C);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.dica-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.15);
  background: linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9));
}

.dica-item:hover::before {
  transform: scaleY(1);
}

.dica-item i {
  color: #AE2C2A;
  font-size: 1.8rem;
  margin-top: 3px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.dica-item:hover i {
  transform: scale(1.1);
  color: #D2342C;
}

.dica-item strong {
  color: #AE2C2A;
  display: block;
  margin-bottom: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;
}

.dica-item p {
  color: #555;
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
}

.dica-item:hover strong {
  color: #D2342C;
}

.dica-item:hover p {
  color: #333;
}

/* Ícones específicos para cada dica */
.dica-item:nth-child(1) i {
  color: #28a745;
}

.dica-item:nth-child(2) i {
  color: #17a2b8;
}

.dica-item:nth-child(3) i {
  color: #AE2C2A;
}

.dica-item:nth-child(4) i {
  color: #6f42c1;
}

.dica-item:nth-child(5) i {
  color: #fd7e14; /* Laranja para prazo */
}

.dica-item:nth-child(6) i {
  color: #20c997; /* Verde água para confidencialidade */
}

/* Animação de entrada escalonada */
.dica-item {
  animation: slideInUp 0.6s ease-out;
}

.dica-item:nth-child(1) {
  animation-delay: 0.1s;
}

.dica-item:nth-child(2) {
  animation-delay: 0.2s;
}

.dica-item:nth-child(3) {
  animation-delay: 0.3s;
}

.dica-item:nth-child(4) {
  animation-delay: 0.4s;
}

.dica-item:nth-child(5) {
  animation-delay: 0.5s;
}

.dica-item:nth-child(6) {
  animation-delay: 0.6s;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Estatísticas */
.stats-container {
  background: linear-gradient(135deg, #fff5f5, #ffebee);
  border: 2px solid rgba(174, 44, 42, 0.2);
  border-radius: 15px;
  padding: 35px;
  margin-top: 30px;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.1);
}

.stats-container::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  height: 10px;
  background: linear-gradient(90deg, #AE2C2A, #D2342C, #AE2C2A);
  border-radius: 20px 20px 0 0;
}

.stats-content h4 {
  color: #AE2C2A;
  margin-bottom: 30px;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.stats-content h4::before {
  content: '📊';
  font-size: 1.5rem;
  animation: statsIcon 2s ease-in-out infinite;
}

@keyframes statsIcon {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
}

.stat-item {
  padding: 25px 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  border-radius: 12px;
  border: 1px solid rgba(174, 44, 42, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #AE2C2A, #D2342C);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.15);
  background: linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9));
}

.stat-item:hover::before {
  transform: scaleX(1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 10px;
  display: block;
  text-shadow: 0 2px 4px rgba(174, 44, 42, 0.1);
  animation: numberPulse 3s ease-in-out infinite;
}

@keyframes numberPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.stat-label {
  color: #555;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.stat-item:hover .stat-number {
  color: #D2342C;
  transform: scale(1.1);
}

.stat-item:hover .stat-label {
  color: #333;
}

/* Cores específicas para cada stat */
.stat-item:nth-child(1) .stat-number {
  color: #28a745;
}

.stat-item:nth-child(2) .stat-number {
  color: #17a2b8;
}

.stat-item:nth-child(3) .stat-number {
  color: #AE2C2A;
}

.stat-item:nth-child(1):hover .stat-number {
  color: #20c997;
}

.stat-item:nth-child(2):hover .stat-number {
  color: #138496;
}

.stat-item:nth-child(3):hover .stat-number {
  color: #D2342C;
}

/* Animação de entrada */
.stat-item {
  animation: slideInUp 0.6s ease-out;
}

.stat-item:nth-child(1) {
  animation-delay: 0.1s;
}

.stat-item:nth-child(2) {
  animation-delay: 0.2s;
}

.stat-item:nth-child(3) {
  animation-delay: 0.3s;
}

/* Timeline do histórico do banco */
.timeline-database {
  margin-top: 30px;
  padding-top: 25px;
  border-top: 2px solid #e9ecef;
}

.timeline-database h5 {
  color: #AE2C2A;
  font-size: 1.2rem;
  margin-bottom: 25px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.timeline-database h5 i {
  color: #28a745;
}

.timeline-history {
  position: relative;
  padding-left: 30px;
}

.timeline-history::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #AE2C2A, #D2342C);
  border-radius: 2px;
}

.history-item {
  position: relative;
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.history-item:last-child {
  margin-bottom: 0;
}

.history-dot {
  position: absolute;
  left: -26px;
  top: 8px;
  width: 16px;
  height: 16px;
  background: #e0e0e0;
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.history-dot.status-new { 
  background: linear-gradient(135deg, #9c27b0, #7b1fa2); 
  border-color: #ce93d8; 
}
.history-dot.status-pending { 
  background: linear-gradient(135deg, #ff9800, #f57c00); 
  border-color: #ffcc80; 
}
.history-dot.status-in-progress { 
  background: linear-gradient(135deg, #00bcd4, #0097a7); 
  border-color: #80deea; 
}
.history-dot.status-resolved { 
  background: linear-gradient(135deg, #4caf50, #2e7d32); 
  border-color: #a5d6a7; 
}
.history-dot.status-closed { 
  background: linear-gradient(135deg, #f44336, #d32f2f); 
  border-color: #ef9a9a; 
}

.history-content {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.history-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #AE2C2A, #D2342C);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.history-item:hover .history-content {
  transform: translateX(5px);
  box-shadow: 0 4px 20px rgba(174, 44, 42, 0.1);
  border-color: #AE2C2A;
}

.history-item:hover .history-content::before {
  opacity: 1;
}

.history-item.current-status .history-content {
  border-color: #AE2C2A;
  background: linear-gradient(135deg, #fff5f5, #ffebee);
  box-shadow: 0 4px 20px rgba(174, 44, 42, 0.15);
}

.history-item.creation-entry .history-content {
  border-color: #8B1F1D;
  background: linear-gradient(135deg, #fff2f2, #ffe8e8);
  box-shadow: 0 4px 20px rgba(139, 31, 29, 0.12);
}

.history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.history-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1rem;
  padding: 6px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.history-status.status-new {
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  color: #7b1fa2;
  border: 1px solid #9c27b0;
}

.history-status.status-pending {
  background: linear-gradient(135deg, #fff3e0, #ffe0b3);
  color: #e65100;
  border: 1px solid #ff9800;
}

.history-status.status-in-progress {
  background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
  color: #00695c;
  border: 1px solid #00bcd4;
}

.history-status.status-resolved {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  color: #1b5e20;
  border: 1px solid #4caf50;
}

.history-status.status-closed {
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
  color: #b71c1c;
  border: 1px solid #f44336;
}

.current-indicator {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  color: white;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  animation: glow 2s ease-in-out infinite alternate;
}

.creation-indicator {
  background: linear-gradient(135deg, #8B1F1D, #AE2C2A);
  color: white;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

.history-message {
  margin: 15px 0;
  color: #495057;
  line-height: 1.6;
  font-size: 0.95rem;
  padding: 12px;
  background: rgba(174, 44, 42, 0.05);
  border-radius: 8px;
  border-left: 4px solid #AE2C2A;
  font-style: italic;
}

.history-item.status-pending .history-message {
  background: rgba(255, 152, 0, 0.05);
  border-left-color: #ff9800;
}

.history-item.status-in-progress .history-message {
  background: rgba(0, 188, 212, 0.05);
  border-left-color: #00bcd4;
}

.history-item.status-resolved .history-message {
  background: rgba(76, 175, 80, 0.05);
  border-left-color: #4caf50;
}

.history-item.status-closed .history-message {
  background: rgba(244, 67, 54, 0.05);
  border-left-color: #f44336;
}

.history-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #6c757d;
  margin-top: 15px;
  padding-top: 12px;
  border-top: 1px solid #e9ecef;
}

.history-admin,
.history-date {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #495057;
  padding: 6px 10px;
  background: rgba(174, 44, 42, 0.05);
  border-radius: 6px;
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.history-admin i,
.history-date i {
  color: #AE2C2A;
  font-size: 1rem;
}

.loading-history i {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #9c27b0;
  animation: spin 1s linear infinite;
}

.loading-history p {
  font-size: 1.1rem;
  margin: 0;
  color: #7b1fa2;
  font-weight: 600;
}

.report-description {
  padding: 15px;
  background: rgba(174, 44, 42, 0.05);
  border-radius: 8px;
  border-left: 4px solid #AE2C2A;
  line-height: 1.6;
  color: #495057;
  font-style: italic;
  text-align: left;
  max-height: 150px;
  overflow-y: auto;
  width: 100%;
}

.status-message {
    background: linear-gradient(135deg, #f8d7da, #f5c6cb);
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px !important;
    line-height: 1.6;
    border-left: 4px solid #dc3545;
    font-style: italic;
    text-align: left;
    max-height: 150px;
    overflow-y: auto;
    width: 100%;
    color: #721c24;
    box-shadow: 0 2px 8px rgba(220, 53, 69, 0.2);
}

.consulta-form-content {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.resultado-container {
  animation: slideInResult 0.5s ease-out;
}

@keyframes slideInResult {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animações */
@keyframes pulse {
  0% {
    box-shadow: 0 4px 15px rgba(174, 44, 42, 0.4);
  }
  50% {
    box-shadow: 0 4px 25px rgba(174, 44, 42, 0.6);
  }
  100% {
    box-shadow: 0 4px 15px rgba(174, 44, 42, 0.4);
  }
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px rgba(174, 44, 42, 0.5);
  }
  to {
    box-shadow: 0 0 15px rgba(174, 44, 42, 0.8);
  }
}

@keyframes glowPurple {
  from {
    box-shadow: 0 2px 8px rgba(156, 39, 176, 0.3);
  }
  to {
    box-shadow: 0 4px 15px rgba(156, 39, 176, 0.6);
  }
}

@keyframes pulseMultiColor {
  0% {
    box-shadow: 0 4px 15px rgba(156, 39, 176, 0.4);
  }
  25% {
    box-shadow: 0 4px 15px rgba(255, 152, 0, 0.4);
  }
  50% {
    box-shadow: 0 4px 15px rgba(0, 188, 212, 0.4);
  }
  75% {
    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
  }
  100% {
    box-shadow: 0 4px 15px rgba(244, 67, 54, 0.4);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .consulta-container {
    padding: 20px;
    margin: 0 10px;
  }

  .tipo-consulta {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .radio-option {
    padding: 15px;
  }

  .resultado-header {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .resultado-header h3 {
    font-size: 1.2rem;
  }

  .timeline {
    padding-left: 20px;
  }

  .timeline-item {
    padding-left: 25px;
  }

  .timeline-dot {
    left: -18px;
    width: 12px;
    height: 12px;
  }

  .consulta-header h2 {
    font-size: 1.5rem;
  }

  .consulta-header p {
    font-size: 1rem;
  }

  .info-adicional {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .nova-consulta {
    flex-direction: column;
    align-items: center;
  }

  .dicas-container {
    padding: 25px 20px;
  }

  .dicas-content h4 {
    font-size: 1.2rem;
    text-align: center;
  }

  .dicas-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .dica-item {
    padding: 20px;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .dica-item div {
    text-align: center;
  }

  .dica-item i {
    font-size: 1.6rem;
  }

  .dica-item strong {
    font-size: 1rem;
  }

  .dica-item p {
    font-size: 0.95rem;
  }

  .stats-container {
    padding: 25px 20px;
  }
  
  .stats-content h4 {
    font-size: 1.2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .stat-item {
    padding: 20px 15px;
  }
  
  .stat-number {
    font-size: 2.2rem;
  }
  
  .stat-label {
    font-size: 0.95rem;
  }

  .erro-acoes {
    flex-direction: column;
    align-items: center;
  }

  .resultado-container {
    padding: 30px 20px;
  }
  
  .resultado-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .resultado-header h3 {
    font-size: 1.5rem;
  }
  
  .status-details {
    padding: 20px;
  }
  
  .detail-item {
    flex-direction: column;
    gap: 8px;
  }

  .detail-item strong {
    min-width: auto;
  }
  
  .timeline {
    padding-left: 25px;
  }
  
  .timeline-dot {
    left: -19px;
  }
  
  .timeline-content {
    padding: 15px;
  }
  
  .info-adicional {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .info-card {
    padding: 20px;
    gap: 15px;
  }
  
  .nova-consulta {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .nova-consulta-btn,
  .compartilhar-btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 0 40px;
  }

  .consulta-section {
    padding: 40px 0;
  }

  .form-group input,
  .consultar-btn {
    padding: 12px;
  }

  .status-badge {
    font-size: 0.9rem;
    padding: 10px 16px;
  }

  .erro-container,
  .dicas-container {
    padding: 20px;
  }

  .stats-container {
    padding: 20px 15px;
    margin-top: 25px;
  }
  
  .stats-content h4 {
    font-size: 1.1rem;
    flex-direction: column;
    gap: 8px;
  }
  
  .stat-item {
    padding: 18px 12px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }

  .info-card {
    padding: 15px;
  }

  .info-card i {
    font-size: 1.5rem;
  }

  .dicas-container {
    padding: 20px 15px;
    margin-top: 25px;
  }

  .dicas-content h4 {
    font-size: 1rem;
    gap: 10px;
  }

  .dicas-content h4 i {
    font-size: 1.2rem;
  }

  .dica-item {
    padding: 18px;
    gap: 12px;
  }

  .dica-item i {
    font-size: 1.4rem;
  }

  .dica-item strong {
    font-size: 0.95rem;
  }

  .dica-item p {
    font-size: 0.9rem;
  }

  .resultado-container {
    padding: 25px 15px;
  }
  
  .resultado-header h3 {
    font-size: 1.3rem;
  }
  
  .protocolo {
    padding: 10px 20px;
    font-size: 1rem;
  }
  
  .status-badge {
    padding: 12px 20px;
    font-size: 1rem;
  }
  
  .status-details {
    padding: 15px;
  }
  
  .timeline-content {
    padding: 12px;
  }
  
  .timeline-content h5 {
    font-size: 1rem;
  }
  
  .info-card {
    padding: 15px;
    gap: 12px;
  }
  
  .info-card i {
    font-size: 1.5rem;
  }
  
  .nova-consulta-btn,
  .compartilhar-btn {
    padding: 12px 25px;
    font-size: 0.95rem;
  }
}

/* Efeito adicional para o container */
.dicas-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(174, 44, 42, 0.15);
  transition: all 0.3s ease;
}

.stats-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(174, 44, 42, 0.15);
  transition: all 0.3s ease;
}

/* Animações */
.resultado-container,
.erro-container {
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-item.active {
  animation: fadeInActive 0.6s ease-out;
}

@keyframes fadeInActive {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
}

/* Loading states */
.consultar-btn .fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Focus states para acessibilidade */
.radio-option:focus-within {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
}

.form-group input:focus,
.consultar-btn:focus,
.nova-consulta-btn:focus,
.compartilhar-btn:focus,
.retry-btn:focus,
.clear-btn:focus {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
}

/* Estados de hover melhorados */
.timeline-item:not(.active):hover .timeline-content h5,
.timeline-item:not(.active):hover .timeline-content p,
.timeline-item:not(.active):hover .timeline-content small {
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

/* Melhorias visuais */
.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.dica-item:hover {
  background: rgba(255, 255, 255, 0.9);
  transition: background 0.3s ease;
}

/* Validação visual */
.form-group input.error {
  border-color: #dc3545;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.form-group input.success {
  border-color: #28a745;
  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
}

/* Indicador de carregamento melhorado */
.consultar-btn.loading {
  position: relative;
  overflow: hidden;
}

.consultar-btn.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

/* Efeitos especiais */
.resultado-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.status-badge:hover {
  transform: scale(1.05);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-content {
  transform: translateX(5px);
  transition: all 0.3s ease;
}

.info-card:hover i {
  transform: scale(1.1);
  transition: all 0.3s ease;
}

/* Estados de loading para elementos dinâmicos */
.loading-shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmerEffect 1.5s infinite;
}

@keyframes shimmerEffect {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Destaque para informações importantes */
.detail-item:first-child {
  background: linear-gradient(135deg, #e8f5e8, #f1f8e9);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c8e6c9;
  margin: -15px -15px 20px -15px;
}

.detail-item:first-child strong {
  color: #2e7d32;
}

/* Efeito pulsante para status ativo */
.timeline-item.active .timeline-dot {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(174, 44, 42, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(174, 44, 42, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(174, 44, 42, 0);
  }
}

/* Melhorias na tipografia */
.resultado-container h3,
.resultado-container h4,
.resultado-container h5 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Scrollbar personalizada para timeline longa */
.timeline-history::-webkit-scrollbar {
  width: 6px;
}

.timeline-history::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.timeline-history::-webkit-scrollbar-thumb {
  background: #AE2C2A;
  border-radius: 3px;
}

.timeline-history::-webkit-scrollbar-thumb:hover {
  background: #D2342C;
}

/* Transições suaves */
* {
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

/* Print styles */
@media print {

  .hero-section,
  .consulta-form,
  .nova-consulta,
  .dicas-container,
  .stats-container {
    display: none;
  }

  .resultado-container {
    box-shadow: none;
    border: 1px solid #000;
  }

  .status-badge {
    background: #f0f0f0 !important;
    color: #000 !important;
  }
}
</style>
