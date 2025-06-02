<template>
  <div class="direitos-humanos-page">
    <HomeHeader />
    
    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('direitosHumanos.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('direitosHumanos.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Manifesto -->
    <section class="manifesto-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="manifesto-content">
            <div class="manifesto-badge">
              <i class="fas fa-hands-helping"></i>
              <span>{{ t('direitosHumanos.manifestoBadge') }}</span>
            </div>
            <h2 class="manifesto-title">{{ t('direitosHumanos.manifestoTitle') }}</h2>
            <p class="manifesto-text">{{ t('direitosHumanos.manifestoText') }}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção de Princípios -->
    <section class="principles-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <h2>{{ t('direitosHumanos.principlesTitle') }}</h2>
            <div class="title-underline"></div>
          </div>
        </ScrollReveal>

        <div class="principles-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="principle-card">
              <div class="principle-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <div class="principle-content">
                <h3>{{ t('direitosHumanos.principles.equality.title') }}</h3>
                <p>{{ t('direitosHumanos.principles.equality.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="principle-card">
              <div class="principle-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="principle-content">
                <h3>{{ t('direitosHumanos.principles.dignity.title') }}</h3>
                <p>{{ t('direitosHumanos.principles.dignity.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="principle-card">
              <div class="principle-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="principle-content">
                <h3>{{ t('direitosHumanos.principles.inclusion.title') }}</h3>
                <p>{{ t('direitosHumanos.principles.inclusion.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" :delay="500">
            <div class="principle-card">
              <div class="principle-icon">
                <i class="fas fa-heart"></i>
              </div>
              <div class="principle-content">
                <h3>{{ t('direitosHumanos.principles.respect.title') }}</h3>
                <p>{{ t('direitosHumanos.principles.respect.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="600">
            <div class="principle-card">
              <div class="principle-icon">
                <i class="fas fa-gavel"></i>
              </div>
              <div class="principle-content">
                <h3>{{ t('direitosHumanos.principles.justice.title') }}</h3>
                <p>{{ t('direitosHumanos.principles.justice.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Compromissos -->
    <section class="commitments-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title light">
            <h2>{{ t('direitosHumanos.commitmentsTitle') }}</h2>
            <div class="title-underline light"></div>
          </div>
        </ScrollReveal>

        <div class="commitments-grid">
          <ScrollReveal direction="bottom" :delay="200">
            <div class="commitment-item">
              <div class="commitment-circle">
                <i class="fas fa-briefcase"></i>
              </div>
              <h4>{{ t('direitosHumanos.commitments.workplace.title') }}</h4>
              <p>{{ t('direitosHumanos.commitments.workplace.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="commitment-item">
              <div class="commitment-circle">
                <i class="fas fa-user-md"></i>
              </div>
              <h4>{{ t('direitosHumanos.commitments.patients.title') }}</h4>
              <p>{{ t('direitosHumanos.commitments.patients.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="commitment-item">
              <div class="commitment-circle">
                <i class="fas fa-handshake"></i>
              </div>
              <h4>{{ t('direitosHumanos.commitments.suppliers.title') }}</h4>
              <p>{{ t('direitosHumanos.commitments.suppliers.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="500">
            <div class="commitment-item">
              <div class="commitment-circle">
                <i class="fas fa-globe"></i>
              </div>
              <h4>{{ t('direitosHumanos.commitments.community.title') }}</h4>
              <p>{{ t('direitosHumanos.commitments.community.description') }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Ações e Políticas -->
    <section class="actions-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <h2>{{ t('direitosHumanos.actionsTitle') }}</h2>
            <div class="title-underline"></div>
          </div>
        </ScrollReveal>

        <div class="actions-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="action-card featured">
              <div class="action-header">
                <div class="action-icon">
                  <i class="fas fa-clipboard-check"></i>
                </div>
                <h3>{{ t('direitosHumanos.actions.policies.title') }}</h3>
              </div>
              <p>{{ t('direitosHumanos.actions.policies.description') }}</p>
              <div class="action-list">
                <div class="action-item">
                  <i class="fas fa-check"></i>
                  <span>{{ t('direitosHumanos.actions.policies.items.antiDiscrimination') }}</span>
                </div>
                <div class="action-item">
                  <i class="fas fa-check"></i>
                  <span>{{ t('direitosHumanos.actions.policies.items.equalOpportunity') }}</span>
                </div>
                <div class="action-item">
                  <i class="fas fa-check"></i>
                  <span>{{ t('direitosHumanos.actions.policies.items.safeworkplace') }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="action-card">
              <div class="action-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <h4>{{ t('direitosHumanos.actions.training.title') }}</h4>
              <p>{{ t('direitosHumanos.actions.training.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="action-card">
              <div class="action-icon">
                <i class="fas fa-comments"></i>
              </div>
              <h4>{{ t('direitosHumanos.actions.communication.title') }}</h4>
              <p>{{ t('direitosHumanos.actions.communication.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="500">
            <div class="action-card">
              <div class="action-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h4>{{ t('direitosHumanos.actions.monitoring.title') }}</h4>
              <p>{{ t('direitosHumanos.actions.monitoring.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="600">
            <div class="action-card">
              <div class="action-icon">
                <i class="fas fa-phone"></i>
              </div>
              <h4>{{ t('direitosHumanos.actions.reporting.title') }}</h4>
              <p>{{ t('direitosHumanos.actions.reporting.description') }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de CTA Final -->
    <section class="final-cta-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="cta-wrapper">
            <div class="cta-content">
              <h2>{{ t('direitosHumanos.ctaTitle') }}</h2>
              <p>{{ t('direitosHumanos.ctaText') }}</p>
              <div class="cta-buttons">
                <router-link to="/Compliance" class="cta-btn primary">
                  {{ t('direitosHumanos.ctaButtons.compliance') }}
                  <i class="fas fa-arrow-right"></i>
                </router-link>
                <router-link to="/Contato" class="cta-btn secondary">
                  {{ t('direitosHumanos.ctaButtons.contact') }}
                  <i class="fas fa-envelope"></i>
                </router-link>
              </div>
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
import { useHumanRightsTranslation } from '@/composables/useHumanRightsTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useHumanRightsTranslation()
    
    return {
      t,
      currentLanguage
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.direitos-humanos-page {
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
  background-image: url('@/assets/logo-uni.jpeg');
  background-size: 70%;
  background-position: center 40%;
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

/* Seção de Manifesto */
.manifesto-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  text-align: center;
  position: relative;
}

.manifesto-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 0;
}

.manifesto-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.manifesto-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 32px;
  box-shadow: 0 4px 15px rgba(174, 44, 42, 0.3);
  position: relative;
  overflow: hidden;
}

.manifesto-badge::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.7s;
}

.manifesto-badge:hover::after {
  left: 100%;
}

.manifesto-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.manifesto-text {
  font-size: 1.2rem;
  color: #4a5568;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

/* Títulos das Seções */
.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #AE2C2A;
  margin-bottom: 16px;
  letter-spacing: -0.025em;
}

.section-title.light h2 {
  color: white;
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #AE2C2A, #ff5555);
  margin: 0 auto;
  border-radius: 2px;
  background-size: 200% 100%;
  animation: gradientShift 3s ease infinite;
}

.title-underline.light {
  background: linear-gradient(90deg, white, rgba(255, 255, 255, 0.8));
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Seção de Princípios */
.principles-section {
  padding: 100px 0;
  background: white;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
}

.principle-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  padding: 30px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  min-height: 220px;
  transition: all 0.3s ease;
  border-left: 4px solid #AE2C2A;
  position: relative;
  overflow: hidden;
}

.principle-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(174, 44, 42, 0.15);
  border-left-color: #ff5555;
}

.principle-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.7s;
  z-index: 1;
}

.principle-card:hover::before {
  left: 100%;
}

.principle-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.principle-card:hover .principle-icon {
  transform: scale(1.1);
}

.principle-icon i {
  font-size: 1.5rem;
  color: white;
}

.principle-content {
  position: relative;
  z-index: 2;
}

.principle-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 12px;
}

.principle-content p {
  color: #4a5568;
  line-height: 1.6;
  font-size: 1rem;
}

/* Seção de Compromissos */
.commitments-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.commitments-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.commitments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.commitment-item {
  text-align: center;
  padding: 30px 20px;
}

.commitment-circle {
  width: 90px;
  height: 90px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
}

.commitment-circle:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.25);
  animation: pulse 2s infinite;
}

.commitment-circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.commitment-circle:hover::after {
  width: 120px;
  height: 120px;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

.commitment-circle i {
  font-size: 2rem;
  color: white;
  position: relative;
  z-index: 1;
}

.commitment-item h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.commitment-item p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: 1rem;
}

/* Seção de Ações */
.actions-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.actions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: start;
}

.action-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-top: 4px solid #AE2C2A;
  min-height: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.15);
  border-top-color: #ff5555;
}

.action-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.7s;
  z-index: 1;
}

.action-card:hover::before {
  left: 100%;
}

.action-card.featured {
  grid-column: 1;
  grid-row: 1 / 3;
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  border-top: none;
}

.action-card.featured:hover {
  background: linear-gradient(135deg, #ff5555, #AE2C2A);
}

.action-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.action-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.action-card.featured .action-icon {
  background: rgba(255, 255, 255, 0.2);
}

.action-card:not(.featured) .action-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}

.action-card:hover .action-icon {
  transform: scale(1.1);
}

.action-icon i {
  font-size: 1.5rem;
  color: white;
}

.action-card:not(.featured) .action-icon i {
  font-size: 1.3rem;
}

.action-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  position: relative;
  z-index: 2;
}

.action-card h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
}

.action-card p {
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
  font-size: 1rem;
  position: relative;
  z-index: 2;
}

.action-card.featured p {
  color: rgba(255, 255, 255, 0.9);
}

.action-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  position: relative;
  z-index: 2;
}

.action-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.action-item i {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.action-item span {
  font-size: 0.95rem;
}

/* Seção CTA Final */
.final-cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #2d3748, #4a5568);
  color: white;
}

.cta-wrapper {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.025em;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.cta-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.7s;
  z-index: 1;
}

.cta-btn:hover::before {
  left: 100%;
}

.cta-btn > * {
  position: relative;
  z-index: 2;
}

.cta-btn.primary {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
}

.cta-btn.secondary {
  background: white;
  color: #2d3748;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.cta-btn:active {
  transform: translateY(0);
}

.cta-btn i {
  transition: transform 0.3s ease;
}

.cta-btn:hover i {
  transform: translateX(4px);
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
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
  
  .manifesto-section,
  .principles-section,
  .commitments-section,
  .actions-section {
    padding: 80px 0;
  }
  
  .manifesto-title {
    font-size: 2.3rem;
  }
  
  .section-title h2 {
    font-size: 2.2rem;
  }
  
  .principles-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
  
  .commitments-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
  
  .action-card.featured {
    grid-column: 1;
    grid-row: 1;
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

  .parallax-container {
    background-attachment: scroll;
    background-position: center 35% !important;
  }
  
  .manifesto-section {
    padding: 80px 0 60px;
  }
  
  .manifesto-title {
    font-size: 2rem;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
  
  .principles-section,
  .commitments-section,
  .actions-section {
    padding: 80px 0;
  }
  
  .principle-card {
    flex-direction: column;
    text-align: center;
    padding: 25px;
  }
  
  .principle-icon {
    margin: 0 auto;
  }
  
  .commitments-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .action-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
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
  
  .manifesto-title {
    font-size: 1.8rem;
  }
  
  .manifesto-text {
    font-size: 1.1rem;
  }
  
  .section-title h2 {
    font-size: 1.8rem;
  }
  
  .principle-card {
    padding: 20px;
  }
  
  .principle-icon {
    width: 50px;
    height: 50px;
  }
  
  .principle-icon i {
    font-size: 1.3rem;
  }
  
  .principle-content h3 {
    font-size: 1.2rem;
  }
  
  .commitment-circle {
    width: 70px;
    height: 70px;
  }
  
  .commitment-circle i {
    font-size: 1.7rem;
  }
  
  .commitment-item h4 {
    font-size: 1.2rem;
  }
  
  .action-card {
    padding: 20px;
  }
  
  .action-icon {
    width: 45px;
    height: 45px;
  }
  
  .action-icon i {
    font-size: 1.2rem;
  }
  
  .action-card h3 {
    font-size: 1.3rem;
  }
  
  .action-card h4 {
    font-size: 1.1rem;
  }
  
  .title-underline {
    width: 60px;
    height: 3px;
  }
}

@media (max-width: 400px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .manifesto-title {
    font-size: 1.5rem;
  }
  
  .section-title h2 {
    font-size: 1.5rem;
  }
  
  .principle-card,
  .action-card {
    padding: 15px;
  }
  
  .commitment-circle {
    width: 60px;
    height: 60px;
  }
  
  .commitment-circle i {
    font-size: 1.5rem;
  }
  
  .cta-content h2 {
    font-size: 1.8rem;
  }
  
  .cta-btn {
    padding: 14px 24px;
    font-size: 0.9rem;
  }
  
  .manifesto-badge {
    font-size: 0.8rem;
    padding: 10px 20px;
  }
}

@media (max-width: 350px) {
  .container {
    padding: 0 15px;
  }
  
  .manifesto-section {
    padding: 70px 0 50px;
  }
  
  .principles-section,
  .commitments-section,
  .actions-section {
    padding: 70px 0;
  }
  
  .final-cta-section {
    padding: 60px 0;
  }
  
  .commitment-item {
    padding: 20px 15px;
  }
}

/* Estados de foco para acessibilidade */
.cta-btn:focus,
.principle-card:focus,
.commitment-circle:focus {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
}

/* Redução de movimento para usuários sensíveis */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Melhorias de contraste */
@media (prefers-contrast: high) {
  .principle-card {
    border-left-width: 6px;
  }
  
  .action-card {
    border-top-width: 6px;
  }
  
  .title-underline {
    height: 6px;
  }
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}

/* Otimizações de performance */
.principle-icon,
.commitment-circle,
.action-card,
.cta-btn {
  will-change: transform;
}

/* Transições suaves */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Melhorias tipográficas */
.manifesto-title,
.section-title h2,
.cta-content h2 {
  letter-spacing: -0.025em;
}
</style>
