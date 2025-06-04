<template>
  <div class="about-page">
    <HomeHeader />

    <!-- Hero Section com Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('about.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('about.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('about.introTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('about.introText') }}
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção Quem Somos -->
    <section class="who-we-are">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="card-container">
            <div class="info-card">
              <div class="card-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>{{ t('about.whoWeAreTitle') }}</h3>
              <p>
                {{ t('about.whoWeAreText') }}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção Missão, Visão e Valores -->
    <section class="mvv-section">
      <div class="container">
        <div class="mvv-grid">
          <ScrollReveal direction="left" :delay="300">
            <div class="mvv-card mission">
              <div class="mvv-icon">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3>{{ t('about.missionTitle') }}</h3>
              <p>
                {{ t('about.missionText') }}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="mvv-card vision">
              <div class="mvv-icon">
                <i class="fas fa-eye"></i>
              </div>
              <h3>{{ t('about.visionTitle') }}</h3>
              <p>
                {{ t('about.visionText') }}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="500">
            <div class="mvv-card values">
              <div class="mvv-icon">
                <i class="fas fa-heart"></i>
              </div>
              <h3>{{ t('about.valuesTitle') }}</h3>
              <p>{{ t('about.valuesText') }}</p>
              <div class="values-container">
                <ScrollReveal v-for="(valor, index) in t('about.values')" :key="index" direction="fade"
                  :delay="600 + (index * 100)" customClass="value-tag">
                  <span class="value-pill">
                    <i :class="valorIcons[index]"></i>
                    {{ valor }}
                  </span>
                </ScrollReveal>
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
          <ScrollReveal direction="bottom" :delay="200">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="stat-number">{{ t('about.stats.experience.number') }}</div>
              <div class="stat-label">{{ t('about.stats.experience.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <div class="stat-number">{{ t('about.stats.clients.number') }}</div>
              <div class="stat-label">{{ t('about.stats.clients.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-boxes"></i>
              </div>
              <div class="stat-number">{{ t('about.stats.products.number') }}</div>
              <div class="stat-label">{{ t('about.stats.products.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="500">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="stat-number">{{ t('about.stats.states.number') }}</div>
              <div class="stat-label">{{ t('about.stats.states.label') }}</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Diferenciais -->
    <section class="differentials-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('about.differentials.title') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="differentials-grid">
          <ScrollReveal v-for="(differential, index) in t('about.differentials.items')" :key="index"
            :direction="getDifferentialDirection(index)" :delay="200 + (index * 100)">
            <div class="differential-item">
              <div class="differential-icon">
                <i :class="differentialIcons[index]"></i>
              </div>
              <h4>{{ differential.title }}</h4>
              <p>{{ differential.description }}</p>
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
            <div class="cta-icon">
              <i class="fas fa-comments"></i>
            </div>
            <h2>{{ t('about.ctaTitle') }}</h2>
            <p>{{ t('about.ctaText') }}</p>
            <router-link to="/Contato" class="cta-button">
              {{ t('about.ctaButton') }}
              <i class="fas fa-arrow-right"></i>
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
import { useAboutTranslation } from '@/composables/useAboutTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useAboutTranslation()

    return {
      t,
      currentLanguage
    }
  },
  data() {
    return {
      sidebarOpen: false,
      valorIcons: [
        'fas fa-balance-scale',   // Ética
        'fas fa-gem',             // Qualidade
        'fas fa-rocket',          // Inovação
        'fas fa-user-shield',     // Responsabilidade
        'fas fa-handshake',       // Compromisso
        'fas fa-eye',             // Transparência
        'fas fa-bolt',            // Agilidade
        'fas fa-crosshairs',      // Objetividade
        'fas fa-award'            // Integridade
      ],
      differentialIcons: [
        'fas fa-award',           // Qualidade Premium
        'fas fa-shipping-fast',   // Entrega Rápida
        'fas fa-user-md',         // Suporte Especializado
        'fas fa-shield-alt',      // Confiabilidade
        'fas fa-cogs',            // Soluções Personalizadas
        'fas fa-chart-line'       // Inovação Constante
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    getDifferentialDirection(index) {
      const directions = ['left', 'bottom', 'right', 'left', 'bottom', 'right'];
      return directions[index] || 'bottom';
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.about-page {
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
  min-height: 600px;
  overflow: hidden;
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/header-sobre.jpg');
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
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.8), rgba(139, 34, 32, 0.9));
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: fadeInUp 1.5s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.6rem;
  font-weight: 300;
  position: relative;
  z-index: 2;
  animation: fadeInUp 1.5s ease-out 0.3s both;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  max-width: 600px;
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
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  text-align: center;
  position: relative;
}

.intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.section-title h2 {
  font-size: 2.8rem;
  font-weight: 700;
  color: #AE2C2A;
  margin: 0 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.accent-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  border-radius: 2px;
}

.intro-text {
  font-size: 1.4rem;
  max-width: 900px;
  margin: 0 auto;
  color: #555;
  line-height: 1.9;
  position: relative;
  z-index: 1;
  font-weight: 400;
}

/* Seção Quem Somos */
.who-we-are {
  background-color: #ffffff;
  position: relative;
}

.who-we-are::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ae2c2a' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
}

.card-container {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.info-card {
  background: white;
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(174, 44, 42, 0.1);
  max-width: 900px;
  transition: all 0.4s ease;
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.info-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 80px rgba(174, 44, 42, 0.15);
}

.card-icon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  color: white;
  font-size: 2.2rem;
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.3);
}

.info-card h3 {
  font-size: 2.2rem;
  color: #AE2C2A;
  margin-bottom: 25px;
  font-weight: 700;
}

.info-card p {
  color: #666;
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
}

/* Seção MVV (Missão, Visão, Valores) */
.mvv-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  position: relative;
}

.mvv-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ae2c2a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.mvv-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  position: relative;
  z-index: 1;
}

.mvv-card {
  background: white;
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.mvv-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
}

.mvv-card.vision::before {
  background: linear-gradient(135deg, #8B2220, #AE2C2A);
}

.mvv-card.values::before {
  background: linear-gradient(135deg, #D2342C, #FF4444);
}

.mvv-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
}

.mvv-icon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  color: white;
  font-size: 2.2rem;
  transition: transform 0.3s ease;
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.3);
}

.mvv-card.vision .mvv-icon {
  background: linear-gradient(135deg, #8B2220, #AE2C2A);
}

.mvv-card.values .mvv-icon {
  background: linear-gradient(135deg, #D2342C, #FF4444);
}

.mvv-card:hover .mvv-icon {
  transform: scale(1.1);
}

.mvv-card h3 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 25px;
  font-weight: 700;
}

.mvv-card p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
}

/* Valores específicos */
.values-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 30px;
}

.value-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(210, 52, 44, 0.1));
  color: #AE2C2A;
  padding: 10px 18px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 600;
  border: 1px solid rgba(174, 44, 42, 0.2);
  transition: all 0.3s ease;
}

.value-pill:hover {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.3);
}

.value-pill i {
  font-size: 0.9rem;
}

/* Seção de Estatísticas */
.stats-section {
  background: linear-gradient(135deg, #AE2C2A, #8B2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 1;
}

.stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 25px;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item:hover {
  transform: translateY(-15px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.stat-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  font-size: 1.8rem;
  color: white;
  transition: transform 0.3s ease;
}

.stat-item:hover .stat-icon {
  transform: scale(1.1);
}

.stat-number {
  font-size: 3.8rem;
  font-weight: 800;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

/* Seção de Diferenciais */
.differentials-section {
  background: #ffffff;
  padding: 100px 0;
}

.differentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.differential-item {
  background: white;
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.08);
  transition: all 0.4s ease;
  border: 1px solid rgba(174, 44, 42, 0.1);
  position: relative;
  overflow: hidden;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.differential-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.differential-item:hover::before {
  transform: scaleX(1);
}

.differential-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(174, 44, 42, 0.15);
}

.differential-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(210, 52, 44, 0.1));
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px;
  color: #AE2C2A;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.differential-item:hover .differential-icon {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  color: white;
  transform: scale(1.1);
}

.differential-item h4 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 700;
}

.differential-item p {
  color: #666;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}

/* Seção CTA */
.cta-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  text-align: center;
  padding: 120px 0;
  position: relative;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  color: white;
  font-size: 2.5rem;
  box-shadow: 0 15px 40px rgba(174, 44, 42, 0.3);
  animation: float 3s ease-in-out infinite;
}

.cta-content h2 {
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 25px;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.8;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 18px 45px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.4s ease;
  box-shadow: 0 15px 35px rgba(174, 44, 42, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-button:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(174, 44, 42, 0.4);
  background: linear-gradient(135deg, #D2342C, #FF4444);
}

.cta-button i {
  transition: transform 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(5px);
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .differentials-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    font-size: 1.4rem;
  }

  section {
    padding: 60px 0;
  }

  .differentials-section {
    padding: 80px 0;
  }

  .cta-section {
    padding: 100px 0;
  }

  .mvv-grid {
    grid-template-columns: 1fr;
  }

  .differentials-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 65vh;
    min-height: 500px;
  }

  .hero-title {
    font-size: 2.8rem;
    letter-spacing: 2px;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title h2 {
    font-size: 2.2rem;
  }

  .intro-text {
    font-size: 1.2rem;
  }

  .info-card {
    padding: 40px 30px;
  }

  .mvv-card {
    padding: 40px 30px;
  }

  .differential-item {
    padding: 35px 25px;
  }

  .cta-content h2 {
    font-size: 2.2rem;
  }

  .cta-content p {
    font-size: 1.1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .differentials-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 20px;
  }

  .hero-title {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title h2 {
    font-size: 1.8rem;
    margin: 0 15px;
  }

  .accent-line {
    width: 50px;
  }

  .stat-number {
    font-size: 3rem;
  }

  .values-container {
    gap: 8px;
  }

  .value-pill {
    font-size: 0.85rem;
    padding: 8px 14px;
  }

  .cta-button {
    padding: 15px 35px;
    font-size: 1rem;
  }

  .info-card {
    padding: 30px 20px;
  }

  .mvv-card {
    padding: 30px 20px;
  }

  .differential-item {
    padding: 30px 20px;
  }

  .card-icon,
  .mvv-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }

  .differential-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }

  .cta-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
}

/* Animações adicionais */
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}

.card-icon i,
.mvv-icon i {
  animation: float 4s ease-in-out infinite;
}

.differential-icon i {
  animation: float 3s ease-in-out infinite;
}

.info-card:hover .card-icon {
  transform: scale(1.15);
  transition: transform 0.4s ease;
}

.stat-item:hover .stat-number {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Animação para o botão CTA */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(174, 44, 42, 0.7);
  }

  70% {
    box-shadow: 0 0 0 15px rgba(174, 44, 42, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(174, 44, 42, 0);
  }
}

.cta-button:hover {
  animation: pulse 2s infinite;
}

/* Efeito de gradiente animado */
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

.hero-section .overlay {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.8), rgba(139, 34, 32, 0.9), rgba(210, 52, 44, 0.8));
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}

/* Ajustes para dispositivos móveis muito pequenos */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .info-card h3 {
    font-size: 1.8rem;
  }

  .mvv-card h3 {
    font-size: 1.6rem;
  }

  .differential-item h4 {
    font-size: 1.2rem;
  }

  .cta-content h2 {
    font-size: 1.8rem;
  }

  section {
    padding: 50px 0;
  }

  .differentials-section {
    padding: 70px 0;
  }

  .cta-section {
    padding: 80px 0;
  }
}

/* Melhorias de acessibilidade */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Efeitos de hover mais suaves para touch devices */
@media (hover: none) {

  .info-card:hover,
  .mvv-card:hover,
  .differential-item:hover,
  .stat-item:hover {
    transform: none;
  }

  .cta-button:hover {
    transform: none;
    animation: none;
  }
}
</style>
