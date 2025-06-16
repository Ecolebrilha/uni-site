// Configuração da API para UniHospitalar
const API_CONFIG = {
    // URL do backend em produção (Render)
    BASE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://unihospitalar-backend.onrender.com'
      : 'http://localhost:3000',
      
    // Endpoints principais
    ENDPOINTS: {
      SEND_EMAIL: '/send-email',
      JOBS: '/api/jobs',
      JOB_APPLICATIONS: '/api/job-applications',
      HEALTH: '/health'
    }
  };
  
  export default API_CONFIG;
  