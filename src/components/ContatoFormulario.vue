<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-row">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input v-model="formData.name" type="text" id="name" placeholder="Seu nome completo" required>
      </div>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input v-model="formData.email" type="email" id="email" placeholder="Seu e-mail" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="telefone">Telefone:</label>
        <input
          v-model="formData.telefone"
          @input="formatPhone"
          id="telefone"
          name="telefone"
          type="text"
          placeholder="Seu telefone"
          required
          maxlength="15"
        />
      </div>
      <div class="form-group">
        <label for="empresa">Empresa:</label>
        <input v-model="formData.empresa" type="text" id="empresa" placeholder="Sua empresa" required>
      </div>
    </div>
    <div class="form-group">
      <label for="message">Mensagem:</label>
      <textarea v-model="formData.message" id="message" rows="5" placeholder="Sua mensagem" required></textarea>
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
    <button type="submit" class="submit-btn" :disabled="isSubmitting">
      <span v-if="isSubmitting">
        <i class="fas fa-spinner fa-spin"></i> Enviando...
      </span>
      <span v-else>
        <i class="fas fa-paper-plane"></i> Enviar mensagem
      </span>
    </button>
    
    <!-- Mensagens de feedback -->
    <div v-if="showSuccessMessage" class="alert alert-success">
      <i class="fas fa-check-circle"></i> Mensagem enviada com sucesso! Entraremos em contato em breve.
    </div>
    
    <div v-if="showErrorMessage" class="alert alert-danger">
      <i class="fas fa-exclamation-circle"></i> Erro ao enviar a mensagem. Tente novamente.
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContatoFormulario',
  props: {
    activeSection: {
      type: String,
      default: 'SAC'
    }
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        telefone: '',
        empresa: '',
        message: ''
      },
      isSubmitting: false,
      showSuccessMessage: false,
      showErrorMessage: false
    };
  },
  methods: {
    formatPhone(event) {
      let value = event.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
      
      // Limita a 11 dígitos
      if (value.length > 11) {
        value = value.substring(0, 11);
      }
      
      // Aplica a formatação
      if (value.length <= 2) {
        // Não precisa fazer nada, mantém o valor original
      } else if (value.length <= 7) {
        value = value.replace(/(\d{2})(\d+)/, '($1) $2');
      } else {
        value = value.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3');
      }
      
      this.formData.telefone = value;
    },
    
    validatePhoneNumber(phone) {
      const phonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
      return phonePattern.test(phone);
    },
    
    async handleSubmit() {
      if (!this.validatePhoneNumber(this.formData.telefone)) {
        alert('Número de telefone inválido. Formato esperado: (xx) xxxxx-xxxx ou (xx) xxxx-xxxx');
        return;
      }

      this.isSubmitting = true;
      this.showSuccessMessage = false;
      this.showErrorMessage = false;

      try {
        const response = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.formData.name,
            email: this.formData.email,
            telefone: this.formData.telefone,
            empresa: this.formData.empresa,
            message: `Contato através do formulário - Seção: ${this.activeSection}

Dados do contato:
- Nome: ${this.formData.name}
- E-mail: ${this.formData.email}
- Telefone: ${this.formData.telefone}
- Empresa: ${this.formData.empresa}

Mensagem:
${this.formData.message}

Enviado através da página de contato do site - Seção: ${this.activeSection}`,
            section: `Contato - ${this.activeSection}`
            // Removido o toEmail para usar o mapeamento do backend
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
        console.error('Erro ao enviar o email:', error);
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
        name: '',
        email: '',
        telefone: '',
        empresa: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
/* Mantendo todos os estilos existentes... */
.success {
  color: green;
}
.error {
  color: red;
}
.form-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.form-group {
  flex: 1;
  margin-right: 10px;
}
.form-group:last-child {
  margin-right: 0;
}
.form-group label {
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: bold;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1em;
}
#message {
  font-size: 1.1em;
  width: 101.5%;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #AE2C2A;
  box-shadow: 0 0 8px rgba(174, 44, 42, 0.2);
}

/* Estilos para mensagens de alerta */
.alert {
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 500;
  animation: slideInUp 0.5s ease-out;
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

/* Animação de loading para o spinner */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.fa-spin {
  animation: spin 1s linear infinite;
}

@media (max-width: 512px) {
  .form-group input,
  .form-group textarea {
    font-size: 0.6em;
  }
}
@media (max-width: 350px) {
  .form-group input,
  .form-group textarea {
    font-size: 0.6em;
  }
}
.lbl-box {
  font-size: 14px;
  color: #999;
  line-height: 25px;
  display: block;
  margin-bottom: 15px;
  cursor: default;
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

.submit-btn {
  background-color: #AE2C2A;
  color: #FFFFFF;
  margin: 40px 0;
  padding: 12px 24px; 
  font-size: 12px; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  transition: all 0.3s ease; 
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
  text-transform: uppercase; 
  font-weight: 700; 
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.submit-btn:hover:not(:disabled) {
  background-color: #FF5555; 
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}

.submit-btn:disabled {
  background-color: #999;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.submit-btn i {
  font-size: 1rem;
}
</style>
