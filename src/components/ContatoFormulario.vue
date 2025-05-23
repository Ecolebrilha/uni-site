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
    <button type="submit" class="submit-btn">Enviar mensagem</button>
  </form>
</template>

<script>
import axios from 'axios';

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
      }
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

      try {
        const response = await axios.post('http://localhost:3000/send-email', this.formData);
        alert('Mensagem enviada com sucesso!');
        console.log('Resposta do servidor:', response);
        this.formData = {
          name: '',
          email: '',
          telefone: '',
          empresa: '',
          message: ''
        };
      } catch (error) {
        alert('Erro ao enviar a mensagem. Tente novamente.');
        console.error('Erro ao enviar o email:', error);
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
}
.submit-btn:hover {
  background-color: #FF5555; 
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}

.terms-group {
  margin: 30px 0 10px 0;
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
  margin-top: 0;
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
  bottom: -2px;
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

.error-message {
  display: block;
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 8px;
  margin-left: 30px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .terms-group {
    padding: 12px;
  }
  
  .terms-label {
    font-size: 0.9rem;
  }
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
