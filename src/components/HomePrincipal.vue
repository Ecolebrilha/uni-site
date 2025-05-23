<template>
  <div class="home">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
<section class="hero-section">
  <div class="parallax-container">
    <div class="overlay"></div>
    <div class="hero-content">
      <img src="@/assets/logo-uni.png" alt="Logo Uni Hospitalar" class="logo-image">
      <h2 class="banner-h2">Respeito às relações humanas</h2>
      <p class="banner-p">O nosso foco está na distribuição <br> de medicamentos hospitalares, <br> oncológicos e excepcionais.</p>
      <div class="scroll-indicator" @click="scrollToContent">
        <span>Role para baixo</span>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </div>
</section>

    <!-- Seção de Estatísticas -->
<section class="stats-section" ref="statsSection">
  <div class="container">
    <div class="section-header">
      <h2>Nossa Trajetória em Números</h2>
      <div class="accent-line"></div>
    </div>
    <div class="stats-container">
      <div class="stat-item">
        <div class="stat-icon">
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div class="stat-number">
          <span ref="yearsCounter" data-target="19">0</span>
        </div>
        <div class="stat-label">Anos de Experiência</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="stat-number">
          <span ref="unitsCounter" data-target="3">0</span>
        </div>
        <div class="stat-label">Unidades Estratégicas</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-number">
          <span ref="clientsCounter" data-target="5000">0</span>+
        </div>
        <div class="stat-label">Clientes Satisfeitos</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">
          <i class="fas fa-truck"></i>
        </div>
        <div class="stat-number">
          <span ref="hoursCounter" data-target="48">0</span>h
        </div>
        <div class="stat-label">Entregas Rápidas</div>
      </div>
    </div>
  </div>
</section>

    <!-- Seção de Serviços e Informações -->
<section class="services-section">
  <div class="container">
    <ScrollReveal direction="bottom" :delay="100">
      <div class="section-header">
        <h2 class="section-title">Nossos Serviços</h2>
        <div class="section-subtitle">Conheça o que oferecemos para você</div>
        <div class="accent-line"></div>
      </div>
    </ScrollReveal>
    
    <!-- Cards de serviços - Primeira linha -->
    <div class="services-grid">
      <ScrollReveal direction="left" :delay="200">
        <div class="service-card">
          <div class="service-image">
            <img src="@/assets/estoque.jpg" alt="Estoque" @error="handleImageError($event, 'estoque')">
            <div class="service-overlay"></div>
          </div>
          <div class="service-content">
            <div class="service-icon">
              <i class="fas fa-warehouse"></i>
            </div>
            <h3>ESTOQUE</h3>
            <p>Nossa área de armazenamento segue rigorosamente as normas exigidas pela Anvisa.</p>
            <router-link to="/Diferenciais" class="service-link">
              <span>Saiba mais</span>
              <i class="fas fa-long-arrow-alt-right"></i>
            </router-link>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="bottom" :delay="300">
        <div class="service-card">
          <div class="service-image">
            <img src="@/assets/diferenciais.jpg" alt="Diferenciais" @error="handleImageError($event, 'diferenciais')">
            <div class="service-overlay"></div>
          </div>
          <div class="service-content">
            <div class="service-icon">
              <i class="fas fa-award"></i>
            </div>
            <h3>DIFERENCIAIS</h3>
            <p>Profissionais preparados e alinhados com a cultura da empresa, somado à linha de produtos e logística.</p>
            <router-link to="/Diferenciais" class="service-link">
              <span>Saiba mais</span>
              <i class="fas fa-long-arrow-alt-right"></i>
            </router-link>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="right" :delay="200">
        <div class="service-card">
          <div class="service-image">
            <img src="@/assets/logistica.jpg" alt="Logística" @error="handleImageError($event, 'logistica')">
            <div class="service-overlay"></div>
          </div>
          <div class="service-content">
            <div class="service-icon">
              <i class="fas fa-truck-loading"></i>
            </div>
            <h3>LOGÍSTICA</h3>
            <p>Entregas para o Norte e Nordeste em até 48 horas com toda segurança e garantia.</p>
            <router-link to="/Diferenciais" class="service-link">
              <span>Saiba mais</span>
              <i class="fas fa-long-arrow-alt-right"></i>
            </router-link>
          </div>
        </div>
      </ScrollReveal>
    </div>
    
    <!-- Cards de serviços - Segunda linha -->
    <div class="services-grid">
      <ScrollReveal direction="left" :delay="300">
        <div class="service-card">
          <div class="service-image">
            <img src="@/assets/unidade-de-negocios.jpg" alt="Unidade de Negócios">
            <div class="service-overlay"></div>
          </div>
          <div class="service-content">
            <div class="service-icon">
              <i class="fas fa-building"></i>
            </div>
            <h3>UNIDADE DE NEGÓCIOS</h3>
            <p>Estamos abrindo uma nova unidade em Fortaleza, na busca pelo melhor atendimento e prestação de serviço.</p>
            <router-link to="/Diferenciais" class="service-link">
              <span>Saiba mais</span>
              <i class="fas fa-long-arrow-alt-right"></i>
            </router-link>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="bottom" :delay="400">
        <div class="service-card">
          <div class="service-image">
            <img src="@/assets/principais-clientes.jpg" alt="Principais Clientes">
            <div class="service-overlay"></div>
          </div>
          <div class="service-content">
            <div class="service-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3>PRINCIPAIS CLIENTES</h3>
            <p>Buscando melhor atender as demandas do mercado farmacêutico, atendemos a indústrias e hospitais, públicos e privados e clínicas particulares.</p>
            <router-link to="/Parceiros" class="service-link">
              <span>Saiba mais</span>
              <i class="fas fa-long-arrow-alt-right"></i>
            </router-link>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="right" :delay="300">
        <div class="service-card">
          <div class="service-image">
            <img src="@/assets/principais-produtos.jpg" alt="Principais Produtos">
            <div class="service-overlay"></div>
          </div>
          <div class="service-content">
            <div class="service-icon">
              <i class="fas fa-pills"></i>
            </div>
            <h3>PRINCIPAIS PRODUTOS</h3>
            <p>Foco na distribuição e padronização de medicamentos hospitalares, oncológicos e excepcionais, trabalhando em nichos específicos.</p>
            <router-link to="/Produtos" class="service-link">
              <span>Saiba mais</span>
              <i class="fas fa-long-arrow-alt-right"></i>
            </router-link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

    <!-- Seção de Depoimentos -->
<section class="testimonials-section">
  <div class="container">
    <ScrollReveal direction="bottom" :delay="100">
      <div class="section-header">
        <h2 class="section-title">O que dizem sobre nós</h2>
        <div class="section-subtitle">Depoimentos de nossos parceiros e clientes</div>
        <div class="accent-line"></div>
      </div>
    </ScrollReveal>

    <div class="testimonials-slider">
      <div class="testimonials-slides">
        <div class="testimonial-slide" :class="{ active: currentTestimonial === 0 }">
          <div class="testimonial-content">
            <div class="quote-icon">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="testimonial-text">A Uni Hospitalar tem sido uma parceira excepcional e confiável. Sua eficiência logística impecável e compromisso inabalável com a qualidade fazem toda a diferença para nossa operação diária.</p>
            <div class="testimonial-author">
              <div class="author-avatar">
                <i class="fas fa-user-md"></i>
              </div>
              <div class="author-info">
                <div class="author-name">Dr. Carlos Silva</div>
                <div class="author-position">Diretor Médico - Hospital Santa Clara</div>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-slide" :class="{ active: currentTestimonial === 1 }">
          <div class="testimonial-content">
            <div class="quote-icon">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="testimonial-text">Trabalhamos com a Uni Hospitalar há mais de 5 anos e sempre fomos atendidos com excelência. A pontualidade nas entregas e a qualidade dos produtos são impecáveis.</p>
            <div class="testimonial-author">
              <div class="author-avatar">
                <i class="fas fa-user-nurse"></i>
              </div>
              <div class="author-info">
                <div class="author-name">Dra. Ana Martins</div>
                <div class="author-position">Gerente de Suprimentos - Clínica São Lucas</div>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-slide" :class="{ active: currentTestimonial === 2 }">
          <div class="testimonial-content">
            <div class="quote-icon">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="testimonial-text">A equipe da Uni Hospitalar demonstra um profundo conhecimento do setor farmacêutico e sempre nos oferece as melhores soluções para nossas necessidades.</p>
            <div class="testimonial-author">
              <div class="author-avatar">
                <i class="fas fa-user-tie"></i>
              </div>
              <div class="author-info">
                <div class="author-name">Paulo Mendes</div>
                <div class="author-position">Coordenador de Compras - Hospital Regional</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonial-controls">
        <button class="control-prev" @click="prevTestimonial">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="control-indicators">
          <span class="indicator" :class="{ active: currentTestimonial === 0 }" @click="setTestimonial(0)"></span>
          <span class="indicator" :class="{ active: currentTestimonial === 1 }" @click="setTestimonial(1)"></span>
          <span class="indicator" :class="{ active: currentTestimonial === 2 }" @click="setTestimonial(2)"></span>
        </div>
        <button class="control-next" @click="nextTestimonial">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</section>

    <!-- Seção de Parceiros -->
    <section class="partners-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossos Parceiros</h2>
          <div class="section-subtitle">Empresas que confiam em nosso trabalho</div>
          <div class="accent-line"></div>
        </div>

        <div class="partners-carousel">
          <div class="partners-track">
            <div v-for="n in 10" :key="n" class="partner-slide">
              <img :src="require(`@/assets/parceiro${n}.jpg`)" :alt="`Parceiro ${n}`" @error="handleImageError">
            </div>
          </div>
        </div>

        <div class="partners-action">
          <router-link to="/Parceiros">
            <button class="secondary-button">
              <span>VER TODOS OS PARCEIROS</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Seção de Chamada para Ação -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-container">
          <h2>Seja um parceiro da Uni Hospitalar</h2>
          <p>Junte-se a nós e faça parte de uma empresa comprometida com a excelência e a qualidade em distribuição de medicamentos.</p>
          <router-link to="/SejaParceiro">
            <button class="cta-button">
              <span>QUERO SER PARCEIRO</span>
              <i class="fas fa-handshake"></i>
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Seção de Contato Rápido -->
<section class="quick-contact-section">
  <div class="container">
    <div class="quick-contact-container">
      <div class="contact-info">
        <h2>Entre em contato conosco</h2>
        <p>Estamos prontos para atender suas necessidades e responder a todas as suas dúvidas.</p>
        
        <!-- Botões para selecionar filial -->
        <div class="branch-selector">
          <button 
            v-for="(branch, index) in branches" 
            :key="index" 
            @click="setActiveBranch(index)" 
            :class="['branch-button', { active: activeBranch === index }]"
          >
            {{ branch.name }}
          </button>
        </div>
        
        <!-- Informações da filial selecionada -->
        <div class="branch-info">
          <div class="contact-methods">
            <div class="contact-method">
              <i class="fas fa-phone-alt"></i>
              <span>{{ branches[activeBranch].phone }}</span>
            </div>
            <div class="contact-method">
              <i class="fas fa-envelope"></i>
              <span>{{ branches[activeBranch].email }}</span>
            </div>
            <div class="contact-method">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ branches[activeBranch].address }}</span>
            </div>
            <div class="contact-method">
              <i class="fas fa-clock"></i>
              <span>{{ branches[activeBranch].hours }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mapa da filial selecionada -->
      <div class="branch-map">
        <iframe 
          :src="branches[activeBranch].mapUrl" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</section>
    <HomeFooter />
<!-- Adicione este código antes do fechamento da tag </div> principal -->
<!-- Banner de Cookies -->
<div class="cookie-banner" v-if="showCookieBanner">
  <div class="cookie-content">
    <div class="cookie-icon">
      <i class="fas fa-cookie-bite"></i>
    </div>
    <div class="cookie-text">
      <h3>Utilizamos cookies</h3>
      <p>Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <router-link to="/PoliticaPrivacidade">Política de Privacidade</router-link>.</p>
    </div>
    <div class="cookie-buttons">
      <button class="cookie-accept" @click="acceptCookies">Aceitar</button>
      <button class="cookie-settings" @click="showCookieSettings = true">Configurações</button>
    </div>
  </div>
</div>

<!-- Modal de Configurações de Cookies -->
<div class="cookie-settings-modal" v-if="showCookieSettings">
  <div class="cookie-settings-content">
    <div class="cookie-settings-header">
      <h3>Configurações de Cookies</h3>
      <button class="close-button" @click="showCookieSettings = false">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="cookie-settings-body">
      <div class="cookie-option">
        <div class="cookie-option-info">
          <h4>Cookies Essenciais</h4>
          <p>Necessários para o funcionamento básico do site. Não podem ser desativados.</p>
        </div>
        <div class="cookie-switch disabled">
          <input type="checkbox" checked disabled>
          <span class="slider"></span>
        </div>
      </div>
      <!-- No template, modifique a parte do modal de configurações de cookies -->
<div class="cookie-option">
  <div class="cookie-option-info">
    <h4>Cookies de Análise</h4>
    <p>Nos ajudam a entender como os visitantes interagem com o site.</p>
  </div>
  <div class="cookie-switch">
    <!-- Certifique-se de que o v-model está correto e o input não está desabilitado -->
    <input type="checkbox" v-model="cookiePreferences.analytics" id="analytics-cookie">
    <label for="analytics-cookie" class="slider"></label>
  </div>
</div>
<div class="cookie-option">
  <div class="cookie-option-info">
    <h4>Cookies de Marketing</h4>
    <p>Utilizados para exibir anúncios relevantes com base em seus interesses.</p>
  </div>
  <div class="cookie-switch">
    <!-- Certifique-se de que o v-model está correto e o input não está desabilitado -->
    <input type="checkbox" v-model="cookiePreferences.marketing" id="marketing-cookie">
    <label for="marketing-cookie" class="slider"></label>
  </div>
</div>
    </div>
    <div class="cookie-settings-footer">
      <button class="cookie-save" @click="saveCookiePreferences">Salvar Preferências</button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import { mask } from 'v-mask';

export default {
  name: 'HomePrincipal',
  components: {
    HomeHeader,
    HomeFooter
  },
  directives: {
    mask
  },
  data() {
    return {
      currentTestimonial: 0,
      testimonialInterval: null,
      selectedLanguage: 'pt',
      sidebarOpen: false,
      activeBranch: 0, // Filial ativa inicialmente (Recife)
      branches: [
  {
    name: 'Matriz Recife - Uni Hospitalar',
    phone: '+55 (81) 3472-7201',
    email: 'contato@unihospitalar.com.br',
    address: 'R. Alagoas, 253 - Ipsep, Recife - PE, 51350-560',
    hours: 'Segunda a Sexta: 8h às 18h',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5988857640384!2d-34.8951233!3d-8.0623376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1be2a5d9b3d7%3A0x9e3e5b0d8d3d8d3d!2sUni%20Hospitalar!5e0!3m2!1spt-BR!2sbr!4v1625151234567!5m2!1spt-BR!2sbr'
  },
  {
    name: 'CD Fortaleza - Uni Ceará',
    phone: '+55 (81) 3472-7202',
    email: 'fortaleza@unihospitalar.com.br',
    address: 'R. Francisco Jose Albuquerque Pereira - Cajazeiras, Fortaleza - CE, 60864-520',
    hours: 'Segunda a Sexta: 8h às 18h',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.954729928924!2d-38.58232312426936!3d-3.8271872440876074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c7a7a7a7a7a7%3A0x9e3e5b0d8d3d8d3d!2sR.%20Francisco%20Jose%20Albuquerque%20Pereira%20-%20Cajazeiras%2C%20Fortaleza%20-%20CE%2C%2060864-520!5e0!3m2!1spt-BR!2sbr!4v1625151234567!5m2!1spt-BR!2sbr'
  },
  {
    name: 'CD São Paulo - SP Hospitalar LTDA',
    phone: '+55 (11) 4777-2159',
    email: 'sp@unihospitalar.com.br',
    address: 'R. Pinhal, 165 - Jardim Sabiá, Cotia - SP, 06716-575',
    hours: 'Segunda a Sexta: 8h às 18h',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3963130076986!2d-46.92011492368744!3d-23.55290096159868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03b8b1b8b8b9%3A0x9e3e5b0d8d3d8d3d!2sR.%20Pinhal%2C%20165%20-%20Jardim%20Sabi%C3%A1%2C%20Cotia%20-%20SP%2C%2006716-575!5e0!3m2!1spt-BR!2sbr!4v1625151234567!5m2!1spt-BR!2sbr'
  }
],
showCookieBanner: false,
    showCookieSettings: false,
    cookiePreferences: {
      essential: true,
      analytics: true,
      marketing: false
    }
    };
  },
  mounted() {
    this.startTestimonialSlider();
    this.setupIntersectionObserver();
    this.checkCookieConsent();
  },
  beforeUnmount() {
    clearInterval(this.testimonialInterval);
  },
  methods: {
    scrollToContent() {
      this.$refs.statsSection.scrollIntoView({ behavior: 'smooth' });
    },
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounters();
            observer.unobserve(entry.target);
          }
        });
      }, options);
      
      observer.observe(this.$refs.statsSection);
    },
    
    animateCounters() {
      // Definir uma duração base para todos os contadores
      const baseDuration = 6000; // 6 segundos
      
      const counters = [
        { ref: this.$refs.yearsCounter, target: 19 },
        { ref: this.$refs.unitsCounter, target: 3 },
        { ref: this.$refs.clientsCounter, target: 5000 },
        { ref: this.$refs.hoursCounter, target: 48 }
      ];
      
      // Inicializar todos os contadores com zero
      counters.forEach(counter => {
        counter.ref.innerText = '0';
        counter.current = 0;
      });
      
      // Calcular o número de passos para a animação (60fps por 2.5 segundos)
      const steps = Math.floor(baseDuration / 16); // ~150 passos
      let currentStep = 0;
      
      // Função de animação que será chamada a cada frame
      const animate = () => {
        currentStep++;
        const progress = currentStep / steps; // Valor entre 0 e 1
        
        // Atualizar todos os contadores com base no progresso atual
        counters.forEach(counter => {
          // Usar uma função de easing para desacelerar no final
          const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
          
          // Calcular o valor atual com base no progresso
          const value = Math.min(
            Math.floor(counter.target * easedProgress), 
            counter.target
          );
          
          // Atualizar o texto apenas se o valor mudou
          if (value !== counter.current) {
            counter.ref.innerText = value;
            counter.current = value;
          }
        });
        
        // Continuar a animação até atingir o número de passos
        if (currentStep < steps) {
          requestAnimationFrame(animate);
        } else {
          // Garantir que os valores finais estejam corretos
          counters.forEach(counter => {
            counter.ref.innerText = counter.target;
          });
        }
      };
      
      // Iniciar a animação
      requestAnimationFrame(animate);
    },
    
    startTestimonialSlider() {
      this.testimonialInterval = setInterval(() => {
        this.nextTestimonial();
      }, 5000);
    },
    prevTestimonial() {
      clearInterval(this.testimonialInterval);
      this.currentTestimonial = (this.currentTestimonial - 1 + 3) % 3;
      this.startTestimonialSlider();
    },
    nextTestimonial() {
      this.currentTestimonial = (this.currentTestimonial + 1) % 3;
    },
    setTestimonial(index) {
      clearInterval(this.testimonialInterval);
      this.currentTestimonial = index;
      this.startTestimonialSlider();
    },
    handleImageError(e) {
      // Fallback para imagem não encontrada
      e.target.src = require('@/assets/logo-uni.png');
    },
    setActiveBranch(index) {
      this.activeBranch = index;
    },
    changeLanguage(event) {
      const value = typeof event === 'string' ? event : event.target.value;
      this.selectedLanguage = value;
      console.log(`Idioma selecionado: ${value}`);
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
     // Verificar se o usuário já aceitou os cookies
  checkCookieConsent() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Se não houver consentimento salvo, mostrar o banner
      this.showCookieBanner = true;
    } else {
      // Se houver consentimento salvo, carregar as preferências
      try {
        this.cookiePreferences = JSON.parse(cookieConsent);
      } catch (e) {
        // Em caso de erro, mostrar o banner novamente
        this.showCookieBanner = true;
      }
    }
  },
  
  // Aceitar todos os cookies
  acceptCookies() {
    // Definir todas as preferências como true
    this.cookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true
    };
    
    // Salvar as preferências
    localStorage.setItem('cookieConsent', JSON.stringify(this.cookiePreferences));
    this.showCookieBanner = false;
    this.applyUserPreferences();
  },
  
  // Salvar as preferências personalizadas
  saveCookiePreferences() {
    localStorage.setItem('cookieConsent', JSON.stringify(this.cookiePreferences));
    this.showCookieBanner = false;
    this.showCookieSettings = false;
    this.applyUserPreferences();
  },
  
  // Aplicar as preferências do usuário
  applyUserPreferences() {
    // Aqui você implementaria a lógica para ativar/desativar cookies com base nas preferências
    
    // Exemplo: Google Analytics
    if (this.cookiePreferences.analytics) {
      // Ativar Google Analytics
      console.log('Analytics cookies enabled');
    } else {
      // Desativar Google Analytics
      console.log('Analytics cookies disabled');
    }
    
    // Exemplo: Cookies de marketing
    if (this.cookiePreferences.marketing) {
      // Ativar cookies de marketing
      console.log('Marketing cookies enabled');
    } else {
      // Desativar cookies de marketing
      console.log('Marketing cookies disabled');
    }
  }
  }
};
</script>

<style scoped>
/* Estilos Gerais */

.home {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 80px 0;
  position: relative;
}

/* Hero Section com Parallax */
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  margin-top: -80px;
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/banner-inicio.jpg');
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

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 1.5s ease-in-out;
}

.logo-image {
  max-width: 50%;
  max-height: 80%;
  margin-bottom: 20px;
  animation: fadeInUp 1.5s ease-out;
}

.banner-h2 {
  font-size: 2.5em;
  margin-bottom: 0.5em;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  letter-spacing: 1px;
  animation: fadeInUp 1.5s ease-out 0.3s both;
}

.banner-p {
  color: white;
  font-size: 1.4em;
  margin-bottom: 1.5em;
  line-height: 1.6;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.7); 
  font-weight: 600; 
  letter-spacing: 0.7px; 
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 0;
  border-left: 4px solid rgba(255, 255, 255, 0.8); 
  padding-left: 15px;
  animation: fadeInUp 1.5s ease-out 0.6s both;
}

.scroll-indicator {
  position: absolute;
  bottom: -120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: bounce 2s infinite, glow 2s infinite alternate;
  z-index: 10;
}

.scroll-indicator span {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.scroll-indicator i {
  font-size: 20px;
  margin-top: 5px;
}

.scroll-indicator:hover {
  transform: translateY(-5px);
  background-color: rgba(174, 44, 42, 1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
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

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes glow {
  from {
    box-shadow: 0 0 10px rgba(174, 44, 42, 0.6);
  }
  to {
    box-shadow: 0 0 20px rgba(174, 44, 42, 0.9), 0 0 30px rgba(255, 255, 255, 0.3);
  }
}

@media (max-width: 768px) {
  .scroll-indicator {
    padding: 8px 16px;
  }
  
  .scroll-indicator span {
    font-size: 14px;
  }
}

.secondary-header {
  margin-top: 60px;
  margin-bottom: 30px;
}

.secondary-header h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #555;
}

.accent-line.small {
  width: 50px;
  height: 2px;
}

.services-section {
  background: linear-gradient(to bottom, white 0%, #f9f9f9 100%);
  padding-bottom: 100px;
}

.info-blocks-grid {
  margin-top: 30px;
}

/* Banner de Cookies */
.cookie-banner {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  z-index: 999;
  animation: slideUp 0.5s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.cookie-content {
  display: flex;
  align-items: center;
  padding: 20px;
}

.cookie-icon {
  font-size: 2rem;
  color: #AE2C2A;
  margin-right: 20px;
}

.cookie-text {
  flex: 1;
}

.cookie-text h3 {
  margin-bottom: 5px;
  color: #333;
}

.cookie-text p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.cookie-text a {
  color: #AE2C2A;
  text-decoration: none;
}

.cookie-buttons {
  display: flex;
  gap: 10px;
}

.cookie-accept, .cookie-settings {
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.cookie-accept {
  background-color: #AE2C2A;
  color: white;
}

.cookie-accept:hover {
  background-color: #D84A48;
}

.cookie-settings {
  background-color: #f1f1f1;
  color: #333;
}

.cookie-settings:hover {
  background-color: #e5e5e5;
}

/* Modal de Configurações de Cookies */
.cookie-settings-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.cookie-settings-content {
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
}

.cookie-settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.cookie-settings-header h3 {
  margin: 0;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #333;
}

.cookie-settings-body {
  padding: 20px;
}

.cookie-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.cookie-option:last-child {
  border-bottom: none;
}

.cookie-option-info {
  flex: 1;
}

.cookie-option-info h4 {
  margin: 0 0 5px 0;
  color: #333;
}

.cookie-option-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.cookie-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.cookie-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #AE2C2A;
}

input:focus + .slider {
  box-shadow: 0 0 1px #AE2C2A;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.cookie-switch.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cookie-settings-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  text-align: right;
}

.cookie-save {
  padding: 10px 20px;
  background-color: #AE2C2A;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cookie-save:hover {
  background-color: #D84A48;
}

/* Media queries para responsividade */
@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    text-align: center;
  }
  
  .cookie-icon {
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  .cookie-buttons {
    margin-top: 20px;
  }
  
  .cookie-banner {
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px 10px 0 0;
  }
}

@media (max-width: 576px) {
  .cookie-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .cookie-accept, .cookie-settings {
    width: 100%;
    margin-bottom: 10px;
  }
}

/* Seção de Estatísticas */
.stats-section {
  background: linear-gradient(135deg, #f9f9f9, #f0f0f0);
  padding: 100px 0;
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
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.accent-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #AE2C2A, #ff5555);
  margin: 0 auto;
}

.stats-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-item {
  background: white;
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  position: relative;
  overflow: hidden;
  border-top: 5px solid #AE2C2A;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.05), transparent);
  z-index: 0;
}

.stat-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  position: relative;
  z-index: 1;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 2rem;
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

.stat-number {
  position: relative;
  z-index: 1;
  font-size: 3.5rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 15px;
  line-height: 1;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  position: relative;
  z-index: 1;
  font-size: 1.2rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 992px) {
  .stats-container {
    gap: 20px;
  }
  
  .stat-item {
    min-width: calc(50% - 20px);
    padding: 30px 20px;
  }
}

@media (max-width: 768px) {
  .testimonials-slides {
    min-height: 520px;
  }
  
  .testimonial-content {
    padding: 30px 50px 70px 50px;
  }
  
  .testimonial-controls {
    margin-top: -60px;
  }
  
  .control-prev {
    left: 10px;
  }
  
  .control-next {
    right: 10px;
  }

  .stats-section {
    padding: 80px 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .stat-item {
    min-width: 100%;
    max-width: 100%;
  }
  
  .stat-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }
  
  .stat-number {
    font-size: 3rem;
  }
  
  .stat-label {
    font-size: 1.1rem;
  }
}

/* Seção de Cabeçalho para todas as seções */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.accent-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #AE2C2A, #ff5555);
  margin: 0 auto;
}

/* Estilos para a seção de serviços */
.services-section {
  background-color: #f9f9f9;
  padding: 100px 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.accent-line {
  height: 4px;
  width: 80px;
  background-color: #AE2C2A;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.service-card {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.service-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-card:hover .service-image img {
  transform: scale(1.1);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
}

.service-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}

.service-icon {
  width: 70px;
  height: 70px;
  background-color: #AE2C2A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -65px auto 20px;
  position: relative;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
  border: 5px solid #fff;
}

.service-icon i {
  font-size: 1.8rem;
  color: #fff;
}

.service-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
}

.service-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
  text-align: center;
}

.service-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #AE2C2A;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-top: auto;
}

.service-link i {
  transition: transform 0.3s ease;
}

.service-link:hover {
  color: #333;
}

.service-link:hover i {
  transform: translateX(5px);
}

/* Responsividade */
@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 70px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .service-card {
    max-width: 450px;
    margin: 0 auto;
  }
}

/* Estilos para a Seção de Depoimentos */
.testimonials-section {
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
  padding: 180px 0;
}

.testimonials-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.testimonials-slider {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.testimonials-slides {
  position: relative;
  min-height: 450px;
  margin-bottom: 30px;
}

.testimonial-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  z-index: 1;
}

.testimonial-slide.active {
  opacity: 1;
  visibility: visible;
  z-index: 2;
}

.testimonial-content {
  background-color: white;
  border-radius: 15px;
  padding: 40px 60px 70px 60px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: relative;
  border-top: 5px solid #AE2C2A;
  transition: transform 0.3s ease;
}

.testimonial-content:hover {
  transform: translateY(-10px);
}

.quote-icon {
  font-size: 2.5rem;
  color: #AE2C2A;
  margin-bottom: 20px;
  opacity: 0.8;
}

.testimonial-text {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 30px;
  font-style: italic;
  position: relative;
}

.testimonial-author {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #AE2C2A;
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #AE2C2A;
  color: white;
}

.author-avatar i {
  font-size: 2rem;
}

.author-info {
  text-align: left;
}

.author-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
}

.author-position {
  font-size: 0.9rem;
  color: #666;
}

.testimonial-controls {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: -130px;
  z-index: 10;
}

.control-prev, .control-next {
  background: white;
  border: none;
  font-size: 1.2rem;
  color: #AE2C2A;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation: pulse 2s infinite alternate;
}

.control-prev {
  left: 20px;
}

.control-next {
  right: 20px;
}

.control-prev:hover, .control-next:hover {
  color: white;
  background-color: #AE2C2A;
  box-shadow: 0 8px 20px rgba(174, 44, 42, 0.3);
  transform: translateY(-50%) scale(1.15);
  animation: none;
}

.control-prev:active, .control-next:active {
  transform: translateY(-12px);
}

.control-indicators {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.indicator:hover {
  transform: scale(1.2);
}

.indicator.active {
  background-color: #AE2C2A;
  transform: scale(1.2);
  animation: glow 1.5s infinite alternate;
}

/* Animação de pulso para os botões */
@keyframes pulse {
  0% {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-50%) scale(1);
  }
  100% {
    box-shadow: 0 8px 20px rgba(174, 44, 42, 0.2);
    transform: translateY(-50%) scale(1.05);
  }
}

/* Animação de brilho para o indicador ativo */
@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(174, 44, 42, 0.5);
  }
  100% {
    box-shadow: 0 0 10px rgba(174, 44, 42, 0.8), 0 0 15px rgba(174, 44, 42, 0.3);
  }
}

/* Animação para os ícones dentro dos botões */
.control-prev i, .control-next i {
  transition: transform 0.3s ease;
}

.control-prev:hover i {
  animation: slideLeft 0.5s ease infinite alternate;
}

.control-next:hover i {
  animation: slideRight 0.5s ease infinite alternate;
}

@keyframes slideLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-3px);
  }
}

@keyframes slideRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(3px);
  }
}

/* Seção de Parceiros */
.partners-section {
  background-color: #f9f9f9;
}

.partners-carousel {
  overflow: hidden;
  margin: 50px 0;
}

.partners-track {
  display: flex;
  gap: 30px;
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.partner-slide {
  flex: 0 0 auto;
  width: 180px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 15px;
  transition: all 0.3s ease;
}

.partner-slide:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.partner-slide img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.partner-slide:hover img {
  filter: grayscale(0%);
}

.partners-action {
  text-align: center;
  margin-top: 30px;
}

.secondary-button {
  background-color: transparent;
  color: #AE2C2A;
  border: 2px solid #AE2C2A;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.secondary-button:hover {
  background-color: #AE2C2A;
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.2);
}

.secondary-button i {
  transition: transform 0.3s ease;
}

.secondary-button:hover i {
  transform: translateX(5px);
}

/* Seção de Chamada para Ação */
.cta-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.3;
}

.cta-container {
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-container h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.cta-container p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.cta-button {
  background-color: white;
  color: #AE2C2A;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #f8f8f8;
}

.cta-button i {
  transition: transform 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(5px);
}

/* Seção de Contato Rápido */
.quick-contact-section {
  background-color: white;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.quick-contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.quick-contact-container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.contact-info {
  text-align: left;
}

.contact-info h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
}

/* Seletor de filiais */
.branch-selector {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.branch-button {
  padding: 12px 25px;
  background-color: #f5f5f5;
  border: 2px solid #ddd;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.branch-button:hover {
  background-color: #eee;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.branch-button.active {
  background-color: #AE2C2A;
  color: white;
  border-color: #AE2C2A;
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
}

.branch-info {
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.branch-info:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-method i {
  font-size: 1.5rem;
  color: #AE2C2A;
  width: 40px;
  height: 40px;
  background-color: rgba(174, 44, 42, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-method span {
  font-size: 1.1rem;
  color: #333;
}

/* Mapa */
.branch-map {
  height: 450px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 5px solid white;
  transition: all 0.3s ease;
}

.branch-map:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

/* Responsividade */
@media (max-width: 992px) {
  .quick-contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .contact-info {
    text-align: center;
  }
  
  .branch-selector {
    justify-content: center;
  }
  
  .contact-methods {
    align-items: flex-start;
  }
  
  .branch-map {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .branch-button {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .contact-info h2 {
    font-size: 1.8rem;
  }
  
  .contact-info p {
    font-size: 1rem;
  }
  
  .branch-map {
    height: 300px;
  }
}

@media (max-width: 576px) {
  .testimonials-slides {
    min-height: 580px;
  }
  
  .testimonial-content {
    padding: 25px 40px 230px 40px;
  }
  
  .testimonial-controls {
    margin-top: -225px;
  }
  
  .control-prev, .control-next {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  .control-prev {
    left: 5px;
  }
  
  .control-next {
    right: 5px;
  }


  .branch-selector {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  
  .branch-button {
    width: 100%;
  }
  
  .branch-info {
    padding: 20px;
  }
  
  .contact-method i {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
  
  .contact-method span {
    font-size: 0.9rem;
  }
  
  .branch-map {
    height: 250px;
  }
}

/* Media Queries - Responsividade */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-description {
    font-size: 1.3rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .quick-contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .contact-info {
    text-align: center;
  }
  
  .contact-methods {
    align-items: center;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1.2rem;
  }
  
  .stats-container {
    flex-wrap: wrap;
  }
  
  .stat-item {
    flex: 0 0 calc(50% - 30px);
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .info-blocks-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .logo-image {
    max-width: 70%;
  }
  
  .banner-h2 {
    font-size: 2.2em;
  }
  
  .banner-p {
    font-size: 1.2em;
  }
}

@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
  
  .primary-button, .secondary-button, .cta-button {
    padding: 12px 25px;
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .stat-item {
    flex: 0 0 100%;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .cta-container h2 {
    font-size: 2rem;
  }
  
  .cta-container p {
    font-size: 1.1rem;
  }
  
  .contact-info h2 {
    font-size: 2rem;
  }
  
  .contact-info p {
    font-size: 1rem;
  }
  
  .contact-form {
    padding: 30px;
  }
  
  .contact-form h3 {
    font-size: 1.5rem;
  }

  .hero-section {
    height: 100vh;
  }
  
  .logo-image {
    max-width: 80%;
  }
  
  .banner-h2 {
    font-size: 1.8em;
  }
  
  .banner-p {
    font-size: 1.1em;
    border-left: 3px solid rgba(255, 255, 255, 0.8);
  }
  
  .scroll-indicator {
    padding: 8px 16px;
  }
  
  .scroll-indicator span {
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-logo {
    max-width: 150px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .service-card {
    padding: 30px 20px;
  }
  
  .service-icon {
    font-size: 2.5rem;
  }
  
  .service-card h3 {
    font-size: 1.3rem;
  }
  
  .testimonial-content {
    padding: 20px;
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
  
  .cta-container h2 {
    font-size: 1.8rem;
  }
  
  .cta-container p {
    font-size: 1rem;
  }
  
  .contact-form {
    padding: 20px;
  }

  .logo-image {
    max-width: 90%;
  }
  
  .banner-h2 {
    font-size: 1.5em;
    padding: 8px 15px;
  }
  
  .banner-p {
    font-size: 1em;
    border-left: 2px solid rgba(255, 255, 255, 0.8);
  }
}

/* Animações específicas para elementos */
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

.service-icon i, .stat-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Efeito de pulsação para botões */
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

.primary-button:hover, .cta-button:hover {
  animation: pulse 1.5s infinite;
}

/* Efeito de brilho para botões */
.primary-button, .secondary-button, .cta-button, .submit-button {
  position: relative;
  overflow: hidden;
}

.primary-button::after, .secondary-button::after, .cta-button::after, .submit-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s;
}

.primary-button:hover::after, .secondary-button:hover::after, .cta-button:hover::after, .submit-button:hover::after {
  left: 100%;
}
</style>
