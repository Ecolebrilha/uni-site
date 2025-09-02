<template>
  <div class="about-page">
    <HomeHeader />

    <!-- Hero Section com Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('about.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('about.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção de Introdução -->
    <!-- <section class="intro-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title2">
            <span class="accent-line2"></span>
            <h2>{{ t('about.introTitle') }}</h2>
            <span class="accent-line2"></span>
          </div>
        </ScrollReveal>
      </div>
    </section> -->

     <!-- Seção Quem Somos -->
     <section class="who-we-are">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="card-container">
            <div class="info-card">
              <div class="card-icon-two">
                <i class="fas fa-users"></i>
              </div>
              <h3>{{ t('about.whoWeAreTitle') }}</h3>
              <p>
                {{ t('about.whoWeAreText') }}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção Timeline -->
    <section class="timeline-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Linha do tempo</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('about.introText') }}
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="bottom" :delay="300">
          <div class="new-timeline-container">
            <div class="timeline-scroll-wrapper">
              <!-- Linha da timeline estática -->
            <div class="timeline-line"></div>
            
            <!-- Bolinhas da timeline com anos e traços integrados -->
            <div class="timeline-dots">
              <div 
                v-for="(milestone, index) in timelineMilestones" 
                :key="index"
                class="timeline-dot-wrapper"
                :style="{ '--dot-index': index }">
                <div 
                  class="timeline-dot"
                  :class="{ 'active': currentActiveCard === index }"
                  @mouseenter="handleDotHover(index)"
                  @mouseleave="handleDotLeave">
                  <span class="dot-year">{{ milestone.year }}</span>
                </div>
                <!-- Traço conectivo fixo para cada dot com card integrado -->
                <div 
                  class="dot-connector"
                  :class="{ 
                    'active': currentActiveCard === index,
                    'entering': enteringCard === index,
                    'exiting': exitingCard === index,
                    'bottom': index % 2 === 0,
                    'top': index % 2 !== 0
                  }"
                  v-show="currentActiveCard === index || enteringCard === index || exitingCard === index">
                  <!-- Card integrado no final do traço -->
                  <div 
                    class="timeline-card"
                    :class="{ 
                      'active': currentActiveCard === index,
                      'entering': enteringCard === index,
                      'exiting': exitingCard === index,
                      'bottom': index % 2 === 0,
                      'top': index % 2 !== 0
                    }">
                    <div class="card-icon" :style="{ backgroundColor: milestone.color }">
                      <i :class="milestone.icon"></i>
                    </div>
                    <div class="card-content">
                      <div class="card-title">{{ milestone.title }}</div>
                      <div class="card-description">{{ milestone.description }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Seção Missão, Visão e Valores -->
    <section class="mvv-section">
      <div class="container">
        <div class="mvv-grid">
          <ScrollReveal direction="left" :delay="300">
            <div class="mvv-card mission">
              <div class="mvv-icon">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3>{{ t('about.missionTitle') }}</h3>
              <p>
                {{ t('about.missionText') }}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="mvv-card vision">
              <div class="mvv-icon">
                <i class="fas fa-eye"></i>
              </div>
              <h3>{{ t('about.visionTitle') }}</h3>
              <p>
                {{ t('about.visionText') }}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="500">
            <div class="mvv-card values">
              <div class="mvv-icon">
                <i class="fas fa-heart"></i>
              </div>
              <h3>{{ t('about.valuesTitle') }}</h3>
              <p>{{ t('about.valuesText') }}</p>
              <!-- <div class="values-container">
                <ScrollReveal v-for="(valor, index) in t('about.values')" :key="index" direction="fade"
                  :delay="600 + (index * 100)" customClass="value-tag">
                  <span class="value-pill">
                    <i :class="valorIcons[index]"></i>
                    {{ valor }}
                  </span>
                </ScrollReveal>
              </div> -->
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Estatísticas -->
    <!-- <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <ScrollReveal direction="bottom" :delay="200">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="stat-number">
                <span ref="experienceCounter" :data-target="yearsOfExperience">0</span>
              </div>
              <div class="stat-label">{{ t('about.stats.experience.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <div class="stat-number">
                <span ref="clientsCounter" data-target="5000">0</span>+
              </div>
              <div class="stat-label">{{ t('about.stats.clients.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="400">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-boxes"></i>
              </div>
              <div class="stat-number">
                <span ref="productsCounter" data-target="500">0</span>+
              </div>
              <div class="stat-label">{{ t('about.stats.products.label') }}</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="500">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="stat-number">
                <span ref="statesCounter" data-target="15">0</span>
              </div>
              <div class="stat-label">{{ t('about.stats.states.label') }}</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section> -->

    <!-- Seção de Diferenciais -->
    <!-- <section class="differentials-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('about.differentials.title') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="differentials-grid">
          <ScrollReveal v-for="(differential, index) in t('about.differentials.items')" :key="index"
            :direction="getDifferentialDirection(index)" :delay="200 + (index * 100)">
            <div class="differential-item">
              <div class="differential-icon">
                <i :class="differentialIcons[index]"></i>
              </div>
              <h4>{{ differential.title }}</h4>
              <p>{{ differential.description }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section> -->

    <!-- Seção CTA -->
    <section class="cta-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="200">
          <div class="cta-content">
            <div class="cta-icon">
              <i class="fas fa-comments"></i>
            </div>
            <h2>{{ t('about.ctaTitle') }}</h2>
            <p>{{ t('about.ctaText') }}</p>
            <router-link to="/Contato" class="cta-button">
              {{ t('about.ctaButton') }}
              <i class="fas fa-arrow-right"></i>
            </router-link>
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
import { useAboutTranslation } from '@/composables/useAboutTranslation.js';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useAboutTranslation()

    return {
      t,
      currentLanguage
    }
  },
  data() {
    return {
      sidebarOpen: false,
      companyFoundingYear: 2005, // Ano de fundação da empresa
      companyAnniversary: { month: 7, day: 11 }, // 11 de julho
      statsAnimated: false, // Flag para controlar se as animações já foram executadas
      timelineAnimation: null,
      currentActiveCard: 0,
      enteringCard: null,
      exitingCard: null,
      autoRotationInterval: null,
      isHovering: false,
      timelineMilestones: [
        {
          year: '2005',
          title: 'Fundação da Empresa',
          description: 'Início das atividades com foco em medicamentos hospitalares. Estabelecimento da sede e primeiras operações comerciais.',
          icon: 'fas fa-rocket',
          color: '#3498db'
        },
        {
          year: '2008',
          title: 'Expansão Regional',
          description: 'Ampliação para novos estados e diversificação do portfólio. Crescimento da equipe e abertura de novos canais de distribuição.',
          icon: 'fas fa-expand-arrows-alt',
          color: '#e74c3c'
        },
        {
          year: '2012',
          title: 'Certificações Importantes',
          description: 'Obtenção de certificações de qualidade e boas práticas. Reconhecimento pelos órgãos reguladores e melhoria dos processos.',
          icon: 'fas fa-certificate',
          color: '#f39c12'
        },
        {
          year: '2015',
          title: 'Parceria Estratégica',
          description: 'Estabelecimento de parcerias com grandes laboratórios. Fortalecimento da cadeia de suprimentos e ampliação do portfólio.',
          icon: 'fas fa-handshake',
          color: '#9b59b6'
        },
        {
          year: '2018',
          title: 'Linha Oncológica',
          description: 'Lançamento de medicamentos especializados em oncologia. Investimento em produtos de alta complexidade e valor agregado.',
          icon: 'fas fa-microscope',
          color: '#1abc9c'
        },
        {
          year: '2020',
          title: 'Inovação Digital',
          description: 'Implementação de tecnologias digitais e e-commerce. Modernização dos processos e criação de novos canais de venda.',
          icon: 'fas fa-laptop-code',
          color: '#34495e'
        },
        {
          year: '2022',
          title: 'Sustentabilidade',
          description: 'Programas de responsabilidade social e ambiental. Compromisso com o desenvolvimento sustentável e impacto positivo.',
          icon: 'fas fa-leaf',
          color: '#27ae60'
        },
        {
          year: '2024',
          title: 'Liderança Nacional',
          description: 'Consolidação como referência no mercado farmacêutico. Posicionamento entre as principais empresas do setor no Brasil.',
          icon: 'fas fa-crown',
          color: '#f1c40f'
        }
      ],
      valorIcons: [
        'fas fa-balance-scale',   // Ética
        'fas fa-gem',             // Qualidade
        'fas fa-rocket',          // Inovação
        'fas fa-user-shield',     // Responsabilidade
        'fas fa-handshake',       // Compromisso
        'fas fa-eye',             // Transparência
        'fas fa-bolt',            // Agilidade
        'fas fa-crosshairs',      // Objetividade
        'fas fa-award'            // Integridade
      ],
      differentialIcons: [
        'fas fa-award',           // Qualidade Premium
        'fas fa-shipping-fast',   // Entrega Rápida
        'fas fa-user-md',         // Suporte Especializado
        'fas fa-shield-alt',      // Confiabilidade
        'fas fa-cogs',            // Soluções Personalizadas
        'fas fa-chart-line'       // Inovação Constante
      ]
    }
  },
  computed: {
    yearsOfExperience() {
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();

      let years = currentYear - this.companyFoundingYear;

      // Se ainda não passou do aniversário deste ano, subtrai 1
      if (currentMonth < this.companyAnniversary.month ||
        (currentMonth === this.companyAnniversary.month && currentDay < this.companyAnniversary.day)) {
        years--;
      }

      return years;
    }
  },
  mounted() {
    // Observar quando a seção de estatísticas fica visível
    this.observeStatsSection();
    // Iniciar rotação automática da timeline
    this.startAutoRotation();
  },
  beforeUnmount() {
    // Limpar animação da timeline
    if (this.timelineAnimation) {
      this.timelineAnimation.cancel();
    }
    // Limpar intervalo de rotação automática
    if (this.autoRotationInterval) {
      clearInterval(this.autoRotationInterval);
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    getDifferentialDirection(index) {
      const directions = ['left', 'bottom', 'right', 'left', 'bottom', 'right'];
      return directions[index] || 'bottom';
    },
    observeStatsSection() {
      // Usar Intersection Observer para detectar quando a seção está visível
      const statsSection = document.querySelector('.stats-section');
      if (!statsSection) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.statsAnimated) {
            this.animateCounters();
            this.statsAnimated = true;
          }
        });
      }, {
        threshold: 0.3 // Animar quando 30% da seção estiver visível
      });

      observer.observe(statsSection);
    },
    animateCounters() {
      const baseDuration = 6000; // 6 segundos

      const counters = [
        { ref: this.$refs.experienceCounter, target: this.yearsOfExperience },
        { ref: this.$refs.clientsCounter, target: 5000 },
        { ref: this.$refs.productsCounter, target: 2500 },
        { ref: this.$refs.statesCounter, target: 27 }
      ];

      // Resetar todos os contadores para 0
      counters.forEach(counter => {
        if (counter.ref) {
          counter.ref.innerText = '0';
          counter.current = 0;
        }
      });

      const steps = Math.floor(baseDuration / 16); // ~60fps
      let currentStep = 0;

      const animate = () => {
        currentStep++;
        const progress = currentStep / steps;

        counters.forEach(counter => {
          if (counter.ref) {
            // Easing function (ease-out cubic)
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const value = Math.min(
              Math.floor(counter.target * easedProgress),
              counter.target
            );

            if (value !== counter.current) {
              counter.ref.innerText = value;
              counter.current = value;
            }
          }
        });

        if (currentStep < steps) {
          requestAnimationFrame(animate);
        } else {
          // Garantir que os valores finais sejam definidos
          counters.forEach(counter => {
            if (counter.ref) {
              counter.ref.innerText = counter.target;
            }
          });
        }
      };

      requestAnimationFrame(animate);
    },
    
    startAutoRotation() {
      this.autoRotationInterval = setInterval(() => {
        if (!this.isHovering) {
          this.nextCard();
        }
      }, 5000); // 10 segundos
    },
    
    nextCard() {
      const nextIndex = (this.currentActiveCard + 1) % this.timelineMilestones.length;
      this.currentActiveCard = nextIndex;
    },
    
    setActiveCard(index) {
      if (this.currentActiveCard === index) return;
      this.currentActiveCard = index;
    },
    
    handleDotHover(index) {
      this.isHovering = true;
      this.exitingCard = null;
      this.enteringCard = null;
      this.currentActiveCard = index;
    },
    
    handleDotLeave() {
      this.isHovering = false;
    },
    
    resumeAutoRotation() {
      this.isHovering = false;
    },
    
    pauseAutoRotation() {
      this.isHovering = true;
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
  max-width: 1650px;
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
  min-height: 600px;
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
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.8), rgba(139, 34, 32, 0.9));
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: fadeInUp 1.5s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.6rem;
  font-weight: 300;
  position: relative;
  z-index: 2;
  animation: fadeInUp 1.5s ease-out 0.3s both;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  max-width: 600px;
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
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  text-align: center;
  position: relative;
}

.intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
  padding: 30px 0;
}

.section-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 100%;
  background: radial-gradient(ellipse, rgba(174, 44, 42, 0.05) 0%, transparent 70%);
  border-radius: 50px;
  z-index: -1;
}

.section-title h2 {
  font-size: 3.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #AE2C2A, #D2342C, #AE2C2A);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
}

.section-title h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #AE2C2A, #D2342C);
  border-radius: 2px;
}

.accent-line {
  height: 6px;
  width: 120px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C, #AE2C2A);
  border-radius: 3px;
  box-shadow: 0 3px 10px rgba(174, 44, 42, 0.3);
  position: relative;
}

.accent-line::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
}

.section-title2 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.section-title2 h2 {
  font-size: 2.8rem;
  font-weight: 700;
  color: rgb(174, 44, 42);
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
  margin: 0px 20px;
}

.accent-line2 {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, rgb(174, 44, 42), rgb(210, 52, 44));
  border-radius: 2px;
}

.intro-text {
  font-size: 1.4rem;
  max-width: 900px;
  margin: 0 auto;
  color: #555;
  line-height: 1.9;
  position: relative;
  z-index: 1;
  font-weight: 400;
  margin-bottom: 80px;
}

/* Seção Quem Somos */
.who-we-are {
  background-color: #ffffff;
  position: relative;
}

.who-we-are::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ae2c2a' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
}

.card-container {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.info-card {
  background: white;
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(174, 44, 42, 0.1);
  max-width: 900px;
  transition: all 0.4s ease;
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.info-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 80px rgba(174, 44, 42, 0.15);
}

.card-icon-two {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  color: white;
  font-size: 2.2rem;
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.3);
}

.info-card h3 {
  font-size: 2.2rem;
  color: #AE2C2A;
  margin-bottom: 25px;
  font-weight: 700;
}

.info-card p {
  color: #696969;
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
}

/* Seção MVV (Missão, Visão, Valores) */
.mvv-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  position: relative;
}

.mvv-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ae2c2a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.mvv-grid {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1200px;
  gap: 50px;
  position: relative;
  z-index: 1;
}

.mvv-card {
  background: white;
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(174, 44, 42, 0.1);
}

.mvv-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
}

.mvv-card.vision::before {
  background: linear-gradient(135deg, #8B2220, #AE2C2A);
}

.mvv-card.values::before {
  background: linear-gradient(135deg, #D2342C, #FF4444);
}

.mvv-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
}

.mvv-icon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  color: white;
  font-size: 2.2rem;
  transition: transform 0.3s ease;
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.3);
}

.mvv-card.vision .mvv-icon {
  background: linear-gradient(135deg, #8B2220, #AE2C2A);
}

.mvv-card.values .mvv-icon {
  background: linear-gradient(135deg, #D2342C, #FF4444);
}

.mvv-card:hover .mvv-icon {
  transform: scale(1.1);
}

.mvv-card h3 {
  font-size: 2rem;
  color: #780000;
  margin-bottom: 25px;
  font-weight: 700;
}

.mvv-card p {
  color: #696969;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
}

/* Valores específicos */
.values-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 30px;
}

.value-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(210, 52, 44, 0.1));
  color: #AE2C2A;
  padding: 10px 18px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 600;
  border: 1px solid rgba(174, 44, 42, 0.2);
  transition: all 0.3s ease;
}

.value-pill:hover {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.3);
}

.value-pill i {
  font-size: 0.9rem;
}

/* Seção de Estatísticas */
.stats-section {
  background: linear-gradient(135deg, #AE2C2A, #8B2220);
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
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 1;
}

.stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 25px;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item:hover {
  transform: translateY(-15px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.stat-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  font-size: 1.8rem;
  color: white;
  transition: transform 0.3s ease;
}

.stat-item:hover .stat-icon {
  transform: scale(1.1);
}

.stat-number {
  font-size: 3.8rem;
  font-weight: 800;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

/* Seção de Diferenciais */
.differentials-section {
  background: #ffffff;
  padding: 100px 0;
}

.differentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.differential-item {
  background: white;
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(174, 44, 42, 0.08);
  transition: all 0.4s ease;
  border: 1px solid rgba(174, 44, 42, 0.1);
  position: relative;
  overflow: hidden;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.differential-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.differential-item:hover::before {
  transform: scaleX(1);
}

.differential-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(174, 44, 42, 0.15);
}

.differential-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(210, 52, 44, 0.1));
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px;
  color: #AE2C2A;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.differential-item:hover .differential-icon {
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  color: white;
  transform: scale(1.1);
}

.differential-item h4 {
  font-size: 1.4rem;
  background: linear-gradient(135deg, #2c3e50, #AE2C2A);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  font-weight: 700;
}

.differential-item p {
  color: #696969;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}

/* Seção CTA */
.cta-section {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  text-align: center;
  padding: 120px 0;
  position: relative;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  color: white;
  font-size: 2.5rem;
  box-shadow: 0 15px 40px rgba(174, 44, 42, 0.3);
  animation: float 3s ease-in-out infinite;
}

.cta-content h2 {
  font-size: 2.8rem;
  color: #780000;
  margin-bottom: 25px;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.3rem;
  color: #696969;
  margin-bottom: 40px;
  line-height: 1.8;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 18px 45px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.4s ease;
  box-shadow: 0 15px 35px rgba(174, 44, 42, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-button:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(174, 44, 42, 0.4);
  background: linear-gradient(135deg, #D2342C, #FF4444);
}

.cta-button i {
  transition: transform 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(5px);
}

/* Responsividade */
@media (max-width: 992px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    font-size: 1.4rem;
  }

  section {
    padding: 60px 0;
  }

  .differentials-section {
    padding: 80px 0;
  }

  .cta-section {
    padding: 100px 0;
  }

  .mvv-grid {
    grid-template-columns: 1fr;
  }

  .differentials-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 65vh;
    min-height: 500px;
  }

  .hero-title {
    font-size: 2.8rem;
    letter-spacing: 2px;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title h2 {
    font-size: 2.2rem;
  }

  .intro-text {
    font-size: 1.2rem;
  }

  .info-card {
    padding: 40px 30px;
  }

  .mvv-card {
    padding: 40px 30px;
  }

  .differential-item {
    padding: 35px 25px;
  }

  .cta-content h2 {
    font-size: 2.2rem;
  }

  .cta-content p {
    font-size: 1.1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .differentials-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 20px;
  }

  .hero-title {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title h2 {
    font-size: 1.8rem;
    margin: 0 15px;
  }

  .accent-line {
    width: 50px;
  }

  .stat-number {
    font-size: 3rem;
  }

  .values-container {
    gap: 8px;
  }

  .value-pill {
    font-size: 0.85rem;
    padding: 8px 14px;
  }

  .cta-button {
    padding: 15px 35px;
    font-size: 1rem;
  }

  .info-card {
    padding: 30px 20px;
  }

  .mvv-card {
    padding: 30px 20px;
  }

  .differential-item {
    padding: 30px 20px;
  }

  .card-icon,
  .mvv-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }

  .differential-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }

  .cta-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
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

.mvv-icon i {
  animation: float 4s ease-in-out infinite;
}

.card-icon i {
  animation: float 4s ease-in-out infinite;
}

.card-icon-two i {
  animation: float 4s ease-in-out infinite;
}

.differential-icon i {
  animation: float 3s ease-in-out infinite;
}

.info-card:hover .card-icon {
  transform: scale(1.15);
  transition: transform 0.4s ease;
}

.stat-item:hover .stat-number {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Animação para o botão CTA */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(174, 44, 42, 0.7);
  }

  70% {
    box-shadow: 0 0 0 15px rgba(174, 44, 42, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(174, 44, 42, 0);
  }
}

.cta-button:hover {
  animation: pulse 2s infinite;
}

/* Efeito de gradiente animado */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.hero-section .overlay {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.8), rgba(139, 34, 32, 0.9), rgba(210, 52, 44, 0.8));
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}

/* Ajustes para dispositivos móveis muito pequenos */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .info-card h3 {
    font-size: 1.8rem;
  }

  .mvv-card h3 {
    font-size: 1.6rem;
  }

  .differential-item h4 {
    font-size: 1.2rem;
  }

  .cta-content h2 {
    font-size: 1.8rem;
  }

  section {
    padding: 50px 0;
  }

  .differentials-section {
    padding: 70px 0;
  }

  .cta-section {
    padding: 80px 0;
  }
}

/* Nova Timeline Styles */
.timeline-section {
  position: relative;
  padding: 150px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%);
  overflow: hidden;
}

.timeline-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(174, 44, 42, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(174, 44, 42, 0.02) 0%, transparent 50%),
    linear-gradient(45deg, transparent 49%, rgba(174, 44, 42, 0.02) 50%, transparent 51%);
  pointer-events: none;
}

.timeline-scroll-wrapper {
  position: relative;
  min-width: 100%;
  width: 100%;
}

/* Linha horizontal estática */
.timeline-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #AE2C2A, #D2342C, #AE2C2A);
  transform: translateY(-50%);
  border-radius: 3px;
  box-shadow: 0 3px 10px rgba(174, 44, 42, 0.3);
  z-index: 1;
}

/* Container das bolinhas */
.timeline-dots {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 10;
}

/* Wrapper para cada dot com seu traço */
.timeline-dot-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Bolinhas da timeline */
.timeline-dot {
  position: relative;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 6px solid #ffffff;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 10px 30px rgba(174, 44, 42, 0.4),
    0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 999;
}

.timeline-dot::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.timeline-dot:hover::before {
  left: 100%;
}

.timeline-dot.active {
  transform: scale(1.3);
  box-shadow: 
    0 15px 40px rgba(174, 44, 42, 0.6),
    0 8px 25px rgba(0, 0, 0, 0.15);
  border-width: 8px;
}

.timeline-dot:hover {
  transform: scale(1.2);
  box-shadow: 
    0 12px 35px rgba(174, 44, 42, 0.5),
    0 6px 20px rgba(0, 0, 0, 0.12);
}

.dot-year {
  color: white;
  font-size: 0.9rem;
  font-weight: 800;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.timeline-dot.active .dot-year {
  font-size: 1rem;
}

/* Traços conectores integrados aos dots */
.dot-connector {
  position: absolute;
  width: 3px;
  background: linear-gradient(180deg, #AE2C2A, #D2342C);
  border-radius: 2px;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(174, 44, 42, 0.3);
  z-index: 15;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.dot-connector.top {
  flex-direction: column;
  justify-content: flex-end;
  top: 100%;
  height: 180px;
}

.dot-connector.bottom {
  flex-direction: column-reverse;
  justify-content: flex-end;
  bottom: 100%;
  height: 180px;
}

.dot-connector.active,
.dot-connector.entering {
  opacity: 1;
  background: linear-gradient(180deg, #D2342C, #AE2C2A);
}

/* Container dos cards e conectores */
.timeline-card-container {
  position: relative;
  min-height: 750px;
  margin-top: -100px;
  pointer-events: none;
}

/* Linha conectora entre card e bolinha */
.card-connector {
  position: absolute;
  width: 3px;
  background: linear-gradient(180deg, #AE2C2A, #D2342C);
  border-radius: 2px;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(174, 44, 42, 0.3);
  z-index: 5;
  left: calc(var(--card-position) * 12.5% + 33px);
}

.card-connector.top {
  top: 250px;
  height: 100px;
}

.card-connector.bottom {
  top: 100px;
  height: 300px;
}

.card-connector.active,
.card-connector.entering {
  opacity: 1;
}

/* Card da timeline */
.timeline-card {
  position: absolute;
  background: linear-gradient(145deg, #ffffff 0%, #fafbfc 30%, #ffffff 60%, #f8fafc 100%);
  border-radius: 20px;
  padding: 0;
  text-align: left;
  width: 320px;
  min-height: 280px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.12),
    0 10px 30px rgba(174, 44, 42, 0.08),
    0 5px 15px rgba(0, 0, 0, 0.06),
    inset 0 2px 0 rgba(255, 255, 255, 0.95),
    inset 0 -1px 0 rgba(174, 44, 42, 0.03);
  border: 2px solid rgba(174, 44, 42, 0.08);
  background-clip: padding-box;
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(80px) scale(0.5);
  transition: none;
  overflow: hidden;
  /* Cards agora integrados aos traços - posicionamento relativo */
  position: relative !important;
  left: auto !important;
  top: auto !important;
  transform: none;
  transform-origin: center;
  pointer-events: auto;
  margin-top: 10px;
  filter: blur(3px);
}

/* Estados de animação */
.timeline-card.entering {
  opacity: 0 !important;
  transform: translateY(150px) scale(0.1) rotateX(-60deg) rotateY(-30deg) rotateZ(-20deg) !important;
  filter: blur(20px) saturate(0.3) contrast(0.6) !important;
  animation: cardFlipZoomIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards !important;
  transition: none !important;
}

.timeline-card.active {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px) saturate(1.1) contrast(1.05) brightness(1.02);
  animation: cardPulseGlow 3s ease-in-out infinite;
}

.timeline-card.active::before {
  left: 150%;
  opacity: 1;
}

.timeline-card.active::after {
  opacity: 1;
}

.timeline-card.exiting {
  opacity: 1;
  animation: cardFlipZoomOut 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
}

/* Animações dos cards */
@keyframes cardSlideIn {
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.5) rotateX(-20deg);
    filter: blur(8px);
  }
  30% {
    opacity: 0.3;
    transform: translateY(40px) scale(0.75) rotateX(-10deg);
    filter: blur(5px);
  }
  60% {
    opacity: 0.7;
    transform: translateY(15px) scale(0.95) rotateX(-3deg);
    filter: blur(2px);
  }
  85% {
    opacity: 0.95;
    transform: translateY(2px) scale(1.02) rotateX(0deg);
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
    filter: blur(0px);
  }
}

@keyframes cardActivate {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    transform: scale(1.04);
    box-shadow: 0 10px 30px rgba(174, 44, 42, 0.2);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
}

@keyframes cardSlideOut {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  30% {
    opacity: 0.8;
    transform: translateY(20px) scale(0.9);
    filter: blur(2px);
  }
  60% {
    opacity: 0.4;
    transform: translateY(40px) scale(0.7);
    filter: blur(4px);
  }
  100% {
    opacity: 0;
    transform: translateY(60px) scale(0.5);
    filter: blur(6px);
  }
}

.timeline-card.active {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Animações para cards acima */
@keyframes cardEnterTop {
  0% {
    opacity: 0;
    transform: translateY(-40px) scale(0.8);
    filter: blur(4px);
  }
  30% {
    opacity: 0.3;
    transform: translateY(-15px) scale(0.9);
    filter: blur(2px);
  }
  70% {
    opacity: 0.8;
    transform: translateY(-3px) scale(1.02);
    filter: blur(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}

@keyframes cardExitTop {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  30% {
    opacity: 0.7;
    transform: translateY(-8px) scale(0.95);
    filter: blur(1px);
  }
  100% {
    opacity: 0;
    transform: translateY(-25px) scale(0.8);
    filter: blur(3px);
  }
}

/* Animações para cards abaixo */
@keyframes cardEnterBottom {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.8);
    filter: blur(4px);
  }
  30% {
    opacity: 0.3;
    transform: translateY(15px) scale(0.9);
    filter: blur(2px);
  }
  70% {
    opacity: 0.8;
    transform: translateY(3px) scale(1.02);
    filter: blur(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}

@keyframes cardExitBottom {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  30% {
    opacity: 0.7;
    transform: translateY(8px) scale(0.95);
    filter: blur(1px);
  }
  100% {
    opacity: 0;
    transform: translateY(25px) scale(0.8);
    filter: blur(3px);
  }
}

.timeline-card.top.entering {
  animation: cardEnterTop 0.6s ease-out forwards;
}

.timeline-card.top.exiting {
  animation: cardExitTop 0.3s ease-in forwards;
}

.timeline-card.bottom.entering {
  animation: cardEnterBottom 0.6s ease-out forwards;
}

.timeline-card.bottom.exiting {
  animation: cardExitBottom 0.3s ease-in forwards;
}

/* Efeito shine no card */
.timeline-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.8s ease;
  z-index: 1;
}

.timeline-card.active::before {
  left: 100%;
}

/* Conteúdo do card */
.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  margin: 20px 20px 0 20px;
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.15),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.card-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.timeline-card.active .card-icon::before {
  left: 100%;
}

.card-content {
  padding: 15px 20px 20px 20px;
  position: relative;
  z-index: 2;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
  line-height: 1.3;
}

.card-description {
  font-size: 0.95rem;
  color: #696969;
  line-height: 1.5;
  margin: 0;
}

/* Animação de pulsação para bolinhas ativas */
@keyframes dotPulse {
  0% {
    box-shadow: 
      0 10px 30px rgba(174, 44, 42, 0.4),
      0 5px 15px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 
      0 15px 40px rgba(174, 44, 42, 0.6),
      0 8px 25px rgba(0, 0, 0, 0.15);
  }
  100% {
    box-shadow: 
      0 10px 30px rgba(174, 44, 42, 0.4),
      0 5px 15px rgba(0, 0, 0, 0.1);
  }
}

.timeline-dot.active {
  animation: dotPulse 2s ease-in-out infinite;
}

/* Melhorar aparência do scroll */
.new-timeline-container {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #AE2C2A transparent;
  position: relative;
  height: 100%;
  max-width: 1650px;
  margin: 550px auto 450px;
  padding: 60px 100px;
}

.new-timeline-container::-webkit-scrollbar {
  height: 8px;
}

.new-timeline-container::-webkit-scrollbar-track {
  background: rgba(174, 44, 42, 0.1);
  border-radius: 4px;
}

.new-timeline-container::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #AE2C2A, #D2342C);
  border-radius: 4px;
}

.new-timeline-container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(90deg, #D2342C, #FF4444);
}

/* Posicionamento responsivo dos cards */
.timeline-card {
  left: calc(var(--card-index) * 12.5% + 35px - 160px) !important;
}

.timeline-card.top {
  top: 260px !important;
  left: 155px !important;
}

.timeline-card.bottom {
  top: -260px !important;
  left: 155px !important;
}

@media (max-width: 1650px) {
  .new-timeline-container {
    padding: 60px 180px !important;
    margin: 0px auto;
    overflow-x: auto;
    overflow-y: hidden;
    cursor: grab;
  }
  
  .new-timeline-container:active {
    cursor: grabbing;
  }

  .timeline-scroll-wrapper {
    height: 120vh;
    padding: 10px 380px;
  }

  .intro-text::after {
    content: "← Arraste para ver mais →";
    position: absolute;
    bottom: -80px;
    left: 50%;
    font-weight: 600;
    transform: translateX(-50%);
    font-size: 0.8rem;
    color: #AE2C2A;
    white-space: nowrap;
    pointer-events: none;
  }
}

@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .new-timeline-container {
    padding: 60px 160px !important;
  }

  .timeline-scroll-wrapper {
    padding: 10px 480px;
  }

  .timeline-card {
  left: calc(var(--card-index) * 12.5% + 35px - 160px) !important;
  width: 280px !important;
  min-height: 250px !important;
}

.timeline-card.top {
  top: 240px !important;
  left: 135px !important;
}

.timeline-card.bottom {
  top: -240px !important;
  left: 135px !important;
}

  .card-icon {
    width: 45px !important;
    height: 45px !important;
    font-size: 1.5rem !important;
  }

  .card-title {
    font-size: 1.2rem !important;
  }

  .card-description {
    font-size: 0.9rem !important;
  }

  .differentials-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .new-timeline-container {
    padding: 50px 160px !important;
    margin: 0px auto;
    overflow-x: auto;
    overflow-y: hidden;
    cursor: grab;
  }
  
  .new-timeline-container:active {
    cursor: grabbing;
  }

  .timeline-scroll-wrapper {
    height: 120vh;
    padding: 10px 580px;
  }

  .timeline-dot {
    width: 60px;
    height: 60px;
    border: 5px solid #ffffff;
  }

  .dot-year {
    font-size: 0.8rem;
  }

  .timeline-dot.active .dot-year {
    font-size: 0.9rem;
  }

  .timeline-card {
    width: 280px;
    min-height: 250px;
    left: calc(var(--card-position) * 12.5% - 140px);
  }

  .timeline-card.top {
    top: 80px;
  }

  .timeline-card.bottom {
    top: 350px;
  }

  .card-connector {
    left: calc(var(--card-position) * 12.5% + 28px);
  }

  .card-connector.top {
    top: 80px;
    height: 80px;
  }

  .card-connector.bottom {
    top: 80px;
    height: 270px;
  }

  .card-icon {
    width: 55px;
    height: 55px;
    font-size: 1.6rem;
    margin: 18px 18px 0 18px;
  }

  .card-content {
    padding: 12px 18px 18px 18px;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .new-timeline-container {
    padding: 30px 15px;
    cursor: grab;
  }
  
  .new-timeline-container:active {
    cursor: grabbing;
  }

  .timeline-card-container {
    margin-top: -60px;
    min-height: 500px;
  }

  .timeline-card {
    width: 250px;
    min-height: 220px;
    left: calc(var(--card-position) * 12.5% - 125px);
  }

  .timeline-card.top {
    top: 60px;
  }

  .timeline-card.bottom {
    top: 300px;
  }

  .card-connector {
    left: calc(var(--card-position) * 12.5% + 22px);
  }

  .card-connector.top {
    top: 60px;
    height: 60px;
  }

  .card-connector.bottom {
    top: 60px;
    height: 240px;
  }

  .card-icon {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
    margin: 15px 15px 0 15px;
  }

  .card-content {
    padding: 10px 15px 15px 15px;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-description {
    font-size: 0.85rem;
  }
}

@media (max-width: 576px) {
  .new-timeline-container {
    padding: 10px 160px !important;
    overflow-x: auto;
    overflow-y: hidden;
    cursor: grab;
  }
  
  .new-timeline-container:active {
    cursor: grabbing;
  } 
  
  .timeline-scroll-wrapper {
    min-width: 600px;
    width: 600px;
  }

  .timeline-card-container {
    margin-top: -40px;
    min-height: 120px;
  }

  .timeline-card {
    width: 220px;
    min-height: 70px;
    left: calc(var(--card-position) * 12.5% - 110px);
  }

  .timeline-card.top {
    top: 40px;
  }

  .timeline-card.bottom {
    top: 260px;
  }

  .card-connector {
    left: calc(var(--card-position) * 12.5% + 17px);
  }

  .card-connector.top {
    top: 40px;
    height: 40px;
  }

  .card-connector.bottom {
    top: 40px;
    height: 220px;
  }

  .card-icon {
    width: 55px !important;
    height: 55px !important;
    font-size: 1.2rem;
    margin: 12px 12px 0 12px;
  }

  .card-icon i {
    font-size: 1.8rem !important;
  }

  .card-content {
    padding: 25px 12px 12px 12px;
  }

  .card-title {
    font-size: 1rem;
    margin-bottom: 8px;
  }

  .card-description {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .new-timeline-container {
    padding: 10px 160px !important;
    overflow-x: auto;
    cursor: grab;
  }
  
  .new-timeline-container:active {
    cursor: grabbing;
  }
  
  .timeline-scroll-wrapper {
    min-width: 500px;
    width: 500px;
  }

  .timeline-card-container {
    margin-top: -30px;
    min-height: 320px;
  }

  .timeline-card {
    width: 200px;
    min-height: 140px;
  }

  .card-icon {
    width: 55px !important;
    height: 55px !important;
    font-size: 1.2rem;
    margin: 12px 12px 0 12px;
  }

  .card-icon i {
    font-size: 1.8rem !important;
  }

  .card-content {
    padding: 25px 12px 12px 12px;
  }

  .card-title {
    font-size: 0.9rem;
    margin-bottom: 6px;
  }

  .card-description {
    font-size: 0.7rem;
  }
}

@media (max-width: 360px) {
  .new-timeline-container {
    margin: 20px auto;
    padding: 10px 2px;
    overflow-x: auto;
    cursor: grab;
  }
  
  .new-timeline-container:active {
    cursor: grabbing;
  }
  
  .timeline-scroll-wrapper {
    min-width: 400px;
    width: 400px;
  }

  .timeline-dot {
    width: 60px;
    height: 60px;
    border: 3px solid #ffffff;
  }

  .dot-year {
    font-size: 0.7rem;
  }

  .timeline-dot.active .dot-year {
    font-size: 0.75rem;
  }

  .timeline-card-container {
    margin-top: -20px;
    min-height: 280px;
  }

  .timeline-card {
    min-height: 240px !important;
  }

  .card-icon {
    width: 30px;
    height: 30px;
    font-size: 0.9rem;
    margin: 6px 6px 0 6px;
  }

  .card-content {
    padding: 20px 15px 0px 15px;
  }

  .card-title {
    font-size: 0.8rem;
    margin-bottom: 4px;
  }

  .card-description {
    font-size: 0.6rem;
  }
}

/* Melhorias de acessibilidade */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .timeline-track {
    animation: none !important;
  }
}

/* Animação com flip e zoom mais visível */
@keyframes cardFlipZoomIn {
  0% {
    opacity: 0;
    transform: rotateY(-180deg) scale(0.2) translateY(100px);
    filter: blur(10px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  25% {
    opacity: 0.3;
    transform: rotateY(-90deg) scale(0.6) translateY(40px);
    filter: blur(6px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  50% {
    opacity: 0.7;
    transform: rotateY(-45deg) scale(0.9) translateY(10px);
    filter: blur(3px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 30px rgba(174, 44, 42, 0.1);
  }
  75% {
    opacity: 0.9;
    transform: rotateY(15deg) scale(1.1) translateY(-10px);
    filter: blur(1px);
    box-shadow: 
      0 40px 80px rgba(0, 0, 0, 0.18), 
      0 25px 50px rgba(174, 44, 42, 0.15),
      0 0 30px rgba(174, 44, 42, 0.2);
  }
  90% {
    opacity: 0.98;
    transform: rotateY(-5deg) scale(1.05) translateY(-5px);
    filter: blur(0px);
    box-shadow: 
      0 45px 90px rgba(0, 0, 0, 0.2), 
      0 30px 60px rgba(174, 44, 42, 0.18);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) scale(1) translateY(0px);
    filter: blur(0px) saturate(1.1) contrast(1.05) brightness(1.02);
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.18), 0 25px 60px rgba(174, 44, 42, 0.15);
  }
}

@keyframes cardFlipZoomOut {
  0% {
    opacity: 1;
    transform: rotateY(0deg) scale(1) translateY(0px);
    filter: blur(0px);
  }
  25% {
    opacity: 0.8;
    transform: rotateY(45deg) scale(1.1) translateY(-15px);
    filter: blur(1px);
    box-shadow: 0 35px 70px rgba(0, 0, 0, 0.15);
  }
  50% {
    opacity: 0.5;
    transform: rotateY(90deg) scale(0.8) translateY(20px);
    filter: blur(4px);
  }
  75% {
    opacity: 0.2;
    transform: rotateY(135deg) scale(0.4) translateY(60px);
    filter: blur(8px);
  }
  100% {
    opacity: 0;
    transform: rotateY(180deg) scale(0.1) translateY(120px);
    filter: blur(15px);
  }
}

@keyframes cardGrandEntranceWithBounce {
  0% {
    opacity: 0;
    transform: translateY(150px) scale(0.1) rotateX(-60deg) rotateY(-30deg) rotateZ(-20deg);
    filter: blur(20px) saturate(0.3) contrast(0.6);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  }
  20% {
    opacity: 0.2;
    transform: translateY(80px) scale(0.5) rotateX(-35deg) rotateY(-18deg) rotateZ(-12deg);
    filter: blur(12px) saturate(0.6) contrast(0.8);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }
  45% {
    opacity: 0.6;
    transform: translateY(20px) scale(0.85) rotateX(-15deg) rotateY(-8deg) rotateZ(-5deg);
    filter: blur(6px) saturate(0.85) contrast(0.92);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 25px rgba(174, 44, 42, 0.08);
  }
  /* PRIMEIRO BOUNCE ELÁSTICO */
  65% {
    opacity: 0.8;
    transform: translateY(-30px) scale(1.15) rotateX(8deg) rotateY(4deg) rotateZ(3deg);
    filter: blur(3px) saturate(1.05) contrast(1.02);
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.18), 0 25px 50px rgba(174, 44, 42, 0.15);
  }
  /* SEGUNDO BOUNCE MAIS ALTO */
  75% {
    opacity: 0.9;
    transform: translateY(-60px) scale(1.35) rotateX(15deg) rotateY(8deg) rotateZ(5deg);
    filter: blur(1px) saturate(1.12) contrast(1.08);
    box-shadow: 
      0 70px 140px rgba(0, 0, 0, 0.25), 
      0 40px 80px rgba(174, 44, 42, 0.2),
      0 0 50px 10px rgba(174, 44, 42, 0.15);
  }
  /* TERCEIRO BOUNCE MENOR */
  85% {
    opacity: 0.95;
    transform: translateY(-20px) scale(1.12) rotateX(5deg) rotateY(2deg) rotateZ(1deg);
    filter: blur(0.5px) saturate(1.08) contrast(1.05);
    box-shadow: 0 45px 90px rgba(0, 0, 0, 0.2), 0 25px 50px rgba(174, 44, 42, 0.15);
  }
  /* QUARTO BOUNCE MÍNIMO */
  92% {
    opacity: 0.98;
    transform: translateY(-8px) scale(1.04) rotateX(2deg) rotateY(1deg) rotateZ(0.5deg);
    filter: blur(0px) saturate(1.05) contrast(1.03);
  }
  /* PEQUENO OVERSHOOT */
  97% {
    opacity: 1;
    transform: translateY(5px) scale(0.98) rotateX(-1deg) rotateY(-0.5deg) rotateZ(-0.2deg);
    filter: blur(0px) saturate(1.08) contrast(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    filter: blur(0px) saturate(1.1) contrast(1.05) brightness(1.02);
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.18), 0 25px 60px rgba(174, 44, 42, 0.15);
  }
}

@keyframes cardPulseGlow {
  0%, 100% {
    transform: translateY(0) scale(1);
    box-shadow: 
      0 40px 100px rgba(0, 0, 0, 0.18),
      0 25px 60px rgba(174, 44, 42, 0.15),
      0 0 0 0 rgba(174, 44, 42, 0);
  }
  25% {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 
      0 50px 120px rgba(0, 0, 0, 0.22),
      0 35px 80px rgba(174, 44, 42, 0.2),
      0 0 40px 8px rgba(174, 44, 42, 0.12);
  }
  50% {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 
      0 60px 140px rgba(0, 0, 0, 0.25),
      0 45px 100px rgba(174, 44, 42, 0.25),
      0 0 60px 15px rgba(174, 44, 42, 0.18),
      0 0 80px 20px rgba(210, 52, 44, 0.1);
  }
  75% {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 
      0 50px 120px rgba(0, 0, 0, 0.22),
      0 35px 80px rgba(174, 44, 42, 0.2),
      0 0 40px 8px rgba(174, 44, 42, 0.12);
  }
}

@keyframes cardGrandExitWithBounce {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    filter: blur(0px) saturate(1.1) contrast(1.05);
  }
  /* DUPLO PULO PARA CIMA ANTES DE SAIR */
  12% {
    opacity: 0.95;
    transform: translateY(-20px) scale(1.08) rotateX(5deg) rotateY(2deg) rotateZ(2deg);
    filter: blur(0.5px) saturate(1.08) contrast(1.03);
    box-shadow: 0 45px 90px rgba(0, 0, 0, 0.18), 0 25px 50px rgba(174, 44, 42, 0.15);
  }
  20% {
    opacity: 0.9;
    transform: translateY(-40px) scale(1.2) rotateX(10deg) rotateY(5deg) rotateZ(4deg);
    filter: blur(1px) saturate(1.1) contrast(1.05);
    box-shadow: 
      0 60px 120px rgba(0, 0, 0, 0.22), 
      0 35px 70px rgba(174, 44, 42, 0.18),
      0 0 40px 8px rgba(174, 44, 42, 0.12);
  }
  35% {
    opacity: 0.75;
    transform: translateY(20px) scale(0.92) rotateX(-8deg) rotateY(-3deg) rotateZ(3deg);
    filter: blur(3px) saturate(0.9) contrast(0.95);
  }
  55% {
    opacity: 0.5;
    transform: translateY(70px) scale(0.75) rotateX(-25deg) rotateY(-12deg) rotateZ(8deg);
    filter: blur(7px) saturate(0.7) contrast(0.85);
  }
  75% {
    opacity: 0.2;
    transform: translateY(120px) scale(0.5) rotateX(-40deg) rotateY(-20deg) rotateZ(12deg);
    filter: blur(12px) saturate(0.5) contrast(0.75);
  }
  100% {
    opacity: 0;
    transform: translateY(180px) scale(0.1) rotateX(-70deg) rotateY(-35deg) rotateZ(20deg);
    filter: blur(25px) saturate(0.2) contrast(0.5);
  }
}

/* Shimmer effect para cards ativos */
.timeline-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  width: 150%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 10%,
    rgba(255, 255, 255, 0.6) 30%,
    rgba(174, 44, 42, 0.15) 50%,
    rgba(255, 255, 255, 0.6) 70%,
    rgba(255, 255, 255, 0.1) 90%,
    transparent 100%
  );
  transition: left 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1;
  opacity: 0;
}

/* Borda brilhante animada */
.timeline-card::after {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(174, 44, 42, 0.4) 25%,
    rgba(210, 52, 44, 0.3) 50%,
    rgba(174, 44, 42, 0.4) 75%,
    transparent 100%
  );
  background-size: 300% 300%;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 1s ease;
  z-index: -1;
  animation: borderGlow 4s ease-in-out infinite;
}

@keyframes borderGlow {
  0%, 100% {
    background-position: 0% 50%;
    opacity: 0.3;
  }
  25% {
    background-position: 25% 50%;
    opacity: 0.6;
  }
  50% {
    background-position: 100% 50%;
    opacity: 0.8;
  }
  75% {
    background-position: 75% 50%;
    opacity: 0.6;
  }
}



/* Efeitos de hover mais suaves para touch devices */
@media (hover: none) {

  .info-card:hover,
  .mvv-card:hover,
  .differential-item:hover,
  .stat-item:hover,
  .timeline-dot:hover {
    transform: none;
  }

  .cta-button:hover {
    transform: none;
    animation: none;
  }
}
</style>
