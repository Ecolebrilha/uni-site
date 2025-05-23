<template>
  <div class="about-page">
    <HomeHeader />
    
    <!-- Hero Section com Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">Nossa História</h1>
        <div class="hero-subtitle">Conheça a Uni Hospitalar</div>
      </div>
    </section>
    
    <!-- Seção de Introdução -->
    <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Sobre Nós</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            A Uni Hospitalar é referência nacional na distribuição de medicamentos e produtos para saúde, 
  combinando excelência operacional com um profundo compromisso com o bem-estar dos brasileiros. 
  Nossa jornada de quase duas décadas é marcada por inovação, qualidade e relacionamentos duradouros 
  com clientes e parceiros.
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
              <h3>Quem Somos</h3>
              <p>
                Há 19 anos no mercado, a Uni Hospitalar vem conquistando espaço na distribuição 
                de medicamentos de forma sólida e consolidada, comprometida com a saúde e bem-estar 
                da sociedade. Fornecemos produtos de alta qualidade e serviços excepcionais, sempre 
                com uma visão aprofundada do mercado farmacêutico.
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
              <h3>Missão</h3>
              <p>
                Ser uma empresa sólida e confiável na distribuição de medicamentos, surpreendendo 
                os clientes com a melhor prestação de serviços, e fornecer soluções de saúde acessíveis, 
                inovadoras e de alta qualidade. Contribuímos para o bem-estar e qualidade de vida das pessoas, 
                sempre com ética, responsabilidade e compromisso com nossos valores.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="400">
            <div class="mvv-card vision">
              <div class="mvv-icon">
                <i class="fas fa-eye"></i>
              </div>
              <h3>Visão</h3>
              <p>
                Ser reconhecida como a principal distribuidora de medicamentos do Brasil, expandindo 
                nossas operações para novas regiões e setores, sempre buscando excelência em tudo o que 
                fazemos, mantendo a transparência e respeito com as relações humanas.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="500">
            <div class="mvv-card values">
              <div class="mvv-icon">
                <i class="fas fa-heart"></i>
              </div>
              <h3>Valores</h3>
              <p>Nosso trabalho é guiado pelos seguintes valores fundamentais:</p>
              <div class="values-container">
                <ScrollReveal v-for="(valor, index) in valores" :key="index" 
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
              <div class="stat-number">19</div>
              <div class="stat-label">Anos de Experiência</div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="300">
            <div class="stat-item">
              <div class="stat-number">1000+</div>
              <div class="stat-label">Clientes Satisfeitos</div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="400">
            <div class="stat-item">
              <div class="stat-number">5000+</div>
              <div class="stat-label">Produtos Distribuídos</div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="500">
            <div class="stat-item">
              <div class="stat-number">27</div>
              <div class="stat-label">Estados Atendidos</div>
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
            <h2>Faça parte da nossa história</h2>
            <p>Entre em contato conosco e descubra como podemos trabalhar juntos.</p>
            <router-link to="/Contato" class="cta-button">Fale Conosco</router-link>
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

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  data() {
    return {
      selectedLanguage: 'pt',
      sidebarOpen: false,
      valores: [
        'Ética',
        'Qualidade',
        'Inovação',
        'Responsabilidade',
        'Compromisso',
        'Transparência',
        'Agilidade',
        'Objetividade',
        'Integridade'
      ],
      valorIcons: [
        'fas fa-balance-scale',    // Ética
        'fas fa-award',            // Qualidade
        'fas fa-lightbulb',        // Inovação
        'fas fa-hands-helping',    // Responsabilidade
        'fas fa-handshake',        // Compromisso
        'fas fa-glasses',          // Transparência
        'fas fa-bolt',             // Agilidade
        'fas fa-bullseye',         // Objetividade
        'fas fa-shield-alt'        // Integridade
      ]
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

.intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
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
  background-color: white;
}

.card-container {
  max-width: 900px;
  margin: 0 auto;
}

.info-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 40px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px;
  color: white;
  font-size: 2.5rem;
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

.info-card h3 {
  font-size: 1.8rem;
  color: #AE2C2A;
  margin-bottom: 20px;
  font-weight: 700;
}

.info-card p {
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
}

/* Seção Missão, Visão e Valores */
.mvv-section {
  background: linear-gradient(135deg, #f5f7fa, #e9ecef);
  position: relative;
  overflow: hidden;
}

.mvv-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.mvv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 1;
}

.mvv-card {
  background: white;
  border-radius: 15px;
  padding: 40px 30px 0 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mvv-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.mvv-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px;
  color: white;
  font-size: 1.8rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.mission .mvv-icon {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.2);
}

.vision .mvv-icon {
  background: linear-gradient(135deg, #2C5EAE, #5584ff);
  box-shadow: 0 10px 20px rgba(44, 94, 174, 0.2);
}

.values .mvv-icon {
  background: linear-gradient(135deg, #2CAE6F, #55ff84);
  box-shadow: 0 10px 20px rgba(44, 174, 111, 0.2);
}

.mvv-card h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
}

.mission h3 {
  color: #AE2C2A;
}

.vision h3 {
  color: #2C5EAE;
}

.values h3 {
  color: #2CAE6F;
}

.mvv-card p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
}

.values-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 25px;
  justify-content: center;
}

.value-tag {
  display: inline-block;
  transition: all 0.3s ease;
}

.value-pill {
  display: flex;
  align-items: center;
  padding: 10px 18px;
  background: linear-gradient(135deg, rgba(44, 174, 111, 0.1), rgba(44, 174, 111, 0.2));
  color: #2CAE6F;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(44, 174, 111, 0.3);
  box-shadow: 0 3px 10px rgba(44, 174, 111, 0.1);
}

.value-pill i {
  margin-right: 8px;
  font-size: 1rem;
}

.value-pill:hover {
  background: linear-gradient(135deg, #2CAE6F, #1a8c53);
  color: white;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 20px rgba(44, 174, 111, 0.3);
}

/* Adicione cores diferentes para cada valor para criar um visual mais dinâmico */
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

.value-pill:nth-child(3n+2) {
  background: linear-gradient(135deg, rgba(44, 94, 174, 0.1), rgba(44, 94, 174, 0.2));
  color: #2C5EAE;
  border: 1px solid rgba(44, 94, 174, 0.3);
  box-shadow: 0 3px 10px rgba(44, 94, 174, 0.1);
}

.value-pill:nth-child(3n+2):hover {
  background: linear-gradient(135deg, #2C5EAE, #1a4580);
  color: white;
  box-shadow: 0 8px 20px rgba(44, 94, 174, 0.3);
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
  opacity: 0.3;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 1;
}

.stat-item {
  text-align: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

/* Seção CTA */
.cta-section {
  background: linear-gradient(135deg, #f5f7fa, #e9ecef);
  text-align: center;
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
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(174, 44, 42, 0.4);
}

/* Responsividade */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .section-title h2 {
    font-size: 2.2rem;
  }
  
  .intro-text {
    font-size: 1.2rem;
  }
  
  .mvv-card {
    padding: 30px 25px;
  }
}

@media (max-width: 999px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
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
  
  .card-icon {
    width: 80px;
    height: 80px;
    font-size: 2.2rem;
  }
  
  .info-card h3 {
    font-size: 1.6rem;
  }
  
  .info-card p {
    font-size: 1rem;
  }

  .mvv-grid {
    grid-template-columns: 1fr;
    gap: 100px;
  }
  
  .mvv-card h3 {
    font-size: 1.4rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .stat-label {
    font-size: 1rem;
  }
  
  .cta-content h2 {
    font-size: 2.2rem;
  }
  
  .cta-content p {
    font-size: 1.1rem;
  }
}

@media (max-width: 929px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }
  
  .hero-section {
    height: 60vh;
    min-height: 400px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-title h2 {
    font-size: 1.8rem;
  }
  
  .accent-line {
    width: 50px;
  }
  
  .intro-text {
    font-size: 1rem;
  }
  
  .mvv-grid {
    grid-template-columns: 1fr;
    gap: 100px;
  }

  .mvv-card {
    padding: 20px;
  }
  
  .values-container {
    gap: 10px;
  }
  
  .value-pill {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
  
  .value-pill i {
    font-size: 0.9rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .stat-item {
    padding: 20px;
  }
  
  .stat-number {
    font-size: 2.2rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
  
  .cta-content h2 {
    font-size: 1.8rem;
  }
  
  .cta-content p {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 12px 30px;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-title h2 {
    font-size: 1.6rem;
  }
  
  .accent-line {
    width: 40px;
  }
  
  .card-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
  
  .info-card h3 {
    font-size: 1.4rem;
  }
  
  .mvv-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  .mvv-card h3 {
    font-size: 1.3rem;
  }
  
  .values-container {
    justify-content: center;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content h2 {
    font-size: 1.6rem;
  }
}
</style>
