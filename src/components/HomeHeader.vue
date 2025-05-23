<template>
  <header :class="{'scrolled': isScrolled}">
    <!-- Botão de menu com ícone melhorado -->
    <button @click="toggleSidebar" :class="['menu-toggle', { 'scrolled': isScrolled, 'active': sidebarOpen }]">
      <span class="menu-icon"></span>
    </button>

    <!-- Menu sidebar melhorado -->
    <div :class="['menu-sidebar', { 'active': sidebarOpen }]">
      <div class="sidebar-header">
        <img src="@/assets/logo-uni.png" alt="Logo da Uni Hospitalar" class="sidebar-logo">
        <button class="menu-close" @click="toggleSidebar">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="sidebar-content">
        <ul class="sidebar-menu">
          <li><router-link to="/" exact-active-class="active" @click="closeSidebar">
            <i class="fas fa-home"></i> Início
          </router-link></li>
          <li><router-link to="/Sobre" exact-active-class="active" @click="closeSidebar">
            <i class="fas fa-building"></i> Sobre
          </router-link></li>
          <li><router-link to="/Diferenciais" exact-active-class="active" @click="closeSidebar">
            <i class="fas fa-award"></i> Diferenciais
          </router-link></li>
          <li><router-link to="/Servicos" exact-active-class="active" @click="closeSidebar">
            <i class="fas fa-cogs"></i> Serviços
          </router-link></li>
          <li><router-link to="/Produtos" exact-active-class="active" @click="closeSidebar">
            <i class="fas fa-pills"></i> Produtos
          </router-link></li>
          <li><router-link to="/Compliance" exact-active-class="active" @click="closeSidebar">
            <i class="fas fa-shield-alt"></i> Compliance
          </router-link></li>
          <li class="dropdown">
            <div class="dropdown-header" @click="toggleDropdown('lgpd')">
              <router-link to="/LGPD" exact-active-class="active" @click="closeSidebar">
                <i class="fas fa-lock"></i> LGPD
              </router-link>
              <i class="fas fa-chevron-down dropdown-icon" :class="{'rotated': openDropdown === 'lgpd'}"></i>
            </div>
            <ul class="dropdown-content" :class="{'open': openDropdown === 'lgpd'}">
              <li><router-link to="/PoliticaPrivacidade" exact-active-class="active" @click="closeSidebar">
                <i class="fas fa-file-alt"></i> Política de Privacidade
              </router-link></li>
              <li><router-link to="/TermosLegais" exact-active-class="active" @click="closeSidebar">
                <i class="fas fa-gavel"></i> Termos Legais de Uso do site
              </router-link></li>
            </ul>
          </li>
          <li class="dropdown">
            <div class="dropdown-header" @click="toggleDropdown('contato')">
              <router-link to="/Contato" exact-active-class="active" @click="closeSidebar">
                <i class="fas fa-envelope"></i> Contato
              </router-link>
              <i class="fas fa-chevron-down dropdown-icon" :class="{'rotated': openDropdown === 'contato'}"></i>
            </div>
            <ul class="dropdown-content" :class="{'open': openDropdown === 'contato'}">
              <li><router-link to="/SejaParceiro" exact-active-class="active" @click="closeSidebar">
                <i class="fas fa-handshake"></i> Seja Nosso Parceiro
              </router-link></li>
              <li><router-link to="/TrabalheConosco" exact-active-class="active" @click="closeSidebar">
                <i class="fas fa-briefcase"></i> Trabalhe Conosco
              </router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      
      <!-- Redes sociais e idiomas no menu mobile -->
      <div class="sidebar-footer">
        <div class="social-media-mobile">
          <h3>Siga-nos</h3>
          <div class="social-icons">
            <a href="https://www.instagram.com/unihospitalar" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/uni-hospitalar/about" target="_blank" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <div class="language-selector-mobile">
          <h3>Idioma</h3>
          <div class="icon-selector">
            <span @click="changeLanguage('pt')" :class="['fi fi-br', {'active': selectedLanguage === 'pt'}]" title="Português"></span>
            <span @click="changeLanguage('en')" :class="['fi fi-us', {'active': selectedLanguage === 'en'}]" title="English"></span>
            <span @click="changeLanguage('es')" :class="['fi fi-es', {'active': selectedLanguage === 'es'}]" title="Español"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Resto do header permanece o mesmo -->
    <router-link to="/" custom v-slot="{ navigate }">
      <div class="logo-container" :class="{'scrolled': isScrolled}" @click="navigate" role="link">
        <img src="@/assets/logo-uni.png" alt="Logo da Uni Hospitalar" class="logo">
      </div>
    </router-link>

    <!-- Redes sociais e idiomas no centro para mobile -->
    <div class="mobile-center-controls">
      <div class="social-icons">
        <a href="https://www.instagram.com/unihospitalar" target="_blank" class="social-icon">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/unihospitalar" target="_blank" class="social-icon">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div class="icon-selector">
        <span @click="changeLanguage('pt')" :class="['fi fi-br', {'active': selectedLanguage === 'pt'}]" title="Português"></span>
        <span @click="changeLanguage('en')" :class="['fi fi-us', {'active': selectedLanguage === 'en'}]" title="English"></span>
        <span @click="changeLanguage('es')" :class="['fi fi-es', {'active': selectedLanguage === 'es'}]" title="Español"></span>
      </div>
    </div>

    <div class="header-right">
      <!-- Redes sociais no desktop -->
      <div class="social-media-header">
        <div class="social-icons">
          <a href="https://www.instagram.com/unihospitalar" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/unihospitalar" target="_blank" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div class="language-selector">
        <div class="icon-selector">
          <span @click="changeLanguage('pt')" :class="['fi fi-br', {'active': selectedLanguage === 'pt'}]" title="Português"></span>
          <span @click="changeLanguage('en')" :class="['fi fi-us', {'active': selectedLanguage === 'en'}]" title="English"></span>
          <span @click="changeLanguage('es')" :class="['fi fi-es', {'active': selectedLanguage === 'es'}]" title="Español"></span>
        </div>
      </div>
    </div>

    <nav>
      <ul>
        <li><router-link to="/" exact-active-class="active">Início</router-link></li>
        <li><router-link to="/Sobre" exact-active-class="active">Sobre</router-link></li>
        <li><router-link to="/Diferenciais" exact-active-class="active">Diferenciais</router-link></li>
        <li><router-link to="/Servicos" exact-active-class="active">Serviços</router-link></li>
        <li><router-link to="/Produtos" exact-active-class="active">Produtos</router-link></li>
        <li><router-link to="/Compliance" exact-active-class="active">Compliance</router-link></li>
        <li class="dropdown">
          <router-link to="/LGPD" exact-active-class="active" class="dropdown-trigger">
            LGPD <i class="fas fa-chevron-down dropdown-arrow"></i>
          </router-link>
          <div class="dropdown-content">
            <div class="dropdown-items">
              <router-link to="/PoliticaPrivacidade" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-file-alt"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">Política de Privacidade</span>
                </div>
              </router-link>
              <router-link to="/TermosLegais" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-gavel"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">Termos Legais</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>
        <li class="dropdown">
          <router-link to="/Contato" exact-active-class="active" class="dropdown-trigger">
            Contato <i class="fas fa-chevron-down dropdown-arrow"></i>
          </router-link>
          <div class="dropdown-content">
            <div class="dropdown-items">
              <router-link to="/SejaParceiro" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-handshake"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">Seja Nosso Parceiro</span>
                </div>
              </router-link>
              <router-link to="/TrabalheConosco" exact-active-class="active" class="dropdown-item">
                <div class="item-icon">
                  <i class="fas fa-briefcase"></i>
                </div>
                <div class="item-content">
                  <span class="item-title">Trabalhe Conosco</span>
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
export default {
  name: 'HomeHeader',
  data() {
    return {
      sidebarOpen: false,
      selectedLanguage: 'pt',
      isScrolled: false,
      openDropdown: null
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
      // Bloquear o scroll do body quando o sidebar estiver aberto
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
      this.selectedLanguage = lang;
      this.$i18n.locale = lang;
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
    // Garantir que o scroll do body seja restaurado
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

/* Novo elemento para controles centralizados em mobile */
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
  max-height: 100%;
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

/* Estilos melhorados para dropdown no desktop */
nav ul li.dropdown {
  position: relative;
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
  top: calc(45% + 15px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 320px;
  min-height: 180px;
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

/* Estilo para o botão de menu (hamburger) */
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

/* Ícone de hamburger animado */
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

/* Estilo para o menu sidebar */
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
  height: 40px;
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

/* Estilo para dropdowns no sidebar */
.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.dropdown-header a {
  flex: 1;
}

.dropdown-icon {
  margin-right: 20px;
  transition: transform 0.3s ease;
  color: #AE2C2A;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-content.open {
  max-height: 200px;
}

.dropdown-content li {
  border-bottom: none !important;
}

.dropdown-content li a {
  padding-left: 55px !important;
  font-size: 0.9em;
}

.dropdown-content li a:hover {
  padding-left: 60px !important;
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
}

@media (max-width: 1390px) {
  .logo-container {
    width: 15%;
  }

  .logo {
    max-height: 50px;
  }

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
  
  .social-icon {
    width: 30px;
    height: 30px;
    font-size: 0.85rem;
  }
}

@media (max-width: 1100px) {
  .logo-container {
    width: 15%;
  }

  .logo {
    max-height: 40px;
  }

  nav ul li {
    margin: 0 8px;
  }

  nav ul li a {
    font-size: 0.7em;
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
    max-height: 45px;
    max-width: 100%;
  }
  
  /* Esconder os controles originais em telas menores */
  .header-right {
    display: none;
  }
  
  /* Mostrar os controles centralizados em telas menores */
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
    max-height: 40px;
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
    max-height: 35px;
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
}

@media (max-width: 440px) {
  .logo-container {
    width: 90px;
  }

  .logo {
    max-height: 25px;
  }
  
  .mobile-center-controls {
    transform: translate(-50%, -50%) scale(0.9);
  }
  
  .menu-sidebar {
    width: 260px;
  }
}

/* Estilo para o overlay que escurece o fundo quando o menu está aberto */
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
</style>
