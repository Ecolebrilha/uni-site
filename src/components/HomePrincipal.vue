<template>
  <div class="home">
    <HomeHeader />
    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <div class="hero-content">
          <img src="@/assets/logo-uni.png" alt="Logo Uni Hospitalar" class="logo-image">
          <h2 class="banner-h2">{{ t('home.hero.title') }}</h2>
          <p class="banner-p" v-html="t('home.hero.subtitle')"></p>
          <div class="scroll-indicator" @click="scrollToContent">
            <span>{{ t('home.hero.scrollIndicator') }}</span>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Estatísticas -->
    <section class="stats-section" ref="statsSection">
      <div class="container">
        <div class="section-header">
          <h2>{{ t('home.stats.title') }}</h2>
          <div class="accent-line"></div>
        </div>
        <div class="stats-container">
          <div class="stat-item">
            <div class="stat-icon">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <div class="stat-number">
              <span ref="yearsCounter" :data-target="yearsOfExperience">0</span>
            </div>
            <div class="stat-label">{{ t('home.stats.years') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="stat-number">
              <span ref="unitsCounter" data-target="3">0</span>
            </div>
            <div class="stat-label">{{ t('home.stats.units') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <i class="fas fa-users"></i>
            </div>
            <div class="stat-number">
              <span ref="clientsCounter" data-target="5000">0</span>+
            </div>
            <div class="stat-label">{{ t('home.stats.clients') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <i class="fas fa-truck"></i>
            </div>
            <div class="stat-number">
              <span ref="hoursCounter" data-target="48">0</span>h
            </div>
            <div class="stat-label">{{ t('home.stats.delivery') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Serviços e Informações -->
    <section class="services-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-header">
            <h2 class="section-title">{{ t('home.services.title') }}</h2>
            <div class="section-subtitle">{{ t('home.services.subtitle') }}</div>
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
                <h3>{{ t('home.services.storage.title') }}</h3>
                <p>{{ t('home.services.storage.description') }}</p>
                <router-link to="/Diferenciais" class="service-link">
                  <span>{{ t('home.services.storage.link') }}</span>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </router-link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="bottom" :delay="300">
            <div class="service-card">
              <div class="service-image">
                <img src="@/assets/diferenciais.jpg" alt="Diferenciais"
                  @error="handleImageError($event, 'diferenciais')">
                <div class="service-overlay"></div>
              </div>
              <div class="service-content">
                <div class="service-icon">
                  <i class="fas fa-award"></i>
                </div>
                <h3>{{ t('home.services.differentials.title') }}</h3>
                <p>{{ t('home.services.differentials.description') }}</p>
                <router-link to="/Diferenciais" class="service-link">
                  <span>{{ t('home.services.differentials.link') }}</span>
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
                <h3>{{ t('home.services.logistics.title') }}</h3>
                <p>{{ t('home.services.logistics.description') }}</p>
                <router-link to="/Diferenciais" class="service-link">
                  <span>{{ t('home.services.logistics.link') }}</span>
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
                <h3>{{ t('home.services.businessUnit.title') }}</h3>
                <p>{{ t('home.services.businessUnit.description') }}</p>
                <router-link to="/Diferenciais" class="service-link">
                  <span>{{ t('home.services.businessUnit.link') }}</span>
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
                <h3>{{ t('home.services.mainClients.title') }}</h3>
                <p>{{ t('home.services.mainClients.description') }}</p>
                <router-link to="/Parceiros" class="service-link">
                  <span>{{ t('home.services.mainClients.link') }}</span>
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
                <h3>{{ t('home.services.mainProducts.title') }}</h3>
                <p>{{ t('home.services.mainProducts.description') }}</p>
                <router-link to="/Produtos" class="service-link">
                  <span>{{ t('home.services.mainProducts.link') }}</span>
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
            <h2 class="section-title">{{ t('home.testimonials.title') }}</h2>
            <div class="section-subtitle">{{ t('home.testimonials.subtitle') }}</div>
            <div class="accent-line"></div>
          </div>
        </ScrollReveal>
        <div class="testimonials-slider">
          <div class="testimonials-slides" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
            @touchend="handleTouchEnd" @mousedown="handleMouseDown" @mousemove="handleMouseMove"
            @mouseup="handleMouseUp" @mouseleave="handleMouseUp" :style="{ transform: `translateX(${slideOffset}px)` }">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-slide"
              :class="{ active: currentTestimonial === index }">
              <div class="testimonial-content">
                <div class="quote-icon">
                  <i class="fas fa-quote-left"></i>
                </div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="testimonial-author">
                  <div class="author-avatar">
                    <i :class="getAuthorIcon(index)"></i>
                  </div>
                  <div class="author-info">
                    <div class="author-name">{{ testimonial.author }}</div>
                    <div class="author-position">{{ testimonial.position }}</div>
                  </div>
                </div>

                <div class="testimonial-controls">
                  <button class="control-prev" @click="prevTestimonial">
                    <i class="fas fa-chevron-left"></i>
                  </button>
                  <div class="control-indicators">
                    <span v-for="(testimonialItem, indicatorIndex) in testimonials" :key="indicatorIndex"
                      class="indicator" :class="{ active: currentTestimonial === indicatorIndex }"
                      @click="setTestimonial(indicatorIndex)"></span>
                  </div>
                  <button class="control-next" @click="nextTestimonial">
                    <i class="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Parceiros -->
    <section class="partners-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('home.partners.title') }}</h2>
          <div class="section-subtitle">{{ t('home.partners.subtitle') }}</div>
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
              <span>{{ t('home.partners.button') }}</span>
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
          <h2>{{ t('home.cta.title') }}</h2>
          <p>{{ t('home.cta.description') }}</p>
          <router-link to="/SejaParceiro">
            <button class="cta-button">
              <span>{{ t('home.cta.button') }}</span>
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
            <h2>{{ t('home.contact.title') }}</h2>
            <p>{{ t('home.contact.subtitle') }}</p>

            <!-- Botões para selecionar filial -->
            <div class="branch-selector">
              <button v-for="(branch, index) in branches" :key="index" @click="setActiveBranch(index)"
                :class="['branch-button', { active: activeBranch === index }]">
                {{ getBranchName(index) }}
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
                  <a href="mailto:contato@unihospitalar.com.br" class="email-link">
                    {{ branches[activeBranch].email }}
                  </a>
                </div>
                <div class="contact-method">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>{{ branches[activeBranch].address }}</span>
                </div>
                <div class="contact-method">
                  <i class="fas fa-clock"></i>
                  <span>{{ t('home.contact.hours') }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Mapa da filial selecionada -->
          <div class="branch-map">
            <iframe :src="branches[activeBranch].mapUrl" width="100%" height="100%" style="border:0;" allowfullscreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <HomeFooter />

    <!-- Banner de Cookies -->
    <div class="cookie-banner" v-if="showCookieBanner">
      <div class="cookie-content">
        <div class="cookie-icon">
          <i class="fas fa-cookie-bite"></i>
        </div>
        <div class="cookie-text">
          <h3>{{ t('home.cookies.banner.title') }}</h3>
          <p>{{ t('home.cookies.banner.text') }} <router-link to="/PoliticaPrivacidade">{{
            t('home.cookies.banner.privacyPolicy') }}</router-link>.</p>
        </div>
        <div class="cookie-buttons">
          <button class="cookie-accept" @click="acceptCookies">{{ t('home.cookies.banner.accept') }}</button>
          <button class="cookie-settings" @click="showCookieSettings = true">{{ t('home.cookies.banner.settings')
          }}</button>
        </div>
      </div>
    </div>

    <!-- Modal de Configurações de Cookies -->
    <div class="cookie-settings-modal" v-if="showCookieSettings">
      <div class="cookie-settings-content">
        <div class="cookie-settings-header">
          <h3>{{ t('home.cookies.settings.title') }}</h3>
          <button class="close-button" @click="showCookieSettings = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="cookie-settings-body">
          <div class="cookie-option">
            <div class="cookie-option-info">
              <h4>{{ t('home.cookies.settings.essential.title') }}</h4>
              <p>{{ t('home.cookies.settings.essential.description') }}</p>
            </div>
            <div class="cookie-switch disabled">
              <input type="checkbox" checked disabled>
              <span class="slider"></span>
            </div>
          </div>
          <div class="cookie-option">
            <div class="cookie-option-info">
              <h4>{{ t('home.cookies.settings.analytics.title') }}</h4>
              <p>{{ t('home.cookies.settings.analytics.description') }}</p>
            </div>
            <div class="cookie-switch">
              <input type="checkbox" v-model="cookiePreferences.analytics" id="analytics-cookie">
              <label for="analytics-cookie" class="slider"></label>
            </div>
          </div>
          <div class="cookie-option">
            <div class="cookie-option-info">
              <h4>{{ t('home.cookies.settings.marketing.title') }}</h4>
              <p>{{ t('home.cookies.settings.marketing.description') }}</p>
            </div>
            <div class="cookie-switch">
              <input type="checkbox" v-model="cookiePreferences.marketing" id="marketing-cookie">
              <label for="marketing-cookie" class="slider"></label>
            </div>
          </div>
        </div>
        <div class="cookie-settings-footer">
          <button class="cookie-save" @click="saveCookiePreferences">{{ t('home.cookies.settings.save') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import { useHomeTranslation } from '@/composables/useHomeTranslation.js';

export default {
  name: 'HomePrincipal',
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useHomeTranslation()

    return {
      t,
      currentLanguage
    }
  },
  data() {
    return {
      currentTestimonial: 0,
      testimonialInterval: null,
      activeBranch: 0,
      companyFoundingYear: 2005, // Ano de fundação da empresa
      companyAnniversary: { month: 7, day: 11 }, // 11 de julho
      isDragging: false,
      startX: 0,
      currentX: 0,
      slideOffset: 0,
      dragThreshold: 50,
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
    },
    testimonials() {
      return [
        {
          text: this.t('home.testimonials.testimonial1.text'),
          author: this.t('home.testimonials.testimonial1.author'),
          position: this.t('home.testimonials.testimonial1.position')
        },
        {
          text: this.t('home.testimonials.testimonial2.text'),
          author: this.t('home.testimonials.testimonial2.author'),
          position: this.t('home.testimonials.testimonial2.position')
        },
        {
          text: this.t('home.testimonials.testimonial3.text'),
          author: this.t('home.testimonials.testimonial3.author'),
          position: this.t('home.testimonials.testimonial3.position')
        }
      ]
    }
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
      const baseDuration = 6000;

      const counters = [
        { ref: this.$refs.yearsCounter, target: this.yearsOfExperience },
        { ref: this.$refs.unitsCounter, target: 3 },
        { ref: this.$refs.clientsCounter, target: 5000 },
        { ref: this.$refs.hoursCounter, target: 48 }
      ];

      counters.forEach(counter => {
        counter.ref.innerText = '0';
        counter.current = 0;
      });

      const steps = Math.floor(baseDuration / 16);
      let currentStep = 0;

      const animate = () => {
        currentStep++;
        const progress = currentStep / steps;

        counters.forEach(counter => {
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const value = Math.min(
            Math.floor(counter.target * easedProgress),
            counter.target
          );

          if (value !== counter.current) {
            counter.ref.innerText = value;
            counter.current = value;
          }
        });

        if (currentStep < steps) {
          requestAnimationFrame(animate);
        } else {
          counters.forEach(counter => {
            counter.ref.innerText = counter.target;
          });
        }
      };

      requestAnimationFrame(animate);
    },

    startTestimonialSlider() {
      this.testimonialInterval = setInterval(() => {
        this.nextTestimonial();
      }, 5000);
    },
    prevTestimonial() {
      clearInterval(this.testimonialInterval);
      this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
      this.startTestimonialSlider();
    },
    nextTestimonial() {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    },
    setTestimonial(index) {
      clearInterval(this.testimonialInterval);
      this.currentTestimonial = index;
      this.startTestimonialSlider();
    },
    getAuthorIcon(index) {
      const icons = ['fas fa-user-md', 'fas fa-user-nurse', 'fas fa-user-tie'];
      return icons[index] || 'fas fa-user';
    },
    getBranchName(index) {
      const branchKeys = ['home.contact.branches.recife', 'home.contact.branches.fortaleza', 'home.contact.branches.saopaulo'];
      return this.t(branchKeys[index]) || this.branches[index].name;
    },
    handleImageError(e) {
      e.target.src = require('@/assets/logo-uni.png');
    },
    setActiveBranch(index) {
      this.activeBranch = index;
    },
    checkCookieConsent() {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (!cookieConsent) {
        this.showCookieBanner = true;
      } else {
        try {
          this.cookiePreferences = JSON.parse(cookieConsent);
        } catch (e) {
          this.showCookieBanner = true;
        }
      }
    },

    acceptCookies() {
      this.cookiePreferences = {
        essential: true,
        analytics: true,
        marketing: true
      };

      localStorage.setItem('cookieConsent', JSON.stringify(this.cookiePreferences));
      this.showCookieBanner = false;
      this.applyUserPreferences();
    },

    saveCookiePreferences() {
      localStorage.setItem('cookieConsent', JSON.stringify(this.cookiePreferences));
      this.showCookieBanner = false;
      this.showCookieSettings = false;
      this.applyUserPreferences();
    },

    applyUserPreferences() {
      if (this.cookiePreferences.analytics) {
        console.log('Analytics cookies enabled');
      } else {
        console.log('Analytics cookies disabled');
      }

      if (this.cookiePreferences.marketing) {
        console.log('Marketing cookies enabled');
      } else {
        console.log('Marketing cookies disabled');
      }
    },
    handleTouchStart(e) {
      this.startDrag(e.touches[0].clientX);
    },

    handleTouchMove(e) {
      if (this.isDragging) {
        e.preventDefault();
        this.updateDrag(e.touches[0].clientX);
      }
    },

    handleTouchEnd() {
      this.endDrag();
    },

    handleMouseDown(e) {
      this.startDrag(e.clientX);
    },

    handleMouseMove(e) {
      if (this.isDragging) {
        e.preventDefault();
        this.updateDrag(e.clientX);
      }
    },

    handleMouseUp() {
      this.endDrag();
    },

    startDrag(clientX) {
      this.isDragging = true;
      this.startX = clientX;
      this.currentX = clientX;
      clearInterval(this.testimonialInterval);
    },

    updateDrag(clientX) {
      if (!this.isDragging) return;

      this.currentX = clientX;
      const deltaX = this.currentX - this.startX;
      this.slideOffset = deltaX;
    },

    endDrag() {
      if (!this.isDragging) return;

      const deltaX = this.currentX - this.startX;

      if (Math.abs(deltaX) > this.dragThreshold) {
        if (deltaX > 0) {
          this.prevTestimonial();
        } else {
          this.nextTestimonial();
        }
      }

      this.isDragging = false;
      this.slideOffset = 0;
      this.startTestimonialSlider();
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

/* Seção de Serviços */
.services-section {
  background-color: #f9f9f9;
  padding: 100px 0;
  position: relative;
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

/* Seção de Depoimentos */
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

.testimonials-slides {
  position: relative;
  min-height: 450px;
  margin-bottom: 30px;
  cursor: grab;
  transition: transform 0.3s ease;
}

.testimonials-slides:active {
  cursor: grabbing;
}

.testimonial-controls {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.95);
  padding: 15px 25px;
  border-radius: 50px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.control-prev,
.control-next {
  background: white;
  border: 2px solid #AE2C2A;
  font-size: 1rem;
  color: #AE2C2A;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.control-prev:hover,
.control-next:hover {
  color: white;
  background-color: #AE2C2A;
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
}

.control-indicators {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.indicator:hover {
  transform: scale(1.2);
  background-color: #AE2C2A;
}

.indicator.active {
  background-color: #AE2C2A;
  transform: scale(1.2);
  border-color: white;
  box-shadow: 0 0 10px rgba(174, 44, 42, 0.5);
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

.contact-method a {
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-method a:hover {
  color: #AE2C2A;
  text-decoration: underline;
}

.email-link {
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  border-radius: 5px;
  padding: 2px 6px;
}

.email-link:hover {
  color: #AE2C2A;
  background-color: rgba(174, 44, 42, 0.1);
  transform: scale(1.05);
}

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

.cookie-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  min-height: 60px;
}

.cookie-icon {
  font-size: 2rem;
  color: #AE2C2A;
  margin-right: 20px;
}

.cookie-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  text-align: center;
}

.cookie-text h3 {
  margin-bottom: 10px;
  color: #333;
  margin-top: 0;
  line-height: 1.2;
  text-align: center;
}

.cookie-text p {
  margin-bottom: 10px;
  color: #666;
  font-size: 0.9rem;
  text-align: center;
}

.cookie-text a {
  color: #AE2C2A;
  text-decoration: none;
  transition: all 0.2s ease;
}

.cookie-text a:hover {
  color: #D84A48;
  text-decoration: underline;
}

.cookie-buttons {
  display: flex;
  gap: 10px;
}

.cookie-accept,
.cookie-settings {
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

input:checked+.slider {
  background-color: #AE2C2A;
}

input:focus+.slider {
  box-shadow: 0 0 1px #AE2C2A;
}

input:checked+.slider:before {
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

/* Animações */
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

  0%,
  20%,
  50%,
  80%,
  100% {
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

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

.service-icon i,
.stat-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Efeito de brilho para botões */
.secondary-button,
.cta-button {
  position: relative;
  overflow: hidden;
}

.secondary-button::after,
.cta-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s;
}

.secondary-button:hover::after,
.cta-button:hover::after {
  left: 100%;
}

/* RESPONSIVIDADE */

/* Tablets e telas médias */
@media (max-width: 1200px) {
  .stat-item {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
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

  .branch-selector {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 992px) {
  .stats-container {
    flex-wrap: wrap;
  }

  .stat-item {
    flex: 0 0 calc(50% - 30px);
    min-width: calc(50% - 20px);
    padding: 30px 20px;
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

  .branch-selector {
    justify-content: center;
  }

  .contact-methods {
    align-items: flex-start;
  }

  .branch-map {
    height: 350px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .service-card {
    max-width: 700px;
    margin: 0 auto;
  }
}

/* Smartphones */
@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
  }

  .stat-item {
    min-width: 60%;
    max-width: 100%;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }

  .stat-label {
    font-size: 1.1rem;
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

  .cookie-content {
    flex-direction: column;
    text-align: center;
  }

  .cookie-icon {
    margin-right: 0;
    margin-bottom: 5px;
  }

  .cookie-buttons {
    margin-top: 5px;
  }

  .cookie-banner {
    border-radius: 10px;
  }

  .testimonial-content {
    padding: 30px 30px 80px 30px;
  }

  .testimonial-controls {
    bottom: -15px;
    padding: 12px 20px;
    gap: 15px;
  }

  .control-prev,
  .control-next {
    width: 30px;
    height: 30px;
    font-size: 0.9rem;
  }

  .stats-section {
    padding: 80px 0;
  }

  .services-section {
    padding: 70px 0;
  }

  .service-card {
    max-width: 450px;
    margin: 0 auto;
  }

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

  .cta-container h2 {
    font-size: 2rem;
  }

  .cta-container p {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .cookie-buttons {
    flex-direction: column;
    width: 55%;
  }

  .cookie-accept,
  .cookie-settings {
    width: 100%;
    margin-bottom: 10px;
  }

  .testimonial-content {
    padding: 25px 20px 70px 20px;
  }

  .testimonial-controls {
    bottom: -10px;
    padding: 10px 15px;
    gap: 12px;
  }

  .control-prev,
  .control-next {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }

  .indicator {
    width: 8px;
    height: 8px;
  }

  .author-avatar {
    width: 40px;
    height: 40px;
  }

  .author-avatar i {
    font-size: 1.2rem;
  }

  .author-name {
    font-size: 1rem;
  }

  .author-position {
    font-size: 0.8rem;
  }

  .testimonial-text {
    font-size: 0.9rem;
  }

  .branch-selector {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .branch-button {
    width: 90%;
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

  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .service-icon {
    font-size: 2.5rem;
  }

  .service-card h3 {
    font-size: 1.3rem;
  }

  .cta-container h2 {
    font-size: 1.8rem;
  }

  .cta-container p {
    font-size: 1rem;
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

@media (max-width: 400px) {
  .branch-button {
    font-size: 0.8rem;
  }

  .container {
    padding: 0 15px;
  }

  .stat-item {
    padding: 25px 20px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .service-content {
    padding: 25px;
  }

  .author-avatar {
    width: 25px;
    height: 25px;
  }

  .author-avatar i {
    font-size: 0.7rem;
  }

  .author-name {
    font-size: 0.9rem;
  }

  .author-position {
    font-size: 0.7rem;
  }

  .cookie-content {
    padding: 20px;
  }

  .cookie-text h3 {
    font-size: 1.1rem;
  }

  .cookie-text p {
    font-size: 0.8rem;
  }
}

/* Melhorias de acessibilidade */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .parallax-container {
    background-attachment: scroll;
  }
}

/* Print styles */
@media print {

  .cookie-banner,
  .cookie-settings-modal,
  .scroll-indicator,
  .testimonial-controls {
    display: none !important;
  }

  .hero-section {
    height: auto;
    min-height: auto;
  }

  .parallax-container {
    background-attachment: scroll;
    position: relative;
  }

  section {
    page-break-inside: avoid;
  }
}

/* Estilos para o ScrollReveal */
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Estilos para loading states */
.loading {
  opacity: 0.6;
  pointer-events: none;
}

.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid #AE2C2A;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Estilos para estados de erro */
.error-state {
  color: #dc3545;
  text-align: center;
  padding: 20px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin: 20px 0;
}

/* Estilos para estados de sucesso */
.success-state {
  color: #155724;
  text-align: center;
  padding: 20px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  margin: 20px 0;
}

/* Melhorias de performance */
.service-image img,
.partner-slide img {
  will-change: transform;
}

.stat-item,
.service-card,
.testimonial-content {
  will-change: transform;
}

/* Estilos para focus states (acessibilidade) */
button:focus,
.branch-button:focus,
.service-link:focus,
.indicator:focus {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
}

/* Estilos para high contrast mode */
@media (prefers-contrast: high) {
  .service-overlay {
    background: rgba(0, 0, 0, 0.8);
  }

  .overlay {
    background: rgba(0, 0, 0, 0.8);
  }

  .accent-line {
    background: #AE2C2A;
  }
}
</style>
