<template>
    <div class="termos-legais">
      <HomeHeader />
  
      <div class="banner-container">
        <div class="banner-overlay">
          <h1>Segurança de Dados</h1>
        </div>
        <img src="@/assets/header-seguranca-dados.jpg" alt="Imagem do Banner">
      </div>
  
      <main>
  <section class="termos-content">
    <div class="termos-section">
      <h2>Compromisso com a Segurança de Dados</h2>
      <p>A Uni Hospitalar valoriza e protege os dados de seus pacientes, colaboradores e parceiros, implementando práticas rigorosas de segurança da informação. Nosso compromisso é garantir a confidencialidade, integridade e disponibilidade dos dados, de acordo com a legislação vigente.</p>
      <p>Utilizamos tecnologias avançadas e processos controlados para prevenir acessos não autorizados, vazamentos e qualquer forma de manipulação indevida das informações.</p>
    </div>

    <div class="termos-section">
      <h2>Políticas de Privacidade e Proteção de Dados</h2>
      <p>Adotamos uma política de privacidade que visa proteger os dados pessoais de todos os indivíduos com os quais nos relacionamos. Seguimos os princípios estabelecidos pela Lei Geral de Proteção de Dados (LGPD), garantindo que os dados coletados sejam tratados de forma transparente e segura.</p>
      <p>Coletamos apenas as informações necessárias para a prestação de nossos serviços, e asseguramos que esses dados serão utilizados exclusivamente para os fins aos quais foram destinados.</p>
    </div>

    <div class="termos-section">
      <h2>Medidas de Segurança</h2>
      <p>Entre as medidas de segurança adotadas pela Uni Hospitalar, destacam-se o uso de criptografia, firewalls, sistemas de detecção de intrusões e políticas rigorosas de controle de acesso. Além disso, realizamos auditorias regulares para identificar e corrigir vulnerabilidades.</p>
      <p>Nossos colaboradores são continuamente treinados para garantir que as melhores práticas de segurança da informação sejam seguidas em todas as operações diárias.</p>
    </div>

    <div class="termos-section">
      <h2>Responsabilidade e Conformidade</h2>
      <p>A Uni Hospitalar se compromete a agir em conformidade com todas as legislações de proteção de dados, incluindo a LGPD, e a cooperar com as autoridades competentes em caso de incidentes de segurança. Estamos comprometidos com a transparência e nos responsabilizamos pela segurança das informações que processamos.</p>
      <p>Nosso objetivo é garantir que todas as partes interessadas tenham a confiança de que seus dados estão protegidos com o mais alto padrão de segurança possível.</p>
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
      transform: translateX(70%);
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
