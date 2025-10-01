<template>
  <div class="contact-form-wrapper">
    <form @submit.prevent="handleSubmit" v-if="!formSubmitted">
      <div class="form-row">
        <div class="form-group">
          <label for="name">{{ t('contact.form.fields.name.label') }} <span class="required">*</span></label>
          <input v-model="formData.name" type="text" id="name" :placeholder="t('contact.form.fields.name.placeholder')" required 
            :class="{ 'error': errors.name }">
          <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
        </div>
        <div class="form-group">
          <label for="email">{{ t('contact.form.fields.email.label') }} <span class="required">*</span></label>
          <input v-model="formData.email" type="email" id="email" :placeholder="t('contact.form.fields.email.placeholder')" required 
            :class="{ 'error': errors.email }">
          <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="telefone">{{ t('contact.form.fields.phone.label') }} <span class="required">*</span></label>
          <input
            v-model="formData.telefone"
            @input="formatPhone"
            id="telefone"
            name="telefone"
            type="text"
            :placeholder="t('contact.form.fields.phone.placeholder')"
            required
            maxlength="15"
            :class="{ 'error': errors.telefone }"
          />
          <div v-if="errors.telefone" class="error-message">{{ errors.telefone }}</div>
        </div>
        <div class="form-group">
          <label for="empresa">{{ t('contact.form.fields.company.label') }} <span class="required">*</span></label>
          <input v-model="formData.empresa" type="text" id="empresa" :placeholder="t('contact.form.fields.company.placeholder')" required 
            :class="{ 'error': errors.empresa }">
          <div v-if="errors.empresa" class="error-message">{{ errors.empresa }}</div>
        </div>
      </div>
      <div class="form-group">
        <label for="message">{{ t('contact.form.fields.message.label') }} <span class="required">*</span></label>
        <textarea v-model="formData.message" id="message" rows="5" :placeholder="t('contact.form.fields.message.placeholder')" required
          :class="{ 'error': errors.message }"></textarea>
        <div v-if="errors.message" class="error-message">{{ errors.message }}</div>
      </div>
      
      <!-- Aviso de Termos -->
      <div class="terms-notice">
        <div class="notice-content">
          <i class="fas fa-info-circle notice-icon"></i>
          <p>
            {{ t('contact.form.termsNotice.text') }}
            <router-link to="/PoliticaPrivacidade" target="_blank" class="terms-link">{{
              t('contact.form.termsNotice.privacyPolicy') }}</router-link>
            {{ t('contact.form.termsNotice.continuation') }}
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
          <i class="fas fa-spinner fa-spin"></i> {{ t('contact.form.buttons.submitting') }}
        </span>
        <span v-else>
          <i class="fas fa-paper-plane"></i> {{ t('contact.form.buttons.submit') }}
        </span>
      </button>
      
      <!-- Mensagem de erro -->
      <div v-if="showErrorMessage" class="alert alert-danger">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>
    </form>

    <!-- Modal de Sucesso -->
    <Teleport to="body">
      <div v-if="formSubmitted" class="success-modal-overlay">
        <div class="success-modal" @click.stop>
        <div class="success-animation">
          <div class="success-icon">
            <i class="fas fa-check-circle"></i>
          </div>
        </div>
        
        <h2>{{ t('contact.form.success.title') }}</h2>
        <p>{{ t('contact.form.success.subtitle') }}</p>
        
        <div class="contact-summary">
          <h3><i class="fas fa-thumbtack pin-icon"></i> {{ t('contact.form.success.summary.title') }}</h3>
  <div class="summary-item">
    <strong>{{ t('contact.form.success.summary.name') }}</strong> <span class="summary-value">{{ submittedData.name }}</span>
  </div>
  <div class="summary-item">
    <strong>{{ t('contact.form.success.summary.email') }}</strong> <span class="summary-value">{{ submittedData.email }}</span>
  </div>
  <div class="summary-item">
    <strong>{{ t('contact.form.success.summary.phone') }}</strong> <span class="summary-value">{{ submittedData.phone }}</span>
  </div>
  <div class="summary-item">
    <strong>{{ t('contact.form.success.summary.company') }}</strong> <span class="summary-value">{{ submittedData.company }}</span>
  </div>
  <div class="summary-item">
    <strong>{{ t('contact.form.success.summary.message') }}</strong> <span class="summary-value">{{ submittedData.message }}</span>
  </div>
</div>
        
        <div class="response-info">
          <div class="info-box">
            <i class="fas fa-clock"></i>
            <span><strong>{{ t('contact.form.success.responseInfo.responseTime.label') }}</strong> {{ t('contact.form.success.responseInfo.responseTime.value') }}</span>
          </div>
          <div class="info-box">
            <i class="fas fa-envelope"></i>
            <span><strong>{{ t('contact.form.success.responseInfo.confirmationEmail.label') }}</strong> {{ t('contact.form.success.responseInfo.confirmationEmail.value', { email: submittedData.email }) }}</span>
          </div>
        </div>
        
        <div class="modal-actions">
          <button @click="closeModal" class="btn-close">
            <i class="fas fa-check"></i>
            {{ t('contact.form.success.buttons.understood') }}
          </button>
          <button @click="sendAnotherMessage" class="btn-new-message">
            <i class="fas fa-plus"></i>
            {{ t('contact.form.success.buttons.sendAnother') }}
          </button>
        </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { useContactTranslation } from '@/composables/useContactTranslation.js';

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
      showErrorMessage: false,
      errorMessage: '',
      errors: {},
      formSubmitted: false,
      submittedData: {}
    };
  },
  setup() {
    const { t, currentLanguage } = useContactTranslation()
    
    return {
      t,
      currentLanguage
    }
  },
  methods: {
    // Método para obter URL da API dinamicamente
    getApiUrl() {
      // Se estivermos em desenvolvimento local
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:3000'
      }
      
      // URL de produção do backend no Render
      return 'https://unihospitalar-backend.onrender.com'
    },

    validateForm() {
      this.errors = {};

      if (!this.formData.name || this.formData.name.trim().length < 2) {
        this.errors.name = this.t('contact.form.validation.name');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email || !emailRegex.test(this.formData.email)) {
        this.errors.email = this.t('contact.form.validation.email');
      }

      if (!this.formData.telefone || !this.validatePhoneNumber(this.formData.telefone)) {
        this.errors.telefone = this.t('contact.form.validation.phone');
      }

      if (!this.formData.empresa || this.formData.empresa.trim().length < 2) {
        this.errors.empresa = this.t('contact.form.validation.company');
      }

      if (!this.formData.message || this.formData.message.trim().length < 10) {
        this.errors.message = this.t('contact.form.validation.message');
      }

      return Object.keys(this.errors).length === 0;
    },

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
      
      // Limpar erro ao digitar
      if (this.errors.telefone) {
        delete this.errors.telefone;
      }
    },
    
    validatePhoneNumber(phone) {
      const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
      return phonePattern.test(phone);
    },
    
    async handleSubmit() {
  if (!this.validateForm()) {
    this.$nextTick(() => {
      const firstError = this.$el.querySelector('.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    return;
  }

  this.isSubmitting = true;
  this.showErrorMessage = false;
  this.errorMessage = '';

  try {
    const apiUrl = this.getApiUrl();
    
    // Preparar dados para envio
    const contactData = {
      name: this.formData.name.trim(),
      email: this.formData.email.trim(),
      phone: this.formData.telefone.trim(),
      company: this.formData.empresa.trim(),
      message: this.formData.message.trim(),
      activeSection: this.activeSection
    };

    const response = await fetch(`${apiUrl}/api/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Erro ao enviar contato');
    }

    // Guardar dados para exibir no modal
    this.submittedData = {
      name: contactData.name,
      email: contactData.email,
      phone: contactData.phone,
      company: contactData.company,
      message: contactData.message
    };
    
    // Mostrar modal de sucesso
    this.formSubmitted = true;
    this.isSubmitting = false;
    
    // Scroll imediato para o topo
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    // Desabilitar scroll do body
    document.body.classList.add('modal-open');

  } catch (error) {
    this.showErrorMessage = true;
    this.errorMessage = error.message;
    this.isSubmitting = false;
  }
},

    closeModal() {
      this.formSubmitted = false;
      this.submittedData = {};
      
      // Reabilitar scroll do body
      document.body.classList.remove('modal-open');
      
      // Resetar formulário
      this.formData = {
        name: '',
        email: '',
        telefone: '',
        empresa: '',
        message: ''
      };
    },

    sendAnotherMessage() {
      this.formSubmitted = false;
      this.submittedData = {};
      
      // Reabilitar scroll do body
      document.body.classList.remove('modal-open');
      
      // Manter dados do formulário para nova mensagem
      this.formData.message = '';
    }
  },

  // Watchers para limpar erros
  watch: {
    'formData.name'() {
      if (this.errors.name) delete this.errors.name;
    },
    'formData.email'() {
      if (this.errors.email) delete this.errors.email;
    },
    'formData.empresa'() {
      if (this.errors.empresa) delete this.errors.empresa;
    },
    'formData.message'() {
      if (this.errors.message) delete this.errors.message;
    }
  },

  // Limpar classe modal-open quando componente for destruído
  beforeUnmount() {
    document.body.classList.remove('modal-open');
  }
};
</script>

<style scoped>
/* Desabilitar scroll quando modal está aberto */
:global(body.modal-open) {
  overflow: hidden !important;
}

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

.required {
  color: #dc3545;
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

.form-group input.error,
.form-group textarea.error {
  border-color: #dc3545;
  background-color: #fff5f5;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 5px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
}

.error-message::before {
  content: '⚠';
  font-size: 1rem;
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
  margin: 20px 0;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #AE2C2A;
}

.notice-content {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.notice-icon {
  color: #AE2C2A;
  font-size: 1.1rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.notice-content p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #696969;
}

.terms-link {
  color: #AE2C2A;
  text-decoration: none;
  font-weight: 600;
}

.terms-link:hover {
  text-decoration: underline;
  color: #ff5555;
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

.submit-btn:hover:not(:disabled) {
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

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border-left: 5px solid #dc3545;
}

/* Modal de Sucesso */
.success-modal-overlay {
    position: fixed !important;
    z-index: 999999 !important;
    left: 0 !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    background-color: rgba(0, 0, 0, 0.9) !important;
    backdrop-filter: blur(8px) !important;
    animation: fadeIn 0.3s ease-out;
    overflow: hidden !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin: 0 !important;
    padding: 0 !important;
}

.success-modal {
    background-color: #fefefe !important;
    margin: 2% auto !important;
    padding: 10px 40px 40px 40px !important;
    border: none !important;
    width: 90% !important;
    max-width: 600px !important;
    max-height: 95vh !important;
    border-radius: 20px !important;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;
    animation: slideIn 0.3s ease-out !important;
    display: flex !important;
    flex-direction: column !important;
    overflow-y: auto !important;
    text-align: center !important;
    position: relative !important;
}

.success-animation {
  padding: 40px 30px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-width: 120px;     /* Impede encolhimento horizontal */
  min-height: 120px;    /* Impede encolhimento vertical */
  flex-shrink: 0;       /* Impede encolhimento se dentro de flex container */
}

.success-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #28a745, #20c997);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 3rem;
  color: white;
  animation: successPulse 2s infinite;
}

@keyframes successPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 20px rgba(40, 167, 69, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
  }
}

.success-modal h2 {
  color: #28a745;
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.success-modal > p {
  color: #6c757d;
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.6;
}

.contact-summary {
  background-color: #f8f9fa;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 12px;
  border-left: 4px solid #AE2C2A;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-size: 0.95rem;
}

.pin-icon {
  color: #AE2C2A;
  margin-right: 8px;
  transform: rotate(-45deg);
}

.contact-summary h3 {
  color: #AE2C2A;
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 2px solid #AE2C2A;
}

.summary-item {
  padding: 10px 0;
  border-bottom: 1px solid #dee2e6;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
}

.summary-item:last-child {
  border-bottom: none;
}

.summary-item strong {
  width: 120px;
  color: #343a40;
  font-weight: 600;
}

.summary-item::after {
  content: '';
  flex-grow: 1;
}

.summary-value {
  font-weight: 500;
  background-color: #ffecec;
  color: #AE2C2A;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 6px;
  display: inline-block;
  max-width: 100%;
  word-break: break-word;
  box-shadow: inset 0 0 0 1px #dee2e6;
}

.response-info {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid #28a745;
  word-break: break-word;
}

.info-box {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  font-size: 0.95rem;
  color: #155724;
}

.info-box:last-child {
  margin-bottom: 0;
}

.info-box i {
  color: #28a745;
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
}

.modal-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
}

.btn-close,
.btn-new-message {
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
}

.btn-close {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
}

.btn-close:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(40, 167, 69, 0.3);
}

.btn-new-message {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
}

.btn-new-message:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(174, 44, 42, 0.3);
}

/* Scrollbar personalizada para o modal */
.success-modal::-webkit-scrollbar {
  width: 8px;
}

.success-modal::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.success-modal::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  border-radius: 10px;
  transition: background 0.3s ease;
}

.success-modal::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #ff5555, #AE2C2A);
}

/* Para Firefox */
.success-modal {
  scrollbar-width: thin;
  scrollbar-color: #AE2C2A #f1f1f1;
}

/* Modal responsivo - evita scroll em telas maiores */
@media (min-height: 800px) {
  .success-modal {
    max-height: 700px;
    overflow-y: visible;
  }
}

@media (min-height: 900px) {
  .success-modal {
    max-height: 800px;
    overflow-y: visible;
  }
}

@media (max-height: 650px) {
  .success-modal {
    max-height: 75vh;
    overflow-y: auto;
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

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animações */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
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

  .success-modal {
    padding: 30px 20px;
    margin: 20px;
  }

  .success-modal h2 {
    font-size: 1.7rem;
  }

  .modal-actions {
    flex-direction: column;
  }

  .btn-close,
  .btn-new-message {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 578px) {
  .summary-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .summary-value {
    margin-left: 0;
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

  .success-modal {
    padding: 25px 15px;
    border-radius: 15px;
  }

  .success-icon {
    width: 80px;
    height: 80px;
    font-size: 2.5rem;
  }

  .success-modal h2 {
    font-size: 1.5rem;
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
