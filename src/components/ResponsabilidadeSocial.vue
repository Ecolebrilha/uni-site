<template>
  <div class="responsabilidade-social-page">
    <HomeHeader />
    
    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('responsabilidadeSocial.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('responsabilidadeSocial.heroSubtitle') }}</div>
      </div>
    </section>
    
    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2>{{ t('responsabilidadeSocial.overviewTitle') }}</h2>
            <div class="header-line"></div>
          </div>
          <p class="intro-text">{{ t('responsabilidadeSocial.overviewText') }}</p>
        </ScrollReveal>
        
        <div class="values-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="value-item">
              <div class="value-dot"></div>
              <div class="value-content">
                <h4>{{ t('responsabilidadeSocial.values.sustainability.title') }}</h4>
                <p>{{ t('responsabilidadeSocial.values.sustainability.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="300">
            <div class="value-item">
              <div class="value-dot"></div>
              <div class="value-content">
                <h4>{{ t('responsabilidadeSocial.values.community.title') }}</h4>
                <p>{{ t('responsabilidadeSocial.values.community.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" :delay="400">
            <div class="value-item">
              <div class="value-dot"></div>
              <div class="value-content">
                <h4>{{ t('responsabilidadeSocial.values.innovation.title') }}</h4>
                <p>{{ t('responsabilidadeSocial.values.innovation.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="500">
            <div class="value-item">
              <div class="value-dot"></div>
              <div class="value-content">
                <h4>{{ t('responsabilidadeSocial.values.ethics.title') }}</h4>
                <p>{{ t('responsabilidadeSocial.values.ethics.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Iniciativas com Cards Horizontais -->
    <section class="initiatives-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2>{{ t('responsabilidadeSocial.initiativesTitle') }}</h2>
            <div class="header-line"></div>
          </div>
        </ScrollReveal>
        
        <div class="initiatives-list">
          <ScrollReveal direction="left" :delay="200">
            <div class="initiative-card">
              <div class="initiative-number">01</div>
              <div class="initiative-icon">
                <i class="fas fa-recycle"></i>
              </div>
              <div class="initiative-content">
                <h3>{{ t('responsabilidadeSocial.initiatives.wasteManagement.title') }}</h3>
                <p>{{ t('responsabilidadeSocial.initiatives.wasteManagement.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="300">
            <div class="initiative-card">
              <div class="initiative-number">02</div>
              <div class="initiative-icon">
                <i class="fas fa-solar-panel"></i>
              </div>
              <div class="initiative-content">
                <h3>{{ t('responsabilidadeSocial.initiatives.energyEfficiency.title') }}</h3>
                <p>{{ t('responsabilidadeSocial.initiatives.energyEfficiency.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" :delay="400">
            <div class="initiative-card">
              <div class="initiative-number">03</div>
              <div class="initiative-icon">
                <i class="fas fa-heart"></i>
              </div>
              <div class="initiative-content">
                <h3>{{ t('responsabilidadeSocial.initiatives.socialProjects.title') }}</h3>
                <p>{{ t('responsabilidadeSocial.initiatives.socialProjects.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="500">
            <div class="initiative-card">
              <div class="initiative-number">04</div>
              <div class="initiative-icon">
                <i class="fas fa-stethoscope"></i>
              </div>
              <div class="initiative-content">
                <h3>{{ t('responsabilidadeSocial.initiatives.healthCampaigns.title') }}</h3>
                <p>{{ t('responsabilidadeSocial.initiatives.healthCampaigns.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" :delay="600">
            <div class="initiative-card">
              <div class="initiative-number">05</div>
              <div class="initiative-icon">
                <i class="fas fa-hands-helping"></i>
              </div>
              <div class="initiative-content">
                <h3>{{ t('responsabilidadeSocial.initiatives.diversity.title') }}</h3>
                <p>{{ t('responsabilidadeSocial.initiatives.diversity.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="700">
            <div class="initiative-card">
              <div class="initiative-number">06</div>
              <div class="initiative-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <div class="initiative-content">
                <h3>{{ t('responsabilidadeSocial.initiatives.partnerships.title') }}</h3>
                <p>{{ t('responsabilidadeSocial.initiatives.partnerships.description') }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de CTA Simples -->
    <section class="cta-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="cta-content">
            <h2>{{ t('responsabilidadeSocial.contactTitle') }}</h2>
            <p>{{ t('responsabilidadeSocial.contactText') }}</p>
            <router-link to="/Contato" class="cta-button">
              {{ t('responsabilidadeSocial.contactButton') }}
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
import { useSocialResponsibilityTranslation } from '@/composables/useSocialResponsibilityTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useSocialResponsibilityTranslation()
    
    return {
      t,
      currentLanguage
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.responsabilidade-social-page {
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
  background-image: url('@/assets/header-responsabilidade-social.jpg');
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

/* Seção de Introdução */
.intro-section {
  padding: 100px 0;
  background: #f9f9f9;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #AE2C2A;
  margin-bottom: 16px;
}

.header-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #AE2C2A, #ff5555);
  margin: 0 auto;
  border-radius: 2px;
}

.intro-text {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.value-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #AE2C2A;
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.15);
}

.value-dot {
  width: 16px;
  height: 16px;
  background: #AE2C2A;
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

.value-content h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.value-content p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

/* Seção de Iniciativas */
.initiatives-section {
  padding: 100px 0;
  background: white;
}

.initiatives-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

.initiative-card {
  display: flex;
  align-items: center;
  gap: 30px;
  background: #f9f9f9;
  padding: 35px;
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.initiative-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.02), rgba(255, 85, 85, 0.02));
  z-index: 0;
}

.initiative-card:hover {
  transform: translateX(10px);
  border-color: #AE2C2A;
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.1);
}

.initiative-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(174, 44, 42, 0.3);
  min-width: 60px;
  position: relative;
  z-index: 1;
}

.initiative-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.initiative-icon i {
  font-size: 1.8rem;
  color: white;
}

.initiative-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.initiative-content h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.initiative-content p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

/* Seção CTA */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 32px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: white;
  color: #AE2C2A;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.cta-button i {
  transition: transform 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(4px);
}

/* Responsividade */
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
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .initiative-card {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }
  
  .initiative-number {
    order: -1;
    font-size: 3.5rem;
    color: #AE2C2A;
    opacity: 0.2;
  }
  
  .initiative-card:hover {
    transform: translateY(-5px);
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
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .intro-text {
    font-size: 1.1rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .value-item {
    padding: 25px;
  }
  
  .initiative-card {
    padding: 25px;
  }
  
  .initiative-icon {
    width: 60px;
    height: 60px;
  }
  
  .initiative-icon i {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 16px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .header-line {
    width: 60px;
  }
  
  .intro-section,
  .initiatives-section {
    padding: 60px 0;
  }
  
  .value-item {
    padding: 20px;
    gap: 15px;
  }
  
  .value-content h4 {
    font-size: 1.1rem;
  }
  
  .value-content p {
    font-size: 0.9rem;
  }
  
  .initiative-card {
    padding: 20px;
  }
  
  .initiative-content h3 {
    font-size: 1.2rem;
  }
  
  .initiative-content p {
    font-size: 0.9rem;
  }
  
  .initiative-icon {
    width: 50px;
    height: 50px;
  }
  
  .initiative-icon i {
    font-size: 1.2rem;
  }
  
  .cta-section {
    padding: 60px 0;
  }
  
  .cta-content h2 {
    font-size: 1.8rem;
  }
  
  .cta-button {
    padding: 14px 28px;
    font-size: 0.9rem;
  }
}

@media (max-width: 400px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .section-header h2 {
    font-size: 1.6rem;
  }
  
  .value-item {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  
  .value-dot {
    margin: 0 auto;
  }
  
  .initiative-number {
    font-size: 3rem;
  }
  
  .cta-content h2 {
    font-size: 1.6rem;
  }
}

/* Melhorias de acessibilidade */
.initiative-card:focus-within {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
}

.cta-button:focus {
  outline: 2px solid white;
  outline-offset: 2px;
}

.value-item:focus-within {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
}

/* Transições suaves */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}

/* Estados de hover melhorados */
.value-item:hover .value-dot {
  transform: scale(1.3);
  transition: transform 0.2s ease;
}

.initiative-card:hover .initiative-icon {
  transform: scale(1.05);
}

.initiative-card:hover .initiative-number {
  color: #AE2C2A;
  opacity: 0.6;
}

/* Efeitos de entrada */
.value-item {
  animation: slideInUp 0.6s ease-out;
}

.initiative-card {
  animation: slideInLeft 0.6s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Otimizações de performance */
.initiative-card,
.value-item,
.cta-button {
  will-change: transform;
}

/* Tipografia melhorada */
.hero-title,
.section-header h2,
.cta-content h2 {
  letter-spacing: -0.025em;
}

/* Estados ativos */
.cta-button:active {
  transform: translateY(0);
}

.initiative-card:active {
  transform: translateX(5px);
}

.value-item:active {
  transform: translateY(-2px);
}

/* Efeito de brilho sutil */
.initiative-icon::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: rotate(45deg);
  transition: all 0.6s;
  opacity: 0;
}

.initiative-card:hover .initiative-icon::before {
  opacity: 1;
  transform: rotate(45deg) translate(50%, 50%);
}

/* Padrão de fundo sutil */
.intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 0;
}

.intro-section {
  position: relative;
}

.intro-section .container {
  position: relative;
  z-index: 1;
}

/* Gradientes sutis nos cards */
.value-item {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.value-item:hover {
  border-color: rgba(174, 44, 42, 0.2);
}

/* Sombras personalizadas */
.initiative-card {
  box-shadow: 0 4px 15px rgba(174, 44, 42, 0.08);
}

.initiative-card:hover {
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.15);
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

.initiative-icon:hover {
  animation: pulse 1.5s infinite;
}
</style>
