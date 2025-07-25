<template>
  <div class="compliance-page">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('compliance.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('compliance.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Canal Confidencial -->
    <section class="confidential-channel-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="channel-header">
            <div class="alert-icon">
              <i class="fas fa-envelope-open-text"></i>
            </div>
            <h2>{{ t('compliance.confidentialChannel.title') }}</h2>
            <p class="channel-subtitle">{{ t('compliance.confidentialChannel.subtitle') }}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="bottom" :delay="200">
          <div class="channel-actions">
            <div class="action-card primary">
              <div class="action-icon">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <h3>{{ t('compliance.confidentialChannel.makeReport.title') }}</h3>
              <p>{{ t('compliance.confidentialChannel.makeReport.description') }}</p>
              <router-link to="/FazerRelato" class="action-button primary">
                <i class="fas fa-edit"></i>
                {{ t('compliance.confidentialChannel.makeReport.button') }}
              </router-link>
            </div>

            <div class="action-card secondary">
              <div class="action-icon">
                <i class="fas fa-info-circle"></i>
              </div>
              <h3>{{ t('compliance.confidentialChannel.learnMore.title') }}</h3>
              <p>{{ t('compliance.confidentialChannel.learnMore.description') }}</p>
              <router-link to="/CanalConfidencial" class="action-button secondary">
                <i class="fas fa-arrow-right"></i>
                {{ t('compliance.confidentialChannel.learnMore.button') }}
              </router-link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="bottom" :delay="300">
          <div class="channel-footer">
            <div class="security-info">
              <div class="security-features">
                <div class="feature-item">
                  <i class="fas fa-shield-alt"></i>
                  <span>{{ t('compliance.confidentialChannel.features.secure') }}</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-user-secret"></i>
                  <span>{{ t('compliance.confidentialChannel.features.anonymous') }}</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-lock"></i>
                  <span>{{ t('compliance.confidentialChannel.features.confidential') }}</span>
                </div>
              </div>
              <p class="security-guarantee">{{ t('compliance.confidentialChannel.guarantee') }}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção de Visão Geral -->
    <section class="overview-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('compliance.overviewTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('compliance.overviewText') }}
          </p>
        </ScrollReveal>

        <div class="values-container">
          <ScrollReveal direction="left" :delay="200">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h3>{{ t('compliance.values.integrity.title') }}</h3>
              <p>{{ t('compliance.values.integrity.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3>{{ t('compliance.values.transparency.title') }}</h3>
              <p>{{ t('compliance.values.transparency.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <h3>{{ t('compliance.values.compliance.title') }}</h3>
              <p>{{ t('compliance.values.compliance.description') }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Código de Conduta -->
    <section class="conduct-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('compliance.conductTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="conduct-container">
          <ScrollReveal direction="left" :delay="200">
            <div class="conduct-image">
              <img src="@/assets/compliance.jpg" alt="Compliance" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="conduct-content">
              <h3><i class="fas fa-book"></i> {{ t('compliance.conductSectionTitle') }}</h3>
              <p>{{ t('compliance.conductText') }}</p>

              <div class="conduct-links">
                <router-link to="/CondutaEtica" class="conduct-link">
                  <i class="fas fa-check"></i>
                  <span>{{ t('compliance.conductLinks.ethics') }}</span>
                </router-link>

                <router-link to="/ResponsabilidadeSocial" class="conduct-link">
                  <i class="fas fa-globe"></i>
                  <span>{{ t('compliance.conductLinks.socialResponsibility') }}</span>
                </router-link>

                <router-link to="/DireitosHumanos" class="conduct-link">
                  <i class="fas fa-hands-helping"></i>
                  <span>{{ t('compliance.conductLinks.humanRights') }}</span>
                </router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Políticas -->
    <section class="policies-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>{{ t('compliance.policiesTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text light">
            {{ t('compliance.policiesIntro') }}
          </p>
        </ScrollReveal>

        <div class="policies-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="policy-card">
              <div class="policy-icon">
                <i class="fas fa-chalkboard-teacher"></i>
              </div>
              <div class="policy-content">
                <h3>{{ t('compliance.policies.regularTraining.title') }}</h3>
                <p>{{ t('compliance.policies.regularTraining.description') }}</p>
                <router-link to="/Compliance" class="policy-link">{{ t('compliance.learnMore') }} <i
                    class="fas fa-arrow-right"></i></router-link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="policy-card">
              <div class="policy-icon">
                <i class="fas fa-ban"></i>
              </div>
              <div class="policy-content">
                <h3>{{ t('compliance.policies.antiBribery.title') }}</h3>
                <p>{{ t('compliance.policies.antiBribery.description') }}</p>
                <router-link to="/PraticasAntissuborno" class="policy-link">{{ t('compliance.learnMore') }} <i
                    class="fas fa-arrow-right"></i></router-link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="policy-card">
              <div class="policy-icon">
                <i class="fas fa-gavel"></i>
              </div>
              <div class="policy-content">
                <h3>{{ t('compliance.policies.sectorCompliance.title') }}</h3>
                <p>{{ t('compliance.policies.sectorCompliance.description') }}</p>
                <router-link to="/NormasSetoriais" class="policy-link">{{ t('compliance.learnMore') }} <i
                    class="fas fa-arrow-right"></i></router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Ações Corretivas -->
    <section class="corrective-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('compliance.correctiveTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="corrective-container">
          <ScrollReveal direction="left" :delay="200">
            <div class="corrective-content">
              <h3><i class="fas fa-exclamation-triangle"></i> {{ t('compliance.correctiveSectionTitle') }}</h3>
              <p>{{ t('compliance.correctiveText') }}</p>

              <div class="corrective-links">
                <router-link to="/Compliance" class="corrective-link">
                  <i class="fas fa-chalkboard-teacher"></i>
                  <span>{{ t('compliance.correctiveLinks.regularTraining') }}</span>
                </router-link>

                <router-link to="/PraticasAntissuborno" class="corrective-link">
                  <i class="fas fa-ban"></i>
                  <span>{{ t('compliance.correctiveLinks.antiBribery') }}</span>
                </router-link>

                <router-link to="/NormasSetoriais" class="corrective-link">
                  <i class="fas fa-gavel"></i>
                  <span>{{ t('compliance.correctiveLinks.sectorCompliance') }}</span>
                </router-link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="corrective-image">
              <img src="@/assets/acoes-corretivas.png" alt="Ações Corretivas" />
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
import { useComplianceTranslation } from '@/composables/useComplianceTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useComplianceTranslation()

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
.compliance-page {
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
  background-image: url('@/assets/fundo-logo-uni.png');
  background-size: 70%;
  background-position: center 20%;
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

/* Seção de Canal Confidencial */
.confidential-channel-section {
  background: linear-gradient(135deg, #fff5f5, #ffffff);
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  border-top: 4px solid #AE2C2A;
  border-bottom: 4px solid #AE2C2A;
}

.confidential-channel-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 0;
}

.confidential-channel-section .container {
  position: relative;
  z-index: 1;
}

.channel-header {
  text-align: center;
  margin-bottom: 60px;
}

.alert-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #ff4444, #AE2C2A);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  box-shadow: 0 15px 40px rgba(174, 44, 42, 0.3);
  animation: pulse-alert 2s infinite;
}

.alert-icon i {
  font-size: 3rem;
  color: white;
  animation: bounce-alert 2s infinite;
}

@keyframes pulse-alert {
  0% {
    box-shadow: 0 15px 40px rgba(174, 44, 42, 0.3);
  }

  50% {
    box-shadow: 0 15px 40px rgba(174, 44, 42, 0.6);
  }

  100% {
    box-shadow: 0 15px 40px rgba(174, 44, 42, 0.3);
  }
}

@keyframes bounce-alert {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

.channel-header h2 {
  font-size: 3rem;
  color: #AE2C2A;
  margin-bottom: 20px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.channel-subtitle {
  font-size: 1.4rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.channel-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 870px;
  margin: 0 auto 60px;
}

.action-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-card.primary {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
}

.action-card.primary::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }

  50% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }

  100% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
}

.action-card.secondary {
  border: 2px solid #AE2C2A;
}

.action-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 60px rgba(174, 44, 42, 0.2);
}

.action-card.primary:hover {
  transform: translateY(-10px) scale(1.08);
}

.action-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  position: relative;
  z-index: 1;
}

.action-card.primary .action-icon {
  background: rgba(255, 255, 255, 0.2);
}

.action-card.secondary .action-icon {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.action-icon i {
  font-size: 2.2rem;
}

.action-card.primary .action-icon i {
  color: white;
}

.action-card.secondary .action-icon i {
  color: white;
}

.action-card h3 {
  font-size: 1.6rem;
  margin-bottom: 20px;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.action-card.primary h3 {
  color: white;
}

.action-card.secondary h3 {
  color: #AE2C2A;
}

.action-card p {
  margin-bottom: 30px;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.action-card.primary p {
  color: rgba(255, 255, 255, 0.9);
}

.action-card.secondary p {
  color: #666;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 35px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.action-button.primary {
  background: white;
  color: #AE2C2A;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.action-button.primary:hover {
  background: #f8f9fa;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.action-button.secondary {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.3);
}

.action-button.secondary:hover {
  background: linear-gradient(135deg, #ff5555, #ff6666);
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(174, 44, 42, 0.4);
}

.channel-footer {
  text-align: center;
}

.security-info {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.security-features {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  min-width: 120px;
}

.feature-item i {
  font-size: 2rem;
  color: #AE2C2A;
  margin-bottom: 5px;
}

.feature-item span {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
}

.security-guarantee {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
  padding-top: 20px;
  border-top: 1px solid rgba(174, 44, 42, 0.1);
  font-style: italic;
  line-height: 1.6;
}

/* Seção de Visão Geral */
.overview-section {
  background-color: #f9f9f9;
  position: relative;
}

.overview-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ae2c2a' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
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

.intro-text.light {
  color: #ffffff;
}

/* Container de Valores */
.values-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
  align-items: stretch;
}

.value-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(174, 44, 42, 0.08);
  padding: 40px 30px;
  text-align: center;
  transition: all 0.4s ease;
  border: 1px solid rgba(174, 44, 42, 0.1);
  position: relative;
  overflow: hidden;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.value-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.value-card:hover::before {
  transform: scaleX(1);
}

.value-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 60px rgba(174, 44, 42, 0.15);
  border-color: rgba(174, 44, 42, 0.2);
}

.value-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px;
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.3);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.value-card:hover .value-icon {
  transform: scale(1.1);
}

.value-icon i {
  font-size: 2.2rem;
  color: white;
  animation: valueFloat 3s ease-in-out infinite;
}

.value-card h3 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
  flex-shrink: 0;
  position: relative;
}

.value-card h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  transition: width 0.3s ease;
}

.value-card:hover h3::after {
  width: 60%;
}

.value-card p {
  color: #666;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-card:nth-child(1) .value-icon {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
}

.value-card:nth-child(2) .value-icon {
  background: linear-gradient(135deg, #8B2220, #AE2C2A);
}

.value-card:nth-child(3) .value-icon {
  background: linear-gradient(135deg, #D2342C, #FF4444);
}

/* Animação flutuante para os ícones */
@keyframes valueFloat {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
}

.value-card:nth-child(2) .value-icon i {
  animation-delay: 0.5s;
}

.value-card:nth-child(3) .value-icon i {
  animation-delay: 1s;
}

/* Seção de Código de Conduta */
.conduct-section {
  background-color: #ffffff;
}

.conduct-container {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
}

.conduct-image {
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.conduct-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.conduct-image:hover img {
  transform: scale(1.05);
}

.conduct-content {
  flex: 1;
}

.conduct-content h3 {
  font-size: 2rem;
  color: #AE2C2A;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.conduct-content h3 i {
  font-size: 1.8rem;
}

.conduct-content p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.8;
}

.conduct-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.conduct-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background: #f5f5f5;
  border-radius: 10px;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.conduct-link i {
  color: #AE2C2A;
  font-size: 1.2rem;
}

.conduct-link:hover {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  transform: translateX(10px);
}

.conduct-link:hover i {
  color: white;
}

/* Seção de Políticas */
.policies-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.policies-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.policies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  position: relative;
  z-index: 1;
}

.policy-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.policy-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.policy-icon {
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-shrink: 0;
}

.policy-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}

.policy-icon i {
  font-size: 2rem;
  color: white;
}

.policy-content h3 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 15px;
  flex-shrink: 0;
}

.policy-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  font-size: 1.1rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.policy-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;
}

.policy-link:hover {
  color: rgba(255, 255, 255, 0.7);
}

.policy-link i {
  transition: transform 0.3s ease;
}

.policy-link:hover i {
  transform: translateX(5px);
}

/* Seção de Ações Corretivas */
.corrective-section {
  background-color: #ffffff;
}

.corrective-container {
  display: flex;
  align-items: center;
  gap: 50px;
}

.corrective-content {
  flex: 1;
}

.corrective-content h3 {
  font-size: 1.6rem;
  color: #AE2C2A;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.corrective-content h3 i {
  font-size: 1.8rem;
}

.corrective-content p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.8;
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
  margin-top: 20px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

.corrective-image {
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.corrective-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.corrective-image:hover img {
  transform: scale(1.05);
}

.corrective-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.corrective-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background: #f5f5f5;
  border-radius: 10px;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.corrective-link i {
  color: #AE2C2A;
  font-size: 1.2rem;
}

.corrective-link:hover {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  transform: translateX(10px);
}

.corrective-link:hover i {
  color: white;
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

  .values-container {
    flex-direction: column;
    align-items: center;
  }

  .values-container {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 50px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .value-card {
    height: 280px;
    padding: 35px 25px;
  }

  .value-icon {
    width: 80px;
    height: 80px;
  }

  .value-icon i {
    font-size: 2rem;
  }

  .conduct-container {
    flex-direction: column;
  }

  .policies-grid {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 20px;
  }

  .policy-content p {
    min-height: auto;
  }

  .corrective-container {
    flex-direction: column;
  }

  .confidential-channel-section {
    padding: 80px 0;
  }

  .channel-actions {
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 500px;
  }

  .action-card.primary {
    transform: none;
  }

  .channel-header h2 {
    font-size: 2.2rem;
  }

  .channel-subtitle {
    font-size: 1.2rem;
  }

  .alert-icon {
    width: 80px;
    height: 80px;
  }

  .alert-icon i {
    font-size: 2.5rem;
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
    background-position: center 28% !important;
  }

  .section-title h2 {
    font-size: 2rem;
  }

  .intro-text {
    font-size: 1.1rem;
  }

  .value-card {
    height: 260px;
    padding: 30px 20px;
  }

  .value-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }

  .value-icon i {
    font-size: 1.8rem;
  }

  .value-card h3 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  .value-card p {
    font-size: 0.95rem;
  }

  .corrective-content h3 {
    font-size: 1.8rem;
  }

  .banner-container {
    top: 82px;
    padding-top: 0px;
  }

  .confidential-channel-section {
    padding: 60px 0;
  }

  .channel-header {
    margin-bottom: 40px;
  }

  .channel-header h2 {
    font-size: 1.8rem;
  }

  .channel-subtitle {
    font-size: 1.1rem;
  }

  .action-card {
    padding: 30px 25px;
  }

  .security-features {
    gap: 25px;
  }

  .security-info {
    padding: 30px 25px;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 20px;
  }

  .parallax-container {
    background-position: center 35% !important;
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

  .conduct-content p,
  .corrective-content p,
  .value-card p,
  .policy-content p {
    font-size: 1rem;
  }

  .conduct-link {
    padding: 12px 15px;
    font-size: 0.9rem;
  }

  .values-container {
    gap: 25px;
    margin-top: 40px;
  }

  .value-card {
    height: 240px;
    padding: 25px 15px;
  }

  .value-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }

  .value-icon i {
    font-size: 1.6rem;
  }

  .value-card h3 {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }

  .value-card p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .cta-button,
  .document-button {
    padding: 12px 20px;
    font-size: 0.9rem;
  }

  .banner-overlay h1 {
    font-size: 1.5em;
  }

  .channel-header h2 {
    font-size: 1.6rem;
  }

  .channel-subtitle {
    font-size: 1rem;
  }

  .alert-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }

  .alert-icon i {
    font-size: 2rem;
  }

  .action-card {
    padding: 25px 20px;
  }

  .action-card h3 {
    font-size: 1.4rem;
  }

  .action-button {
    padding: 12px 25px;
    font-size: 1rem;
  }

  .security-features {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .feature-item {
    flex-direction: row;
    gap: 15px;
    min-width: auto;
    width: 100%;
    max-width: 200px;
  }

  .feature-item i {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  .security-info {
    padding: 25px 20px;
  }

  .security-guarantee {
    font-size: 1rem;
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
.policy-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Efeito de pulsação para os ícones */
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

.value-icon:hover,
.policy-icon:hover {
  animation: pulse 1.5s infinite;
}

/* Efeito de destaque para links */
.conduct-link,
.corrective-link,
.policy-link,
.cta-button {
  position: relative;
  overflow: hidden;
}

.conduct-link::after,
.corrective-link::after,
.policy-link::after,
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

.conduct-link:hover::after,
.corrective-link:hover::after,
.policy-link:hover::after,
.cta-button:hover::after {
  left: 100%;
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

  .parallax-container {
    background-position: center 38% !important;
  }

  .action-button {
    padding: 12px 20px;
    font-size: 0.9rem;
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

/* Efeito de sombra para os cards */
.value-card,
.policy-card {
  position: relative;
}

.value-card::before,
.policy-card::before {
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

.value-card:hover::before,
.policy-card:hover::before {
  opacity: 1;
}

@media (max-width: 350px) {

  .value-card,
  .policy-card {
    padding: 20px;
  }

  .value-icon,
  .policy-icon {
    width: 50px;
    height: 50px;
  }

  .value-icon i,
  .policy-icon i {
    font-size: 1.5rem;
  }

  .value-card h3,
  .policy-content h3 {
    font-size: 1.2rem;
  }

  .conduct-content h3,
  .corrective-content h3 {
    font-size: 1.5rem;
  }

  .conduct-link,
  .policy-link {
    font-size: 0.8rem;
  }

  .cta-button {
    padding: 10px 15px;
    font-size: 0.8rem;
  }
}

.conduct-image img,
.corrective-image img {
  filter: brightness(0.95);
  transition: filter 0.3s ease, transform 0.5s ease;
}

.conduct-image:hover img,
.corrective-image:hover img {
  filter: brightness(1.05);
}

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

/* Melhorias de acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .value-icon i {
    animation: none;
  }

  .value-card {
    transition: none;
  }
}

/* Efeitos de hover para touch devices */
@media (hover: none) {
  .value-card:hover {
    transform: none;
  }

  .value-card:hover .value-icon {
    transform: none;
  }
}
</style>
