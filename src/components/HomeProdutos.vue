<template>
  <div class="produtos-page">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('products.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('products.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('products.introTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('products.introText') }}
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção de Categorias de Produtos -->
    <section class="products-categories">
      <div class="container">
        <div class="categories-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="category-card">
              <div class="category-icon">
                <i class="fas fa-box-open"></i>
              </div>
              <div class="category-content">
                <h3>{{ t('products.categories.productLine.title') }}</h3>
                <p>{{ t('products.categories.productLine.description') }}</p>
                <div class="category-features">
                  <span v-for="feature in t('products.categories.productLine.features')" :key="feature">{{ feature
                    }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="300">
            <div class="category-card reverse">
              <div class="category-content">
                <h3>{{ t('products.categories.diverseMedicines.title') }}</h3>
                <p>{{ t('products.categories.diverseMedicines.description') }}</p>
                <div class="category-features">
                  <span v-for="feature in t('products.categories.diverseMedicines.features')" :key="feature">{{ feature
                    }}</span>
                </div>
              </div>
              <div class="category-icon">
                <i class="fas fa-pills"></i>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" :delay="400">
            <div class="category-card">
              <div class="category-icon">
                <i class="fas fa-capsules"></i>
              </div>
              <div class="category-content">
                <h3>{{ t('products.categories.oncologyMedicines.title') }}</h3>
                <p>{{ t('products.categories.oncologyMedicines.description') }}</p>
                <div class="category-features">
                  <span v-for="feature in t('products.categories.oncologyMedicines.features')" :key="feature">{{ feature
                    }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="500">
            <div class="category-card reverse">
              <div class="category-content">
                <h3>{{ t('products.categories.hospitalMedicines.title') }}</h3>
                <p>{{ t('products.categories.hospitalMedicines.description') }}</p>
                <div class="category-features">
                  <span v-for="feature in t('products.categories.hospitalMedicines.features')" :key="feature">{{ feature
                    }}</span>
                </div>
              </div>
              <div class="category-icon">
                <i class="fas fa-hospital-alt"></i>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Destaques -->
    <section class="featured-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>{{ t('products.differentialsTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="features-grid">
          <ScrollReveal direction="bottom" :delay="300">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-truck-loading"></i>
              </div>
              <h4>{{ t('products.differentials.logistics.title') }}</h4>
              <p>{{ t('products.differentials.logistics.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <h4>{{ t('products.differentials.certified.title') }}</h4>
              <p>{{ t('products.differentials.certified.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="500">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-warehouse"></i>
              </div>
              <h4>{{ t('products.differentials.stock.title') }}</h4>
              <p>{{ t('products.differentials.stock.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="600">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h4>{{ t('products.differentials.partnerships.title') }}</h4>
              <p>{{ t('products.differentials.partnerships.description') }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Catálogo -->
    <section class="catalog-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="catalog-content">
            <div class="catalog-image">
              <i class="fas fa-file-pdf"></i>
            </div>
            <div class="catalog-text">
              <h3>{{ t('products.catalog.title') }}</h3>
              <p>{{ t('products.catalog.description') }}</p>
              <a href="/site/uni-hospitalar-produtos.pdf" target="_blank" class="catalog-button">
                <i class="fas fa-download"></i> {{ t('products.catalog.downloadButton') }}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção CTA -->
    <section class="cta-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="cta-content">
            <h2>{{ t('products.cta.title') }}</h2>
            <p>{{ t('products.cta.description') }}</p>
            <div class="cta-buttons">
              <router-link to="/Contato" class="cta-button primary">
                <i class="fas fa-envelope"></i> {{ t('products.cta.contactButton') }}</router-link>
              <a href="/site/uni-hospitalar-produtos.pdf" target="_blank" class="cta-button secondary">
                <i class="fas fa-download"></i> {{ t('products.cta.catalogButton') }}
              </a>
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
import { useProductsTranslation } from '@/composables/useProductsTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useProductsTranslation()

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
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.produtos-page {
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
  background-image: url('@/assets/header-produtos.jpg');
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

/* Seção de Categorias de Produtos */
.products-categories {
  background-color: #ffffff;
  position: relative;
  padding: 100px 0;
}

.products-categories::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.categories-grid {
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  gap: 30px;
}

.categories-grid>div {
  opacity: 0;
  transition: all 0.8s ease-out;
}

.categories-grid>div:nth-child(odd) {
  transform: translateX(-50px);
  align-self: flex-start;
  margin-right: auto;
}

.categories-grid>div:nth-child(even) {
  transform: translateX(50px);
  align-self: flex-end;
  margin-left: auto;
}

.categories-grid>div.is-revealed {
  opacity: 1;
  transform: translateX(0);
}

.categories-grid>div:nth-child(1) .category-card,
.categories-grid>div:nth-child(3) .category-card {
  width: 100%;
}

.categories-grid>div:nth-child(2) .category-card,
.categories-grid>div:nth-child(4) .category-card {
  width: 100%;
}

.categories-grid>div:nth-child(2) .category-content h3::after,
.categories-grid>div:nth-child(4) .category-content h3::after {
  left: auto;
  right: 0;
}

.category-card {
  display: flex;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 800px;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.category-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  font-size: 2.5rem;
  padding: 20px;
}

.category-content {
  padding: 25px;
  flex: 1;
}

.category-content h3 {
  font-size: 1.4rem;
  color: #AE2C2A;
  margin-bottom: 12px;
  font-weight: 700;
  position: relative;
  padding-bottom: 12px;
}

.category-content h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #AE2C2A;
}

.category-content p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.category-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-features span {
  background-color: #f5f5f5;
  color: #AE2C2A;
  padding: 8px 15px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.category-features span:hover {
  background-color: #AE2C2A;
  color: white;
  transform: translateY(-3px);
}

/* Seção de Destaques */
.featured-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.featured-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 60px;
  position: relative;
  z-index: 1;
}

.feature-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, background-color 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.feature-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.feature-icon {
  font-size: 2.2rem;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;
}

.feature-item h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: white;
  flex-shrink: 0;
}

.feature-item p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

/* Seção de Catálogo */
.catalog-section {
  background-color: #f9f9f9;
  position: relative;
}

.catalog-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.catalog-content {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.catalog-image {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  font-size: 5rem;
  padding: 20px;
}

.catalog-text {
  padding: 40px;
  flex: 1;
}

.catalog-text h3 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
}

.catalog-text p {
  color: #666;
  margin-bottom: 25px;
  font-size: 1.1rem;
}

.catalog-button {
  display: inline-block;
  padding: 15px 30px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

.catalog-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(174, 44, 42, 0.4);
}

.catalog-button i {
  margin-right: 10px;
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

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-block;
  padding: 15px 40px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

.cta-button.secondary {
  background: white;
  color: #AE2C2A;
  border: 2px solid #AE2C2A;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.cta-button.primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(174, 44, 42, 0.4);
}

.cta-button.secondary:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  background: #f9f9f9;
}

.cta-button i {
  margin-right: 10px;
}

.feature-item:hover .feature-icon {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

.cta-button.secondary:hover {
  color: #ff5555;
  border-color: #ff5555;
}

.feature-item:nth-child(1) {
  border-bottom: 3px solid rgba(255, 85, 85, 0.5);
}

.feature-item:nth-child(2) {
  border-bottom: 3px solid rgba(85, 150, 255, 0.5);
}

.feature-item:nth-child(3) {
  border-bottom: 3px solid rgba(85, 255, 157, 0.5);
}

.feature-item:nth-child(4) {
  border-bottom: 3px solid rgba(255, 204, 85, 0.5);
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 1139px) {
  .features-grid {
    grid-template-columns: 1fr 1fr;
    row-gap: 80px;
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

  .category-card {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }

  .category-card.reverse {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }

  .category-card.reverse .category-icon {
    order: -1;
  }

  .category-icon {
    min-width: 100%;
    padding: 30px 0;
  }

  .categories-grid>div {
    width: 100% !important;
    max-width: 100% !important;
    align-self: center !important;
  }

  .catalog-content {
    flex-direction: column;
  }

  .catalog-image {
    min-width: 100%;
    height: 150px;
  }

  .features-grid {
    margin-bottom: 20px;
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

  .cta-content h2 {
    font-size: 2rem;
  }

  .catalog-text h3 {
    font-size: 1.8rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .categories-grid>div {
    align-self: center !important;
  }

  .categories-grid>div:nth-child(1) .category-card,
  .categories-grid>div:nth-child(3) .category-card,
  .categories-grid>div:nth-child(2) .category-card,
  .categories-grid>div:nth-child(4) .category-card {
    width: 100%;
  }

  .category-card {
    flex-direction: column;
  }

  .category-icon {
    min-width: 100%;
    padding: 15px 0;
  }

  .cta-button.primary,
  .cta-button.secondary {
    width: 50%;
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

  .cta-button {
    padding: 12px 30px;
    font-size: 1rem;
    width: 50%;
    margin: 0 auto;
    display: block;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .category-features {
    justify-content: center;
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

.category-icon i,
.feature-icon i,
.catalog-image i {
  animation: float 3s ease-in-out infinite;
}

.category-card:hover .category-icon {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Animação para o botão de catálogo */
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

.catalog-button:hover,
.cta-button.primary:hover {
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

  .category-content h3 {
    font-size: 1.4rem;
  }

  .feature-item {
    padding: 20px;
  }

  .feature-icon {
    font-size: 2rem;
  }

  .feature-item h4 {
    font-size: 1.2rem;
  }

  .catalog-text {
    padding: 20px;
  }

  .catalog-text h3 {
    font-size: 1.5rem;
  }

  .catalog-text p {
    font-size: 1rem;
  }

  .catalog-button {
    padding: 10px;
    font-size: 0.7rem;
  }

  .cta-button.primary,
  .cta-button.secondary {
    width: 80%;
  }
}

</style>
