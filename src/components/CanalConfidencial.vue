<template>
    <div class="confidential-page">
        <HomeHeader />

        <!-- Hero Section com Efeito Parallax -->
        <section class="hero-section">
            <div class="parallax-container">
                <div class="overlay"></div>
                <h1 class="hero-title">{{ t('confidential.heroTitle') }}</h1>
                <div class="hero-subtitle">{{ t('confidential.heroSubtitle') }}</div>
            </div>
        </section>

        <!-- Intro Section -->
        <section class="intro-section">
            <div class="container">
                <div class="intro-content">
                    <h2>{{ t('confidential.introTitle') }}</h2>
                    <p>{{ t('confidential.introText') }}</p>

                    <div class="highlight-box">
                        <div class="highlight-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <div class="highlight-content">
                            <h3>{{ t('confidential.highlight.title') }}</h3>
                            <p>{{ t('confidential.highlight.text') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Princípios -->
        <section class="principles-section">
            <div class="container">
                <h2>{{ t('confidential.principlesTitle') }}</h2>
                <div class="principles-grid">
                    <div class="principle-card">
                        <div class="principle-icon">
                            <i class="fas fa-user-secret"></i>
                        </div>
                        <h3>{{ t('confidential.principles.anonymity.title') }}</h3>
                        <p>{{ t('confidential.principles.anonymity.text') }}</p>
                    </div>

                    <div class="principle-card">
                        <div class="principle-icon">
                            <i class="fas fa-balance-scale"></i>
                        </div>
                        <h3>{{ t('confidential.principles.independence.title') }}</h3>
                        <p>{{ t('confidential.principles.independence.text') }}</p>
                    </div>

                    <div class="principle-card">
                        <div class="principle-icon">
                            <i class="fas fa-lock"></i>
                        </div>
                        <h3>{{ t('confidential.principles.confidentiality.title') }}</h3>
                        <p>{{ t('confidential.principles.confidentiality.text') }}</p>
                    </div>

                    <div class="principle-card">
                        <div class="principle-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h3>{{ t('confidential.principles.noRetaliation.title') }}</h3>
                        <p>{{ t('confidential.principles.noRetaliation.text') }}</p>
                    </div>

                    <!-- Novos 2 cards -->
                    <div class="principle-card">
                        <div class="principle-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3>{{ t('confidential.principles.agility.title') }}</h3>
                        <p>{{ t('confidential.principles.agility.text') }}</p>
                    </div>

                    <div class="principle-card">
                        <div class="principle-icon">
                            <i class="fas fa-gavel"></i>
                        </div>
                        <h3>{{ t('confidential.principles.transparency.title') }}</h3>
                        <p>{{ t('confidential.principles.transparency.text') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Como Funciona -->
        <section class="how-it-works">
            <div class="container">
                <h2>{{ t('confidential.howItWorksTitle') }}</h2>
                <div class="steps-grid">
                    <div class="step-card">
                        <div class="step-number">1</div>
                        <h3>{{ t('confidential.steps.report.title') }}</h3>
                        <p>{{ t('confidential.steps.report.text') }}</p>
                        <div class="step-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>

                    <div class="step-card">
                        <div class="step-number">2</div>
                        <h3>{{ t('confidential.steps.receipt.title') }}</h3>
                        <p>{{ t('confidential.steps.receipt.text') }}</p>
                        <div class="step-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>

                    <div class="step-card">
                        <div class="step-number">3</div>
                        <h3>{{ t('confidential.steps.investigation.title') }}</h3>
                        <p>{{ t('confidential.steps.investigation.text') }}</p>
                        <div class="step-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>

                    <div class="step-card">
                        <div class="step-number">4</div>
                        <h3>{{ t('confidential.steps.resolution.title') }}</h3>
                        <p>{{ t('confidential.steps.resolution.text') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- O que Reportar -->
        <section class="what-to-report">
            <div class="container">
                <h2>{{ t('confidential.whatToReportTitle') }}</h2>
                <div class="report-categories">
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-hand-holding-usd"></i>
                        </div>
                        <h3>{{ t('confidential.categories.corruption.title') }}</h3>
                        <p>{{ t('confidential.categories.corruption.text') }}</p>
                    </div>

                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h3>{{ t('confidential.categories.fraud.title') }}</h3>
                        <p>{{ t('confidential.categories.fraud.text') }}</p>
                    </div>

                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-user-times"></i>
                        </div>
                        <h3>{{ t('confidential.categories.harassment.title') }}</h3>
                        <p>{{ t('confidential.categories.harassment.text') }}</p>
                    </div>

                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-balance-scale"></i>
                        </div>
                        <h3>{{ t('confidential.categories.discrimination.title') }}</h3>
                        <p>{{ t('confidential.categories.discrimination.text') }}</p>
                    </div>

                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-hard-hat"></i>
                        </div>
                        <h3>{{ t('confidential.categories.safety.title') }}</h3>
                        <p>{{ t('confidential.categories.safety.text') }}</p>
                    </div>

                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-clipboard-check"></i>
                        </div>
                        <h3>{{ t('confidential.categories.compliance.title') }}</h3>
                        <p>{{ t('confidential.categories.compliance.text') }}</p>
                    </div>

                    <!-- Novos 6 cards -->
                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-eye-slash"></i>
                        </div>
                        <h3>{{ t('confidential.categories.privacy.title') }}</h3>
                        <p>{{ t('confidential.categories.privacy.text') }}</p>
                    </div>

                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-money-bill-wave"></i>
                        </div>
                        <h3>{{ t('confidential.categories.moneyLaundering.title') }}</h3>
                        <p>{{ t('confidential.categories.moneyLaundering.text') }}</p>
                    </div>

                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-handshake-slash"></i>
                        </div>
                        <h3>{{ t('confidential.categories.conflictOfInterest.title') }}</h3>
                        <p>{{ t('confidential.categories.conflictOfInterest.text') }}</p>
                    </div>

                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <h3>{{ t('confidential.categories.environmental.title') }}</h3>
                        <p>{{ t('confidential.categories.environmental.text') }}</p>
                    </div>

                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-user-shield"></i>
                        </div>
                        <h3>{{ t('confidential.categories.abuseOfPower.title') }}</h3>
                        <p>{{ t('confidential.categories.abuseOfPower.text') }}</p>
                    </div>

                    <div class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-file-contract"></i>
                        </div>
                        <h3>{{ t('confidential.categories.contractual.title') }}</h3>
                        <p>{{ t('confidential.categories.contractual.text') }}</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Important Notice -->
        <section class="important-notice">
            <div class="container">
                <div class="notice-card">
                    <div class="notice-icon">
                        <i class="fas fa-info-circle"></i>
                    </div>
                    <div class="notice-content">
                        <h3>{{ t('confidential.notice.title') }}</h3>
                        <p>{{ t('confidential.notice.text') }}</p>

                        <div class="redirect-info">
                            <h4>{{ t('confidential.notice.redirectTitle') }}</h4>
                            <ul>
                                <li><strong>{{ t('confidential.notice.redirect1.title') }}</strong> {{
                                    t('confidential.notice.redirect1.text') }}</li>
                                <li><strong>{{ t('confidential.notice.redirect2.title') }}</strong> {{
                                    t('confidential.notice.redirect2.text') }}</li>
                                <li><strong>{{ t('confidential.notice.redirect3.title') }}</strong> {{
                                    t('confidential.notice.redirect3.text') }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Action Buttons -->
        <section class="action-section">
            <div class="container">
                <!-- Texto introdutório -->
                <div class="action-intro">
                    <h2>{{ t('confidential.actionIntro.title') }}</h2>
                    <p>{{ t('confidential.actionIntro.text') }}</p>
                </div>

                <div class="action-grid">
                    <div class="action-card">
                        <div class="action-icon">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h3>{{ t('confidential.actions.makeReport.title') }}</h3>
                        <p>{{ t('confidential.actions.makeReport.text') }}</p>
                        <router-link to="/FazerRelato" class="action-button primary">
                            <i class="fas fa-edit"></i>
                            {{ t('confidential.actions.makeReport.button') }}
                        </router-link>
                    </div>

                    <div class="action-card">
                        <div class="action-icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <h3>{{ t('confidential.actions.trackReport.title') }}</h3>
                        <p>{{ t('confidential.actions.trackReport.text') }}</p>
                        <router-link to="/ConsultaStatus" class="action-button secondary">
                            <i class="fas fa-clipboard-list"></i>
                            {{ t('confidential.actions.trackReport.button') }}
                        </router-link>
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
import { useConfidentialChannelTranslation } from '@/composables/useConfidentialChannelTranslation.js'

export default {
    name: 'CanalConfidencial',
    components: {
        HomeHeader,
        HomeFooter
    },
    setup() {
        const { t, currentLanguage, setLanguage } = useConfidentialChannelTranslation()

        return {
            t,
            currentLanguage,
            setLanguage
        }
    },
    data() {
        return {
            showTrackingModal: false,
            tracking: {
                reportNumber: '',
                accessCode: ''
            },
            trackingLoading: false,
            trackingResult: null,
            trackingError: null
        }
    },
    methods: {
        closeModal() {
            this.showTrackingModal = false
            this.tracking = { reportNumber: '', accessCode: '' }
            this.trackingResult = null
            this.trackingError = null
        },
        async trackReport() {
            this.trackingLoading = true
            this.trackingError = null
            this.trackingResult = null

            try {
                // Simular consulta à API
                await new Promise(resolve => setTimeout(resolve, 2000))

                // Simular resultado - verificar se ambos os códigos foram fornecidos
                if (this.tracking.reportNumber && this.tracking.accessCode) {
                    // Simular validação dos códigos
                    if (this.tracking.reportNumber.length >= 8 && this.tracking.accessCode.length >= 6) {
                        this.trackingResult = {
                            protocol: this.tracking.reportNumber,
                            code: this.tracking.accessCode,
                            date: new Date().toLocaleDateString(),
                            status: 'in-progress',
                            statusClass: 'in-progress'
                        }
                    } else {
                        throw new Error('Códigos inválidos')
                    }
                } else {
                    throw new Error('Ambos os códigos são obrigatórios')
                }
            } catch (error) {
                this.trackingError = this.t('confidential.modal.error')
            } finally {
                this.trackingLoading = false
            }
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<style scoped>
.confidential-page {
    min-height: 100vh;
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

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Intro Section */
.intro-section {
    padding: 80px 0;
    background: #f8f9fa;
}

.intro-content {
    max-width: 900px;
    margin: 0 auto;
}

.intro-content h2 {
    font-size: 2.5rem;
    color: #AE2C2A;
    margin-bottom: 30px;
    font-weight: 700;
    text-align: center;
}

.intro-content>p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 40px;
    text-align: justify;
}

.highlight-box {
    display: flex;
    align-items: center;
    gap: 20px;
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-left: 5px solid #AE2C2A;
}

.highlight-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    flex-shrink: 0;
}

.highlight-content h3 {
    color: #AE2C2A;
    font-size: 1.4rem;
    margin-bottom: 10px;
    font-weight: 600;
}

.highlight-content p {
    color: #696969;
    line-height: 1.6;
    margin: 0;
}

/* Principles Section */
.principles-section {
    padding: 80px 0;
    background: white;
}

.principles-section h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #AE2C2A;
    margin-bottom: 60px;
    font-weight: 700;
}

.principles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.principle-card {
    background: #f8f9fa;
    padding: 40px 30px;
    border-radius: 15px;
    border: 1px solid rgba(174, 44, 42, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid transparent;
}

.principle-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #AE2C2A;
}

.principle-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 1.8rem;
    color: white;
}

.principle-card h3 {
    font-size: 1.3rem;
    background: linear-gradient(-135deg, #2c3e50, #AE2C2A);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
    font-weight: 600;
}

.principle-card p {
    color: #696969;
    line-height: 1.6;
}

/* How it Works */
.how-it-works {
    padding: 80px 0;
    background: #f8f9fa;
}

.how-it-works h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #AE2C2A;
    margin-bottom: 60px;
    font-weight: 700;
}

.steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.step-card {
    background: white;
    padding: 40px 30px;
    border-radius: 15px;
    text-align: center;
    border: 1px solid rgba(174, 44, 42, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-card:hover {
    transform: translateY(-5px);
}

.step-number {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
}

.step-card h3 {
    font-size: 1.3rem;
    background: linear-gradient(-135deg, #2c3e50, #AE2C2A);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
    font-weight: 600;
}

.step-card p {
    color: #696969;
    line-height: 1.6;
}

/* Step Arrows */
.step-arrow {
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    color: #AE2C2A;
    font-size: 1.5rem;
    z-index: 10;
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    animation: pulse-arrow 2s infinite;
}

.step-card:last-child .step-arrow {
    display: none;
}

@keyframes pulse-arrow {
    0% {
        transform: translateY(-50%) scale(1);
    }

    50% {
        transform: translateY(-50%) scale(1.1);
    }

    100% {
        transform: translateY(-50%) scale(1);
    }
}

/* What to Report */
.what-to-report {
    padding: 80px 0;
    background: white;
}

.what-to-report h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #AE2C2A;
    margin-bottom: 60px;
    font-weight: 700;
}

.report-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.category-card {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(174, 44, 42, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.category-card:hover {
    border-color: #AE2C2A;
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(174, 44, 42, 0.1);
}

.category-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 1.5rem;
    color: white;
}

.category-card h3 {
    font-size: 1.2rem;
    background: linear-gradient(-135deg, #2c3e50, #AE2C2A);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
    font-weight: 600;
}

.category-card p {
    color: #696969;
    line-height: 1.5;
    font-size: 0.95rem;
}

/* Important Notice */
.important-notice {
    padding: 80px 0;
    background: #f8f9fa;
}

.notice-card {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-left: 5px solid #AE2C2A;
    display: flex;
    gap: 20px;
}

.notice-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(-135deg, #2c3e50, #AE2C2A);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    flex-shrink: 0;
}

.notice-content h3 {
    color: #AE2C2A;
    font-size: 1.4rem;
    margin-bottom: 15px;
    font-weight: 600;
    text-transform: uppercase;
}

.notice-content p {
    color: #696969;
    line-height: 1.6;
    margin-bottom: 20px;
}

.redirect-info h4 {
    background: linear-gradient(-135deg, #2c3e50, #AE2C2A);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.1rem;
    margin-bottom: 10px;
    font-weight: 600;
}

.redirect-info ul {
    list-style: none;
    padding: 0;
}

.redirect-info li {
    color: #696969;
    line-height: 1.6;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
}

.redirect-info li::before {
    content: '•';
    color: #AE2C2A;
    font-weight: bold;
    position: absolute;
    left: 0;
}

/* Action Section */
.action-intro {
    text-align: center;
    margin-bottom: 50px;
}

.action-intro h2 {
    font-size: 2.5rem;
    color: #AE2C2A;
    margin-bottom: 20px;
    font-weight: 700;
}

.action-intro p {
    font-size: 1.2rem;
    color: #696969;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.action-section {
    padding: 80px 0;
    background: white;
}

.action-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 40px;
    max-width: 900px;
    margin: 0 auto;
}

.action-card {
    background: #f8f9fa;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid transparent;
}

.action-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #AE2C2A;
}

.action-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 2rem;
    color: white;
}

.action-card h3 {
    font-size: 1.5rem;
    color: #AE2C2A;
    margin-bottom: 15px;
    font-weight: 600;
}

.action-card p {
    color: #696969;
    line-height: 1.6;
    margin-bottom: 30px;
}

.action-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.action-button.primary {
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    color: white;
}

.action-button.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(174, 44, 42, 0.3);
}

.action-button.secondary {
    background: #6c757d;
    color: white;
}

.action-button.secondary:hover {
    background: #5a6268;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(108, 117, 125, 0.3);
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    border-radius: 15px;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px 20px;
    border-bottom: 1px solid #e9ecef;
}

.modal-header h3 {
    color: #AE2C2A;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #6c757d;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.close-btn:hover {
    background: #f8f9fa;
    color: #AE2C2A;
}

.modal-body {
    padding: 30px;
}

.modal-body>p {
    color: #696969;
    line-height: 1.6;
    margin-bottom: 30px;
}

.tracking-form {
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 600;
}

.form-group input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    box-sizing: border-box;
}

.form-group input:focus {
    outline: none;
    border-color: #AE2C2A;
}

.form-actions {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
}

.btn-cancel {
    padding: 12px 25px;
    background: #6c757d;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-cancel:hover {
    background: #5a6268;
}

.btn-track {
    padding: 12px 25px;
    background: linear-gradient(135deg, #AE2C2A, #ff5555);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-track:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(174, 44, 42, 0.3);
}

.btn-track:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

/* Tracking Result */
.tracking-result {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 25px;
    border-left: 4px solid #28a745;
}

.result-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.result-header i {
    color: #28a745;
    font-size: 1.2rem;
}

.result-header h4 {
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
}

.result-info {
    margin-bottom: 20px;
}

.info-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e9ecef;
}

.info-row:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.label {
    font-weight: 600;
    color: #333;
}

.value {
    color: #696969;
}

.value.status {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
}

.value.status.in-progress {
    background: #fff3cd;
    color: #856404;
}

.value.status.completed {
    background: #d4edda;
    color: #155724;
}

.value.status.pending {
    background: #f8d7da;
    color: #721c24;
}

.status-description {
    background: white;
    padding: 15px;
    border-radius: 8px;
    border-left: 3px solid #AE2C2A;
}

.status-description p {
    margin: 0;
    color: #696969;
    line-height: 1.6;
}

/* Tracking Error */
.tracking-error {
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.error-icon {
    color: #721c24;
    font-size: 1.5rem;
}

.tracking-error p {
    color: #721c24;
    margin: 0;
    font-weight: 500;
}

/* Responsividade */
@media (max-width: 1130px) {
    .steps-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .action-intro h2 {
        font-size: 2rem;
    }

    .action-intro p {
        font-size: 1.1rem;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .intro-content h2,
    .principles-section h2,
    .how-it-works h2,
    .what-to-report h2 {
        font-size: 2rem;
    }

    .principles-grid,
    .steps-grid,
    .report-categories,
    .action-grid {
        grid-template-columns: 1fr;
    }

    .steps-grid {
        position: relative;
    }

    .step-arrow {
        right: 50%;
        top: auto;
        bottom: -20px;
        transform: translateX(50%) rotate(90deg);
        animation: pulse-arrow-mobile 2s infinite;
    }

    @keyframes pulse-arrow-mobile {
        0% {
            transform: translateX(50%) rotate(90deg) scale(1);
        }

        50% {
            transform: translateX(50%) rotate(90deg) scale(1.1);
        }

        100% {
            transform: translateX(50%) rotate(90deg) scale(1);
        }
    }

    .highlight-box {
        flex-direction: column;
        text-align: center;
    }

    .notice-card {
        flex-direction: column;
        text-align: center;
    }

    .notice-icon {
        margin: 0 auto;
    }

    .action-grid {
        max-width: 100%;
    }

    .modal-content {
        width: 95%;
    }

    .modal-header,
    .modal-body {
        padding: 20px;
    }

    .form-actions {
        flex-direction: column;
    }

    .info-row {
        flex-direction: column;
        gap: 5px;
    }
}

@media (max-width: 576px) {
    .action-intro h2 {
        font-size: 1.8rem;
    }

    .action-intro p {
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .intro-content h2,
    .principles-section h2,
    .how-it-works h2,
    .what-to-report h2 {
        font-size: 1.8rem;
    }

    .principle-card,
    .step-card,
    .category-card,
    .action-card {
        padding: 30px 20px;
    }

    .action-button {
        padding: 12px 25px;
        font-size: 1rem;
    }

    .modal-header h3 {
        font-size: 1.3rem;
    }

    .step-arrow {
        bottom: -15px;
        width: 35px;
        height: 35px;
        font-size: 1.2rem;
    }
}
</style>
