<template>
    <div class="report-page">
        <HomeHeader />

        <!-- Hero Section com Efeito Parallax -->
        <section class="hero-section">
            <div class="parallax-container">
                <div class="overlay"></div>
                <h1 class="hero-title">{{ t('report.heroTitle') }}</h1>
                <div class="hero-subtitle">{{ t('report.heroSubtitle') }}</div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="main-content">
            <div class="container">
                <!-- Terms Agreement Section -->
                <div class="terms-section" v-if="!termsAccepted">
                    <div class="terms-card">
                        <div class="terms-header">
                            <div class="terms-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <h2>{{ t('report.terms.title') }}</h2>
                        </div>

                        <div class="terms-content">
                            <div class="terms-info">
                                <div class="info-block">
                                    <h3>{{ t('report.terms.confidentiality.title') }}</h3>
                                    <p>{{ t('report.terms.confidentiality.text') }}</p>
                                </div>

                                <div class="info-block">
                                    <h3>{{ t('report.terms.responsibility.title') }}</h3>
                                    <p>{{ t('report.terms.responsibility.text') }}</p>
                                </div>

                                <div class="info-block">
                                    <h3>{{ t('report.terms.process.title') }}</h3>
                                    <p>{{ t('report.terms.process.text') }}</p>
                                </div>
                            </div>

                            <div class="terms-actions">
                                <button @click="acceptTerms" class="btn-accept">
                                    <i class="fas fa-check"></i>
                                    {{ t('report.terms.accept') }}
                                </button>
                                <button @click="rejectTerms" class="btn-reject">
                                    <i class="fas fa-times"></i>
                                    {{ t('report.terms.reject') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Section -->
                <div class="form-wrapper" v-else>
                    <div class="progress-bar">
                        <div class="progress-step" :class="{ active: currentStep >= 1 }">
                            <span class="step-number">1</span>
                            <span class="step-label">{{ t('report.steps.basic') }}</span>
                        </div>
                        <div class="progress-step" :class="{ active: currentStep >= 2 }">
                            <span class="step-number">2</span>
                            <span class="step-label">{{ t('report.steps.details') }}</span>
                        </div>
                        <div class="progress-step" :class="{ active: currentStep >= 3 }">
                            <span class="step-number">3</span>
                            <span class="step-label">{{ t('report.steps.evidence') }}</span>
                        </div>
                    </div>

                    <div class="form-container" v-if="!reportSubmitted">
                        <div class="form-card">
                            <div class="form-header">
                                <h2>{{ t('report.form.title') }}</h2>
                                <p>{{ t('report.form.subtitle') }}</p>
                            </div>

                            <form @submit.prevent="submitReport" class="report-form">
                                <!-- Step 1: Basic Information -->
                                <div class="form-step" v-show="currentStep === 1">
                                    <h3 class="step-title">{{ t('report.form.step1.title') }}</h3>

                                    <div class="form-grid">
                                        <div class="form-group">
                                            <label for="relationship">{{ t('report.form.step1.relationship.label') }}
                                                <span class="required">*</span></label>
                                            <select id="relationship" v-model="form.relationship" required
                                                :class="{ 'error': errors.relationship }">
                                                <option value="" disabled>{{
                                                    t('report.form.step1.relationship.placeholder') }}</option>
                                                <option value="employee">{{
                                                    t('report.form.step1.relationship.options.employee') }}</option>
                                                <option value="ex-employee">{{
                                                    t('report.form.step1.relationship.options.exEmployee') }}</option>
                                                <option value="supplier">{{
                                                    t('report.form.step1.relationship.options.supplier') }}</option>
                                                <option value="client">{{
                                                    t('report.form.step1.relationship.options.client') }}</option>
                                                <option value="society">{{
                                                    t('report.form.step1.relationship.options.society') }}</option>
                                                <option value="other">{{
                                                    t('report.form.step1.relationship.options.other') }}</option>
                                            </select>
                                            <div v-if="errors.relationship" class="error-message">{{ errors.relationship
                                                }}</div>
                                        </div>

                                        <div class="form-group">
                                            <label for="involvement">{{ t('report.form.step1.involvement.label') }}
                                                <span class="required">*</span></label>
                                            <select id="involvement" v-model="form.involvement" required
                                                :class="{ 'error': errors.involvement }">
                                                <option value="" disabled>{{
                                                    t('report.form.step1.involvement.placeholder') }}</option>
                                                <option value="experienced">{{
                                                    t('report.form.step1.involvement.options.experienced') }}</option>
                                                <option value="witnessed">{{
                                                    t('report.form.step1.involvement.options.witnessed') }}</option>
                                                <option value="heard">{{
                                                    t('report.form.step1.involvement.options.heard') }}</option>
                                            </select>
                                            <div v-if="errors.involvement" class="error-message">{{ errors.involvement
                                                }}</div>
                                        </div>

                                        <div class="form-group">
                                            <label for="violationType">{{ t('report.form.step1.violationType.label') }}
                                                <span class="required">*</span></label>
                                            <select id="violationType" v-model="form.violationType" required
                                                :class="{ 'error': errors.violationType }">
                                                <option value="" disabled>{{
                                                    t('report.form.step1.violationType.placeholder') }}</option>
                                                <option value="sexual-harassment">{{
                                                    t('report.form.step1.violationType.options.sexualHarassment') }}
                                                </option>
                                                <option value="moral-harassment">{{
                                                    t('report.form.step1.violationType.options.moralHarassment') }}
                                                </option>
                                                <option value="physical-aggression">{{
                                                    t('report.form.step1.violationType.options.physicalAggression') }}
                                                </option>
                                                <option value="unfair-competition">{{
                                                    t('report.form.step1.violationType.options.unfairCompetition') }}
                                                </option>
                                                <option value="inappropriate-behavior">{{
                                                    t('report.form.step1.violationType.options.inappropriateBehavior')
                                                    }}</option>
                                                <option value="conflict-interest">{{
                                                    t('report.form.step1.violationType.options.conflictInterest') }}
                                                </option>
                                                <option value="work-environment">{{
                                                    t('report.form.step1.violationType.options.workEnvironment') }}
                                                </option>
                                                <option value="theft">{{
                                                    t('report.form.step1.violationType.options.theft') }}</option>
                                                <option value="discrimination">{{
                                                    t('report.form.step1.violationType.options.discrimination') }}
                                                </option>
                                                <option value="salary-discrimination">{{
                                                    t('report.form.step1.violationType.options.salaryDiscrimination') }}
                                                </option>
                                                <option value="sexual-importuning">{{
                                                    t('report.form.step1.violationType.options.sexualImportuning') }}
                                                </option>
                                                <option value="environmental">{{
                                                    t('report.form.step1.violationType.options.environmental') }}
                                                </option>
                                                <option value="work-safety">{{
                                                    t('report.form.step1.violationType.options.workSafety') }}</option>
                                                <option value="corruption">{{
                                                    t('report.form.step1.violationType.options.corruption') }}</option>
                                                <option value="child-labor">{{
                                                    t('report.form.step1.violationType.options.childLabor') }}</option>
                                                <option value="slave-labor">{{
                                                    t('report.form.step1.violationType.options.slaveLabor') }}</option>
                                                <option value="data-breach">{{
                                                    t('report.form.step1.violationType.options.dataBreach') }}</option>
                                                <option value="research-violations">{{
                                                    t('report.form.step1.violationType.options.researchViolations') }}
                                                </option>
                                                <option value="intellectual-property">{{
                                                    t('report.form.step1.violationType.options.intellectualProperty') }}
                                                </option>
                                                <option value="law-violation">{{
                                                    t('report.form.step1.violationType.options.lawViolation') }}
                                                </option>
                                                <option value="other">{{
                                                    t('report.form.step1.violationType.options.other') }}</option>
                                            </select>
                                            <div v-if="errors.violationType" class="error-message">{{
                                                errors.violationType }}</div>
                                        </div>

                                        <div class="form-group">
                                            <label for="area">{{ t('report.form.step1.area.label') }} <span
                                                    class="required">*</span></label>
                                            <select id="area" v-model="form.area" required
                                                :class="{ 'error': errors.area }">
                                                <option value="" disabled>{{ t('report.form.step1.area.placeholder') }}
                                                </option>
                                                <option value="administrative">{{
                                                    t('report.form.step1.area.options.administrative') }}</option>
                                                <option value="commercial">{{
                                                    t('report.form.step1.area.options.commercial') }}</option>
                                                <option value="financial">{{
                                                    t('report.form.step1.area.options.financial') }}</option>
                                                <option value="hr">{{ t('report.form.step1.area.options.hr') }}</option>
                                                <option value="integration">{{
                                                    t('report.form.step1.area.options.integration') }}</option>
                                                <option value="legal">{{ t('report.form.step1.area.options.legal') }}
                                                </option>
                                                <option value="ma">{{ t('report.form.step1.area.options.ma') }}</option>
                                                <option value="operations">{{
                                                    t('report.form.step1.area.options.operations') }}</option>
                                                <option value="regulatory">{{
                                                    t('report.form.step1.area.options.regulatory') }}</option>
                                                <option value="it">{{ t('report.form.step1.area.options.it') }}</option>
                                            </select>
                                            <div v-if="errors.area" class="error-message">{{ errors.area }}</div>
                                        </div>
                                    </div>

                                    <div class="checkbox-group">
                                        <input type="checkbox" id="anonymous" v-model="form.anonymous">
                                        <label for="anonymous">{{ t('report.form.step1.anonymous') }}</label>
                                    </div>
                                </div>

                                <!-- Step 2: Incident Details -->
                                <div class="form-step" v-show="currentStep === 2">
                                    <h3 class="step-title">{{ t('report.form.step2.title') }}</h3>

                                    <div class="form-grid">
                                        <div class="form-group">
                                            <label for="incidentDate">{{ t('report.form.step2.date') }} <span
                                                    class="required">*</span></label>
                                            <input type="date" id="incidentDate" v-model="form.incidentDate" required
                                                :class="{ 'error': errors.incidentDate }">
                                            <div v-if="errors.incidentDate" class="error-message">{{ errors.incidentDate
                                                }}</div>
                                        </div>

                                        <div class="form-group">
                                            <label for="location">{{ t('report.form.step2.location') }} <span
                                                    class="required">*</span></label>
                                            <input type="text" id="location" v-model="form.location" required
                                                :placeholder="t('report.form.step2.locationPlaceholder')"
                                                :class="{ 'error': errors.location }">
                                            <div v-if="errors.location" class="error-message">{{ errors.location }}
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="accusedName">{{ t('report.form.step2.accusedName') }} <span
                                                    class="required">*</span></label>
                                            <input type="text" id="accusedName" v-model="form.accusedName" required
                                                :placeholder="t('report.form.step2.accusedNamePlaceholder')"
                                                :class="{ 'error': errors.accusedName }">
                                            <div v-if="errors.accusedName" class="error-message">{{ errors.accusedName
                                                }}</div>
                                        </div>

                                        <div class="form-group">
                                            <label for="accusedPosition">{{ t('report.form.step2.accusedPosition')
                                                }}</label>
                                            <input type="text" id="accusedPosition" v-model="form.accusedPosition"
                                                :placeholder="t('report.form.step2.accusedPositionPlaceholder')">
                                        </div>

                                        <div class="form-group">
                                            <label for="witnesses">{{ t('report.form.step2.witnesses') }}</label>
                                            <textarea id="witnesses" v-model="form.witnesses" rows="3"
                                                :placeholder="t('report.form.step2.witnessesPlaceholder')"></textarea>
                                        </div>

                                        <div class="form-group">
                                            <label for="hrContact">{{ t('report.form.step2.hrContact') }}</label>
                                            <input type="text" id="hrContact" v-model="form.hrContact"
                                                :placeholder="t('report.form.step2.hrContactPlaceholder')">
                                        </div>
                                    </div>

                                    <div class="form-group full-width">
                                        <label for="description">{{ t('report.form.step2.description') }} <span
                                                class="required">*</span></label>
                                        <div class="description-help">
                                            <p>{{ t('report.form.step2.descriptionHelp') }}</p>
                                            <ul>
                                                <li>{{ t('report.form.step2.helpItems.what') }}</li>
                                                <li>{{ t('report.form.step2.helpItems.who') }}</li>
                                                <li>{{ t('report.form.step2.helpItems.when') }}</li>
                                                <li>{{ t('report.form.step2.helpItems.where') }}</li>
                                                <li>{{ t('report.form.step2.helpItems.why') }}</li>
                                                <li>{{ t('report.form.step2.helpItems.how') }}</li>
                                                <li>{{ t('report.form.step2.helpItems.evidence') }}</li>
                                            </ul>
                                        </div>
                                        <textarea id="description" v-model="form.description" rows="8" required
                                            :placeholder="t('report.form.step2.descriptionPlaceholder')"
                                            :class="{ 'error': errors.description }"></textarea>
                                        <div v-if="errors.description" class="error-message">{{ errors.description }}
                                        </div>
                                    </div>
                                </div>

                                <!-- Step 3: Evidence and Additional Info -->
                                <div class="form-step" v-show="currentStep === 3">
                                    <h3 class="step-title">{{ t('report.form.step3.title') }}</h3>

                                    <div class="form-group">
                                        <label for="relatedReport">{{ t('report.form.step3.relatedReport') }}</label>
                                        <input type="text" id="relatedReport" v-model="form.relatedReport"
                                            :placeholder="t('report.form.step3.relatedReportPlaceholder')">
                                    </div>

                                    <div class="form-group">
                                        <label for="evidence">{{ t('report.form.step3.evidence') }}</label>
                                        <div class="file-upload-area" @drop="handleFileDrop" @dragover.prevent
                                            @dragenter.prevent>
                                            <input type="file" id="evidence" @change="handleFileUpload" multiple
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style="display: none;">
                                            <div class="upload-content" @click="$refs.fileInput.click()">
                                                <i class="fas fa-cloud-upload-alt"></i>
                                                <p>{{ t('report.form.step3.evidenceHelp') }}</p>
                                                <span>{{ t('report.form.step3.evidenceFormats') }}</span>
                                            </div>
                                        </div>
                                        <div class="uploaded-files" v-if="form.evidence.length > 0">
                                            <div class="file-item" v-for="(file, index) in form.evidence" :key="index">
                                                <i class="fas fa-file"></i>
                                                <span>{{ file.name }}</span>
                                                <button type="button" @click="removeFile(index)" class="remove-file">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="confidenceLevel">{{ t('report.form.step3.confidenceLevel')
                                            }}</label>
                                        <div class="confidence-scale">
                                            <div class="scale-labels">
                                                <span>{{ t('report.form.step3.noConfidence') }}</span>
                                                <span>{{ t('report.form.step3.fullConfidence') }}</span>
                                            </div>
                                            <div class="scale-numbers">
                                                <label v-for="n in 6" :key="n - 1" class="scale-option">
                                                    <input type="radio" :value="n - 1" v-model="form.confidenceLevel">
                                                    <span class="scale-number">{{ n - 1 }}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Personal Data (if not anonymous) -->
                                    <div v-if="!form.anonymous" class="personal-data-section">
                                        <h4>{{ t('report.form.step3.personalData') }}</h4>
                                        <div class="form-grid">
                                            <div class="form-group">
                                                <label for="name">{{ t('report.form.step3.name') }} <span
                                                        class="required">*</span></label>
                                                <input type="text" id="name" v-model="form.name"
                                                    :required="!form.anonymous"
                                                    :placeholder="t('report.form.step3.namePlaceholder')"
                                                    :class="{ 'error': errors.name }">
                                                <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
                                            </div>

                                            <div class="form-group">
                                                <label for="email">{{ t('report.form.step3.email') }} <span
                                                        class="required">*</span></label>
                                                <input type="email" id="email" v-model="form.email"
                                                    :required="!form.anonymous"
                                                    :placeholder="t('report.form.step3.emailPlaceholder')"
                                                    :class="{ 'error': errors.email }">
                                                <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
                                            </div>

                                            <div class="form-group">
                                                <label for="phone">{{ t('report.form.step3.phone') }}</label>
                                                <input type="tel" id="phone" v-model="form.phone"
                                                    :placeholder="t('report.form.step3.phonePlaceholder')"
                                                    :class="{ 'error': errors.phone }">
                                                <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Navigation Buttons -->
                                <div class="form-navigation">
                                    <button type="button" @click="previousStep" v-if="currentStep > 1"
                                        class="btn-previous">
                                        <i class="fas fa-arrow-left"></i>
                                        {{ t('report.form.navigation.previous') }}
                                    </button>

                                    <div class="nav-spacer"></div>

                                    <button type="button" @click="nextStep" v-if="currentStep < 3" class="btn-next">
                                        {{ t('report.form.navigation.next') }}
                                        <i class="fas fa-arrow-right"></i>
                                    </button>

                                    <button type="submit" v-if="currentStep === 3" class="btn-submit"
                                        :disabled="submitting">
                                        <i class="fas fa-paper-plane"></i>
                                        {{ submitting ? t('report.form.navigation.submitting') :
                                            t('report.form.navigation.submit') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Success Message -->
                    <div class="success-section" v-else>
                        <div class="success-card">
                            <div class="success-animation">
                                <div class="success-icon">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                            </div>

                            <h2>{{ t('report.success.title') }}</h2>
                            <p>{{ t('report.success.message') }}</p>

                            <div class="tracking-code-section">
  <label>{{ t('report.success.trackingInfo') }}:</label>
  
  <div class="codes-container">
    <div class="code-item">
      <span class="code-label">{{ t('report.success.protocolNumber') }}:</span>
      <div class="code-display">
        <span class="code">{{ trackingCode }}</span>
      </div>
    </div>
    
    <div class="code-item">
      <span class="code-label">{{ t('report.success.accessCode') }}:</span>
      <div class="code-display">
        <span class="code">{{ accessCode }}</span>
      </div>
    </div>
    
    <button @click="copyCode($event)" class="copy-btn">
      <i class="fas fa-copy"></i>
      {{ t('report.success.copyBoth') }}
    </button>
  </div>
</div>

                            <div class="important-notice">
                                <i class="fas fa-exclamation-triangle"></i>
                                <p>{{ t('report.success.instructions') }}</p>
                            </div>

                            <div class="success-actions">
                                <router-link to="/CanalConfidencial" class="btn-secondary">
                                    <i class="fas fa-arrow-left"></i>
                                    {{ t('report.success.backToChannel') }}
                                </router-link>
                                <router-link to="/" class="btn-primary">
                                    <i class="fas fa-home"></i>
                                    {{ t('report.success.homePage') }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <HomeFooter />
    </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import HomeFooter from './HomeFooter.vue'
import { useReportTranslation } from '@/composables/useReportTranslation.js'

export default {
    name: 'FazerRelato',
    components: {
        HomeHeader,
        HomeFooter
    },
    setup() {
        const { t, currentLanguage, setLanguage } = useReportTranslation()

        return {
            t,
            currentLanguage,
            setLanguage
        }
    },
    data() {
        return {
            termsAccepted: false,
            currentStep: 1,
            reportSubmitted: false,
            submitting: false,
            trackingCode: '',
            accessCode: '',
            errors: {}, // Objeto para armazenar erros de validação
            form: {
                relationship: '',
                involvement: '',
                violationType: '',
                area: '',
                anonymous: false,
                incidentDate: '',
                location: '',
                accusedName: '',
                accusedPosition: '',
                witnesses: '',
                hrContact: '',
                description: '',
                relatedReport: '',
                evidence: [],
                confidenceLevel: 5,
                name: '',
                email: '',
                phone: ''
            }
        }
    },
    methods: {
        acceptTerms() {
            this.termsAccepted = true
        },

        rejectTerms() {
            this.$router.push('/CanalConfidencial')
        },

        nextStep() {
            if (this.validateCurrentStep()) {
                this.currentStep++
            } else {
                // Scroll para o primeiro erro
                this.$nextTick(() => {
                    const firstError = document.querySelector('.error')
                    if (firstError) {
                        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                })
            }
        },

        previousStep() {
            this.currentStep--
            this.errors = {} // Limpar erros ao voltar
        },

        validateCurrentStep() {
            this.errors = {} // Limpar erros anteriores

            if (this.currentStep === 1) {
                if (!this.form.relationship) {
                    this.errors.relationship = this.t('report.validation.required')
                }
                if (!this.form.involvement) {
                    this.errors.involvement = this.t('report.validation.required')
                }
                if (!this.form.violationType) {
                    this.errors.violationType = this.t('report.validation.required')
                }
                if (!this.form.area) {
                    this.errors.area = this.t('report.validation.required')
                }
                return Object.keys(this.errors).length === 0
            }

            if (this.currentStep === 2) {
                if (!this.form.incidentDate) {
                    this.errors.incidentDate = this.t('report.validation.required')
                } else {
                    // Validar se a data não é futura
                    const today = new Date()
                    const incidentDate = new Date(this.form.incidentDate)
                    if (incidentDate > today) {
                        this.errors.incidentDate = this.t('report.validation.futureDate')
                    }
                }

                if (!this.form.location || this.form.location.trim().length < 3) {
                    this.errors.location = this.form.location ?
                        this.t('report.validation.minLength').replace('{min}', '3') :
                        this.t('report.validation.required')
                }

                if (!this.form.accusedName || this.form.accusedName.trim().length < 2) {
                    this.errors.accusedName = this.form.accusedName ?
                        this.t('report.validation.minLength').replace('{min}', '2') :
                        this.t('report.validation.required')
                }

                if (!this.form.description || this.form.description.trim().length < 20) {
                    this.errors.description = this.form.description ?
                        this.t('report.validation.descriptionMinLength') :
                        this.t('report.validation.required')
                }

                return Object.keys(this.errors).length === 0
            }

            if (this.currentStep === 3) {
                if (!this.form.anonymous) {
                    if (!this.form.name || this.form.name.trim().length < 2) {
                        this.errors.name = this.form.name ?
                            this.t('report.validation.minLength').replace('{min}', '2') :
                            this.t('report.validation.required')
                    }

                    if (!this.form.email) {
                        this.errors.email = this.t('report.validation.required')
                    } else if (!this.isValidEmail(this.form.email)) {
                        this.errors.email = this.t('report.validation.invalidEmail')
                    }

                    if (this.form.phone && !this.isValidPhone(this.form.phone)) {
                        this.errors.phone = this.t('report.validation.invalidPhone')
                    }
                }

                return Object.keys(this.errors).length === 0
            }

            return true
        },

        // Método para validar email
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        },

        // Método para validar telefone
        isValidPhone(phone) {
            const phoneRegex = /^[\d\s\-()+ ]{10,}$/
            return phoneRegex.test(phone)
        },

        handleFileUpload(event) {
            const files = Array.from(event.target.files)
            this.form.evidence = [...this.form.evidence, ...files]
        },

        handleFileDrop(event) {
            event.preventDefault()
            const files = Array.from(event.dataTransfer.files)
            this.form.evidence = [...this.form.evidence, ...files]
        },

        removeFile(index) {
            this.form.evidence.splice(index, 1)
        },

        generateTrackingCode() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

            // Gerar número do protocolo
            let protocolNumber = 'UNI-'
            for (let i = 0; i < 8; i++) {
                protocolNumber += chars.charAt(Math.floor(Math.random() * chars.length))
            }

            // Gerar código de acesso (6 dígitos)
            let accessCode = ''
            for (let i = 0; i < 6; i++) {
                accessCode += chars.charAt(Math.floor(Math.random() * chars.length))
            }

            return {
                protocol: protocolNumber,
                access: accessCode
            }
        },

        async submitReport() {
            if (!this.validateCurrentStep()) {
                // Scroll para o primeiro erro se houver
                this.$nextTick(() => {
                    const firstError = document.querySelector('.error')
                    if (firstError) {
                        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                })
                return
            }

            this.submitting = true

            // Simular envio
            await new Promise(resolve => setTimeout(resolve, 3000))

            const codes = this.generateTrackingCode()
            this.trackingCode = codes.protocol
            this.accessCode = codes.access
            this.reportSubmitted = true
            this.submitting = false

            // Scroll para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },

        copyCode(event) {
            const textToCopy = `Protocolo: ${this.trackingCode}\nCódigo de Acesso: ${this.accessCode}`
            navigator.clipboard.writeText(textToCopy).then(() => {
                const btn = event.target.closest('.copy-btn')
                const originalHTML = btn.innerHTML
                btn.innerHTML = '<i class="fas fa-check"></i>'
                btn.style.background = '#28a745'

                setTimeout(() => {
                    btn.innerHTML = originalHTML
                    btn.style.background = ''
                }, 2000)
            })
        },

        // Método para limpar erros quando o usuário começar a digitar
        clearFieldError(fieldName) {
            if (this.errors[fieldName]) {
                delete this.errors[fieldName]
            }
        }
    },

    // Watchers para limpar erros em tempo real
    watch: {
        'form.relationship'() {
            this.clearFieldError('relationship')
        },
        'form.involvement'() {
            this.clearFieldError('involvement')
        },
        'form.violationType'() {
            this.clearFieldError('violationType')
        },
        'form.area'() {
            this.clearFieldError('area')
        },
        'form.incidentDate'() {
            this.clearFieldError('incidentDate')
        },
        'form.location'() {
            this.clearFieldError('location')
        },
        'form.accusedName'() {
            this.clearFieldError('accusedName')
        },
        'form.description'() {
            this.clearFieldError('description')
        },
        'form.name'() {
            this.clearFieldError('name')
        },
        'form.email'() {
            this.clearFieldError('email')
        },
        'form.phone'() {
            this.clearFieldError('phone')
        }
    },

    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<style scoped>
.report-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

/* Hero Section com Parallax */
.hero-section {
    position: relative;
    height: 85.3vh;
    min-height: 500px;
    overflow: hidden;
}

.parallax-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/fundo-logo-uni.png');
    background-size: 70%;
    background-position: center 20%;
    background-repeat: no-repeat;
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
    background: linear-gradient(135deg, rgba(174, 44, 42, 0.8), rgba(0, 0, 0, 0.6));
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: fadeInUp 1.5s ease-out;
}

.hero-subtitle {
    font-size: 1.3rem;
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

/* Container */
.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Main Content */
.main-content {
    padding: 60px 0;
}

/* Terms Section */
.terms-section {
    margin-bottom: 40px;
}

.terms-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e9ecef;
}

.terms-header {
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    color: white;
    padding: 40px;
    text-align: center;
}

.terms-icon {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 2rem;
}

.terms-header h2 {
    font-size: 2.2rem;
    margin: 0;
    font-weight: 700;
}

.terms-content {
    padding: 40px;
}

.terms-info {
    margin-bottom: 40px;
}

.info-block {
    margin-bottom: 30px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 12px;
    border-left: 4px solid #AE2C2A;
}

.info-block h3 {
    color: #AE2C2A;
    font-size: 1.3rem;
    margin-bottom: 15px;
    font-weight: 600;
}

.info-block p {
    color: #555;
    line-height: 1.7;
    margin: 0;
    font-size: 1.05rem;
}

.terms-actions {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.btn-accept,
.btn-reject {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 180px;
    justify-content: center;
}

.btn-accept {
    background: linear-gradient(135deg, #28a745, #20c997);
    color: white;
}

.btn-accept:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(40, 167, 69, 0.3);
}

.btn-reject {
    background: linear-gradient(135deg, #dc3545, #c82333);
    color: white;
}

.btn-reject:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(220, 53, 69, 0.3);
}

/* Progress Bar */
.progress-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    position: relative;
}

.progress-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 25px;
    left: 60%;
    width: 80%;
    height: 3px;
    background: #e9ecef;
    z-index: 1;
}

.progress-step.active:not(:last-child)::after {
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
}

.step-number {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #e9ecef;
    color: #6c757d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 10px;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
}

.progress-step.active .step-number {
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    color: white;
    transform: scale(1.1);
}

.step-label {
    font-size: 0.9rem;
    color: #6c757d;
    font-weight: 500;
    text-align: center;
}

.progress-step.active .step-label {
    color: #AE2C2A;
    font-weight: 600;
}

/* Form Container */
.form-container {
    margin-bottom: 40px;
}

.form-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e9ecef;
}

.form-header {
    background: linear-gradient(135deg, #f8f9fa, #ffffff);
    padding: 40px;
    text-align: center;
    border-bottom: 2px solid #e9ecef;
}

.form-header h2 {
    color: #AE2C2A;
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.form-header p {
    color: #666;
    font-size: 1.1rem;
    margin: 0;
}

/* Form Steps */
.form-step {
    padding: 40px;
}

.step-title {
    color: #AE2C2A;
    font-size: 1.5rem;
    margin-bottom: 30px;
    font-weight: 600;
    padding-bottom: 15px;
    border-bottom: 2px solid #e9ecef;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-bottom: 25px;
}

.required {
    color: #dc3545;
    font-weight: bold;
}

.form-group {
    margin-bottom: 25px;
}

.form-group.full-width {
    grid-column: 1 / -1;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 600;
    font-size: 1rem;
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
    border-color: #dc3545 !important;
    background-color: #fff5f5 !important;
    box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.1) !important;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 15px;
    border: 2px solid #e9ecef;
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-sizing: border-box;
    background: #f8f9fa;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #AE2C2A;
    background: white;
    box-shadow: 0 0 0 4px rgba(174, 44, 42, 0.1);
    transform: translateY(-2px);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
}

.checkbox-group {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 12px;
    border: 2px solid #e9ecef;
    margin-top: 20px;
}

.checkbox-group input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0;
    accent-color: #AE2C2A;
}

.checkbox-group label {
    margin: 0;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.05rem;
}

/* Mensagens de erro */
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

/* Description Help */
.description-help {
    background: #ffebee;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 15px;
    border-left: 4px solid #dc3545;
}

.description-help p {
    margin: 0 0 15px 0;
    color: #c62828;
    font-weight: 600;
}

.description-help ul {
    margin: 0;
    padding-left: 20px;
    color: #d32f2f;
}

.description-help li {
    margin-bottom: 8px;
    font-size: 0.95rem;
}

/* Animação para campos com erro */
@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-5px);
    }

    75% {
        transform: translateX(5px);
    }
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
    animation: shake 0.5s ease-in-out;
}

/* Hover states para campos com erro */
.form-group input.error:hover,
.form-group select.error:hover,
.form-group textarea.error:hover {
    border-color: #dc3545;
    background-color: #fff5f5;
}

/* File Upload */
.file-upload-area {
    border: 3px dashed #AE2C2A;
    border-radius: 12px;
    padding: 40px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #f8f9fa;
}

.file-upload-area:hover {
    background: rgba(174, 44, 42, 0.05);
    border-color: #ff5555;
}

.upload-content i {
    font-size: 3rem;
    color: #AE2C2A;
    margin-bottom: 15px;
}

.upload-content p {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 10px;
    font-weight: 600;
}

.upload-content span {
    font-size: 0.9rem;
    color: #666;
}

.uploaded-files {
    margin-top: 20px;
}

.file-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: white;
    border-radius: 8px;
    margin-bottom: 10px;
    border: 1px solid #e9ecef;
}

.file-item i {
    color: #AE2C2A;
}

.file-item span {
    flex: 1;
    font-size: 0.95rem;
}

.remove-file {
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
}

/* Confidence Scale */
.confidence-scale {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border: 2px solid #e9ecef;
}

.scale-labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 0.9rem;
    color: #666;
    font-weight: 500;
}

.scale-numbers {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.scale-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.scale-option input[type="radio"] {
    display: none;
}

.scale-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    border: 2px solid #e9ecef;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: all 0.3s ease;
}

.scale-option input[type="radio"]:checked+.scale-number {
    background: #AE2C2A;
    color: white;
    border-color: #AE2C2A;
    transform: scale(1.1);
}

/* Personal Data Section */
.personal-data-section {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 2px solid #e9ecef;
}

.personal-data-section h4 {
    color: #AE2C2A;
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: 600;
}

/* Form Navigation */
.form-navigation {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 30px 40px;
    background: #f8f9fa;
    border-top: 2px solid #e9ecef;
}

.nav-spacer {
    flex: 1;
}

.btn-previous,
.btn-next,
.btn-submit {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 25px;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 140px;
    justify-content: center;
}

.btn-previous {
    background: #6c757d;
    color: white;
}

.btn-previous:hover {
    background: #5a6268;
    transform: translateY(-2px);
}

.btn-next,
.btn-submit {
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    color: white;
}

.btn-next:hover,
.btn-submit:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(174, 44, 42, 0.3);
}

.btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

/* Success Section */
.success-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
}

.success-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    padding: 60px 40px;
    text-align: center;
    max-width: 600px;
    width: 100%;
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
    color: #666;
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

.btn-primary,
.btn-secondary {
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
}

.btn-primary {
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(174, 44, 42, 0.3);
    color: white;
    text-decoration: none;
}

.btn-secondary {
    background: #6c757d;
    color: white;
}

.btn-secondary:hover {
    background: #5a6268;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(108, 117, 125, 0.3);
    color: white;
    text-decoration: none;
}

/* Responsividade */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.1rem;
    }

    .parallax-container {
        background-attachment: scroll;
        background-size: 90%;
    }

    .progress-bar {
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }

    .progress-step:not(:last-child)::after {
        display: none;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .form-step {
        padding: 30px 20px;
    }

    .form-navigation {
        flex-direction: column;
        gap: 15px;
        padding: 20px;
    }

    .nav-spacer {
        display: none;
    }

    .terms-content {
        padding: 30px 20px;
    }

    .terms-actions {
        flex-direction: column;
        align-items: center;
    }

    .success-card {
        padding: 40px 20px;
        margin: 0 20px;
    }

    .success-actions {
        flex-direction: column;
        align-items: center;
    }

    .code-display {
        flex-direction: column;
        gap: 10px;
    }

    .code {
        font-size: 1.4rem;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .container {
        padding: 0 15px;
    }

    .main-content {
        padding: 40px 0;
    }

    .form-header {
        padding: 30px 20px;
    }

    .form-header h2 {
        font-size: 1.6rem;
    }

    .step-title {
        font-size: 1.3rem;
    }

    .success-card h2 {
        font-size: 2rem;
    }

    .success-card>p {
        font-size: 1.1rem;
    }

    .btn-primary,
    .btn-secondary,
    .btn-accept,
    .btn-reject {
        min-width: 100%;
        padding: 12px 20px;
    }

    .scale-numbers {
        gap: 5px;
    }

    .scale-number {
        width: 35px;
        height: 35px;
        font-size: 0.9rem;
    }
}

/* Animações adicionais */
@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInFromLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.form-step {
    animation: slideInFromRight 0.5s ease-out;
}

.terms-card {
    animation: slideInFromLeft 0.8s ease-out;
}

.success-card {
    animation: slideInFromRight 0.8s ease-out;
}

/* Efeitos de hover melhorados */
.form-group input:hover,
.form-group select:hover,
.form-group textarea:hover {
    border-color: rgba(174, 44, 42, 0.5);
    background: white;
}

.checkbox-group:hover {
    border-color: rgba(174, 44, 42, 0.3);
    background: white;
}

.confidence-scale:hover {
    border-color: rgba(174, 44, 42, 0.3);
    background: white;
}

/* Loading state */
.btn-submit:disabled {
    position: relative;
    overflow: hidden;
}

.btn-submit:disabled::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% {
        left: -100%;
    }

    100% {
        left: 100%;
    }
}
</style>
