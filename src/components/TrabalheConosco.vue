<template>
  <div class="trabalhe-page">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">Trabalhe Conosco</h1>
        <div class="hero-subtitle">Faça parte do nosso time</div>
      </div>
    </section>

    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Junte-se à Nossa Equipe</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            Na Uni Hospitalar, acreditamos que nossos colaboradores são o nosso maior ativo.
            Estamos sempre em busca de talentos que compartilhem nossos valores e queiram
            fazer a diferença no setor de saúde. Conheça nossas oportunidades e faça parte
            do nosso time.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção de Valores da Empresa -->
    <section class="values-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Nossos Valores</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="values-grid">
          <ScrollReveal direction="bottom" :delay="300">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3>Integridade</h3>
              <p>Agimos com ética, transparência e responsabilidade em todas as nossas relações.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>Colaboração</h3>
              <p>Trabalhamos juntos, valorizando sempre a diversidade, a inclusão e o respeito mútuo.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="500">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h3>Inovação</h3>
              <p>Buscamos constantemente novas soluções e melhores práticas para o setor de saúde.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="600">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3>Excelência</h3>
              <p>Comprometemo-nos com a qualidade e a melhoria contínua em tudo o que fazemos.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Benefícios -->
    <section class="benefits-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>Benefícios de Trabalhar Conosco</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="benefits-container">
          <ScrollReveal direction="left" :delay="300">
            <div class="benefits-image">
              <img src="@/assets/trabalhe-conosco.jpg" alt="Equipe Uni Hospitalar" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="benefits-list">
              <div class="benefit-item">
                <div class="benefit-icon">
                  <i class="fas fa-medal"></i>
                </div>
                <div class="benefit-content">
                  <h4>Plano de Carreira</h4>
                  <p>Oportunidades de crescimento e desenvolvimento profissional.</p>
                </div>
              </div>

              <div class="benefit-item">
                <div class="benefit-icon">
                  <i class="fas fa-heartbeat"></i>
                </div>
                <div class="benefit-content">
                  <h4>Plano de Saúde</h4>
                  <p>Assistência médica e odontológica para você e seus dependentes.</p>
                </div>
              </div>

              <div class="benefit-item">
                <div class="benefit-icon">
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="benefit-content">
                  <h4>Capacitação Contínua</h4>
                  <p>Programas de treinamento e desenvolvimento de habilidades.</p>
                </div>
              </div>

              <div class="benefit-item">
                <div class="benefit-icon">
                  <i class="fas fa-gift"></i>
                </div>
                <div class="benefit-content">
                  <h4>Pacote de Benefícios</h4>
                  <p>Vale-alimentação, vale-transporte e outros benefícios competitivos.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Vagas Disponíveis -->
    <section class="jobs-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Vagas Disponíveis</h2>
            <span class="accent-line"></span>
          </div>
          <p class="jobs-intro">
            Confira nossas oportunidades atuais e candidate-se à vaga que mais combina com seu perfil.
          </p>
        </ScrollReveal>

        <!-- Loading das vagas -->
        <div v-if="loadingJobs" class="loading-container">
          <div class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
          </div>
          <p>Carregando vagas disponíveis...</p>
        </div>

        <!-- Lista de vagas -->
        <div v-else-if="availableJobs.length > 0" class="jobs-grid">
          <ScrollReveal direction="bottom" :delay="300 + (index * 100)" v-for="(job, index) in availableJobs"
            :key="job.id">
            <div class="job-card" @click="selectJob(job)">
              <div class="job-header">
                <div class="job-icon">
                  <i :class="getJobIcon(job.department)"></i>
                </div>
                <div class="job-badge" :class="getJobBadgeClass(job.type)">
                  {{ job.type }}
                </div>
              </div>
              <div class="job-content">
                <h3 class="job-title">{{ job.title }}</h3>
                <div class="job-info">
                  <div class="job-detail">
                    <i class="fas fa-building"></i>
                    <span>{{ job.department }}</span>
                  </div>
                  <div class="job-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>{{ job.location }}</span>
                  </div>
                  <div class="job-detail">
                    <i class="fas fa-clock"></i>
                    <span>{{ job.workload }}</span>
                  </div>
                </div>
                <p class="job-description">{{ job.shortDescription }}</p>
                <div class="job-requirements">
                  <h4>Principais requisitos:</h4>
                  <ul>
                    <li v-for="requirement in job.mainRequirements" :key="requirement">
                      {{ requirement }}
                    </li>
                  </ul>

                  <!-- Adicionar requisitos adicionais se existirem -->
                  <div v-if="job.additionalRequirements && job.additionalRequirements.length > 0"
                    class="additional-requirements">
                    <h4>Requisitos adicionais:</h4>
                    <ul>
                      <li v-for="requirement in job.additionalRequirements" :key="requirement">
                        {{ requirement }}
                      </li>
                    </ul>
                  </div>

                  <!-- Adicionar benefícios se existirem -->
                  <div v-if="job.benefits && job.benefits.length > 0" class="job-benefits">
                    <h4>Benefícios:</h4>
                    <ul>
                      <li v-for="benefit in job.benefits" :key="benefit">
                        {{ benefit }}
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
            <div class="job-footer">
              <div class="job-salary" v-if="job.salary">
                <i class="fas fa-dollar-sign"></i>
                <span>{{ job.salary }}</span>
              </div>
              <button class="apply-button">
                <i class="fas fa-paper-plane"></i>
                Candidatar-se
              </button>
            </div>
        </div>
        </ScrollReveal>
      </div>

      <!-- Mensagem quando não há vagas -->
      <div v-else class="no-jobs-container">
        <ScrollReveal direction="bottom" :delay="300">
          <div class="no-jobs-content">
            <div class="no-jobs-icon">
              <i class="fas fa-search"></i>
            </div>
            <h3>Nenhuma vaga disponível no momento</h3>
            <p>
              Não temos vagas abertas atualmente, mas você pode enviar seu currículo para nosso banco de talentos.
              Entraremos em contato quando surgir uma oportunidade compatível com seu perfil.
            </p>
            <button @click="showTalentBankForm" class="talent-bank-button">
              <i class="fas fa-database"></i>
              Cadastrar no Banco de Talentos
            </button>
          </div>
        </ScrollReveal>
      </div>
  </div>
  </section>

  <!-- Seção de Formulário (oculta inicialmente) -->
  <section class="form-section" v-if="showForm">
    <div class="container">
      <ScrollReveal direction="bottom" :delay="200">
        <div class="section-title">
          <span class="accent-line"></span>
          <h2 v-if="selectedJob">Candidatar-se para: {{ selectedJob.title }}</h2>
          <h2 v-else>Banco de Talentos</h2>
          <span class="accent-line"></span>
        </div>
        <div class="selected-job-info" v-if="selectedJob">
          <div class="job-summary">
            <div class="job-summary-header">
              <h3>{{ selectedJob.title }}</h3>
              <button @click="backToJobs" class="back-button">
                <i class="fas fa-arrow-left"></i>
                Voltar às vagas
              </button>
            </div>
            <div class="job-summary-details">
              <span><i class="fas fa-building"></i> {{ selectedJob.department }}</span>
              <span><i class="fas fa-map-marker-alt"></i> {{ selectedJob.location }}</span>
              <span><i class="fas fa-clock"></i> {{ selectedJob.workload }}</span>
            </div>
          </div>
        </div>
        <p class="form-intro" v-if="selectedJob">
          Preencha o formulário abaixo para se candidatar a esta vaga.
          Anexe seu currículo e nos conte um pouco sobre você e suas expectativas.
        </p>
        <p class="form-intro" v-else>
          Preencha o formulário abaixo para fazer parte do nosso banco de talentos.
          Entraremos em contato quando surgir uma oportunidade compatível com seu perfil.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="bottom" :delay="300">
        <div class="form-container">
          <div class="form-header">
            <div class="form-icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <h3 v-if="selectedJob">Candidatar-se para: {{ selectedJob.title }}</h3>
            <h3 v-else>Banco de Talentos</h3>
          </div>
          <form @submit.prevent="submitForm" class="career-form">
            <div class="form-grid">
              <div class="form-group">
                <label for="name">Nome Completo</label>
                <input type="text" id="name" v-model="formData.name" required placeholder="Seu nome completo">
                <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" v-model="formData.email" required placeholder="seu.email@exemplo.com">
                <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="phone">Telefone</label>
                <input type="tel" id="phone" v-model="formData.phone" required placeholder="(00) 00000-0000"
                  @input="formatPhone" maxlength="15">
                <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
              </div>

              <div class="form-group" v-if="!selectedJob">
                <label for="position">Área de Interesse</label>
                <select id="position" v-model="formData.position" required>
                  <option value="" disabled selected>Selecione uma área</option>
                  <option value="Administrativo">Administrativo</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Estoque">Estoque</option>
                  <option value="Financeiro">Financeiro</option>
                  <option value="Fiscal">Fiscal</option>
                  <option value="Licitação">Licitação</option>
                  <option value="Logística">Logística</option>
                  <option value="TI">TI</option>
                  <option value="Outro">Outro</option>
                </select>
                <span class="error-message" v-if="errors.position">{{ errors.position }}</span>
              </div>

              <div class="form-group">
                <label for="education">Formação Acadêmica</label>
                <select id="education" v-model="formData.education" required>
                  <option value="" disabled selected>Selecione sua formação</option>
                  <option value="Ensino Médio">Ensino Médio</option>
                  <option value="Ensino Técnico">Ensino Técnico</option>
                  <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                  <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                  <option value="Pós-graduação">Pós-graduação</option>
                  <option value="Mestrado">Mestrado</option>
                  <option value="Doutorado">Doutorado</option>
                </select>
                <span class="error-message" v-if="errors.education">{{ errors.education }}</span>
              </div>

              <div class="form-group">
                <label for="experience">Experiência Profissional</label>
                <select id="experience" v-model="formData.experience" required>
                  <option value="" disabled selected>Selecione sua experiência</option>
                  <option value="Sem experiência">Sem experiência</option>
                  <option value="Até 1 ano">Até 1 ano</option>
                  <option value="1 a 3 anos">1 a 3 anos</option>
                  <option value="3 a 5 anos">3 a 5 anos</option>
                  <option value="5 a 10 anos">5 a 10 anos</option>
                  <option value="Mais de 10 anos">Mais de 10 anos</option>
                </select>
                <span class="error-message" v-if="errors.experience">{{ errors.experience }}</span>
              </div>
            </div>

            <div class="form-group full-width">
              <label for="resume">Currículo (PDF)</label>
              <div class="file-upload-container">
                <input type="file" id="resume" ref="resumeFile" @change="handleFileUpload" accept=".pdf" required
                  class="file-input">
                <label for="resume" class="file-upload-label">
                  <i class="fas fa-cloud-upload-alt"></i>
                  <span v-if="!formData.resume">Clique para anexar seu currículo (PDF)</span>
                  <span v-else>{{ formData.resume.name }}</span>
                </label>
              </div>
              <span class="error-message" v-if="errors.resume">{{ errors.resume }}</span>
            </div>

            <div class="form-group full-width">
              <label for="message">Apresentação Pessoal</label>
              <textarea id="message" v-model="formData.message" required rows="6"
                placeholder="Conte-nos um pouco sobre você, suas experiências, motivações e por que gostaria de trabalhar na Uni Hospitalar..."></textarea>
              <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
            </div>

            <div class="form-group full-width">
              <label for="expectations">Expectativas Salariais</label>
              <input type="text" id="expectations" v-model="formData.expectations"
                placeholder="Ex: R$ 3.000,00 - R$ 4.000,00 (opcional)">
            </div>

            <div class="form-group full-width">
              <div class="checkbox-group">
                <input type="checkbox" id="privacy" v-model="formData.privacy" required>
                <label for="privacy">
                  Concordo com o tratamento dos meus dados pessoais conforme a
                  <router-link to="/PoliticaPrivacidade" target="_blank">Política de Privacidade</router-link>
                  da Uni Hospitalar.
                </label>
              </div>
              <span class="error-message" v-if="errors.privacy">{{ errors.privacy }}</span>
            </div>

            <div class="form-actions">
              <button type="button" @click="backToJobs" class="cancel-button">
                <i class="fas fa-times"></i>
                Cancelar
              </button>
              <button type="submit" class="submit-button" :disabled="isSubmitting">
                <i class="fas fa-paper-plane" v-if="!isSubmitting"></i>
                <i class="fas fa-spinner fa-spin" v-else></i>
                {{ isSubmitting ? 'Enviando...' : 'Enviar Candidatura' }}
              </button>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </div>
  </section>

  <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import ScrollReveal from '@/components/ScrollReveal.vue';
import API_CONFIG from '@/config/api.js'; 

export default {
  name: 'TrabalheConosco',
  components: {
    HomeHeader,
    HomeFooter,
    ScrollReveal
  },
  data() {
    return {
      showForm: false,
      selectedJob: null,
      loadingJobs: true,
      availableJobs: [],
      isSubmitting: false,
      formData: {
        name: '',
        email: '',
        phone: '',
        position: '',
        education: '',
        experience: '',
        resume: null,
        message: '',
        expectations: '',
        privacy: false
      },
      errors: {}
    };
  },
  async mounted() {
    await this.loadJobs();
  },
  methods: {
    // Carregar vagas do backend
    async loadJobs() {
  this.loadingJobs = true;
  try {
    console.log('🔍 Carregando vagas de:', `${API_CONFIG.BASE_URL}/api/jobs`);
    
    const response = await fetch(`${API_CONFIG.BASE_URL}/api/jobs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    console.log('📡 Status da resposta:', response.status);
    
    if (response.ok) {
      const jobs = await response.json();
      console.log('✅ Vagas recebidas:', jobs);
      
      this.availableJobs = jobs;
      
      if (jobs.length === 0) {
        console.log('📋 Nenhuma vaga cadastrada no sistema');
      }
    } else {
      const errorText = await response.text();
      console.error('❌ Erro HTTP:', response.status, errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
  } catch (error) {
    console.error('❌ Erro ao carregar vagas:', error);
    
    // Mostrar erro específico
    if (error.message.includes('Failed to fetch')) {
      console.error('🌐 Possível problema de CORS ou rede');
      alert('Erro de conexão com o servidor. Verifique sua conexão com a internet.');
    } else {
      alert(`Erro ao carregar vagas: ${error.message}`);
    }
    
    // Não usar dados simulados - mostrar que não há vagas
    this.availableJobs = [];
  } finally {
    this.loadingJobs = false;
  }
},

    // Selecionar vaga e mostrar formulário
    selectJob(job) {
      this.selectedJob = job;
      this.showForm = true;
      this.formData.position = job.title; // Preencher automaticamente
      this.$nextTick(() => {
        document.querySelector('.form-section').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    },

    // Mostrar formulário para banco de talentos
    showTalentBankForm() {
      this.selectedJob = null;
      this.showForm = true;
      this.$nextTick(() => {
        document.querySelector('.form-section').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    },

    // Voltar para lista de vagas
    backToJobs() {
      this.showForm = false;
      this.selectedJob = null;
      this.resetForm();
      this.$nextTick(() => {
        document.querySelector('.jobs-section').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    },

    // Obter ícone baseado no departamento
    getJobIcon(department) {
      const icons = {
        'Administrativo': 'fas fa-clipboard-list',
        'Comercial': 'fas fa-handshake',
        'Estoque': 'fas fa-boxes',
        'Financeiro': 'fas fa-calculator',
        'Fiscal': 'fas fa-file-invoice-dollar',
        'Licitação': 'fas fa-gavel',
        'Logística': 'fas fa-truck',
        'TI': 'fas fa-code',
      };
      return icons[department] || 'fas fa-briefcase';
    },

    // Obter classe do badge baseado no tipo
    getJobBadgeClass(type) {
      const classes = {
        'Jovem Aprendiz': 'badge-apprentice',
        'Estágio': 'badge-internship',
        'CLT': 'badge-clt',
        'PJ': 'badge-pj',
        'Freelancer': 'badge-freelancer'
      };
      return classes[type] || 'badge-default';
    },

    // Formatar telefone
    formatPhone(event) {
      let value = event.target.value.replace(/\D/g, '');
      if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        if (value.length < 14) {
          value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
      }
      this.formData.phone = value;
    },

    // Manipular upload de arquivo
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.type !== 'application/pdf') {
          this.errors.resume = 'Por favor, selecione apenas arquivos PDF.';
          return;
        }
        if (file.size > 5 * 1024 * 1024) { // 5MB
          this.errors.resume = 'O arquivo deve ter no máximo 5MB.';
          return;
        }
        this.formData.resume = file;
        this.errors.resume = '';
      }
    },

    // Validar formulário
    validateForm() {
      this.errors = {};

      if (!this.formData.name.trim()) {
        this.errors.name = 'Nome é obrigatório.';
      }

      if (!this.formData.email.trim()) {
        this.errors.email = 'E-mail é obrigatório.';
      } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
        this.errors.email = 'E-mail inválido.';
      }

      if (!this.formData.phone.trim()) {
        this.errors.phone = 'Telefone é obrigatório.';
      }

      if (!this.selectedJob && !this.formData.position) {
        this.errors.position = 'Área de interesse é obrigatória.';
      }

      if (!this.formData.education) {
        this.errors.education = 'Formação acadêmica é obrigatória.';
      }

      if (!this.formData.experience) {
        this.errors.experience = 'Experiência profissional é obrigatória.';
      }

      if (!this.formData.resume) {
        this.errors.resume = 'Currículo é obrigatório.';
      }

      if (!this.formData.message.trim()) {
        this.errors.message = 'Apresentação pessoal é obrigatória.';
      }

      if (!this.formData.privacy) {
        this.errors.privacy = 'Você deve concordar com a política de privacidade.';
      }

      return Object.keys(this.errors).length === 0;
    },

    // Enviar formulário
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      try {
        const formData = new FormData();

        // Adicionar dados do formulário
        Object.keys(this.formData).forEach(key => {
          if (key !== 'resume' && key !== 'privacy') {
            formData.append(key, this.formData[key]);
          }
        });

        // Adicionar arquivo
        if (this.formData.resume) {
          formData.append('resume', this.formData.resume);
        }

        // Adicionar informações da vaga se selecionada
        if (this.selectedJob) {
          formData.append('jobId', this.selectedJob.id);
          formData.append('jobTitle', this.selectedJob.title);
        }

        // Tentar enviar para o backend real primeiro
        const response = await fetch(`${API_CONFIG.BASE_URL}/api/job-applications`, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const result = await response.json();

          // Mostrar mensagem de sucesso personalizada
          if (this.selectedJob) {
            alert(`Candidatura enviada com sucesso para a vaga "${this.selectedJob.title}"! Entraremos em contato em breve.`);
          } else {
            alert('Seu currículo foi adicionado ao nosso banco de talentos com sucesso! Entraremos em contato quando surgir uma oportunidade compatível.');
          }

          console.log('✅ Candidatura enviada via API:', result);
        } else {
          const error = await response.json();
          throw new Error(error.error || 'Erro ao enviar candidatura');
        }

        // Resetar formulário e voltar
        this.resetForm();
        this.backToJobs();

      } catch (error) {
        console.error('❌ Erro ao enviar candidatura:', error);

        // Mensagem de erro mais específica
        let errorMessage = 'Erro ao enviar candidatura. ';

        if (error.message.includes('Failed to fetch')) {
          errorMessage += 'Verifique sua conexão com a internet e tente novamente.';
        } else if (error.message.includes('PDF')) {
          errorMessage += 'Problema com o arquivo PDF. Verifique se o arquivo não está corrompido.';
        } else {
          errorMessage += error.message || 'Tente novamente em alguns instantes.';
        }

        alert(errorMessage);
      } finally {
        this.isSubmitting = false;
      }
    },

    // Resetar formulário
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        position: '',
        education: '',
        experience: '',
        resume: null,
        message: '',
        expectations: '',
        privacy: false
      };
      this.errors = {};
      if (this.$refs.resumeFile) {
        this.$refs.resumeFile.value = '';
      }
    }
  }
};
</script>

<style scoped>
/* Estilos Gerais */
.trabalhe-page {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 80px 0;
}

/* Hero Section com Parallax */
.hero-section {
  position: relative;
  height: 70vh;
  min-height: 500px;
  overflow: hidden;
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/header-trabalhe-conosco.png');
  background-size: contain;
  background-position: center -140px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(174, 44, 42, 0.7), rgba(0, 0, 0, 0.7));
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeInUp 1.5s ease-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  position: relative;
  z-index: 2;
  animation: fadeInUp 1.5s ease-out 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Seção de Introdução */
.intro-section {
  background-color: #f9f9f9;
  text-align: center;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #AE2C2A;
  margin: 0 20px;
}

.section-title.light h2 {
  color: #ffffff;
}

.accent-line {
  height: 3px;
  width: 70px;
  background-color: #AE2C2A;
}

.section-title.light .accent-line {
  background-color: #ffffff;
}

.intro-text {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  line-height: 1.8;
}

/* Seção de Valores */
.values-section {
  background-color: #ffffff;
}

.values-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  background: #f9f9f9;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 2rem;
}

.value-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.value-card p {
  color: #666;
}

/* Seção de Benefícios */
.benefits-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.benefits-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.benefits-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.benefits-image {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.benefits-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.benefits-image:hover img {
  transform: scale(1.05);
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
}

.benefit-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
}

.benefit-content {
  flex: 1;
}

.benefit-content h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: white;
}

.benefit-content p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

/* Novos estilos para seção de vagas */
.jobs-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.jobs-intro {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.loading-container {
  text-align: center;
  padding: 60px 20px;
}

.loading-spinner {
  font-size: 3rem;
  color: #AE2C2A;
  margin-bottom: 20px;
}

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.job-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.job-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(174, 44, 42, 0.05), transparent);
  transition: left 0.5s ease;
}

.job-card:hover::before {
  left: 100%;
}

.job-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border-color: #AE2C2A;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.job-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.job-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-apprentice {
  background: linear-gradient(135deg, #17a2b8, #0dcaf0);
  color: white;
}

.badge-internship {
  background: linear-gradient(135deg, #ffc107, #fd7e14);
  color: white;
}

.badge-clt {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
}

.badge-pj {
  background: linear-gradient(135deg, #007bff, #6610f2);
  color: white;
}

.badge-freelancer {
  background: linear-gradient(135deg, #6f42c1, #e83e8c);
  color: white;
}

.badge-default {
  background: linear-gradient(135deg, #6c757d, #495057);
  color: white;
}

.job-content {
  position: relative;
  z-index: 1;
}

.job-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.3;
}

.job-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
}

.job-detail {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #666;
}

.job-detail i {
  color: #AE2C2A;
  width: 16px;
}

.job-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.job-requirements {
  margin-bottom: 20px;
}

.job-requirements h4 {
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
}

.job-requirements ul {
  list-style: none;
  padding: 0;
}

.job-requirements li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

.job-requirements li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #AE2C2A;
  font-weight: bold;
}

.additional-requirements,
.job-benefits {
  margin-top: 15px;
}

.additional-requirements h4,
.job-benefits h4 {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 8px;
  font-weight: 600;
}

.additional-requirements ul,
.job-benefits ul {
  list-style: none;
  padding: 0;
}

.additional-requirements li,
.job-benefits li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 4px;
  font-size: 0.85rem;
  color: #777;
  line-height: 1.3;
}

.additional-requirements li::before {
  content: '◦';
  position: absolute;
  left: 0;
  color: #AE2C2A;
  font-weight: bold;
}

.job-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.job-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  position: relative;
  z-index: 1;
}

.job-salary {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #28a745;
  font-size: 1rem;
}

.job-salary i {
  color: #28a745;
}

.apply-button {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}

.apply-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.4);
}

.no-jobs-container {
  text-align: center;
  padding: 80px 20px;
}

.no-jobs-content {
  max-width: 500px;
  margin: 0 auto;
}

.no-jobs-icon {
  font-size: 4rem;
  color: #AE2C2A;
  margin-bottom: 30px;
}

.no-jobs-content h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.no-jobs-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.talent-bank-button {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
}

.talent-bank-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(174, 44, 42, 0.4);
}

/* Estilos para formulário */
.form-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}

.selected-job-info {
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #AE2C2A;
}

.job-summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.job-summary-header h3 {
  color: #AE2C2A;
  font-size: 1.3rem;
  margin: 0;
}

.back-button {
  background: transparent;
  border: 2px solid #AE2C2A;
  color: #AE2C2A;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}

.back-button:hover {
  background: #AE2C2A;
  color: white;
}

.job-summary-details {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.job-summary-details span {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  font-size: 0.9rem;
}

.job-summary-details i {
  color: #AE2C2A;
}

.form-intro {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.form-header {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  border-radius: 0;
}

.form-icon {
  font-size: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  width: 70px;
  height: 70px;
  min-width: 70px;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.form-header h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}

.career-form {
  padding: 40px;
  background: white;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
  margin-top: 20px
}

.form-group label {
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.form-group label::after {
  content: ' *';
  color: #dc3545;
  font-weight: bold;
}

.file-upload-container label::after {
  content: none;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #AE2C2A;
  box-shadow: 0 0 0 3px rgba(174, 44, 42, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.file-upload-container {
  position: relative;
}

.file-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  left: 0;
}

.file-upload-label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border: 2px dashed #AE2C2A;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(174, 44, 42, 0.05);
  color: #AE2C2A;
  font-weight: 500;
  text-align: left;
}

.file-upload-label:hover {
  background: rgba(174, 44, 42, 0.1);
  border-style: solid;
}

.file-upload-label i {
  font-size: 1.2rem;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
}

.checkbox-group input[type="checkbox"] {
  margin-top: 4px;
  transform: scale(1.2);
  accent-color: #AE2C2A;
  flex-shrink: 0;
  min-width: 16px;
  width: 16px;
  height: 16px;
  align-self: flex-start;
}

.checkbox-group label {
  font-size: 0.8rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 0;
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: left;
  margin-top: 0;
  padding-top: 2px;
}

.checkbox-group a {
  color: #AE2C2A;
  text-decoration: none;
  word-wrap: break-word;
}

.checkbox-group a:hover {
  text-decoration: underline;
}

.error-message {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 5px;
  font-weight: 500;
}

.file-upload-container + .error-message {
  text-align: left;
  margin-left: 0;
  display: block;
  width: 100%;
}

.form-actions {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px solid #eee;
}

.cancel-button {
  background: transparent;
  border: 2px solid #6c757d;
  color: #6c757d;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.cancel-button:hover {
  background: #6c757d;
  color: white;
}

.submit-button {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 1rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Estilos para o checkbox de termos */
.terms-group {
  margin-bottom: 10px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border-left: 3px solid #AE2C2A;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.terms-group:hover {
  background-color: #f5f5f5;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.checkbox-container input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #AE2C2A;
}

.terms-label {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  font-weight: 500;
  text-align: left;
}

.terms-label a {
  color: #AE2C2A;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  position: relative;
}

.terms-label a:hover {
  color: #ff5555;
}

.terms-label a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -98px;
  left: 0;
  background-color: #AE2C2A;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.terms-label a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Aviso de Termos */
.terms-notice {
  margin: 30px 0 20px 0;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.05), rgba(174, 44, 42, 0.02));
  border: 1px solid rgba(174, 44, 42, 0.2);
  border-radius: 10px;
  padding: 20px;
}

.notice-content {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.notice-icon {
  color: #AE2C2A;
  font-size: 1.2rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.notice-content p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
}

.terms-link {
  color: #AE2C2A;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.terms-link:hover {
  color: #ff5555;
  text-decoration: underline;
}

.submit-button {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(174, 44, 42, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Seção de FAQ */
.faq-section {
  background-color: #ffffff;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq-item {
  background: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.faq-question {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: white;
}

.faq-question h4 {
  font-size: 1.1rem;
  color: #333;
  margin: 0;
  font-weight: 600;
}

.faq-question i {
  color: #AE2C2A;
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.faq-item.active .faq-question i {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.active .faq-answer {
  padding: 0 25px 20px;
  max-height: 500px;
}

.faq-answer p {
  color: #666;
  margin: 0;
}

/* Modal de Sucesso */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.modal-content {
  background: white;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.3s ease;
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.modal-header {
  padding: 25px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.modal-header i {
  font-size: 3rem;
  color: #4CAF50;
  margin-bottom: 15px;
}

.modal-header h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.modal-body {
  padding: 25px;
  text-align: center;
}

.modal-body p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.modal-body p:last-child {
  margin-bottom: 0;
}

.modal-footer {
  padding: 15px 25px 25px;
  text-align: center;
}

.modal-button {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-button:hover {
  background: linear-gradient(135deg, #ff5555, #AE2C2A);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

:deep(.footer-class) {
  z-index: 999 !important;
}

/* Responsividade */
@media (max-width: 1600px) {
  .parallax-container {
    background-position: center 0;
  }
}

@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .parallax-container {
    background-position: center 140px;
  }

  .values-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }

  .parallax-container {
    background-position: center 220px;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  section {
    padding: 60px 0;
  }

  .benefits-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .benefits-image {
    order: 2;
  }

  .benefits-list {
    order: 1;
  }

  .form-icon {
    font-size: 2.2rem;
    width: 65px;
    height: 65px;
  }

  .form-header h3 {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .parallax-container {
    background-position: center 220px;
  }

  .hero-section {
    height: 60vh;
    min-height: 400px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .section-title h2 {
    font-size: 2rem;
  }

  .intro-text {
    font-size: 1.1rem;
  }

  .form-group.full-width {
    grid-column: span 1;
  }

  .jobs-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .job-card {
    padding: 20px;
  }

  .apply-button {
    justify-content: center;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .form-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
  }

  .form-header h3 {
    font-size: 1.4rem;
  }

  .job-summary-header {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }

  .job-summary-details {
    flex-direction: column;
    gap: 10px;
  }

  .additional-requirements h4,
  .job-benefits h4 {
    font-size: 0.9rem;
  }
  
  .additional-requirements li,
  .job-benefits li {
    font-size: 0.8rem;
  }

  .form-actions {
    flex-direction: column;
    gap: 10px;
  }

  .cancel-button,
  .submit-button {
    justify-content: center;
  }

  .benefit-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .benefit-icon {
    margin-bottom: 15px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .checkbox-group {
    gap: 8px;
  }

  .checkbox-group label {
    font-size: 0.85rem;
    line-height: 1.4;
  }
}

@media (max-width: 576px) {
  .parallax-container {
    background-position: center 270px;
  }

  .container {
    padding: 0 20px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title h2 {
    font-size: 1.8rem;
  }

  .accent-line {
    width: 40px;
  }

  .value-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .value-card h3 {
    font-size: 1.3rem;
  }

  .submit-button {
    width: 100%;
  }

  .faq-question h4 {
    font-size: 1rem;
  }

  .form-icon {
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
  }

  .form-header h3 {
    font-size: 1.2rem;
  }
}

/* Animações adicionais */
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}

.value-icon i,
.benefit-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Animação para o botão de envio */
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

.submit-button:hover:not(:disabled) {
  animation: pulse 1.5s infinite;
}

/* Efeito de destaque para os cards de valores */
.value-card:nth-child(1) .value-icon {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.value-card:nth-child(2) .value-icon {
  background: linear-gradient(135deg, #2C5EAE, #5596ff);
}

.value-card:nth-child(3) .value-icon {
  background: linear-gradient(135deg, #2CAE6F, #55ff9d);
}

.value-card:nth-child(4) .value-icon {
  background: linear-gradient(135deg, #AE8A2C, #ffcc55);
}

/* Efeito de hover para os itens de benefícios */
.benefit-item:hover .benefit-icon {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

/* Ajustes para dispositivos móveis */
@media (max-width: 480px) {
  .parallax-container {
    background-position: center 320px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .value-card,
  .benefit-item {
    padding: 20px;
  }

  .value-icon {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  .value-card h3 {
    font-size: 1.2rem;
  }

  .benefit-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .benefit-content h4 {
    font-size: 1.1rem;
  }

  .job-card {
    padding: 15px;
  }

  .job-title {
    font-size: 1.2rem;
  }

  .no-jobs-container {
    padding: 60px 15px;
  }

  .no-jobs-icon {
    font-size: 3rem;
  }

  .no-jobs-content h3 {
    font-size: 1.5rem;
  }

  .submit-button {
    padding: 12px 20px;
    font-size: 1rem;
  }

  .modal-content {
    width: 95%;
  }

  .modal-header i {
    font-size: 2.5rem;
  }

  .modal-header h3 {
    font-size: 1.3rem;
  }

  .job-footer {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }

  .checkbox-group {
    gap: 6px;
  }

  .checkbox-group label {
    font-size: 0.8rem;
    line-height: 1.3;
  }

  .checkbox-group input[type="checkbox"] {
    transform: scale(1.1);
    margin-top: 2px;
  }
}

/* Correção para dispositivos pequenos */
@media (max-width: 400px) {
  .form-container {
    margin: 0 10px;
    max-width: calc(100vw - 20px);
  }

  .career-form {
    padding: 20px 25px;
  }

  .form-header {
    padding: 20px 15px;
    gap: 10px;
  }

  .form-grid {
    grid-template-columns: 1fr !important;
    gap: 15px;
  }

  .form-group {
    width: 100%;
    box-sizing: border-box;
  }

  .checkbox-group {
    gap: 8px;
    align-items: flex-start;
    flex-wrap: nowrap;
  }

  .checkbox-group input[type="checkbox"] {
    transform: scale(1.0);
    margin-top: 2px;
    min-width: 14px;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }

  .checkbox-group label {
    font-size: 0.8rem;
    line-height: 1.3;
    max-width: calc(100% - 22px);
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    box-sizing: border-box;
    font-size: 0.9rem;
    padding: 10px 12px;
  }

  .file-upload-label {
    font-size: 0.85rem;
    padding: 10px 12px;
    word-wrap: break-word;
  }
}

@media (max-width: 360px) {
  .form-container {
    margin: 0 5px;
    max-width: calc(100vw - 10px);
  }

  .form-header {
    padding: 15px 10px;
  }

  .form-header h3 {
    font-size: 1rem;
    line-height: 1.3;
  }

  .checkbox-group {
    gap: 5px;
  }

  .checkbox-group label {
    font-size: 0.75rem;
    line-height: 1.2;
  }

  .checkbox-group input[type="checkbox"] {
    transform: scale(1.0);
    margin-top: 1px;
  }
}
</style>

<style>
/* CSS global para corrigir o footer */
footer {
  position: relative !important;
  z-index: 999 !important;
  pointer-events: auto !important;
}

footer * {
  pointer-events: auto !important;
}
</style>
