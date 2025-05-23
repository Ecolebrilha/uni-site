<template>
    <div class="trabalhe-page">
      <HomeHeader />
      
      <!-- Hero Section com Efeito Parallax -->
      <section class="hero-section">
        <div class="parallax-container">
          <div class="overlay"></div>
          <h1 class="hero-title">Trabalhe Conosco</h1>
          <div class="hero-subtitle">Faça parte do nosso time</div>
        </div>
      </section>
      
      <!-- Seção de Introdução -->
      <section class="intro-section">
        <div class="container">
          <ScrollReveal direction="bottom" :delay="100">
            <div class="section-title">
              <span class="accent-line"></span>
              <h2>Junte-se à Nossa Equipe</h2>
              <span class="accent-line"></span>
            </div>
            <p class="intro-text">
              Na Uni Hospitalar, acreditamos que nossos colaboradores são o nosso maior ativo. 
              Estamos sempre em busca de talentos que compartilhem nossos valores e queiram 
              fazer a diferença no setor de saúde. Conheça nossas oportunidades e faça parte 
              do nosso time.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      <!-- Seção de Valores da Empresa -->
      <section class="values-section">
        <div class="container">
          <ScrollReveal direction="bottom" :delay="200">
            <div class="section-title">
              <span class="accent-line"></span>
              <h2>Nossos Valores</h2>
              <span class="accent-line"></span>
            </div>
          </ScrollReveal>
          
          <div class="values-grid">
            <ScrollReveal direction="bottom" :delay="300">
              <div class="value-card">
                <div class="value-icon">
                  <i class="fas fa-handshake"></i>
                </div>
                <h3>Integridade</h3>
                <p>Agimos com ética, transparência e responsabilidade em todas as nossas relações.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="bottom" :delay="400">
              <div class="value-card">
                <div class="value-icon">
                  <i class="fas fa-users"></i>
                </div>
                <h3>Colaboração</h3>
                <p>Trabalhamos juntos, valorizando sempre a diversidade, a inclusão e o respeito mútuo.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="bottom" :delay="500">
              <div class="value-card">
                <div class="value-icon">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <h3>Inovação</h3>
                <p>Buscamos constantemente novas soluções e melhores práticas para o setor de saúde.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="bottom" :delay="600">
              <div class="value-card">
                <div class="value-icon">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h3>Excelência</h3>
                <p>Comprometemo-nos com a qualidade e a melhoria contínua em tudo o que fazemos.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <!-- Seção de Benefícios -->
      <section class="benefits-section">
        <div class="container">
          <ScrollReveal direction="bottom" :delay="200">
            <div class="section-title light">
              <span class="accent-line"></span>
              <h2>Benefícios de Trabalhar Conosco</h2>
              <span class="accent-line"></span>
            </div>
          </ScrollReveal>
          
          <div class="benefits-container">
            <ScrollReveal direction="left" :delay="300">
              <div class="benefits-image">
                <img src="@/assets/trabalhe-conosco.png" alt="Equipe Uni Hospitalar" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" :delay="400">
              <div class="benefits-list">
                <div class="benefit-item">
                  <div class="benefit-icon">
                    <i class="fas fa-medal"></i>
                  </div>
                  <div class="benefit-content">
                    <h4>Plano de Carreira</h4>
                    <p>Oportunidades de crescimento e desenvolvimento profissional.</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">
                    <i class="fas fa-heartbeat"></i>
                  </div>
                  <div class="benefit-content">
                    <h4>Plano de Saúde</h4>
                    <p>Assistência médica e odontológica para você e seus dependentes.</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">
                    <i class="fas fa-graduation-cap"></i>
                  </div>
                  <div class="benefit-content">
                    <h4>Capacitação Contínua</h4>
                    <p>Programas de treinamento e desenvolvimento de habilidades.</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">
                    <i class="fas fa-gift"></i>
                  </div>
                  <div class="benefit-content">
                    <h4>Pacote de Benefícios</h4>
                    <p>Vale-alimentação, vale-transporte e outros benefícios competitivos.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <!-- Seção de Formulário -->
      <section class="form-section">
        <div class="container">
          <ScrollReveal direction="bottom" :delay="200">
            <div class="section-title">
              <span class="accent-line"></span>
              <h2>Candidate-se</h2>
              <span class="accent-line"></span>
            </div>
            <p class="form-intro">
              Preencha o formulário abaixo para se candidatar a uma vaga na Uni Hospitalar. 
              Anexe seu currículo e nos conte um pouco sobre você e suas expectativas.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="300">
            <div class="form-container">
              <form @submit.prevent="submitForm" class="career-form">
                <div class="form-grid">
                  <div class="form-group">
                    <label for="name">Nome Completo*</label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="formData.name" 
                      required 
                      placeholder="Seu nome completo"
                    >
                    <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
                  </div>
                  
                  <div class="form-group">
                    <label for="email">E-mail*</label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="formData.email" 
                      required 
                      placeholder="seu.email@exemplo.com"
                    >
                    <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
                  </div>
                  
                  <div class="form-group">
                    <label for="phone">Telefone*</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="formData.phone" 
                      required 
                      placeholder="(00) 00000-0000"
                      v-mask="'(##) #####-####'"
                    >
                    <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
                  </div>
                  
                  <div class="form-group">
                    <label for="position">Área de Interesse*</label>
                    <select 
                      id="position" 
                      v-model="formData.position" 
                      required
                    >
                      <option value="" disabled selected>Selecione uma área</option>
                      <option value="Administrativo">Administrativo</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Logística">Logística</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Recursos Humanos">Recursos Humanos</option>
                      <option value="Tecnologia">Tecnologia</option>
                      <option value="Outro">Outro</option>
                    </select>
                    <span class="error-message" v-if="errors.position">{{ errors.position }}</span>
                  </div>
                  
                  <div class="form-group">
                    <label for="education">Formação Acadêmica*</label>
                    <select 
                      id="education" 
                      v-model="formData.education" 
                      required
                    >
                      <option value="" disabled selected>Selecione sua formação</option>
                      <option value="Ensino Médio">Ensino Médio</option>
                      <option value="Ensino Técnico">Ensino Técnico</option>
                      <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                      <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                      <option value="Pós-graduação">Pós-graduação</option>
                      <option value="Mestrado">Mestrado</option>
                      <option value="Doutorado">Doutorado</option>
                    </select>
                    <span class="error-message" v-if="errors.education">{{ errors.education }}</span>
                  </div>
                  
                  <div class="form-group">
                    <label for="experience">Experiência Profissional*</label>
                    <select 
                      id="experience" 
                      v-model="formData.experience" 
                      required
                    >
                      <option value="" disabled selected>Selecione sua experiência</option>
                      <option value="Sem experiência">Sem experiência</option>
                      <option value="Menos de 1 ano">Menos de 1 ano</option>
                      <option value="1-3 anos">1-3 anos</option>
                      <option value="3-5 anos">3-5 anos</option>
                      <option value="5-10 anos">5-10 anos</option>
                      <option value="Mais de 10 anos">Mais de 10 anos</option>
                    </select>
                    <span class="error-message" v-if="errors.experience">{{ errors.experience }}</span>
                  </div>
                </div>
                
                <div class="form-group full-width">
                  <label for="message">Mensagem / Carta de Apresentação</label>
                  <textarea 
                    id="message" 
                    v-model="formData.message" 
                    rows="5" 
                    placeholder="Conte-nos um pouco sobre você, suas experiências e expectativas..."
                  ></textarea>
                  <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
                </div>
                
                <div class="form-group full-width">
                  <label for="resume">Currículo (PDF, DOC ou DOCX)*</label>
                  <div class="file-upload">
                    <input 
                      type="file" 
                      id="resume" 
                      @change="handleFileUpload" 
                      accept=".pdf,.doc,.docx"
                      required
                    >
                    <div class="file-upload-info">
                      <i class="fas fa-cloud-upload-alt"></i>
                      <span v-if="!formData.resume">Arraste seu arquivo ou clique para selecionar</span>
                      <span v-else>{{ formData.resumeName }}</span>
                    </div>
                  </div>
                  <span class="error-message" v-if="errors.resume">{{ errors.resume }}</span>
                </div>

                <!-- Aviso de Termos -->
                <div class="terms-notice">
                  <div class="notice-content">
                    <i class="fas fa-info-circle notice-icon"></i>
                    <p>
                      Ao preencher e enviar este formulário, você concorda automaticamente com os nossos 
                      <router-link to="/PoliticaPrivacidade" target="_blank" class="terms-link">Termos de Privacidade</router-link> 
                      e 
                      <router-link to="/TermosLegais" target="_blank" class="terms-link">Termos Legais</router-link>.
                    </p>
                  </div>
                </div>
                
                <div class="form-group full-width">
                  <button type="submit" class="submit-button" :disabled="isSubmitting">
                    <span v-if="!isSubmitting">Enviar Candidatura</span>
                    <span v-else><i class="fas fa-spinner fa-spin"></i> Enviando...</span>
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <!-- Seção de Perguntas Frequentes -->
      <section class="faq-section">
        <div class="container">
          <ScrollReveal direction="bottom" :delay="200">
            <div class="section-title">
              <span class="accent-line"></span>
              <h2>Perguntas Frequentes</h2>
              <span class="accent-line"></span>
            </div>
          </ScrollReveal>
          
          <div class="faq-container">
            <ScrollReveal direction="bottom" :delay="300">
              <div class="faq-item" :class="{ active: activeQuestion === 1 }" @click="toggleQuestion(1)">
                <div class="faq-question">
                  <h4>Como funciona o processo seletivo?</h4>
                  <i class="fas" :class="activeQuestion === 1 ? 'fa-minus' : 'fa-plus'"></i>
              </div>
              <div class="faq-answer">
                <p>Nosso processo seletivo geralmente inclui as seguintes etapas: análise curricular, entrevista com RH, entrevista técnica e, em alguns casos, testes práticos. O tempo de duração varia de acordo com a vaga e a urgência da contratação.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="350">
            <div class="faq-item" :class="{ active: activeQuestion === 2 }" @click="toggleQuestion(2)">
              <div class="faq-question">
                <h4>Quanto tempo leva para receber um retorno após a candidatura?</h4>
                <i class="fas" :class="activeQuestion === 2 ? 'fa-minus' : 'fa-plus'"></i>
              </div>
              <div class="faq-answer">
                <p>Procuramos dar um retorno em até 15 dias úteis após o recebimento da candidatura. Caso você seja selecionado para a próxima fase, entraremos em contato por e-mail ou telefone.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="400">
            <div class="faq-item" :class="{ active: activeQuestion === 3 }" @click="toggleQuestion(3)">
              <div class="faq-question">
                <h4>Posso me candidatar mesmo sem vagas abertas para minha área?</h4>
                <i class="fas" :class="activeQuestion === 3 ? 'fa-minus' : 'fa-plus'"></i>
              </div>
              <div class="faq-answer">
                <p>Sim! Mantemos um banco de talentos e, quando surgir uma oportunidade compatível com seu perfil, entraremos em contato. Recomendamos atualizar seu currículo periodicamente.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="450">
            <div class="faq-item" :class="{ active: activeQuestion === 4 }" @click="toggleQuestion(4)">
              <div class="faq-question">
                <h4>A Uni Hospitalar oferece oportunidades para pessoas com deficiência?</h4>
                <i class="fas" :class="activeQuestion === 4 ? 'fa-minus' : 'fa-plus'"></i>
              </div>
              <div class="faq-answer">
                <p>Sim, a Uni Hospitalar valoriza a diversidade e inclusão. Temos um programa específico para contratação de pessoas com deficiência e adaptamos nosso ambiente de trabalho para garantir acessibilidade.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" :delay="500">
            <div class="faq-item" :class="{ active: activeQuestion === 5 }" @click="toggleQuestion(5)">
              <div class="faq-question">
                <h4>Existe programa de estágio ou trainee?</h4>
                <i class="fas" :class="activeQuestion === 5 ? 'fa-minus' : 'fa-plus'"></i>
              </div>
              <div class="faq-answer">
                <p>Sim, oferecemos programas de estágio e trainee periodicamente. Fique atento às nossas redes sociais e site para informações sobre as próximas turmas e processos seletivos.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <HomeFooter />
    
    <!-- Modal de Sucesso -->
    <div class="modal" v-if="showSuccessModal">
      <div class="modal-content">
        <div class="modal-header">
          <i class="fas fa-check-circle"></i>
          <h3>Candidatura Enviada!</h3>
        </div>
        <div class="modal-body">
          <p>Sua candidatura foi enviada com sucesso. Agradecemos seu interesse em fazer parte da nossa equipe!</p>
          <p>Analisaremos seu currículo e, caso seu perfil esteja alinhado com nossas oportunidades, entraremos em contato.</p>
        </div>
        <div class="modal-footer">
          <button @click="closeModal" class="modal-button">Fechar</button>
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
  name: 'TrabalheConosco',
  components: {
    HomeHeader,
    HomeFooter
  },
  directives: {
    mask
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        position: '',
        education: '',
        experience: '',
        message: '',
        resume: null,
        resumeName: '',
        termsAccepted: false
      },
      errors: {},
      isSubmitting: false,
      showSuccessModal: false,
      activeQuestion: null
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Verificar tipo de arquivo
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
          this.errors.resume = 'Por favor, envie um arquivo PDF, DOC ou DOCX.';
          this.formData.resume = null;
          this.formData.resumeName = '';
          return;
        }
        
        // Verificar tamanho do arquivo (máximo 5MB)
        if (file.size > 5 * 1024 * 1024) {
          this.errors.resume = 'O arquivo deve ter no máximo 5MB.';
          this.formData.resume = null;
          this.formData.resumeName = '';
          return;
        }
        
        this.formData.resume = file;
        this.formData.resumeName = file.name;
        this.errors.resume = '';
      }
    },
    validateForm() {
      let isValid = true;
      this.errors = {};
      
      // Validar nome
      if (!this.formData.name.trim()) {
        this.errors.name = 'Por favor, informe seu nome completo.';
        isValid = false;
      }
      
      // Validar e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email.trim() || !emailRegex.test(this.formData.email)) {
        this.errors.email = 'Por favor, informe um e-mail válido.';
        isValid = false;
      }
      
      // Validar telefone
      if (!this.formData.phone.trim() || this.formData.phone.replace(/[^0-9]/g, '').length < 10) {
        this.errors.phone = 'Por favor, informe um telefone válido.';
        isValid = false;
      }
      
      // Validar área de interesse
      if (!this.formData.position) {
        this.errors.position = 'Por favor, selecione uma área de interesse.';
        isValid = false;
      }
      
      // Validar formação
      if (!this.formData.education) {
        this.errors.education = 'Por favor, selecione sua formação acadêmica.';
        isValid = false;
      }
      
      // Validar experiência
      if (!this.formData.experience) {
        this.errors.experience = 'Por favor, selecione sua experiência profissional.';
        isValid = false;
      }
      
      // Validar currículo
      if (!this.formData.resume) {
        this.errors.resume = 'Por favor, anexe seu currículo.';
        isValid = false;
      }
      
      // Validar termos
      if (!this.formData.termsAccepted) {
        this.errors.termsAccepted = 'Você precisa aceitar os termos para continuar.';
        isValid = false;
      }
      
      return isValid;
    },
    submitForm() {
      if (this.validateForm()) {
        this.isSubmitting = true;
        
        // Simulação de envio para o servidor
        setTimeout(() => {
          this.isSubmitting = false;
          this.showSuccessModal = true;
          this.resetForm();
        }, 2000);
        
        // Aqui você implementaria a lógica real de envio para o servidor
        // const formData = new FormData();
        // Object.keys(this.formData).forEach(key => {
        //   formData.append(key, this.formData[key]);
        // });
        // 
        // axios.post('/api/careers/apply', formData)
        //   .then(response => {
        //     this.isSubmitting = false;
        //     this.showSuccessModal = true;
        //     this.resetForm();
        //   })
        //   .catch(error => {
        //     this.isSubmitting = false;
        //     console.error('Erro ao enviar formulário:', error);
        //     // Tratar erro
        //   });
      }
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        position: '',
        education: '',
        experience: '',
        message: '',
        resume: null,
        resumeName: '',
        termsAccepted: false
      };
      
      // Resetar o input de arquivo
      const fileInput = document.getElementById('resume');
      if (fileInput) fileInput.value = '';
    },
    closeModal() {
      this.showSuccessModal = false;
    },
    toggleQuestion(index) {
      if (this.activeQuestion === index) {
        this.activeQuestion = null;
      } else {
        this.activeQuestion = index;
      }
    }
  }
}
</script>

<style scoped>
/* Estilos Gerais */
.trabalhe-page {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
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
  min-height: 500px;
  overflow: hidden;
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/header-trabalhe-conosco.png');
  background-size: contain;
  background-position: center -140px;
  background-repeat: no-repeat;
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

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeInUp 1.5s ease-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  position: relative;
  z-index: 2;
  animation: fadeInUp 1.5s ease-out 0.3s both;
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
  background-color: #f9f9f9;
  text-align: center;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #AE2C2A;
  margin: 0 20px;
}

.section-title.light h2 {
  color: #ffffff;
}

.accent-line {
  height: 3px;
  width: 70px;
  background-color: #AE2C2A;
}

.section-title.light .accent-line {
  background-color: #ffffff;
}

.intro-text {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  line-height: 1.8;
}

/* Seção de Valores */
.values-section {
  background-color: #ffffff;
}

.values-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  background: #f9f9f9;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 2rem;
}

.value-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.value-card p {
  color: #666;
}

/* Seção de Benefícios */
.benefits-section {
  background: linear-gradient(135deg, #AE2C2A, #8a2220);
  color: white;
  position: relative;
  overflow: hidden;
}

.benefits-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.benefits-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.benefits-image {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.benefits-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.benefits-image:hover img {
  transform: scale(1.05);
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
}

.benefit-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
}

.benefit-content {
  flex: 1;
}

.benefit-content h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: white;
}

.benefit-content p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

/* Seção de Formulário */
.form-section {
  background-color: #f9f9f9;
}

.form-intro {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 40px;
}

.form-container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 40px;
}

.career-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: span 2;
}

.form-group label {
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #AE2C2A;
  box-shadow: 0 0 0 3px rgba(174, 44, 42, 0.1);
  outline: none;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.file-upload {
  position: relative;
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.file-upload:hover {
  border-color: #AE2C2A;
  background-color: rgba(174, 44, 42, 0.05);
}

.file-upload input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file-upload-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #666;
}

.file-upload-info i {
  font-size: 2.5rem;
  color: #AE2C2A;
}

.error-message {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 5px;
}

/* Estilos para o checkbox de termos */
.terms-group {
  margin-bottom: 10px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border-left: 3px solid #AE2C2A;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.terms-group:hover {
  background-color: #f5f5f5;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.checkbox-container input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #AE2C2A;
}

.terms-label {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  font-weight: 500;
  text-align: left;
}

.terms-label a {
  color: #AE2C2A;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  position: relative;
}

.terms-label a:hover {
  color: #ff5555;
}

.terms-label a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -98px;
  left: 0;
  background-color: #AE2C2A;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.terms-label a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Aviso de Termos */
.terms-notice {
  margin: 30px 0 20px 0;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.05), rgba(174, 44, 42, 0.02));
  border: 1px solid rgba(174, 44, 42, 0.2);
  border-radius: 10px;
  padding: 20px;
}

.notice-content {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.notice-icon {
  color: #AE2C2A;
  font-size: 1.2rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.notice-content p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
}

.terms-link {
  color: #AE2C2A;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.terms-link:hover {
  color: #ff5555;
  text-decoration: underline;
}

.submit-button {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(174, 44, 42, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Seção de FAQ */
.faq-section {
  background-color: #ffffff;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq-item {
  background: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.faq-question {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: white;
}

.faq-question h4 {
  font-size: 1.1rem;
  color: #333;
  margin: 0;
  font-weight: 600;
}

.faq-question i {
  color: #AE2C2A;
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.faq-item.active .faq-question i {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.active .faq-answer {
  padding: 0 25px 20px;
  max-height: 500px;
}

.faq-answer p {
  color: #666;
  margin: 0;
}

/* Modal de Sucesso */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: white;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.3s ease;
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.modal-header {
  padding: 25px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.modal-header i {
  font-size: 3rem;
  color: #4CAF50;
  margin-bottom: 15px;
}

.modal-header h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.modal-body {
  padding: 25px;
  text-align: center;
}

.modal-body p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.modal-body p:last-child {
  margin-bottom: 0;
}

.modal-footer {
  padding: 15px 25px 25px;
  text-align: center;
}

.modal-button {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-button:hover {
  background: linear-gradient(135deg, #ff5555, #AE2C2A);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(174, 44, 42, 0.3);
}

/* Responsividade */
@media (max-width: 1600px) {
  .parallax-container {
    background-position: center 0;
  }
}

@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .parallax-container {
    background-position: center 140px;
  }

  .values-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }

  .parallax-container {
    background-position: center 220px;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  section {
    padding: 60px 0;
  }
  
  .benefits-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .benefits-image {
    order: 2;
  }
  
  .benefits-list {
    order: 1;
  }
}

@media (max-width: 768px) {
  .parallax-container {
    background-position: center 220px;
  }

  .hero-section {
    height: 60vh;
    min-height: 400px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
  
  .intro-text {
    font-size: 1.1rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-group.full-width {
    grid-column: span 1;
  }
  
  .form-container {
    padding: 30px 20px;
  }
  
  .benefit-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .benefit-icon {
    margin-bottom: 15px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .parallax-container {
    background-position: center 270px;
  }

  .container {
    padding: 0 20px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-title h2 {
    font-size: 1.8rem;
  }
  
  .accent-line {
    width: 40px;
  }
  
  .value-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  .value-card h3 {
    font-size: 1.3rem;
  }
  
  .submit-button {
    width: 100%;
  }
  
  .faq-question h4 {
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

.value-icon i, .benefit-icon i {
  animation: float 3s ease-in-out infinite;
}

/* Animação para o botão de envio */
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

.submit-button:hover:not(:disabled) {
  animation: pulse 1.5s infinite;
}

/* Efeito de destaque para os cards de valores */
.value-card:nth-child(1) .value-icon {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.value-card:nth-child(2) .value-icon {
  background: linear-gradient(135deg, #2C5EAE, #5596ff);
}

.value-card:nth-child(3) .value-icon {
  background: linear-gradient(135deg, #2CAE6F, #55ff9d);
}

.value-card:nth-child(4) .value-icon {
  background: linear-gradient(135deg, #AE8A2C, #ffcc55);
}

/* Efeito de hover para os itens de benefícios */
.benefit-item:hover .benefit-icon {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

/* Ajustes para dispositivos móveis */
@media (max-width: 480px) {
  .parallax-container {
    background-position: center 320px;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .value-card, .benefit-item {
    padding: 20px;
  }
  
  .value-icon {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
  
  .value-card h3 {
    font-size: 1.2rem;
  }
  
  .benefit-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .benefit-content h4 {
    font-size: 1.1rem;
  }
  
  .form-container {
    padding: 20px 15px;
  }
  
  .submit-button {
    padding: 12px 20px;
    font-size: 1rem;
  }
  
  .modal-content {
    width: 95%;
  }
  
  .modal-header i {
    font-size: 2.5rem;
  }
  
  .modal-header h3 {
    font-size: 1.3rem;
  }
}
</style>
