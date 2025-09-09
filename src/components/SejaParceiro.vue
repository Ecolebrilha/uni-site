<template>
  <div class="parceiros-page">
    <HomeHeader />

    <!-- Hero Section com Efeito Parallax -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="overlay"></div>
        <h1 class="hero-title">{{ t('partner.heroTitle') }}</h1>
        <div class="hero-subtitle">{{ t('partner.heroSubtitle') }}</div>
      </div>
    </section>

    <!-- Seção Principal de Cadastro -->
    <section class="partner-main">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title">
            <span class="accent-line"></span>
            <h2>{{ t('partner.introTitle') }}</h2>
            <span class="accent-line"></span>
          </div>
          <p class="intro-text">
            {{ t('partner.introText') }}
          </p>
        </ScrollReveal>

        <div class="form-container">
          <ScrollReveal direction="up" :delay="200">
            <div class="form-card">
              <div class="form-header">
                <div class="form-icon">
                  <i class="fas fa-handshake"></i>
                </div>
                <h3>{{ t('partner.form.title') }}</h3>
              </div>

              <form @submit.prevent="submitForm" class="partner-form" v-if="!partnerSubmitted">
                <div class="form-grid">

                  <!-- CNPJ -->
                  <div class="form-group">
                    <label for="cnpj">{{ t('partner.form.fields.cnpj.label') }}</label>
                    <div class="input-clip" :class="{ 'loading': isLoadingCNPJ }">
                      <input type="text" id="cnpj" v-model="formData.cnpj" class="form-control"
                        :placeholder="t('partner.form.fields.cnpj.placeholder')" @input="formatCNPJ" @blur="buscarCNPJ"
                        maxlength="18" required />
                      <div v-if="isLoadingCNPJ" class="loading-spinner">
                        <i class="fas fa-spinner fa-spin"></i>
                      </div>
                    </div>
                    <div v-if="cnpjError" class="field-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      {{ cnpjError }}
                    </div>
                  </div>

                  <!-- Nome/Razão Social -->
                  <div class="form-group">
                    <label for="nomeRazaoSocial">{{ t('partner.form.fields.companyName.label') }}</label>
                    <div class="input-clip">
                      <input type="text" id="nomeRazaoSocial" v-model="formData.nomeRazaoSocial" class="form-control"
                        :placeholder="t('partner.form.fields.companyName.placeholder')" required />
                    </div>
                  </div>

                  <!-- UF -->
                  <div class="form-group">
                    <label for="uf">{{ t('partner.form.fields.state.label') }}</label>
                    <div class="input-clip">
                      <select id="uf" v-model="formData.uf" class="form-control" required>
                        <option value="" disabled selected>{{ t('partner.form.fields.state.placeholder') }}</option>
                        <option v-for="estado in estados" :key="estado.code" :value="estado.code">
                          {{ estado.name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <!-- Tipo de Parceiro -->
                  <div class="form-group">
                    <label for="tipoParceiro">Tipo de Parceiro</label>
                    <div class="input-clip">
                      <select id="tipoParceiro" v-model="formData.tipoParceiro" class="form-control" required
                        @change="resetRamoAtuacao">
                        <option value="" disabled selected>Selecione o tipo de parceiro</option>
                        <option value="TRANSPORTADORA">Transportadora</option>
                        <option value="CLIENTE">Cliente</option>
                        <option value="FORNECEDOR">Fornecedor</option>
                      </select>
                    </div>
                  </div>

                  <!-- Ramo de Atuação -->
                  <div class="form-group">
                    <label for="ramoAtuacao">{{ t('partner.form.fields.businessArea.label') }}</label>
                    <div class="input-clip">
                      <select id="ramoAtuacao" v-model="formData.ramoAtuacao" class="form-control"
                        :class="{ 'readonly-style': !formData.tipoParceiro }" :disabled="!formData.tipoParceiro"
                        required>
                        <option value="" disabled selected>
                          {{ formData.tipoParceiro ? t('partner.form.fields.businessArea.placeholder') : 'Selecione primeiro o tipo de parceiro' }}
                        </option>
                        <option v-for="ramo in ramosAtuacaoFiltrados" :key="ramo" :value="ramo">
                          {{ ramo }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="form-group">
                    <label for="email">{{ t('partner.form.fields.email.label') }}</label>
                    <div class="input-clip">
                      <input type="email" id="email" v-model="formData.email" class="form-control"
                        :placeholder="t('partner.form.fields.email.placeholder')" required />
                    </div>
                  </div>

                  <!-- Celular -->
                  <div class="form-group">
                    <label for="celular">{{ t('partner.form.fields.mobile.label') }}</label>
                    <div class="input-clip">
                      <input type="text" id="celular" v-model="formData.celular" class="form-control"
                        :placeholder="t('partner.form.fields.mobile.placeholder')" @input="formatCelular" maxlength="15"
                        :required="!formData.telefoneFixo" />
                    </div>
                  </div>

                  <!-- Telefone Fixo -->
                  <div class="form-group">
                    <label for="telefoneFixo">{{ t('partner.form.fields.phone.label') }}</label>
                    <div class="input-clip">
                      <input type="text" id="telefoneFixo" v-model="formData.telefoneFixo" class="form-control"
                        :placeholder="t('partner.form.fields.phone.placeholder')" @input="formatTelefoneFixo"
                        maxlength="14" :required="!formData.celular" />
                    </div>
                  </div>

                  <!-- Endereço -->
                  <div class="form-group">
                    <label for="endereco">{{ t('partner.form.fields.address.label') }}</label>
                    <div class="input-clip">
                      <input type="text" id="endereco" v-model="formData.endereco" class="form-control"
                        :placeholder="t('partner.form.fields.address.placeholder')" readonly />
                    </div>
                    <small class="field-help">
                      <i class="fas fa-info-circle"></i>
                      {{ t('partner.form.fields.address.help') }}
                    </small>
                  </div>

                  <!-- Seção de Upload de Documentos -->
                  <div class="form-group full-width" v-if="formData.tipoParceiro === 'CLIENTE'">
                    <label>{{ t('partner.form.documents.title') }} <span class="required"></span></label>
                    <div class="upload-info">
                      <i class="fas fas fa-paperclip"></i>
                      <small>{{ t('partner.form.documents.info') }}</small>
                    </div>
                    <div class="upload-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>{{ t('partner.form.documents.warning') }}</span>
                    </div>
                    <div class="file-upload-area documents-upload">
                      <!-- Inputs de arquivo ocultos -->
                      <input type="file" ref="cnpjFileInput" @change="handleDocumentUpload('cnpj', $event)"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style="display: none;">
                      <input type="file" ref="crfFileInput" @change="handleDocumentUpload('crf', $event)"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style="display: none;">
                      <input type="file" ref="contatoCompradorFileInput"
                        @change="handleDocumentUpload('contatoComprador', $event)"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style="display: none;">
                      <input type="file" ref="contatoFinanceiroFileInput"
                        @change="handleDocumentUpload('contatoFinanceiro', $event)"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style="display: none;">
                      <input type="file" ref="alvaraFileInput" @change="handleDocumentUpload('alvara', $event)"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style="display: none;">
                      <input type="file" ref="contratoSocialFileInput"
                        @change="handleDocumentUpload('contratoSocial', $event)"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style="display: none;">

                      <div class="upload-buttons-grid">
                        <div class="document-upload-button"
                          :class="{ 'uploaded': documents.cnpj, 'error': errors.cnpj }"
                          @click="triggerDocumentUpload('cnpj')">
                          <div class="button-content">
                            <i class="fas fa-file-alt"></i>
                            <span class="button-label">{{ t('partner.form.documents.cnpj') }}</span>
                            <span v-if="documents.cnpj" class="file-name">{{ documents.cnpj.name }}</span>
                          </div>
                          <button v-if="documents.cnpj" type="button" @click.stop="removeDocument('cnpj')"
                            class="remove-doc-btn">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>

                        <div class="document-upload-button" :class="{ 'uploaded': documents.crf, 'error': errors.crf }"
                          @click="triggerDocumentUpload('crf')">
                          <div class="button-content">
                            <i class="fas fa-file-contract"></i>
                            <span class="button-label">{{ t('partner.form.documents.crf') }}</span>
                            <span v-if="documents.crf" class="file-name">{{ documents.crf.name }}</span>
                          </div>
                          <button v-if="documents.crf" type="button" @click.stop="removeDocument('crf')"
                            class="remove-doc-btn">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>

                        <div class="document-upload-button"
                          :class="{ 'uploaded': documents.contatoComprador, 'error': errors.contatoComprador }"
                          @click="triggerDocumentUpload('contatoComprador')">
                          <div class="button-content">
                            <i class="fas fa-user-tie"></i>
                            <span class="button-label">{{ t('partner.form.documents.contatoComprador') }}</span>
                            <span v-if="documents.contatoComprador" class="file-name">{{ documents.contatoComprador.name
                              }}</span>
                          </div>
                          <button v-if="documents.contatoComprador" type="button"
                            @click.stop="removeDocument('contatoComprador')" class="remove-doc-btn">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>

                        <div class="document-upload-button"
                          :class="{ 'uploaded': documents.contatoFinanceiro, 'error': errors.contatoFinanceiro }"
                          @click="triggerDocumentUpload('contatoFinanceiro')">
                          <div class="button-content">
                            <i class="fas fa-coins"></i>
                            <span class="button-label">{{ t('partner.form.documents.contatoFinanceiro') }}</span>
                            <span v-if="documents.contatoFinanceiro" class="file-name">{{
                              documents.contatoFinanceiro.name }}</span>
                          </div>
                          <button v-if="documents.contatoFinanceiro" type="button"
                            @click.stop="removeDocument('contatoFinanceiro')" class="remove-doc-btn">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>

                        <div class="document-upload-button"
                          :class="{ 'uploaded': documents.alvara, 'error': errors.alvara }"
                          @click="triggerDocumentUpload('alvara')">
                          <div class="button-content">
                            <i class="fas fa-gavel"></i>
                            <span class="button-label">{{ t('partner.form.documents.alvara') }}</span>
                            <span v-if="documents.alvara" class="file-name">{{ documents.alvara.name }}</span>
                          </div>
                          <button v-if="documents.alvara" type="button" @click.stop="removeDocument('alvara')"
                            class="remove-doc-btn">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>

                        <div class="document-upload-button"
                          :class="{ 'uploaded': documents.contratoSocial, 'error': errors.contratoSocial }"
                          @click="triggerDocumentUpload('contratoSocial')">
                          <div class="button-content">
                            <i class="fas fa-handshake"></i>
                            <span class="button-label">{{ t('partner.form.documents.contratoSocial') }}</span>
                            <span v-if="documents.contratoSocial" class="file-name">{{ documents.contratoSocial.name
                              }}</span>
                          </div>
                          <button v-if="documents.contratoSocial" type="button"
                            @click.stop="removeDocument('contratoSocial')" class="remove-doc-btn">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                      </div>

                    </div>
                    <div v-if="hasDocumentErrors" class="error-message">
                      <i class="fas fa-exclamation-circle animated-icon"></i>
                      {{ t('partner.form.documents.error') }}
                    </div>
                  </div>
                </div>

                <!-- Aviso de Termos -->
                <div class="terms-notice">
                  <div class="notice-content">
                    <i class="fas fa-info-circle notice-icon"></i>
                    <p>
                      {{ t('partner.form.termsNotice.text') }}
                      <router-link to="/PoliticaPrivacidade" target="_blank" class="terms-link">{{
                        t('partner.form.termsNotice.privacyPolicy') }}</router-link>
                      {{ t('partner.form.termsNotice.continuation') }}
                    </p>
                  </div>
                </div>

                <div class="form-actions">
                  <button type="submit" class="btn-submit" :disabled="isSubmitting">
                    <span v-if="isSubmitting">
                      <i class="fas fa-spinner fa-spin"></i> {{ t('partner.form.submitButton.loading') }}
                    </span>
                    <span v-else>
                      <i class="fas fa-paper-plane"></i> {{ t('partner.form.submitButton.default') }}
                    </span>
                  </button>
                </div>
              </form>

              <!-- Success Section -->
              <div v-if="partnerSubmitted" class="success-section">
                <div class="success-card">
                  <div class="success-animation">
                    <div class="success-icon">
                      <i class="fas fa-check-circle"></i>
                    </div>
                  </div>

                  <h2>{{ t('partner.form.messages.success') }}</h2>

                  <div class="submission-details">
                    <h3><i class="fas fa-clipboard-check"></i> Detalhes da Solicitação</h3>

                    <div class="details-grid">
                      <div class="detail-item">
                        <div class="detail-icon">
                          <i class="fas fa-building"></i>
                        </div>
                        <div class="detail-content">
                          <span class="detail-label">Empresa</span>
                          <span class="detail-value">{{ submissionData.companyName }}</span>
                        </div>
                      </div>

                      <div class="detail-item">
                        <div class="detail-icon">
                          <i class="fas fa-file-alt"></i>
                        </div>
                        <div class="detail-content">
                          <span class="detail-label">CNPJ</span>
                          <span class="detail-value">{{ submissionData.cnpj }}</span>
                        </div>
                      </div>

                      <div class="detail-item">
                        <div class="detail-icon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div class="detail-content">
                          <span class="detail-label">Email</span>
                          <span class="detail-value">{{ submissionData.email }}</span>
                        </div>
                      </div>

                      <div class="detail-item">
                        <div class="detail-icon">
                          <i class="fas fa-paperclip"></i>
                        </div>
                        <div class="detail-content">
                          <span class="detail-label">Documentos</span>
                          <span class="detail-value">{{ submissionData.documentsCount }} documento(s) enviado(s)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="next-steps">
                    <h3><i class="fas fa-route"></i> Próximos Passos</h3>
                    <div class="steps-grid">
                      <div class="step-item">
                        <div class="step-icon">
                          <i class="fas fa-search"></i>
                        </div>
                        <div class="step-content">
                          <span class="step-title">Análise</span>
                          <span class="step-description">Nossa equipe comercial analisará sua solicitação</span>
                        </div>
                      </div>

                      <div class="step-item">
                        <div class="step-icon">
                          <i class="fas fa-clock"></i>
                        </div>
                        <div class="step-content">
                          <span class="step-title">Contato</span>
                          <span class="step-description">Entraremos em contato em até <strong>72 horas
                              úteis</strong></span>
                        </div>
                      </div>

                      <div class="step-item">
                        <div class="step-icon">
                          <i class="fas fa-envelope-open"></i>
                        </div>
                        <div class="step-content">
                          <span class="step-title">Atualizações</span>
                          <span class="step-description">Você receberá todas as atualizações por email</span>
                        </div>
                      </div>

                      <div class="step-item">
                        <div class="step-icon">
                          <i class="fas fa-user-check"></i>
                        </div>
                        <div class="step-content">
                          <span class="step-title">Dados Atualizados</span>
                          <span class="step-description">Mantenha seus dados de contato atualizados</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="contact-info">
                    <div class="info-icon">
                      <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="info-content">
                      <h4>Importante</h4>
                      <p>Todas as comunicações sobre o processo de parceria serão enviadas para o email informado.
                        Verifique regularmente sua caixa de entrada e pasta de spam.</p>
                    </div>
                  </div>

                  <div class="success-actions">
                    <router-link to="/" class="btn-primary">
                      <i class="fas fa-home"></i>
                      Página Inicial
                    </router-link>
                  </div>
                </div>
              </div>

              <div v-else-if="showErrorMessage" class="alert alert-danger">
                <i class="fas fa-exclamation-circle"></i> {{ t('partner.form.messages.error') }}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Seção de Benefícios -->
    <!-- <section class="benefits-section">
      <div class="container">
        <ScrollReveal direction="bottom" :delay="100">
          <div class="section-title light">
            <span class="accent-line"></span>
            <h2>{{ t('partner.benefits.title') }}</h2>
            <span class="accent-line"></span>
          </div>
        </ScrollReveal>

        <div class="benefits-grid">
          <ScrollReveal direction="left" :delay="200">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i :class="t('partner.benefits.logistics.icon')"></i>
              </div>
              <h3>{{ t('partner.benefits.logistics.title') }}</h3>
              <p>{{ t('partner.benefits.logistics.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" :delay="300">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i :class="t('partner.benefits.quality.icon')"></i>
              </div>
              <h3>{{ t('partner.benefits.quality.title') }}</h3>
              <p>{{ t('partner.benefits.quality.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="200">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i :class="t('partner.benefits.relationship.icon')"></i>
              </div>
              <h3>{{ t('partner.benefits.relationship.title') }}</h3>
              <p>{{ t('partner.benefits.relationship.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" :delay="400">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i :class="t('partner.benefits.growth.icon')"></i>
              </div>
              <h3>{{ t('partner.benefits.growth.title') }}</h3>
              <p>{{ t('partner.benefits.growth.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" :delay="500">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i :class="t('partner.benefits.support.icon')"></i>
              </div>
              <h3>{{ t('partner.benefits.support.title') }}</h3>
              <p>{{ t('partner.benefits.support.description') }}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="400">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i :class="t('partner.benefits.certifications.icon')"></i>
              </div>
              <h3>{{ t('partner.benefits.certifications.title') }}</h3>
              <p>{{ t('partner.benefits.certifications.description') }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section> -->

    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import { useOurPartnerTranslation } from '@/composables/useOurPartnerTranslation.js';

export default {
  name: 'SejaParceiro',
  components: {
    HomeHeader,
    HomeFooter
  },
  setup() {
    const { t, currentLanguage } = useOurPartnerTranslation()

    return {
      t,
      currentLanguage
    }
  },
  data() {
    return {
      formData: {
        nomeRazaoSocial: '',
        uf: '',
        tipoParceiro: '',
        ramoAtuacao: '',
        cnpj: '',
        email: '',
        celular: '',
        telefoneFixo: '',
        endereco: ''
      },
      documents: {
        cnpj: null,
        crf: null,
        contatoComprador: null,
        contatoFinanceiro: null,
        alvara: null,
        contratoSocial: null
      },
      errors: {},
      maxFileSize: 10 * 1024 * 1024, // 10MB
      isSubmitting: false,
      showSuccessMessage: false,
      showErrorMessage: false,
      isLoadingCNPJ: false,
      cnpjError: '',
      partnerSubmitted: false,
      submissionData: {}
    };
  },
  computed: {
    estados() {
      return this.t('partner.form.states') || []
    },
    ramosAtuacao() {
      return this.t('partner.form.businessAreas') || []
    },
    ramosAtuacaoFiltrados() {
      if (!this.formData.tipoParceiro) {
        return []
      }

      const ramosPorTipo = {
        'TRANSPORTADORA': [
          'Transporte de Cargas',
          'Logística',
          'Transporte Expresso',
          'Transporte Refrigerado',
          'Transporte de Veículos',
          'Mudanças e Fretes'
        ],
        'CLIENTE': [
          'Hospital',
          'Clínica',
          'Laboratório',
          'Farmácia',
          'Distribuidora',
          'Órgão Público',
          'Empresa Privada',
          'ONG',
          'Cooperativa'
        ],
        'FORNECEDOR': [
          'Equipamentos Médicos',
          'Medicamentos',
          'Material Hospitalar',
          'Tecnologia da Informação',
          'Serviços de Manutenção',
          'Consultoria',
          'Alimentos e Bebidas',
          'Produtos de Limpeza'
        ]
      }

      return ramosPorTipo[this.formData.tipoParceiro] || []
    },
    hasDocumentErrors() {
      // Só mostra erros de documentos se for CLIENTE
      if (this.formData.tipoParceiro !== 'CLIENTE') {
        return false
      }
      return this.errors.cnpj || this.errors.crf || this.errors.contatoComprador ||
        this.errors.contatoFinanceiro || this.errors.alvara || this.errors.contratoSocial
    },
    allDocumentsUploaded() {
      return Object.values(this.documents).every(doc => doc !== null)
    }
  },
  methods: {
    resetRamoAtuacao() {
      // Reseta o campo de ramo de atuação quando o tipo de parceiro muda
      this.formData.ramoAtuacao = '';
    },
    getBrazilianTimeNative() {
      return new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    },
    // Formatar CNPJ
    formatCNPJ(event) {
      let value = event.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito

      // Limita a 14 dígitos
      if (value.length > 14) {
        value = value.substring(0, 14);
      }

      // Aplica a formatação
      if (value.length <= 2) {
        // Mantém o valor original
      } else if (value.length <= 5) {
        value = value.replace(/(\d{2})(\d+)/, '$1.$2');
      } else if (value.length <= 8) {
        value = value.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2.$3');
      } else if (value.length <= 12) {
        value = value.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, '$1.$2.$3/$4');
      } else {
        value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, '$1.$2.$3/$4-$5');
      }

      this.formData.cnpj = value;
    },

    // Formatar Celular
    formatCelular(event) {
      let value = event.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito

      // Limita a 11 dígitos
      if (value.length > 11) {
        value = value.substring(0, 11);
      }

      // Aplica a formatação
      if (value.length <= 2) {
        // Mantém o valor original
      } else if (value.length <= 7) {
        value = value.replace(/(\d{2})(\d+)/, '($1) $2');
      } else {
        value = value.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3');
      }

      this.formData.celular = value;
    },

    // Formatar Telefone Fixo
    formatTelefoneFixo(event) {
      let value = event.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito

      // Limita a 10 dígitos
      if (value.length > 10) {
        value = value.substring(0, 10);
      }

      // Aplica a formatação
      if (value.length <= 2) {
        // Mantém o valor original
      } else if (value.length <= 6) {
        value = value.replace(/(\d{2})(\d+)/, '($1) $2');
      } else {
        value = value.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
      }

      this.formData.telefoneFixo = value;
    },

    // Métodos para upload de documentos
    triggerDocumentUpload(documentType) {
      // Se já tem documento, não permite upload de novo (só remoção)
      if (this.documents[documentType]) {
        return
      }

      const inputRef = `${documentType}FileInput`
      this.$refs[inputRef].click()
    },

    handleDocumentUpload(documentType, event) {
      const file = event.target.files[0]
      if (!file) return

      // Validar arquivo
      if (!this.validateFile(file)) {
        event.target.value = '' // Limpar input
        return
      }

      // Armazenar documento
      this.documents[documentType] = file

      // Limpar erro se existir
      if (this.errors[documentType]) {
        delete this.errors[documentType]
      }

      // Mostrar feedback de sucesso
      this.showUploadSuccess(documentType, file.name)

      // Limpar input
      event.target.value = ''
    },

    removeDocument(documentType) {
      const fileName = this.documents[documentType]?.name
      this.documents[documentType] = null

      if (fileName) {
        this.showRemoveSuccess(documentType, fileName)
      }
    },

    validateFile(file) {
      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/jpg',
        'image/png'
      ]

      // Verificar tipo de arquivo
      if (!validTypes.includes(file.type)) {
        alert(`Arquivo ${file.name} não é um tipo válido. Use PDF, DOC, DOCX, JPG, JPEG ou PNG.`)
        return false
      }

      // Verificar tamanho do arquivo
      if (file.size > this.maxFileSize) {
        alert(`Arquivo ${file.name} é muito grande. Máximo 10MB.`)
        return false
      }

      return true
    },

    showUploadSuccess(documentType, fileName) {
      const documentLabels = {
        cnpj: 'Cartão CNPJ',
        crf: 'Certificado de Regularidade do FGTS',
        contatoComprador: 'Contato do Comprador',
        contatoFinanceiro: 'Contato do Financeiro',
        alvara: 'Alvará de Funcionamento',
        contratoSocial: 'Contrato Social'
      }

      const message = `Documento "${documentLabels[documentType]}" (${fileName}) anexado com sucesso!`

      const notification = document.createElement('div')
      notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: 600;
            animation: slideInRight 0.3s ease-out;
            max-width: 400px;
            word-wrap: break-word;
        ">
            <i class="fas fa-check-circle"></i> ${message}
        </div>
      `

      document.body.appendChild(notification)
      setTimeout(() => notification.remove(), 3000)
    },

    showRemoveSuccess(documentType, fileName) {
      const documentLabels = {
        cnpj: 'Cartão CNPJ',
        crf: 'Certificado de Regularidade do FGTS',
        contatoComprador: 'Contato do Comprador',
        contatoFinanceiro: 'Contato do Financeiro',
        alvara: 'Alvará de Funcionamento',
        contratoSocial: 'Contrato Social'
      }

      const message = `Documento "${documentLabels[documentType]}" (${fileName}) removido com sucesso!`

      const notification = document.createElement('div')
      notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #dc3545;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: 600;
            animation: slideInRight 0.3s ease-out;
        ">
            <i class="fas fa-trash-alt"></i> ${message}
        </div>
      `

      document.body.appendChild(notification)
      setTimeout(() => notification.remove(), 3000)
    },

    // Valida se o CNPJ tem formato correto
    validarCNPJ(cnpj) {
      cnpj = cnpj.replace(/[^\d]+/g, '');

      if (cnpj.length !== 14) return false;

      // Elimina CNPJs inválidos conhecidos
      if (/^(\d)\1{13}$/.test(cnpj)) return false;

      // Valida DVs
      let tamanho = cnpj.length - 2;
      let numeros = cnpj.substring(0, tamanho);
      let digitos = cnpj.substring(tamanho);
      let soma = 0;
      let pos = tamanho - 7;

      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
      }

      let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(0)) return false;

      tamanho = tamanho + 1;
      numeros = cnpj.substring(0, tamanho);
      soma = 0;
      pos = tamanho - 7;

      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
      }

      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(1)) return false;

      return true;
    },

    async buscarCNPJ() {
      if (!this.formData.cnpj || this.formData.cnpj.length !== 18) {
        return;
      }

      // Remove formatação para validação e consulta
      const cnpjLimpo = this.formData.cnpj.replace(/[^\d]+/g, '');

      // Valida CNPJ
      if (!this.validarCNPJ(cnpjLimpo)) {
        this.cnpjError = this.t('partner.form.messages.cnpjError');
        this.formData.endereco = '';
        this.formData.nomeRazaoSocial = '';
        return;
      }

      this.cnpjError = '';
      this.isLoadingCNPJ = true;

      try {
        // Primeira tentativa: API BrasilAPI
        let response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjLimpo}`);
        if (!response.ok) {
          // Segunda tentativa: API ReceitaWS (backup)
          response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpjLimpo}`);
        }

        if (response.ok) {
          const data = await response.json();

          // Verifica se a empresa está ativa
          if (data.status && data.status !== 'OK') {
            this.cnpjError = this.t('partner.form.messages.cnpjInactive');
          }

          // Preenche os dados automaticamente
          if (data.company_name || data.nome || data.razao_social) {
            this.formData.nomeRazaoSocial = data.company_name || data.nome || data.razao_social;
          }

          // Monta o endereço completo
          let endereco = '';
          // Para BrasilAPI
          if (data.street || data.logradouro) {
            endereco += (data.street || data.logradouro);
            if (data.number || data.numero) {
              endereco += `, ${data.number || data.numero}`;
            }
            if (data.complement || data.complemento) {
              endereco += `, ${data.complement || data.complemento}`;
            }
            if (data.neighborhood || data.bairro) {
              endereco += `, ${data.neighborhood || data.bairro}`;
            }
            if (data.city || data.municipio) {
              endereco += `, ${data.city || data.municipio}`;
            }
            if (data.state || data.uf) {
              endereco += ` - ${data.state || data.uf}`;
              // Atualiza o UF automaticamente se não estiver preenchido
              if (!this.formData.uf) {
                this.formData.uf = data.state || data.uf;
              }
            }
            if (data.zip_code || data.cep) {
              endereco += `, CEP: ${data.zip_code || data.cep}`;
            }
          }

          this.formData.endereco = endereco;

          // Feedback visual de sucesso
          this.$nextTick(() => {
            const enderecoInput = document.getElementById('endereco');
            if (enderecoInput) {
              enderecoInput.style.backgroundColor = '#d4edda';
              enderecoInput.style.borderColor = '#28a745';
              setTimeout(() => {
                enderecoInput.style.backgroundColor = '';
                enderecoInput.style.borderColor = '';
              }, 2000);
            }
          });
        } else {
          throw new Error('Erro na consulta');
        }
      } catch (error) {
        console.error('Erro ao buscar CNPJ:', error);
        // Terceira tentativa: API alternativa
        try {
          const response = await fetch(`https://publica.cnpj.ws/cnpj/${cnpjLimpo}`);
          if (response.ok) {
            const data = await response.json();
            if (data.razao_social) {
              this.formData.nomeRazaoSocial = data.razao_social;
            }

            let endereco = '';
            if (data.estabelecimento) {
              const est = data.estabelecimento;
              if (est.logradouro) {
                endereco += est.logradouro;
                if (est.numero) endereco += `, ${est.numero}`;
                if (est.complemento) endereco += `, ${est.complemento}`;
                if (est.bairro) endereco += `, ${est.bairro}`;
                if (est.cidade && est.cidade.nome) endereco += `, ${est.cidade.nome}`;
                if (est.estado && est.estado.sigla) {
                  endereco += ` - ${est.estado.sigla}`;
                  if (!this.formData.uf) {
                    this.formData.uf = est.estado.sigla;
                  }
                }
                if (est.cep) endereco += `, CEP: ${est.cep}`;
              }
            }
            this.formData.endereco = endereco;
          } else {
            this.cnpjError = this.t('partner.form.messages.cnpjNotFound');
          }
        } catch (secondError) {
          console.error('Erro na segunda tentativa:', secondError);
          this.cnpjError = this.t('partner.form.messages.cnpjServiceUnavailable');
        }
      } finally {
        this.isLoadingCNPJ = false;
      }
    },

    // Função para obter ícone do arquivo
    getFileIcon(filename) {
      if (!filename) return 'fas fa-file';

      const extension = filename.split('.').pop().toLowerCase();

      switch (extension) {
        case 'pdf':
          return 'fas fa-file-pdf';
        case 'doc':
        case 'docx':
          return 'fas fa-file-word';
        case 'jpg':
        case 'jpeg':
        case 'png':
          return 'fas fa-file-image';
        default:
          return 'fas fa-file';
      }
    },

    // Função para formatar tamanho do arquivo
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },

    validateFormData() {
      this.errors = {}

      // Validar campos obrigatórios do formulário
      if (!this.formData.cnpj) {
        this.errors.formCnpj = 'CNPJ é obrigatório'
      }
      if (!this.formData.nomeRazaoSocial) {
        this.errors.formNomeRazaoSocial = 'Nome/Razão Social é obrigatório'
      }
      if (!this.formData.uf) {
        this.errors.formUf = 'UF é obrigatório'
      }
      if (!this.formData.ramoAtuacao) {
        this.errors.formRamoAtuacao = 'Ramo de Atuação é obrigatório'
      }
      if (!this.formData.email) {
        this.errors.formEmail = 'Email é obrigatório'
      }
      if (!this.formData.celular && !this.formData.telefoneFixo) {
        this.errors.formCelular = 'Celular ou Telefone Fixo é obrigatório'
        this.errors.formTelefoneFixo = 'Celular ou Telefone Fixo é obrigatório'
      }

      if (!this.formData.tipoParceiro) {
        this.errors.formTipoParceiro = 'Tipo de Parceiro é obrigatório'
      }

      // Validar documentos APENAS se tipoParceiro for CLIENTE
      // Transportadoras e Fornecedores NÃO precisam anexar documentos
      if (this.formData.tipoParceiro === 'CLIENTE') {
        Object.keys(this.documents).forEach(docType => {
          if (!this.documents[docType]) {
            this.errors[docType] = 'Documento obrigatório'
          }
        })
      }

      return Object.keys(this.errors).length === 0
    },

    // Método para obter URL da API dinamicamente
    getApiUrl() {
      // Se estivermos em desenvolvimento local
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:3000'
      }

      // URL de produção do backend no Render
      return 'https://unihospitalar-backend.onrender.com'
    },

    // Método removido - não mais necessário
    // copyCode(event) {
    //   navigator.clipboard.writeText(textToCopy).then(() => {
    //     const btn = event.target.closest('.copy-btn')
    //     const originalHTML = btn.innerHTML
    //     btn.innerHTML = '<i class="fas fa-check"></i>'
    //     btn.style.background = '#28a745'

    //     setTimeout(() => {
    //       btn.innerHTML = originalHTML
    //       btn.style.background = ''
    //     }, 2000)
    //   })
    // },

    async submitForm() {
      // Validar formulário completo
      if (!this.validateFormData()) {
        this.$nextTick(() => {
          const firstError = document.querySelector('.error')
          if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        })
        return
      }

      this.isSubmitting = true

      try {
        // Criar FormData para enviar arquivos
        const formData = new FormData()

        // Adicionar dados do formulário incluindo o tipo de parceiro
        const partnerData = {
          nomeRazaoSocial: this.formData.nomeRazaoSocial,
          uf: this.formData.uf,
          ramoAtuacao: this.formData.ramoAtuacao,
          cnpj: this.formData.cnpj,
          email: this.formData.email,
          celular: this.formData.celular || null,
          telefoneFixo: this.formData.telefoneFixo || null,
          endereco: this.formData.endereco || null,
          tipoParceiro: this.formData.tipoParceiro
        }

        // Adicionar dados como JSON
        formData.append('partnerData', JSON.stringify(partnerData))

        // Adicionar documentos apenas se existirem (só para CLIENTE)
        Object.keys(this.documents).forEach(docType => {
          if (this.documents[docType]) {
            formData.append(docType, this.documents[docType])
          }
        })

        console.log('📤 Enviando solicitação de parceria para API...')
        console.log('👥 Tipo de parceiro:', this.formData.tipoParceiro)
        console.log('📎 Total de documentos:', Object.keys(this.documents).filter(key => this.documents[key]).length)

        // Fazer requisição para a API
        const apiUrl = this.getApiUrl()
        const response = await fetch(`${apiUrl}/api/partners`, {
          method: 'POST',
          body: formData
        })

        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || 'Erro ao enviar solicitação')
        }

        // Sucesso
        this.submissionData = {
          companyName: result.companyName,
          cnpj: result.cnpj,
          email: result.email,
          documentsCount: result.documentsCount || 0
        }
        this.partnerSubmitted = true
        this.isSubmitting = false

        console.log('✅ Solicitação de parceria enviada com sucesso!')
        console.log('🏢 Empresa:', result.companyName)
        console.log('📄 CNPJ:', result.cnpj)
        console.log('👥 Tipo:', this.formData.tipoParceiro)
        console.log('📎 Documentos enviados:', result.documentsCount || 0)

        // Scroll suave para o success-card
        this.$nextTick(() => {
          const successCard = document.querySelector('.success-card');
          if (successCard) {
            successCard.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        })

      } catch (error) {
        console.error('❌ Erro ao enviar solicitação de parceria:', error)
        this.isSubmitting = false
        this.showErrorMessage = true
        setTimeout(() => {
          this.showErrorMessage = false
        }, 5000)
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
      this.cnpjError = '';
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
  border-bottom: 4px solid #AE2C2A;
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/header-parceria.png');
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
  background-size: 410px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2px;
  border: 1px solid #AE2C2A;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
}

/* Estilo para loading no CNPJ */
.input-clip.loading {
  border-color: #AE2C2A;
  box-shadow: 0 0 0 2px rgba(174, 44, 42, 0.25);
}

.loading-spinner {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #AE2C2A;
  font-size: 1.2rem;
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  margin: 0;
}

/* Ajuste específico para selects */
select.form-control {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8.825L1.175 4 2.05 3.125 6 7.075 9.95 3.125 10.825 4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  padding-right: 40px;
}

.form-control:focus {
  outline: none;
  border-color: #AE2C2A;
  box-shadow: 0 0 0 2px rgba(174, 44, 42, 0.25);
  background-color: #fff;
}

/* Mensagens de erro e ajuda */
.field-error {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 5px;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}

.field-error i {
  font-size: 1rem;
}

.field-help {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #842029;
  font-size: 0.85rem;
  margin-top: 5px;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c2c7;
  border-radius: 4px;
  letter-spacing: 0.05rem;
}

.field-help i {
  color: #dc3545;
  margin-top: 4.5px;
}

/* Aviso de Termos */
.terms-notice {
  margin: 20px 0;
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.05), rgba(174, 44, 42, 0.02));
  border: 1px solid rgba(174, 44, 42, 0.2);
  border-radius: 10px;
  padding: 20px;
  border-left: 4px solid #AE2C2A;
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

  .field-error,
  .field-help {
    font-size: 0.8rem;
    padding: 6px 10px;
  }

  .upload-info {
    flex-direction: column;
    align-items: center;
  }

  .upload-info i {
    margin: 10px auto;
  }

  .notice-content {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .notice-content p {
    font-size: 0.9rem;
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

/* Animação de loading para o spinner */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.fa-spin {
  animation: spin 1s linear infinite;
}

/* Efeito visual para campo preenchido automaticamente */
.form-control.auto-filled {
  background-color: #d4edda !important;
  border-color: #28a745 !important;
  transition: all 0.3s ease;
}

/* Estilo para campos readonly */
.form-control[readonly] {
  background-color: #f8f9fa;
  cursor: not-allowed;
}

/* Estilo visual semelhante a campos readonly */
.readonly-style {
  background-color: #f8f9fa !important;
  opacity: 2;
  cursor: not-allowed;
}

/* Melhorias visuais para o loading */
.input-clip.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(0, 123, 255, 0.1), transparent);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

/* Estilo para mensagens de sucesso na consulta CNPJ */
.cnpj-success {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #28a745;
  font-size: 0.85rem;
  margin-top: 5px;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
}

.cnpj-success i {
  font-size: 1rem;
}

.form-control:focus {
  outline: 2px solid #AE2C2A;
  outline-offset: 2px;
}

.btn-submit:focus {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

/* Estilo para campos obrigatórios */
.form-group label::after {
  content: ' *';
  color: #dc3545;
  font-weight: bold;
}

/* Estilo para campos opcionais */
.form-group.optional label::after {
  content: ' (opcional)';
  color: #6c757d;
  font-weight: normal;
  font-size: 0.85rem;
}

/* Remove o asterisco dos campos opcionais */
.form-group.optional label::after {
  content: ' (opcional)';
}

/* Estilos para os botões de upload de documentos */
.documents-upload {
  background: transparent;
  border: none;
  padding: 0;
}

.upload-buttons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
  border: 3px dashed #AE2C2A;
  border-radius: 12px;
  padding: 25px;
  background-color: #fdf2f2;
}

.document-upload-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border: 2px solid #f3d1d1;
  border-radius: 8px;
  background: #fffafa;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  min-height: 70px;
}

.document-upload-button:hover {
  border-color: #AE2C2A;
  background: #fae6e6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(174, 44, 42, 0.1);
}

.document-upload-button.uploaded {
  border-color: #62c976;
  background: #e7f6eb;
  cursor: default;
}

.document-upload-button.uploaded:hover {
  transform: none;
  box-shadow: none;
}

.document-upload-button.error {
  border-color: #dc3545;
  background: #f8d7da;
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  flex: 1;
}

.button-content i {
  font-size: 1.5rem;
  color: #6c757d;
  margin-bottom: 5px;
}

.document-upload-button.uploaded .button-content i {
  color: #28a745;
}

.document-upload-button.error .button-content i {
  color: #dc3545;
}

.button-label {
  font-weight: 600;
  color: #495057;
  font-size: 0.95rem;
}

.document-upload-button.uploaded .button-label {
  color: #155724;
}

.document-upload-button.error .button-label {
  color: #721c24;
}

.file-name {
  font-size: 0.8rem;
  color: #6c757d;
  font-style: italic;
  word-break: break-all;
  max-width: 200px;
}

.document-upload-button.uploaded .file-name {
  color: #155724;
}

.remove-doc-btn {
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  padding-left: 7px;
}

.remove-doc-btn:hover {
  background: #c82333;
  transform: scale(1.1);
}

.remove-doc-btn i {
  font-size: 0.9rem;
}

.upload-warning {
  display: flex;
  align-items: center;
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  border-radius: 6px;
  padding: 10px 14px;
  margin-bottom: 16px;
  justify-content: center;
  font-size: 14px;
}

.upload-warning i {
  margin-right: 8px;
  margin-bottom: 2.5px;
  font-size: 16px;
}

.upload-info {
  display: flex;
  align-items: flex-start;
  background: rgba(255, 85, 85, 0.08);
  padding: 15px 18px;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 85, 85, 0.15);
  border-left: 4px solid #ff5555;
}

.upload-info>*:not(:first-child) {
  margin-left: 7px;
}

.upload-info i {
  color: #ff5555;
  font-size: 1.1rem;
  margin-top: 2px;
}

.upload-info small {
  color: #cc3333;
  font-size: 0.85rem;
  line-height: 1.4;
  letter-spacing: 0.05rem;
  font-weight: 500;
}

.error-message {
  background-color: #f8d7da;
  color: #842029;
  border: 1px solid #f5c2c7;
  border-left: 4px solid #dc3545;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 0.95rem;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Ícone de alerta com animação */
.animated-icon {
  color: #dc3545;
  font-size: 1.2rem;
  animation: pulse 1.4s ease-in-out infinite;
}

/* Animação de pulsar leve */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.75;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsividade para os botões de documentos */
@media (max-width: 768px) {
  .upload-buttons-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .document-upload-button {
    padding: 12px 15px;
    min-height: 60px;
  }

  .button-content i {
    font-size: 1.3rem;
  }

  .button-label {
    font-size: 0.9rem;
  }

  .file-name {
    font-size: 0.75rem;
    max-width: 150px;
  }

  .remove-doc-btn {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 576px) {
  .document-upload-button {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    text-align: center;
  }

  .button-content {
    align-items: center;
  }

  .remove-doc-btn {
    align-self: center;
  }
}

/* Success Section - Baseado no FazerReclamacao.vue */
.success-section {
  padding: 0;
}

/* Novos estilos para a seção de sucesso */
.submission-details {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  padding: 35px;
  border-radius: 20px;
  margin: 30px 0;
  border: 1px solid rgba(174, 44, 42, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  text-align: left;
  position: relative;
  overflow: hidden;
}

.submission-details::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #AE2C2A, #ff5555, #AE2C2A);
}

.submission-details h3 {
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  ;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.submission-details h3 i {
  color: #AE2C2A;
}

.submission-details h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #AE2C2A, #ff5555);
  border-radius: 2px;
}

.details-grid {
  display: grid;
  gap: 16px;
}

.detail-item {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(174, 44, 42, 0.08);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.detail-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(174, 44, 42, 0.1);
  border-color: rgba(174, 44, 42, 0.15);
}

.detail-icon {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(174, 44, 42, 0.2);
}

.detail-content {
  flex: 1;
}

.detail-label {
  font-weight: 600;
  color: #780000;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
  display: block;
}

.detail-value {
  color: #2d3748;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.4;
}

.next-steps {
  background: linear-gradient(135deg, #ffffff, #fef9f9);
  padding: 35px;
  border-radius: 20px;
  margin: 30px 0;
  border: 1px solid rgba(174, 44, 42, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  text-align: left;
  position: relative;
  overflow: hidden;
}

.next-steps::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff5555, #AE2C2A, #ff5555);
}

.next-steps h3 {
  color: #2d3748;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.next-steps h3 i {
  color: #AE2C2A;
}

.next-steps h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ff5555, #AE2C2A);
  border-radius: 2px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.step-item {
  background: rgba(255, 255, 255, 0.9);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(174, 44, 42, 0.08);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
}

.step-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #AE2C2A, #ff5555);
}

.step-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(174, 44, 42, 0.12);
  border-color: rgba(174, 44, 42, 0.15);
}

.step-icon {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(174, 44, 42, 0.25);
}

.step-content {
  flex: 1;
}

.step-title {
  font-weight: 700;
  color: #2d3748;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 6px;
}

.step-description {
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.5;
  font-weight: 500;
}

.contact-info {
  background: linear-gradient(135deg, #fff7ed, #fed7aa);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(251, 146, 60, 0.2);
  margin: 30px 0;
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  box-shadow: 0 8px 32px rgba(251, 146, 60, 0.08);
  position: relative;
  overflow: hidden;
}

.contact-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #fb923c, #f97316, #fb923c);
}

.info-icon {
  width: 55px;
  height: 55px;
  border-radius: 16px;
  background: linear-gradient(135deg, #f97316, #fb923c);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.25);
}

.info-content {
  flex: 1;
}

.info-content h4 {
  color: #9a3412;
  font-weight: 700;
  margin: 0 0 8px 0;
  font-size: 1.2rem;
}

.info-content p {
  color: #9a3412;
  margin: 0;
  font-weight: 500;
  line-height: 1.6;
  font-size: 0.95rem;
}

.success-card {
  background: white;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  padding: 60px 40px;
  text-align: center;
  border: 1px solid #e9ecef;
}

.success-animation {
  margin-bottom: 30px;
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

.success-card h2 {
  color: #28a745;
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.success-card>p {
  color: #696969;
  font-size: 1.2rem;
  margin-bottom: 40px;
  line-height: 1.6;
}

.tracking-code-section {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 15px;
  margin: 30px 0;
  border: 2px solid #e9ecef;
}

.tracking-code-section label {
  display: block;
  color: #333;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.codes-container {
  background: white;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid #AE2C2A;
}

.code-item {
  margin-bottom: 20px;
}

.code-item:last-of-type {
  margin-bottom: 25px;
}

.code-label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 1rem;
}

.code-display {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.code {
  font-family: 'Courier New', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  color: #AE2C2A;
  letter-spacing: 1px;
}

.copy-btn {
  background: #AE2C2A;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.copy-btn:hover {
  background: #ff5555;
  transform: scale(1.05);
}

.important-notice {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  background: #fff3cd;
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid #ffc107;
  margin: 30px 0;
  text-align: left;
}

.important-notice i {
  color: #856404;
  font-size: 1.5rem;
  margin-top: 2px;
}

.important-notice p {
  color: #856404;
  margin: 0;
  font-weight: 500;
  line-height: 1.6;
}

.success-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  min-width: 180px;
  justify-content: center;
  background: linear-gradient(135deg, #AE2C2A, #ff5555);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(174, 44, 42, 0.3);
  color: white;
  text-decoration: none;
}
</style>
