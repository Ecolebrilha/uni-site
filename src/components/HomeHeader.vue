<template>
  <header :class="{ 'scrolled': isScrolled }">
    <button @click="toggleSidebar" :class="['menu-toggle', { 'scrolled': isScrolled, 'active': sidebarOpen }]">
      <span class="menu-icon"></span>
    </button>

    <!-- Menu sidebar -->
    <div :class="['menu-sidebar', { 'active': sidebarOpen }]">
      <div class="sidebar-header">
        <img src="@/assets/logo-uni10.png" alt="Logo da Uni Hospitalar" class="sidebar-logo">
        <button class="menu-close" @click="toggleSidebar">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="sidebar-content">
        <ul class="sidebar-menu">
          <li><router-link to="/" exact-active-class="active" @click="closeSidebar">
              <i class="fas fa-home"></i> {{ tHeader('header.navigation.home') }}
            </router-link></li>
          <li><router-link to="/Sobre" exact-active-class="active" @click="closeSidebar">
              <i class="fas fa-building"></i> {{ tHeader('header.navigation.about') }}
            </router-link></li>
          <li><router-link to="/Diferenciais" exact-active-class="active" @click="closeSidebar">
              <i class="fas fa-award"></i> {{ tHeader('header.navigation.differentials') }}
            </router-link></li>
          <li><router-link to="/Servicos" exact-active-class="active" @click="closeSidebar">
              <i class="fas fa-cogs"></i> {{ tHeader('header.navigation.services') }}
            </router-link></li>
          <!-- <li><router-link to="/Produtos" exact-active-class="active" @click="closeSidebar">
              <i class="fas fa-pills"></i>{{ tHeader('header.navigation.products') }}
            </router-link></li> -->

          <!-- Compliance Dropdown -->
          <li class="sidebar-dropdown">
            <div class="sidebar-dropdown-toggle">
              <router-link to="/Compliance" class="sidebar-dropdown-main" @click="closeSidebar">
                <i class="fas fa-shield-alt"></i>
                <span>{{ tHeader('header.navigation.compliance') }}</span>
              </router-link>
              <div class="sidebar-dropdown-arrow-container" @click.stop="toggleDropdown('compliance')">
                <i class="fas fa-chevron-down sidebar-dropdown-arrow"
                  :class="{ 'rotated': openDropdown === 'compliance' }"></i>
              </div>
            </div>
            <div class="sidebar-dropdown-menu" :class="{ 'show': openDropdown === 'compliance' }">
              <router-link to="/CanalConfidencial" class="sidebar-dropdown-item" @click="closeSidebar">
                <i class="fas fa-exclamation-triangle"></i>
                <span>{{ tHeader('header.dropdown.compliance.confidentialChannel') }}</span>
              </router-link>
              <router-link to="/FazerRelato" class="sidebar-dropdown-item" @click="closeSidebar">
                <i class="fas fa-edit"></i>
                <span>{{ tHeader('header.dropdown.compliance.makeReport') }}</span>
              </router-link>
              <router-link to="/ConsultaStatus" class="sidebar-dropdown-item" @click="closeSidebar">
                <i class="fas fa-search"></i>
                <span>{{ tHeader('header.dropdown.compliance.checkStatus') }}</span>
              </router-link>
            </div>
          </li>

          <!-- LGPD Dropdown -->
          <li class="sidebar-dropdown">
            <div class="sidebar-dropdown-toggle">
              <router-link to="/LGPD" class="sidebar-dropdown-main" @click="closeSidebar">
                <i class="fas fa-lock"></i>
                <span>{{ tHeader('header.navigation.lgpd') }}</span>
              </router-link>
              <div class="sidebar-dropdown-arrow-container" @click.stop="toggleDropdown('lgpd')">
                <i class="fas fa-chevron-down sidebar-dropdown-arrow"
                  :class="{ 'rotated': openDropdown === 'lgpd' }"></i>
              </div>
            </div>
            <div class="sidebar-dropdown-menu" :class="{ 'show': openDropdown === 'lgpd' }">
              <router-link to="/PoliticaPrivacidade" class="sidebar-dropdown-item" @click="closeSidebar">
                <i class="fas fa-file-shield"></i>
                <span class="politica-span">{{ tHeader('header.dropdown.lgpd.privacyPolicy') }}</span>
              </router-link>
              <!-- <router-link to="/AvisoPrivacidade" class="sidebar-dropdown-item" @click="closeSidebar">
                <i class="fas fa-info-circle"></i>
                <span class="politica-span">{{ tHeader('header.dropdown.lgpd.privacyNotice') }}</span>
              </router-link> -->
            </div>
          </li>

          <!-- Contato Dropdown -->
          <li class="sidebar-dropdown">
            <div class="sidebar-dropdown-toggle">
              <a href="#" class="sidebar-dropdown-main" @click.prevent="toggleDropdown('contato')">
                <i class="fas fa-envelope"></i>
                <span>{{ tHeader('header.navigation.contact') }}</span>
              </a>
              <div class="sidebar-dropdown-arrow-container" @click.stop="toggleDropdown('contato')">
                <i class="fas fa-chevron-down sidebar-dropdown-arrow"
                  :class="{ 'rotated': openDropdown === 'contato' }"></i>
              </div>
            </div>
            <div class="sidebar-dropdown-menu" :class="{ 'show': openDropdown === 'contato' }">
              <router-link to="/Contato" class="sidebar-dropdown-item" @click="closeSidebar">
                <i class="fas fa-comments"></i>
                <span class="fale-conosco-span">{{ tHeader('header.dropdown.contact.talkToUs') }}</span>
              </router-link>
              <router-link to="/TrabalheConosco" class="sidebar-dropdown-item" @click="closeSidebar">
                <i class="fas fa-briefcase"></i>
                <span class="trabalhe-conosco-span">{{ tHeader('header.dropdown.contact.workWithUs') }}</span>
              </router-link>
              <router-link to="/SejaParceiro" class="sidebar-dropdown-item" @click="closeSidebar">
                <i class="fas fa-handshake"></i>
                <span class="seja-parceiro-span">{{ tHeader('header.dropdown.contact.bePartner') }}</span>
              </router-link>
              <router-link to="/FazerReclamacao" class="sidebar-dropdown-item" @click="closeSidebar">
                <i class="fas fa-edit"></i>
                <span>{{ tHeader('header.dropdown.products.makeComplaint') }}</span>
              </router-link>
              <router-link to="/ConsultaStatus" class="sidebar-dropdown-item" @click="closeSidebar">
                <i class="fas fa-search"></i>
                <span>{{ tHeader('header.dropdown.products.checkStatus') }}</span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>

      <!-- Redes sociais e idiomas no menu mobile -->
      <div class="sidebar-footer">
        <div class="social-media-mobile">
          <h3>{{ tHeader('header.social.follow') }}</h3>
          <div class="social-icons">
            <a href="https://www.instagram.com/unihospitalar" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/uni-hospitalar" target="_blank" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div class="language-selector-mobile">
          <h3>{{ tHeader('header.social.language') }}</h3>
          <div class="icon-selector">
            <span @click="changeLanguage('pt')" :class="['fi fi-br', { 'active': selectedLanguage === 'pt' }]"
              title="Português"></span>
            <span @click="changeLanguage('en')" :class="['fi fi-us', { 'active': selectedLanguage === 'en' }]"
              title="English"></span>
            <span @click="changeLanguage('es')" :class="['fi fi-es', { 'active': selectedLanguage === 'es' }]"
              title="Español"></span>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/" custom v-slot="{ navigate }">
      <div class="logo-container" :class="{ 'scrolled': isScrolled }" @click="navigate" role="link">
        <img :src="isScrolled ? '/assets/logo-uni2.png' : '/assets/logo-uni10.png'" alt="Logo da Uni Hospitalar" class="logo">
      </div>
    </router-link>

    <!-- Redes sociais e idiomas no centro para mobile -->
    <div class="mobile-center-controls">
      <div class="social-icons">
        <a href="https://www.instagram.com/unihospitalar" target="_blank" class="social-icon">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/uni-hospitalar" target="_blank" class="social-icon">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div class="icon-selector">
        <span @click="changeLanguage('pt')" :class="['fi fi-br', { 'active': selectedLanguage === 'pt' }]"
          title="Português"></span>
        <span @click="changeLanguage('en')" :class="['fi fi-us', { 'active': selectedLanguage === 'en' }]"
          title="English"></span>
        <span @click="changeLanguage('es')" :class="['fi fi-es', { 'active': selectedLanguage === 'es' }]"
          title="Español"></span>
      </div>
    </div>

    <div class="header-right">
      <!-- Redes sociais no desktop -->
      <div class="social-media-header">
        <div class="social-icons">
          <a href="https://www.instagram.com/unihospitalar" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/uni-hospitalar" target="_blank" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div class="language-selector">
        <div class="icon-selector">
          <span @click="changeLanguage('pt')" :class="['fi fi-br', { 'active': selectedLanguage === 'pt' }]"
            title="Português"></span>
          <span @click="changeLanguage('en')" :class="['fi fi-us', { 'active': selectedLanguage === 'en' }]"
            title="English"></span>
          <span @click="changeLanguage('es')" :class="['fi fi-es', { 'active': selectedLanguage === 'es' }]"
            title="Español"></span>
        </div>
      </div>
    </div>

    <nav>
      <ul>
        <li><router-link to="/" exact-active-class="active">{{ tHeader('header.navigation.home') }}</router-link></li>
        <li><router-link to="/Sobre" exact-active-class="active">{{ tHeader('header.navigation.about') }}</router-link>
        </li>
        <li><router-link to="/Diferenciais" exact-active-class="active">{{ tHeader('header.navigation.differentials')
        }}</router-link></li>
        <li><router-link to="/Servicos" exact-active-class="active">{{ tHeader('header.navigation.services')
        }}</router-link></li>
        <!-- <li><router-link to="/Produtos" exact-active-class="active">{{ tHeader('header.navigation.products') }}
          </router-link></li> -->

        <!-- Compliance Dropdown -->
        <li class="dropdown">
          <router-link to="/Compliance" exact-active-class="active" class="dropdown-trigger">
            {{ tHeader('header.navigation.compliance') }} <i class="fas fa-chevron-down dropdown-arrow"></i>
          </router-link>
          <div class="dropdown-content">
            <div class="dropdown-items">
              <router-link to="/CanalConfidencial" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">{{ tHeader('header.dropdown.compliance.confidentialChannel') }}</span>
                </div>
              </router-link>
              <router-link to="/FazerRelato" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-edit"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">{{ tHeader('header.dropdown.compliance.makeReport') }}</span>
                </div>
              </router-link>
              <router-link to="/ConsultaStatus" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-search"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">{{ tHeader('header.dropdown.compliance.checkStatus') }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>

        <!-- LGPD Dropdown -->
        <li class="dropdown">
          <router-link to="/LGPD" exact-active-class="active" class="dropdown-trigger">
            {{ tHeader('header.navigation.lgpd') }} <i class="fas fa-chevron-down dropdown-arrow"></i>
          </router-link>
          <div class="dropdown-content">
            <div class="dropdown-items">
              <router-link to="/PoliticaPrivacidade" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-file-alt"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">{{ tHeader('header.dropdown.lgpd.privacyPolicy') }}</span>
                </div>
              </router-link>
              <!-- <router-link to="/AvisoPrivacidade" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-info-circle"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">{{ tHeader('header.dropdown.lgpd.privacyNotice') }}</span>
                </div>
              </router-link> -->
            </div>
          </div>
        </li>

        <!-- Contato Dropdown -->
        <li class="dropdown">
          <a href="#" class="dropdown-trigger" @click.prevent>
            {{ tHeader('header.navigation.contact') }} <i class="fas fa-chevron-down dropdown-arrow"></i>
          </a>
          <div class="dropdown-content">
            <div class="dropdown-items">
              <router-link to="/Contato" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-comments"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">{{ tHeader('header.dropdown.contact.talkToUs') }}</span>
                </div>
              </router-link>
              <router-link to="/TrabalheConosco" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-briefcase"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">{{ tHeader('header.dropdown.contact.workWithUs') }}</span>
                </div>
              </router-link>
              <router-link to="/SejaParceiro" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-handshake"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">{{ tHeader('header.dropdown.contact.bePartner') }}</span>
                </div>
              </router-link>
              <router-link to="/FazerReclamacao" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-edit"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">{{ tHeader('header.dropdown.products.makeComplaint') }}</span>
                </div>
              </router-link>
              <router-link to="/ConsultaStatus" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-search"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">{{ tHeader('header.dropdown.products.checkStatus') }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useHomeTranslation } from '@/composables/useHomeTranslation.js';
import { useAboutTranslation } from '@/composables/useAboutTranslation.js';
import { useDifferentialsTranslation } from '@/composables/useDifferentialsTranslation.js';
import { useServicesTranslation } from '@/composables/useServicesTranslation.js';
import { useProductsTranslation } from '@/composables/useProductsTranslation.js';
import { useComplianceTranslation } from '@/composables/useComplianceTranslation.js';
import { useLGPDTranslation } from '@/composables/useLGPDTranslation.js';
import { usePrivacyPolicyTranslation } from '@/composables/usePrivacyPolicyTranslation.js';
import { useTermsTranslation } from '@/composables/useTermsTranslation.js';
import { useContactTranslation } from '@/composables/useContactTranslation.js';
import { useOurPartnerTranslation } from '@/composables/useOurPartnerTranslation.js';
import { usePartnersTranslation } from '@/composables/usePartnersTranslation.js';
import { useEthicalConductTranslation } from '@/composables/useEthicalConductTranslation.js';
import { useSocialResponsibilityTranslation } from '@/composables/useSocialResponsibilityTranslation.js';
import { useHumanRightsTranslation } from '@/composables/useHumanRightsTranslation.js';
import { useDataSecurityTranslation } from '@/composables/useDataSecurityTranslation.js';
import { useAntiBriberyTranslation } from '@/composables/useAntiBriberyTranslation.js';
import { useSectorStandardsTranslation } from '@/composables/useSectorStandardsTranslation.js';
import { useHeaderFooterTranslation } from '@/composables/useHeaderFooterTranslation.js';
import { useConfidentialChannelTranslation } from '@/composables/useConfidentialChannelTranslation.js';
import { useReportTranslation } from '@/composables/useReportTranslation';
import { useComplaintTranslation } from '@/composables/useComplaintTranslation';
import { usePrivacyNoticeTranslation } from '@/composables/usePrivacyNoticeTranslation';
import { useCheckStatusTranslation } from '@/composables/useCheckStatusTranslation';
import { useWorkWithUsTranslation } from '@/composables/useWorkWithUsTranslation.js';

export default {
  name: 'HomeHeader',
  setup() {
    const { t, currentLanguage, setLanguage } = useServicesTranslation();
    const { setLanguage: setHomeLanguage } = useHomeTranslation();
    const { setLanguage: setAboutLanguage } = useAboutTranslation();
    const { setLanguage: setDifferentialsLanguage } = useDifferentialsTranslation();
    const { setLanguage: setProductsLanguage } = useProductsTranslation();
    const { setLanguage: setComplianceLanguage } = useComplianceTranslation();
    const { setLanguage: setLGPDLanguage } = useLGPDTranslation();
    const { setLanguage: setPrivacyPolicyLanguage } = usePrivacyPolicyTranslation();
    const { setLanguage: setTermsLanguage } = useTermsTranslation();
    const { setLanguage: setContactLanguage } = useContactTranslation();
    const { setLanguage: setOurPartnerLanguage } = useOurPartnerTranslation();
    const { setLanguage: setPartnersLanguage } = usePartnersTranslation();
    const { setLanguage: setEthicalConductLanguage } = useEthicalConductTranslation();
    const { setLanguage: setSocialResponsibilityLanguage } = useSocialResponsibilityTranslation();
    const { setLanguage: setHumanRightsLanguage } = useHumanRightsTranslation();
    const { setLanguage: setDataSecurityLanguage } = useDataSecurityTranslation();
    const { setLanguage: setAntiBriberyLanguage } = useAntiBriberyTranslation();
    const { setLanguage: setSectorStandardsLanguage } = useSectorStandardsTranslation();
    const { setLanguage: setConfidentialChannelLanguage } = useConfidentialChannelTranslation();
    const { setLanguage: setReportLanguage } = useReportTranslation();
    const { setLanguage: setComplaintLanguage } = useComplaintTranslation();
    const { setLanguage: setPrivacyNoticeLanguage } = usePrivacyNoticeTranslation();
    const { setLanguage: setCheckStatusLanguage } = useCheckStatusTranslation();
    const { setLanguage: setWorkWithUsLanguage } = useWorkWithUsTranslation();
    const { t: tHeader, setLanguage: setHeaderFooterLanguage } = useHeaderFooterTranslation();

    return {
      t,
      tHeader,
      currentLanguage,
      setHomeLanguage,
      setAboutLanguage,
      setDifferentialsLanguage,
      setLanguage,
      setProductsLanguage,
      setComplianceLanguage,
      setLGPDLanguage,
      setPrivacyPolicyLanguage,
      setTermsLanguage,
      setContactLanguage,
      setOurPartnerLanguage,
      setPartnersLanguage,
      setEthicalConductLanguage,
      setSocialResponsibilityLanguage,
      setHumanRightsLanguage,
      setDataSecurityLanguage,
      setAntiBriberyLanguage,
      setSectorStandardsLanguage,
      setConfidentialChannelLanguage,
      setReportLanguage,
      setComplaintLanguage,
      setPrivacyNoticeLanguage,
      setCheckStatusLanguage,
      setWorkWithUsLanguage,
      setHeaderFooterLanguage,
    };
  },
  data() {
    return {
      sidebarOpen: false,
      isScrolled: false,
      openDropdown: null
    };
  },
  computed: {
    selectedLanguage() {
      return this.currentLanguage;
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
      document.body.style.overflow = this.sidebarOpen ? 'hidden' : '';
    },
    closeSidebar() {
      this.sidebarOpen = false;
      document.body.style.overflow = '';
    },
    toggleDropdown(dropdown) {
      this.openDropdown = this.openDropdown === dropdown ? null : dropdown;
    },
    changeLanguage(lang) {
      this.setHomeLanguage(lang);
      this.setAboutLanguage(lang);
      this.setDifferentialsLanguage(lang);
      this.setLanguage(lang);
      this.setProductsLanguage(lang);
      this.setComplianceLanguage(lang);
      this.setLGPDLanguage(lang);
      this.setPrivacyPolicyLanguage(lang);
      this.setTermsLanguage(lang);
      this.setContactLanguage(lang);
      this.setOurPartnerLanguage(lang);
      this.setPartnersLanguage(lang);
      this.setEthicalConductLanguage(lang);
      this.setSocialResponsibilityLanguage(lang);
      this.setHumanRightsLanguage(lang);
      this.setDataSecurityLanguage(lang);
      this.setAntiBriberyLanguage(lang);
      this.setSectorStandardsLanguage(lang);
      this.setConfidentialChannelLanguage(lang);
      this.setReportLanguage(lang);
      this.setComplaintLanguage(lang);
      this.setPrivacyNoticeLanguage(lang);
      this.setCheckStatusLanguage(lang);
      this.setWorkWithUsLanguage(lang);
      this.setHeaderFooterLanguage(lang);
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.scrollToTop();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.body.style.overflow = '';
  }
};
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
  padding: 20px 0;
  box-sizing: border-box;
  font-size: 1.2em;
  font-weight: bold;
  font-family: 'Arial Rounded MT Bold,', sans-serif;
  font-smooth: always;
  text-rendering: optimizeLegibility;
  transition: all 0.3s ease-in-out;
}

header.scrolled {
  background: linear-gradient(135deg, rgba(173, 64, 62, 0.95), rgba(120, 20, 18, 0.95));
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 15px 0;
}

header * {
  background-color: transparent;
}

.menu-toggle.scrolled {
  background-color: transparent;
}

.header-right {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Controles centralizados em mobile */
.mobile-center-controls {
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.mobile-center-controls .social-icons {
  display: flex;
  gap: 10px;
}

.mobile-center-controls .icon-selector {
  display: flex;
  gap: 10px;
  margin-top: 5px;
}

.logo-container {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  width: 20%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
  background: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.logo-container.scrolled {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
}

.logo {
  max-height: 75px;
  width: auto;
  display: block;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

/* Estilos para redes sociais no header */
.social-media-header {
  display: flex;
  align-items: center;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.social-icon:hover {
  background-color: white;
  color: #AE2C2A;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.social-icon:hover .fa-instagram {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.social-icon:hover .fa-linkedin-in {
  background: #0077B5;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.social-media-mobile {
  display: none;
  margin-top: 30px;
  text-align: center;
}

.social-media-mobile h3 {
  font-size: 1rem;
  margin-bottom: 15px;
  color: white;
}

.social-media-mobile .social-icons {
  justify-content: center;
}

.language-selector {
  display: flex;
  align-items: center;
}

.icon-selector {
  display: flex;
  gap: 10px;
}

.icon-selector span {
  font-size: 0.9em;
  cursor: pointer;
  transition: transform 0.3s;
  opacity: 0.7;
}

.icon-selector span:hover {
  transform: scale(1.1);
  opacity: 1;
}

.icon-selector span.active {
  opacity: 1;
  transform: scale(1.1);
}

.icon-selector span.fi-fi-br::before {
  content: '\f1e9';
}

.icon-selector span.fi-fi-us::before {
  content: '\f1e8';
}

.icon-selector span.fi-fi-es::before {
  content: '\f1ea';
}

nav {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  width: auto;
  margin: 0;
}

nav ul li {
  margin: 0 16px;
  position: relative;
}

nav ul li a {
  text-decoration: none;
  color: #FFFFFF;
  font-size: 1em;
  white-space: nowrap;
  letter-spacing: 0.5px;
  padding-bottom: 5px;
  display: inline-block;
  transition: color 0.3s ease-in-out;
}

nav ul li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  left: 0;
  bottom: 0;
  background-color: #FFFFFF;
  transition: width 0.3s ease-in-out;
}

nav ul li a:hover::after {
  width: 100%;
}

nav ul li.active a::after {
  width: 100%;
}

nav ul li a.router-link-active::after {
  width: 100%;
}

nav ul li a:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* Estilos para dropdown no desktop */
nav ul li.dropdown {
  position: relative;
}

nav ul li.dropdown::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 15px;
  background: transparent;
  z-index: 999;
}

nav ul li.dropdown:hover .dropdown-content,
nav ul li.dropdown::after:hover+.dropdown-content {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 5px;
}

.dropdown-arrow {
  font-size: 0.8em;
  transition: transform 0.3s ease;
}

nav ul li.dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-content {
  display: none;
  position: absolute;
  top: calc(25% + 25px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 320px;
  min-height: 100px;
  background: linear-gradient(135deg, rgba(173, 64, 62, 0.95), rgba(120, 20, 18, 0.95));
  border-radius: 12px;
  color: white;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  padding: 0;
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(174, 44, 42, 0.1);
  overflow: hidden;
}

.dropdown-content::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #ffffff;
  filter: drop-shadow(0 -2px 4px rgba(0, 0, 0, 0.1));
}

nav ul li.dropdown:hover .dropdown-content {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-header-desktop h4 {
  margin: 0 0 5px 0;
  font-size: 1.1em;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.dropdown-header-desktop p {
  margin: 0;
  font-size: 0.85em;
  opacity: 0.9;
  font-weight: 400;
}

.dropdown-items {
  padding: 10px 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 15px 25px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.dropdown-item:last-child {
  border-bottom: none;
  border-radius: 0 0 12px 12px;
}

.dropdown-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, rgba(174, 44, 42, 0.1), rgba(174, 44, 42, 0.05));
  transition: width 0.3s ease;
  z-index: 0;
}

.dropdown-item:hover::before {
  width: 100%;
}

.dropdown-item:hover {
  color: #AE2C2A;
  transform: translateX(5px);
}

.item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.1), rgba(174, 44, 42, 0.05));
  border-radius: 10px;
  margin-right: 15px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.dropdown-item:hover .item-icon {
  background: linear-gradient(135deg, #D85654, #B84442);
  color: white;
  transform: scale(1.1);
}

.item-icon i {
  font-size: 1.2em;
  color: white;
  transition: color 0.3s ease;
}

.dropdown-item:hover .item-icon i {
  color: white;
}

.item-content {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.item-title {
  font-weight: 600;
  font-size: 0.95em;
  margin-bottom: 3px;
  transition: color 0.3s ease;
  color: #FFFFFF;
}

/* Estilos para o botão de menu */
.menu-toggle {
  display: none;
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1001;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(174, 44, 42, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  background-color: rgba(174, 44, 42, 1);
  transform: scale(1.05);
}

.menu-toggle.active {
  background-color: #ffffff;
}

/* Ícone do menu animado */
.menu-icon {
  position: relative;
  display: inline-block;
  width: 22px;
  height: 2px;
  background-color: #ffffff;
  transition: all 0.3s ease;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 22px;
  height: 2px;
  background-color: #ffffff;
  transition: all 0.3s ease;
  left: -2px;
}

.menu-icon::before {
  top: -7px;
}

.menu-icon::after {
  top: 7px;
}

/* Animação do ícone quando o menu está aberto */
.menu-toggle.active .menu-icon {
  background-color: transparent;
}

.menu-toggle.active .menu-icon::before {
  transform: rotate(45deg);
  top: 0;
  background-color: #AE2C2A;
}

.menu-toggle.active .menu-icon::after {
  transform: rotate(-45deg);
  top: 0;
  background-color: #AE2C2A;
}

/* Estilos para o menu sidebar */
.menu-sidebar {
  display: none;
  position: fixed;
  top: 0;
  right: -320px;
  width: 300px;
  height: 100%;
  background: #ffffff;
  color: #333333;
  overflow: auto;
  z-index: 1000;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}

.menu-sidebar.active {
  right: 0;
}

/* Cabeçalho do sidebar */
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, rgba(173, 64, 62, 0.95), rgba(120, 20, 18, 0.95));
}

.sidebar-logo {
  height: 55px;
  width: auto;
}

.menu-close {
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 1.5em;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.menu-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

/* Conteúdo do sidebar */
.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px 0;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.sidebar-menu li:last-child {
  border-bottom: none;
}

.sidebar-menu li a {
  text-decoration: none;
  color: #333333;
  font-weight: 600;
  font-size: 1em;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  transition: all 0.3s ease;
}

.sidebar-menu li a i {
  margin-right: 15px;
  width: 20px;
  text-align: center;
  color: #AE2C2A;
}

.sidebar-menu li a:hover,
.sidebar-menu li a.active {
  background-color: rgba(174, 44, 42, 0.1);
  color: #AE2C2A;
  padding-left: 25px;
}

.sidebar-dropdown {
  margin-bottom: 5px;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar-dropdown:hover {
  box-shadow: 0 4px 16px rgba(174, 44, 42, 0.1);
  transform: translateY(-1px);
}

.sidebar-dropdown-toggle {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0;
  cursor: default;
  background: transparent;
  border: none;
  width: 100%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 50px;
}

.sidebar-dropdown-toggle::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(174, 44, 42, 0.1), transparent);
  transition: left 0.5s ease;
}

.sidebar-dropdown-toggle:hover::before {
  left: 100%;
}

.sidebar-dropdown-toggle:hover {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.05), rgba(174, 44, 42, 0.02));
  color: #AE2C2A;
}

.sidebar-dropdown-main {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-size: 15px;
  color: #2c3e50;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 16px 20px;
  flex: 1;
  border-radius: 12px 0 0 12px;
  min-height: 50px;
  box-sizing: border-box;
}

.sidebar-dropdown-main:hover {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.05), rgba(174, 44, 42, 0.02));
  color: #AE2C2A;
  transform: translateX(3px);
}

.sidebar-dropdown-main i {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #AE2C2A;
  font-size: 16px;
  transition: all 0.3s ease;
}

.sidebar-dropdown-main:hover i {
  transform: scale(1.1);
  color: #ff5555;
}

.sidebar-dropdown-arrow {
  font-size: 14px !important;
  color: #AE2C2A !important;
  transition: all 0.3s ease !important;
  display: inline-block !important;
  line-height: 1 !important;
}

.sidebar-dropdown-arrow.rotated {
  transform: rotate(180deg) !important;
}

.sidebar-dropdown-main.router-link-active {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.15), rgba(174, 44, 42, 0.08));
  color: #AE2C2A;
  font-weight: 700;
}

.sidebar-dropdown-main.router-link-active i {
  color: #AE2C2A;
}

.sidebar-dropdown-toggle::before {
  display: none;
}

.sidebar-dropdown-toggle:hover {
  background: transparent;
}

.sidebar-dropdown-toggle:hover .sidebar-dropdown-main {
  color: #AE2C2A;
  transform: translateX(3px);
}

.sidebar-dropdown-toggle:hover .sidebar-dropdown-main i {
  transform: scale(1.1);
  color: #ff5555;
}

.sidebar-dropdown-arrow {
  font-size: 14px;
  color: #AE2C2A;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  font-weight: 600;
  display: block;
  line-height: 1;
}

.sidebar-dropdown-arrow.rotated {
  transform: rotate(180deg);
  color: #ff5555;
}

.sidebar-dropdown-menu {
  max-height: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-top: 1px solid rgba(174, 44, 42, 0.1);
}

.sidebar-dropdown-menu.show {
  max-height: 300px;
  padding: 8px 0;
}

.sidebar-dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px 12px 40px;
  color: #555;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-left: 3px solid transparent;
}

.sidebar-dropdown-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  transition: width 0.3s ease;
}

.sidebar-dropdown-item:hover::before {
  width: 3px;
}

.sidebar-dropdown-item i {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #AE2C2A;
  font-size: 13px;
  transition: all 0.3s ease;
}

.sidebar-dropdown-item:hover {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.08), rgba(174, 44, 42, 0.03));
  color: #AE2C2A;
  padding-left: 45px;
  transform: translateX(2px);
}

.sidebar-dropdown-item:hover i {
  color: #ff5555;
  transform: scale(1.1);
}

.sidebar-dropdown-item.router-link-active {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.15), rgba(174, 44, 42, 0.08));
  color: #AE2C2A;
  font-weight: 600;
  border-left: 3px solid #AE2C2A;
}

.sidebar-dropdown-item.router-link-active i {
  color: #AE2C2A;
}

.politica-span {
  font-size: 1.1rem;
}

.sidebar-dropdown-item span {
  transition: all 0.3s ease;
}

.sidebar-dropdown-item:hover span {
  letter-spacing: 0.5px;
}

.sidebar-dropdown-toggle:active {
  transform: scale(0.98);
}

.sidebar-dropdown-arrow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  cursor: pointer;
  background: rgba(174, 44, 42, 0.1);
  border-left: 1px solid rgba(174, 44, 42, 0.2);
  transition: all 0.3s ease;
}

.sidebar-dropdown-arrow-container:hover {
  background: rgba(174, 44, 42, 0.2);
}

.sidebar-dropdown-arrow {
  font-size: 16px;
  color: #AE2C2A;
  transition: all 0.3s ease;
}

.sidebar-dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.sidebar-dropdown-arrow-container:hover .sidebar-dropdown-arrow.rotated {
  transform: rotate(180deg) scale(1.2);
}

.sidebar-dropdown-arrow-container:active::before {
  animation: pulse-arrow 0.3s ease;
}

@keyframes pulse-arrow {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    transform: translate(-50%, -50%) scale(1.3);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

.sidebar-dropdown-arrow-container:active {
  transform: scale(0.95);
}

/* Rodapé do sidebar */
.sidebar-footer {
  padding: 20px;
  background-color: #f5f5f5;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.social-media-mobile h3,
.language-selector-mobile h3 {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #333;
  font-weight: 600;
}

.social-media-mobile .social-icons {
  justify-content: center;
}

.social-media-mobile .social-icon {
  background-color: rgba(174, 44, 42, 0.1);
  color: #AE2C2A;
  border: 1px solid rgba(174, 44, 42, 0.2);
}

.social-media-mobile .social-icon:hover {
  background-color: #AE2C2A;
  color: white;
}

.language-selector-mobile .icon-selector {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.language-selector-mobile .icon-selector span {
  font-size: 1.2em;
  opacity: 0.5;
  transition: all 0.3s ease;
  cursor: pointer;
}

.language-selector-mobile .icon-selector span.active,
.language-selector-mobile .icon-selector span:hover {
  opacity: 1;
  transform: scale(1.2);
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Ajustes para o header em telas menores */
@media (max-width: 1600px) {
  nav ul li a {
    font-size: 0.9em;
  }

  .social-icon {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  nav ul li a {
    font-size: 0.9em;
  }

  nav ul li {
    display: flex;
    align-items: center;
  }

  nav ul li a,
  nav ul li .dropdown-trigger {
    display: flex;
    align-items: center;
    line-height: 1;
    padding: 8px 0;
  }

  .dropdown-trigger {
    gap: 5px;
  }

  .dropdown-arrow {
    font-size: 0.8em;
    margin-top: 0;
    vertical-align: middle;
  }
}

@media (max-width: 1500px) {
  .logo-container {
    width: 15%;
  }

  .logo {
    max-height: 60px;
  }
}

@media (max-width: 1390px) {
  .header-right {
    right: 30px;
  }

  .icon-selector span {
    font-size: 0.9em;
  }

  nav ul li {
    margin: 0 12px;
  }

  nav ul li a {
    font-size: 0.8em;
  }

  nav ul li a,
  nav ul li .dropdown-trigger {
    padding: 6px 0;
  }

  .social-icon {
    width: 30px;
    height: 30px;
    font-size: 0.85rem;
  }
}

@media (max-width: 1215px) {
  nav ul li {
    margin: 0 8px;
  }

  nav ul li a {
    font-size: 0.7em;
  }
}

@media (max-width: 1040px) {
  nav ul li a {
    font-size: 0.6em;
  }
}

/* Responsividade geral */

@media (max-width: 1100px) {
  .logo-container {
    width: 15%;
  }

  .logo {
    max-height: 55px;
  }

  nav ul li a,
  nav ul li .dropdown-trigger {
    padding: 4px 0;
  }

  .header-right {
    right: 20px;
  }

  .icon-selector {
    gap: 8px;
  }

  .icon-selector span {
    font-size: 0.8em;
  }

  .social-icon {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }
}

@media (max-width: 992px) {
  header {
    padding: 18px 0;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-container {
    width: 200px;
    top: auto;
    transform: none;
    background: transparent;
    display: flex;
    align-items: center;
  }

  .logo {
    max-height: 80px;
    max-width: 100%;
  }

  .header-right {
    display: none;
  }

  .mobile-center-controls {
    display: flex;
  }

  .mobile-center-controls .social-icon {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  .mobile-center-controls .icon-selector span {
    font-size: 0.8em;
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-toggle.active {
    top: 25px;
  }

  nav ul {
    display: none;
  }

  .menu-sidebar {
    display: flex;
  }
}

@media (max-width: 768px) {
  header {
    padding: 15px 0;
    min-height: 75px;
  }

  .logo-container {
    width: 180px;
  }

  .logo {
    max-height: 70px;
  }

  .mobile-center-controls .social-icon {
    width: 30px;
    height: 30px;
    font-size: 0.85rem;
  }

  .mobile-center-controls .icon-selector span {
    font-size: 0.7em;
  }
}

@media (max-width: 576px) {
  header {
    padding: 12px 0;
    min-height: 65px;
  }

  .logo-container {
    width: 130px;
  }

  .logo {
    max-height: 50px;
  }

  .mobile-center-controls .social-icon {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }

  .mobile-center-controls .icon-selector {
    gap: 5px;
  }

  .mobile-center-controls .icon-selector span {
    font-size: 0.6em;
  }

  .menu-sidebar {
    width: 280px;
  }

  .sidebar-menu li a {
    font-size: 0.95em;
    padding: 12px 20px;
  }

  .politica-span {
    font-size: 0.85em;
  }

  .menu-toggle {
    top: 10px;
  }
}

/* Ajustes para dispositivos móveis */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .service-content h3 {
    font-size: 1.5rem;
  }

  .step-content h4 {
    font-size: 1.2rem;
  }

  .benefit-card {
    padding: 20px;
  }
}

@media (max-width: 468px) {
  .process-step {
    flex-direction: column;
    gap: 15px;
  }

  .process-steps::before {
    display: none;
  }
}

@media (max-width: 440px) {
  .logo-container {
    width: 90px;
  }

  .logo {
    max-height: 35px;
  }

  .mobile-center-controls {
    transform: translate(-50%, -50%) scale(0.9);
  }

  .menu-sidebar {
    width: 260px;
  }

  .seja-parceiro-span {
    font-size: 1rem;
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

.service-icon i,
.benefit-icon i {
  animation: float 3s ease-in-out infinite;
}

.service-card:hover .service-icon {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.process-step:hover .step-number {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
  transition: all 0.3s ease;
}

/* Animação para o botão CTA */
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

.cta-button:hover {
  animation: pulse 1.5s infinite;
}
</style>