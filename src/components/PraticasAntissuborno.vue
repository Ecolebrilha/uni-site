<template>
    <div class="termos-legais">
      <HomeHeader />
  
      <div class="banner-container">
        <div class="banner-overlay">
          <h1>Práticas Antissuborno</h1>
        </div>
        <img src="@/assets/header-praticas-antissuborno.jpg" alt="Imagem do Banner">
      </div>
  
      <main>
  <section class="termos-content">
    <div class="termos-section">
      <h2>Compromisso Contra a Corrupção</h2>
      <p>A Uni Hospitalar se compromete a manter os mais altos padrões éticos em todas as suas operações e a combater qualquer forma de corrupção. Temos uma política rigorosa contra o suborno e garantimos que todos os colaboradores, fornecedores e parceiros cumpram com as normas estabelecidas.</p>
      <p>Nossa política de anticorrupção proíbe qualquer forma de pagamento ou presente que possa ser interpretado como um suborno ou incentivo indevido.</p>
    </div>

    <div class="termos-section">
      <h2>Procedimentos de Denúncia</h2>
      <p>Oferecemos canais seguros e confidenciais para a denúncia de práticas corruptas ou antiéticas. Incentivamos nossos colaboradores e parceiros a reportarem qualquer suspeita de suborno ou corrupção sem medo de retaliação.</p>
      <p>Todos os relatos serão investigados de forma justa e rigorosa, e tomaremos as medidas necessárias para corrigir qualquer violação de nossa política de antissuborno.</p>
    </div>

    <div class="termos-section">
      <h2>Treinamento e Conscientização</h2>
      <p>Promovemos treinamentos regulares para todos os colaboradores sobre ética e práticas antissuborno. Nosso objetivo é assegurar que todos entendam a importância de manter a integridade e estejam cientes das políticas e procedimentos para prevenir corrupção.</p>
      <p>Os treinamentos são atualizados periodicamente para refletir as melhores práticas e mudanças na legislação aplicável.</p>
    </div>

    <div class="termos-section">
      <h2>Monitoramento e Cumprimento</h2>
      <p>Realizamos auditorias e monitoramentos constantes para garantir a conformidade com nossas políticas antissuborno. Qualquer comportamento suspeito é investigado de forma rigorosa, e adotamos medidas corretivas quando necessário.</p>
      <p>Estamos comprometidos em criar e manter um ambiente de negócios transparente e ético, onde práticas de suborno são inaceitáveis e combatidas com seriedade.</p>
    </div>
  </section>
</main>
  
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
  .banner-container {
  position: relative;
  bottom: 60px;
  display: flex;
  justify-content: center;
}
  
  .banner-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  
  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .banner-overlay h1 {
    color: #FFFFFF;
    font-size: 4em;
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: slideInRight 1.5s ease-out;
  }
  
  @keyframes slideInRight {
    from {
      transform: translateX(50%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  main {
    display: flex;
    justify-content: center;
    padding-top: 75px;
    padding-bottom: 80px;
    background-color: #f4f4f4;
  }
  
  .termos-content {
    width: 70%;
    margin: auto;
    padding: 20px;
  }
  
  .termos-section {
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .termos-section h2 {
    font-size: 2em;
    font-weight: bold;
    color: #AE2C2A;
    margin-bottom: 15px;
  }
  
  .termos-section p {
    font-size: 1em;
    line-height: 1.6em;
    color: #34495e;
    margin-bottom: 15px;
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
  .banner-container {
    top: 82px;
    padding-top: 0px;
  }

  .termos-content {
    margin-top: 100px;
  }

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

@media (max-width: 992px) {
  .banner-overlay h1 {
    font-size: 3em;
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

@media (max-width: 400px) {
  .banner-overlay h1 {
    font-size: 1.5em;
  }

  .termos-section h2 {
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
  </style>
