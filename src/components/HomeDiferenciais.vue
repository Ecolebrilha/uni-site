<template>
  <div class="diferenciais-page">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('differentials.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('differentials.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('differentials.introTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('differentials.introText') }}
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção de Diferenciais -->
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="feature-card">
              <div class="feature-icon-wrapper">
                <i class="fas fa-warehouse"></i>
              </div>
              <div class="feature-content">
                <h3>{{ t('differentials.features.inventory.title') }}</h3>
                <p>{{ t('differentials.features.inventory.description') }}</p>
                <ul class="feature-list">
                  <li><span class="highlight">{{ t('differentials.features.inventory.feature1') }}</span> {{
                    t('differentials.features.inventory.feature1Description') }}</li>
                  <li><span class="highlight">{{ t('differentials.features.inventory.feature2') }}</span> {{
                    t('differentials.features.inventory.feature2Description') }}</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="feature-card">
              <div class="feature-icon-wrapper">
                <i class="fas fa-truck"></i>
              </div>
              <div class="feature-content">
                <h3>{{ t('differentials.features.logistics.title') }}</h3>
                <p>{{ t('differentials.features.logistics.description') }}</p>
                <ul class="feature-list">
                  <li><span class="highlight">{{ t('differentials.features.logistics.feature1') }}</span> {{
                    t('differentials.features.logistics.feature1Description') }}</li>
                  <li><span class="highlight">{{ t('differentials.features.logistics.feature2') }}</span> {{
                    t('differentials.features.logistics.feature2Description') }}</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" :delay="400">
            <div class="feature-card">
              <div class="feature-icon-wrapper">
                <i class="fas fa-building"></i>
              </div>
              <div class="feature-content">
                <h3>{{ t('differentials.features.expansion.title') }}</h3>
                <p>{{ t('differentials.features.expansion.description') }}</p>
                <ul class="feature-list">
                  <li><span class="highlight">{{ t('differentials.features.expansion.feature1') }}</span> {{
                    t('differentials.features.expansion.feature1Description') }}</li>
                  <li><span class="highlight">{{ t('differentials.features.expansion.feature2') }}</span> {{
                    t('differentials.features.expansion.feature2Description') }}</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="500">
            <div class="feature-card">
              <div class="feature-icon-wrapper">
                <i class="fas fa-star"></i>
              </div>
              <div class="feature-content">
                <h3>{{ t('differentials.features.quality.title') }}</h3>
                <p>{{ t('differentials.features.quality.description') }}</p>
                <ul class="feature-list">
                  <li><span class="highlight">{{ t('differentials.features.quality.feature1') }}</span> {{
                    t('differentials.features.quality.feature1Description') }}</li>
                  <li><span class="highlight">{{ t('differentials.features.quality.feature2') }}</span> {{
                    t('differentials.features.quality.feature2Description') }}</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Métricas/Indicadores -->
    <section class="metrics-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>{{ t('differentials.metricsTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="metrics-grid">
          <ScrollReveal direction="bottom" :delay="300">
            <div class="metric-card">
              <div class="metric-icon">
                <i class="fas fa-shipping-fast"></i>
              </div>
              <div class="metric-number">{{ t('differentials.metrics.delivery.number') }}</div>
              <div class="metric-label">{{ t('differentials.metrics.delivery.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="metric-card">
              <div class="metric-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="metric-number">{{ t('differentials.metrics.accuracy.number') }}</div>
              <div class="metric-label">{{ t('differentials.metrics.accuracy.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="500">
            <div class="metric-card">
              <div class="metric-icon">
                <i class="fas fa-smile"></i>
              </div>
              <div class="metric-number">{{ t('differentials.metrics.satisfaction.number') }}</div>
              <div class="metric-label">{{ t('differentials.metrics.satisfaction.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="600">
            <div class="metric-card">
              <div class="metric-icon">
                <i class="fas fa-map-marked-alt"></i>
              </div>
              <div class="metric-number">{{ t('differentials.metrics.coverage.number') }}</div>
              <div class="metric-label">{{ t('differentials.metrics.coverage.label') }}</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Depoimentos -->
    <section class="testimonials-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('differentials.testimonialsTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="testimonials-grid">
          <ScrollReveal direction="left" :delay="300">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <i class="fas fa-quote-left quote-icon"></i>
                <p>{{ t('differentials.testimonials.testimonial1.text') }}</p>
                <div class="testimonial-author">
                  <div class="author-avatar">
                    <span>{{ t('differentials.testimonials.testimonial1.authorInitials') }}</span>
                  </div>
                  <div class="author-info">
                    <h4>{{ t('differentials.testimonials.testimonial1.authorName') }}</h4>
                    <p>{{ t('differentials.testimonials.testimonial1.authorPosition') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <i class="fas fa-quote-left quote-icon"></i>
                <p>{{ t('differentials.testimonials.testimonial2.text') }}</p>
                <div class="testimonial-author">
                  <div class="author-avatar">
                    <span>{{ t('differentials.testimonials.testimonial2.authorInitials') }}</span>
                  </div>
                  <div class="author-info">
                    <h4>{{ t('differentials.testimonials.testimonial2.authorName') }}</h4>
                    <p>{{ t('differentials.testimonials.testimonial2.authorPosition') }}</p>
                  </div>
                </div>
              </div>
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
            <h2>{{ t('differentials.ctaTitle') }}</h2>
            <p>{{ t('differentials.ctaText') }}</p>
            <router-link to="/Contato" class="cta-button">{{ t('differentials.ctaButton') }}</router-link>
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
import { useDifferentialsTranslation } from '@/composables/useDifferentialsTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useDifferentialsTranslation()

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
.diferenciais-page {
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
  background-image: url('@/assets/header-diferenciais.jpg');
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

/* Seção de Diferenciais */
.features-section {
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
}

.features-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  position: relative;
  z-index: 1;
}

.feature-card {
  display: flex;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.feature-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  font-size: 2.5rem;
  padding: 20px;
}

.feature-content {
  padding: 30px;
  flex: 1;
}

.feature-content h3 {
  font-size: 1.6rem;
  color: #AE2C2A;
  margin-bottom: 15px;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
}

.feature-content h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #AE2C2A;
}

.feature-content p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.7;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  color: #555;
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #AE2C2A;
  font-weight: bold;
}

.highlight {
  font-weight: 600;
  color: #333;
}

/* Seção de Métricas */
.metrics-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.metrics-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 1;
}

.metric-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.metric-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.9);
}

.metric-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.metric-label {
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

/* Seção de Depoimentos */
.testimonials-section {
  background-color: #f9f9f9;
  position: relative;
}

.testimonials-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 1;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.testimonial-content {
  padding: 30px;
  position: relative;
}

.quote-icon {
  font-size: 2rem;
  color: #AE2C2A;
  opacity: 0.2;
  position: absolute;
  top: 20px;
  left: 20px;
}

.testimonial-content p {
  font-style: italic;
  color: #555;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  padding-left: 10px;
  padding-top: 10px;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  margin-right: 15px;
}

.author-info h4 {
  margin: 0;
  color: #333;
  font-size: 1.1rem;
}

.author-info p {
  margin: 5px 0 0;
  color: #777;
  font-size: 0.9rem;
  font-style: normal;
}

/* Seção CTA */
.cta-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  text-align: center;
  padding: 100px 0;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
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
}

@media (max-width: 1049px) {
  .metrics-grid {
    grid-template-columns: 1fr 1fr;
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

  .feature-card {
    flex-direction: column;
  }

  .feature-icon-wrapper {
    min-width: 100%;
    padding: 30px 0;
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

  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-content h2 {
    font-size: 2rem;
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

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .cta-button {
    padding: 12px 30px;
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

.feature-icon-wrapper i,
.metric-icon i {
  animation: float 3s ease-in-out infinite;
}

.feature-card:hover .feature-icon-wrapper {
  background: linear-gradient(135deg, #ff5555, #AE2C2A);
}

.metric-card:hover .metric-icon {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.testimonial-card:hover .quote-icon {
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.feature-list li:hover::before {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

.feature-list li:hover .highlight {
  color: #AE2C2A;
  transition: color 0.3s ease;
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

  .feature-content h3 {
    font-size: 1.4rem;
  }

  .metric-number {
    font-size: 2.5rem;
  }

  .testimonial-content {
    padding: 20px;
  }

  .author-avatar {
    width: 40px;
    height: 40px;
    font-size: 0.8rem;
  }

  .author-info h4 {
    font-size: 1rem;
  }
}
</style>
