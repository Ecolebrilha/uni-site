const nodemailer = require('nodemailer');

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
    
    const data = JSON.parse(event.body);
    const { name, email, telefone, empresa, message, section } = data;

    console.log('📨 Dados recebidos:', { name, email, section });

    // Configurar transporter do nodemailer
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'fernandobastosleite7@gmail.com',
        pass: 'jhuq bnzz oheo osqk'
      }
    });

    // Detectar tipo de formulário
    const isSejaParceiroForm = section === 'Comercial - Seja Parceiro';
    
    // Template do email
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
        <div style="background-color: #AE2C2A; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">
            ${isSejaParceiroForm ? '🤝 Nova Solicitação de Parceria' : '📧 Nova Mensagem de Contato'}
          </h2>
          <p style="margin: 10px 0 0 0; font-size: 16px;">${section || 'Contato Geral'}</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h3 style="color: #AE2C2A; margin-top: 0;">
            ${isSejaParceiroForm ? '📋 Dados da Empresa:' : '👤 Dados do Contato:'}
          </h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">
                ${isSejaParceiroForm ? 'Nome/Razão Social:' : 'Nome:'}
              </td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Telefone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${telefone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">
                ${isSejaParceiroForm ? 'Empresa/CNPJ:' : 'Empresa:'}
              </td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${empresa}</td>
            </tr>
          </table>
        </div>
        
        <div style="padding: 20px;">
          <h3 style="color: #AE2C2A; margin-top: 0;">
            ${isSejaParceiroForm ? '📝 Detalhes da Solicitação:' : '💬 Mensagem:'}
          </h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #AE2C2A; white-space: pre-wrap; line-height: 1.5;">
${message}
          </div>
        </div>
        
        <div style="background-color: ${isSejaParceiroForm ? '#28a745' : '#007bff'}; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0; font-weight: bold;">
            ${isSejaParceiroForm ? '✅ Ação Requerida: Análise de Parceria' : '📞 Ação Requerida: Responder Contato'}
          </p>
          <p style="margin: 5px 0 0 0; font-size: 14px;">
            Responder em até ${isSejaParceiroForm ? '48' : '24'} horas úteis
          </p>
        </div>
        
        <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">
            Enviado através do ${isSejaParceiroForm ? 'formulário "Seja Nosso Parceiro"' : 'formulário de contato'} - UniHospitalar
          </p>
          <p style="margin: 5px 0 0 0;">Data: ${new Date().toLocaleString('pt-BR')}</p>
        </div>
      </div>
    `;

    // Configurações do email
    const mailOptions = {
      from: 'fernandobastosleite7@gmail.com',
      to: 'fernandobastosleite7@gmail.com',
      subject: `${section || 'Contato'} - ${name}`,
      html: emailTemplate
    };

    console.log('📤 Enviando email...');
    
    // Enviar email
    await transporter.sendMail(mailOptions);
    
    console.log('✅ Email enviado com sucesso!');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email enviado com sucesso!' 
      })
    };

  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: error.message,
        message: 'Erro ao enviar email'
      })
    };
  }
};
