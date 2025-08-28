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
    <!-- <section class="process-section">
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
    </section> -->

    <!-- Seção de Benefícios dos Nossos Serviços -->
    <section class="benefits-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Benefícios dos Nossos Serviços</h2>
            <span class="accent-line"></span>
          </div>
          <p class="section-subtitle">Descubra as vantagens que oferecemos para impulsionar seu sucesso</p>
        </ScrollReveal>

        <div class="benefits-balloons">
          <ScrollReveal direction="left" :delay="300">
            <div class="benefit-balloon">
              <div class="balloon-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="balloon-content">
                <h4>{{ t('services.processSteps.step1.title') }}</h4>
                <p>{{ t('services.processSteps.step1.description') }}</p>
              </div>
              <div class="balloon-tail"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="benefit-balloon reverse">
              <div class="balloon-content two">
                <h4>{{ t('services.processSteps.step2.title') }}</h4>
                <p>{{ t('services.processSteps.step2.description') }}</p>
              </div>
              <div class="balloon-icon">
                <i class="fas fa-truck-fast"></i>
              </div>
              <div class="balloon-tail reverse"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" :delay="500">
            <div class="benefit-balloon">
              <div class="balloon-icon">
                <i class="fas fa-vial-circle-check"></i>
              </div>
              <div class="balloon-content">
                <h4>{{ t('services.processSteps.step3.title') }}</h4>
                <p>{{ t('services.processSteps.step3.description') }}</p>
              </div>
              <div class="balloon-tail"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="600">
            <div class="benefit-balloon reverse">
              <div class="balloon-content">
                <h4>{{ t('services.processSteps.step4.title') }}</h4>
                <p>{{ t('services.processSteps.step4.description') }}</p>
              </div>
              <div class="balloon-icon">
                <i class="fas fa-user-check"></i>
              </div>
              <div class="balloon-tail reverse"></div>
            </div>
          </ScrollReveal>

          <!-- <ScrollReveal direction="left" :delay="700">
            <div class="benefit-balloon">
              <div class="balloon-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <div class="balloon-content">
                <h4>Sustentabilidade</h4>
                <p>Compromisso com práticas sustentáveis e responsabilidade ambiental em todos os processos produtivos e operacionais.</p>
              </div>
              <div class="balloon-tail"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="800">
            <div class="benefit-balloon reverse">
              <div class="balloon-content">
                <h4>Suporte Técnico Especializado</h4>
                <p>Assessoria técnica completa com profissionais qualificados para orientação sobre produtos e melhores práticas de utilização.</p>
              </div>
              <div class="balloon-icon">
                <i class="fas fa-user-md"></i>
              </div>
              <div class="balloon-tail reverse"></div>
            </div>
          </ScrollReveal> -->
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
  border-bottom: 4px solid #AE2C2A;
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
  color: #696969;
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

/* Seção de Benefícios dos Nossos Serviços */
.benefits-section {
  background: 
    linear-gradient(135deg, #f1f3f6 0%, #ffffff 25%, #f8fafc 50%, #ffffff 75%, #f1f3f6 100%),
    radial-gradient(circle at 25% 25%, rgba(174, 44, 42, 0.04) 0%, transparent 60%),
    radial-gradient(circle at 75% 75%, rgba(174, 44, 42, 0.03) 0%, transparent 60%);
  padding: 150px 0;
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
  background: 
    url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.02'%3E%3Cpath d='M20 20c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20zm80 40c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 0;
}

.benefits-section .container {
  position: relative;
  z-index: 1;
}

.section-subtitle {
  font-size: 1.4rem;
  color: #696969;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
  font-weight: 400;
  font-style: italic;
}

.benefits-balloons {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 80px;
}

.benefit-balloon {
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.benefit-balloon.reverse {
  flex-direction: row-reverse;
}

.balloon-icon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #D2342C, #ff6b6b);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
  flex-shrink: 0;
  box-shadow: 
    0 20px 50px rgba(174, 44, 42, 0.4),
    0 10px 25px rgba(0, 0, 0, 0.1),
    inset 0 3px 6px rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.balloon-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.benefit-balloon:hover .balloon-icon::before {
  left: 100%;
}

.benefit-balloon:hover .balloon-icon {
  transform: scale(1.1);
  box-shadow: 
    0 25px 60px rgba(174, 44, 42, 0.5),
    0 15px 35px rgba(0, 0, 0, 0.15),
    inset 0 4px 8px rgba(255, 255, 255, 0.4);
}

.balloon-content {
  background: 
    linear-gradient(145deg, #ffffff 0%, #fafbfc 30%, #ffffff 70%, #f8fafc 100%),
    radial-gradient(circle at 80% 20%, rgba(174, 44, 42, 0.02) 0%, transparent 50%);
  border-radius: 35px;
  padding: 40px 45px;
  flex: 1;
  box-shadow: 
    0 25px 70px rgba(0, 0, 0, 0.12),
    0 15px 35px rgba(174, 44, 42, 0.08),
    0 8px 20px rgba(0, 0, 0, 0.06),
    inset 0 2px 0 rgba(255, 255, 255, 0.9),
    inset 0 -2px 0 rgba(174, 44, 42, 0.03);
  border: 3px solid transparent;
  background-clip: padding-box;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.balloon-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.8s ease;
  z-index: 1;
}

.benefit-balloon:hover .balloon-content::before {
  left: 100%;
}

.benefit-balloon:hover .balloon-content {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 
    0 35px 90px rgba(0, 0, 0, 0.15),
    0 20px 50px rgba(174, 44, 42, 0.12),
    0 12px 30px rgba(0, 0, 0, 0.08),
    inset 0 3px 0 rgba(255, 255, 255, 1),
    inset 0 -3px 0 rgba(174, 44, 42, 0.05);
  border: 3px solid rgba(174, 44, 42, 0.1);
}

.balloon-content h4 {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2c3e50, #AE2C2A, #D2342C);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.balloon-content p {
  color: #555;
  font-size: 1.15rem;
  line-height: 1.8;
  margin: 0;
  font-weight: 400;
  position: relative;
  z-index: 2;
}

.balloon-tail {
  position: absolute;
  width: 30px;
  height: 30px;
  background: 
    linear-gradient(145deg, #ffffff 0%, #fafbfc 50%, #ffffff 100%);
  transform: rotate(45deg);
  box-shadow: 
    -5px -5px 15px rgba(174, 44, 42, 0.08),
    5px 5px 15px rgba(0, 0, 0, 0.06);
  z-index: 0;
}

.benefit-balloon .balloon-tail {
  right: -15px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.benefit-balloon.reverse .balloon-tail {
  left: -15px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
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

  .benefits-balloons {
    gap: 50px;
  }

  .benefit-balloon {
    max-width: 800px;
    gap: 30px;
  }

  .balloon-icon {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }

  .balloon-content {
    padding: 35px 40px;
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
    padding: 120px 0;
  }

  .benefits-balloons {
    gap: 40px;
  }

  .benefit-balloon {
    flex-direction: column !important;
    text-align: center;
    gap: 25px;
    max-width: 600px;
  }

  .benefit-balloon.reverse {
    flex-direction: column-reverse !important;
  }

  .balloon-icon {
    width: 90px;
    height: 90px;
    font-size: 2.3rem;
  }

  .balloon-content {
    padding: 30px 35px;
  }

  .balloon-content.two {
    padding: 30px 65px 30px 65px;
  }

  .balloon-tail {
    display: none;
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
    padding: 100px 0;
  }

  .benefits-balloons {
    gap: 35px;
    margin-top: 60px;
  }

  .benefit-balloon {
    max-width: 500px;
    gap: 20px;
  }

  .balloon-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }

  .balloon-content {
    padding: 25px 30px;
  }

  .balloon-content h4 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .balloon-content p {
    font-size: 1rem;
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
    padding: 80px 0;
  }

  .benefits-balloons {
    gap: 30px;
    margin-top: 50px;
  }

  .benefit-balloon {
    max-width: 400px;
    gap: 15px;
  }

  .balloon-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }

  .balloon-content {
    padding: 20px 25px;
  }

  .balloon-content h4 {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }

  .balloon-content p {
    font-size: 0.95rem;
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

/* Animações para balões */
@keyframes balloonFloat {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-12px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes balloonPulse {
  0% {
    box-shadow: 
      0 20px 50px rgba(174, 44, 42, 0.4),
      0 10px 25px rgba(0, 0, 0, 0.1),
      inset 0 3px 6px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow: 
      0 25px 60px rgba(174, 44, 42, 0.5),
      0 15px 35px rgba(0, 0, 0, 0.15),
      inset 0 4px 8px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 
      0 20px 50px rgba(174, 44, 42, 0.4),
      0 10px 25px rgba(0, 0, 0, 0.1),
      inset 0 3px 6px rgba(255, 255, 255, 0.3);
  }
}

.balloon-icon {
  animation: balloonFloat 4s ease-in-out infinite, balloonPulse 3s ease-in-out infinite;
}

.benefit-balloon:nth-child(1) .balloon-icon {
  animation-delay: 0s, 0s;
}

.benefit-balloon:nth-child(2) .balloon-icon {
  animation-delay: 0.5s, 0.3s;
}

.benefit-balloon:nth-child(3) .balloon-icon {
  animation-delay: 1s, 0.6s;
}

.benefit-balloon:nth-child(4) .balloon-icon {
  animation-delay: 1.5s, 0.9s;
}

.benefit-balloon:nth-child(5) .balloon-icon {
  animation-delay: 2s, 1.2s;
}

.benefit-balloon:nth-child(6) .balloon-icon {
  animation-delay: 2.5s, 1.5s;
}

/* Efeito de hover mais suave para touch devices */
@media (hover: none) {
  .benefit-balloon:hover .balloon-content {
    transform: none;
  }

  .benefit-balloon:hover .balloon-icon {
    transform: none;
  }
}

/* Melhorias de acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .balloon-icon {
    animation: none;
  }

  .benefit-balloon .balloon-content {
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