<template>
  <div id="app">
    <div class="page-transition-overlay" :class="{ active: isTransitioning }">
      <div class="transition-logo-container" v-if="isTransitioning">
        <img src="@/assets/logo-uni.png" alt="Uni Hospitalar" class="transition-logo">
      </div>
    </div>
    <transition 
      :name="transitionName" 
      mode="out-in"
      @before-leave="startTransition"
      @enter="endTransition"> <!-- Mudança aqui: removendo prepareEnter e usando enter diretamente -->
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>  
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'page',
      isTransitioning: false
    }
  },
  watch: {
    '$route'(to, from) {
      // Determinar a direção da transição
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      
      // Usar a transição definida na rota, se existir
      if (to.meta && to.meta.transition) {
        this.transitionName = to.meta.transition;
      } else if (fromDepth < toDepth) {
        // Indo para uma rota mais profunda
        this.transitionName = 'slide-left'
      } else if (fromDepth > toDepth) {
        // Voltando para uma rota menos profunda
        this.transitionName = 'slide-right'
      } else {
        // Mesmo nível, use transição padrão
        this.transitionName = 'page'
      }
    }
  },
  methods: {
    startTransition() {
      this.isTransitioning = true;
    },
    endTransition() {
      // Desativa o overlay imediatamente quando a nova página começa a entrar
      this.isTransitioning = false;
    }
  }
};
</script>

<style>

body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

/* Overlay de transição vermelho */
.page-transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #AE2C2A; /* Vermelho que combina com a temática do site */
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-out; /* Saída mais rápida */
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-transition-overlay.active {
  opacity: 0.9; /* Mais opaco para destacar a logo */
  pointer-events: all;
  transition: opacity 0.5s ease-in; /* Entrada mais lenta */
}

/* Container e animação da logo */
.transition-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.transition-logo {
  max-width: 500px;
  height: auto;
  animation: logoAnimation 1.5s ease-in-out; /* Animação mais rápida */
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}

@keyframes logoAnimation {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Transição padrão - mais suave */
.page-enter-active {
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.page-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}

.page-enter {
  opacity: 0;
  transform: translateY(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Transição deslizante para a esquerda - mais suave */
.slide-left-enter-active {
  transition: all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.slide-left-leave-active {
  transition: all 1s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(80px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}

/* Transição deslizante para a direita - mais suave */
.slide-right-enter-active {
  transition: all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.slide-right-leave-active {
  transition: all 1s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.slide-right-enter {
  opacity: 0;
  transform: translateX(-80px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(80px);
}

/* Transição de fade - mais suave */
.fade-enter-active {
  transition: opacity 1.2s ease;
}

.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Estilos para links */
a {
  transition: color 0.3s ease, background-color 0.3s ease;
}

/* Estilo para links ativos */
.router-link-active {
  transition: all 0.3s ease;
}

@media (max-width: 576px) {
    .transition-logo {
      max-width: 350px;
    }
  }

@media (max-width: 400px) {
    .transition-logo {
      max-width: 270px;
    }
  }
</style>
