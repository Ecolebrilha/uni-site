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
    
    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('lgpd.introTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <h3 class="subtitle">{{ t('lgpd.introSubtitle') }}</h3>
          <p class="intro-text">
            {{ t('lgpd.introText') }}
          </p>
        </ScrollReveal>
      </div>
    </section>
    
    <!-- Seção Principal de LGPD -->
    <section class="lgpd-main">
      <div class="container">
        <div class="lgpd-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="lgpd-card">
              <div class="lgpd-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="lgpd-content">
                <p>
                  {{ t('lgpd.cards.card1.text') }}
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="300">
            <div class="lgpd-card">
              <div class="lgpd-icon">
                <i class="fas fa-lock"></i>
              </div>
              <div class="lgpd-content">
                <p>
                  {{ t('lgpd.cards.card2.text') }}
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" :delay="400">
            <div class="lgpd-card">
              <div class="lgpd-icon">
                <i class="fas fa-file-shield"></i>
              </div>
              <div class="lgpd-content">
                <p>
                  {{ t('lgpd.cards.card3.text') }}
                </p>
                <div class="lgpd-buttons">
                  <router-link to="/PoliticaPrivacidade">
                    <button class="policy-button">{{ t('lgpd.cards.card3.privacyButton') }}</button>
                  </router-link>
                  <router-link to="/TermosLegais">
                    <button class="terms-button">{{ t('lgpd.cards.card3.termsButton') }}</button>
                  </router-link>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="500">
            <div class="lgpd-card">
              <div class="lgpd-icon">
                <i class="fas fa-headset"></i>
              </div>
              <div class="lgpd-content">
                <p>
                  {{ t('lgpd.cards.card4.text') }}
                </p>
                <router-link to="/Contato">
                  <button class="contact-button">{{ t('lgpd.cards.card4.contactButton') }}</button>
                </router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Princípios LGPD -->
    <section class="principles-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>{{ t('lgpd.principlesTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>
        
        <div class="principles-grid">
          <ScrollReveal direction="bottom" :delay="300">
            <div class="principle-item">
              <div class="principle-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <h4>{{ t('lgpd.principles.finality.title') }}</h4>
              <p>{{ t('lgpd.principles.finality.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="400">
            <div class="principle-item">
              <div class="principle-icon">
                <i class="fas fa-hand-holding-heart"></i>
              </div>
              <h4>{{ t('lgpd.principles.adequacy.title') }}</h4>
              <p>{{ t('lgpd.principles.adequacy.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="500">
            <div class="principle-item">
<div class="principle-icon">
                <i class="fas fa-hand-paper"></i>
              </div>
              <h4>{{ t('lgpd.principles.necessity.title') }}</h4>
              <p>{{ t('lgpd.principles.necessity.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="600">
            <div class="principle-item">
              <div class="principle-icon">
                <i class="fas fa-user-shield"></i>
              </div>
              <h4>{{ t('lgpd.principles.security.title') }}</h4>
              <p>{{ t('lgpd.principles.security.description') }}</p>
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
            <h2>{{ t('lgpd.ctaTitle') }}</h2>
            <p>{{ t('lgpd.ctaText') }}</p>
            <div class="cta-buttons">
              <router-link to="/PoliticaPrivacidade" class="cta-button primary">
                {{ t('lgpd.ctaButtons.privacy') }}
              </router-link>
              <router-link to="/Contato" class="cta-button secondary">
                {{ t('lgpd.ctaButtons.contact') }}
              </router-link>
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
import { useLGPDTranslation } from '@/composables/useLGPDTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
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
      sidebarOpen: false
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

/* Seção de Introdução */
.intro-section {
  background-color: #f9f9f9;
  text-align: center;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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

.subtitle {
  font-size: 1.5rem;
  color: #f05454;
  font-weight: 700;
  margin-bottom: 30px;
}

.intro-text {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  line-height: 1.8;
}

/* Seção Principal de LGPD */
.lgpd-main {
  background-color: #ffffff;
  position: relative;
}

.lgpd-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.lgpd-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 1;
}

.lgpd-card {
  display: flex;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.lgpd-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.lgpd-icon {
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

.lgpd-content {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.lgpd-content p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.7;
  flex-grow: 1;
}

.lgpd-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: auto;
}

.policy-button, .terms-button, .contact-button {
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.policy-button::after, .terms-button::after, .contact-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s;
}

.policy-button:hover::after, .terms-button:hover::after, .contact-button:hover::after {
  left: 100%;
}

.policy-button {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.terms-button {
  background: linear-gradient(135deg, #2C5EAE, #5596ff);
}

.contact-button {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.policy-button:hover, .terms-button:hover, .contact-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Seção de Princípios LGPD */
.principles-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.principles-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 1;
}

.principle-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.principle-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.principle-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
}

.principle-item h4 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: white;
}

.principle-item p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
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

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
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
  
  .lgpd-grid {
    grid-template-columns: 1fr;
  }

  .lgpd-card {
    max-width: 100%;
  }

  .principles-grid {
    grid-template-columns: 1fr 1fr;
  }

  .lgpd-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
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
  
  .lgpd-card {
    flex-direction: column;
  }
  
  .lgpd-icon {
    min-width: 100%;
    padding: 30px 0;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 60vh;
    min-height: 400px;
  }

  .lgpd-grid {
    gap: 30px;
  }

  .lgpd-card {
    flex-direction: column;
  }

  .lgpd-icon {
    min-width: 100%;
    padding: 25px 0;
  }
  
  .lgpd-content {
    padding: 25px;
  }
  
  .lgpd-buttons {
    justify-content: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.3rem;
  }
  
  .intro-text {
    font-size: 1.1rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .lgpd-buttons {
    justify-content: center;
  }

  .principles-grid {
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
  
  .policy-button, .terms-button, .contact-button {
    width: 100%;
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

.lgpd-icon i {
  transition: transform 0.5s ease;
}

.lgpd-icon i, .principle-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Animação para os cards de LGPD quando em hover */
.lgpd-icon {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.lgpd-card:hover .lgpd-icon i {
  transform: scale(1.2) rotate(10deg);
}

.lgpd-card:nth-child(1) {
  border-left: 5px solid #AE2C2A;
}

.lgpd-card:nth-child(2) {
  border-left: 5px solid #2C5EAE;
}

.lgpd-card:nth-child(3) {
  border-left: 5px solid #2CAE6F;
}

.lgpd-card:nth-child(4) {
  border-left: 5px solid #AE8A2C;
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

.cta-button.primary:hover, .contact-button:hover {
  animation: pulse 1.5s infinite;
}

/* Efeito de destaque para os itens de princípios */
.principle-item:nth-child(1) {
  border-bottom: 3px solid rgba(255, 85, 85, 0.5);
}

.principle-item:nth-child(2) {
  border-bottom: 3px solid rgba(85, 150, 255, 0.5);
}

.principle-item:nth-child(3) {
  border-bottom: 3px solid rgba(85, 255, 157, 0.5);
}

.principle-item:nth-child(4) {
  border-bottom: 3px solid rgba(255, 204, 85, 0.5);
}

/* Efeito de hover para os itens de princípios */
.principle-item:hover .principle-icon {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

/* Ajustes para a banner-container em dispositivos móveis */
@media (max-width: 768px) {
  .banner-container {
    top: 82px;
    padding-top: 0px;
  }
}

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
</style>
