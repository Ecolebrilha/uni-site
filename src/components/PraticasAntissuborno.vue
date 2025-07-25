<template>
  <div class="praticas-antissuborno-page">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('praticasAntissuborno.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('praticasAntissuborno.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Princípios -->
    <section class="principles-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2>{{ t('praticasAntissuborno.principlesTitle') }}</h2>
            <p>{{ t('praticasAntissuborno.principlesSubtitle') }}</p>
          </div>
        </ScrollReveal>

        <div class="principles-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="principle-card">
              <div class="principle-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h3>{{ t('praticasAntissuborno.principles.integrity.title') }}</h3>
              <p>{{ t('praticasAntissuborno.principles.integrity.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="principle-card">
              <div class="principle-icon">
                <i class="fas fa-eye"></i>
              </div>
              <h3>{{ t('praticasAntissuborno.principles.transparency.title') }}</h3>
              <p>{{ t('praticasAntissuborno.principles.transparency.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="principle-card">
              <div class="principle-icon">
                <i class="fas fa-gavel"></i>
              </div>
              <h3>{{ t('praticasAntissuborno.principles.compliance.title') }}</h3>
              <p>{{ t('praticasAntissuborno.principles.compliance.description') }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Políticas Zero Tolerância -->
    <section class="zero-tolerance-section">
      <div class="container">
        <div class="tolerance-content">
          <ScrollReveal direction="left" :delay="200">
            <div class="tolerance-text">
              <div class="tolerance-badge">
                <i class="fas fa-ban"></i>
                <span>{{ t('praticasAntissuborno.zeroTolerance.badge') }}</span>
              </div>
              <h2>{{ t('praticasAntissuborno.zeroTolerance.title') }}</h2>
              <p>{{ t('praticasAntissuborno.zeroTolerance.description') }}</p>

              <div class="tolerance-list">
                <div class="tolerance-item">
                  <i class="fas fa-times-circle"></i>
                  <span>{{ t('praticasAntissuborno.zeroTolerance.items.bribery') }}</span>
                </div>
                <div class="tolerance-item">
                  <i class="fas fa-times-circle"></i>
                  <span>{{ t('praticasAntissuborno.zeroTolerance.items.corruption') }}</span>
                </div>
                <div class="tolerance-item">
                  <i class="fas fa-times-circle"></i>
                  <span>{{ t('praticasAntissuborno.zeroTolerance.items.kickbacks') }}</span>
                </div>
                <div class="tolerance-item">
                  <i class="fas fa-times-circle"></i>
                  <span>{{ t('praticasAntissuborno.zeroTolerance.items.facilitation') }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="tolerance-visual">
              <div class="visual-circle">
                <div class="visual-content">
                  <i class="fas fa-shield-alt"></i>
                  <span>{{ t('praticasAntissuborno.zeroTolerance.visual') }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Procedimentos -->
    <section class="procedures-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2>{{ t('praticasAntissuborno.proceduresTitle') }}</h2>
            <p>{{ t('praticasAntissuborno.proceduresSubtitle') }}</p>
          </div>
        </ScrollReveal>

        <div class="procedures-timeline">
          <ScrollReveal direction="left" :delay="200">
            <div class="timeline-item timeline-left">
              <div class="timeline-marker">
                <span>01</span>
              </div>
              <div class="timeline-content">
                <h3>{{ t('praticasAntissuborno.procedures.detection.title') }}</h3>
                <p>{{ t('praticasAntissuborno.procedures.detection.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="timeline-item timeline-right">
              <div class="timeline-marker">
                <span>02</span>
              </div>
              <div class="timeline-content">
                <h3>{{ t('praticasAntissuborno.procedures.reporting.title') }}</h3>
                <p>{{ t('praticasAntissuborno.procedures.reporting.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" :delay="400">
            <div class="timeline-item timeline-left">
              <div class="timeline-marker">
                <span>03</span>
              </div>
              <div class="timeline-content">
                <h3>{{ t('praticasAntissuborno.procedures.investigation.title') }}</h3>
                <p>{{ t('praticasAntissuborno.procedures.investigation.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="500">
            <div class="timeline-item timeline-right">
              <div class="timeline-marker">
                <span>04</span>
              </div>
              <div class="timeline-content">
                <h3>{{ t('praticasAntissuborno.procedures.action.title') }}</h3>
                <p>{{ t('praticasAntissuborno.procedures.action.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Treinamento -->
    <section class="training-section">
      <div class="container">
        <div class="training-content">
          <ScrollReveal direction="left" :delay="200">
            <div class="training-info">
              <h2>{{ t('praticasAntissuborno.trainingTitle') }}</h2>
              <p>{{ t('praticasAntissuborno.trainingDescription') }}</p>

              <div class="training-features">
                <div class="feature-item">
                  <div class="feature-icon">
                    <i class="fas fa-graduation-cap"></i>
                  </div>
                  <div class="feature-text">
                    <h4>{{ t('praticasAntissuborno.training.regular.title') }}</h4>
                    <p>{{ t('praticasAntissuborno.training.regular.description') }}</p>
                  </div>
                </div>

                <div class="feature-item">
                  <div class="feature-icon">
                    <i class="fas fa-users"></i>
                  </div>
                  <div class="feature-text">
                    <h4>{{ t('praticasAntissuborno.training.comprehensive.title') }}</h4>
                    <p>{{ t('praticasAntissuborno.training.comprehensive.description') }}</p>
                  </div>
                </div>

                <div class="feature-item">
                  <div class="feature-icon">
                    <i class="fas fa-sync-alt"></i>
                  </div>
                  <div class="feature-text">
                    <h4>{{ t('praticasAntissuborno.training.updated.title') }}</h4>
                    <p>{{ t('praticasAntissuborno.training.updated.description') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="training-stats">
              <div class="stat-card">
                <div class="stat-number">100%</div>
                <div class="stat-label">{{ t('praticasAntissuborno.stats.coverage') }}</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">4x</div>
                <div class="stat-label">{{ t('praticasAntissuborno.stats.frequency') }}</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">24h</div>
                <div class="stat-label">{{ t('praticasAntissuborno.stats.response') }}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Canal de Denúncias -->
    <section class="reporting-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="reporting-header">
            <h2>{{ t('praticasAntissuborno.reportingTitle') }}</h2>
            <p>{{ t('praticasAntissuborno.reportingSubtitle') }}</p>
          </div>
        </ScrollReveal>

        <div class="reporting-channels">
          <ScrollReveal direction="left" :delay="200">
            <div class="channel-card">
              <div class="channel-icon">
                <i class="fas fa-phone"></i>
              </div>
              <h3>{{ t('praticasAntissuborno.channels.phone.title') }}</h3>
              <p>{{ t('praticasAntissuborno.channels.phone.description') }}</p>
              <div class="channel-info">
                <span>{{ t('praticasAntissuborno.channels.phone.number') }}</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="channel-card">
              <div class="channel-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <h3>{{ t('praticasAntissuborno.channels.email.title') }}</h3>
              <p>{{ t('praticasAntissuborno.channels.email.description') }}</p>
              <div class="channel-info">
                <a :href="`mailto:${t('praticasAntissuborno.channels.email.address')}`" class="channel-link">
                  {{ t('praticasAntissuborno.channels.email.address') }}
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="channel-card">
              <div class="channel-icon">
                <i class="fas fa-globe"></i>
              </div>
              <h3>{{ t('praticasAntissuborno.channels.online.title') }}</h3>
              <p>{{ t('praticasAntissuborno.channels.online.description') }}</p>
              <div class="channel-info">
                <router-link to="/FazerRelato" class="channel-link">
                  {{ t('praticasAntissuborno.channels.online.link') }}
                </router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="bottom" :delay="500">
          <div class="reporting-guarantee">
            <div class="guarantee-content">
              <i class="fas fa-user-lock"></i>
              <div class="guarantee-text">
                <h4>{{ t('praticasAntissuborno.guarantee.title') }}</h4>
                <p>{{ t('praticasAntissuborno.guarantee.description') }}</p>
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
import { useAntiBriberyTranslation } from '@/composables/useAntiBriberyTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useAntiBriberyTranslation()

    return {
      t,
      currentLanguage
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.praticas-antissuborno-page {
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
  background-image: url('@/assets/header-praticas-antissuborno.jpg');
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

/* Seção de Princípios */
.principles-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%);
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.principles-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(174, 44, 42, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(174, 44, 42, 0.05) 0%, transparent 40%),
    radial-gradient(circle at 40% 80%, rgba(174, 44, 42, 0.03) 0%, transparent 30%);
  pointer-events: none;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
}

.section-header h2,
.reporting-header h2 {
  font-size: 3.2rem;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-header h2::before,
.reporting-header h2::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 2px;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 2px;
}

.section-header p {
  font-size: 1.3rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 400;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  align-items: stretch;
  position: relative;
  z-index: 2;
  grid-auto-rows: 1fr;
}

.principle-card {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  padding: 50px 35px;
  border-radius: 25px;
  text-align: center;
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.08),
    0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.principle-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555, #AE2C2A);
}

.principle-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.02), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.principle-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.15),
    0 10px 30px rgba(174, 44, 42, 0.1);
  border-color: rgba(174, 44, 42, 0.2);
}

.principle-card:hover::after {
  opacity: 1;
}

.principle-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.3);
  transition: all 0.4s ease;
}

.principle-icon::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.principle-card:hover .principle-icon {
  transform: scale(1.1) rotateY(360deg);
  box-shadow: 0 12px 35px rgba(174, 44, 42, 0.4);
}

.principle-card:hover .principle-icon::before {
  opacity: 0.3;
}

.principle-icon i {
  font-size: 2.2rem;
  color: white;
  transition: all 0.4s ease;
  animation: float 3s ease-in-out infinite;
}

.principle-card h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #AE2C2A;
  margin-bottom: 20px;
  flex-shrink: 0;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.principle-card h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 1px;
  transition: width 0.4s ease;
}

.principle-card:hover h3::after {
  width: 60px;
}

.principle-card p {
  color: #666;
  line-height: 1.8;
  flex-grow: 1;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
}

/* Seção Zero Tolerância */
.zero-tolerance-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  padding: 100px 0;
}

.tolerance-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.tolerance-text {
  flex: 1;
}

.tolerance-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 50px;
  margin-bottom: 30px;
  font-weight: 600;
}

.tolerance-badge i {
  font-size: 1.2rem;
}

.tolerance-text h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 25px;
}

.tolerance-text p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.8;
}

.tolerance-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.tolerance-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1rem;
  font-weight: 500;
  width: 100%;
  max-width: 300px;
}

.tolerance-item i {
  color: #ff6b6b;
  font-size: 1.3rem;
}

.tolerance-visual {
  flex: 1;
  display: flex;
  justify-content: center;
}

.visual-circle {
  width: 300px;
  height: 300px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: rotate 20s linear infinite;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.visual-circle::before {
  content: '';
  position: absolute;
  width: 250px;
  height: 250px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all 0.4s ease;
}

.visual-circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  z-index: 1;
}

/* Efeitos de Hover */
.visual-circle:hover {
  transform: scale(1.1);
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow:
    0 0 30px rgba(255, 255, 255, 0.3),
    0 0 60px rgba(255, 255, 255, 0.2),
    0 0 90px rgba(255, 255, 255, 0.1),
    inset 0 0 30px rgba(255, 255, 255, 0.1);
}

.visual-circle:hover::before {
  width: 280px;
  height: 280px;
  border-color: rgba(255, 255, 255, 0.4);
  border-width: 3px;
}

.visual-circle:hover::after {
  width: 100%;
  height: 100%;
}

.visual-circle:hover .visual-content {
  transform: scale(1.1);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
}

.visual-circle:hover .visual-content i {
  transform: scale(1.2) rotateY(360deg);
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
}

.visual-circle:hover .visual-content span {
  letter-spacing: 2px;
  transform: translateY(-5px) scale(0.9);
}

/* Animações adicionais */
@keyframes rotateHover {
  from {
    transform: scale(1.1) rotate(0deg);
  }

  to {
    transform: scale(1.1) rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    box-shadow:
      0 0 30px rgba(255, 255, 255, 0.3),
      0 0 60px rgba(255, 255, 255, 0.2),
      0 0 90px rgba(255, 255, 255, 0.1),
      inset 0 0 30px rgba(255, 255, 255, 0.1);
  }

  100% {
    box-shadow:
      0 0 40px rgba(255, 255, 255, 0.4),
      0 0 80px rgba(255, 255, 255, 0.3),
      0 0 120px rgba(255, 255, 255, 0.2),
      inset 0 0 40px rgba(255, 255, 255, 0.2);
  }
}

.visual-content {
  text-align: center;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.visual-content i {
  font-size: 4rem;
  margin-bottom: 20px;
  display: block;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.visual-content span {
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: block;
}

/* Seção de Procedimentos */
.procedures-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 100px 0;
  position: relative;
}

.procedures-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(174, 44, 42, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(174, 44, 42, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.procedures-timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.procedures-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #AE2C2A, #ff5555, #AE2C2A);
  transform: translateX(-50%);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(174, 44, 42, 0.3);
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  position: relative;
  width: 100%;
}

/* Itens do lado esquerdo */
.timeline-left {
  justify-content: flex-start;
}

.timeline-left .timeline-content {
  margin-right: calc(50% + 40px);
  margin-left: 0;
  text-align: right;
}

.timeline-left .timeline-content::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -15px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid white;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

.timeline-left .timeline-content h3::after {
  right: 0;
}

/* Itens do lado direito */
.timeline-right {
  justify-content: flex-end;
}

.timeline-right .timeline-content {
  margin-left: calc(50% + 40px);
  margin-right: 0;
  text-align: left;
}

.timeline-right .timeline-content::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -15px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-right: 15px solid white;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

.timeline-right .timeline-content h3::after {
  left: 0;
}

.timeline-marker {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  box-shadow: 0 0 0 8px white, 0 5px 20px rgba(174, 44, 42, 0.3);
  transition: all 0.3s ease;
}

.timeline-marker span {
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
}

.timeline-content {
  flex: 1;
  max-width: 400px;
  padding: 35px 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  position: relative;
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.timeline-item:nth-of-type(1) .timeline-content::after,
.timeline-item:nth-of-type(3) .timeline-content::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -15px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid white;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

.timeline-item:nth-of-type(2) .timeline-content::after,
.timeline-item:nth-of-type(4) .timeline-content::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -15px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-right: 15px solid white;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

.timeline-content:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(174, 44, 42, 0.3);
}

.timeline-content h3 {
  font-size: 1.6rem;
  font-weight: 600;
  color: #AE2C2A;
  margin-bottom: 15px;
  position: relative;
}

.timeline-content h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  width: 50px;
  height: 3px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 2px;
}

.timeline-item:nth-of-type(1) .timeline-content h3::after,
.timeline-item:nth-of-type(3) .timeline-content h3::after {
  right: 0;
}

.timeline-item:nth-of-type(2) .timeline-content h3::after,
.timeline-item:nth-of-type(4) .timeline-content h3::after {
  left: 0;
}

.timeline-content p {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
}

/* Seção de Treinamento */
.training-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 100px 0;
  position: relative;
}

.training-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 20%, rgba(174, 44, 42, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 30% 80%, rgba(174, 44, 42, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.training-content {
  display: flex;
  align-items: center;
  gap: 60px;
  position: relative;
  z-index: 2;
}

.training-info {
  flex: 2;
}

.training-info h2 {
  font-size: 3rem;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 25px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.training-info p {
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 40px;
  line-height: 1.8;
  font-weight: 400;
}

.training-features {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.feature-item:hover {
  transform: translateX(15px) translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(174, 44, 42, 0.2);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
  transition: all 0.4s ease;
}

.feature-item:hover .feature-icon {
  transform: scale(1.1) rotate(360deg);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.4);
}

.feature-icon i {
  font-size: 1.5rem;
  color: white;
}

.feature-text h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #AE2C2A;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.feature-text p {
  color: #666;
  font-size: 1rem;
  margin: 0;
  line-height: 1.6;
}

.training-stats {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.stat-card {
  background: white;
  padding: 35px 25px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
  border-top: 5px solid #AE2C2A;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.02), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.stat-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 900;
  color: #AE2C2A;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
}

.stat-label {
  font-size: 1.1rem;
  color: #555;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
}

/* Seção de Canal de Denúncias */
.reporting-section {
  background: #ffffff;
  padding: 100px 0;
  overflow-x: hidden;
  width: 100%;
}

.reporting-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.reporting-header {
  text-align: center;
  margin-bottom: 60px;
  width: 100%;
}

.reporting-header p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.reporting-channels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  width: 100%;
  box-sizing: border-box;
}

.channel-card {
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  overflow: hidden;
}

.channel-card:hover {
  background: white;
  border-color: #AE2C2A;
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.channel-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
}

.channel-icon i {
  font-size: 2rem;
  color: white;
}

.channel-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.channel-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.channel-info {
  padding: 15px;
  background: rgba(174, 44, 42, 0.1);
  border-radius: 10px;
  font-weight: 600;
  color: #AE2C2A;
  word-break: break-word;
  overflow-wrap: break-word;
}

.channel-link {
  color: #AE2C2A;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.channel-link:hover {
  color: #8a2220;
  text-decoration: underline;
}

.reporting-guarantee {
  background: linear-gradient(135deg, #333, #555);
  padding: 40px;
  border-radius: 20px;
  color: white;
}

.guarantee-content {
  display: flex;
  align-items: center;
  gap: 25px;
  max-width: 800px;
  margin: 0 auto;
}

.guarantee-content i {
  font-size: 3rem;
  opacity: 0.8;
}

.guarantee-text h4 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.guarantee-text p {
  opacity: 0.9;
  line-height: 1.6;
  margin: 0;
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 30px;
  }

  .principles-section {
    padding: 100px 0;
  }

  .section-header h2 {
    font-size: 2.8rem;
  }

  .principles-grid {
    gap: 35px;
  }

  .principle-card {
    padding: 45px 30px;
    min-height: 360px;
  }

  .tolerance-content,
  .training-content {
    gap: 40px;
  }

  .procedures-timeline {
    max-width: 1000px;
    padding: 0 30px;
  }

  .timeline-content {
    max-width: 380px;
  }
}

@media (max-width: 992px) {
  .container {
    padding: 0 30px;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .principles-section {
    padding: 80px 0;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .section-header h2 {
    font-size: 2.5rem;
  }

  .section-header p {
    font-size: 1.2rem;
  }

  .principles-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 500px;
    margin: 0 auto;
  }

  .principle-card {
    min-height: 320px;
    padding: 40px 30px;
  }

  .principle-icon {
    width: 75px;
    height: 75px;
  }

  .principle-icon i {
    font-size: 2rem;
  }

  section {
    padding: 60px 0;
  }

  .reporting-channels {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto 60px auto;
  }

  .tolerance-content {
    flex-direction: column;
    text-align: center;
  }

  .tolerance-text h2 {
    font-size: 2.5rem;
  }

  .visual-circle {
    width: 250px;
    height: 250px;
  }

  .visual-circle::before {
    width: 200px;
    height: 200px;
  }

  .timeline-marker:hover {
    transform: scale(1.1);
  }

  .timeline-marker span {
    font-size: 1.1rem;
  }

  .training-content {
    flex-direction: column;
    text-align: center;
    gap: 50px;
  }

  .training-info h2 {
    font-size: 2.5rem;
  }

  .training-info h2::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .training-stats {
    flex-direction: row;
    justify-content: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .stat-card {
    min-width: 220px;
  }

  .procedures-timeline {
    max-width: 900px;
    padding: 0 20px;
  }

  .timeline-content {
    max-width: 350px;
    padding: 30px 25px;
  }

  .timeline-marker {
    width: 60px;
    height: 60px;
  }

  .timeline-left .timeline-content {
    margin-right: calc(50% + 35px);
  }

  .timeline-right .timeline-content {
    margin-left: calc(50% + 35px);
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

  .principles-section {
    padding: 60px 0;
  }

  .section-header h2 {
    font-size: 2.2rem;
  }

  .section-header p {
    font-size: 1.1rem;
  }

  .principle-card {
    padding: 35px 25px;
    min-height: 300px;
  }

  .principle-card h3 {
    font-size: 1.4rem;
  }

  .reporting-header h2 {
    font-size: 2rem;
  }

  .tolerance-text h2 {
    font-size: 2rem;
  }

  .tolerance-list {
    text-align: left;
  }

  .visual-circle {
    width: 200px;
    height: 200px;
  }

  .visual-circle::before {
    width: 160px;
    height: 160px;
  }

  .visual-content i {
    font-size: 3rem;
  }

  .training-section {
    padding: 80px 0;
  }

  .training-info h2 {
    font-size: 2.2rem;
  }

  .training-info p {
    font-size: 1.1rem;
  }

  .training-features {
    gap: 20px;
  }

  .feature-item {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 30px 25px;
  }

  .training-stats {
    flex-direction: column;
    gap: 20px;
  }

  .feature-icon {
    margin: 0 auto;
  }

  .guarantee-content {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .procedures-timeline {
    max-width: 700px;
    padding: 0 15px;
  }

  .timeline-content {
    max-width: 280px;
    padding: 25px 20px;
  }

  .timeline-content h3 {
    font-size: 1.4rem;
  }

  .timeline-marker {
    width: 55px;
    height: 55px;
  }

  .timeline-left .timeline-content {
    margin-right: calc(50% + 30px);
  }

  .timeline-right .timeline-content {
    margin-left: calc(50% + 30px);
  }

  .reporting-section {
    padding: 80px 0;
  }
  
  .reporting-section .container {
    padding: 0 30px;
  }
  
  .reporting-channels {
    max-width: 500px;
  }
  
  .channel-card {
    padding: 35px 25px;
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

  .principles-section {
    padding: 50px 0;
  }

  .section-header {
    margin-bottom: 50px;
  }

  .section-header h2 {
    font-size: 1.9rem;
  }

  .section-header p {
    font-size: 1rem;
  }

  .principle-card {
    padding: 30px 20px;
    min-height: 280px;
    border-radius: 20px;
  }

  .principle-icon {
    width: 65px;
    height: 65px;
    margin-bottom: 25px;
  }

  .principle-icon i {
    font-size: 1.8rem;
  }

  .principle-card h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  .principle-card p {
    font-size: 0.95rem;
  }

  .reporting-header h2 {
    font-size: 1.8rem;
  }

  .tolerance-text h2 {
    font-size: 1.8rem;
  }

  .channel-card {
    padding: 30px 20px;
  }

  .channel-icon {
    width: 60px;
    height: 60px;
  }

  .channel-icon i {
    font-size: 1.8rem;
  }

  .tolerance-badge {
    padding: 8px 15px;
    font-size: 0.9rem;
  }

  .tolerance-item {
    font-size: 1rem;
  }

  .visual-circle {
    width: 180px;
    height: 180px;
  }

  .visual-circle::before {
    width: 140px;
    height: 140px;
  }

  .visual-content i {
    font-size: 2.5rem;
  }

  .visual-content span {
    font-size: 1rem;
  }

  .feature-icon {
    width: 45px;
    height: 45px;
  }

  .feature-icon i {
    font-size: 1.1rem;
  }

  .feature-text h4 {
    font-size: 1.1rem;
  }

  .training-section {
    padding: 60px 0;
  }

  .training-info h2 {
    font-size: 1.9rem;
  }

  .feature-icon {
    width: 50px;
    height: 50px;
  }

  .feature-icon i {
    font-size: 1.3rem;
  }

  .feature-text h4 {
    font-size: 1.1rem;
  }

  .stat-card {
    padding: 25px 20px;
  }

  .stat-number {
    font-size: 2.8rem;
  }

  .stat-label {
    font-size: 0.95rem;
  }

  .reporting-guarantee {
    padding: 30px 20px;
  }

  .guarantee-text h4 {
    font-size: 1.3rem;
  }

  .procedures-timeline {
    padding: 0 15px;
  }

  .procedures-timeline::before {
    left: 30px;
  }

  .timeline-marker {
    left: 10px;
    transform: none;
    width: 50px;
    height: 50px;
  }

  .timeline-marker span {
    font-size: 1rem;
  }

  .timeline-left,
  .timeline-right {
    justify-content: flex-start;
  }

  .timeline-left .timeline-content,
  .timeline-right .timeline-content {
    margin: 0 0 0 55px;
    text-align: left;
    max-width: none;
    padding: 20px 30px;
  }

  .timeline-left .timeline-content::after,
  .timeline-right .timeline-content::after {
    display: none;
  }

  .timeline-left .timeline-content h3::after,
  .timeline-right .timeline-content h3::after {
    left: 0;
  }

  .timeline-content h3 {
    font-size: 1.3rem;
  }

  .channel-card {
    padding: 30px 20px;
    margin: 0;
  }
  
  .reporting-section {
    padding: 60px 0;
  }
  
  .reporting-section .container {
    padding: 0 20px;
  }
  
  .channel-card {
    padding: 30px 20px;
  }
  
  .channel-info {
    padding: 12px;
    font-size: 0.9rem;
  }
}

@media (max-width: 400px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .section-header h2 {
    font-size: 1.7rem;
  }

  .principle-card {
    padding: 25px 15px;
    min-height: 260px;
  }

  .principle-icon {
    width: 60px;
    height: 60px;
  }

  .principle-icon i {
    font-size: 1.6rem;
  }

  .principle-card h3 {
    font-size: 1.2rem;
  }

  .reporting-header h2,
  .training-info h2 {
    font-size: 1.5rem;
  }

  .tolerance-text h2 {
    font-size: 1.5rem;
  }

  .reporting-section .container {
    padding: 0 15px;
  }

  .channel-card,
  .stat-card {
    padding: 25px 15px;
  }

  .timeline-left .timeline-content,
  .timeline-right .timeline-content {
    margin-left: 60px;
    padding: 15px;
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

.principle-icon i,
.channel-icon i,
.feature-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Efeito de pulsação */
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

.principle-icon:hover,
.channel-icon:hover,
.feature-icon:hover {
  animation: pulse 1.5s infinite;
}

.channel-link {
  position: relative;
  overflow: hidden;
}

.channel-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #AE2C2A;
  transition: width 0.3s ease;
}

.channel-link:hover::after {
  width: 100%;
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}

/* Melhorias de acessibilidade */
.channel-link:focus {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
}

/* Efeito de linha animada nos títulos */
.section-header h2,
.reporting-header h2,
.training-section h2 {
  position: relative;
  display: inline-block;
}

.section-header h2::after,
.reporting-header h2::after,
.training-section h2::after {
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

.section-header:hover h2::after,
.reporting-header:hover h2::after,
.training-section:hover h2::after {
  width: 80%;
}

/* Efeito de gradiente nos cards */
.principle-card:hover,
.channel-card:hover,
.stat-card:hover {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
}

/* Animação de entrada para os elementos da timeline */
.timeline-item {
  opacity: 0;
  animation: slideInTimeline 0.6s ease-out forwards;
}

.timeline-item:nth-child(1) {
  animation-delay: 0.2s;
}

.timeline-item:nth-child(2) {
  animation-delay: 0.4s;
}

.timeline-item:nth-child(3) {
  animation-delay: 0.6s;
}

.timeline-item:nth-child(4) {
  animation-delay: 0.8s;
}

@keyframes slideInTimeline {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efeito de hover nos números da timeline */
.timeline-marker:hover {
  transform: translateX(-50%) scale(1.1);
  box-shadow: 0 0 0 12px white, 0 5px 15px rgba(174, 44, 42, 0.3);
}

/* Efeito de brilho nos ícones */
.tolerance-badge i,
.guarantee-content i {
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }

  to {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
  }
}
</style>
