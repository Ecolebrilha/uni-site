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
              <div class="card-icon">
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
          <div class="timeline-container" ref="timelineContainer">
            <div class="timeline-track" ref="timelineTrack">
              <!-- Timeline duplicada para loop contínuo -->
              <div class="timeline-content">
                <div v-for="(milestone, index) in timelineMilestones" :key="`original-${index}`" 
                     class="timeline-item" 
                     :class="{ 'top': index % 2 === 0, 'bottom': index % 2 !== 0 }">
                  <div class="milestone-number">{{ String(index + 1).padStart(2, '0') }}</div>
                  <div class="milestone-card" 
                       @mouseenter="pauseAnimation" 
                       @mouseleave="resumeAnimation">
                    <div class="milestone-icon" :style="{ backgroundColor: milestone.color }">
                      <i :class="milestone.icon"></i>
                    </div>
                    <div class="milestone-content">
                      <div class="milestone-year">{{ milestone.year }}</div>
                      <div class="milestone-title">{{ milestone.title }}</div>
                      <div class="milestone-description">{{ milestone.description }}</div>
                    </div>
                  </div>
                  <div class="milestone-connector" :class="{ 'top': index % 2 === 0, 'bottom': index % 2 !== 0 }"></div>
                  <div class="milestone-line"></div>
                </div>
              </div>
              
              <!-- Duplicação para loop -->
              <div class="timeline-content">
                <div v-for="(milestone, index) in timelineMilestones" :key="`duplicate-${index}`" 
                     class="timeline-item" 
                     :class="{ 'top': index % 2 === 0, 'bottom': index % 2 !== 0 }">
                  <div class="milestone-number">{{ String(index + 1).padStart(2, '0') }}</div>
                  <div class="milestone-card" 
                       @mouseenter="pauseAnimation" 
                       @mouseleave="resumeAnimation">
                    <div class="milestone-icon" :style="{ backgroundColor: milestone.color }">
                      <i :class="milestone.icon"></i>
                    </div>
                    <div class="milestone-content">
                      <div class="milestone-year">{{ milestone.year }}</div>
                      <div class="milestone-title">{{ milestone.title }}</div>
                      <div class="milestone-description">{{ milestone.description }}</div>
                    </div>
                  </div>
                  <div class="milestone-connector" :class="{ 'top': index % 2 === 0, 'bottom': index % 2 !== 0 }"></div>
                  <div class="milestone-line"></div>
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
              <div class="values-container">
                <ScrollReveal v-for="(valor, index) in t('about.values')" :key="index" direction="fade"
                  :delay="600 + (index * 100)" customClass="value-tag">
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
    // Iniciar animação da timeline
    this.startTimelineAnimation();
  },
  beforeUnmount() {
    // Limpar animação da timeline
    if (this.timelineAnimation) {
      this.timelineAnimation.cancel();
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
    
    startTimelineAnimation() {
      this.$nextTick(() => {
        const track = this.$refs.timelineTrack;
        if (!track) return;
        
        // Calcular a largura total do conteúdo
        const contentWidth = track.scrollWidth / 2; // Dividido por 2 porque temos conteúdo duplicado
        
        // Animação contínua mais lenta e suave
        this.timelineAnimation = track.animate([
          { 
            transform: 'translateX(0px)',
            opacity: 1
          },
          { 
            transform: `translateX(-${contentWidth}px)`,
            opacity: 1
          }
        ], {
          duration: 80000, // 80 segundos para completar o ciclo (mais lento)
          iterations: Infinity,
          easing: 'cubic-bezier(0.4, 0, 0.6, 1)' // Easing mais suave
        });
      });
    },
    
    pauseAnimation() {
      if (this.timelineAnimation) {
        this.timelineAnimation.pause();
      }
    },
    
    resumeAnimation() {
      if (this.timelineAnimation) {
        this.timelineAnimation.play();
      }
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
  max-width: 1400px;
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

.card-icon {
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
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .differentials-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

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
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}

.card-icon i,
.mvv-icon i {
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

/* Seção Timeline */
.timeline-section {
  background: 
    linear-gradient(135deg, #f1f3f6 0%, #ffffff 25%, #f8fafc 50%, #ffffff 75%, #f1f3f6 100%),
    radial-gradient(circle at 20% 80%, rgba(174, 44, 42, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(174, 44, 42, 0.02) 0%, transparent 50%);
  position: relative;
  padding: 80px 0 150px 0;
  overflow: hidden;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
}

.timeline-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.015'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.6;
}

.timeline-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 30% 30%, rgba(174, 44, 42, 0.02) 0%, transparent 60%),
    radial-gradient(circle at 70% 70%, rgba(174, 44, 42, 0.015) 0%, transparent 60%);
  z-index: 0;
}

.timeline-container {
  position: relative;
  width: 100%;
  height: 1050px;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 20%, #ffffff 40%, #f5f7fa 60%, #ffffff 80%, #f8fafc 100%),
    radial-gradient(circle at 30% 30%, rgba(174, 44, 42, 0.02) 0%, transparent 40%),
    radial-gradient(circle at 70% 70%, rgba(174, 44, 42, 0.015) 0%, transparent 40%);
  border-radius: 40px;
  box-shadow: 
    0 40px 100px rgba(0, 0, 0, 0.15),
    0 20px 50px rgba(174, 44, 42, 0.1),
    0 10px 25px rgba(0, 0, 0, 0.08),
    inset 0 2px 0 rgba(255, 255, 255, 0.9),
    inset 0 -2px 0 rgba(174, 44, 42, 0.05);
  border: 4px solid transparent;
  background-clip: padding-box;
}

.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 40px;
  padding: 4px;
  background: linear-gradient(135deg, #AE2C2A, #ff6b6b, #AE2C2A, #D2342C);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  z-index: 5;
}

.timeline-track {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.timeline-content {
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
}

.timeline-item {
  position: relative;
  min-width: 500px;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.timeline-item.top {
  justify-content: flex-start;
  padding-top: 80px;
  padding-bottom: 0;
}

.timeline-item.bottom {
  justify-content: flex-end;
  padding-bottom: 80px;
  padding-top: 0;
  flex-direction: column-reverse;
}

/* Deslocamento vertical adicional usando translateY */
.timeline-item.top .milestone-card {
  transform: translateY(20px);
}

.timeline-item.bottom .milestone-card {
  transform: translateY(660px);
}

.milestone-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  font-weight: 800;
  border: 8px solid #ffffff;
  box-shadow: 
    0 10px 30px rgba(174, 44, 42, 0.4),
    0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.milestone-card {
  background: linear-gradient(145deg, #ffffff 0%, #fafbfc 30%, #ffffff 60%, #f8fafc 100%),
  radial-gradient(circle at 80% 20%, rgba(174, 44, 42, 0.02) 0%, transparent 50%);
  border-radius: 30px;
  padding: 0;
  text-align: left;
  min-width: 380px;
  max-width: 420px;
  box-shadow: 
  0 30px 80px rgba(0, 0, 0, 0.12),
    0 15px 40px rgba(174, 44, 42, 0.08),
    0 8px 20px rgba(0, 0, 0, 0.06),
    inset 0 2px 0 rgba(255, 255, 255, 0.95),
    inset 0 -1px 0 rgba(174, 44, 42, 0.03);
    border: 3px solid rgba(174, 44, 42, 0.08);
  background-clip: padding-box;
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 4;
}

.milestone-card::before {
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

.milestone-card:hover::before {
  left: 100%;
}

.milestone-card:hover .milestone-icon::before {
  left: 100%;
}

.milestone-card:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 
    0 40px 100px rgba(0, 0, 0, 0.18),
    0 25px 60px rgba(174, 44, 42, 0.12),
    0 15px 30px rgba(0, 0, 0, 0.08),
    inset 0 3px 0 rgba(255, 255, 255, 1),
    inset 0 -2px 0 rgba(174, 44, 42, 0.05);
  border-color: rgba(174, 44, 42, 0.2);
}

.milestone-icon {
  width: 90px;
  height: 90px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  margin: 35px 35px 0 35px;
  box-shadow:     0 15px 35px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.milestone-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.milestone-content {
  padding: 25px 35px 35px 35px;
  position: relative;
  z-index: 2;
}

.milestone-year {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #AE2C2A, #D2342C);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  text-shadow: 1px 1px 3px rgba(174, 44, 42, 0.1);
  line-height: 1;
}

.milestone-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
  line-height: 1.3;
}

.milestone-description {
  font-size: 1rem;
  color: #696969;
  line-height: 1.6;
  margin: 0;
}

.milestone-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #AE2C2A, #D2342C, #AE2C2A);
  z-index: 1;
  box-shadow: 0 2px 8px rgba(174, 44, 42, 0.2);
}

.timeline-item:first-child .milestone-line {
  left: 50%;
}

.timeline-item:last-child .milestone-line {
  right: 50%;
}

.milestone-connector {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  background: linear-gradient(180deg, #AE2C2A, #D2342C);
  border-radius: 2px;
  z-index: 3;
}

.milestone-connector.top {
  bottom: calc(50% - 20px);  /* Leve ajuste para alinhar acima da linha */
  height: 250px;
}

.milestone-connector.bottom {
  top: calc(50% - 20px);     /* Leve ajuste para alinhar abaixo da linha */
  height: 250px;
}

.timeline-section::before,
.timeline-section::after,
.timeline-container::before {
  pointer-events: none;
}

/* Animação de pulsação para os números */
@keyframes pulse {
  0% {
    box-shadow: 0 8px 25px rgba(174, 44, 42, 0.3);
  }
  50% {
    box-shadow: 0 8px 25px rgba(174, 44, 42, 0.5);
  }
  100% {
    box-shadow: 0 8px 25px rgba(174, 44, 42, 0.3);
  }
}

.milestone-number {
  animation: pulse 2s ease-in-out infinite;
}

/* Efeito de float para ícones */
.milestone-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Responsividade da Timeline */
@media (max-width: 992px) {
  .timeline-section {
    padding: 100px 0;
  }
  
  .timeline-item {
    min-width: 420px;
    padding: 0 50px;
  }
  
  .timeline-item.top {
    padding-top: 60px;
    padding-bottom: 0;
  }
  
  .timeline-item.bottom {
    padding-bottom: 60px;
    padding-top: 0;
  }
  
  .milestone-connector.top {
    height: 150px;
  }
  
  .milestone-connector.bottom {
    height: 150px;
  }

  .timeline-item.top .milestone-card {
  transform: translateY(80px);
}

.timeline-item.bottom .milestone-card {
  transform: translateY(650px);
}
  
  .milestone-card {
    min-width: 300px;
    max-width: 320px;
  }
  
  .milestone-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
    margin: 25px 25px 0 25px;
  }
  
  .milestone-content {
    padding: 15px 25px 25px 25px;
  }
  
  .milestone-year {
    font-size: 2rem;
  }
  
  .milestone-title {
    font-size: 1.3rem;
  }
  
  .milestone-description {
    font-size: 0.95rem;
  }
  
  .milestone-number {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .timeline-section {
    padding: 80px 0;
  }
  
  .timeline-container {
    height: 850px;
  }
  
  .timeline-item {
    min-width: 360px;
    padding: 0 40px;
  }
  
  .timeline-item.top {
    padding-top: 50px;
    padding-bottom: 0;
  }
  
  .timeline-item.bottom {
    padding-bottom: 50px;
    padding-top: 0;
  }

  .timeline-item.top .milestone-card {
  transform: translateY(20px);
}

.timeline-item.bottom .milestone-card {
  transform: translateY(540px);
}
  
  .milestone-connector.top {
    height: 120px;
  }
  
  .milestone-connector.bottom {
    height: 120px;
  }
  
  .milestone-card {
    min-width: 260px;
    max-width: 280px;
  }
  
  .milestone-icon {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
    margin: 20px 20px 0 20px;
  }
  
  .milestone-content {
    padding: 12px 20px 20px 20px;
  }
  
  .milestone-year {
    font-size: 1.8rem;
  }
  
  .milestone-title {
    font-size: 1.2rem;
  }
  
  .milestone-description {
    font-size: 0.9rem;
  }
  
  .milestone-number {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .timeline-section {
    padding: 60px 0;
  }
  
  .timeline-container {
    height: 750px;
  }
  
  .timeline-item {
    min-width: 320px;
    padding: 0 30px;
  }
  
  .timeline-item.top {
    padding-top: 40px;
    padding-bottom: 0;
  }
  
  .timeline-item.bottom {
    padding-bottom: 40px;
    padding-top: 0;
  }
  
  .milestone-connector.top {
    height: 120px;
  }
  
  .milestone-connector.bottom {
    height: 120px;
  }

  .timeline-item.top .milestone-card {
  transform: translateY(25px);
}

.timeline-item.bottom .milestone-card {
  transform: translateY(460px);
}
  
  .milestone-card {
    min-width: 240px;
    max-width: 250px;
  }
  
  .milestone-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    margin: 15px 15px 0 15px;
  }
  
  .milestone-content {
    padding: 10px 15px 15px 15px;
  }
  
  .milestone-year {
    font-size: 1.6rem;
  }
  
  .milestone-title {
    font-size: 1.1rem;
  }
  
  .milestone-description {
    font-size: 0.85rem;
  }
  
  .milestone-number {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
    border: 4px solid #ffffff;
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

/* Efeitos de hover mais suaves para touch devices */
@media (hover: none) {

  .info-card:hover,
  .mvv-card:hover,
  .differential-item:hover,
  .stat-item:hover,
  .milestone-card:hover {
    transform: none;
  }

  .cta-button:hover {
    transform: none;
    animation: none;
  }
}
</style>
