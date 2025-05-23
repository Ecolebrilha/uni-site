<template>
    <div class="termos-legais">
      <HomeHeader />
      
      <div class="banner-container">
        <div class="banner-overlay">
          <h1>Direitos Humanos</h1>
        </div>
        <img src="@/assets/header-direitos-humanos.jpg" alt="Imagem do Banner">
      </div>
  
      <main>
      <section class="termos-content">
        <div class="termos-section">
          <h2>Compromisso com os Direitos Humanos</h2>
          <p>A Uni Hospitalar se compromete com o respeito e a promoção dos direitos humanos em todas as suas atividades. Acreditamos que cada indivíduo tem o direito de ser tratado com dignidade e respeito, independentemente de sua raça, gênero, origem, religião ou condição social.</p>
          <p>Trabalhamos para garantir que nossos colaboradores, parceiros e pacientes sejam tratados de forma justa, com políticas que promovem a igualdade e combatem qualquer tipo de discriminação.</p>
        </div>

        <div class="termos-section">
          <h2>Políticas de Inclusão e Diversidade</h2>
          <p>Buscamos criar um ambiente inclusivo, onde todas as vozes sejam ouvidas e respeitadas. Nossas políticas de inclusão e diversidade garantem que as oportunidades dentro da Uni Hospitalar sejam acessíveis a todos, sem distinção.</p>
          <p>Promovemos ações afirmativas que assegurem uma representatividade ampla e o respeito às diferenças, reconhecendo a importância de um ambiente diverso para a inovação e o crescimento.</p>
        </div>

        <div class="termos-section">
          <h2>Responsabilidade Social e Direitos Humanos</h2>
          <p>A Uni Hospitalar atua de forma responsável, respeitando os direitos das comunidades em que está inserida. Participamos de iniciativas que visam o bem-estar social e a preservação dos direitos fundamentais de cada indivíduo, como a saúde, a educação e a segurança.</p>
          <p>Estamos comprometidos com práticas éticas que priorizam a vida humana e a dignidade de todas as pessoas, reforçando nosso papel na promoção de uma sociedade mais justa e equitativa.</p>
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
      transform: translateX(85%);
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
