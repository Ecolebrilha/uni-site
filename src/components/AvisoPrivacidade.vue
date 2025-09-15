<template>
    <div class="aviso-privacidade-page">
      <HomeHeader />
  
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="parallax-container">
          <div class="overlay"></div>
          <h1 class="hero-title">{{ t('privacyNotice.heroTitle') }}</h1>
          <div class="hero-subtitle">{{ t('privacyNotice.heroSubtitle') }}</div>
        </div>
      </section>
  
      <!-- Conteúdo Principal -->
<section class="content-section">
  <div class="container">
    <ScrollReveal direction="bottom" :delay="100">
      <div class="content-header">
        <h2>{{ t('privacyNotice.header.title') }}</h2>
        <p class="last-updated">{{ t('privacyNotice.header.lastUpdated') }} {{ new Date().toLocaleDateString(currentLanguage === 'pt' ? 'pt-BR' : currentLanguage === 'en' ? 'en-US' : 'es-ES') }}</p>
      </div>
    </ScrollReveal>

    <div class="content-body">
      <ScrollReveal direction="bottom" :delay="200">
        <div class="section">
          <h3>{{ t('privacyNotice.sections.purpose.title') }}</h3>
          <p>{{ t('privacyNotice.sections.purpose.content') }}</p>
        </div>
      </ScrollReveal>

      <div class="section-divider purpose"></div>

      <ScrollReveal direction="bottom" :delay="300">
        <div class="section">
          <h3>{{ t('privacyNotice.sections.dataCollected.title') }}</h3>
          <p>{{ t('privacyNotice.sections.dataCollected.intro') }}</p>
          <ul>
            <li>{{ t('privacyNotice.sections.dataCollected.items.identification') }}</li>
            <li>{{ t('privacyNotice.sections.dataCollected.items.contact') }}</li>
            <li>{{ t('privacyNotice.sections.dataCollected.items.professional') }}</li>
            <li>{{ t('privacyNotice.sections.dataCollected.items.documents') }}</li>
            <li>{{ t('privacyNotice.sections.dataCollected.items.interviews') }}</li>
          </ul>
        </div>
      </ScrollReveal>

      <div class="section-divider data"></div>

      <ScrollReveal direction="bottom" :delay="400">
        <div class="section">
          <h3>{{ t('privacyNotice.sections.legalBasis.title') }}</h3>
          <p>{{ t('privacyNotice.sections.legalBasis.content') }}</p>
        </div>
      </ScrollReveal>

      <div class="section-divider legal"></div>

      <ScrollReveal direction="bottom" :delay="500">
        <div class="section">
          <h3>{{ t('privacyNotice.sections.dataSharing.title') }}</h3>
          <p>{{ t('privacyNotice.sections.dataSharing.intro') }}</p>
          <ul>
            <li>{{ t('privacyNotice.sections.dataSharing.items.hr') }}</li>
            <li>{{ t('privacyNotice.sections.dataSharing.items.managers') }}</li>
            <li>{{ t('privacyNotice.sections.dataSharing.items.providers') }}</li>
            <li>{{ t('privacyNotice.sections.dataSharing.items.authorities') }}</li>
          </ul>
        </div>
      </ScrollReveal>

      <div class="section-divider sharing"></div>

      <ScrollReveal direction="bottom" :delay="600">
        <div class="section">
          <h3>{{ t('privacyNotice.sections.dataRetention.title') }}</h3>
          <div class="retention-options">
            <div class="option-card">
              <div class="option-icon">
                <i class="fas fa-clock"></i>
              </div>
              <h4>{{ t('privacyNotice.sections.dataRetention.withAuthorization.title') }}</h4>
              <p>{{ t('privacyNotice.sections.dataRetention.withAuthorization.content') }}</p>
            </div>
            
            <div class="option-card">
              <div class="option-icon">
                <i class="fas fa-trash-alt"></i>
              </div>
              <h4>{{ t('privacyNotice.sections.dataRetention.withoutAuthorization.title') }}</h4>
              <p>{{ t('privacyNotice.sections.dataRetention.withoutAuthorization.content') }}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div class="section-divider retention"></div>

      <ScrollReveal direction="bottom" :delay="700">
        <div class="section">
          <h3>{{ t('privacyNotice.sections.rights.title') }}</h3>
          <p>{{ t('privacyNotice.sections.rights.intro') }}</p>
          <div class="rights-grid">
            <div class="right-item">
              <i class="fas fa-info-circle"></i>
              <span>{{ t('privacyNotice.sections.rights.items.confirmation') }}</span>
            </div>
            <div class="right-item">
              <i class="fas fa-eye"></i>
              <span>{{ t('privacyNotice.sections.rights.items.access') }}</span>
            </div>
            <div class="right-item">
              <i class="fas fa-edit"></i>
              <span>{{ t('privacyNotice.sections.rights.items.correction') }}</span>
            </div>
            <div class="right-item">
              <i class="fas fa-ban"></i>
              <span>{{ t('privacyNotice.sections.rights.items.blocking') }}</span>
            </div>
            <div class="right-item">
              <i class="fas fa-download"></i>
              <span>{{ t('privacyNotice.sections.rights.items.portability') }}</span>
            </div>
            <div class="right-item">
              <i class="fas fa-times-circle"></i>
              <span>{{ t('privacyNotice.sections.rights.items.revocation') }}</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div class="section-divider rights"></div>

      <ScrollReveal direction="bottom" :delay="800">
        <div class="section">
          <h3>{{ t('privacyNotice.sections.security.title') }}</h3>
          <p>{{ t('privacyNotice.sections.security.content') }}</p>
        </div>
      </ScrollReveal>

      <div class="section-divider security"></div>

      <ScrollReveal direction="bottom" :delay="900">
        <div class="section contact-section">
          <h3>{{ t('privacyNotice.sections.contact.title') }}</h3>
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <strong>{{ t('privacyNotice.sections.contact.email') }}</strong>
                <a href="mailto:dpo@unihospitalar.com.br"> dpo@unihospitalar.com.br</a>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div>
                <strong>{{ t('privacyNotice.sections.contact.phone') }}</strong>
                <span> +55 (81) 3472 7201</span>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <strong>{{ t('privacyNotice.sections.contact.address') }}</strong>
                <span> {{ t('privacyNotice.sections.address.description') }}</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div class="section-divider contact"></div>

      <ScrollReveal direction="bottom" :delay="1000">
        <div class="section">
          <h3>{{ t('privacyNotice.sections.changes.title') }}</h3>
          <p>{{ t('privacyNotice.sections.changes.content') }}</p>
        </div>
      </ScrollReveal>
    </div>
  
          <!-- Botão de Voltar -->
          <ScrollReveal direction="bottom" :delay="1100">
            <div class="back-section">
              <button @click="goBack" class="back-button">
                <i class="fas fa-arrow-left"></i>
                {{ t('privacyNotice.backButton') }}
              </button>
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
  import ScrollReveal from '@/components/ScrollReveal.vue';
  import { usePrivacyNoticeTranslation } from '@/composables/usePrivacyNoticeTranslation.js';
  
  export default {
    name: 'AvisoPrivacidade',
    components: {
      HomeHeader,
      HomeFooter,
      ScrollReveal
    },
    setup() {
    const { t, currentLanguage } = usePrivacyNoticeTranslation()
    
    return {
      t,
      currentLanguage
    }
},
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos Gerais */
  .aviso-privacidade-page {
    font-family: 'Montserrat', sans-serif;
    color: #333;
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* Hero Section */
  .hero-section {
  position: relative;
  height: 85.3vh;
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
  background-color: #FFFFFF;
  background-image: url('@/assets/fundo-logo-uni.png');
  background-size: contain;
  background-position: center calc(50% - 80px);
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
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.8), rgba(0, 0, 0, 0.6));
}
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
    font-weight: 300;
    position: relative;
    z-index: 2;
  }
  
  /* Conteúdo Principal */
  .content-section {
    padding: 80px 0;
    background-color: #f9f9f9;
  }
  
  .content-header {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .content-header h2 {
    font-size: 2.5rem;
    color: #AE2C2A;
    margin-bottom: 10px;
  }
  
  .last-updated {
    color: #696969;
    font-style: italic;
  }
  
  .content-body {
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .section {
    padding: 40px;
    border-bottom: 1px solid #eee;
  }
  
  .section:last-child {
    border-bottom: none;
  }
  
  .section h3 {
    font-size: 1.8rem;
    color: #AE2C2A;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .section h3::before {
    content: '';
    width: 4px;
    height: 30px;
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    border-radius: 2px;
  }
  
  .section p {
    margin-bottom: 15px;
    font-size: 1.1rem;
    line-height: 1.7;
  }
  
  .section ul {
    margin: 20px 0;
    padding-left: 0;
  }
  
  .section li {
    list-style: none;
    position: relative;
    padding: 8px 0 8px 30px;
    font-size: 1.05rem;
  }
  
  .section li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #AE2C2A;
    font-weight: bold;
    font-size: 1.2rem;
  }

  /* Linha separadora entre seções */
.section-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #AE2C2A, #ff5555, #AE2C2A, transparent);
  margin: 40px 0;
  border-radius: 1px;
  position: relative;
}

.section-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  border: 2px solid #AE2C2A;
}

.section-divider::after {
  content: '\f3ed'; /* Ícone de escudo/proteção */
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #AE2C2A;
  font-size: 1.5rem;
  z-index: 1;
}

/* Variações de ícones para diferentes seções */
.section-divider.purpose::after {
  content: '\f0c0'; /* Ícone de usuários */
}

.section-divider.data::after {
  content: '\f1c0'; /* Ícone de database */
}

.section-divider.legal::after {
  content: '\f0e3'; /* Ícone de balança */
}

.section-divider.sharing::after {
  content: '\f1e0'; /* Ícone de compartilhar */
}

.section-divider.retention::after {
  content: '\f017'; /* Ícone de relógio */
}

.section-divider.rights::after {
  content: '\f21b'; /* Ícone de mão/direitos */
}

.section-divider.security::after {
  content: '\f3ed'; /* Ícone de escudo */
}

.section-divider.contact::after {
  content: '\f095'; /* Ícone de telefone */
}

.section-divider.changes::after {
  content: '\f021'; /* Ícone de refresh */
}
  
  /* Opções de Retenção */
  .retention-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
  }
  
  .option-card {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    border-left: 4px solid #AE2C2A;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .option-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .option-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 1.5rem;
  }
  
  .option-card h4 {
    color: #333;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }
  
  /* Grid de Direitos */
  .rights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .right-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 3px solid #AE2C2A;
  }
  
  .right-item i {
    color: #AE2C2A;
    font-size: 1.2rem;
    min-width: 20px;
  }
  
  /* Seção de Contato */
  .contact-section {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.05), rgba(255, 85, 85, 0.05));
  border-radius: 15px;
  margin-top: 20px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.contact-item i {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.1rem;
}

.contact-item a {
  color: #AE2C2A;
  text-decoration: none;
  font-weight: 600;
}

.contact-item a:hover {
  text-decoration: underline;
}

/* Botão de Voltar */
.back-section {
  text-align: center;
  margin-top: 40px;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(174, 44, 42, 0.3);
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.4);
}

.back-button:active {
  transform: translateY(0);
}

/* Responsividade */
@media (max-width: 992px) {
    .parallax-container {
    background-attachment: scroll;
    background-position: center calc(50% - 60px);
  }

  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .content-header h2 {
    font-size: 2.2rem;
  }
  
  .section {
    padding: 30px;
  }
  
  .section h3 {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 50vh;
    min-height: 350px;
  }

  .parallax-container {
    background-position: center calc(50% - 40px);
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .content-section {
    padding: 60px 0;
  }
  
  .content-header h2 {
    font-size: 2rem;
  }
  
  .section {
    padding: 25px;
  }
  
  .section h3 {
    font-size: 1.4rem;
  }
  
  .retention-options {
    grid-template-columns: 1fr;
  }
  
  .rights-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    gap: 15px;
  }

  .section-divider {
    margin: 30px 0;
  }
  
  .section-divider::before {
    width: 50px;
    height: 50px;
  }
  
  .section-divider::after {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 15px;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }

  .parallax-container {
    background-position: center calc(50% - 20px);
  }
  
  .content-header h2 {
    font-size: 1.8rem;
  }
  
  .section {
    padding: 20px;
  }
  
  .section h3 {
    font-size: 1.3rem;
  }
  
  .section p {
    font-size: 1rem;
  }
  
  .option-card {
    padding: 20px;
  }
  
  .option-icon {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
  
  .contact-item {
    padding: 12px;
  }
  
  .contact-item i {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  .back-button {
    padding: 12px 25px;
    font-size: 1rem;
  }
}

/* Animações */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  animation: fadeInUp 0.6s ease-out;
}

/* Estados de foco para acessibilidade */
.back-button:focus,
.contact-item a:focus {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}
</style>
