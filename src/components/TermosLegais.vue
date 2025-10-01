<template>
  <div class="termos-page">
    <HomeHeader />
    
    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('terms.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('terms.heroSubtitle') }}</div>
      </div>
    </section>
    
    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('terms.introTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('terms.introText') }}
          </p>
        </ScrollReveal>
      </div>
    </section>
    
    <!-- Seção Principal de Termos Legais -->
    <section class="terms-main">
      <div class="container">
        <div class="terms-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="terms-card">
              <div class="terms-icon">
                <i class="fas fa-file-contract"></i>
              </div>
              <div class="terms-content">
                <h3>{{ t('terms.sections.usage.title') }}</h3>
                <p>{{ t('terms.sections.usage.text') }}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="300">
            <div class="terms-card">
              <div class="terms-icon">
                <i class="fas fa-door-open"></i>
              </div>
              <div class="terms-content">
                <h3>{{ t('terms.sections.access.title') }}</h3>
                <p>{{ t('terms.sections.access.text') }}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" :delay="400">
            <div class="terms-card">
              <div class="terms-icon">
                <i class="fas fa-copy"></i>
              </div>
              <div class="terms-content">
                <h3>{{ t('terms.sections.license.title') }}</h3>
                <p>{{ t('terms.sections.license.text1') }}</p>
                <p>{{ t('terms.sections.license.text2') }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Responsabilidades -->
    <section class="responsibilities-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>{{ t('terms.responsibilitiesTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>
        
        <div class="responsibilities-grid">
          <ScrollReveal direction="bottom" :delay="300">
            <div class="responsibility-item">
              <div class="responsibility-icon">
                <i class="fas fa-user-shield"></i>
              </div>
              <h4>{{ t('terms.responsibilities.user.title') }}</h4>
              <p>{{ t('terms.responsibilities.user.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="400">
            <div class="responsibility-item">
              <div class="responsibility-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4>{{ t('terms.responsibilities.security.title') }}</h4>
              <p>{{ t('terms.responsibilities.security.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="500">
            <div class="responsibility-item">
              <div class="responsibility-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h4>{{ t('terms.responsibilities.legislation.title') }}</h4>
              <p>{{ t('terms.responsibilities.legislation.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="600">
            <div class="responsibility-item">
              <div class="responsibility-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h4>{{ t('terms.responsibilities.commitment.title') }}</h4>
              <p>{{ t('terms.responsibilities.commitment.description') }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Propriedade Intelectual -->
    <section class="intellectual-section">
      <div class="container">
        <div class="intellectual-content">
          <ScrollReveal direction="left" :delay="200">
            <div class="intellectual-image">
              <i class="fas fa-copyright"></i>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="300">
            <div class="intellectual-text">
              <h3>{{ t('terms.intellectualTitle') }}</h3>
              <p>{{ t('terms.intellectualText') }}</p>
              <ul class="intellectual-features">
                <li>{{ t('terms.intellectualFeatures.trademarks') }}</li>
                <li>{{ t('terms.intellectualFeatures.reproduction') }}</li>
                <li>{{ t('terms.intellectualFeatures.misuse') }}</li>
                <li>{{ t('terms.intellectualFeatures.respect') }}</li>
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
            <h2>{{ t('terms.ctaTitle') }}</h2>
            <p>{{ t('terms.ctaText') }}</p>
            <div class="cta-buttons">
              <router-link to="/PoliticaPrivacidade" class="cta-button primary"><i class="fas fa-user-shield"></i> {{ t('terms.ctaButtons.privacy') }}</router-link>
              <router-link to="/Contato" class="cta-button secondary"><i class="fas fa-envelope"></i> {{ t('terms.ctaButtons.contact') }}</router-link>
            </div>
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
import { useTermsTranslation } from '@/composables/useTermsTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useTermsTranslation()
    
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
  methods: {
    changeLanguage(event) {
      const value = typeof event === 'string' ? event : event.target.value;
      this.selectedLanguage = value;

    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.termos-page {
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
  background-image: url('@/assets/header-termos-legais2.jpg');
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

/* Seção Principal de Termos Legais */
.terms-main {
  background-color: #ffffff;
  position: relative;
}

.terms-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.terms-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  position: relative;
  z-index: 1;
}

.terms-card {
  display: flex;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.terms-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.terms-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  font-size: 2.5rem;
  padding: 20px;
}

.terms-content {
  padding: 30px;
  flex: 1;
}

.terms-content h3 {
  font-size: 1.6rem;
  color: #AE2C2A;
  margin-bottom: 15px;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
}

.terms-content h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #AE2C2A;
}

.terms-content p {
  color: #696969;
  margin-bottom: 15px;
  line-height: 1.7;
}

/* Seção de Responsabilidades */
.responsibilities-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;
}

.responsibilities-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.responsibilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 80px;
  column-gap: 30px;
  position: relative;
  z-index: 1;
}

.responsibility-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, background-color 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.responsibility-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.responsibility-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;
}

.responsibility-item h4 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: white;
  flex-shrink: 0;
}

.responsibility-item p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Seção de Propriedade Intelectual */
.intellectual-section {
  background-color: #f9f9f9;
  position: relative;
}

.intellectual-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.intellectual-content {
  display: flex;
  align-items: center;
  gap: 50px;
}

.intellectual-image {
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
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.intellectual-text {
  flex: 2;
}

.intellectual-text h3 {
  font-size: 2rem;
  background: linear-gradient(-135deg, #2c3e50, #AE2C2A);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 15px;
}

.intellectual-text h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #AE2C2A;
}

.intellectual-text p {
  color: #696969;
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.intellectual-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.intellectual-features li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  color: #555;
}

.intellectual-features li::before {
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
  color: #780000;
  margin-bottom: 20px;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.2rem;
  color: #696969;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cta-buttons i {
  margin-right: 10px;
}

.cta-button {
  display: inline-block;
  padding: 15px 40px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

.cta-button.secondary {
  background: white;
  color: #AE2C2A;
  border: 2px solid #AE2C2A;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.cta-button.primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(174, 44, 42, 0.4);
}

.cta-button.secondary:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  background: #f9f9f9;
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }
  
  .terms-grid {
    grid-template-columns: 1fr;
  }

  .responsibilities-grid {
    grid-template-columns: 1fr 1fr;
    row-gap: 100px;
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
  
  .terms-card {
    flex-direction: column;
  }
  
  .terms-icon {
    min-width: 100%;
    padding: 30px 0;
  }
  
  .intellectual-content {
    flex-direction: column;
    text-align: center;
  }
  
  .intellectual-text h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .intellectual-features li {
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
  
  .intro-text {
    font-size: 1.1rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .banner-container {
    top: 82px;
    padding-top: 0px;
  }

  .responsibilities-grid {
    grid-template-columns: 1fr;
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
  
  .cta-button {
    padding: 12px 30px;
    font-size: 1rem;
    width: 60%;
    margin: 0 auto;
    display: block;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }
  
  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

/* Animações adicionais */
.terms-icon i, .responsibility-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Animação para os cards de termos quando em hover */
.terms-card:hover .terms-icon {
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

.cta-button.primary:hover {
  animation: pulse 1.5s infinite;
}

/* Efeito de destaque para os itens de responsabilidades */
.responsibility-item:nth-child(1) {
  border-bottom: 3px solid rgba(255, 85, 85, 0.5);
}

.responsibility-item:nth-child(2) {
  border-bottom: 3px solid rgba(85, 150, 255, 0.5);
}

.responsibility-item:nth-child(3) {
  border-bottom: 3px solid rgba(85, 255, 157, 0.5);
}

.responsibility-item:nth-child(3) {
  border-bottom: 3px solid rgba(85, 255, 157, 0.5);
}

.responsibility-item:nth-child(4) {
  border-bottom: 3px solid rgba(255, 204, 85, 0.5);
}

/* Efeito de hover para os itens de responsabilidades */
.responsibility-item:hover .responsibility-icon {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

/* Ajustes específicos para banner em dispositivos móveis */
@media (max-width: 400px) {
  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

@media (max-width: 768px) {
  .banner-overlay h1 {
    font-size: 2em;
  }
}

@media (max-width: 576px) {
  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

/* Animação para a seção de propriedade intelectual */
.intellectual-features li {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.intellectual-features li:nth-child(1) {
  animation-delay: 0.3s;
}

.intellectual-features li:nth-child(2) {
  animation-delay: 0.6s;
}

.intellectual-features li:nth-child(3) {
  animation-delay: 0.9s;
}

.intellectual-features li:nth-child(4) {
  animation-delay: 1.2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efeito de sombra para os cards */
.terms-card {
  position: relative;
}

.terms-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.terms-card:hover::before {
  opacity: 1;
}

/* Efeito de destaque para links dentro do conteúdo */
.terms-content a {
  color: #AE2C2A;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.terms-content a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #AE2C2A;
  transition: width 0.3s ease;
}

.terms-content a:hover {
  color: #ff5555;
}

.terms-content a:hover::after {
  width: 100%;
}

/* Ajustes para a animação do slideInRight em diferentes tamanhos de tela */
@keyframes slideInRight {
  from {
    transform: translateX(85%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 480px) {
  @keyframes slideInRight {
    from {
      transform: translateX(10%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (max-width: 768px) {
  @keyframes slideInRight {
    from {
      transform: translateX(21%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 769px) {
  @keyframes slideInRight {
    from {
      transform: translateX(30%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 993px) {
  @keyframes slideInRight {
    from {
      transform: translateX(28%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 1390px) {
  @keyframes slideInRight {
    from {
      transform: translateX(57%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 300px) {
  @keyframes slideInRight {
    from {
      transform: translateX(11%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 400px) {
  @keyframes slideInRight {
    from {
      transform: translateX(30%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>
