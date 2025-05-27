exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    console.log('📨 Function chamada');
    console.log('📨 Body:', event.body);
    
    const data = JSON.parse(event.body);
    const { name, email, telefone, empresa, message, section } = data;

    console.log('📨 Dados recebidos:', { name, email, section });

    // Por enquanto, vamos apenas simular o envio
    // TODO: Implementar nodemailer depois
    
    console.log('✅ Email simulado enviado com sucesso');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email enviado com sucesso!' 
      })
    };

  } catch (error) {
    console.error('❌ Erro na function:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: error.message 
      })
    };
  }
};
