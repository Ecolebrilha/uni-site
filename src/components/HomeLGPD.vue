<template>
  <div class="lgpd-page">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('lgpd.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('lgpd.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção CTA -->
    <section class="cta-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="cta-content">
            <h2>{{ t('lgpd.ctaTitle') }}</h2>
            <p>{{ t('lgpd.ctaText') }}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('lgpd.introTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <div class="intro-content">
            <p class="intro-text">{{ t('lgpd.introText') }}</p>
            <p class="intro-text">{{ t('lgpd.introText2') }}</p>
            <p class="intro-text">{{ t('lgpd.introText3') }}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção de Segurança da Informação -->
<section class="security-section">
  <div class="container">
    <ScrollReveal direction="bottom" :delay="100">
      <div class="section-title">
        <span class="accent-line"></span>
        <h2>{{ t('lgpd.security.title') }}</h2>
        <span class="accent-line"></span>
      </div>
    </ScrollReveal>

    <div class="security-grid">
      <ScrollReveal direction="left" :delay="200">
        <div class="security-card">
          <div class="security-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <div class="security-content">
            <p>{{ t('lgpd.security.card1.text') }}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" :delay="300">
        <div class="security-card">
          <div class="security-icon">
            <i class="fas fa-lock"></i>
          </div>
          <div class="security-content">
            <p>{{ t('lgpd.security.card2.text') }}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="left" :delay="400">
        <div class="security-card">
          <div class="security-icon">
            <i class="fas fa-users-cog"></i>
          </div>
          <div class="security-content">
            <p>{{ t('lgpd.security.card3.text') }}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" :delay="500">
        <div class="security-card">
          <div class="security-icon">
            <i class="fas fa-user-shield"></i>
          </div>
          <div class="security-content">
            <p>{{ t('lgpd.security.card4.text') }}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="left" :delay="600">
        <div class="security-card">
          <div class="security-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <div class="security-content">
            <p>{{ t('lgpd.security.card5.text') }}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" :delay="700">
        <div class="security-card">
          <div class="security-icon">
            <i class="fas fa-handshake"></i>
          </div>
          <div class="security-content">
            <p>{{ t('lgpd.security.card6.text') }}</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

    <!-- Seção de Documentos -->
    <section class="documents-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('lgpd.documents.title') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="documents-grid">
          <ScrollReveal direction="bottom" :delay="300">
            <div class="document-card">
              <div class="document-icon">
                <i class="fas fa-file-shield"></i>
              </div>
              <div class="document-content">
                <h3>{{ t('lgpd.documents.privacyPolicy.title') }}</h3>
                <p>{{ t('lgpd.documents.privacyPolicy.description') }}</p>
                <router-link to="/PoliticaPrivacidade" class="document-button">
                  Acessar Documento
                </router-link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="document-card">
              <div class="document-icon">
                <i class="fas fa-cookie-bite"></i>
              </div>
              <div class="document-content">
                <h3>{{ t('lgpd.documents.cookiesPolicy.title') }}</h3>
                <p>{{ t('lgpd.documents.cookiesPolicy.description') }}</p>
                <router-link to="/PoliticaPrivacidade" class="document-button">
                  Acessar Documento
                </router-link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="500">
            <div class="document-card">
              <div class="document-icon">
                <i class="fas fa-user-tie"></i>
              </div>
              <div class="document-content">
                <h3>{{ t('lgpd.documents.recruitmentNotice.title') }}</h3>
                <p>{{ t('lgpd.documents.recruitmentNotice.description') }}</p>
                <a href="/aviso-privacidade-candidatos.pdf" class="document-button" target="_blank">Acessar Documento</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção Área do Titular -->
    <section class="data-subject-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>{{ t('lgpd.dataSubject.title') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="data-subject-intro">{{ t('lgpd.dataSubject.intro') }}</p>
        </ScrollReveal>

        <div class="data-subject-content">
          <ScrollReveal direction="left" :delay="300">
            <div class="rights-info">
              <h3>{{ t('lgpd.dataSubject.rightsTitle') }}</h3>
              <p>{{ t('lgpd.dataSubject.rightsText') }}</p>
              <p>{{ t('lgpd.dataSubject.rightsText2') }}</p>
              
              <h4>{{ t('lgpd.dataSubject.exerciseTitle') }}</h4>
              <p>{{ t('lgpd.dataSubject.exerciseText') }}</p>
              
              <!-- Contato do DPO -->
              <div class="dpo-contact">
                <div class="dpo-info">
                  <h4 class="dpo-title">{{ t('lgpd.dpoTitle') }}</h4>
                  <div class="dpo-details">
                    <div class="dpo-item">
                      <i class="fas fa-user-shield"></i>
                      <span class="dpo-label">{{ t('lgpd.dpoName') }}:</span>
                      <span class="dpo-value">Ítalo Morais - DPO Uni Hospitalar</span>
                    </div>
                    <div class="dpo-item">
                      <i class="fas fa-envelope"></i>
                      <span class="dpo-label">{{ t('lgpd.dpoEmail') }}:</span>
                      <a href="mailto:dpo@unihospitalar.com.br" class="dpo-email">
                        dpo@unihospitalar.com.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="rights-form">
              <div class="form-container">
                <div class="form-header">
                  <div class="form-icon">
                    <i class="fas fa-user-check"></i>
                  </div>
                  <div class="form-title">
                    <h3>{{ t('lgpd.dataSubject.formTitle') }}</h3>
                    <p>{{ t('lgpd.dataSubject.formSubtitle') }}</p>
                  </div>
                </div>
                
                <form @submit.prevent="submitRightsForm" class="rights-form-content">
  <div class="form-group">
    <label for="name">{{ t('lgpd.dataSubject.form.name') }}:</label>
    <input type="text" id="name" v-model="formData.name" required 
           :placeholder="t('lgpd.dataSubject.form.placeholders.name')">
  </div>

  <div class="form-group">
    <label for="email">{{ t('lgpd.dataSubject.form.email') }}:</label>
    <input type="email" id="email" v-model="formData.email" required
           :placeholder="t('lgpd.dataSubject.form.placeholders.email')">
  </div>

  <div class="form-group">
    <label for="phone">{{ t('lgpd.dataSubject.form.phone') }}:</label>
    <input type="tel" id="phone" v-model="formData.phone" required
           :placeholder="t('lgpd.dataSubject.form.placeholders.phone')">
  </div>

  <div class="form-group">
    <label for="relationship">{{ t('lgpd.dataSubject.form.relationship') }}:</label>
    <select id="relationship" v-model="formData.relationship" required>
      <option value="">{{ t('lgpd.dataSubject.form.placeholders.relationship') }}</option>
      <option value="client">{{ t('lgpd.dataSubject.form.relationshipOptions.client') }}</option>
      <option value="employee">{{ t('lgpd.dataSubject.form.relationshipOptions.employee') }}</option>
      <option value="exEmployee">{{ t('lgpd.dataSubject.form.relationshipOptions.exEmployee') }}</option>
      <option value="supplier">{{ t('lgpd.dataSubject.form.relationshipOptions.supplier') }}</option>
      <option value="candidate">{{ t('lgpd.dataSubject.form.relationshipOptions.candidate') }}</option>
      <option value="other">{{ t('lgpd.dataSubject.form.relationshipOptions.other') }}</option>
    </select>
  </div>

  <div class="form-group">
    <label for="requestType">{{ t('lgpd.dataSubject.form.requestType') }}:</label>
    <select id="requestType" v-model="formData.requestType" required>
      <option value="">{{ t('lgpd.dataSubject.form.placeholders.requestType') }}</option>
      <option value="confirm">{{ t('lgpd.dataSubject.form.requestTypeOptions.confirm') }}</option>
      <option value="access">{{ t('lgpd.dataSubject.form.requestTypeOptions.access') }}</option>
      <option value="portability">{{ t('lgpd.dataSubject.form.requestTypeOptions.portability') }}</option>
      <option value="deletion">{{ t('lgpd.dataSubject.form.requestTypeOptions.deletion') }}</option>
      <option value="correction">{{ t('lgpd.dataSubject.form.requestTypeOptions.correction') }}</option>
      <option value="sharing">{{ t('lgpd.dataSubject.form.requestTypeOptions.sharing') }}</option>
      <option value="revoke">{{ t('lgpd.dataSubject.form.requestTypeOptions.revoke') }}</option>
      <option value="other">{{ t('lgpd.dataSubject.form.requestTypeOptions.other') }}</option>
    </select>
  </div>

  <div class="form-group">
    <label for="details">{{ t('lgpd.dataSubject.form.details') }}:</label>
    <textarea id="details" v-model="formData.details" rows="4"
              :placeholder="t('lgpd.dataSubject.form.placeholders.details')"></textarea>
  </div>

  <div class="form-disclaimer">
    <p>{{ t('lgpd.dataSubject.form.disclaimer.text') }}
      <router-link to="/PoliticaPrivacidade" target="_blank" class="terms-link">{{
      t('lgpd.dataSubject.form.disclaimer.privacyPolicy') }}</router-link>
      {{ t('lgpd.dataSubject.form.disclaimer.continuation') }}
    </p>
  </div>

  <button type="submit" class="submit-button" :disabled="isSubmitting">
    <i class="fas fa-paper-plane" v-if="!isSubmitting"></i>
    <i class="fas fa-spinner fa-spin" v-else></i>
    {{ isSubmitting ? 'Enviando...' : t('lgpd.dataSubject.form.submit') }}
  </button>
</form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import ScrollReveal from '@/components/ScrollReveal.vue';
import { useLGPDTranslation } from '@/composables/useLGPDTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter,
    ScrollReveal
  },
  setup() {
    const { t, currentLanguage } = useLGPDTranslation()

    return {
      t,
      currentLanguage
    }
  },
  data() {
    return {
      selectedLanguage: 'pt',
      sidebarOpen: false,
      isSubmitting: false,
      formData: {
        name: '',
        email: '',
        phone: '',
        relationship: '',
        requestType: '',
        details: ''
      }
    }
  },
  methods: {
    changeLanguage(event) {
      const value = typeof event === 'string' ? event : event.target.value;
      this.selectedLanguage = value;
      console.log(`Idioma selecionado: ${value}`);
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    async submitRightsForm() {
      this.isSubmitting = true;
      
      try {
        // Aqui você pode implementar a lógica de envio do formulário
        console.log('Dados do formulário:', this.formData);
        
        // Simular envio
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
        this.resetForm();
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('Erro ao enviar solicitação. Tente novamente.');
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        relationship: '',
        requestType: '',
        details: ''
      };
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.lgpd-page {
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
  background-image: url('@/assets/header-lgpd.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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

/* Seção CTA */
.cta-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  text-align: center;
  padding: 60px 0;
}

.cta-content h2 {
  font-size: 2.2rem;
  color: #780000;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.3;
}

.cta-content p {
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
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

.intro-content {
  max-width: 900px;
  margin: 0 auto;
}

.intro-text {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 25px;
  text-align: justify;
}

/* Seção de Segurança */
.security-section {
  background-color: #ffffff;
  position: relative;
  margin-bottom: 50px;
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 90px;
  align-items: stretch;
}

.security-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #AE2C2A;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.security-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.security-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.security-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
}

.security-content h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
}

.security-content p {
  color: #666;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
}

/* Seção de Documentos */
.documents-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
}

.documents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0 50px 0;
  align-items: stretch;
}

.document-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.document-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.document-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.document-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  margin: 0 auto 20px;
}

.document-content h3 {
  font-size: 1.4rem;
  background: linear-gradient(-135deg, #2c3e50, #AE2C2A);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  font-weight: 600;
}

.document-content p {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
  flex: 1;
}

.document-button {
  display: inline-block;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
  margin-top: auto;
}

.document-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(174, 44, 42, 0.4);
}

/* Seção Área do Titular */
.data-subject-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.data-subject-intro {
  text-align: center;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 50px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
}

.data-subject-content {
  display: grid;
  grid-template-columns: 1fr 500px;
  gap: 50px;
  align-items: start;
}

.rights-info {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rights-info h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: white;
  font-weight: 700;
}

.rights-info h4 {
  font-size: 1.4rem;
  margin: 30px 0 15px 0;
  color: white;
  font-weight: 600;
}

.rights-info p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 20px;
}

/* Estilos para o contato do DPO */
.dpo-contact {
  margin-top: 30px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  border-left: 4px solid #AE2C2A;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.dpo-info {
  text-align: center;
}

.dpo-title {
  font-size: 1.2rem !important;
  color: #AE2C2A !important;
  margin: 0 0 20px 0 !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  letter-spacing: 1px !important;
}

.dpo-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.dpo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: #333;
}

.dpo-item i {
  color: #AE2C2A;
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.dpo-label {
  font-weight: 600;
  color: #333;
}

.dpo-value {
  color: #555;
  font-weight: 500;
}

.dpo-email {
  color: #AE2C2A;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

.dpo-email::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #AE2C2A;
  transition: width 0.3s ease;
}

.dpo-email:hover {
  color: #ff5555;
  transform: translateY(-2px);
}

.dpo-email:hover::after {
  width: 100%;
}

/* Formulário de Direitos */
.rights-form {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
}

.form-container {
  height: 100%;
}

.form-header {
  background: linear-gradient(135deg, #333, #555);
  color: white;
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.form-icon {
  font-size: 2rem;
  background: rgba(255, 255, 255, 0.2);
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.form-title h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 5px 0;
}

.form-title p {
  font-size: 0.9rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
}

.rights-form-content {
  padding: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  box-sizing: border-box;
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
  min-height: 100px;
  font-family: inherit;
}

.form-disclaimer {
  background: #f8f9fa;
  border-left: 4px solid #AE2C2A;
  padding: 15px;
  border-radius: 5px;
  margin: 25px 0;
}

.form-disclaimer p {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
  text-align: justify;
}

.terms-link {
  color: #AE2C2A;
  text-decoration: none;
  font-weight: 600;
}

.terms-link:hover {
  text-decoration: underline;
  color: #ff5555;
}

.submit-button {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  width: 100%;
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(174, 44, 42, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .data-subject-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .documents-grid {
    grid-template-columns: 1fr;
    max-width: 800px;
    margin: 40px auto;
    row-gap: 100px;
  }

  .rights-form {
    max-width: 100%;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  section {
    padding: 60px 0;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .security-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
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
    font-size: 1rem;
    text-align: left;
  }

  .cta-content h2 {
    font-size: 1.8rem;
  }

  .cta-content p {
    font-size: 1.1rem;
  }

  .security-grid {
    grid-template-columns: 1fr;
  }

  .documents-grid {
    grid-template-columns: 1fr;
  }

  .data-subject-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .dpo-contact {
    margin-top: 25px;
    padding: 20px;
  }

  .dpo-title {
    font-size: 1.1rem;
  }

  .dpo-details {
    gap: 12px;
  }

  .dpo-item {
    font-size: 0.95rem;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  .form-header {
    padding: 20px;
    gap: 15px;
  }

  .form-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .form-title h3 {
    font-size: 1.3rem;
  }

  .rights-form-content {
    padding: 25px;
  }
}

@media (max-width: 576px) {
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

  .cta-content h2 {
    font-size: 1.6rem;
  }

  .security-card,
  .document-card {
    padding: 25px;
  }

  .security-icon,
  .document-icon {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }

  .dpo-item {
    flex-direction: column;
    gap: 5px;
  }

  .dpo-email {
    word-break: break-all;
  }

  .form-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .rights-form-content {
    padding: 20px;
  }

  .form-disclaimer {
    padding: 12px;
  }

  .form-disclaimer p {
    font-size: 0.8rem;
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

.security-icon i,
.document-icon i {
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

/* Efeito de destaque para os cards */
.security-card:nth-child(1) {
  border-left-color: #AE2C2A;
}

.security-card:nth-child(2) {
  border-left-color: #2C5EAE;
}

.security-card:nth-child(3) {
  border-left-color: #2CAE6F;
}

.security-card:nth-child(4) {
  border-left-color: #AE8A2C;
}

.security-card:nth-child(5) {
  border-left-color: #9C27B0;
}

.security-card:nth-child(6) {
  border-left-color: #FF9800;
}

.security-card:nth-child(1) .security-icon {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.security-card:nth-child(2) .security-icon {
  background: linear-gradient(135deg, #2C5EAE, #5596ff);
}

.security-card:nth-child(3) .security-icon {
  background: linear-gradient(135deg, #2CAE6F, #55ff9d);
}

.security-card:nth-child(4) .security-icon {
  background: linear-gradient(135deg, #AE8A2C, #ffcc55);
}

.security-card:nth-child(5) .security-icon {
  background: linear-gradient(135deg, #9C27B0, #E91E63);
}

.security-card:nth-child(6) .security-icon {
  background: linear-gradient(135deg, #FF9800, #FF5722);
}

/* Efeito de hover para os cards de segurança */
.security-card:hover .security-icon {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Ajustes para dispositivos muito pequenos */
@media (max-width: 400px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title h2 {
    font-size: 1.5rem;
    margin: 0 10px;
  }

  .accent-line {
    width: 30px;
  }

  .cta-content h2 {
    font-size: 1.4rem;
  }

  .cta-content p {
    font-size: 1rem;
  }

  .intro-text {
    font-size: 0.95rem;
  }

  .security-card,
  .document-card {
    padding: 20px;
  }

  .security-icon,
  .document-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .security-content h3,
  .document-content h3 {
    font-size: 1.2rem;
  }

  .rights-info {
    padding: 20px;
  }

  .rights-info h3 {
    font-size: 1.5rem;
  }

  .rights-info h4 {
    font-size: 1.2rem;
  }

  .dpo-contact {
    padding: 15px;
  }

  .dpo-title {
    font-size: 1rem;
  }

  .form-header {
    padding: 15px;
  }

  .form-icon {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }

  .form-title h3 {
    font-size: 1.2rem;
  }

  .form-title p {
    font-size: 0.85rem;
  }

  .rights-form-content {
    padding: 15px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 10px 12px;
    font-size: 0.95rem;
  }

  .form-disclaimer {
    padding: 10px;
  }

  .form-disclaimer p {
    font-size: 0.75rem;
  }

  .submit-button {
    padding: 12px 25px;
    font-size: 0.95rem;
  }
}

/* Correções para o parallax em dispositivos móveis */
@media (max-width: 768px) {
  .parallax-container {
    background-attachment: scroll;
  }
}

/* Animação para entrada dos elementos */
.security-card,
.document-card {
  opacity: 0;
  animation: slideInUp 0.6s ease forwards;
}

.security-card:nth-child(1) {
  animation-delay: 0.1s;
}

.security-card:nth-child(2) {
  animation-delay: 0.2s;
}

.security-card:nth-child(3) {
  animation-delay: 0.3s;
}

.security-card:nth-child(4) {
  animation-delay: 0.4s;
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

/* Efeito de foco nos inputs */
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  transform: translateY(-2px);
}

/* Estilo para links dentro do texto */
.intro-text a,
.rights-info a {
  color: #AE2C2A;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.intro-text a:hover,
.rights-info a:hover {
  color: #ff5555;
  text-decoration: underline;
}

/* Ajuste para o texto da seção de direitos em dispositivos móveis */
@media (max-width: 768px) {
  .data-subject-intro {
    font-size: 1.1rem;
    text-align: left;
  }

  .rights-info p {
    text-align: left;
  }
}

/* Estilo para seleção de texto */
::selection {
  background-color: rgba(174, 44, 42, 0.2);
  color: #333;
}

::-moz-selection {
  background-color: rgba(174, 44, 42, 0.2);
  color: #333;
}

/* Scrollbar personalizada */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #AE2C2A;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ff5555;
}
</style>
