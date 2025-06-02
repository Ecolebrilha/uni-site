<template>
  <div class="normas-setoriais-page">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('normasSetoriais.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('normasSetoriais.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Estatísticas -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <ScrollReveal direction="left" :delay="100">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="stat-number">{{ t('normasSetoriais.stats.certifications.number') }}</div>
              <div class="stat-label">{{ t('normasSetoriais.stats.certifications.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="200">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="stat-number">{{ t('normasSetoriais.stats.compliance.number') }}</div>
              <div class="stat-label">{{ t('normasSetoriais.stats.compliance.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="stat-number">{{ t('normasSetoriais.stats.monitoring.number') }}</div>
              <div class="stat-label">{{ t('normasSetoriais.stats.monitoring.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="stat-number">{{ t('normasSetoriais.stats.training.number') }}</div>
              <div class="stat-label">{{ t('normasSetoriais.stats.training.label') }}</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Conformidade -->
    <section class="compliance-overview-section">
      <div class="container">
        <div class="compliance-content">
          <ScrollReveal direction="left" :delay="200">
            <div class="compliance-text">
              <div class="section-badge">
                <i class="fas fa-award"></i>
                <span>{{ t('normasSetoriais.overview.badge') }}</span>
              </div>
              <h2>{{ t('normasSetoriais.overview.title') }}</h2>
              <p>{{ t('normasSetoriais.overview.description') }}</p>
              
              <div class="compliance-highlights">
                <div class="highlight-item">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ t('normasSetoriais.overview.highlights.regulatory') }}</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ t('normasSetoriais.overview.highlights.quality') }}</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ t('normasSetoriais.overview.highlights.safety') }}</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ t('normasSetoriais.overview.highlights.environmental') }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="compliance-visual">
              <div class="circular-progress">
                <div class="progress-ring">
                  <div class="progress-text">
                    <span class="progress-number">100%</span>
                    <span class="progress-label">{{ t('normasSetoriais.overview.compliance') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Normas Regulatórias -->
    <section class="regulatory-standards-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2>{{ t('normasSetoriais.standards.title') }}</h2>
            <p>{{ t('normasSetoriais.standards.subtitle') }}</p>
          </div>
        </ScrollReveal>

        <div class="standards-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="standard-category">
              <div class="category-header">
                <div class="category-icon">
                  <i class="fas fa-hospital"></i>
                </div>
                <h3>{{ t('normasSetoriais.standards.categories.health.title') }}</h3>
              </div>
              <div class="category-content">
                <div class="standard-item">
                  <span class="standard-code">{{ t('normasSetoriais.standards.categories.health.items.anvisa.code') }}</span>
                  <span class="standard-name">{{ t('normasSetoriais.standards.categories.health.items.anvisa.name') }}</span>
                </div>
                <div class="standard-item">
                  <span class="standard-code">{{ t('normasSetoriais.standards.categories.health.items.rdc.code') }}</span>
                  <span class="standard-name">{{ t('normasSetoriais.standards.categories.health.items.rdc.name') }}</span>
                </div>
                <div class="standard-item">
                  <span class="standard-code">{{ t('normasSetoriais.standards.categories.health.items.bpf.code') }}</span>
                  <span class="standard-name">{{ t('normasSetoriais.standards.categories.health.items.bpf.name') }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="standard-category">
              <div class="category-header">
                <div class="category-icon">
                  <i class="fas fa-award"></i>
                </div>
                <h3>{{ t('normasSetoriais.standards.categories.quality.title') }}</h3>
              </div>
              <div class="category-content">
                <div class="standard-item">
                  <span class="standard-code">{{ t('normasSetoriais.standards.categories.quality.items.iso9001.code') }}</span>
                  <span class="standard-name">{{ t('normasSetoriais.standards.categories.quality.items.iso9001.name') }}</span>
                </div>
                <div class="standard-item">
                  <span class="standard-code">{{ t('normasSetoriais.standards.categories.quality.items.iso13485.code') }}</span>
                  <span class="standard-name">{{ t('normasSetoriais.standards.categories.quality.items.iso13485.name') }}</span>
                </div>
                <div class="standard-item">
                  <span class="standard-code">{{ t('normasSetoriais.standards.categories.quality.items.iso15378.code') }}</span>
                  <span class="standard-name">{{ t('normasSetoriais.standards.categories.quality.items.iso15378.name') }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="standard-category">
              <div class="category-header">
                <div class="category-icon">
                  <i class="fas fa-leaf"></i>
                </div>
                <h3>{{ t('normasSetoriais.standards.categories.environmental.title') }}</h3>
              </div>
              <div class="category-content">
                <div class="standard-item">
                  <span class="standard-code">{{ t('normasSetoriais.standards.categories.environmental.items.iso14001.code') }}</span>
                  <span class="standard-name">{{ t('normasSetoriais.standards.categories.environmental.items.iso14001.name') }}</span>
                </div>
                <div class="standard-item">
                  <span class="standard-code">{{ t('normasSetoriais.standards.categories.environmental.items.conama.code') }}</span>
                  <span class="standard-name">{{ t('normasSetoriais.standards.categories.environmental.items.conama.name') }}</span>
                </div>
                <div class="standard-item">
                  <span class="standard-code">{{ t('normasSetoriais.standards.categories.environmental.items.pnrs.code') }}</span>
                  <span class="standard-name">{{ t('normasSetoriais.standards.categories.environmental.items.pnrs.name') }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Processo de Auditoria -->
    <section class="audit-process-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2>{{ t('normasSetoriais.audit.title') }}</h2>
            <p>{{ t('normasSetoriais.audit.subtitle') }}</p>
          </div>
        </ScrollReveal>

        <div class="audit-flow">
          <ScrollReveal direction="left" :delay="200">
            <div class="audit-step">
              <div class="step-number">01</div>
              <div class="step-content">
                <div class="step-icon">
                  <i class="fas fa-search"></i>
                </div>
                <h4>{{ t('normasSetoriais.audit.steps.planning.title') }}</h4>
                <p>{{ t('normasSetoriais.audit.steps.planning.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <div class="flow-arrow">
            <i class="fas fa-arrow-right"></i>
          </div>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="audit-step">
              <div class="step-number">02</div>
              <div class="step-content">
                <div class="step-icon">
                  <i class="fas fa-clipboard-check"></i>
                </div>
                <h4>{{ t('normasSetoriais.audit.steps.execution.title') }}</h4>
                <p>{{ t('normasSetoriais.audit.steps.execution.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <div class="flow-arrow">
            <i class="fas fa-arrow-right"></i>
          </div>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="audit-step">
              <div class="step-number">03</div>
              <div class="step-content">
                <div class="step-icon">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h4>{{ t('normasSetoriais.audit.steps.analysis.title') }}</h4>
                <p>{{ t('normasSetoriais.audit.steps.analysis.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <div class="flow-arrow">
            <i class="fas fa-arrow-right"></i>
          </div>

          <ScrollReveal direction="right" :delay="500">
            <div class="audit-step">
              <div class="step-number">04</div>
              <div class="step-content">
                <div class="step-icon">
                  <i class="fas fa-cogs"></i>
                </div>
                <h4>{{ t('normasSetoriais.audit.steps.improvement.title') }}</h4>
                <p>{{ t('normasSetoriais.audit.steps.improvement.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Monitoramento Contínuo -->
    <section class="monitoring-section">
      <div class="container">
        <div class="monitoring-content">
          <ScrollReveal direction="left" :delay="200">
            <div class="monitoring-info">
              <h2>{{ t('normasSetoriais.monitoring.title') }}</h2>
              <p>{{ t('normasSetoriais.monitoring.description') }}</p>
              
              <div class="monitoring-features">
                <div class="feature-grid">
                  <div class="feature-box">
                    <div class="feature-icon">
                      <i class="fas fa-eye"></i>
                    </div>
                    <div class="feature-text">
                      <h4>{{ t('normasSetoriais.monitoring.features.realtime.title') }}</h4>
                      <p>{{ t('normasSetoriais.monitoring.features.realtime.description') }}</p>
                    </div>
                  </div>

                  <div class="feature-box">
                    <div class="feature-icon">
                      <i class="fas fa-bell"></i>
                    </div>
                    <div class="feature-text">
                      <h4>{{ t('normasSetoriais.monitoring.features.alerts.title') }}</h4>
                      <p>{{ t('normasSetoriais.monitoring.features.alerts.description') }}</p>
                    </div>
                  </div>

                  <div class="feature-box">
                    <div class="feature-icon">
                      <i class="fas fa-file-alt"></i>
                    </div>
                    <div class="feature-text">
                      <h4>{{ t('normasSetoriais.monitoring.features.reports.title') }}</h4>
                      <p>{{ t('normasSetoriais.monitoring.features.reports.description') }}</p>
                    </div>
                  </div>

                  <div class="feature-box">
                    <div class="feature-icon">
                      <i class="fas fa-sync-alt"></i>
                    </div>
                    <div class="feature-text">
                      <h4>{{ t('normasSetoriais.monitoring.features.updates.title') }}</h4>
                      <p>{{ t('normasSetoriais.monitoring.features.updates.description') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="monitoring-dashboard">
              <div class="dashboard-header">
                <h3>{{ t('normasSetoriais.monitoring.dashboard.title') }}</h3>
                <div class="status-indicator">
                  <span class="status-dot active"></span>
                  <span>{{ t('normasSetoriais.monitoring.dashboard.status') }}</span>
                </div>
              </div>
              
              <div class="dashboard-metrics">
                <div class="metric-item">
                  <div class="metric-value">98.7%</div>
                  <div class="metric-label">{{ t('normasSetoriais.monitoring.dashboard.metrics.compliance') }}</div>
                  <div class="metric-trend up">
                    <i class="fas fa-arrow-up"></i>
                    <span>+2.3%</span>
                  </div>
                </div>
                
                <div class="metric-item">
                  <div class="metric-value">24/7</div>
                  <div class="metric-label">{{ t('normasSetoriais.monitoring.dashboard.metrics.monitoring') }}</div>
                  <div class="metric-trend stable">
                    <i class="fas fa-minus"></i>
                    <span>{{ t('normasSetoriais.monitoring.dashboard.metrics.stable') }}</span>
                  </div>
                </div>
                
                <div class="metric-item">
                  <div class="metric-value">2h</div>
                  <div class="metric-label">{{ t('normasSetoriais.monitoring.dashboard.metrics.response') }}</div>
                  <div class="metric-trend up">
                    <i class="fas fa-arrow-up"></i>
                    <span>-15%</span>
                  </div>
                </div>
              </div>
              
              <div class="dashboard-chart">
                <div class="chart-placeholder">
                  <i class="fas fa-chart-area"></i>
                  <span>{{ t('normasSetoriais.monitoring.dashboard.chart') }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Certificações -->
    <section class="certifications-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2>{{ t('normasSetoriais.certifications.title') }}</h2>
            <p>{{ t('normasSetoriais.certifications.subtitle') }}</p>
          </div>
        </ScrollReveal>

        <div class="certifications-showcase">
          <ScrollReveal direction="left" :delay="200">
            <div class="certification-card featured">
              <div class="cert-badge">
                <i class="fas fa-star"></i>
                <span>{{ t('normasSetoriais.certifications.featured') }}</span>
              </div>
              <div class="cert-logo">
                <i class="fas fa-certificate"></i>
              </div>
              <h3>{{ t('normasSetoriais.certifications.main.title') }}</h3>
              <p>{{ t('normasSetoriais.certifications.main.description') }}</p>
              <div class="cert-details">
                <div class="cert-detail">
                  <span class="detail-label">{{ t('normasSetoriais.certifications.main.issued') }}</span>
                  <span class="detail-value">{{ t('normasSetoriais.certifications.main.issuedDate') }}</span>
                </div>
                <div class="cert-detail">
                  <span class="detail-label">{{ t('normasSetoriais.certifications.main.valid') }}</span>
                  <span class="detail-value">{{ t('normasSetoriais.certifications.main.validUntil') }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div class="certifications-grid">
            <ScrollReveal direction="bottom" :delay="300">
              <div class="certification-item">
                <div class="cert-icon">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h4>{{ t('normasSetoriais.certifications.items.gmp.title') }}</h4>
                <p>{{ t('normasSetoriais.certifications.items.gmp.description') }}</p>
                <div class="cert-status valid">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ t('normasSetoriais.certifications.status.valid') }}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="bottom" :delay="400">
              <div class="certification-item">
                <div class="cert-icon">
                  <i class="fas fa-leaf"></i>
                </div>
                <h4>{{ t('normasSetoriais.certifications.items.environmental.title') }}</h4>
                <p>{{ t('normasSetoriais.certifications.items.environmental.description') }}</p>
                <div class="cert-status valid">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ t('normasSetoriais.certifications.status.valid') }}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="bottom" :delay="500">
              <div class="certification-item">
                <div class="cert-icon">
                  <i class="fas fa-users"></i>
                </div>
                <h4>{{ t('normasSetoriais.certifications.items.safety.title') }}</h4>
                <p>{{ t('normasSetoriais.certifications.items.safety.description') }}</p>
                <div class="cert-status valid">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ t('normasSetoriais.certifications.status.valid') }}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="bottom" :delay="600">
              <div class="certification-item">
                <div class="cert-icon">
                  <i class="fas fa-lock"></i>
                </div>
                <h4>{{ t('normasSetoriais.certifications.items.security.title') }}</h4>
                <p>{{ t('normasSetoriais.certifications.items.security.description') }}</p>
                <div class="cert-status valid">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ t('normasSetoriais.certifications.status.valid') }}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Contato -->
    <section class="contact-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="contact-content">
            <h2>{{ t('normasSetoriais.contact.title') }}</h2>
            <p>{{ t('normasSetoriais.contact.description') }}</p>
            <router-link to="/Contato" class="contact-button">
              <i class="fas fa-envelope"></i>
              {{ t('normasSetoriais.contact.button') }}
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
import { useSectorStandardsTranslation } from '@/composables/useSectorStandardsTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useSectorStandardsTranslation()
    
    return {
      t,
      currentLanguage
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.normas-setoriais-page {
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

/* Hero Section */
.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/header-normas-setoriais.jpg');
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
  background: linear-gradient(rgba(174, 44, 42, 0.8), rgba(0, 0, 0, 0.6));
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

/* Seção de Estatísticas */
.stats-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  padding: 60px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.stat-item {
  text-align: center;
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.stat-icon i {
  font-size: 1.8rem;
  color: white;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
  display: block;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 500;
}

/* Seção de Visão Geral da Conformidade */
.compliance-overview-section {
  background: #f8f9fa;
  padding: 100px 0;
}

.compliance-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.compliance-text {
  flex: 1;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 600;
  margin-bottom: 30px;
}

.compliance-text h2 {
  font-size: 2.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 25px;
}

.compliance-text p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.8;
}

.compliance-highlights {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
}

.highlight-item i {
  color: #AE2C2A;
  font-size: 1.2rem;
}

.compliance-visual {
  flex: 1;
  display: flex;
  justify-content: center;
}

.circular-progress {
  position: relative;
  width: 300px;
  height: 300px;
}

.progress-ring {
  width: 100%;
  height: 100%;
  border: 8px solid #e9ecef;
  border-top: 8px solid #AE2C2A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotate 3s linear infinite;
  position: relative;
}

.progress-ring::before {
  content: '';
  position: absolute;
  width: 250px;
  height: 250px;
  border: 4px solid #dee2e6;
  border-top: 4px solid #ff5555;
  border-radius: 50%;
  animation: rotate 2s linear infinite reverse;
}

.progress-text {
  text-align: center;
  z-index: 2;
}

.progress-number {
  font-size: 3rem;
  font-weight: 800;
  color: #AE2C2A;
  display: block;
}

.progress-label {
  font-size: 1.1rem;
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Seção de Normas Regulatórias */
.regulatory-standards-section {
  background: white;
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.section-header p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.standards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.standard-category {
  background: #f8f9fa;
  border-radius: 20px;
  padding: 40px 30px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.standard-category:hover {
  transform: translateY(-10px);
  border-color: #AE2C2A;
  box-shadow: 0 20px 40px rgba(174, 44, 42, 0.1);
}

.category-header {
  text-align: center;
  margin-bottom: 30px;
}

.category-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.category-icon i {
  font-size: 2.2rem;
  color: white;
}

.category-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.category-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.standard-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.standard-item:hover {
  background: #AE2C2A;
  color: white;
  transform: translateX(10px);
}

.standard-code {
  background: #AE2C2A;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  min-width: 80px;
  text-align: center;
}

.standard-item:hover .standard-code {
  background: white;
  color: #AE2C2A;
}

.standard-name {
  font-weight: 500;
  flex: 1;
}

/* Seção de Processo de Auditoria */
.audit-process-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 100px 0;
}

.audit-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 60px;
}

.audit-step {
  flex: 1;
  text-align: center;
  position: relative;
}

.step-number {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: #AE2C2A;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  z-index: 2;
}

.step-content {
  background: white;
  padding: 50px 30px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.step-content:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.step-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.step-icon i {
  font-size: 1.5rem;
  color: white;
}

.step-content h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.step-content p {
  color: #666;
  line-height: 1.6;
}

.flow-arrow {
  color: #AE2C2A;
  font-size: 1.5rem;
  margin: 0 10px;
}

/* Seção de Monitoramento */
.monitoring-section {
  background: white;
  padding: 100px 0;
}

.monitoring-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.monitoring-info {
  flex: 1;
}

.monitoring-info h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 25px;
}

.monitoring-info p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.8;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.feature-box {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.feature-box:hover {
  background: #AE2C2A;
  color: white;
  transform: translateY(-5px);
}

.feature-icon {
  width: 50px;
  height: 50px;
  background: #AE2C2A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-box:hover .feature-icon {
  background: white;
}

.feature-icon i {
  font-size: 1.2rem;
  color: white;
}

.feature-box:hover .feature-icon i {
  color: #AE2C2A;
}

.feature-text h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.feature-text p {
  font-size: 0.95rem;
  opacity: 0.8;
  margin: 0;
}

.monitoring-dashboard {
  flex: 1;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 30px;
  border: 2px solid #e9ecef;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e9ecef;
}

.dashboard-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #28a745;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #dc3545;
}

.status-dot.active {
  background: #28a745;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(40, 167, 69, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
  }
}

.dashboard-metrics {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.metric-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 10px;
  border-left: 4px solid #AE2C2A;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.metric-label {
  font-size: 0.9rem;
  color: #666;
  margin: 0 auto;
}

.metric-trend {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  font-weight: 600;
}

.metric-trend.up {
  color: #28a745;
}

.metric-trend.stable {
  color: #6c757d;
}

.dashboard-chart {
  background: white;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  border: 2px dashed #dee2e6;
}

.chart-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: #6c757d;
}

.chart-placeholder i {
  font-size: 3rem;
  opacity: 0.5;
}

/* Seção de Certificações */
.certifications-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 100px 0;
}

.certifications-showcase {
  display: flex;
  gap: 40px;
  margin-top: 60px;
}

.certification-card {
  flex: 1;
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
}

.certification-card.featured {
  border: 3px solid #AE2C2A;
}

.certification-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.cert-badge {
  position: absolute;
  top: -15px;
  right: 20px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}

.cert-logo {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
}

.cert-logo i {
  font-size: 2.5rem;
  color: white;
}

.certification-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.certification-card p {
  color: #666;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.6;
}

.cert-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cert-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
}

.detail-label {
  font-weight: 600;
  color: #333;
}

.detail-value {
  color: #AE2C2A;
  font-weight: 600;
}

.certifications-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.certification-item {
  background: white;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.certification-item:hover {
  border-color: #AE2C2A;
  transform: translateY(-5px);
}

.cert-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
}

.cert-icon i {
  font-size: 1.3rem;
  color: white;
}

.certification-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.certification-item p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.cert-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
}

.cert-status.valid {
  color: #28a745;
}

/* Seção de Contato */
.contact-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  text-align: center;
  padding: 80px 0;
}

.contact-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.contact-content p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 15px 35px;
  background: white;
  color: #AE2C2A;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.contact-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(174, 44, 42, 0.1), transparent);
  transition: left 0.7s;
}

.contact-button:hover::after {
  left: 100%;
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 30px;
  }
  
  .compliance-content,
  .monitoring-content {
    gap: 40px;
  }
  
  .certifications-showcase {
    gap: 30px;
  }
}

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
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  .standards-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
  
  .compliance-content,
  .monitoring-content {
    flex-direction: column;
    text-align: center;
  }
  
  .audit-flow {
    flex-direction: column;
    gap: 40px;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
    margin: 0;
  }
  
  .certifications-showcase {
    flex-direction: column;
  }
  
  .certifications-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  
  .feature-grid {
    grid-template-columns: repeat(1, 1fr);
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
  
  .section-header h2,
  .compliance-text h2,
  .monitoring-info h2,
  .contact-content h2 {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
  
  .stat-item {
    padding: 25px 15px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .compliance-text,
  .monitoring-info {
    padding: 0 20px;
  }
  
  .circular-progress {
    width: 250px;
    height: 250px;
  }
  
  .progress-number {
    font-size: 2.5rem;
  }
  
  .standard-category,
  .certification-card,
  .certification-item {
    padding: 30px 20px;
  }
  
  .dashboard-metrics {
    gap: 15px;
  }
  
  .metric-item {
    flex-direction: column;
    text-align: center;
    gap: 10px;
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
  
  .section-header h2,
  .compliance-text h2,
  .monitoring-info h2,
  .contact-content h2 {
    font-size: 1.8rem;
  }
  
  .section-header p,
  .compliance-text p,
  .monitoring-info p,
  .contact-content p {
    font-size: 1rem;
  }
  
  .stat-number {
    font-size: 1.8rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
  
  .category-icon,
  .cert-logo {
    width: 60px;
    height: 60px;
  }
  
  .category-icon i,
  .cert-logo i {
    font-size: 1.8rem;
  }
  
  .step-content {
    padding: 40px 20px 25px;
  }
  
  .step-content h4 {
    font-size: 1.1rem;
  }
  
  .step-content p {
    font-size: 0.9rem;
  }
  
  .circular-progress {
    width: 200px;
    height: 200px;
  }
  
  .progress-number {
    font-size: 2rem;
  }
  
  .progress-label {
    font-size: 0.9rem;
  }
  
  .monitoring-dashboard {
    padding: 20px;
  }
  
  .dashboard-header {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .contact-button {
    padding: 12px 25px;
    font-size: 0.9rem;
  }
}

@media (max-width: 400px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .section-header h2,
  .compliance-text h2,
  .monitoring-info h2,
  .contact-content h2 {
    font-size: 1.5rem;
  }
  
  .stat-item {
    padding: 20px 15px;
  }
  
  .standard-category,
  .certification-card,
  .certification-item {
    padding: 25px 15px;
  }
  
  .step-content {
    padding: 35px 15px 20px;
  }
  
  .circular-progress {
    width: 180px;
    height: 180px;
  }
  
  .progress-number {
    font-size: 1.8rem;
  }
}

/* Animações adicionais */
@keyframes float {
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

.stat-icon i,
.category-icon i,
.step-icon i,
.feature-icon i,
.cert-icon i,
.cert-logo i {
  animation: float 3s ease-in-out infinite;
}

/* Efeito de hover suave */
.stat-item:hover .stat-icon,
.standard-category:hover .category-icon,
.audit-step:hover .step-icon,
.certification-item:hover .cert-icon {
  transform: scale(1.1);
}

/* Transições suaves */
.stat-icon,
.category-icon,
.step-icon,
.feature-icon,
.cert-icon,
.cert-logo {
  transition: transform 0.3s ease;
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}

/* Melhorias de acessibilidade */
.contact-button:focus {
  outline: 2px solid white;
  outline-offset: 2px;
}

/* Efeito de linha animada nos títulos */
.section-header h2,
.compliance-text h2,
.monitoring-info h2 {
  position: relative;
  display: inline-block;
}

.section-header h2::after,
.compliance-text h2::after,
.monitoring-info h2::after {
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

.compliance-text h2::after,
.monitoring-info h2::after {
  left: 0;
  transform: none;
}

.section-header:hover h2::after,
.compliance-text:hover h2::after,
.monitoring-info:hover h2::after {
  width: 80%;
}

/* Efeito de destaque para cards */
.standard-category,
.certification-card,
.certification-item,
.audit-step .step-content {
  position: relative;
  overflow: hidden;
}

.standard-category::before,
.certification-card::before,
.certification-item::before,
.audit-step .step-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(174, 44, 42, 0.05), transparent);
  transition: left 0.7s;
  z-index: 1;
}

.standard-category:hover::before,
.certification-card:hover::before,
.certification-item:hover::before,
.audit-step:hover .step-content::before {
  left: 100%;
}

/* Garantir que o conteúdo fique acima do efeito */
.standard-category > *,
.certification-card > *,
.certification-item > *,
.step-content > * {
  position: relative;
  z-index: 2;
}
</style>
