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
    <section ref="statsSection" class="partners-stats-section">
      <div class="stats-container">
        <div class="stats-grid">
          <ScrollReveal direction="right" :delay="200" :distance="200" :duration="1500">
            <div class="stat-item left-aligned">
              <div class="stat-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <div class="stat-content">
                <div class="stat-number">
                  <span ref="partnersCounter">0</span>+
                </div>
                <div class="stat-title">{{ t('partners.stats.strategicPartners') }}</div>
                <div class="stat-description">{{ t('partners.stats.strategicPartnersDescription') }}</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" :delay="400" :distance="200" :duration="1500">
            <div class="stat-item right-aligned reverse">
              <div class="stat-content">
                <div class="stat-number">
                  <span ref="statesCounter">0</span>%
                </div>
                <div class="stat-title">{{ t('partners.stats.businessUnits') }}</div>
                <div class="stat-description">{{ t('partners.stats.businessUnitsDescription') }}</div>
              </div>
              <div class="stat-icon">
                <i class="fas fa-globe-americas"></i>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="600" :distance="200" :duration="1500">
            <div class="stat-item left-aligned">
              <div class="stat-icon">
                <i class="fas fa-award"></i>
              </div>
              <div class="stat-content">
                <div class="stat-number">
                  <span ref="yearsCounter">0</span>
                </div>
                <div class="stat-title">{{ t('partners.stats.yearsOfTrust') }}</div>
                <div class="stat-description">{{ t('partners.stats.yearsOfTrustDescription') }}</div>
              </div>
            </div>
          </ScrollReveal>
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
            <div v-for="n in 33" :key="`parceiro-${n}`" class="partner-logo">
              <img :src="require(`@/assets/parceiro${n}.jpg`)" :alt="`Parceiro ${n}`" :class="`partner-${n}`"
                @error="handleImageError">
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção de Depoimentos de Parceiros -->
    <!-- <section class="partners-testimonials">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2 class="section-title-light">{{ t('partners.testimonials.title') }}</h2>
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
    </section> -->

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
      sidebarOpen: false,
      companyFoundingYear: 2005, // Ano de fundação da empresa
      companyAnniversary: { month: 7, day: 11 } // 11 de julho
    }
  },
  computed: {
    yearsOfExperience() {
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();

      let years = currentYear - this.companyFoundingYear;

      // Se ainda não passou do aniversário deste ano, subtrai 1
      if (currentMonth < this.companyAnniversary.month ||
        (currentMonth === this.companyAnniversary.month && currentDay < this.companyAnniversary.day)) {
        years--;
      }

      return years;
    }
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  methods: {
    changeLanguage(event) {
      const value = typeof event === 'string' ? event : event.target.value;
      this.selectedLanguage = value;
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    handleImageError(e) {
      e.target.src = require('@/assets/logo-uni2.png');
    },

    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounters();
            observer.unobserve(entry.target);
          }
        });
      }, options);

      // Observar seção de estatísticas se existir
      if (this.$refs.statsSection) {
        observer.observe(this.$refs.statsSection);
      }
    },

    animateCounters() {
      const baseDuration = 10000;

      const counters = [
        { ref: this.$refs.partnersCounter, target: 33 },
        { ref: this.$refs.statesCounter, target: 100 },
        { ref: this.$refs.yearsCounter, target: this.yearsOfExperience }
      ];

      // Verificar se os refs existem antes de animar
      const validCounters = counters.filter(counter => counter.ref);

      if (validCounters.length === 0) return;

      validCounters.forEach(counter => {
        counter.ref.innerText = '0';
        counter.current = 0;
      });

      const steps = Math.floor(baseDuration / 16);
      let currentStep = 0;

      const animate = () => {
        currentStep++;
        const progress = currentStep / steps;

        validCounters.forEach(counter => {
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const value = Math.min(
            Math.floor(counter.target * easedProgress),
            counter.target
          );

          if (value !== counter.current) {
            counter.ref.innerText = value;
            counter.current = value;
          }
        });

        if (currentStep < steps) {
          requestAnimationFrame(animate);
        } else {
          validCounters.forEach(counter => {
            counter.ref.innerText = counter.target;
          });
        }
      };

      requestAnimationFrame(animate);
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
  border-bottom: 4px solid #AE2C2A;
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/header-parceiros.png');
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

.stats-container {
  width: 100%;
  padding: 0;
}

.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 180px;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 60px;
  width: 90%;
  max-width: 1200px;
  padding: 80px 50px;
  background: linear-gradient(145deg, #ffffff, #fafbfc);
  border-radius: 30px;
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.12),
    0 10px 20px rgba(174, 44, 42, 0.08),
    0 0 0 1px rgba(174, 44, 42, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background-clip: padding-box;
  position: relative;
  backdrop-filter: blur(10px);
}

.stat-item.left-aligned {
  margin-left: 5%;
  margin-right: auto;
}

.stat-item.right-aligned {
  margin-left: auto;
  margin-right: 5%;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  padding: 8px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555, #AE2C2A);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  z-index: -1;
}

.stat-item.reverse {
  flex-direction: row-reverse;
}

.stat-item.reverse::before {
  background: linear-gradient(135deg, #ff5555, #AE2C2A, #ff5555);
}

.stat-item:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow:
    0 35px 80px rgba(0, 0, 0, 0.18),
    0 15px 35px rgba(174, 44, 42, 0.15),
    0 0 0 2px rgba(174, 44, 42, 0.1),
    inset 0 2px 0 rgba(255, 255, 255, 1);
}

.stat-icon {
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555, #AE2C2A);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3.5rem;
  box-shadow:
    0 20px 40px rgba(174, 44, 42, 0.4),
    0 10px 20px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.stat-content {
  flex: 1;
  text-align: left;
}

.stat-item.reverse .stat-content {
  text-align: right;
}

.stat-number {
  font-size: 4rem;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 15px;
  line-height: 1;
}

.stat-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  line-height: 1.2;
}

.stat-description {
  font-size: 1.3rem;
  font-weight: 500;
  color: #696969;
  line-height: 1.6;
}

/* Seção Principal de Parceiros */
.partners-showcase-section {
  background-color: #ffffff;
  position: relative;
}

.partners-showcase-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ae2c2a' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  z-index: 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #2c3e50, #AE2C2A);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
}

.section-title-light {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #696969;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 45px;
  justify-items: center;
  align-items: center;
  margin-top: 60px;
  padding: 20px 0;
}

.partner-logo {
  background: linear-gradient(145deg, #ffffff, #fafbfc);
  border-radius: 20px;
  padding: 30px;
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.06),
    0 8px 20px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(174, 44, 42, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid rgba(174, 44, 42, 0.08);
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.partner-logo::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent);
  transition: left 0.7s ease;
  z-index: 1;
}

.partner-logo:hover::before {
  left: 100%;
}

.partner-logo:hover {
  transform: translateY(-12px);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.12),
    0 15px 30px rgba(174, 44, 42, 0.1),
    0 0 0 1px rgba(174, 44, 42, 0.15),
    inset 0 2px 0 rgba(255, 255, 255, 1);
  border-color: rgba(174, 44, 42, 0.2);
  background: linear-gradient(145deg, #ffffff, #f8fafc);
}

.partner-logo img {
  transform: scale(var(--img-scale, 1));
  max-width: 85%;
  max-height: 85%;
  object-fit: contain;
  filter: grayscale(60%) brightness(0.95) contrast(1.1);
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), filter 0.4s cubic-bezier(0.4,0,0.2,1);
  position: relative;
  z-index: 2;
}

.partner-logo:hover img {
  filter: grayscale(0%) brightness(1) contrast(1.2) saturate(1.1);
  transform: scale(calc(var(--img-scale, 1) * 1.2)); /* 20% maior */
}

.partner-1  { --img-scale: 1.6; }
.partner-2  { --img-scale: 1.1; }
.partner-3  { --img-scale: 1; }
.partner-6  { --img-scale: 1.3; }
.partner-7  { --img-scale: 1.25; }
.partner-8  { --img-scale: 0.9; }
.partner-9  { --img-scale: 0.8; }
.partner-10 { --img-scale: 0.9; }
.partner-11 { --img-scale: 1; }
.partner-13 { --img-scale: 0.8; }
.partner-14 { --img-scale: 0.9; }
.partner-15 { --img-scale: 1.6; }
.partner-16 { --img-scale: 1.7; }
.partner-17 { --img-scale: 1.1; }
.partner-18 { --img-scale: 1.1; }
.partner-19 { --img-scale: 1.1; }
.partner-20 { --img-scale: 2.2; }
.partner-21 { --img-scale: 0.8; }
.partner-22 { --img-scale: 1; }
.partner-23 { --img-scale: 1.4; }
.partner-24 { --img-scale: 1.1; }
.partner-25 { --img-scale: 0.9; }
.partner-26 { --img-scale: 1.8; }
.partner-27 { --img-scale: 1.2; }
.partner-28 { --img-scale: 0.9; }
.partner-30 { --img-scale: 1.3; }
.partner-31 { --img-scale: 0.9; }
.partner-32 { --img-scale: 3; }

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
  background: linear-gradient(135deg, #2c3e50, #AE2C2A);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  color: #696969;
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

@media (max-width: 1400px) {
  .stat-item {
    width: 82%;
    padding: 70px 40px;
    gap: 50px;
  }

  .stat-item.left-aligned {
    margin-left: 3%;
  }

  .stat-item.right-aligned {
    margin-right: 3%;
  }

  .stat-icon {
    width: 120px;
    height: 120px;
    font-size: 3.2rem;
  }

  .stat-number {
    font-size: 3.5rem;
  }

  .stat-title {
    font-size: 2rem;
  }

  .stat-description {
    font-size: 1.2rem;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }

  .stats-grid {
    gap: 60px;
    min-height: auto;
  }

  .stat-item {
    flex-direction: column !important;
    text-align: center;
    gap: 30px;
    padding: 50px 30px;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 90%;
    max-width: 600px;
  }

  .stat-item.reverse {
    flex-direction: column-reverse !important;
  }

  .stat-item.reverse .stat-content {
    text-align: center;
  }

  .stat-content {
    text-align: center;
  }

  .stat-number,
  .stat-title {
    text-align: center;
  }

  .stat-icon {
    width: 120px;
    height: 120px;
    font-size: 3rem;
  }

  .stat-number {
    font-size: 3.5rem;
  }

  .stat-title {
    font-size: 2rem;
  }

  .stat-description {
    font-size: 1.2rem;
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

  .stats-grid {
    gap: 40px;
  }

  .stat-item {
    padding: 40px 25px;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 95%;
    max-width: 500px;
  }

  .stat-icon {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }

  .stat-number {
    font-size: 3rem;
  }

  .stat-title {
    font-size: 1.8rem;
  }

  .stat-description {
    font-size: 1.1rem;
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

  .stats-grid {
    gap: 30px;
  }

  .stat-item {
    padding: 30px 20px;
    gap: 25px;
    width: 100%;
    max-width: 400px;
  }

  .stat-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-title {
    font-size: 1.5rem;
  }

  .stat-description {
    font-size: 1rem;
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
  .stat-item {
    width: 80%;
  }

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
