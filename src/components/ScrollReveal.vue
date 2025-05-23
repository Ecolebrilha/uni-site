<template>
  <div 
    ref="revealElement" 
    :class="[
      'scroll-reveal', 
      {'is-revealed': isRevealed}, 
      {'reveal-from-bottom': direction === 'bottom'},
      {'reveal-from-left': direction === 'left'},
      {'reveal-from-right': direction === 'right'},
      {'reveal-fade': direction === 'fade'},
      customClass
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ScrollReveal',
  props: {
    threshold: {
      type: Number,
      default: 0.1
    },
    delay: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'bottom',
      validator: (value) => ['bottom', 'left', 'right', 'fade'].includes(value)
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isRevealed: false,
      observer: null
    }
  },
  mounted() {
    this.createObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    createObserver() {
      const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: this.threshold
      };

      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isRevealed) {
            // Aplicar delay se especificado
            if (this.delay > 0) {
              setTimeout(() => {
                this.isRevealed = true;
              }, this.delay);
            } else {
              this.isRevealed = true;
            }
            
            // Desconectar o observer após revelar (opcional)
            // this.observer.disconnect();
          }
        });
      }, options);

      this.observer.observe(this.$refs.revealElement);
    }
  }
}
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transition: transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1), 
              opacity 1.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  will-change: transform, opacity;
}

.reveal-from-bottom {
  transform: translateY(50px);
}

.reveal-from-left {
  transform: translateX(-50px);
}

.reveal-from-right {
  transform: translateX(50px);
}

.reveal-fade {
  opacity: 0;
}

.is-revealed {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
