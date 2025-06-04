<template>
  <div class="parceiros">
    <HomeHeader />
    
    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">{{ t('partners.hero.title') }}</h1>
          <div class="hero-subtitle">{{ t('partners.hero.subtitle') }}</div>
        </div>
      </div>
    </section>
    
    <!-- Seção de Estatísticas dos Parceiros -->
    <section class="partners-stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-handshake"></i>
            </div>
            <div class="stat-number">26+</div>
            <div class="stat-label">{{ t('partners.stats.strategicPartners') }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-globe-americas"></i>
            </div>
            <div class="stat-number">3</div>
            <div class="stat-label">{{ t('partners.stats.statesServed') }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-award"></i>
            </div>
            <div class="stat-number">19</div>
            <div class="stat-label">{{ t('partners.stats.yearsOfTrust') }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Seção Principal de Parceiros -->
    <section class="partners-showcase-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2 class="section-title">{{ t('partners.showcase.title') }}</h2>
            <div class="section-subtitle">{{ t('partners.showcase.subtitle') }}</div>
            <div class="accent-line"></div>
          </div>
        </ScrollReveal>
        
        <!-- Grid Simples de Parceiros -->
        <ScrollReveal direction="bottom" :delay="200">
          <div class="partners-simple-grid">
            <div v-for="n in 26" :key="`parceiro-${n}`" class="partner-logo">
              <img :src="require(`@/assets/parceiro${n}.jpg`)" :alt="`Parceiro ${n}`" @error="handleImageError">
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
    
    <!-- Seção de Depoimentos de Parceiros -->
    <section class="partners-testimonials">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2 class="section-title light">{{ t('partners.testimonials.title') }}</h2>
            <div class="accent-line light"></div>
          </div>
        </ScrollReveal>
        
        <div class="testimonials-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="testimonial-card">
              <div class="quote-icon">
                <i class="fas fa-quote-left"></i>
              </div>
              <p>{{ t('partners.testimonials.testimonial1.text') }}</p>
              <div class="testimonial-author">
                <strong>{{ t('partners.testimonials.testimonial1.author') }}</strong>
                <span>{{ t('partners.testimonials.testimonial1.company') }}</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="300">
            <div class="testimonial-card">
              <div class="quote-icon">
                <i class="fas fa-quote-left"></i>
              </div>
              <p>{{ t('partners.testimonials.testimonial2.text') }}</p>
              <div class="testimonial-author">
                <strong>{{ t('partners.testimonials.testimonial2.author') }}</strong>
                <span>{{ t('partners.testimonials.testimonial2.company') }}</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="400">
            <div class="testimonial-card">
              <div class="quote-icon">
                <i class="fas fa-quote-left"></i>
              </div>
              <p>{{ t('partners.testimonials.testimonial3.text') }}</p>
              <div class="testimonial-author">
                <strong>{{ t('partners.testimonials.testimonial3.author') }}</strong>
                <span>{{ t('partners.testimonials.testimonial3.company') }}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Call to Action -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ t('partners.cta.title') }}</h2>
          <p>{{ t('partners.cta.description') }}</p>
          <router-link to="/SejaParceiro" class="cta-button">
            <i class="fas fa-handshake"></i>
            <span>{{ t('partners.cta.button') }}</span>
          </router-link>
        </div>
      </div>
    </section>
    
    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import { usePartnersTranslation } from '@/composables/usePartnersTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = usePartnersTranslation()
    
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
    },
    handleImageError(e) {
      e.target.src = require('@/assets/logo-uni2.png');
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.parceiros {
  font-family: 'Montserrat', sans-serif;
  color: #333;
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
  background-image: url('@/assets/header-parceiros.jpg');
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

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 20px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeInUp 1.5s ease-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 15px;
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
.partners-stats-section {
  background: linear-gradient(135deg, #f9f9f9, #f0f0f0);
  position: relative;
  overflow: hidden;
}

.partners-stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  position: relative;
  z-index: 1;
}

.stat-card {
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 5px solid #AE2C2A;
}

.stat-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  color: white;
  font-size: 2rem;
  box-shadow: 0 10px 25px rgba(174, 44, 42, 0.3);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 15px;
  line-height: 1;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Seção Principal de Parceiros */
.partners-showcase-section {
  background-color: #ffffff;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.section-title.light {
  color: white;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.accent-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #AE2C2A, #ff5555);
  margin: 0 auto;
}

.accent-line.light {
  background: linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0.8));
}

.partners-simple-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  justify-items: center;
  align-items: center;
  margin-top: 50px;
}

.partner-logo {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.partner-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.partner-logo:hover img {
  filter: grayscale(0%);
}

/* Seção de Depoimentos */
.partners-testimonials {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.partners-testimonials::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.3;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  position: relative;
  z-index: 1;
  align-items: stretch;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
  height: 60%;
}

.testimonial-card:hover {
  transform: translateY(-10px);
}

.quote-icon {
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 25px;
}

.testimonial-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 25px;
  font-style: italic;
}

.testimonial-author {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
}

.testimonial-author strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.testimonial-author span {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Seção CTA */
.cta-section {
  background: linear-gradient(135deg, #f9f9f9, #ffffff);
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 18px 40px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
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
  
  .partners-simple-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    width: 60%;
    margin: 0 auto;
  }
  
  .partners-simple-grid {
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
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .parallax-container {
    background-attachment: scroll;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .partners-simple-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .testimonials-grid {
    width: 80%;
  }
  
  .partner-logo {
    height: 100px;
    padding: 20px;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .stat-card {
    padding: 30px 20px;
  }
  
  .testimonial-card {
    padding: 60px 20px;
  }
  
  .partners-simple-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .partner-logo {
    height: 80px;
    padding: 15px;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .cta-content h2 {
    font-size: 1.8rem;
  }
  
  .cta-button {
    padding: 15px 30px;
    font-size: 1rem;
  }
}

@media (max-width: 450px) {
  .testimonials-grid {
    width: 90%;
    margin: 0 auto;
    gap: 25px;
  }
  
  .testimonial-card {
    min-height: 320px;
    padding: 30px 20px;
  }
  
  .quote-icon {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .testimonial-card p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  
  .testimonial-author {
    padding-top: 15px;
  }
  
  .testimonial-author strong {
    font-size: 1rem;
  }
  
  .testimonial-author span {
    font-size: 0.85rem;
  }
}

/* Animações */
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

.stat-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Efeito de brilho para botões */
.cta-button {
  position: relative;
  overflow: hidden;
}

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

.cta-button:hover::after {
  left: 100%;
}
</style>
