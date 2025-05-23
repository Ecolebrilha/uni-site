<template>
        <div class="parceiros">
          <HomeHeader />

    <div class="banner-container">
      <div class="banner-overlay">
        <h1>Parceiros</h1>
      </div>
      <img src="@/assets/header-parceiros.jpg" alt="Imagem do Banner">
    </div>

            <main>
                <section class="about-content">
                    <div class="about-center">
                        <div class="partner-logos">
                            <img src="@/assets/parceiro1.jpg" alt="Logo Parceiro1">
                            <img src="@/assets/parceiro2.jpg" alt="Logo Parceiro2">
                            <img src="@/assets/parceiro3.jpg" alt="Logo Parceiro3">
                            <img src="@/assets/parceiro4.jpg" alt="Logo Parceiro4">
                            <img src="@/assets/parceiro5.jpg" alt="Logo Parceiro5">
                            <img src="@/assets/parceiro6.jpg" alt="Logo Parceiro6">
                            <img src="@/assets/parceiro7.jpg" alt="Logo Parceiro7">
                            <img src="@/assets/parceiro8.jpg" alt="Logo Parceiro8">
                            <img src="@/assets/parceiro9.jpg" alt="Logo Parceiro9">
                            <img src="@/assets/parceiro10.jpg" alt="Logo Parceiro10">
                            <img src="@/assets/parceiro11.jpg" alt="Logo Parceiro11">
                            <img src="@/assets/parceiro12.jpg" alt="Logo Parceiro12">
                            <img src="@/assets/parceiro13.jpg" alt="Logo Parceiro13">
                            <img src="@/assets/parceiro14.jpg" alt="Logo Parceiro14">
                            <img src="@/assets/parceiro15.jpg" alt="Logo Parceiro15">
                            <img src="@/assets/parceiro16.jpg" alt="Logo Parceiro16">
                            <img src="@/assets/parceiro17.jpg" alt="Logo Parceiro17">
                            <img src="@/assets/parceiro18.jpg" alt="Logo Parceiro18">
                            <img src="@/assets/parceiro19.jpg" alt="Logo Parceiro19">
                            <img src="@/assets/parceiro20.jpg" alt="Logo Parceiro20">
                            <img src="@/assets/parceiro21.jpg" alt="Logo Parceiro21">
                            <img src="@/assets/parceiro22.jpg" alt="Logo Parceiro22">
                            <img src="@/assets/parceiro23.jpg" alt="Logo Parceiro23">
                            <img src="@/assets/parceiro24.jpg" alt="Logo Parceiro24">
                            <img src="@/assets/parceiro25.jpg" alt="Logo Parceiro25">
                            <img src="@/assets/parceiro26.jpg" alt="Logo Parceiro26">
                        </div>
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
.parceiros {
 text-align: center;
 margin: 0;
 padding: 0;
 font-family: Arial, sans-serif;
 background-color: #f4f4f4;
}

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
  text-align: center;
}

.banner-overlay .content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner-overlay h1, .banner-overlay p {
  margin: 0;
}

.banner-overlay h1 {
  color: #FFFFFF;
  font-size: 4em;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInRight 1.5s ease-out;
  margin-bottom: 20px;
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
  padding: 50px 0;
}

.about-content {
  margin: 100px 0 150px 0;
  width: 90%;
  max-width: 1200px;
  height: auto;
  text-align: left;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.partner-logos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  justify-items: center;
  align-items: center;
}

.partner-logos img {
  width: 120px;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.partner-logos img:hover {
  transform: scale(1.1);
}

@media (max-width: 1200px) {
  .partner-logos {
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
  }
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

  .about-content {
    width: 100%;
    margin-top: 150px;
  }
  
  .partner-logos {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .partner-logos img {
    width: 100px;
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

  .partner-logos {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
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

  .partner-logos {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .partner-logos img {
    width: 80px;
  }
}
</style>
