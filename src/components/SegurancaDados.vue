<template>
  <div class="seguranca-dados-page">
    <HomeHeader />
    
    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('segurancaDados.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('segurancaDados.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Estatísticas -->
    <section class="stats-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">{{ t('segurancaDados.stats.uptime') }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">256-bit</div>
              <div class="stat-label">{{ t('segurancaDados.stats.encryption') }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">{{ t('segurancaDados.stats.monitoring') }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">{{ t('segurancaDados.stats.compliance') }}</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção de Proteção em Camadas -->
    <section class="layers-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2>{{ t('segurancaDados.layersTitle') }}</h2>
            <p>{{ t('segurancaDados.layersSubtitle') }}</p>
          </div>
        </ScrollReveal>

        <div class="layers-container">
          <ScrollReveal direction="left" :delay="200">
            <div class="layer-item" data-layer="1">
              <div class="layer-number">01</div>
              <div class="layer-content">
                <div class="layer-icon">
                  <i class="fas fa-shield-virus"></i>
                </div>
                <h3>{{ t('segurancaDados.layers.perimeter.title') }}</h3>
                <p>{{ t('segurancaDados.layers.perimeter.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="layer-item" data-layer="2">
              <div class="layer-number">02</div>
              <div class="layer-content">
                <div class="layer-icon">
                  <i class="fas fa-user-shield"></i>
                </div>
                <h3>{{ t('segurancaDados.layers.access.title') }}</h3>
                <p>{{ t('segurancaDados.layers.access.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" :delay="400">
            <div class="layer-item" data-layer="3">
              <div class="layer-number">03</div>
              <div class="layer-content">
                <div class="layer-icon">
                  <i class="fas fa-lock"></i>
                </div>
                <h3>{{ t('segurancaDados.layers.encryption.title') }}</h3>
                <p>{{ t('segurancaDados.layers.encryption.description') }}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="500">
            <div class="layer-item" data-layer="4">
              <div class="layer-number">04</div>
              <div class="layer-content">
                <div class="layer-icon">
                  <i class="fas fa-eye"></i>
                </div>
                <h3>{{ t('segurancaDados.layers.monitoring.title') }}</h3>
                <p>{{ t('segurancaDados.layers.monitoring.description') }}</p>
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
          <div class="certifications-header">
            <h2>{{ t('segurancaDados.certificationsTitle') }}</h2>
            <p>{{ t('segurancaDados.certificationsSubtitle') }}</p>
          </div>
        </ScrollReveal>

        <div class="certifications-carousel">
          <ScrollReveal direction="bottom" :delay="200">
            <div class="cert-card">
              <div class="cert-badge">
                <i class="fas fa-flag"></i>
                <span>LGPD</span>
              </div>
              <h4>{{ t('segurancaDados.certifications.lgpd.title') }}</h4>
              <p>{{ t('segurancaDados.certifications.lgpd.description') }}</p>
              <div class="cert-status">
                <i class="fas fa-check-circle"></i>
                <span>{{ t('segurancaDados.certifications.compliant') }}</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="cert-card">
              <div class="cert-badge">
                <i class="fas fa-globe-europe"></i>
                <span>GDPR</span>
              </div>
              <h4>{{ t('segurancaDados.certifications.gdpr.title') }}</h4>
              <p>{{ t('segurancaDados.certifications.gdpr.description') }}</p>
              <div class="cert-status">
                <i class="fas fa-check-circle"></i>
                <span>{{ t('segurancaDados.certifications.compliant') }}</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="cert-card">
              <div class="cert-badge">
                <i class="fas fa-certificate"></i>
                <span>ISO</span>
              </div>
              <h4>{{ t('segurancaDados.certifications.iso.title') }}</h4>
              <p>{{ t('segurancaDados.certifications.iso.description') }}</p>
              <div class="cert-status">
                <i class="fas fa-check-circle"></i>
                <span>{{ t('segurancaDados.certifications.certified') }}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Tecnologias -->
    <section class="tech-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="tech-header">
            <h2>{{ t('segurancaDados.techTitle') }}</h2>
            <p>{{ t('segurancaDados.techSubtitle') }}</p>
          </div>
        </ScrollReveal>

        <div class="tech-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="tech-category">
              <div class="tech-icon">
                <i class="fas fa-server"></i>
              </div>
              <h3>{{ t('segurancaDados.tech.infrastructure.title') }}</h3>
              <ul>
                <li>{{ t('segurancaDados.tech.infrastructure.item1') }}</li>
                <li>{{ t('segurancaDados.tech.infrastructure.item2') }}</li>
                <li>{{ t('segurancaDados.tech.infrastructure.item3') }}</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="tech-category">
              <div class="tech-icon">
                <i class="fas fa-network-wired"></i>
              </div>
              <h3>{{ t('segurancaDados.tech.network.title') }}</h3>
              <ul>
                <li>{{ t('segurancaDados.tech.network.item1') }}</li>
                <li>{{ t('segurancaDados.tech.network.item2') }}</li>
                <li>{{ t('segurancaDados.tech.network.item3') }}</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" :delay="400">
            <div class="tech-category">
              <div class="tech-icon">
                <i class="fas fa-database"></i>
              </div>
              <h3>{{ t('segurancaDados.tech.data.title') }}</h3>
              <ul>
                <li>{{ t('segurancaDados.tech.data.item1') }}</li>
                <li>{{ t('segurancaDados.tech.data.item2') }}</li>
                <li>{{ t('segurancaDados.tech.data.item3') }}</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="500">
            <div class="tech-category">
              <div class="tech-icon">
                <i class="fas fa-search"></i>
              </div>
              <h3>{{ t('segurancaDados.tech.monitoring.title') }}</h3>
              <ul>
                <li>{{ t('segurancaDados.tech.monitoring.item1') }}</li>
                <li>{{ t('segurancaDados.tech.monitoring.item2') }}</li>
                <li>{{ t('segurancaDados.tech.monitoring.item3') }}</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de CTA -->
    <section class="cta-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="cta-content">
            <div class="cta-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h2>{{ t('segurancaDados.ctaTitle') }}</h2>
            <p>{{ t('segurancaDados.ctaText') }}</p>
            <div class="cta-buttons">
              <router-link to="/PoliticaPrivacidade" class="cta-btn primary">
                <i class="fas fa-file-contract"></i>
                {{ t('segurancaDados.ctaButtons.privacy') }}
              </router-link>
              <router-link to="/Contato" class="cta-btn secondary">
                <i class="fas fa-comments"></i>
                {{ t('segurancaDados.ctaButtons.contact') }}
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
import { useDataSecurityTranslation } from '@/composables/useDataSecurityTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useDataSecurityTranslation()
    
    return {
      t,
      currentLanguage
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.seguranca-dados-page {
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
  background-image: url('@/assets/header-seguranca-dados.jpg');
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

/* Seção de Estatísticas */
.stats-section {
  padding: 60px 0;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item {
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-top: 4px solid #AE2C2A;
}

.stat-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(174, 44, 42, 0.15);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 10px;
  display: block;
}

.stat-label {
  font-size: 1rem;
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Seção de Camadas */
.layers-section {
  padding: 100px 0;
  background: #ffffff;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header h2 {
  font-size: 2.8rem;
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

.layers-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.layer-item {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px;
  background: #f8f9fa;
  border-radius: 20px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.layer-item:nth-child(even) {
  flex-direction: row-reverse;
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
}

.layer-item:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.layer-number {
  font-size: 4rem;
  font-weight: 900;
  color: #AE2C2A;
  opacity: 0.3;
  min-width: 100px;
}

.layer-item:nth-child(even) .layer-number {
  color: rgba(255, 255, 255, 0.3);
}

.layer-content {
  flex: 1;
}

.layer-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.layer-item:nth-child(even) .layer-icon {
  background: rgba(255, 255, 255, 0.2);
}

.layer-icon i {
  font-size: 1.5rem;
  color: white;
}

.layer-content h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.layer-item:nth-child(even) .layer-content h3 {
  color: white;
}

.layer-content p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
}

.layer-item:nth-child(even) .layer-content p {
  color: rgba(255, 255, 255, 0.9);
}

/* Seção de Certificações */
.certifications-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
}

.certifications-header {
  text-align: center;
  margin-bottom: 60px;
}

.certifications-header h2 {
  font-size: 2.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.certifications-header p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.certifications-carousel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.cert-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cert-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.cert-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.cert-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 600;
  margin-bottom: 25px;
}

.cert-badge i {
  font-size: 1.2rem;
}

.cert-card h4 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.cert-card p {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
}

.cert-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #28a745;
  font-weight: 600;
}

.cert-status i {
  font-size: 1.2rem;
}

/* Seção de Tecnologias */
.tech-section {
  padding: 100px 0;
  background: #ffffff;
}

.tech-header {
  text-align: center;
  margin-bottom: 80px;
}

.tech-header h2 {
  font-size: 2.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.tech-header p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.tech-category {
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.tech-category:hover {
  background: white;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.tech-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.tech-icon i {
  font-size: 2rem;
  color: white;
}

.tech-category h3 {
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.tech-category ul {
  list-style: none;
  padding: 0;
}

.tech-category li {
  padding: 8px 0;
  color: #666;
  position: relative;
  padding-left: 25px;
}

.tech-category li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #AE2C2A;
  font-weight: bold;
}

/* Seção de CTA */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #333, #555);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
}

.cta-icon i {
  font-size: 2.5rem;
}

.cta-content h2 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-btn.primary {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
}

.cta-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.cta-btn.secondary:hover {
  background: white;
  color: #333;
}

/* Responsividade */
@media (max-width: 992px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .layer-item {
    flex-direction: column !important;
    text-align: center;
  }
  
  .layer-number {
    min-width: auto;
  }
  
  .certifications-carousel {
    grid-template-columns: 1fr;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
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
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .section-header h2,
  .tech-header h2,
  .certifications-header h2,
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .layer-item {
    padding: 30px 20px;
  }
  
  .layer-number {
    font-size: 3rem;
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
    padding: 0 15px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  section {
    padding: 60px 0;
  }
  
  .section-header h2,
  .tech-header h2,
  .certifications-header h2,
  .cta-content h2 {
    font-size: 1.8rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .layer-content h3 {
    font-size: 1.5rem;
  }
  
  .cert-card,
  .tech-category {
    padding: 30px 20px;
  }
}

@media (max-width: 400px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .section-header h2,
  .tech-header h2,
  .certifications-header h2,
  .cta-content h2 {
    font-size: 1.5rem;
  }
  
  .layer-item {
    padding: 20px 15px;
  }
  
  .cert-card,
  .tech-category {
    padding: 25px 15px;
  }
}

/* Animações adicionais */
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

.layer-icon:hover,
.tech-icon:hover {
  animation: pulse 1.5s infinite;
}

/* Efeito de brilho nos botões */
.cta-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s;
}

.cta-btn:hover::after {
  left: 100%;
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}
</style>
