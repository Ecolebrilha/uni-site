<template>
  <footer>
    <div class="footer-logo">
      <img src="@/assets/footerSelo.png" alt="Imagem Selo do footer" class="logo-image">
    </div>
    <div class="footer-mensagem">
      <p>© 2025 | Uni Hospitalar Ltda. – Todos os direitos reservados</p>
    </div>
    <div class="footer-desenvolvedor">
      <p>Desenvolvido por <a href="/unihospitalarsite/"><span class="company-name">Uni Hospitalar</span> <span class="registered-mark">®</span></a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HomeFooter',
};
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
  justify-content: center; /* Centraliza horizontalmente a logo */
  align-items: center;
}

.logo-image {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 5px;
  border-radius: 40%;
}

.logo-image:hover {
  transform: scale(1.1);
}

.footer-mensagem {
  flex: 2;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
}

.footer-desenvolvedor {
  flex: 1;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  font-size: 0.9em;
  text-align: right;
}

.footer-desenvolvedor a {
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.company-name {
  color: #AE2C2A; /* Vermelho da marca */
  font-weight: 900;
  transition: color 0.3s ease-in-out;
}

.registered-mark {
  color: #ffcc00; /* Amarelo dourado para o símbolo de marca registrada */
  font-size: 1em; /* Tamanho igual ao texto */
  font-weight: bold;
  margin-left: 2px;
  display: inline-block;
}

.footer-desenvolvedor a:hover .company-name {
  color: #FF5555; /* Tom mais claro de vermelho ao passar o mouse */
}

.footer-desenvolvedor a:hover .registered-mark {
  color: #ffffff; /* Branco ao passar o mouse */
}

@media (max-width: 1055px) {
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

  .footer-desenvolvedor {
    text-align: center;
  }
}
</style>
