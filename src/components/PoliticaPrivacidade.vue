<template>
  <div class="privacidade-page">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('privacyPolicy.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('privacyPolicy.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('privacyPolicy.introTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('privacyPolicy.introText') }}
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção Principal de Política de Privacidade -->
    <section class="privacy-main">
      <div class="container">
        <div class="privacy-grid">
          <ScrollReveal v-for="(section, index) in sections" :key="index"
            :direction="index % 2 === 0 ? 'left' : 'right'" :delay="200 + (index * 100)">
            <div class="privacy-card">
              <div class="privacy-icon" v-html="section.icon"></div>
              <div class="privacy-content">
                <h3>{{ section.title }}</h3>
                <p>{{ section.text }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Direitos do Usuário -->
    <section class="user-rights-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>{{ t('privacyPolicy.rightsTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="rights-intro">{{ t('privacyPolicy.rightsIntro') }}</p>
        </ScrollReveal>

        <div class="rights-steps">
          <ScrollReveal direction="bottom" :delay="300">
            <div class="rights-step">
              <div class="step-number">
                <i class="fas fa-database"></i>
              </div>
              <div class="step-content">
                <h4>{{ t('privacyPolicy.rights.access.title') }}</h4>
                <p>{{ t('privacyPolicy.rights.access.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="rights-step">
              <div class="step-number">
                <i class="fas fa-edit"></i>
              </div>
              <div class="step-content">
                <h4>{{ t('privacyPolicy.rights.correction.title') }}</h4>
                <p>{{ t('privacyPolicy.rights.correction.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="500">
            <div class="rights-step">
              <div class="step-number">
                <i class="fas fa-trash-alt"></i>
              </div>
              <div class="step-content">
                <h4>{{ t('privacyPolicy.rights.deletion.title') }}</h4>
                <p>{{ t('privacyPolicy.rights.deletion.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="600">
            <div class="rights-step">
              <div class="step-number">
                <i class="fas fa-ban"></i>
              </div>
              <div class="step-content">
                <h4>{{ t('privacyPolicy.rights.opposition.title') }}</h4>
                <p>{{ t('privacyPolicy.rights.opposition.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Segurança -->
    <section class="security-section">
      <div class="container">
        <div class="security-content">
          <ScrollReveal direction="left" :delay="200">
            <div class="security-image">
              <i class="fas fa-shield-alt"></i>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="security-text">
              <h3>{{ t('privacyPolicy.securityTitle') }}</h3>
              <p>{{ t('privacyPolicy.securityText') }}</p>
              <ul class="security-features">
                <li>{{ t('privacyPolicy.securityFeatures.encryption') }}</li>
                <li>{{ t('privacyPolicy.securityFeatures.accessControl') }}</li>
                <li>{{ t('privacyPolicy.securityFeatures.monitoring') }}</li>
                <li>{{ t('privacyPolicy.securityFeatures.updates') }}</li>
                <li>{{ t('privacyPolicy.securityFeatures.training') }}</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção CTA -->
    <section class="cta-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="cta-content">
            <h2>{{ t('privacyPolicy.ctaTitle') }}</h2>
            <p>{{ t('privacyPolicy.ctaText') }}</p>
            <router-link to="/Contato" class="cta-button">{{ t('privacyPolicy.ctaButton') }} <i class="fas fa-arrow-right"></i></router-link>
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
import { usePrivacyPolicyTranslation } from '@/composables/usePrivacyPolicyTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = usePrivacyPolicyTranslation()

    return {
      t,
      currentLanguage
    }
  },
  data() {
    return {
      selectedLanguage: 'pt',
      sidebarOpen: false
    }
  },
  computed: {
    sections() {
      return [
        {
          icon: '<i class="fas fa-search"></i>',
          title: this.t('privacyPolicy.sections.about.title'),
          text: this.t('privacyPolicy.sections.about.text')
        },
        {
          icon: '<i class="fas fa-shield-alt"></i>',
          title: this.t('privacyPolicy.sections.security.title'),
          text: this.t('privacyPolicy.sections.security.text')
        },
        {
          icon: '<i class="fas fa-bullseye"></i>',
          title: this.t('privacyPolicy.sections.objective.title'),
          text: this.t('privacyPolicy.sections.objective.text')
        },
        {
          icon: '<i class="fas fa-handshake"></i>',
          title: this.t('privacyPolicy.sections.commitment.title'),
          text: this.t('privacyPolicy.sections.commitment.text')
        },
        {
          icon: '<i class="fas fa-lock"></i>',
          title: this.t('privacyPolicy.sections.protection.title'),
          text: this.t('privacyPolicy.sections.protection.text')
        },
        {
          icon: '<i class="fas fa-file-alt"></i>',
          title: this.t('privacyPolicy.sections.treatment.title'),
          text: this.t('privacyPolicy.sections.treatment.text')
        }
      ]
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
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.privacidade-page {
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
  background-image: url('@/assets/header-politica-privacidade.jpg');
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

/* Seção de Introdução */
.intro-section {
  background-color: #f9f9f9;
  text-align: center;
}

.intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ae2c2a' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  z-index: 0;
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

/* Seção Principal de Política de Privacidade */
.privacy-main {
  background-color: #ffffff;
  position: relative;
}

.privacy-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.privacy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 1;
}

.privacy-card {
  display: flex;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.privacy-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.privacy-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  font-size: 2.5rem;
  padding: 20px;
  flex-shrink: 0;
}

.privacy-content {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.privacy-content h3 {
  font-size: 1.6rem;
  color: #AE2C2A;
  margin-bottom: 15px;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  flex-shrink: 0;
}

.privacy-content h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #AE2C2A;
}

.privacy-content p {
  color: #666;
  margin-bottom: 0;
  line-height: 1.7;
  font-size: 0.95rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

/* Seção de Direitos do Usuário */
.user-rights-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.user-rights-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.rights-intro {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 50px;
}

.rights-steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.rights-steps::before {
  content: '';
  position: absolute;
  top: 0;
  left: 30px;
  width: 2px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
}

.rights-step {
  display: flex;
  align-items: flex-start;
  gap: 30px;
}

.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 1;
}

.right-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.right-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.right-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
}

.right-item h4 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: white;
}

.right-item p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
}

.step-number i {
  font-size: 1.8rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0px);
  }
}

.step-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 25px;
  border-radius: 10px;
  flex: 1;
}

.step-content h4 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: white;
}

.step-content p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.rights-step:hover .step-number {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.rights-step:hover .step-number i {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.rights-step:nth-child(1) .step-number {
  border-color: rgba(255, 85, 85, 0.5);
}

.rights-step:nth-child(2) .step-number {
  border-color: rgba(85, 150, 255, 0.5);
}

.rights-step:nth-child(3) .step-number {
  border-color: rgba(85, 255, 157, 0.5);
}

.rights-step:nth-child(4) .step-number {
  border-color: rgba(255, 204, 85, 0.5);
}

/* Seção de Segurança */
.security-section {
  background-color: #f9f9f9;
  position: relative;
}

.security-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.security-content {
  display: flex;
  align-items: center;
  gap: 50px;
}

.security-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  color: #AE2C2A;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  25% {
    transform: translateY(-4px);
  }

  75% {
    transform: translateY(4px);
  }

  100% {
    transform: translateY(0px);
  }
}

.security-text {
  flex: 2;
}

.security-text h3 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 15px;
}

.security-text h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #AE2C2A;
}

.security-text p {
  color: #666;
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.security-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.security-features li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  color: #555;
}

.security-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #AE2C2A;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Seção CTA */
.cta-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  text-align: center;
  padding: 100px 0;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  padding: 15px 40px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

.cta-button i {
  margin-left: 7px;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(174, 44, 42, 0.4);
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .privacy-grid {
    grid-template-columns: 1fr;
  }

  .privacy-card {
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

  .privacy-card {
    flex-direction: column;
  }

  .privacy-icon {
    min-width: 100%;
    padding: 30px 0;
  }

  .privacy-content {
    padding: 25px;
  }

  .security-content {
    flex-direction: column;
    text-align: center;
  }

  .security-text h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .security-features li {
    text-align: left;
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

  .privacy-content h3 {
    font-size: 1.4rem;
  }

  .privacy-content p {
    font-size: 0.9rem;
  }

  .intro-text {
    font-size: 1.1rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .rights-steps::before {
    display: none;
  }

  .step-number {
    margin: 0 auto;
  }

  .step-content {
    text-align: center;
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

  .privacy-content h3 {
    font-size: 1.4rem;
  }

  .rights-step {
    flex-direction: column;
    gap: 15px;
  }
}

/* Animações adicionais */
.privacy-icon i,
.right-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Animação para os cards de privacidade quando em hover */
.privacy-card:hover .privacy-icon {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Animação para o botão CTA */
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

.privacy-card:nth-child(odd) {
  border-top: 4px solid #AE2C2A;
}

.privacy-card:nth-child(even) {
  border-top: 4px solid #2C5EAE;
}

.privacy-icon i {
  transition: transform 0.5s ease;
}

.privacy-card:hover .privacy-icon i {
  transform: scale(1.2);
}

.cta-button:hover {
  animation: pulse 1.5s infinite;
}

/* Efeito de destaque para os itens de direitos */
.right-item:nth-child(1) {
  border-bottom: 3px solid rgba(255, 85, 85, 0.5);
}

.right-item:nth-child(2) {
  border-bottom: 3px solid rgba(85, 150, 255, 0.5);
}

.right-item:nth-child(3) {
  border-bottom: 3px solid rgba(85, 255, 157, 0.5);
}

.right-item:nth-child(4) {
  border-bottom: 3px solid rgba(255, 204, 85, 0.5);
}

/* Efeito de hover para os itens de direitos */
.right-item:hover .right-icon {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}
</style>
