<template>
  <div class="contato-page">
    <HomeHeader />
    
    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">Contato</h1>
        <div class="hero-subtitle">Estamos à sua disposição</div>
      </div>
    </section>
    
    <!-- Seção Principal de Contato -->
    <section class="contact-main">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Fale Conosco</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            Estamos prontos para atender suas necessidades. Escolha o departamento desejado e entre em contato conosco.
          </p>
        </ScrollReveal>
        
        <div class="contact-container">
          <!-- Tabs de Navegação -->
          <div class="contact-tabs">
            <ScrollReveal direction="left" :delay="200">
              <button 
                @click="activeSection = 'SAC'" 
                :class="{ active: activeSection === 'SAC' }"
                class="tab-button">
                <i class="fas fa-headset"></i>
                <span>Suporte</span>
              </button>
              
              <button 
                @click="activeSection = 'Comercial'" 
                :class="{ active: activeSection === 'Comercial' }"
                class="tab-button">
                <i class="fas fa-shopping-cart"></i>
                <span>Comercial</span>
              </button>
              
              <button 
                @click="activeSection = 'Licitação'" 
                :class="{ active: activeSection === 'Licitação' }"
                class="tab-button">
                <i class="fas fa-file-contract"></i>
                <span>Licitação</span>
              </button>
              
              <button 
                @click="activeSection = 'Financeiro'" 
                :class="{ active: activeSection === 'Financeiro' }"
                class="tab-button">
                <i class="fas fa-chart-line"></i>
                <span>Financeiro</span>
              </button>
            </ScrollReveal>
          </div>
          
          <!-- Conteúdo dos Tabs -->
          <div class="contact-content">
            <ScrollReveal direction="right" :delay="300">
              <!-- Suporte -->
<div v-if="activeSection === 'SAC'" class="contact-panel">
  <div class="contact-header">
    <div class="contact-icon">
      <i class="fas fa-headset"></i>
    </div>
    <h3>Suporte ao Cliente</h3>
  </div>
  
  <div class="contact-info">
    <div class="info-item">
      <i class="fas fa-envelope"></i>
      <p>contato@unihospitalar.com.br</p>
    </div>
    <div class="info-item">
      <i class="fas fa-phone"></i>
      <p>+55 (81) 3472 7201</p>
    </div>
    <div class="info-item">
      <i class="fas fa-clock"></i>
      <p>Segunda a Sexta: 8h às 18h</p>
    </div>
  </div>
  
  <div class="contact-message">
    <div class="message-header">
      <i class="fas fa-paper-plane"></i>
      <h4>Envie sua mensagem</h4>
    </div>
    <p>Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!</p>
    <ContatoFormulario :activeSection="activeSection" />
  </div>
</div>

<!-- Comercial -->
<div v-if="activeSection === 'Comercial'" class="contact-panel">
  <div class="contact-header">
    <div class="contact-icon">
      <i class="fas fa-shopping-cart"></i>
    </div>
    <h3>Departamento Comercial</h3>
  </div>
  
  <div class="contact-info">
    <div class="info-item">
      <i class="fas fa-envelope"></i>
      <p>vendas@unihospitalar.com.br</p>
    </div>
    <div class="info-item">
      <i class="fas fa-phone"></i>
      <p>+55 (81) 3472 7224</p>
    </div>
    <div class="info-item">
      <i class="fas fa-clock"></i>
      <p>Segunda a Sexta: 8h às 18h</p>
    </div>
  </div>
  
  <div class="contact-message">
    <div class="message-header">
      <i class="fas fa-paper-plane"></i>
      <h4>Envie sua mensagem</h4>
    </div>
    <p>Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!</p>
    <ContatoFormulario :activeSection="activeSection" />
  </div>
</div>

<!-- Licitação -->
<div v-if="activeSection === 'Licitação'" class="contact-panel">
  <div class="contact-header">
    <div class="contact-icon">
      <i class="fas fa-file-contract"></i>
    </div>
    <h3>Departamento de Licitação</h3>
  </div>
  
  <div class="contact-info">
    <div class="info-item">
      <i class="fas fa-envelope"></i>
      <p>licitacao@unihospitalar.com.br</p>
    </div>
    <div class="info-item">
      <i class="fas fa-phone"></i>
      <p>+55 (81) 3472 7215</p>
    </div>
    <div class="info-item">
      <i class="fas fa-clock"></i>
      <p>Segunda a Sexta: 8h às 18h</p>
    </div>
  </div>
  
  <div class="contact-message">
    <div class="message-header">
      <i class="fas fa-paper-plane"></i>
      <h4>Envie sua mensagem</h4>
    </div>
    <p>Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!</p>
    <ContatoFormulario :activeSection="activeSection" />
  </div>
</div>

<!-- Financeiro -->
<div v-if="activeSection === 'Financeiro'" class="contact-panel">
  <div class="contact-header">
    <div class="contact-icon">
      <i class="fas fa-chart-line"></i>
    </div>
    <h3>Departamento Financeiro</h3>
  </div>
  
  <div class="contact-info">
    <div class="info-item">
      <i class="fas fa-envelope"></i>
      <p>financeiro@unihospitalar.com.br</p>
    </div>
    <div class="info-item">
      <i class="fas fa-phone"></i>
      <p>+55 (81) 3472 7202</p>
    </div>
    <div class="info-item">
      <i class="fas fa-clock"></i>
      <p>Segunda a Sexta: 8h às 18h</p>
    </div>
  </div>
  
  <div class="contact-message">
    <div class="message-header">
      <i class="fas fa-paper-plane"></i>
      <h4>Envie sua mensagem</h4>
    </div>
    <p>Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!</p>
    <ContatoFormulario :activeSection="activeSection" />
  </div>
</div>
</ScrollReveal>
</div>
</div>
</div>
</section>
    
    <!-- Seção de Localização -->
<section class="location-section">
  <div class="container">
    <ScrollReveal direction="bottom" :delay="200">
      <div class="section-title light">
        <span class="accent-line"></span>
        <h2>Nossas Localizações</h2>
        <span class="accent-line"></span>
      </div>
    </ScrollReveal>
    
    <div class="location-tabs">
      <ScrollReveal direction="bottom" :delay="250">
        <div class="location-selector">
          <div 
            v-for="(branch, index) in branches" 
            :key="index"
            @click="setActiveBranch(index)"
            :class="['location-tab', { active: activeBranch === index }]"
          >
            <div class="tab-icon">
              <i :class="branch.icon"></i>
            </div>
            <div class="tab-info">
              <h4>{{ branch.name }}</h4>
              <span>{{ branch.city }}</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
    
    <div class="location-container">
      <ScrollReveal direction="left" :delay="300">
        <div class="location-map">
          <transition name="fade" mode="out-in">
            <iframe 
              :key="activeBranch"
              :src="branches[activeBranch].mapUrl" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </transition>
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="right" :delay="400">
        <div class="location-info">
          <transition name="slide" mode="out-in">
            <div :key="activeBranch" class="location-card">
              <div class="location-header">
                <i :class="branches[activeBranch].icon"></i>
                <h3>{{ branches[activeBranch].name }}</h3>
              </div>
              <div class="location-details">
                <p><strong>Endereço:</strong> {{ branches[activeBranch].address }}</p>
                <p><strong>CEP:</strong> {{ branches[activeBranch].cep }}</p>
                <p><strong>Telefone:</strong> {{ branches[activeBranch].phone }}</p>
                <p><strong>E-mail:</strong> {{ branches[activeBranch].email }}</p>
                <p><strong>Horário de Funcionamento:</strong> {{ branches[activeBranch].hours }}</p>
              </div>
              <div class="location-actions">
                <a :href="branches[activeBranch].directionsUrl" target="_blank" class="directions-button">
                  <i class="fas fa-directions"></i>
                  <span>Como Chegar</span>
                </a>
              </div>
            </div>
          </transition>
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
import ContatoFormulario from '@/components/ContatoFormulario.vue';
import { mask } from 'v-mask';

export default {
  name: 'ContatoPage',
  components: {
    ContatoFormulario,
    HomeHeader,
    HomeFooter
  },
  data() {
    return {
      activeSection: 'SAC',
      selectedLanguage: 'pt',
      sidebarOpen: false,
      activeBranch: 0, // Filial ativa inicialmente (Recife)
      branches: [
        {
          name: 'Matriz Recife',
          city: 'Recife - PE',
          icon: 'fas fa-building',
          address: 'Rua Alagoas, 253 - Ipsep, Recife - PE',
          cep: '51350-000',
          phone: '+55 (81) 3472 7200',
          email: 'contato@unihospitalar.com.br',
          hours: 'Segunda a Sexta: 8h às 18h',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5461650060187!2d-34.9142373!3d-8.0992698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1e5cfb3f2b35%3A0x5c9d6ad871d3c9e0!2sR.%20Alagoas%2C%20253%20-%20Ipsep%2C%20Recife%20-%20PE%2C%2051350-000!5e0!3m2!1spt-BR!2sbr!4v1656520123456!5m2!1spt-BR!2sbr',
          directionsUrl: 'https://www.google.com/maps/dir//R.+Alagoas,+253+-+Ipsep,+Recife+-+PE,+51350-000'
        },
        {
          name: 'CD Fortaleza',
          city: 'Fortaleza - CE',
          icon: 'fas fa-warehouse',
          address: 'R. Francisco Jose Albuquerque Pereira - Cajazeiras, Fortaleza - CE',
          cep: '60864-520',
          phone: '+55 (81) 3472 7202',
          email: 'fortaleza@unihospitalar.com.br',
          hours: 'Segunda a Sexta: 8h às 18h',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.954729928924!2d-38.58232312426936!3d-3.8271872440876074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c7a7a7a7a7a7%3A0x9e3e5b0d8d3d8d3d!2sR.%20Francisco%20Jose%20Albuquerque%20Pereira%20-%20Cajazeiras%2C%20Fortaleza%20-%20CE%2C%2060864-520!5e0!3m2!1spt-BR!2sbr!4v1625151234567!5m2!1spt-BR!2sbr',
          directionsUrl: 'https://www.google.com/maps/dir//R.+Francisco+Jose+Albuquerque+Pereira+-+Cajazeiras,+Fortaleza+-+CE,+60864-520'
        },
        {
          name: 'CD São Paulo',
          city: 'Cotia - SP',
          icon: 'fas fa-warehouse',
          address: 'R. Pinhal, 165 - Jardim Sabiá, Cotia - SP',
          cep: '06716-575',
          phone: '+55 (11) 4777-2159',
          email: 'sp@unihospitalar.com.br',
          hours: 'Segunda a Sexta: 8h às 18h',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3963130076986!2d-46.92011492368744!3d-23.55290096159868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03b8b1b8b8b9%3A0x9e3e5b0d8d3d8d3d!2sR.%20Pinhal%2C%20165%20-%20Jardim%20Sabi%C3%A1%2C%20Cotia%20-%20SP%2C%2006716-575!5e0!3m2!1spt-BR!2sbr!4v1625151234567!5m2!1spt-BR!2sbr',
          directionsUrl: 'https://www.google.com/maps/dir//R.+Pinhal,+165+-+Jardim+Sabiá,+Cotia+-+SP,+06716-575'
        }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    changeLanguage(event) {
      const language = event.target.value;
      this.$i18n.locale = language;
      this.selectedLanguage = language;
    },
    setActiveBranch(index) {
      this.activeBranch = index;
    }
  },
  directives: {
    mask
  }
};
</script>

<style scoped>
/* Estilos Gerais */
.contato-page {
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
  background-image: url('@/assets/header-contato2.jpg');
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

/* Seção Principal de Contato */
.contact-main {
  background-color: #f9f9f9;
  position: relative;
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

/* Container de Contato */
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
}

/* Tabs de Navegação */
.contact-tabs {
  width: 100%;
  margin-bottom: 30px;
}

.contact-tabs > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
}

.tab-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  color: #555;
  font-weight: 600;
  font-size: 1.1rem;
  min-width: 150px;
}

.tab-button i {
  font-size: 1.5rem;
  margin-right: 15px;
  color: #AE2C2A;
  transition: all 0.3s ease;
}

.tab-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.tab-button.active {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
}

.tab-button.active i {
  color: white;
}

/* Conteúdo dos Tabs */
.contact-content {
  width: 100%;
}

/* Responsividade para os tabs */
@media (max-width: 768px) {
  .tab-button {
    min-width: calc(50% - 10px);
    flex: 0 0 calc(50% - 10px);
    padding: 15px 10px;
  }
}

@media (max-width: 576px) {
  .tab-button {
    min-width: 100%;
    flex: 0 0 100%;
    margin-bottom: 10px;
  }
}

.contact-panel {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.contact-header {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-icon {
  font-size: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.contact-header h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}

.contact-info {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border-bottom: 1px solid #eee;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  min-width: 250px;
}

.info-item i {
  font-size: 1.5rem;
  color: #AE2C2A;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  border-radius: 50%;
}

.info-item p {
  margin: 0;
  font-size: 1.1rem;
  color: #555;
}

.contact-message {
  padding: 30px;
}

.message-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
}

.message-header i {
  font-size: 1.5rem;
  color: #AE2C2A;
  line-height: 1;
}

.message-header h4 {
  font-size: 1.3rem;
  color: #333;
  margin: 0;
}

.contact-message p {
  color: #666;
  margin-bottom: 30px;
}

/* Seção de Localização */
.location-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 80px 0;
}

.location-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
}

.location-container {
  display: flex;
  gap: 40px;
  position: relative;
  flex-direction: column;
  z-index: 1;
}

.location-map {
  flex: 3;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.location-info {
  flex: 2;
}

.location-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  padding: 30px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.location-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.location-header i {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.location-header h3 {
  font-size: 1.8rem;
  color: white;
  margin: 0;
}

.location-details p {
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}

/* Estilos para a seção de localização com tabs */
.location-tabs {
  margin-bottom: 40px;
}

.location-selector {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
}

.location-tab {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 15px 25px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
  min-width: 250px;
}

.location-tab:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.location-tab.active {
  background: rgba(255, 255, 255, 0.25);
  border-color: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.tab-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
}

.location-tab.active .tab-icon {
  background: rgba(255, 255, 255, 0.3);
}

.tab-info {
  flex: 1;
}

.tab-info h4 {
  margin: 0 0 5px;
  font-size: 1.1rem;
  color: white;
  font-weight: 600;
}

.tab-info span {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.location-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.location-map {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  height: 450px;
}

.location-map iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.location-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.location-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.location-header i {
  font-size: 2rem;
  color: white;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.location-header h3 {
  font-size: 1.8rem;
  color: white;
  margin: 0;
  font-weight: 700;
}

.location-details {
  flex: 1;
}

.location-details p {
  margin: 12px 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.6;
}

.location-details strong {
  color: white;
  font-weight: 600;
}

.location-actions {
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
}

.directions-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.directions-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.directions-button i {
  font-size: 1.2rem;
}

/* Animações para transições */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Ajustes específicos para telas grandes */
@media (min-width: 1200px) {
  .location-container {
    max-width: 1200px;
    flex-direction: column;
    margin: 0 auto;
  }
  
  .location-map {
    flex: 2;
    min-height: 500px; /* Altura mínima para o mapa */
  }
  
  .location-map iframe {
    height: 500px; /* Altura fixa para o iframe em telas grandes */
  }
  
  .location-info {
    flex: 1;
    display: flex;
    align-items: center;
  }
  
  .location-card {
    width: 100%;
    padding: 40px;
  }
  
  .location-details p {
    font-size: 1.2rem;
    margin: 15px 0;
  }
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .location-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .location-map {
    order: 2;
  }
  
  .location-info {
    order: 1;
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
  
  .contact-container {
    flex-direction: column;
  }
  
  .tab-button {
    flex: 1;
    min-width: 150px;
    justify-content: center;
  }
  
  .tab-button i {
    margin-right: 10px;
  }
  
  .location-container {
    flex-direction: column;
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
  
  .tab-button {
    padding: 15px;
    font-size: 0.9rem;
  }
  
  .tab-button i {
    font-size: 1.2rem;
  }
  
  .contact-header {
    padding: 20px;
  }
  
  .contact-icon {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
  }
  
  .contact-header h3 {
    font-size: 1.5rem;
  }
  
  .info-item {
    min-width: 100%;
  }
  
  .banner-container {
    top: 82px;
    padding-top: 0px;
  }

  .location-selector {
    flex-direction: column;
    align-items: center;
  }
  
  .location-tab {
    width: 100%;
    max-width: 400px;
  }
  
  .location-header {
    flex-direction: column;
    text-align: center;
  }
  
  .location-details p {
    font-size: 1rem;
  }
  
  .location-actions {
    justify-content: center;
  }
}

@media (max-width: 725px) {
  .contact-tabs > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  
  .tab-button {
    width: 100%;
    min-width: auto;
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
  
  .tab-button {
    min-width: 100%;
    margin-bottom: 10px;
  }

  .contact-tabs > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .contact-info {
    padding: 20px;
  }
  
  .contact-message {
    padding: 20px;
  }
  
  .banner-overlay h1 {
    font-size: 1.5em;
  }

  .location-tab {
    padding: 12px 15px;
  }
  
  .tab-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .tab-info h4 {
    font-size: 1rem;
  }
  
  .location-header i {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .location-header h3 {
    font-size: 1.5rem;
  }
  
  .location-map {
    height: 350px;
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

.contact-icon i, .location-header i {
  animation: float 3s ease-in-out infinite;
}

/* Animação para os botões de tab quando em hover */
.tab-button:hover i {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

/* Animação para o mapa */
.location-map {
  transition: transform 0.3s ease;
}

.location-map:hover {
  transform: scale(1.02);
}

/* Efeito de destaque para os itens de informação */
.info-item:hover i {
  background-color: #AE2C2A;
  color: white;
  transition: all 0.3s ease;
}

/* Ajustes específicos para banner em dispositivos móveis */
@media (max-width: 400px) {
  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

@media (max-width: 768px) {
  .banner-overlay h1 {
    font-size: 2em;
  }
}

@media (max-width: 576px) {
  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

/* Animação para a seção de localização */
.location-details p {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.location-details p:nth-child(1) {
  animation-delay: 0.3s;
}

.location-details p:nth-child(2) {
  animation-delay: 0.6s;
}

.location-details p:nth-child(3) {
  animation-delay: 0.9s;
}

.location-details p:nth-child(4) {
  animation-delay: 1.2s;
}

.location-details p:nth-child(5) {
  animation-delay: 1.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efeito de sombra para os cards */
.contact-panel {
  position: relative;
}

.contact-panel::before {
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

.contact-panel:hover::before {
  opacity: 1;
}

/* Efeito de destaque para links dentro do conteúdo */
.contact-message a {
  color: #AE2C2A;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.contact-message a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #AE2C2A;
  transition: width 0.3s ease;
}

.contact-message a:hover {
  color: #ff5555;
}

.contact-message a:hover::after {
  width: 100%;
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

  .location-tab {
    width: 80%;
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

/* Efeito de pulsação para os ícones de contato */
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

.info-item i:hover {
  animation: pulse 1.5s infinite;
}

/* Efeito de transição suave para os painéis de contato */
.contact-panel {
  transition: opacity 0.5s ease, transform 0.5s ease;
  animation: fadeIn 0.5s ease-out;
}

/* Estilo para o formulário de contato dentro do painel */
.contact-message form {
  margin-top: 30px;
}

/* Efeito de hover para o card de localização */
.location-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.location-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Estilo para o iframe do mapa */
.location-map iframe {
  display: block;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.location-map iframe:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

/* Ajustes para dispositivos muito pequenos */
@media (max-width: 350px) {
  .tab-button {
    padding: 10px;
    font-size: 0.8rem;
  }
  
  .tab-button i {
    font-size: 1rem;
    margin-right: 5px;
  }
  
  .contact-header h3 {
    font-size: 1.2rem;
  }
  
  .info-item p {
    font-size: 0.9rem;
  }
  
  .location-header h3 {
    font-size: 1.4rem;
  }
  
  .location-details p {
    font-size: 0.9rem;
  }
}
</style>