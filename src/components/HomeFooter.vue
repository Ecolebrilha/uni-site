<template>
  <footer>
    <div class="footer-logo">
      <a href="/"><img src="@/assets/selo-20anos-uni.png" alt="Imagem Selo do footer" class="logo-image"></a>
    </div>
    <div class="footer-mensagem">
      <p>{{ t('footer.copyright') }}</p>
    </div>
    <div class="footer-right">
      <div class="footer-content">
        <div class="footer-links">
          <a href="/Termos e Condições - Uni Hospitalar.pdf" target="_blank" class="legal-terms-link">Legal terms</a>
          <span class="footer-separator">|</span>
        </div>
        <div class="footer-desenvolvedor">
          <p>{{ t('footer.developedBy') }} <a href="/"><span class="company-name">Uni Hospitalar</span> <span class="registered-mark">®</span></a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useHeaderFooterTranslation } from '@/composables/useHeaderFooterTranslation.js';

export default {
  name: 'HomeFooter',
  setup() {
    const { t, currentLanguage } = useHeaderFooterTranslation()
    
    return {
      t,
      currentLanguage
    }
  }
}
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, rgba(174, 44, 42, 0.9), rgba(51, 51, 51, 0.95));
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  color: #fff;
}

.footer-logo {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.logo-image {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 5px;
  border-radius: 20%;
  cursor: pointer;
  max-height: 74px;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.1);
}

.footer-mensagem {
  flex: 2;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  max-width: 510px;
}

.footer-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.footer-content {
  display: flex;
  align-items: center;
}

.footer-separator {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  margin: 0 15px;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
}

.footer-links {
  display: flex;
  align-items: center;
}

.footer-desenvolvedor {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  font-size: 0.9em;
}

.footer-desenvolvedor a {
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.company-name {
  color: #FF5555;
  font-weight: 900;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
}

.registered-mark {
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
  margin-left: 2px;
  display: inline-block;
}

.footer-desenvolvedor a:hover .company-name {
  color: #AE2C2A;
}

.footer-desenvolvedor a:hover .registered-mark {
  color: #ffffff;
}

.legal-terms-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: inline-block;
  cursor: pointer;
}

.legal-terms-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  text-decoration: underline;
}

@media (max-width: 1360px) {
  footer {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .footer-logo {
    margin-bottom: 15px;
    justify-content: center;
  }

  .footer-mensagem {
    margin-bottom: 15px;
  }

  .footer-right {
    justify-content: center;
  }

  .footer-desenvolvedor {
    text-align: center;
  }
  
  .legal-terms-link {
    font-size: 0.85rem;
  }
}

@media (max-width: 430px) {
  .footer-content {
    flex-direction: column-reverse;
    align-items: center;
  }

  .footer-separator {
    display: none;
  }
}
</style>
