<template>
  <div class="servicos-page">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('services.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('services.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('services.introTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('services.introText') }}
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção Principal de Serviços -->
    <section class="services-main">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="service-card main-card">
            <div class="service-icon">
              <i class="fas fa-briefcase-medical"></i>
            </div>
            <div class="service-content">
              <h3>{{ t('services.mainServiceTitle') }}</h3>
              <p>{{ t('services.mainServiceText') }}</p>
            </div>
          </div>
        </ScrollReveal>

        <div class="services-grid">
          <ScrollReveal direction="left" :delay="300">
            <div class="service-card">
              <div class="service-icon private">
                <i class="fas fa-user-tie"></i>
              </div>
              <div class="service-content">
                <h3>{{ t('services.privateSegmentTitle') }}</h3>
                <p>{{ t('services.privateSegmentText') }}</p>
                <ul class="service-features">
                  <li>{{ t('services.privateFeatures.feature1') }}</li>
                  <li>{{ t('services.privateFeatures.feature2') }}</li>
                  <li>{{ t('services.privateFeatures.feature3') }}</li>
                  <li>{{ t('services.privateFeatures.feature4') }}</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="service-card">
              <div class="service-icon public">
                <i class="fas fa-gavel"></i>
              </div>
              <div class="service-content">
                <h3>{{ t('services.publicSegmentTitle') }}</h3>
                <p>{{ t('services.publicSegmentText') }}</p>
                <ul class="service-features">
                  <li>{{ t('services.publicFeatures.feature1') }}</li>
                  <li>{{ t('services.publicFeatures.feature2') }}</li>
                  <li>{{ t('services.publicFeatures.feature3') }}</li>
                  <li>{{ t('services.publicFeatures.feature4') }}</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Processo de Trabalho -->
    <section class="process-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>{{ t('services.processTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="process-intro">{{ t('services.processIntro') }}</p>
        </ScrollReveal>

        <div class="process-steps">
          <ScrollReveal direction="bottom" :delay="300">
            <div class="process-step">
              <div class="step-number">01</div>
              <div class="step-content">
                <h4>{{ t('services.processSteps.step1.title') }}</h4>
                <p>{{ t('services.processSteps.step1.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="process-step">
              <div class="step-number">02</div>
              <div class="step-content">
                <h4>{{ t('services.processSteps.step2.title') }}</h4>
                <p>{{ t('services.processSteps.step2.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="500">
            <div class="process-step">
              <div class="step-number">03</div>
              <div class="step-content">
                <h4>{{ t('services.processSteps.step3.title') }}</h4>
                <p>{{ t('services.processSteps.step3.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="600">
            <div class="process-step">
              <div class="step-number">04</div>
              <div class="step-content">
                <h4>{{ t('services.processSteps.step4.title') }}</h4>
                <p>{{ t('services.processSteps.step4.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Benefícios -->
    <section class="benefits-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('services.benefitsTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="benefits-grid">
          <ScrollReveal direction="bottom" :delay="300">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h4>{{ t('services.benefits.efficiency.title') }}</h4>
              <p>{{ t('services.benefits.efficiency.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4>{{ t('services.benefits.security.title') }}</h4>
              <p>{{ t('services.benefits.security.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="500">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h4>{{ t('services.benefits.partnerships.title') }}</h4>
              <p>{{ t('services.benefits.partnerships.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="600">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-clock"></i>
              </div>
              <h4>{{ t('services.benefits.agility.title') }}</h4>
              <p>{{ t('services.benefits.agility.description') }}</p>
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
            <h2>{{ t('services.ctaTitle') }}</h2>
            <p>{{ t('services.ctaText') }}</p>
            <router-link to="/Contato" class="cta-button">{{ t('services.ctaButton') }}</router-link>
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
import { useServicesTranslation } from '@/composables/useServicesTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useServicesTranslation()

    return {
      t,
      currentLanguage
    }
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.servicos-page {
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
  background-image: url('@/assets/header-servicos.jpg');
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

/* Seção Principal de Serviços */
.services-main {
  background-color: #ffffff;
  position: relative;
}

.services-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.main-card {
  margin-bottom: 50px;
}

.service-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.service-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  font-size: 2.5rem;
  padding: 20px;
}

.service-icon.private {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
}

.service-icon.public {
  background: linear-gradient(135deg, #8B2220, #AE2C2A);
}

.service-content {
  padding: 30px;
  flex: 1;
}

.service-content h3 {
  font-size: 1.8rem;
  color: #AE2C2A;
  margin-bottom: 15px;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
}

.service-content h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #AE2C2A;
}

.service-card:nth-child(2) .service-content h3 {
  color: #AE2C2A;
}

.service-card:nth-child(2) .service-content h3::after {
  background-color: #AE2C2A;
}

.service-card:nth-child(3) .service-content h3 {
  color: #8B2220;
}

.service-card:nth-child(3) .service-content h3::after {
  background-color: #8B2220;
}

.service-content p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.7;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-features li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  color: #555;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #AE2C2A;
  font-weight: bold;
}

.service-card:nth-child(2) .service-features li::before {
  color: #AE2C2A;
}

.service-card:nth-child(3) .service-features li::before {
  color: #8B2220;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

/* Seção de Processo */
.process-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.process-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.process-intro {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 50px;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  z-index: 1;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 0;
  left: 30px;
  width: 2px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 30px;
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

/* Seção de Benefícios */
.benefits-section {
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  padding: 100px 0;
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
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ae2c2a' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  z-index: 0;
}

.benefits-section .container {
  position: relative;
  z-index: 1;
}

.benefit-card {
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(174, 44, 42, 0.08);
  transition: all 0.4s ease;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(174, 44, 42, 0.1);
  position: relative;
  overflow: hidden;
}

.benefit-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.benefit-card:hover::before {
  transform: scaleX(1);
}

.benefit-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 60px rgba(174, 44, 42, 0.15);
  border-color: rgba(174, 44, 42, 0.2);
}

.benefit-icon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px;
  color: white;
  font-size: 2.2rem;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.3);
  transition: transform 0.3s ease;
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.1);
}

.benefit-card h4 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 20px;
  flex-shrink: 0;
  font-weight: 700;
  position: relative;
}

.benefit-card p {
  color: #666;
  margin: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.7;
  font-size: 1rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  align-items: stretch;
  margin-top: 60px;
}

.benefit-card:nth-child(1) .benefit-icon {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
}

.benefit-card:nth-child(2) .benefit-icon {
  background: linear-gradient(135deg, #8B2220, #AE2C2A);
}

.benefit-card:nth-child(3) .benefit-icon {
  background: linear-gradient(135deg, #D2342C, #FF4444);
}

.benefit-card:nth-child(4) .benefit-icon {
  background: linear-gradient(135deg, #AE2C2A, #8B2220);
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

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(174, 44, 42, 0.4);
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .benefits-grid {
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
  }

  .benefits-section {
    margin-bottom: 50px;
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

  .service-card {
    flex-direction: column;
  }

  .service-icon {
    min-width: 100%;
    padding: 30px 0;
  }

  .process-steps::before {
    left: 25px;
  }

  .step-number {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  .benefits-section {
    padding: 80px 0;
  }

  .benefit-card {
    height: 300px;
    padding: 35px 25px;
  }

  .benefit-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
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

  .step-number {
    margin: 0 auto;
  }

  .step-content {
    text-align: center;
  }

  .benefits-section {
    padding: 70px 0;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-top: 40px;
  }

  .benefit-card {
    height: 280px;
    padding: 30px 20px;
  }

  .benefit-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  .benefit-card h4 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  .benefit-card p {
    font-size: 0.95rem;
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
  }

  .benefits-section {
    padding: 60px 0;
  }

  .benefit-card {
    height: 260px;
    padding: 25px 15px;
  }

  .benefit-icon {
    width: 60px;
    height: 60px;
    font-size: 1.6rem;
    margin-bottom: 15px;
  }

  .benefit-card h4 {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }

  .benefit-card p {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}

@media (max-width: 468px) {
  .process-step {
    flex-direction: column;
    gap: 15px;
  }

  .process-steps::before {
    display: none;
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

.service-icon i,
.benefit-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Animações adicionais para benefícios */
@keyframes benefitFloat {
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

.benefit-icon {
  animation: benefitFloat 3s ease-in-out infinite;
}

.benefit-card:nth-child(2) .benefit-icon {
  animation-delay: 0.5s;
}

.benefit-card:nth-child(3) .benefit-icon {
  animation-delay: 1s;
}

.benefit-card:nth-child(4) .benefit-icon {
  animation-delay: 1.5s;
}

/* Efeito de hover mais suave para touch devices */
@media (hover: none) {
  .benefit-card:hover {
    transform: none;
  }

  .benefit-card:hover .benefit-icon {
    transform: none;
  }
}

/* Melhorias de acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .benefit-icon {
    animation: none;
  }

  .benefit-card {
    transition: none;
  }
}

.service-card:hover .service-icon {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.process-step:hover .step-number {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
  transition: all 0.3s ease;
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

.cta-button:hover {
  animation: pulse 1.5s infinite;
}

/* Ajustes para dispositivos móveis */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .service-content h3 {
    font-size: 1.5rem;
  }

  .step-content h4 {
    font-size: 1.2rem;
  }

  .benefit-card {
    padding: 20px;
  }
}
</style>