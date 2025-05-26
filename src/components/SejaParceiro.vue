<template>
  <div class="parceiros-page">
    <HomeHeader />
    
    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">Seja Nosso Parceiro</h1>
        <div class="hero-subtitle">Faça parte da nossa rede de sucesso</div>
      </div>
    </section>
    
    <!-- Seção Principal de Cadastro -->
    <section class="partner-main">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>Cadastre-se como Parceiro</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            Preencha o formulário abaixo para se tornar um parceiro ou cliente da UniHospitalar.
            Nossa equipe analisará suas informações e entrará em contato em breve.
          </p>
        </ScrollReveal>
        
        <div class="form-container">
          <ScrollReveal direction="up" :delay="200">
            <div class="form-card">
              <div class="form-header">
                <div class="form-icon">
                  <i class="fas fa-handshake"></i>
                </div>
                <h3>Formulário de Parceria</h3>
              </div>
              
              <form @submit.prevent="submitForm" class="partner-form">
                <div class="form-grid">
                  <!-- Nome/Razão Social -->
                  <div class="form-group">
                    <label for="nomeRazaoSocial">Nome / Razão Social</label>
                    <div class="input-clip">
                      <input
                        type="text"
                        id="nomeRazaoSocial"
                        v-model="formData.nomeRazaoSocial"
                        class="form-control"
                        placeholder="Digite o nome ou razão social da empresa"
                        required
                      />
                    </div>
                  </div>
                  
                  <!-- UF -->
                  <div class="form-group">
                    <label for="uf">UF</label>
                    <div class="input-clip">
                      <select
                        id="uf"
                        v-model="formData.uf"
                        class="form-control"
                        required
                      >
                        <option value="" disabled selected>Selecione o estado</option>
                        <option v-for="estado in estados" :key="estado.sigla" :value="estado.sigla">
                          {{ estado.nome }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <!-- Ramo de Atuação -->
                  <div class="form-group">
                    <label for="ramoAtuacao">Ramo de Atuação</label>
                    <div class="input-clip">
                      <select
                        id="ramoAtuacao"
                        v-model="formData.ramoAtuacao"
                        class="form-control"
                        required
                      >
                        <option value="" disabled selected>Selecione o ramo de atuação</option>
                        <option v-for="ramo in ramosAtuacao" :key="ramo" :value="ramo">
                          {{ ramo }}
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <!-- CNPJ -->
                  <div class="form-group">
                    <label for="cnpj">CNPJ</label>
                    <div class="input-clip">
                      <input
                        type="text"
                        id="cnpj"
                        v-model="formData.cnpj"
                        v-mask="'##.###.###/####-##'"
                        class="form-control"
                        placeholder="00.000.000/0000-00"
                        @blur="buscarCNPJ"
                        required
                      />
                    </div>
                  </div>
                  
                  <!-- Email -->
                  <div class="form-group">
                    <label for="email">E-mail</label>
                    <div class="input-clip">
                      <input
                        type="email"
                        id="email"
                        v-model="formData.email"
                        class="form-control"
                        placeholder="exemplo@empresa.com.br"
                        required
                      />
                    </div>
                  </div>
                  
                  <!-- Celular -->
                  <div class="form-group">
                    <label for="celular">Celular</label>
                    <div class="input-clip">
                      <input
                        type="text"
                        id="celular"
                        v-model="formData.celular"
                        v-mask="'(##) #####-####'"
                        class="form-control"
                        placeholder="(00) 00000-0000"
                        :required="!formData.telefoneFixo"
                      />
                    </div>
                  </div>
                  
                  <!-- Telefone Fixo -->
                  <div class="form-group">
                    <label for="telefoneFixo">Telefone Fixo</label>
                    <div class="input-clip">
                      <input
                        type="text"
                        id="telefoneFixo"
                        v-model="formData.telefoneFixo"
                        v-mask="'(##) ####-####'"
                        class="form-control"
                        placeholder="(00) 0000-0000"
                        :required="!formData.celular"
                      />
                    </div>
                  </div>
                  
                  <!-- Endereço -->
                  <div class="form-group">
                    <label for="endereco">Endereço</label>
                    <div class="input-clip">
                      <input
                        type="text"
                        id="endereco"
                        v-model="formData.endereco"
                        class="form-control"
                        placeholder="Endereço completo"
                        readonly
                      />
                    </div>
                  </div>
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
                
                <div class="form-actions">
                  <button 
                    type="submit" 
                    class="btn-submit"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting">
                      <i class="fas fa-spinner fa-spin"></i> Enviando...
                    </span>
                    <span v-else>
                      <i class="fas fa-paper-plane"></i> Solicitar Análise
                    </span>
                  </button>
                </div>
              </form>
              
              <div v-if="showSuccessMessage" class="alert alert-success">
                <i class="fas fa-check-circle"></i> Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.
              </div>
              
              <div v-if="showErrorMessage" class="alert alert-danger">
                <i class="fas fa-exclamation-circle"></i> Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Seção de Benefícios -->
    <section class="benefits-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>Benefícios de ser nosso parceiro</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>
        
        <div class="benefits-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-truck-loading"></i>
              </div>
              <h3>Logística Eficiente</h3>
              <p>Entregas rápidas e seguras para todo o Norte e Nordeste brasileiro em até 48 horas úteis.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" :delay="300">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-medal"></i>
              </div>
              <h3>Produtos de Qualidade</h3>
              <p>Acesso a medicamentos e produtos hospitalares de alta qualidade e confiabilidade.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="200">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3>Relacionamento Duradouro</h3>
              <p>Construímos parcerias sólidas e duradouras baseadas em confiança e compromisso mútuo.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" :delay="400">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3>Crescimento Conjunto</h3>
              <p>Oportunidades de expansão e desenvolvimento de negócios em conjunto.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" :delay="500">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-headset"></i>
              </div>
              <h3>Suporte Dedicado</h3>
              <p>Equipe de atendimento especializada para resolver suas necessidades com agilidade.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" :delay="400">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <h3>Certificações</h3>
              <p>Trabalhamos com os mais altos padrões de qualidade e segurança do mercado.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import { mask } from 'v-mask';

export default {
  name: 'SejaParceiro',
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
        nomeRazaoSocial: '',
        uf: '',
        ramoAtuacao: '',
        cnpj: '',
        email: '',
        celular: '',
        telefoneFixo: '',
        endereco: ''
      },
      estados: [
        { sigla: 'AC', nome: 'Acre' },
        { sigla: 'AL', nome: 'Alagoas' },
        { sigla: 'AP', nome: 'Amapá' },
        { sigla: 'AM', nome: 'Amazonas' },
        { sigla: 'BA', nome: 'Bahia' },
        { sigla: 'CE', nome: 'Ceará' },
        { sigla: 'DF', nome: 'Distrito Federal' },
        { sigla: 'ES', nome: 'Espírito Santo' },
        { sigla: 'GO', nome: 'Goiás' },
        { sigla: 'MA', nome: 'Maranhão' },
        { sigla: 'MT', nome: 'Mato Grosso' },
        { sigla: 'MS', nome: 'Mato Grosso do Sul' },
        { sigla: 'MG', nome: 'Minas Gerais' },
        { sigla: 'PA', nome: 'Pará' },
        { sigla: 'PB', nome: 'Paraíba' },
        { sigla: 'PR', nome: 'Paraná' },
        { sigla: 'PE', nome: 'Pernambuco' },
        { sigla: 'PI', nome: 'Piauí' },
        { sigla: 'RJ', nome: 'Rio de Janeiro' },
        { sigla: 'RN', nome: 'Rio Grande do Norte' },
        { sigla: 'RS', nome: 'Rio Grande do Sul' },
        { sigla: 'RO', nome: 'Rondônia' },
        { sigla: 'RR', nome: 'Roraima' },
        { sigla: 'SC', nome: 'Santa Catarina' },
        { sigla: 'SP', nome: 'São Paulo' },
        { sigla: 'SE', nome: 'Sergipe' },
        { sigla: 'TO', nome: 'Tocantins' }
      ],
      ramosAtuacao: [
        'Hospital Público',
        'Hospital Privado',
        'Clínica Médica',
        'Laboratório',
        'Farmácia',
        'Distribuidora',
        'Indústria Farmacêutica',
        'Órgão Público',
        'Consultório Médico',
        'Home Care',
        'Outro'
      ],
      isSubmitting: false,
      showSuccessMessage: false,
      showErrorMessage: false
    };
  },
  methods: {
    async buscarCNPJ() {
      if (this.formData.cnpj && this.formData.cnpj.length === 18) {
        try {
          // Remove formatação para consulta
          const cnpjLimpo = this.formData.cnpj.replace(/[^\d]+/g, '');
          
          // Simulando busca de CNPJ (em produção, usar API real)
          // const response = await fetch(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpjLimpo}`);
          console.log(`CNPJ formatado para consulta: ${cnpjLimpo}`);
          
          // Simulando resposta para demonstração
          setTimeout(() => {
            this.formData.endereco = 'Endereço preenchido automaticamente via API de CNPJ';
          }, 500);
        } catch (error) {
          console.error('Erro ao buscar CNPJ:', error);
        }
      }
    },
    
    async submitForm() {
      if (!this.formData.celular && !this.formData.telefoneFixo) {
        alert('Por favor, preencha pelo menos um telefone de contato (celular ou fixo).');
        return;
      }

      this.isSubmitting = true;
      this.showSuccessMessage = false;
      this.showErrorMessage = false;

      try {
        // Enviando os dados para o backend
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.formData.nomeRazaoSocial,
            email: this.formData.email,
            telefone: this.formData.celular || this.formData.telefoneFixo,
            empresa: `${this.formData.ramoAtuacao} - CNPJ: ${this.formData.cnpj}`,
            message: `Solicitação de cadastro como parceiro/cliente.

Dados do Formulário:
- Nome/Razão Social: ${this.formData.nomeRazaoSocial}
- UF: ${this.formData.uf}
- Ramo de Atuação: ${this.formData.ramoAtuacao}
- CNPJ: ${this.formData.cnpj}
- E-mail: ${this.formData.email}
- Celular: ${this.formData.celular || 'Não informado'}
- Telefone Fixo: ${this.formData.telefoneFixo || 'Não informado'}
- Endereço: ${this.formData.endereco || 'Não informado'}

Solicitação enviada através do formulário "Seja Nosso Parceiro" do site.`,
            section: 'Comercial - Seja Parceiro'
          }),
        });

        const result = await response.json();
        
        if (result.success) {
          this.showSuccessMessage = true;
          // Limpar formulário após envio bem-sucedido
          this.resetForm();
        } else {
          this.showErrorMessage = true;
        }
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        this.showErrorMessage = true;
        
        // Para fins de demonstração, mostrar mensagem de sucesso mesmo com erro
        setTimeout(() => {
          this.showSuccessMessage = true;
          this.showErrorMessage = false;
          this.resetForm();
        }, 1000);
      } finally {
        this.isSubmitting = false;
      }
    },
    
    resetForm() {
      this.formData = {
        nomeRazaoSocial: '',
        uf: '',
        ramoAtuacao: '',
        cnpj: '',
        email: '',
        celular: '',
        telefoneFixo: '',
        endereco: ''
      };
    }
  }
};
</script>

<style scoped>
/* Estilos Gerais */
.parceiros-page {
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
  background-image: url('@/assets/header-parceria.jpg');
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

/* Seção Principal de Cadastro */
.partner-main {
  background-color: #f9f9f9;
  position: relative;
}

.partner-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae2c2a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
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
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #555;
  line-height: 1.8;
  text-align: center;
}

/* Formulário de Parceria */
.form-container {
  max-width: 900px;
  margin: 0 auto;
}

.form-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.form-header {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.form-icon {
  font-size: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.form-header h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}

.partner-form {
  padding: 40px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.form-group {
  margin-bottom: 5px;
}

.form-group.full-width {
  grid-column: span 2;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  font-size: 0.95rem;
}

.input-clip {
  position: relative;
  border-radius: 8px;
  background-image: url('@/assets/clipes-uni-background.png');
  background-repeat: repeat;
  background-size: 365px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2px;
  border: 1px solid #AE2C2A;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%; /* Garante que o container ocupe 100% do espaço disponível */
  box-sizing: border-box; /* Inclui padding e border na largura total */
}

.form-control {
  width: 100%; /* Garante que o input ocupe 100% do container */
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box; /* Inclui padding e border na largura total */
  margin: 0; /* Remove margens que podem causar problemas */
}

/* Ajuste específico para selects que podem ter comportamento diferente */
select.form-control {
  appearance: none; /* Remove a aparência padrão do select */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8.825L1.175 4 2.05 3.125 6 7.075 9.95 3.125 10.825 4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  padding-right: 40px; /* Espaço para o ícone de seta */
}

/* Ajuste para o grid do formulário */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  width: 100%;
}

.form-group {
  margin-bottom: 5px;
  width: 100%; /* Garante que o grupo ocupe 100% do espaço da coluna */
  box-sizing: border-box;
}

/* Ajuste para o formulário */
.partner-form {
  padding: 40px;
  width: 100%;
  box-sizing: border-box;
}

/* Ajuste para o container do formulário */
.form-card {
  width: 100%;
  box-sizing: border-box;
}

/* Ajuste para o checkbox que pode ter problemas de alinhamento */
.custom-checkbox {
  display: flex;
  align-items: flex-start; /* Alinha no topo para textos longos */
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
}

.form-check-input {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  margin-top: 3px; /* Ajusta o alinhamento vertical com o texto */
  flex-shrink: 0; /* Impede que o checkbox encolha */
}

.form-check-label {
  font-size: 0.95rem;
  flex: 1; /* Permite que o texto ocupe o espaço restante */
}

.form-control:focus {
  outline: none;
  border-color: #AE2C2A;
  box-shadow: 0 0 0 2px rgba(174, 44, 42, 0.25);
  background-color: #fff;
}

.terms-group {
  margin: 30px 0;
}

.custom-checkbox {
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.form-check-input {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

.form-check-input:checked {
  background-color: #AE2C2A;
  border-color: #AE2C2A;
}

.form-check-label {
  font-size: 0.95rem;
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

.form-actions {
  text-align: center;
  margin-top: 20px;
}

.btn-submit {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
  border: none;
  padding: 14px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-submit:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.4);
}

.btn-submit:active {
  transform: translateY(-1px);
}

.btn-submit:disabled {
  background: #999;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn-submit i {
  font-size: 1.2rem;
}

.alert {
  margin-top: 30px;
  padding: 15px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 500;
}

.alert i {
  font-size: 1.5rem;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border-left: 5px solid #28a745;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border-left: 5px solid #dc3545;
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
  opacity: 0.3;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: stretch;
  row-gap: 60px;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px 20px 0px 20px;
  text-align: center;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  height: 100%;
}

.benefit-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.benefit-icon i {
  font-size: 2rem;
  color: white;
}

.benefit-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
}

.benefit-card p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin: 0;
}

/* Responsividade */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  section {
    padding: 60px 0;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .form-group.full-width {
    grid-column: span 1;
  }
  
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
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
  
  .partner-form {
    padding: 20px;
  }
  
  .form-header {
    padding: 20px;
    flex-direction: column;
    text-align: center;
  }
  
  .form-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
  
  .form-header h3 {
    font-size: 1.5rem;
  }
  
}

@media (max-width: 576px) {
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
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .custom-checkbox {
    padding: 10px;
  }
  
  .form-check-label {
    font-size: 0.85rem;
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

.benefit-icon {
  animation: float 3s ease-in-out infinite;
}

/* Efeito de pulsação para o botão de envio */
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

.btn-submit:hover {
  animation: pulse 1.5s infinite;
}

/* Efeito de destaque para os campos de formulário em foco */
.input-clip:focus-within {
  box-shadow: 0 0 0 3px rgba(174, 44, 42, 0.3);
}

/* Efeito de transição suave para os alertas */
.alert {
  transition: all 0.5s ease;
  animation: slideInUp 0.5s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
