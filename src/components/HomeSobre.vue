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
    
    <!-- Seção Quem Somos com Cards -->
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
    
    <!-- Seção Missão, Visão e Valores com Design Moderno -->
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
                <ScrollReveal v-for="(valor, index) in t('about.values')" :key="index" 
                              direction="fade" :delay="600 + (index * 100)" customClass="value-tag">
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
              <div class="stat-number">{{ t('about.stats.experience.number') }}</div>
              <div class="stat-label">{{ t('about.stats.experience.label') }}</div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="300">
            <div class="stat-item">
              <div class="stat-number">{{ t('about.stats.clients.number') }}</div>
              <div class="stat-label">{{ t('about.stats.clients.label') }}</div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="400">
            <div class="stat-item">
              <div class="stat-number">{{ t('about.stats.products.number') }}</div>
              <div class="stat-label">{{ t('about.stats.products.label') }}</div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="500">
            <div class="stat-item">
              <div class="stat-number">{{ t('about.stats.states.number') }}</div>
              <div class="stat-label">{{ t('about.stats.states.label') }}</div>
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
            <h2>{{ t('about.ctaTitle') }}</h2>
            <p>{{ t('about.ctaText') }}</p>
            <router-link to="/Contato" class="cta-button">{{ t('about.ctaButton') }}</router-link>
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
      ]
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
  min-height: 500px;
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

.accent-line {
  height: 3px;
  width: 70px;
  background-color: #AE2C2A;
}

.intro-text {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  line-height: 1.8;
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
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
}

.card-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px;
  color: white;
  font-size: 2rem;
}

.info-card h3 {
  font-size: 2rem;
  color: #AE2C2A;
  margin-bottom: 20px;
  font-weight: 700;
}

.info-card p {
  color: #666;
  font-size: 1.1rem;
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
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ae2c2a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.mvv-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  position: relative;
  z-index: 1;
}

.mvv-card {
  background: white;
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.mvv-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.mvv-card.mission::before {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.mvv-card.vision::before {
  background: linear-gradient(135deg, #2C5EAE, #5596ff);
}

.mvv-card.values::before {
  background: linear-gradient(135deg, #2CAE6F, #55ff9d);
}

.mvv-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.mvv-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px;
  color: white;
  font-size: 2rem;
  transition: transform 0.3s ease;
}

.mvv-card.mission .mvv-icon {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.mvv-card.vision .mvv-icon {
  background: linear-gradient(135deg, #2C5EAE, #5596ff);
}

.mvv-card.values .mvv-icon {
  background: linear-gradient(135deg, #2CAE6F, #55ff9d);
}

.mvv-card:hover .mvv-icon {
  transform: scale(1.1);
}

.mvv-card h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
}

.mvv-card p {
  color: #666;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

/* Valores específicos */
.values-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 25px;
}

.value-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(255, 85, 85, 0.1));
  color: #AE2C2A;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(174, 44, 42, 0.2);
  transition: all 0.3s ease;
}

.value-pill:hover {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.2), rgba(255, 85, 85, 0.2));
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
}

.value-pill:nth-child(3n+1) {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(174, 44, 42, 0.2));
  color: #AE2C2A;
  border: 1px solid rgba(174, 44, 42, 0.3);
  box-shadow: 0 3px 10px rgba(174, 44, 42, 0.1);
}

.value-pill:nth-child(3n+1):hover {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  box-shadow: 0 8px 20px rgba(174, 44, 42, 0.3);
}

.value-pill i {
  font-size: 0.8rem;
}

/* Seção de Estatísticas */
.stats-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
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
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 1;
}

.stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px 20px;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
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
  
  .mvv-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
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
  
  .info-card {
    padding: 30px;
  }
  
  .mvv-card {
    padding: 30px;
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
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .values-container {
    gap: 8px;
  }
  
  .value-pill {
    font-size: 0.8rem;
    padding: 6px 12px;
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

.card-icon i, .mvv-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Animação para os cards quando em hover */
.info-card:hover .card-icon {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Animação para as estatísticas */
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
  
  .info-card h3 {
    font-size: 1.6rem;
  }
  
  .mvv-card h3 {
    font-size: 1.5rem;
  }
  
  .card-icon, .mvv-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
}
</style>
