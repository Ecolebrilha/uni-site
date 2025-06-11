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
    <ScrollReveal direction="bottom" :delay="100">
      <div class="section-header">
        <div class="section-badge">
          <i class="fas fa-chart-line"></i>
          <span>{{ t('normasSetoriais.monitoring.badge') }}</span>
        </div>
        <h2>{{ t('normasSetoriais.monitoring.title') }}</h2>
        <p>{{ t('normasSetoriais.monitoring.description') }}</p>
      </div>
    </ScrollReveal>

    <ScrollReveal direction="bottom" :delay="200">
      <div class="monitoring-info">
        <div class="info-overview">
          <h3>{{ t('normasSetoriais.monitoring.overview.title') }}</h3>
          <p>{{ t('normasSetoriais.monitoring.overview.description') }}</p>
        </div>
        
        <div class="monitoring-features">
          <div class="feature-item">
            <div class="feature-icon">
              <i class="fas fa-eye"></i>
            </div>
            <div class="feature-text">
              <h4>{{ t('normasSetoriais.monitoring.features.realtime.title') }}</h4>
              <p>{{ t('normasSetoriais.monitoring.features.realtime.description') }}</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <i class="fas fa-bell"></i>
            </div>
            <div class="feature-text">
              <h4>{{ t('normasSetoriais.monitoring.features.alerts.title') }}</h4>
              <p>{{ t('normasSetoriais.monitoring.features.alerts.description') }}</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <i class="fas fa-file-alt"></i>
            </div>
            <div class="feature-text">
              <h4>{{ t('normasSetoriais.monitoring.features.reports.title') }}</h4>
              <p>{{ t('normasSetoriais.monitoring.features.reports.description') }}</p>
            </div>
          </div>

          <div class="feature-item">
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
    </ScrollReveal>

    <ScrollReveal direction="bottom" :delay="300">
      <div class="monitoring-dashboard">
        <div class="dashboard-header">
          <div class="dashboard-title">
            <i class="fas fa-tachometer-alt"></i>
            <h3>{{ t('normasSetoriais.monitoring.dashboard.title') }}</h3>
          </div>
          <div class="status-indicator">
            <span class="status-dot active"></span>
            <span class="status-text">{{ t('normasSetoriais.monitoring.dashboard.status') }}</span>
          </div>
        </div>
        
        <div class="dashboard-content">
          <div class="dashboard-metrics">
            <div class="metric-item primary">
              <div class="metric-header">
                <div class="metric-icon">
                  <i class="fas fa-shield-check"></i>
                </div>
                <div class="metric-trend up">
                  <i class="fas fa-arrow-up"></i>
                  <span>+2.3%</span>
                </div>
              </div>
              <div class="metric-value">98.7%</div>
              <div class="metric-label">{{ t('normasSetoriais.monitoring.dashboard.metrics.compliance') }}</div>
            </div>
            
            <div class="metric-item secondary">
              <div class="metric-header">
                <div class="metric-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="metric-trend stable">
                  <i class="fas fa-minus"></i>
                  <span>{{ t('normasSetoriais.monitoring.dashboard.metrics.stable') }}</span>
                </div>
              </div>
              <div class="metric-value">24/7</div>
              <div class="metric-label">{{ t('normasSetoriais.monitoring.dashboard.metrics.monitoring') }}</div>
            </div>
            
            <div class="metric-item tertiary">
              <div class="metric-header">
                <div class="metric-icon">
                  <i class="fas fa-stopwatch"></i>
                </div>
                <div class="metric-trend up">
                  <i class="fas fa-arrow-down"></i>
                  <span>-15%</span>
                </div>
              </div>
              <div class="metric-value">2h</div>
              <div class="metric-label">{{ t('normasSetoriais.monitoring.dashboard.metrics.response') }}</div>
            </div>
          </div>
          
          <div class="dashboard-chart">
            <div class="chart-header">
              <h4>{{ t('normasSetoriais.monitoring.dashboard.chart.title') }}</h4>
            </div>
            <div class="chart-placeholder">
              <div class="chart-visual">
                <i class="fas fa-chart-area"></i>
                <span>{{ t('normasSetoriais.monitoring.dashboard.chart.description') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
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
  background-image: url('@/assets/header-normas-setoriais2.jpg');
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
  padding: 80px 0;
  position: relative;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E") repeat;
  pointer-events: none;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  position: relative;
  z-index: 2;
}

.stat-item {
  text-align: center;
  padding: 40px 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.stat-icon {
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  transition: all 0.4s ease;
}

.stat-item:hover .stat-icon {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.3);
}

.stat-icon i {
  font-size: 2rem;
  color: white;
}

.stat-number {
  font-size: 2.8rem;
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
/* Seção de Conformidade */
.compliance-overview-section {
  background: white;
  padding: 120px 0;
  position: relative;
}

.compliance-overview-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 30%, rgba(174, 44, 42, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.compliance-content {
  display: flex;
  align-items: center;
  gap: 80px;
  position: relative;
  z-index: 2;
}

.compliance-text {
  flex: 1;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(255, 85, 85, 0.1));
  padding: 12px 25px;
  border-radius: 50px;
  margin-bottom: 30px;
  font-weight: 600;
  color: #AE2C2A;
  border: 2px solid rgba(174, 44, 42, 0.2);
  position: relative;
  overflow: hidden;
}

.section-badge i {
  font-size: 1.2rem;
}

.compliance-text h2 {
  font-size: 3rem;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 25px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.compliance-text h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 2px;
}

.compliance-text p {
  font-size: 1.3rem;
  color: #555;
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
  font-weight: 600;
  color: #333;
  padding: 15px;
  background: linear-gradient(145deg, #f8f9fa, #ffffff);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-left: 4px solid #AE2C2A;
}

.highlight-item:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.highlight-item i {
  color: #28a745;
  font-size: 1.3rem;
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
  border-radius: 50%;
  background: conic-gradient(#AE2C2A 0deg 360deg, #e9ecef 360deg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 20px 50px rgba(174, 44, 42, 0.2);
}

.progress-ring::before {
  content: '';
  position: absolute;
  width: 250px;
  height: 250px;
  background: white;
  border-radius: 50%;
  box-shadow: inset 0 10px 30px rgba(0, 0, 0, 0.1);
}

.progress-text {
  position: relative;
  z-index: 2;
  text-align: center;
}

.progress-number {
  font-size: 3.5rem;
  font-weight: 800;
  color: #AE2C2A;
  display: block;
  margin-bottom: 10px;
}

.progress-label {
  font-size: 1.2rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Seção de Normas Regulatórias */
.regulatory-standards-section {
  background: white;
  padding: 120px 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header h2 {
  font-size: 3rem;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 20px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 2px;
}

.section-header p {
  font-size: 1.3rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

.standards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  align-items: stretch;
}

.standard-category {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 25px;
  padding: 40px 30px;
  transition: all 0.4s ease;
  border: 2px solid transparent;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.standard-category:hover {
  transform: translateY(-10px);
  border-color: #AE2C2A;
  box-shadow: 0 25px 50px rgba(174, 44, 42, 0.15);
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
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.3);
  transition: all 0.4s ease;
}

.standard-category:hover .category-icon {
  transform: scale(1.1) rotateY(360deg);
}

.category-icon i {
  font-size: 2.2rem;
  color: white;
}

.category-header h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #AE2C2A;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.category-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
}

.standard-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px;
  background: white;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.standard-item:hover {
  background: #AE2C2A;
  color: white;
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
}

.standard-code {
  background: #AE2C2A;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  min-width: 80px;
  text-align: center;
  transition: all 0.3s ease;
}

.standard-item:hover .standard-code {
  background: white;
  color: #AE2C2A;
}

.standard-name {
  font-weight: 600;
  flex: 1;
}

/* Seção de Processo de Auditoria */
.audit-process-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 120px 0;
  position: relative;
}

.audit-process-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 30%, rgba(174, 44, 42, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.audit-flow {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  z-index: 2;
}

.audit-step {
  flex: 1;
  background: white;
  border-radius: 25px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.audit-step::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.audit-step:hover {
  transform: translateY(-15px);
  border-color: #AE2C2A;
  box-shadow: 0 25px 50px rgba(174, 44, 42, 0.2);
}

.step-number {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 10px 25px rgba(174, 44, 42, 0.3);
  z-index: 2;
}

.step-content {
  margin-top: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.step-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(255, 85, 85, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  transition: all 0.4s ease;
}

.audit-step:hover .step-icon {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  transform: scale(1.1) rotateY(360deg);
}

.step-icon i {
  font-size: 2rem;
  color: #AE2C2A;
  transition: color 0.4s ease;
}

.audit-step:hover .step-icon i {
  color: white;
}

.step-content h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #AE2C2A;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.3;
}

.step-content p {
  color: #666;
  line-height: 1.7;
  font-size: 0.95rem;
  margin: 0;
}

.flow-arrow {
  color: #AE2C2A;
  font-size: 2rem;
  opacity: 0.6;
  animation: pulse 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flow-arrow i {
  transition: transform 0.3s ease;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

/* Seção de Monitoramento Contínuo - Reorganizada */
.monitoring-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.monitoring-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(174, 44, 42, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(174, 44, 42, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.monitoring-section .section-header {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
}

.monitoring-section .section-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(255, 85, 85, 0.1));
  padding: 15px 30px;
  border-radius: 50px;
  margin-bottom: 30px;
  font-weight: 700;
  color: #AE2C2A;
  border: 2px solid rgba(174, 44, 42, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.monitoring-section .section-badge:hover {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(174, 44, 42, 0.3);
}

.monitoring-section .section-badge i {
  font-size: 1.2rem;
}

.monitoring-section .section-header h2 {
  font-size: 3rem;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.monitoring-section .section-header h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 2px;
}

.monitoring-section .section-header p {
  font-size: 1.3rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Informações de Monitoramento */
.monitoring-info {
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
}

.info-overview {
  text-align: center;
  margin-bottom: 50px;
}

.info-overview h3 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #AE2C2A;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
}

.info-overview h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 2px;
}

.info-overview p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.monitoring-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.monitoring-features .feature-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #AE2C2A;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.monitoring-features .feature-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(174, 44, 42, 0.03), transparent);
  transition: left 0.7s;
}

.monitoring-features .feature-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(174, 44, 42, 0.15);
  border-left-width: 8px;
}

.monitoring-features .feature-item:hover::before {
  left: 100%;
}

.monitoring-features .feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 25px rgba(174, 44, 42, 0.3);
  transition: all 0.4s ease;
}

.monitoring-features .feature-item:hover .feature-icon {
  transform: scale(1.1) rotateY(360deg);
  box-shadow: 0 15px 35px rgba(174, 44, 42, 0.4);
}

.monitoring-features .feature-icon i {
  font-size: 1.5rem;
  color: white;
  animation: float 3s ease-in-out infinite;
}

.feature-text h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #AE2C2A;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.feature-text p {
  color: #666;
  font-size: 1rem;
  margin: 0;
  line-height: 1.6;
}

/* Dashboard de Monitoramento */
.monitoring-dashboard {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 25px;
  padding: 50px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(174, 44, 42, 0.1);
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}

.monitoring-dashboard:hover {
  transform: translateY(-5px);
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
  border-color: rgba(174, 44, 42, 0.2);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid rgba(174, 44, 42, 0.1);
}

.dashboard-title {
  display: flex;
  align-items: center;
  gap: 15px;
}

.dashboard-title i {
  font-size: 1.8rem;
  color: #AE2C2A;
  animation: pulse 2s ease-in-out infinite;
}

.dashboard-title h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #AE2C2A;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: relative;
}

.status-dot.active {
  background: #28a745;
  animation: statusPulse 2s ease-in-out infinite;
}

.status-dot.active::after {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(40, 167, 69, 0.3);
  animation: statusRipple 2s ease-in-out infinite;
}

.status-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #28a745;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@keyframes statusPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes statusRipple {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

/* Conteúdo do Dashboard */
.dashboard-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: start;
}

/* Métricas do Dashboard */
.dashboard-metrics {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.metric-item {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(174, 44, 42, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.metric-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  transition: all 0.3s ease;
}

.metric-item.primary::before {
  background: linear-gradient(135deg, #28a745, #20c997);
}

.metric-item.secondary::before {
  background: linear-gradient(135deg, #007bff, #6610f2);
}

.metric-item.tertiary::before {
  background: linear-gradient(135deg, #fd7e14, #e83e8c);
}

.metric-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  border-color: rgba(174, 44, 42, 0.2);
}

.metric-item:hover::before {
  height: 6px;
}

.metric-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.metric-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  transition: all 0.4s ease;
}

.metric-item.primary .metric-icon {
  background: linear-gradient(135deg, #28a745, #20c997);
}

.metric-item.secondary .metric-icon {
  background: linear-gradient(135deg, #007bff, #6610f2);
}

.metric-item.tertiary .metric-icon {
  background: linear-gradient(135deg, #fd7e14, #e83e8c);
}

.metric-item:hover .metric-icon {
  transform: scale(1.1) rotateY(360deg);
}

.metric-trend {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 15px;
}

.metric-trend.up {
  background: rgba(40, 167, 69, 0.1);
  color: #28a745;
  border: 1px solid rgba(40, 167, 69, 0.2);
}

.metric-trend.stable {
  background: rgba(255, 193, 7, 0.1);
  color: #ffc107;
  border: 1px solid rgba(255, 193, 7, 0.2);
}

.metric-value {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
  line-height: 1;
}

.metric-item.primary .metric-value {
  color: #28a745;
}

.metric-item.secondary .metric-value {
  color: #007bff;
}

.metric-item.tertiary .metric-value {
  color: #fd7e14;
}

.metric-label {
  font-size: 1rem;
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Gráfico do Dashboard */
.dashboard-chart {
  background: #f8f9fa;
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(174, 44, 42, 0.1);
  height: fit-content;
  position: sticky;
  top: 20px;
}

.chart-header {
  margin-bottom: 25px;
}

.chart-header h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #AE2C2A;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

.chart-placeholder {
  height: 200px;
  background: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(174, 44, 42, 0.2);
  transition: all 0.3s ease;
}

.chart-placeholder:hover {
  border-color: rgba(174, 44, 42, 0.4);
  background: rgba(174, 44, 42, 0.02);
}

.chart-visual {
  text-align: center;
  color: rgba(174, 44, 42, 0.6);
}

.chart-visual i {
  font-size: 3rem;
  margin-bottom: 15px;
  display: block;
  opacity: 0.4;
  animation: float 3s ease-in-out infinite;
}

.chart-visual span {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.6;
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
  
  .monitoring-features {
    gap: 25px;
  }
  
  .dashboard-content {
    gap: 30px;
  }

  .standards-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }

  .audit-flow {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  .flow-arrow i {
    transform: rotate(90deg);
  }

  .audit-process-section {
    padding: 80px 0;
  }
  
  .audit-step {
    max-width: 400px;
    width: 100%;
    min-height: 320px;
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
  
  .compliance-content,
  .monitoring-content {
    flex-direction: column;
    text-align: center;
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

  .monitoring-features {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .dashboard-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .dashboard-chart {
    position: static;
  }
  
  .dashboard-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
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

  .audit-process-section {
    padding: 60px 0;
  }
  
  .audit-flow {
    gap: 30px;
  }
  
  .audit-step {
    padding: 30px 25px;
    max-width: 350px;
    min-height: 300px;
  }
  
  .step-number {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    top: -12px;
  }
  
  .step-icon {
    width: 60px;
    height: 60px;
  }
  
  .step-icon i {
    font-size: 1.8rem;
  }
  
  .step-content h4 {
    font-size: 1.2rem;
  }
  
  .step-content p {
    font-size: 0.9rem;
  }
  
  .flow-arrow {
    font-size: 1.8rem;
  }
  
  .compliance-text,
  .monitoring-info {
    padding: 0 20px;
  }
  
  .circular-progress {
    width: 280px;
    height: 280px;
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

  .monitoring-section {
    padding: 80px 0;
  }
  
  .monitoring-section .section-header h2 {
    font-size: 2.2rem;
  }
  
  .info-overview h3 {
    font-size: 1.8rem;
  }
  
  .monitoring-features .feature-item {
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 25px;
  }
  
  .monitoring-features .feature-item:hover {
    transform: translateY(-5px);
  }
  
  .monitoring-dashboard {
    padding: 35px 30px;
  }
  
  .dashboard-header {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
  
  .dashboard-title h3 {
    font-size: 1.5rem;
  }
  
  .dashboard-metrics {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .dashboard-chart {
    padding: 25px;
  }
  
  .chart-placeholder {
    height: 150px;
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
  
  .audit-process-section {
    padding: 50px 0;
  }
  
  .audit-flow {
    gap: 25px;
  }
  
  .audit-step {
    padding: 25px 20px;
    max-width: 300px;
    min-height: 280px;
  }
  
  .step-number {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    top: -10px;
  }
  
  .step-icon {
    width: 55px;
    height: 55px;
    margin-bottom: 20px;
  }
  
  .step-icon i {
    font-size: 1.5rem;
  }
  
  .step-content h4 {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  
  .step-content p {
    font-size: 0.85rem;
  }
  
  .flow-arrow {
    font-size: 1.5rem;
  }
  
  .circular-progress {
    width: 280px;
    height: 280px;
  }
  
  .progress-number {
    font-size: 2rem;
  }
  
  .progress-label {
    font-size: 0.9rem;
  }
  
  .monitoring-section .section-badge {
    padding: 12px 20px;
    font-size: 0.8rem;
  }
  
  .monitoring-section .section-header h2 {
    font-size: 1.8rem;
  }
  
  .info-overview h3 {
    font-size: 1.5rem;
  }
  
  .monitoring-features .feature-item {
    padding: 20px;
  }
  
  .monitoring-features .feature-icon {
    width: 50px;
    height: 50px;
  }
  
  .monitoring-features .feature-icon i {
    font-size: 1.2rem;
  }
  
  .feature-text h4 {
    font-size: 1rem;
  }
  
  .monitoring-dashboard {
    padding: 30px 25px;
  }
  
  .dashboard-title h3 {
    font-size: 1.3rem;
  }
  
  .metric-item {
    padding: 25px;
  }
  
  .metric-value {
    font-size: 2rem;
  }
  
  .dashboard-chart {
    padding: 20px;
  }
  
  .chart-placeholder {
    height: 120px;
  }
  
  .chart-visual i {
    font-size: 2.5rem;
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
    width: 270px;
    height: 270px;
  }
  
  .progress-number {
    font-size: 1.8rem;
  }

  .monitoring-features .feature-item {
    padding: 15px;
  }
  
  .monitoring-dashboard {
    padding: 25px 20px;
  }
  
  .dashboard-header {
    align-items: center;
    text-align: center;
  }
  
  .metric-item {
    padding: 20px;
  }
  
  .metric-value {
    font-size: 1.8rem;
  }
  
  .dashboard-chart {
    padding: 15px;
  }
  
  .chart-placeholder {
    height: 100px;
  }
  
  .chart-visual i {
    font-size: 2rem;
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

/* Efeitos de hover aprimorados */
.monitoring-features .feature-item,
.metric-item,
.chart-placeholder {
  cursor: pointer;
}

.monitoring-dashboard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.02), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 25px;
  pointer-events: none;
}

.monitoring-dashboard:hover::before {
  opacity: 1;
}

/* Efeito de brilho nos ícones */
.monitoring-features .feature-icon i,
.metric-icon i,
.dashboard-title i {
  animation: float 3s ease-in-out infinite;
}

/* Transições suaves */
* {
  transition: all 0.3s ease;
}

/* Melhorias de acessibilidade */
.monitoring-features .feature-item:focus,
.metric-item:focus,
.chart-placeholder:focus {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
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
