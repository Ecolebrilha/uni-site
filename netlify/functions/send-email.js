const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

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
    console.log('📨 Function chamada com POST');
    
    const data = JSON.parse(event.body);
    const { name, email, telefone, empresa, message, section } = data;

    console.log('📨 Dados recebidos:', { name, email, section });

    // Configurar transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'fernandobastosleite7@gmail.com',
        pass: 'jhuq bnzz oheo osqk'
      }
    });

    const isSejaParceiroForm = section === 'Comercial - Seja Parceiro';
    
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
        <div style="background-color: #AE2C2A; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">
            ${isSejaParceiroForm ? '🤝 Nova Solicitação de Parceria' : '📧 Nova Mensagem de Contato'}
          </h2>
          <p style="margin: 10px 0 0 0;">${section || 'Contato Geral'}</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h3 style="color: #AE2C2A;">Dados:</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
        </div>
        
        <div style="padding: 20px;">
          <h3 style="color: #AE2C2A;">Mensagem:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #AE2C2A;">
            ${message}
          </div>
        </div>
        
        <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p>Enviado através do site UniHospitalar - ${new Date().toLocaleString('pt-BR')}</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: 'fernandobastosleite7@gmail.com',
      to: 'fernandobastosleite7@gmail.com',
      subject: `${section || 'Contato'} - ${name}`,
      html: emailTemplate
    };

    console.log('📤 Enviando email...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado!');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email enviado com sucesso!' 
      })
    };

  } catch (error) {
    console.error('❌ Erro:', error);
    
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
