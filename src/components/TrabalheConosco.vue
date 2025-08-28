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
                  <div class="job-detail" v-if="job.salary">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>{{ job.salary }}</span>
                  </div>
                </div>

                <!-- Seção de Descrição (Resumida + Completa) -->
                <div class="job-description-section" v-if="job.shortDescription || job.description">
                  <h4>Descrição da Vaga:</h4>

                  <!-- Sempre mostra a descrição resumida se existir -->
                  <div v-if="job.shortDescription" class="short-description">
                    <p class="job-description">{{ job.shortDescription }}</p>
                  </div>

                  <!-- Se não tiver descrição resumida, mostra a completa como padrão -->
                  <div v-else-if="job.description && !expandedSections[`desc-${job.id}`]" class="short-description">
                    <p class="job-description">{{ job.description }}</p>
                  </div>

                  <!-- Descrição completa - só aparece quando expandida E quando existe shortDescription -->
                  <div v-if="job.description && job.shortDescription && expandedSections[`desc-${job.id}`]"
                    class="complete-description">
                    <h5 class="complete-description-title">Descrição Detalhada:</h5>
                    <p class="job-description-complete">{{ job.description }}</p>
                  </div>

                  <!-- Botão para expandir - só aparece se tiver AMBAS as descrições -->
                  <button v-if="job.description && job.shortDescription" @click.stop="toggleSection(`desc-${job.id}`)"
                    class="expand-button">
                    {{ expandedSections[`desc-${job.id}`] ? 'Ver menos detalhes' : 'Ver descrição completa' }}
                    <i :class="expandedSections[`desc-${job.id}`] ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                  </button>
                </div>

                <!-- Requisitos Principais -->
                <div class="job-requirements" v-if="job.mainRequirements && job.mainRequirements.length > 0">
                  <h4>Requisitos Principais:</h4>
                  <div class="expandable-content" :class="{ 'expanded': expandedSections[`main-req-${job.id}`] }">
                    <ul class="requirements-list">
                      <li v-for="(requirement, idx) in job.mainRequirements" :key="idx"
                        v-show="expandedSections[`main-req-${job.id}`] || idx < 3">
                        {{ requirement }}
                      </li>
                    </ul>
                    <button v-if="job.mainRequirements.length > 3" @click.stop="toggleSection(`main-req-${job.id}`)"
                      class="expand-button">
                      {{ expandedSections[`main-req-${job.id}`] ? 'Ver menos' : `Ver mais ${job.mainRequirements.length
                        - 3} requisitos` }}
                      <i
                        :class="expandedSections[`main-req-${job.id}`] ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                    </button>
                  </div>
                </div>

                <!-- Requisitos Adicionais -->
                <div class="job-additional-requirements"
                  v-if="job.additionalRequirements && job.additionalRequirements.length > 0">
                  <h4>Requisitos Adicionais:</h4>
                  <div class="expandable-content" :class="{ 'expanded': expandedSections[`add-req-${job.id}`] }">
                    <ul class="additional-requirements-list">
                      <li v-for="(requirement, idx) in job.additionalRequirements" :key="idx"
                        v-show="expandedSections[`add-req-${job.id}`] || idx < 2">
                        {{ requirement }}
                      </li>
                    </ul>
                    <button v-if="job.additionalRequirements.length > 2"
                      @click.stop="toggleSection(`add-req-${job.id}`)" class="expand-button">
                      {{ expandedSections[`add-req-${job.id}`] ? 'Ver menos' : `Ver mais
                      ${job.additionalRequirements.length - 2} requisitos` }}
                      <i
                        :class="expandedSections[`add-req-${job.id}`] ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                    </button>
                  </div>
                </div>

                <!-- Benefícios -->
                <div class="job-benefits-preview" v-if="job.benefits && job.benefits.length > 0">
                  <h4>Benefícios:</h4>
                  <div class="expandable-content" :class="{ 'expanded': expandedSections[`benefits-${job.id}`] }">
                    <ul class="benefits-list">
                      <li v-for="(benefit, idx) in job.benefits" :key="idx"
                        v-show="expandedSections[`benefits-${job.id}`] || idx < 3">
                        {{ benefit }}
                      </li>
                    </ul>
                    <button v-if="job.benefits.length > 3" @click.stop="toggleSection(`benefits-${job.id}`)"
                      class="expand-button">
                      {{ expandedSections[`benefits-${job.id}`] ? 'Ver menos' : `Ver mais ${job.benefits.length - 3}
                      benefícios` }}
                      <i
                        :class="expandedSections[`benefits-${job.id}`] ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="job-footer">
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
                <span><i class="fas fa-money-bill-wave"></i> {{ selectedJob.salary }}</span>
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

              <div class="form-group full-width optional-field">
                <label for="expectations">Expectativas Salariais</label>
                <input type="text" id="expectations" v-model="formData.expectations"
                  placeholder="Ex: R$ 3.000,00 - R$ 4.000,00 (opcional)">
              </div>

              <div class="form-group full-width">
                <div class="checkbox-group">
                  <input type="checkbox" id="privacy" v-model="formData.privacy" required>
                  <label for="privacy">
                    Autorizo a Uni Hospitalar a manter em seu banco de talentos
                    meus dados pessoais fornecidos durante a candidatura e
                    processo seletivo, permitindo que eu seja considerado para
                    futuras oportunidades compatíveis com meu perfil
                    profissional.
                  </label>
                </div>
                <div class="privacy-disclaimer">
                  <div class="notice-content">
                    <i class="fas fa-info-circle notice-icon"></i>
                    <p>
                      Se você optar por não autorizar, utilizaremos seus dados apenas
                      para esta candidatura específica. Após a conclusão do processo
                      seletivo, seus dados serão eliminados, preservando somente as
                      informações necessárias para registro histórico e cumprimento de
                      obrigações legais. Você pode revogar esta autorização a qualquer
                      momento através de contato com o nosso DPO.
                    </p>
                  </div>

                  <div class="notice-content">
                    <i class="fas fa-external-link-alt notice-icon"></i>
                    <p>
                      Para mais informações sobre como tratamos seus dados pessoais,
                      acesse nosso
                      <a href="/aviso-privacidade-candidatos.pdf" target="_blank">Aviso de Privacidade</a>.
                    </p>
                  </div>
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

    <!-- Modal de Sucesso -->
    <div v-if="showSuccessModal" class="success-modal-overlay" @click="closeSuccessModal">
      <div class="success-modal-content" @click.stop>
        <div class="success-animation">
          <div class="checkmark-container">
            <div class="checkmark-circle">
              <i class="fas fa-check checkmark-icon"></i>
            </div>
            <div class="celebration-particles">
              <div class="particle" v-for="n in 12" :key="n"></div>
            </div>
          </div>
        </div>

        <div class="success-content">
          <h2 class="success-title">{{ successTitle }}</h2>
          <p class="success-message">{{ successMessage }}</p>

          <div class="success-details" v-if="selectedJob">
            <div class="job-applied">
              <i class="fas fa-briefcase"></i>
              <span>{{ selectedJob.title }}</span>
            </div>
            <div class="next-steps">
              <h4>Próximos passos:</h4>
              <ul>
                <li><i class="fas fa-envelope"></i> Você receberá um e-mail de confirmação</li>
                <li><i class="fas fa-search"></i> Nossa equipe analisará seu perfil</li>
                <li><i class="fas fa-phone"></i> Entraremos em contato em breve</li>
              </ul>
            </div>
          </div>

          <div class="success-details" v-else>
            <div class="talent-bank">
              <i class="fas fa-database"></i>
              <span>Banco de Talentos</span>
            </div>
            <div class="next-steps">
              <h4>O que acontece agora:</h4>
              <ul>
                <li><i class="fas fa-save"></i> Seu perfil foi salvo em nosso sistema</li>
                <li><i class="fas fa-bell"></i> Você será notificado sobre novas oportunidades</li>
                <li><i class="fas fa-heart"></i> Manteremos contato para futuras vagas</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="success-actions">
          <button @click="closeSuccessModal" class="success-button">
            <i class="fas fa-home"></i>
            Voltar ao Início
          </button>
          <button @click="viewMoreJobs" class="secondary-button" v-if="selectedJob">
            <i class="fas fa-search"></i>
            Ver Mais Vagas
          </button>
        </div>
      </div>
    </div>

    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import ScrollReveal from '@/components/ScrollReveal.vue';
import { useJobsStore } from '@/composables/useJobsStore.js'
import API_CONFIG from '@/config/api.js';

export default {
  name: 'TrabalheConosco',
  components: {
    HomeHeader,
    HomeFooter,
    ScrollReveal
  },
  setup() {
    const { jobsStore, loadJobs } = useJobsStore()
    return { jobsStore, loadJobsFromStore: loadJobs }
  },
  data() {
    return {
      showForm: false,
      selectedJob: null,
      loadingJobs: true,
      availableJobs: [],
      isSubmitting: false,
      expandedSections: {},
      showSuccessModal: false,
      successTitle: '',
      successMessage: '',
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
    this.loadingJobs = true

    // Usar vagas do store global
    const jobs = await this.loadJobsFromStore()
    this.availableJobs = jobs
    this.loadingJobs = false
  },
  methods: {
    // Método para alternar seções expandidas
    toggleSection(sectionId) {
      const currentState = this.expandedSections[sectionId] || false;
      this.expandedSections = {
        ...this.expandedSections,
        [sectionId]: !currentState
      };
    },
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
      console.log('🔍 Validando formulário...');
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
      console.log('🔄 submitForm chamado');
      console.log('📋 Dados do formulário:', this.formData);

      if (!this.validateForm()) {
        console.log('❌ Validação falhou:', this.errors);
        return;
      }

      console.log('✅ Validação passou, enviando formulário...');

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

          // Mostrar modal de sucesso personalizado
          if (this.selectedJob) {
            this.successTitle = 'Candidatura Enviada com Sucesso!';
            this.successMessage = `Sua candidatura para a vaga "${this.selectedJob.title}" foi enviada com sucesso. Nossa equipe de RH analisará seu perfil e entraremos em contato em breve.`;
          } else {
            this.successTitle = 'Perfil Adicionado com Sucesso!';
            this.successMessage = 'Seu currículo foi adicionado ao nosso banco de talentos com sucesso! Entraremos em contato quando surgir uma oportunidade compatível com seu perfil.';
          }

          this.showSuccessModal = true;
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

    // Fechar modal de sucesso
    closeSuccessModal() {
      this.showSuccessModal = false;
      this.resetForm();
      this.backToJobs();
    },

    // Ver mais vagas
    viewMoreJobs() {
      this.showSuccessModal = false;
      this.resetForm();
      this.backToJobs();
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
  border-bottom: 4px solid #AE2C2A;
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/header_trabalhe_conosco.png');
  background-size: contain;
  background-position: center 40px;
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
  top: 200px;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeInUp 1.5s ease-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  position: relative;
  top: 200px;
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
  border: 1px solid rgba(174, 44, 42, 0.068);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  background: linear-gradient(135deg, #2c3e50, #AE2C2A);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
}

.value-card p {
  color: #696969;
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
  gap: 32px !important;
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
  margin-top: 0;
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
  color: #696969;
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
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  gap: 60px;
  margin-top: 40px;
}

.job-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 650px;
  max-width: 700px;
  text-align: left;
  margin: 0 auto;
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
  padding: 25px 25px 0;
  margin-bottom: 20px;
}

.job-content {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.job-content>* {
  max-width: 100%;
  box-sizing: border-box;
}

.job-content>*:not(:last-child) {
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(174, 44, 42, 0.1);
}

.job-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  line-height: 1.3;
  min-height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
}

.job-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 3px solid #AE2C2A;
  align-items: start;
  text-align: left;
  box-shadow: 0 2px 10px rgba(174, 44, 42, 0.08);
  border-bottom: 2px solid rgba(174, 44, 42, 0.15);
}

.job-detail {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #696969;
}

.job-detail i {
  color: #AE2C2A;
  width: 16px;
  flex-shrink: 0;
}

.job-description-section {
  text-align: center;
  background: rgba(174, 44, 42, 0.02);
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid rgba(174, 44, 42, 0.3);
  width: 100%;
  box-sizing: border-box;
  min-height: auto;
  height: auto;
}

.job-description-section:nth-of-type(2) h4::before {
  content: '📄';
  font-size: 0.9rem;
}

.job-description-section:first-of-type {
  background: rgba(174, 44, 42, 0.02);
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid rgba(174, 44, 42, 0.3);
}

.job-description-section:first-of-type h4 {
  color: #AE2C2A;
}

.job-description-section:first-of-type h4::before {
  content: '📋';
  font-size: 0.9rem;
}

.job-description-section:nth-of-type(2) {
  background: rgba(174, 44, 42, 0.05);
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid rgba(174, 44, 42, 0.4);
}

.job-description-section:nth-of-type(2) h4 {
  color: #AE2C2A;
}

.job-description-section h4 {
  font-size: 1rem;
  color: #AE2C2A;
  margin: 0 0 15px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
}

.job-description-section h4::before {
  content: '📋';
  font-size: 0.9rem;
}

.job-description {
  color: #555;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  white-space: pre-wrap;
  max-width: 100%;
}

.short-description {
  width: 100%;
  overflow: hidden;
}

.complete-description {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(174, 44, 42, 0.2);
  animation: fadeIn 0.3s ease-in-out;
  width: 100%;
  min-height: auto;
  height: auto;
}

.complete-description-title {
  font-size: 0.9rem;
  color: #AE2C2A;
  margin: 0 0 10px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.complete-description-title::before {
  content: '📄';
  font-size: 0.8rem;
}

.job-description-complete {
  color: #555;
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
  background: rgba(174, 44, 42, 0.08);
  padding: 12px;
  border-radius: 6px;
  border-left: 2px solid #AE2C2A;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  white-space: pre-wrap;
  max-width: 100%;
  box-sizing: border-box;
  min-height: auto;
  height: auto;
}

/* Animação para expansão */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.job-description-section .expand-button {
  background: transparent;
  border: 1px solid #AE2C2A;
  color: #AE2C2A;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 15px auto 0;
  font-weight: 500;
  max-width: fit-content;
}

.job-description-section .expand-button:hover {
  background: #AE2C2A;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(174, 44, 42, 0.3);
}

/* Estilos para conteúdo expandível */
.expandable-content {
  position: relative;
}

.job-description.expanded {
  -webkit-line-clamp: unset;
  line-clamp: unset;
  overflow: visible;
  display: block;
}

.expand-button {
  background: transparent;
  border: 1px solid #AE2C2A;
  color: #AE2C2A;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 10px auto 0;
  font-weight: 500;
}

.expand-button:hover {
  background: #AE2C2A;
  color: white;
  transform: translateY(-1px);
}

.expand-button i {
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

.job-requirements h4 {
  font-size: 1rem;
  color: #333;
  margin: 0 0 10px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
}

.job-requirements h4::before {
  content: '✅';
  font-size: 0.9rem;
}

/* Listas de requisitos e benefícios */
.requirements-list,
.additional-requirements-list,
.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.requirements-list li,
.additional-requirements-list li,
.benefits-list li {
  position: relative;
  padding-left: 20px;
  font-size: 0.9rem;
  color: #696969;
  line-height: 1.4;
}

.requirements-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #AE2C2A;
  font-weight: bold;
}

.additional-requirements-list li::before {
  content: '◦';
  position: absolute;
  left: 0;
  color: #AE2C2A;
  font-weight: bold;
}

.benefits-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

/* Seções de requisitos adicionais */
.job-additional-requirements h4 {
  font-size: 1rem;
  color: #333;
  margin: 0 0 10px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
}

.job-additional-requirements h4::before {
  content: '📝';
  font-size: 0.9rem;
}

.requirements-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #AE2C2A;
  font-weight: bold;
}

.benefits-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.more-requirements,
.more-benefits {
  font-style: italic;
  color: #888 !important;
  font-size: 0.85rem !important;
}

.more-requirements::before,
.more-benefits::before {
  content: '⋯';
  color: #AE2C2A !important;
}

.job-benefits-preview .benefits-list {
  align-items: center;
}

.job-benefits-preview .benefits-list li {
  text-align: center;
}

.job-benefits-preview h4 {
  font-size: 1rem;
  color: #333;
  margin: 0 0 10px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
}

.job-benefits-preview h4::before {
  content: '🎁';
  font-size: 0.9rem;
}

.job-footer {
  padding: 20px 25px 25px;
  margin-top: 20px;
  position: relative;
  z-index: 1;
  border-top: 1px solid #f0f0f0;
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
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
  width: 100%;
}

.apply-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.4);
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

.job-requirements {
  margin-bottom: 20px;
  text-align: center;
}


.job-requirements .requirements-list {
  align-items: center;
}

.job-requirements .requirements-list li {
  text-align: center;
}


.job-additional-requirements .additional-requirements-list {
  align-items: center;
}

.job-additional-requirements .additional-requirements-list li {
  text-align: center;
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
  color: #696969;
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
  background: linear-gradient(135deg, #2c3e50, #AE2C2A);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}

.no-jobs-content p {
  color: #696969;
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
  color: #696969;
  font-size: 0.9rem;
}

.job-summary-details i {
  color: #AE2C2A;
}

.form-intro {
  text-align: center;
  color: #696969;
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

/* Remover asterisco de campos opcionais */
.form-group.optional-field label::after {
  content: none;
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

.file-upload-container+.error-message {
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
  color: #696969;
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
  color: #696969;
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

.privacy-disclaimer {
  margin-top: 10px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #AE2C2A;
}

.notice-content {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
}

.notice-icon {
  color: #AE2C2A;
  font-size: 1.1rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.notice-content p {
  margin: 0;
  flex: 1;
}

.privacy-disclaimer p {
  font-size: 0.75rem;
  color: #6c757d;
  line-height: 1.4;
  margin: 0 0 8px 0;
  text-align: left;
}

.privacy-disclaimer p:last-child {
  margin-bottom: 0;
}

.privacy-disclaimer a {
  color: #AE2C2A;
  text-decoration: none;
  font-weight: 500;
}

.privacy-disclaimer a:hover {
  text-decoration: underline;
  color: #ff5555;
}

/* Responsividade */
@media (max-width: 1600px) {
  .parallax-container {
    background-position: center 140px;
  }
}

@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .parallax-container {
    background-position: center 230px;
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
    background-position: center 240px;
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
    background-position: center 280px;
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
  }

  .job-card {
    min-height: 600px;
    padding: 0;
  }

  .job-description-section:first-of-type,
  .job-description-section:nth-of-type(2) {
    padding: 12px;
    margin: 10px 0;
  }

  .job-description-section {
    padding: 12px;
  }

  .complete-description-title {
    font-size: 0.85rem;
  }

  .job-description,
  .job-description-complete {
    font-size: 0.85rem;
  }

  .job-header {
    padding: 20px 20px 0;
  }

  .job-content {
    padding: 0 20px;
  }

  .job-info {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 12px;
    align-items: start;
    justify-items: center;
    text-align: center;
  }

  .job-detail {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    padding-left: 40px;
  }

  .job-footer {
    padding: 15px 20px 20px;
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

  .job-card {
    min-height: 550px;
  }

  .job-description-section:first-of-type,
  .job-description-section:nth-of-type(2) {
    padding: 10px;
    margin: 8px 0;
  }

  .job-title {
    font-size: 1.2rem;
    min-height: 2.4rem;
  }

  .job-description-section {
    padding: 10px;
  }

  .job-description-section .expand-button {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .job-description,
  .job-description-complete {
    font-size: 0.85rem;
  }

  .job-info {
    padding: 10px;
  }

  .job-detail {
    font-size: 0.85rem;
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

  .job-title {
    font-size: 1.2rem;
  }

  .job-card {
    max-width: calc(100vw - 40px);
    width: calc(100vw - 40px);
    margin: 0 auto;
    box-sizing: border-box;
    overflow: hidden;
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
/* Modal de Sucesso */
.success-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeInOverlay 0.3s ease-out;
}

@keyframes fadeInOverlay {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.success-modal-content {
  background: white;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideInModal 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

@keyframes slideInModal {
  from {
    transform: scale(0.7) translateY(-50px);
    opacity: 0;
  }

  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.success-animation {
  padding: 40px 30px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.checkmark-container {
  position: relative;
  display: inline-block;
}

.checkmark-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #28a745, #20c997);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s both;
  box-shadow: 0 8px 25px rgba(40, 167, 69, 0.3);
  position: relative;
}

@keyframes bounceIn {
  from {
    transform: scale(0);
  }

  50% {
    transform: scale(1.1);
  }

  to {
    transform: scale(1);
  }
}

.checkmark-icon {
  color: white;
  font-size: 2.5rem;
  animation: checkmarkDraw 0.3s ease-out 0.5s both;
}

@keyframes checkmarkDraw {
  from {
    transform: scale(0) rotate(-45deg);
    opacity: 0;
  }

  to {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

.celebration-particles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  animation: particleFloat 2s ease-out infinite;
}

.particle:nth-child(1) {
  animation-delay: 0.1s;
  transform: rotate(0deg) translateX(60px);
}

.particle:nth-child(2) {
  animation-delay: 0.2s;
  transform: rotate(30deg) translateX(60px);
}

.particle:nth-child(3) {
  animation-delay: 0.3s;
  transform: rotate(60deg) translateX(60px);
}

.particle:nth-child(4) {
  animation-delay: 0.4s;
  transform: rotate(90deg) translateX(60px);
}

.particle:nth-child(5) {
  animation-delay: 0.5s;
  transform: rotate(120deg) translateX(60px);
}

.particle:nth-child(6) {
  animation-delay: 0.6s;
  transform: rotate(150deg) translateX(60px);
}

.particle:nth-child(7) {
  animation-delay: 0.7s;
  transform: rotate(180deg) translateX(60px);
}

.particle:nth-child(8) {
  animation-delay: 0.8s;
  transform: rotate(210deg) translateX(60px);
}

.particle:nth-child(9) {
  animation-delay: 0.9s;
  transform: rotate(240deg) translateX(60px);
}

.particle:nth-child(10) {
  animation-delay: 1.0s;
  transform: rotate(270deg) translateX(60px);
}

.particle:nth-child(11) {
  animation-delay: 1.1s;
  transform: rotate(300deg) translateX(60px);
}

.particle:nth-child(12) {
  animation-delay: 1.2s;
  transform: rotate(330deg) translateX(60px);
}

@keyframes particleFloat {
  0% {
    opacity: 0;
    transform: rotate(var(--rotation, 0deg)) translateX(0px) scale(0);
  }

  20% {
    opacity: 1;
    transform: rotate(var(--rotation, 0deg)) translateX(40px) scale(1);
  }

  100% {
    opacity: 0;
    transform: rotate(var(--rotation, 0deg)) translateX(80px) scale(0);
  }
}

.success-content {
  padding: 0 30px 20px;
  text-align: center;
}

.success-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #28a745;
  margin-bottom: 15px;
  animation: fadeInUp 0.5s ease-out 0.3s both;
}

.success-message {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 25px;
  animation: fadeInUp 0.5s ease-out 0.4s both;
}

.success-details {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  animation: fadeInUp 0.5s ease-out 0.5s both;
}

.job-applied,
.talent-bank {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  padding: 12px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #AE2C2A;
  font-weight: 600;
  color: #333;
}

.job-applied i,
.talent-bank i {
  color: #AE2C2A;
  font-size: 1.2rem;
}

.next-steps h4 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
}

.next-steps ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.next-steps li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  color: #555;
  font-size: 0.95rem;
}

.next-steps li i {
  color: #28a745;
  font-size: 1rem;
  width: 16px;
  flex-shrink: 0;
}

.success-actions {
  padding: 20px 30px 30px;
  display: flex;
  gap: 15px;
  justify-content: center;
  animation: fadeInUp 0.5s ease-out 0.6s both;
}

.success-button {
  background: linear-gradient(135deg, #28a745, #20c997);
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
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
}

.success-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
}

.secondary-button {
  background: transparent;
  color: #AE2C2A;
  border: 2px solid #AE2C2A;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
}

.secondary-button:hover {
  background: #AE2C2A;
  color: white;
  transform: translateY(-2px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade do Modal */
@media (max-width: 768px) {
  .success-modal-content {
    width: 95%;
    margin: 20px;
  }

  .success-animation {
    padding: 30px 20px 15px;
  }

  .checkmark-circle {
    width: 70px;
    height: 70px;
  }

  .checkmark-icon {
    font-size: 2rem;
  }

  .success-content {
    padding: 0 20px 15px;
  }

  .success-title {
    font-size: 1.5rem;
  }

  .success-message {
    font-size: 1rem;
  }

  .success-actions {
    flex-direction: column;
    padding: 15px 20px 25px;
  }

  .success-button,
  .secondary-button {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .particle {
    width: 6px;
    height: 6px;
  }

  .checkmark-circle {
    width: 60px;
    height: 60px;
  }

  .checkmark-icon {
    font-size: 1.8rem;
  }

  .success-title {
    font-size: 1.3rem;
  }

  .success-message {
    font-size: 0.95rem;
  }

  .success-details {
    padding: 15px;
    margin: 15px 0;
  }

  .next-steps li {
    font-size: 0.9rem;
  }
}

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
