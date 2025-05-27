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
    
    <!-- Botão com loading -->
    <button 
      type="submit" 
      class="submit-btn"
      :disabled="isSubmitting"
    >
      <span v-if="isSubmitting">
        <i class="fas fa-spinner fa-spin"></i> Enviando...
      </span>
      <span v-else>
        <i class="fas fa-paper-plane"></i> Enviar mensagem
      </span>
    </button>
    
    <!-- Mensagens de sucesso e erro -->
    <div v-if="showSuccessMessage" class="alert alert-success">
      <i class="fas fa-check-circle"></i> Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
    </div>
    
    <div v-if="showErrorMessage" class="alert alert-danger">
      <i class="fas fa-exclamation-circle"></i> Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContatoFormulario',
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
      const input = event.target;
      let value = input.value
        .replace(/\D/g, '') 
        .substring(0, 11);
      
      const formattedValue = value
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
      
      input.value = formattedValue;
      this.formData.telefone = formattedValue;
    },
    
    validatePhoneNumber(phone) {
      const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
      return phonePattern.test(phone);
    },
    
    async handleSubmit() {
      if (!this.validatePhoneNumber(this.formData.telefone)) {
        alert('Número de telefone inválido. Formato esperado: (xx) xxxxx-xxxx');
        return;
      }

      this.isSubmitting = true;
      this.showSuccessMessage = false;
      this.showErrorMessage = false;

      try {
        // Usar Formspree
        const response = await fetch('https://formspree.io/f/xpwdvzzv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.formData.name,
            email: this.formData.email,
            telefone: this.formData.telefone,
            empresa: this.formData.empresa,
            message: `📧 CONTATO - UniHospitalar

👤 DADOS DO CONTATO:
• Nome: ${this.formData.name}
• E-mail: ${this.formData.email}
• Telefone: ${this.formData.telefone}
• Empresa: ${this.formData.empresa}

💬 MENSAGEM:
${this.formData.message}

📅 Data: ${new Date().toLocaleString('pt-BR')}
🌐 Origem: Formulário de Contato - Site UniHospitalar

📞 AÇÃO REQUERIDA: Responder Contato (Responder em até 24h)`,
            _subject: `📧 Novo Contato - ${this.formData.name}`
          }),
        });

        if (response.ok) {
          this.showSuccessMessage = true;
          // Limpar formulário após sucesso
          this.formData = {
            name: '',
            email: '',
            telefone: '',
            empresa: '',
            message: ''
          };
        } else {
          this.showErrorMessage = true;
        }
      } catch (error) {
        console.error('Erro ao enviar o email:', error);
        this.showErrorMessage = true;
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped>
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

/* Botão melhorado */
.submit-btn {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: #FFFFFF;
  margin: 40px 0;
  padding: 14px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.4);
}

.submit-btn:active {
  transform: translateY(-1px);
}

.submit-btn:disabled {
  background: #999;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.submit-btn i {
  font-size: 1.2rem;
}

/* Alertas */
.alert {
  margin-top: 30px;
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

/* Animações */
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

.fa-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsividade */
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .form-group {
    margin-right: 0;
  }
  
  .submit-btn {
    padding: 12px 30px;
    font-size: 1rem;
  }
  
  .terms-notice {
    padding: 15px;
  }
  
  .notice-content {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 512px) {
  .form-group input,
  .form-group textarea {
    font-size: 0.9em;
  }
  
  .submit-btn {
    padding: 10px 25px;
    font-size: 0.9rem;
  }
}

@media (max-width: 350px) {
  .form-group input,
  .form-group textarea {
    font-size: 0.8em;
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

.contact-form .form-row:nth-child(1) .form-group {
  flex: 1;
  min-width: 0;
}
.contact-form .form-row:nth-child(2) .form-group {
  flex: 1;
  min-width: 0;
}
</style>
