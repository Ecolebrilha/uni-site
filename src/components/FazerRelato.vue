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
                            <div class="terms-intro">
                                <p>{{ t('report.terms.intro') }}</p>
                            </div>

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

                                <div class="info-block">
                                    <h3>{{ t('report.terms.tracking.title') }}</h3>
                                    <p>{{ t('report.terms.tracking.text') }}</p>
                                </div>

                                <div class="info-block">
                                    <h3>{{ t('report.terms.dataProtection.title') }}</h3>
                                    <p>{{ t('report.terms.dataProtection.text') }}</p>
                                </div>
                            </div>

                            <div class="terms-acceptance">
                                <p><strong>{{ t('report.terms.acceptance') }}</strong></p>
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

                            <div class="terms-disclaimer">
                                <p><em>{{ t('report.terms.disclaimer') }}</em></p>
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
                                                <!-- <span class="required">*</span> -->
                                            </label>
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
                                                <option value="physical-aggression">{{
                                                        t('report.form.step1.violationType.options.physicalAggression') }}
                                                </option>
                                                <option value="threat">{{
                                                    t('report.form.step1.violationType.options.threat') }}
                                                </option>
                                                <option value="financial-harassment">{{
                                                    t('report.form.step1.violationType.options.financialHarassment') }}
                                                </option>
                                                <option value="moral-harassment">{{
                                                    t('report.form.step1.violationType.options.moralHarassment') }}
                                                </option>
                                                <option value="psychological-harassment">{{
                                                    t('report.form.step1.violationType.options.psychologicalHarassment') }}
                                                </option>
                                                <option value="sexual-harassment">{{
                                                    t('report.form.step1.violationType.options.sexualHarassment') }}
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
                                                <option value="direction">{{
                                                    t('report.form.step1.area.options.direction') }}</option>
                                                    <option value="stock">{{ t('report.form.step1.area.options.stock') }}</option>
                                                <option value="financial">{{
                                                    t('report.form.step1.area.options.financial') }}</option>
                                                <option value="taxAccounting">{{ t('report.form.step1.area.options.taxAccounting')
                                                    }}</option>
                                                    <option value="legal">{{ t('report.form.step1.area.options.legal') }}
                                                    </option>
                                                <option value="bidding">{{
                                                    t('report.form.step1.area.options.bidding') }}</option>
                                                <option value="hr">{{
                                                    t('report.form.step1.area.options.hr') }}</option>
                                                <option value="it">{{ t('report.form.step1.area.options.it') }}</option>
                                                <option value="outsideCompany">{{ t('report.form.step1.area.options.outsideCompany') }}</option>
                                                <option value="other">{{ t('report.form.step1.area.options.other') }}
                                                </option>
                                            </select>
                                            <div v-if="errors.area" class="error-message">{{ errors.area }}</div>
                                        </div>
                                    </div>

                                    <div class="checkbox-group">
                                        <input type="checkbox" id="anonymous" v-model="form.anonymous">
                                        <label for="anonymous">{{ t('report.form.step1.anonymous') }}</label>
                                    </div>

                                    <div class="confidentiality-notice">
                                        <div class="notice-content">
                                            <i class="fas fa-shield-alt notice-icon"></i>
                                            <p>{{ t('report.form.step1.confidentialityNotice') }}</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Step 2: Incident Details -->
                                <div class="form-step" v-show="currentStep === 2">
                                    <h3 class="step-title">{{ t('report.form.step2.title') }}</h3>

                                    <div class="form-grid">
                                        <div class="form-group">
                                            <label for="incidentDate">{{ t('report.form.step2.date') }} <span
                                                    class="required">*</span></label>
                                            <div class="date-input-wrapper">
                                                <input type="text" id="incidentDate" v-model="form.incidentDate"
                                                    required placeholder="DD/MM/AAAA" @input="handleDateInput"
                                                    @keydown="handleDateKeydown" maxlength="10"
                                                    :class="{ 'error': errors.incidentDate }">
                                                <input type="date" ref="hiddenDatePicker" @change="onDateSelected"
                                                    style="position: absolute; opacity: 0; pointer-events: none;"
                                                    min="2005-07-11" :max="getCurrentDate()">
                                                <button type="button" class="calendar-btn" @click="openCalendar">
                                                    <i class="fas fa-calendar-alt"></i>
                                                </button>
                                            </div>
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
                                                }} <span class="required">*</span></label>
                                            <input type="text" id="accusedPosition" v-model="form.accusedPosition" required
                                                :placeholder="t('report.form.step2.accusedPositionPlaceholder')"
                                                :class="{ 'error': errors.accusedPosition }">
                                            <div v-if="errors.accusedPosition" class="error-message">{{ errors.accusedPosition
                                                }}</div>
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

                                    <div class="form-group">
                                        <label for="evidence">{{ t('report.form.step3.evidence') }}</label>
                                        <div class="file-upload-area" @drop="handleFileDrop" @dragover.prevent
                                            @dragenter.prevent>
                                            <input type="file" ref="fileInput" @change="handleFileUpload" multiple
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" style="display: none;">
                                            <div class="upload-content" @click="$refs.fileInput.click()">
                                                <i class="fas fa-cloud-upload-alt"></i>
                                                <p>{{ t('report.form.step3.evidenceHelp') }}</p>
                                                <span>{{ t('report.form.step3.evidenceFormats') }}</span>
                                                <div class="file-limit-disclaimer">
                                                    <i class="fas fa-info-circle"></i>
                                                    <small>{{ t('report.form.step3.evidenceDisclaimer') }}</small>
                                                </div>
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
                                                <label for="institution">{{ t('report.form.step3.institution') }}</label>
                                                <input type="text" id="institution" v-model="form.institution"
                                                    :placeholder="t('report.form.step3.institutionPlaceholder')"
                                                    :class="{ 'error': errors.institution }">
                                                <div v-if="errors.institution" class="error-message">{{
                                                    errors.institution }}</div>
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
                                                <label for="phone">{{ t('report.form.step3.phone') }} <span
                                                        class="required">*</span></label>
                                                <input type="tel" id="phone" v-model="form.phone"
                                                    :required="!form.anonymous" maxlength="15" inputmode="numeric"
                                                    @input="formatPhoneNumber" @keypress="onlyNumbers"
                                                    :placeholder="t('report.form.step3.phonePlaceholder')"
                                                    :class="{ 'error': errors.phone }">
                                                <div class="field-help">{{ t('report.form.step3.phoneHelp') }}</div>
                                                <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Mensagem de erro -->
                                <div v-if="submitError" class="form-error">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    {{ submitError }}
                                    <button @click="submitError = ''"
                                        style="margin-left: 10px; background: none; border: none; color: #dc3545; cursor: pointer;">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>

                                <!-- Navigation Buttons -->
                                <div class="form-navigation">
                                    <button type="button" @click="previousStep" v-if="currentStep >= 1"
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
                                        <div v-if="submitting" class="loading-spinner">
                                            <i class="fas fa-spinner fa-spin"></i>
                                            {{ t('report.form.navigation.submitting') }}
                                        </div>
                                        <div v-else>
                                            <i class="fas fa-paper-plane"></i>
                                            {{ t('report.form.navigation.submit') }}
                                        </div>
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
                                <router-link to="/ConsultaStatus" class="btn-secondary">
                                    <i class="fas fa-search"></i>
                                    {{ t('report.success.checkStatus') }}
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
            submitError: '',
            lastCursorPosition: null,
            trackingCode: '',
            accessCode: '',
            isDragOver: false,
            maxFiles: 5,
            maxFileSize: 10 * 1024 * 1024, // 10MB
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
                institution: '',
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
            if (this.currentStep === 1) {
                // Se estiver no step 1, voltar para a tela de termos
                this.termsAccepted = false
            } else {
                // Nos outros steps, apenas voltar um step
                this.currentStep--
            }
            this.errors = {} // Limpar erros ao voltar
        },

        validateCurrentStep() {
            this.errors = {} // Limpar erros anteriores

            if (this.currentStep === 1) {
                // if (!this.form.relationship) {
                //     this.errors.relationship = this.t('report.validation.required')
                // }
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
                    const today = new Date()
                    const incidentDate = this.convertToDateObject(this.form.incidentDate)
                    const minDate = new Date('2005-07-11') // 11 de julho de 2005

                    if (incidentDate && incidentDate > today) {
                        this.errors.incidentDate = this.t('report.validation.futureDate')
                    } else if (incidentDate && incidentDate < minDate) {
                        this.errors.incidentDate = 'A data deve ser posterior a 11 de julho de 2005'
                    }
                }

                if (!this.form.location || this.form.location.trim().length < 3) {
                    this.errors.location = this.form.location ?
                        this.t('report.validation.minLength').replace('{min}', '3') :
                        this.t('report.validation.required')
                }
                
                if (!this.form.accusedName || this.form.accusedName.trim().length < 3) {
                    this.errors.accusedName = this.form.accusedName ?
                        this.t('report.validation.minLength').replace('{min}', '3') :
                        this.t('report.validation.required')
                }

                if (!this.form.accusedPosition || this.form.accusedPosition.trim().length < 3) {
                    this.errors.accusedPosition = this.form.accusedPosition ?
                        this.t('report.validation.minLength').replace('{min}', '3') :
                        this.t('report.validation.required')
                }

                if (!this.form.description || this.form.description.trim().length < 30) {
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

                    if (!this.form.phone) {
                        this.errors.phone = this.t('report.validation.required')
                    } else if (!this.isValidPhone(this.form.phone)) {
                        const numbersOnly = this.form.phone.replace(/\D/g, '')
                        if (numbersOnly.length < 10) {
                            this.errors.phone = this.t('report.validation.phoneMinDigits')
                        } else if (numbersOnly.length > 11) {
                            this.errors.phone = this.t('report.validation.phoneMaxDigits')
                        } else {
                            this.errors.phone = this.t('report.validation.invalidPhone')
                        }
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

        // Permitir apenas números na digitação
        onlyNumbers(event) {
            const char = String.fromCharCode(event.which)
            if (!/[0-9]/.test(char)) {
                event.preventDefault()
            }
        },

        // Formatar número de telefone
        formatPhoneNumber(event) {
            let value = event.target.value

            // Remove tudo que não é número
            value = value.replace(/\D/g, '')

            // Limita a 11 dígitos
            if (value.length > 11) {
                value = value.substring(0, 11)
            }

            // Aplica formatação baseada no tamanho
            if (value.length >= 10) {
                if (value.length === 10) {
                    // Telefone fixo: (11) 4888-9999
                    value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
                } else if (value.length === 11) {
                    // Celular: (11) 99999-8888
                    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
                }
            } else if (value.length >= 6) {
                // Formatação parcial durante a digitação
                if (value.length <= 6) {
                    value = value.replace(/(\d{2})(\d+)/, '($1) $2')
                } else {
                    value = value.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3')
                }
            } else if (value.length >= 2) {
                // Apenas DDD
                value = value.replace(/(\d{2})/, '($1) ')
            }

            // Atualiza o valor
            this.form.phone = value
            event.target.value = value

            // Limpa erro se houver
            this.clearFieldError('phone')
        },

        // Validar telefone
        isValidPhone(phone) {
            // Remove formatação para validar apenas números
            const numbersOnly = phone.replace(/\D/g, '')

            // Deve ter pelo menos 10 dígitos (DDD + número)
            if (numbersOnly.length < 10) {
                return false
            }

            // Deve ter no máximo 11 dígitos
            if (numbersOnly.length > 11) {
                return false
            }

            // Validar DDD (códigos válidos do Brasil)
            const ddd = numbersOnly.substring(0, 2)
            const validDDDs = [
                '11', '12', '13', '14', '15', '16', '17', '18', '19', // SP
                '21', '22', '24', // RJ
                '27', '28', // ES
                '31', '32', '33', '34', '35', '37', '38', // MG
                '41', '42', '43', '44', '45', '46', // PR
                '47', '48', '49', // SC
                '51', '53', '54', '55', // RS
                '61', // DF
                '62', '64', // GO
                '63', // TO
                '65', '66', // MT
                '67', // MS
                '68', // AC
                '69', // RO
                '71', '73', '74', '75', '77', // BA
                '79', // SE
                '81', '87', // PE
                '82', // AL
                '83', // PB
                '84', // RN
                '85', '88', // CE
                '86', '89', // PI
                '91', '93', '94', // PA
                '92', '97', // AM
                '95', // RR
                '96', // AP
                '98', '99' // MA
            ]

            if (!validDDDs.includes(ddd)) {
                return false
            }

            // Se tem 11 dígitos, deve ser celular (9 na terceira posição)
            if (numbersOnly.length === 11) {
                const thirdDigit = numbersOnly.charAt(2)
                if (thirdDigit !== '9') {
                    return false
                }
            }

            return true
        },

        handleFileUpload(event) {
            const files = Array.from(event.target.files)

            // Verificar limite de arquivos
            if (this.form.evidence.length + files.length > this.maxFiles) {
                alert(`Máximo de ${this.maxFiles} arquivos permitidos. Você já tem ${this.form.evidence.length} arquivo(s).`)
                return
            }

            // Validar cada arquivo
            const validFiles = files.filter(file => this.validateFile(file))

            if (validFiles.length > 0) {
                this.form.evidence = [...this.form.evidence, ...validFiles]
                this.showUploadSuccess(validFiles)
            }

            // Limpar o input
            event.target.value = ''
        },

        // Adicionar método de validação
        validateFile(file) {
            const validTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'image/jpeg',
                'image/jpg',
                'image/png'
            ]

            if (!validTypes.includes(file.type)) {
                alert(`Arquivo "${file.name}" não é um tipo válido. Use PDF, DOC, DOCX, JPG, JPEG ou PNG.`)
                return false
            }

            if (file.size > this.maxFileSize) {
                alert(`Arquivo "${file.name}" é muito grande. Máximo ${this.formatFileSize(this.maxFileSize)}.`)
                return false
            }

            return true
        },

        handleFileDrop(event) {
            event.preventDefault()
            const files = Array.from(event.dataTransfer.files)

            // Usar a mesma validação do handleFileUpload
            const validFiles = files.filter(file => {
                const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/jpg', 'image/png']
                const maxSize = 10 * 1024 * 1024 // 10MB

                if (!validTypes.includes(file.type)) {
                    alert(`Arquivo ${file.name} não é um tipo válido. Use PDF, DOC, DOCX, JPG, JPEG ou PNG.`)
                    return false
                }

                if (file.size > maxSize) {
                    alert(`Arquivo ${file.name} é muito grande. Máximo 10MB.`)
                    return false
                }

                return true
            })

            this.form.evidence = [...this.form.evidence, ...validFiles]
        },

        // Adicionar método para ícones
        getFileIcon(mimeType) {
            if (mimeType.includes('pdf')) return 'fa-file-pdf'
            if (mimeType.includes('word') || mimeType.includes('document')) return 'fa-file-word'
            if (mimeType.includes('image')) return 'fa-file-image'
            return 'fa-file'
        },

        formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes'
            const k = 1024
            const sizes = ['Bytes', 'KB', 'MB', 'GB']
            const i = Math.floor(Math.log(bytes) / Math.log(k))
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
        },

        removeFile(index) {
            const fileName = this.form.evidence[index].name
            this.form.evidence.splice(index, 1)
            this.showRemoveSuccess(fileName)
        },

        // Feedback visual para remoção
        showRemoveSuccess(fileName) {
            const message = `Arquivo "${fileName}" removido com sucesso!`

            // Criar notificação temporária
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

            setTimeout(() => {
                notification.remove()
            }, 3000)
        },

        // Feedback visual para upload
        showUploadSuccess(files) {
            const count = files.length
            let message

            if (count === 1) {
                message = `Arquivo "${files[0].name}" adicionado com sucesso!`
            } else {
                const fileNames = files.map(file => file.name).join(', ')
                message = `${count} arquivos adicionados: ${fileNames}`
            }

            // Criar notificação temporária
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

            setTimeout(() => {
                notification.remove()
            }, 3000)
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

        generateTrackingCode() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

            // Gerar número do protocolo para RELATO (UNI-REL + 8 caracteres)
            let protocolNumber = 'UNI-REL'
            for (let i = 0; i < 8; i++) {
                protocolNumber += chars.charAt(Math.floor(Math.random() * chars.length))
            }

            // Gerar código de acesso (6 caracteres)
            let accessCode = ''
            for (let i = 0; i < 6; i++) {
                accessCode += chars.charAt(Math.floor(Math.random() * chars.length))
            }

            return {
                protocol: protocolNumber,
                access: accessCode
            }
        },

        // Método para converter data DD/MM/YYYY para objeto Date (para validações)
        convertToDateObject(dateString) {
            if (!dateString || dateString.length !== 10) {
                return null
            }
            
            const parts = dateString.split('/')
            if (parts.length !== 3) {
                return null
            }
            
            const day = parseInt(parts[0], 10)
            const month = parseInt(parts[1], 10) - 1
            const year = parseInt(parts[2], 10)
            
            return new Date(year, month, day)
        },

        // Método para converter data DD/MM/YYYY para YYYY-MM-DD (apenas para backend)
        convertDateToISO(dateString) {
            if (!dateString || dateString.length !== 10) {
                return null
            }
            
            const parts = dateString.split('/')
            if (parts.length !== 3) {
                return null
            }
            
            const day = parts[0].padStart(2, '0')
            const month = parts[1].padStart(2, '0')
            const year = parts[2]
            
            return `${year}-${month}-${day}`
        },

        async submitReport() {
            if (!this.validateCurrentStep()) {
                this.$nextTick(() => {
                    const firstError = document.querySelector('.error')
                    if (firstError) {
                        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                })
                return
            }

            this.submitting = true

            try {
                // Criar FormData para enviar arquivos
                const formData = new FormData()

                // Converter data para formato ISO (YYYY-MM-DD) antes de enviar
                const isoDate = this.convertDateToISO(this.form.incidentDate)

                // Adicionar dados do formulário
                const reportData = {
                    relationship: this.form.relationship,
                    involvement: this.form.involvement,
                    violationType: this.form.violationType,
                    area: this.form.area,
                    incidentDate: isoDate,
                    location: this.form.location,
                    accusedName: this.form.accusedName,
                    accusedPosition: this.form.accusedPosition,
                    witnesses: this.form.witnesses,
                    hrContact: this.form.hrContact,
                    description: this.form.description,
                    relatedReport: this.form.relatedReport,
                    confidenceLevel: this.form.confidenceLevel,
                    anonymous: this.form.anonymous,
                    name: this.form.anonymous ? null : this.form.name,
                    institution: this.form.anonymous ? null : this.form.institution,
                    email: this.form.anonymous ? null : this.form.email,
                    phone: this.form.anonymous ? null : this.form.phone
                }

                // Adicionar dados como JSON
                formData.append('reportData', JSON.stringify(reportData))

                // Adicionar arquivos de evidência
                this.form.evidence.forEach((file) => {
                    formData.append('evidence', file)
                })

                // Fazer requisição para a API
                const apiUrl = this.getApiUrl()
                const response = await fetch(`${apiUrl}/api/reports`, {
                    method: 'POST',
                    body: formData
                })

                const result = await response.json()

                if (!response.ok) {
                    throw new Error(result.error || 'Erro ao enviar relato')
                }

                // Sucesso
                this.trackingCode = result.trackingCode
                this.accessCode = result.accessCode
                this.reportSubmitted = true
                this.submitting = false

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

                this.submitting = false
                this.submitError = `Erro ao enviar relato: ${error.message}`
            }
        },

        copyCode(event) {
            const textToCopy = `Número do Protocolo: ${this.trackingCode}\nCódigo de Acesso: ${this.accessCode}`
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                const btn = event.target.closest('.copy-btn')
                const originalHTML = btn.innerHTML

                // Feedback visual de sucesso
                btn.innerHTML = '<i class="fas fa-check"></i> Códigos Copiados!'
                btn.style.background = '#28a745'
                btn.style.transform = 'scale(1.05)'

                setTimeout(() => {
                    btn.innerHTML = originalHTML
                    btn.style.background = ''
                    btn.style.transform = ''
                }, 3000)

                // Mostrar notificação adicional
                this.showCopyNotification()
            }).catch(err => {

                alert('Erro ao copiar códigos. Anote-os manualmente.')
            })
        },

        // Obter data atual no formato YYYY-MM-DD
        getCurrentDate() {
            const today = new Date()
            const year = today.getFullYear()
            const month = String(today.getMonth() + 1).padStart(2, '0')
            const day = String(today.getDate()).padStart(2, '0')
            return `${year}-${month}-${day}`
        },

        validateDateInput(event) {
            const dateValue = event.target.value

            if (dateValue) {
                const selectedDate = new Date(dateValue)
                const currentDate = new Date()
                const minDate = new Date('1900-01-01')

                // Verificar se a data não é futura
                if (selectedDate > currentDate) {
                    this.errors.incidentDate = this.t('report.validation.futureDate')
                    return
                }

                // Verificar se a data não é muito antiga
                if (selectedDate < minDate) {
                    this.errors.incidentDate = this.t('report.validation.invalidDate')
                    return
                }

                // Limpar erro se a data for válida
                this.clearFieldError('incidentDate')
            }
        },

        handleDateInput(event) {
            let value = event.target.value.replace(/\D/g, '')
            let formattedValue = ''
            
            // Aplicar máscara DD/MM/AAAA
            if (value.length >= 1) {
                formattedValue = value.substring(0, 2)
            }
            if (value.length >= 3) {
                formattedValue += '/' + value.substring(2, 4)
            }
            if (value.length >= 5) {
                formattedValue += '/' + value.substring(4, 8)
            }
            
            // Atualizar o valor formatado
            if (formattedValue !== event.target.value) {
                event.target.value = formattedValue
                this.form.incidentDate = formattedValue
            }
            
            // Validar se a data estiver completa
            if (formattedValue.length === 10) {
                this.validateFormattedDate(formattedValue)
            } else {
                this.clearFieldError('incidentDate')
            }
        },

        openCalendar() {
            this.$refs.hiddenDatePicker.showPicker()
        },

        onDateSelected(event) {
            const selectedDate = event.target.value
            if (selectedDate) {
                // Converter YYYY-MM-DD para DD/MM/YYYY
                const parts = selectedDate.split('-')
                const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`
                this.form.incidentDate = formattedDate
                this.validateFormattedDate(formattedDate)
            }
        },

        validateFormattedDate(dateString) {
            if (dateString.length !== 10) {
                this.errors.incidentDate = this.t('report.validation.invalidDate')
                return
            }

            const date = this.convertToDateObject(dateString)
            if (!date) {
                this.errors.incidentDate = this.t('report.validation.invalidDate')
                return
            }

            // Verificar se não é futura
            const currentDate = new Date()
            if (date > currentDate) {
                this.errors.incidentDate = this.t('report.validation.futureDate')
                return
            }

            // Verificar se não é muito antiga
            const minDate = new Date('2005-07-11') // 11 de julho de 2005
            if (date < minDate) {
                this.errors.incidentDate = 'A data deve ser posterior a 11 de julho de 2005'
                return
            }

            // Limpar erro se a data for válida
            this.clearFieldError('incidentDate')
        },

        handleDateKeydown(event) {
            const input = event.target
            const key = event.key
            
            // Se pressionar backspace e o campo estiver vazio ou cursor no início
            if (key === 'Backspace') {
                const cursorPosition = input.selectionStart
                const value = input.value
                
                // Se o cursor está no início do campo ou campo vazio
                if (cursorPosition === 0 || !value) {
                    return
                }
                
                this.lastCursorPosition = cursorPosition
            }
        },

        handleDateKeyup(event) {
            const input = event.target
            const key = event.key
            
            if (key === 'Backspace') {
                const value = input.value
                
                // Se o campo foi completamente limpo, focar no início
                if (!value) {
                    setTimeout(() => {
                        input.setSelectionRange(0, 0)
                    }, 0)
                }
                // Se há um valor mas cursor precisa ser reposicionado
                else if (this.lastCursorPosition !== undefined) {
                    setTimeout(() => {
                        // Tentar posicionar o cursor na posição anterior ao backspace
                        const newPosition = Math.max(0, this.lastCursorPosition - 1)
                        input.setSelectionRange(newPosition, newPosition)
                    }, 0)
                }
            }
        },

        showCopyNotification() {
            // Criar elemento de notificação
            const notification = document.createElement('div')
            notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: 600;
            animation: slideInRight 0.3s ease-out;
        ">
            <i class="fas fa-check-circle"></i> Códigos copiados com sucesso!
            <br><small>Cole em um local seguro para consultas futuras</small>
        </div>
    `

            document.body.appendChild(notification)

            // Remover após 4 segundos
            setTimeout(() => {
                notification.remove()
            }, 4000)
        },

        async checkApiConnection() {
            try {
                const apiUrl = this.getApiUrl()
                const response = await fetch(`${apiUrl}/health`)
                const result = await response.json()

                if (response.ok) {

                    return true
                } else {

                    return false
                }
            } catch (error) {

                return false
            }
        },

        async mounted() {
            window.scrollTo(0, 0)

            // Verificar conexão com API
            const apiConnected = await this.checkApiConnection()
            if (!apiConnected) {

                // Não bloquear o formulário, apenas avisar no console
            }
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
        'form.accusedPosition'() {
            this.clearFieldError('accusedPosition')
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
        },
        'form.institution'() {
            this.clearFieldError('institution')
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
    border-bottom: 4px solid #AE2C2A;
}

.parallax-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    background-image: url('@/assets/fundo-logo-uni.png');
    background-size: contain;
    background-position: center calc(50% - 80px);
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    color: white;
}

.hero-subtitle {
    font-size: 1.3rem;
    font-weight: 300;
    position: relative;
    z-index: 2;
    animation: fadeInUp 1.5s ease-out 0.3s both;
    color: white;
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

.terms-intro {
    margin-bottom: 30px;
    padding: 25px;
    background: linear-gradient(135deg, #fff5f5, #ffebee);
    border-radius: 12px;
    border: 2px solid #AE2C2A;
    box-shadow: 0 8px 25px rgba(174, 44, 42, 0.15);
    position: relative;
    overflow: hidden;
}

.terms-intro::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #AE2C2A, #D2342C);
}

.terms-intro::after {
    content: '';
    position: absolute;
    top: 10px;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background: rgba(174, 44, 42, 0.1);
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23AE2C2A' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E");
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid white;
    box-shadow: 0 2px 8px rgba(174, 44, 42, 0.2);
}

.terms-intro p {
    margin: 30px 0 0 0;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #AE2C2A;
    font-weight: 600;
    text-align: justify;
    position: relative;
    z-index: 1;
}

.terms-acceptance {
    margin: 30px 0;
    padding: 18px 22px;
    background: linear-gradient(135deg, #fafafa, #f8f8f8);
    border-radius: 8px;
    border: 1px solid rgba(174, 44, 42, 0.2);
    box-shadow: 0 3px 10px rgba(174, 44, 42, 0.05);
    text-align: center;
    position: relative;
}

.terms-acceptance::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #AE2C2A, transparent);
}

.terms-acceptance p {
    margin: 0;
    color: #AE2C2A;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.3px;
}

.terms-acceptance:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(174, 44, 42, 0.1);
    transition: all 0.3s ease;
}

.terms-disclaimer {
    margin-top: 25px;
    padding: 18px 22px;
    background: linear-gradient(135deg, #fafafa, #f5f5f5);
    border-radius: 8px;
    border-left: 4px solid #AE2C2A;
    border-right: 4px solid #AE2C2A;
    text-align: center;
    box-shadow: 0 3px 10px rgba(174, 44, 42, 0.08);
    position: relative;
}

.terms-disclaimer::before {
    content: '⚠️';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 0 10px;
    font-size: 1.2rem;
}

.terms-disclaimer p {
    margin: 0;
    color: #696969;
    font-size: 0.95rem;
    line-height: 1.6;
    font-weight: 500;
    font-style: italic;
}

/* Efeito hover para melhor interatividade */
.terms-intro:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(174, 44, 42, 0.2);
    transition: all 0.3s ease;
}

.terms-acceptance:hover {
    transform: scale(1.02);
    transition: all 0.3s ease;
}

.terms-disclaimer:hover {
    background: linear-gradient(135deg, #f8f8f8, #f0f0f0);
    transition: all 0.3s ease;
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
    color: #696969;
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
    cursor: pointer;
}

.checkbox-group label {
    margin: 0;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.05rem;
}

.confidentiality-notice {
    margin-top: 25px;
    padding: 20px;
    background: linear-gradient(135deg, #fff5f5, #ffebee);
    border-radius: 10px;
    border: 1px solid rgba(174, 44, 42, 0.2);
    box-shadow: 0 3px 10px rgba(174, 44, 42, 0.05);
}

.notice-content {
    display: flex;
    align-items: flex-start;
    gap: 15px;
}

.notice-icon {
    color: #AE2C2A;
    font-size: 1.3rem;
    margin-top: 3px;
    flex-shrink: 0;
}

.notice-content p {
    margin: 0;
    color: #555;
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: justify;
}

.confidentiality-notice:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(174, 44, 42, 0.1);
    transition: all 0.3s ease;
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
    color: #696969;
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

/* Forçar cor branca no ícone X */
.file-item .remove-file,
.file-item .remove-file i,
.file-item .remove-file::before,
.file-item .remove-file * {
    color: white !important;
    fill: white !important;
}

.remove-file {
    background: #dc3545 !important;
    color: white !important;
    border: none !important;
    border-radius: 50% !important;
    width: 24px !important;
    height: 24px !important;
    cursor: pointer !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 0.8rem !important;
}

.remove-file:hover {
    background: #c82333 !important;
}

.remove-file:hover,
.remove-file:hover i,
.remove-file:hover::before,
.remove-file:hover * {
    color: white !important;
    fill: white !important;
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
    color: #696969;
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

/* Loading Spinner */
.loading-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.loading-spinner i {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

/* Animação para notificação */
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Melhorar feedback do botão de cópia */
.copy-btn {
    transition: all 0.3s ease;
}

.copy-btn:active {
    transform: scale(0.95);
}

/* Estado de erro para formulário */
.form-error {
    background: #fff5f5;
    border: 2px solid #dc3545;
    border-radius: 8px;
    padding: 15px;
    margin: 20px 0;
    color: #dc3545;
    text-align: center;
    font-weight: 600;
}

/* Estilo para o wrapper do campo de data */
.date-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.date-input-wrapper input[type="text"] {
    flex: 1;
    padding-right: 45px;
}

.calendar-btn {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    color: #AE2C2A;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.calendar-btn:hover {
    background: rgba(174, 44, 42, 0.1);
    color: #ff5555;
}

.form-error i {
    margin-right: 8px;
    font-size: 1.2em;
}

.field-help {
    font-size: 0.875rem;
    color: #6c757d;
    margin-top: 5px;
    font-style: italic;
    line-height: 1.4;
}

.form-group .field-help {
    margin-bottom: 5px;
}

/* Ajustar margem quando há erro */
.form-group .field-help+.error-message {
    margin-top: 5px;
}

input[type="tel"]:focus {
    font-family: inherit;
}

/* Disclaimer do limite de arquivos */
.file-limit-disclaimer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
    padding: 10px 15px;
    background: rgba(174, 44, 42, 0.1);
    border: 1px solid rgba(174, 44, 42, 0.3);
    border-radius: 8px;
    color: #AE2C2A;
}

.file-limit-disclaimer i {
    font-size: 1rem;
    color: #AE2C2A;
    position: relative;
    top: 8px;
}

.file-limit-disclaimer small {
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0;
}
</style>
