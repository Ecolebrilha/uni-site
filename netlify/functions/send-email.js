const nodemailer = require('nodemailer');

// Configuração do transportador de email
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Mapeamento de emails por seção
const sectionEmails = {
  'SAC': process.env.EMAIL_SAC || 'fernandobastosleite7@gmail.com',
  'Comercial': process.env.EMAIL_COMERCIAL || 'fernandobastosleite7@gmail.com',
  'Licitação': process.env.EMAIL_LICITACAO || 'fernandobastosleite7@gmail.com',
  'Financeiro': process.env.EMAIL_FINANCEIRO || 'fernandobastosleite7@gmail.com',
  'Comercial - Seja Parceiro': process.env.EMAIL_COMERCIAL || 'fernandobastosleite7@gmail.com',
  'Contato - SAC': process.env.EMAIL_SAC || 'fernandobastosleite7@gmail.com',
  'Contato - Comercial': process.env.EMAIL_COMERCIAL || 'fernandobastosleite7@gmail.com',
  'Contato - Licitação': process.env.EMAIL_LICITACAO || 'fernandobastosleite7@gmail.com',
  'Contato - Financeiro': process.env.EMAIL_FINANCEIRO || 'fernandobastosleite7@gmail.com'
};

exports.handler = async (event, context) => {
  // Permitir apenas POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Headers CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const { name, email, telefone, empresa, message, section } = JSON.parse(event.body);
    
    console.log('📨 Dados recebidos:', {
      name,
      email,
      telefone,
      empresa,
      section,
      messageLength: message ? message.length : 0
    });
    
    // Determina o email de destino
    const destinationEmail = sectionEmails[section] || sectionEmails['SAC'];
    
    // Detecta se é do formulário "Seja Parceiro" ou "Contato"
    const isSejaParceiroForm = section === 'Comercial - Seja Parceiro';
    
    console.log('🔍 Tipo de formulário detectado:', {
      section,
      isSejaParceiroForm,
      destinationEmail
    });
    
    let emailTemplate;
    
    if (isSejaParceiroForm) {
      // Template para formulário "Seja Parceiro"
      emailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #AE2C2A; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">🤝 Nova Solicitação de Parceria</h2>
            <p style="margin: 10px 0 0 0; font-size: 16px;">${section}</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h3 style="color: #AE2C2A; margin-top: 0;">📋 Dados da Empresa:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">Nome/Razão Social:</td>
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
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Empresa/CNPJ:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${empresa}</td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 20px;">
            <h3 style="color: #AE2C2A; margin-top: 0;">📝 Detalhes da Solicitação:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #AE2C2A; white-space: pre-wrap;">${message}</div>
          </div>
          
          <div style="background-color: #28a745; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0; font-weight: bold;">✅ Ação Requerida: Análise de Parceria</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Responder em até 48 horas úteis</p>
          </div>
          
          <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Enviado através do formulário "Seja Nosso Parceiro" - UniHospitalar</p>
            <p style="margin: 5px 0 0 0;">Data: ${new Date().toLocaleString('pt-BR')}</p>
          </div>
        </div>
      `;
    } else {
      // Template para formulário de "Contato"
      emailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #AE2C2A; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">📧 Nova Mensagem de Contato</h2>
            <p style="margin: 10px 0 0 0; font-size: 16px;">${section}</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h3 style="color: #AE2C2A; margin-top: 0;">👤 Dados do Contato:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">Nome:</td>
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
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Empresa:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${empresa}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Seção:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${section}</td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 20px;">
            <h3 style="color: #AE2C2A; margin-top: 0;">💬 Mensagem:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #AE2C2A; white-space: pre-wrap;">${message}</div>
          </div>
          
          <div style="background-color: #007bff; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0; font-weight: bold;">📞 Ação Requerida: Responder Contato</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Responder em até 24 horas úteis</p>
          </div>
          
          <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Enviado através da página de contato - UniHospitalar</p>
            <p style="margin: 5px 0 0 0;">Data: ${new Date().toLocaleString('pt-BR')}</p>
          </div>
        </div>
      `;
    }
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: destinationEmail,
      subject: `${section} - Novo contato de ${name}`,
      html: emailTemplate
    };

    console.log('📤 Tentando enviar email...', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    await transporter.sendMail(mailOptions);
    
    console.log(`✅ Email enviado com sucesso!`);
    console.log(`📧 Para: ${destinationEmail}`);
    console.log(`📋 Seção: ${section}`);
    console.log(`👤 De: ${name} (${email})`);
    console.log(`📅 Data: ${new Date().toLocaleString('pt-BR')}`);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Email enviado com sucesso!' })
    };
    
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: error.message,
        message: 'Erro interno do servidor ao enviar email'
      })
    };
  }
};
