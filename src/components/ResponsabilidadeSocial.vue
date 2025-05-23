<template>
    <div class="termos-legais">
      <HomeHeader />
  
      <div class="banner-container">
        <div class="banner-overlay">
          <h1>Responsabilidade Social</h1>
        </div>
        <img src="@/assets/header-responsabilidade-social.jpg" alt="Imagem do Banner">
      </div>
  
      <main>
        <section class="termos-content">
          <div class="termos-section">
          <h2>Compromisso com a Sustentabilidade</h2>
          <p>A Uni Hospitalar está comprometida com a sustentabilidade e o bem-estar social. Acreditamos que é nosso dever contribuir para um futuro mais saudável, reduzindo o impacto ambiental de nossas operações e promovendo práticas sustentáveis em todos os nossos processos.</p>
          <p>Nossa empresa adota políticas rigorosas de gestão de resíduos, eficiência energética e consumo consciente de recursos naturais, alinhando-se às melhores práticas do setor para garantir a preservação do meio ambiente.</p>
        </div>

        <div class="termos-section">
          <h2>Projetos Sociais</h2>
          <p>Estamos comprometidos em apoiar a comunidade em que atuamos. Através de parcerias com organizações locais, a Uni Hospitalar investe em projetos que promovem saúde e educação, com foco em populações vulneráveis.</p>
          <p>Além disso, promovemos campanhas de conscientização sobre saúde preventiva, incentivando hábitos saudáveis e promovendo o bem-estar físico e mental de nossa comunidade.</p>
        </div>

        <div class="termos-section">
          <h2>Gestão Sustentável</h2>
          <p>A sustentabilidade faz parte de nossa estratégia de negócios. Implementamos soluções tecnológicas que reduzem o consumo de papel e energia, além de adotar práticas que melhoram a eficiência do uso de recursos. Nossos esforços incluem a instalação de painéis solares e o uso de equipamentos médicos de baixo consumo energético.</p>
          <p>Além disso, estamos empenhados em formar uma cultura corporativa que valoriza a diversidade, a inclusão e o respeito pelos direitos humanos, promovendo um ambiente de trabalho saudável e seguro para todos.</p>
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
