<template>
  <div class="compliance-page">
    <HomeHeader />
    
    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">Compliance</h1>
        <div class="hero-subtitle">Integridade e Transparência</div>
      </div>
    </section>
    
    <!-- Seção de Visão Geral -->
    <section class="overview-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Compliance e Código de Conduta</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            O nosso compromisso é com a integridade, transparência e conformidade. Explore o Código de Conduta que guia as práticas éticas da Uni Hospitalar e garante o respeito às normas e regulamentos aplicáveis.
          </p>
        </ScrollReveal>
        
        <div class="values-container">
          <ScrollReveal direction="left" :delay="200">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h3>Integridade</h3>
              <p>Atuamos com honestidade e ética em todas as nossas relações comerciais e profissionais.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="300">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3>Transparência</h3>
              <p>Mantemos uma comunicação clara e aberta com todos os nossos stakeholders.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="400">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <h3>Conformidade</h3>
              <p>Seguimos rigorosamente todas as leis, regulamentos e normas aplicáveis ao nosso setor.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Código de Conduta -->
    <section class="conduct-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Nosso Código de Conduta</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>
        
        <div class="conduct-container">
          <ScrollReveal direction="left" :delay="200">
            <div class="conduct-image">
  <img src="@/assets/compliance.jpg" alt="Código de Conduta" />
</div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="300">
            <div class="conduct-content">
              <h3><i class="fas fa-book"></i> Código de Conduta</h3>
              <p>Nosso Código de Conduta é um guia para todos os colaboradores, parceiros e fornecedores, assegurando um comportamento ético em todas as nossas atividades.</p>
              
              <div class="conduct-links">
                <router-link to="/CondutaEtica" class="conduct-link">
                  <i class="fas fa-check"></i>
                  <span>Conduta Ética e Integridade</span>
                </router-link>
                
                <router-link to="/ResponsabilidadeSocial" class="conduct-link">
                  <i class="fas fa-globe"></i>
                  <span>Responsabilidade Social e Sustentabilidade</span>
                </router-link>
                
                <router-link to="/DireitosHumanos" class="conduct-link">
                  <i class="fas fa-hands-helping"></i>
                  <span>Respeito aos Direitos Humanos</span>
                </router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Políticas -->
    <section class="policies-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>Políticas e Regulamentos</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text light">
            Acesse nossas políticas que reforçam o compromisso com a conformidade e a ética.
          </p>
        </ScrollReveal>
        
        <div class="policies-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="policy-card">
              <div class="policy-icon">
                <i class="fas fa-lock"></i>
              </div>
              <div class="policy-content">
                <h3>Política de Segurança de Dados</h3>
                <p>Protegemos todas as informações sensíveis e dados pessoais conforme as legislações vigentes.</p>
                <router-link to="/SegurancaDados" class="policy-link">Saiba mais <i class="fas fa-arrow-right"></i></router-link>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="300">
            <div class="policy-card">
              <div class="policy-icon">
                <i class="fas fa-ban"></i>
              </div>
              <div class="policy-content">
                <h3>Práticas Antissuborno</h3>
                <p>Mantemos tolerância zero contra qualquer forma de corrupção ou suborno em nossas operações.</p>
                <router-link to="/PraticasAntissuborno" class="policy-link">Saiba mais <i class="fas fa-arrow-right"></i></router-link>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="400">
            <div class="policy-card">
              <div class="policy-icon">
                <i class="fas fa-gavel"></i>
              </div>
              <div class="policy-content">
                <h3>Conformidade com Normas Setoriais</h3>
                <p>Seguimos rigorosamente todas as normas e regulamentações específicas do setor de saúde.</p>
                <router-link to="/NormasSetoriais" class="policy-link">Saiba mais <i class="fas fa-arrow-right"></i></router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Ações Corretivas -->
    <section class="corrective-section">
      <div class="container">
        <div class="corrective-container">
          <ScrollReveal direction="left" :delay="200">
            <div class="corrective-content">
              <h3><i class="fas fa-exclamation-triangle"></i> Instruções para Ações Corretivas</h3>
              <p>Identificou alguma irregularidade? Veja como proceder e entre em contato com nosso departamento para uma melhor orientação.</p>
              <p>A Uni Hospitalar mantém canais de comunicação abertos para relatos de possíveis violações ao nosso Código de Conduta ou políticas internas. Todos os relatos são tratados com confidencialidade e seriedade.</p>
              <router-link to="/Contato" class="cta-button">
                <i class="fas fa-phone"></i> Entre em Contato
              </router-link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="300">
            <div class="corrective-image">
  <img src="@/assets/acoes-corretivas.png" alt="Ações Corretivas" />
</div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Documentos Legais -->
    <section class="documents-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Documentos Legais</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            Acesse documentos completos como políticas de privacidade, termos de uso, entre outros.
          </p>
        </ScrollReveal>
        
        <div class="documents-container">
          <ScrollReveal direction="left" :delay="200">
            <div class="document-card">
              <div class="document-icon">
                <i class="fas fa-user-shield"></i>
              </div>
              <div class="document-content">
                <h3>Política de Privacidade</h3>
                <p>Nossa política de privacidade detalha como coletamos, usamos e protegemos seus dados pessoais.</p>
                <router-link to="/PoliticaPrivacidade" class="document-button">
                  <i class="fas fa-file-alt"></i> Acessar Documento
                </router-link>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="300">
            <div class="document-card">
              <div class="document-icon">
                <i class="fas fa-file-contract"></i>
              </div>
              <div class="document-content">
                <h3>Termos Legais de Uso</h3>
                <p>Nossos termos de uso estabelecem as regras e condições para utilização de nossos serviços e plataformas.</p>
                <router-link to="/TermosLegais" class="document-button">
                  <i class="fas fa-file-alt"></i> Acessar Documento
                </router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';

export default {
  name: 'CompliancePage',
  components: {
    HomeHeader,
    HomeFooter
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
.compliance-page {
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
  background-image: url('@/assets/logo-uni.jpeg');
  background-size: 70%;
  background-position: center 40%;
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

/* Seção de Visão Geral */
.overview-section {
  background-color: #f9f9f9;
  position: relative;
}

.overview-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
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
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #555;
  line-height: 1.8;
  text-align: center;
}

.intro-text.light {
  color: #ffffff;
}

/* Container de Valores */
.values-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
}

.value-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 30px;
  text-align: center;
  flex: 1;
  max-width: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
}

.value-icon i {
  font-size: 2.5rem;
  color: white;
}

.value-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.value-card p {
  color: #666;
  font-size: 1.1rem;
}

/* Seção de Código de Conduta */
.conduct-section {
  background-color: #ffffff;
}

.conduct-container {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
}

.conduct-image {
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.conduct-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.conduct-image:hover img {
  transform: scale(1.05);
}

.conduct-content {
  flex: 1;
}

.conduct-content h3 {
  font-size: 2rem;
  color: #AE2C2A;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.conduct-content h3 i {
  font-size: 1.8rem;
}

.conduct-content p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.8;
}

.conduct-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.conduct-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background: #f5f5f5;
  border-radius: 10px;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.conduct-link i {
  color: #AE2C2A;
  font-size: 1.2rem;
}

.conduct-link:hover {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  transform: translateX(10px);
}

.conduct-link:hover i {
  color: white;
}

/* Seção de Políticas */
.policies-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.policies-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.policies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  position: relative;
  z-index: 1;
}

.policy-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.policy-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.policy-icon {
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-shrink: 0;
}

.policy-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}

.policy-icon i {
  font-size: 2rem;
  color: white;
}

.policy-content h3 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 15px;
  flex-shrink: 0;
}

.policy-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  font-size: 1.1rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.policy-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;
}

.policy-link:hover {
  color: rgba(255, 255, 255, 0.7);
}

.policy-link i {
  transition: transform 0.3s ease;
}

.policy-link:hover i {
  transform: translateX(5px);
}

/* Seção de Ações Corretivas */
.corrective-section {
  background-color: #f9f9f9;
}

.corrective-container {
  display: flex;
  align-items: center;
  gap: 50px;
}

.corrective-content {
  flex: 1;
}

.corrective-content h3 {
  font-size: 2rem;
  color: #AE2C2A;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.corrective-content h3 i {
  font-size: 1.8rem;
}

.corrective-content p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.8;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

.corrective-image {
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.corrective-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.corrective-image:hover img {
  transform: scale(1.05);
}

/* Seção de Documentos Legais */
.documents-section {
  background-color: #ffffff;
}

.documents-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
}

.document-card {
  background: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  max-width: 500px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.document-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.document-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.document-icon i {
  font-size: 2.5rem;
  color: white;
}

.document-content h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.document-content p {
  color: #666;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.document-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 25px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.document-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
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
  
  .values-container {
    flex-direction: column;
    align-items: center;
  }
  
  .value-card {
    max-width: 100%;
    width: 100%;
  }
  
  .conduct-container {
    flex-direction: column;
  }
  
  .policies-grid {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 20px;
  }

  .policy-content p {
    min-height: auto;
  }
  
  .corrective-container {
    flex-direction: column;
  }
  
    .documents-container {
    flex-direction: column;
    align-items: center;
  }
  
  .document-card {
    max-width: 100%;
    width: 100%;
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

  .parallax-container {
    background-attachment: scroll;
    background-position: center 35% !important;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
  
  .intro-text {
    font-size: 1.1rem;
  }

  .value-icon {
    font-size: 1.2rem;
  }
  
 .document-icon {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }
  
  .value-card h3, .document-content h3 {
    font-size: 1.3rem;
  }
  
  .conduct-content h3, .corrective-content h3 {
    font-size: 1.8rem;
  }
  
  .banner-container {
    top: 82px;
    padding-top: 0px;
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
  
  .conduct-content p, .corrective-content p, .value-card p, .document-content p, .policy-content p {
    font-size: 1rem;
  }
  
  .conduct-link {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
  
  .cta-button, .document-button {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
  
  .banner-overlay h1 {
    font-size: 1.5em;
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

.value-icon i, .policy-icon i, .document-icon i {
  animation: float 3s ease-in-out infinite;
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

.value-icon:hover, .policy-icon:hover, .document-icon:hover {
  animation: pulse 1.5s infinite;
}

/* Efeito de destaque para links */
.conduct-link, .policy-link, .document-button, .cta-button {
  position: relative;
  overflow: hidden;
}

.conduct-link::after, .policy-link::after, .document-button::after, .cta-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s;
}

.conduct-link:hover::after, .policy-link:hover::after, .document-button:hover::after, .cta-button:hover::after {
  left: 100%;
}

/* Ajustes para a animação do slideInRight em diferentes tamanhos de tela */
@keyframes slideInRight {
  from {
    transform: translateX(85%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 480px) {
  @keyframes slideInRight {
    from {
      transform: translateX(10%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (max-width: 768px) {
  @keyframes slideInRight {
    from {
      transform: translateX(21%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 769px) {
  @keyframes slideInRight {
    from {
      transform: translateX(30%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 993px) {
  @keyframes slideInRight {
    from {
      transform: translateX(28%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 1390px) {
  @keyframes slideInRight {
    from {
      transform: translateX(57%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 300px) {
  @keyframes slideInRight {
    from {
      transform: translateX(11%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 400px) {
  @keyframes slideInRight {
    from {
      transform: translateX(30%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

/* Efeito de sombra para os cards */
.value-card, .policy-card, .document-card {
  position: relative;
}

.value-card::before, .policy-card::before, .document-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.value-card:hover::before, .policy-card:hover::before, .document-card:hover::before {
  opacity: 1;
}

@media (max-width: 350px) {
  .value-card, .policy-card, .document-card {
    padding: 20px;
  }
  
  .value-icon, .policy-icon, .document-icon {
    width: 50px;
    height: 50px;
  }
  
  .value-icon i, .policy-icon i, .document-icon i {
    font-size: 1.5rem;
  }
  
  .value-card h3, .policy-content h3, .document-content h3 {
    font-size: 1.2rem;
  }
  
  .conduct-content h3, .corrective-content h3 {
    font-size: 1.5rem;
  }
  
  .conduct-link, .policy-link {
    font-size: 0.8rem;
  }
  
  .cta-button, .document-button {
    padding: 10px 15px;
    font-size: 0.8rem;
  }
}

.conduct-image img, .corrective-image img {
  filter: brightness(0.95);
  transition: filter 0.3s ease, transform 0.5s ease;
}

.conduct-image:hover img, .corrective-image:hover img {
  filter: brightness(1.05);
}

.section-title h2 {
  position: relative;
  display: inline-block;
}

.section-title h2::after {
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

.section-title.light h2::after {
  background-color: #ffffff;
}

.section-title:hover h2::after {
  width: 80%;
}
</style>
