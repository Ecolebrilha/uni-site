<template>
  <div class="conduta-etica-page">
    <HomeHeader />
    
    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('condutaEtica.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('condutaEtica.heroSubtitle') }}</div>
      </div>
    </section>
    
    <!-- Seção de Visão Geral -->
    <section class="overview-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('condutaEtica.overviewTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('condutaEtica.overviewText') }}
          </p>
        </ScrollReveal>
        
        <div class="values-container">
          <ScrollReveal direction="left" :delay="200">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3>{{ t('condutaEtica.values.integrity.title') }}</h3>
              <p>{{ t('condutaEtica.values.integrity.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="300">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3>{{ t('condutaEtica.values.trust.title') }}</h3>
              <p>{{ t('condutaEtica.values.trust.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="400">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h3>{{ t('condutaEtica.values.responsibility.title') }}</h3>
              <p>{{ t('condutaEtica.values.responsibility.description') }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Princípios Éticos -->
    <section class="principles-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>{{ t('condutaEtica.principlesTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>
        
        <div class="principles-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="principle-item">
              <div class="principle-icon">
                <i class="fas fa-gavel"></i>
              </div>
              <h3>{{ t('condutaEtica.principles.legalCompliance.title') }}</h3>
              <p>{{ t('condutaEtica.principles.legalCompliance.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="300">
            <div class="principle-item">
              <div class="principle-icon">
                <i class="fas fa-eye"></i>
              </div>
              <h3>{{ t('condutaEtica.principles.transparency.title') }}</h3>
              <p>{{ t('condutaEtica.principles.transparency.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="400">
            <div class="principle-item">
              <div class="principle-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>{{ t('condutaEtica.principles.mutualRespect.title') }}</h3>
              <p>{{ t('condutaEtica.principles.mutualRespect.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" :delay="500">
            <div class="principle-item">
              <div class="principle-icon">
                <i class="fas fa-lock"></i>
              </div>
              <h3>{{ t('condutaEtica.principles.confidentiality.title') }}</h3>
              <p>{{ t('condutaEtica.principles.confidentiality.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="600">
            <div class="principle-item">
              <div class="principle-icon">
                <i class="fas fa-ban"></i>
              </div>
              <h3>{{ t('condutaEtica.principles.antiCorruption.title') }}</h3>
              <p>{{ t('condutaEtica.principles.antiCorruption.description') }}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="700">
            <div class="principle-item">
              <div class="principle-icon">
                <i class="fas fa-clipboard-check"></i>
              </div>
              <h3>{{ t('condutaEtica.principles.socialResponsibility.title') }}</h3>
              <p>{{ t('condutaEtica.principles.socialResponsibility.description') }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Contato -->
    <section class="contact-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('condutaEtica.contactTitle') }}</h2>
              <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('condutaEtica.contactText') }}
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="bottom" :delay="200">
          <div class="contact-cta">
            <router-link to="/Contato" class="cta-button">
              <i class="fas fa-envelope"></i> {{ t('condutaEtica.contactButton') }}
            </router-link>
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
import { useEthicalConductTranslation } from '@/composables/useEthicalConductTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useEthicalConductTranslation()
    
    return {
      t,
      currentLanguage
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.conduta-etica-page {
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
  background-image: url('@/assets/header-conduta-etica2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeInUp 1.5s ease-out;
}

.hero-subtitle {
  font-size: 1.3rem;
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

/* Seção de Visão Geral */
.overview-section {
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overview-section .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
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
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #555;
  line-height: 1.8;
  text-align: center;
}

/* Container de Valores */
.values-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  margin: 50px 0;
  width: 100%;
  max-width: 1200px;
}

.value-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 30px;
  text-align: center;
  flex: 1;
  max-width: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  height: 100%;
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.value-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  flex-shrink: 0;
}

.value-icon i {
  font-size: 2rem;
  color: white;
}

.value-card h3 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 15px;
  flex-shrink: 0;
}

.value-card p {
  color: #696969;
  font-size: 1rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

/* Seção de Princípios */
.principles-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  row-gap: 80px;
}

.principle-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 20px;
  height: 100%;
}

.principle-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.principle-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px;
  flex-shrink: 0;
}

.principle-icon i {
  font-size: 1.5rem;
  color: white;
}

.principle-item h3 {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 10px;
  flex-shrink: 0;
}

.principle-item p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

/* Seção de Contato */
.contact-section {
  background-color: #ffffff;
  text-align: center;
}

.contact-cta {
  margin-top: 30px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

.cta-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s;
}

.cta-button:hover::after {
  left: 100%;
}

/* Responsividade */
  @media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  section {
    padding: 60px 0;
  }
  
  .values-container {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }
  
  .value-card {
    max-width: calc(100% - 60px);
    width: 100%;
  }
  
  .principles-grid {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 50vh;
    min-height: 350px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }

  .parallax-container {
    background-attachment: scroll;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
  
  .intro-text {
    font-size: 1.1rem;
  }
  
  .principles-grid {
    grid-template-columns: repeat(1, 1fr);
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
    font-size: 1rem;
  }
  
  .section-title h2 {
    font-size: 1.8rem;
  }
  
  .accent-line {
    width: 40px;
  }
  
  .value-card p, .principle-item p {
    font-size: 0.9rem;
  }
  
  .value-icon {
    width: 60px;
    height: 60px;
  }
  
  .value-icon i {
    font-size: 1.8rem;
  }
  
  .principle-icon {
    width: 50px;
    height: 50px;
  }
  
  .principle-icon i {
    font-size: 1.3rem;
  }
  
  .cta-button {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
}

@media (max-width: 350px) {
  .value-card, .principle-item {
    padding: 30px;
  }
  
  .value-card h3, .principle-item h3 {
    font-size: 1.2rem;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .section-title h2 {
    font-size: 1.5rem;
  }
}

/* Animações simples */
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

.value-icon i, .principle-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Efeito de hover suave */
.value-card:hover .value-icon,
.principle-item:hover .principle-icon {
  transform: scale(1.1);
}

/* Transições suaves */
.value-icon, .principle-icon {
  transition: transform 0.3s ease;
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}

/* Melhorias de acessibilidade */
.cta-button:focus {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
}

/* Efeito de linha animada nos títulos */
.section-title h2 {
  position: relative;
  display: inline-block;
}

.section-title h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background-color: #AE2C2A;
  transition: width 0.5s ease;
}

.section-title.light h2::after {
  background-color: #ffffff;
}

.section-title:hover h2::after {
  width: 80%;
}
</style>
