<template>
    <div class="termos-legais">
      <HomeHeader />
  
      <div class="banner-container">
        <div class="banner-overlay">
          <h1>Normas Setoriais</h1>
        </div>
        <img src="@/assets/header-normas-setoriais.jpg" alt="Imagem do Banner">
      </div>
  
      <main>
        <section class="termos-content">
          <div class="termos-section">
    <h2>Conformidade com Normas Setoriais</h2>
    <p>
      A conformidade com normas setoriais é fundamental para garantir que as operações de uma organização estejam em linha com as exigências legais e regulatórias que governam seu setor específico. Essa prática assegura que a empresa opere de maneira ética e dentro dos parâmetros legais, minimizando riscos e evitando sanções.
    </p>
    </div>

    <div class="termos-section">
    <h2>Responsabilidade pela Conformidade</h2>
    <p>
      A responsabilidade pela conformidade com normas setoriais recai sobre todos os níveis da organização. Desde a alta administração até os funcionários operacionais, é imperativo que todos compreendam as regulamentações relevantes e como elas se aplicam às suas funções. A equipe de conformidade desempenha um papel crucial na implementação e monitoramento das práticas necessárias.
    </p>
    </div>

    <div class="termos-section">
    <h2>Obrigações Regulatórias</h2>
    <p>
      Cada setor possui suas próprias obrigações regulatórias, que podem incluir requisitos de segurança, práticas ambientais, governança corporativa, entre outros. A organização deve manter-se atualizada em relação a essas obrigações e garantir que seus processos internos estejam ajustados para cumpri-las integralmente.
    </p>
    </div>

    <div class="termos-section">
    <h2>Monitoramento e Avaliação</h2>
    <p>
      O monitoramento contínuo é essencial para assegurar a conformidade com normas setoriais. A auditoria interna e a avaliação periódica dos processos operacionais garantem que a organização se mantenha dentro dos padrões exigidos. Qualquer não conformidade deve ser corrigida prontamente para evitar penalidades.
    </p>
    </div>

    <div class="termos-section">
    <h2>Auditorias Externas</h2>
    <p>
      As auditorias externas também são uma parte importante da conformidade com normas setoriais. Elas fornecem uma visão independente sobre as práticas da organização e ajudam a identificar possíveis áreas de melhoria ou risco. As organizações devem estar preparadas para essas auditorias e cooperar plenamente com os auditores.
    </p>
    </div>

    <div class="termos-section">
    <h2>Compromisso com a Conformidade</h2>
    <p>
      O compromisso com a conformidade setorial não é apenas uma obrigação legal, mas também uma responsabilidade moral da organização. Ao cumprir essas normas, a empresa demonstra seu compromisso com a ética, a segurança e o respeito às regulações que visam proteger o bem-estar de todos os envolvidos.
    </p>
    <p>
      Ao seguir rigorosamente as normas setoriais aplicáveis, a organização não apenas mitiga riscos, mas também fortalece sua reputação no mercado, promovendo a confiança de clientes, parceiros e reguladores.
    </p>
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
