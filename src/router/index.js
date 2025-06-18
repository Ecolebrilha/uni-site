import { createRouter, createWebHistory } from 'vue-router';
import HomePrincipal from '@/components/HomePrincipal.vue';
import HomeDiferenciais from '@/components/HomeDiferenciais.vue';
import NossosServicos from '@/components/NossosServicos.vue';
import HomeProdutos from '@/components/HomeProdutos.vue';
import HomeSobre from '@/components/HomeSobre.vue';
import HomeCompliance from '@/components/HomeCompliance.vue';
import HomeLGPD from '@/components/HomeLGPD.vue';
import PoliticaPrivacidade from '@/components/PoliticaPrivacidade.vue';
import TermosLegais from '@/components/TermosLegais.vue';
import HomeContato from '@/components/HomeContato.vue';
import ContatoFormulario from '@/components/ContatoFormulario.vue';
import HomeParceiros from '@/components/HomeParceiros.vue';
import CondutaEtica from '@/components/CondutaEtica.vue';
import ResponsabilidadeSocial from '@/components/ResponsabilidadeSocial.vue';
import DireitosHumanos from '@/components/DireitosHumanos.vue';
import SegurancaDados from '@/components/SegurancaDados.vue';
import PraticasAntissuborno from '@/components/PraticasAntissuborno.vue';
import NormasSetoriais from '@/components/NormasSetoriais.vue';
import ParceirosCadastro from '@/components/SejaParceiro.vue';
import TrabalheConosco from '@/components/TrabalheConosco.vue';
import CanalConfidencial from '@/components/CanalConfidencial.vue';
import FazerRelato from '@/components/FazerRelato.vue';
import FazerReclamacao from '@/components/FazerReclamacao.vue';

const routes = [
  {
    path: '/',
    name: 'HomePrincipal',
    component: HomePrincipal,
    meta: { transition: 'fade' }
  },
  {
    path: '/Diferenciais',
    name: 'HomeDiferenciais',
    component: HomeDiferenciais,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/Servicos',
    name: 'NossosServicos',
    component: NossosServicos,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/Produtos',
    name: 'HomeProdutos',
    component: HomeProdutos,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/Sobre',
    name: 'HomeSobre',
    component: HomeSobre,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/Compliance',
    name: 'HomeCompliance',
    component: HomeCompliance,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/LGPD',
    name: 'HomeLGPD',
    component: HomeLGPD,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/PoliticaPrivacidade',
    name: 'PoliticaPrivacidade',
    component: PoliticaPrivacidade,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/TermosLegais',
    name: 'TermosLegais',
    component: TermosLegais,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/Contato',
    name: 'HomeContato',
    component: HomeContato,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/.',
    name: 'ContatoFormulario',
    component: ContatoFormulario,
    meta: { transition: 'fade' }
  },
  {
    path: '/Parceiros',
    name: 'HomeParceiros',
    component: HomeParceiros,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/CondutaEtica',
    name: 'CondutaEtica',
    component: CondutaEtica,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/ResponsabilidadeSocial',
    name: 'ResponsabilidadeSocial',
    component: ResponsabilidadeSocial,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/DireitosHumanos',
    name: 'DireitosHumanos',
    component: DireitosHumanos,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/SegurancaDados',
    name: 'SegurancaDados',
    component: SegurancaDados,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/PraticasAntissuborno',
    name: 'PraticasAntissuborno',
    component: PraticasAntissuborno,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/NormasSetoriais',
    name: 'NormasSetoriais',
    component: NormasSetoriais,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/SejaParceiro',
    name: 'ParceirosCadastro',
    component: ParceirosCadastro,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/TrabalheConosco',
    name: 'TrabalheConosco',
    component: TrabalheConosco,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/CanalConfidencial',
    name: 'CanalConfidencial',
    component: CanalConfidencial,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/FazerRelato',
    name: 'FazerRelato',
    component: FazerRelato,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/FazerReclamacao',
    name: 'FazerReclamacao',
    component: FazerReclamacao,
    meta: { transition: 'slide-left' }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Se houver uma posição salva (como ao usar o botão voltar do navegador)
    if (savedPosition) {
      return new Promise((resolve) => {
        // Pequeno atraso para garantir que a transição de página termine primeiro
        setTimeout(() => {
          resolve(savedPosition);
        }, 500);
      });
    } else {
      // Rolar para o topo com animação suave
      return new Promise((resolve) => {
        // Pequeno atraso para garantir que a transição de página termine primeiro
        setTimeout(() => {
          resolve({ top: 0, behavior: 'smooth' });
        }, 500);
      });
    }
  }
});

// Adicionar hook de navegação para preparar transições
router.beforeEach((to, from, next) => {
  // Você pode adicionar lógica personalizada aqui se necessário
  // Por exemplo, mostrar um indicador de carregamento
  
  // Continue a navegação
  next();
});

// Hook após a navegação
router.afterEach(() => {
  // Você pode adicionar lógica personalizada aqui se necessário
  // Por exemplo, ocultar um indicador de carregamento ou rastrear análises
});

export default router;
