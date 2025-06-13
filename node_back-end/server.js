require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');

// Verificar configurações essenciais
const checkEmailConfig = () => {
  const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASS'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Variáveis de ambiente obrigatórias não definidas:');
    missingVars.forEach(varName => {
      console.error(`   - ${varName}`);
    });
    console.error('');
    console.error('📝 Crie um arquivo .env com as configurações necessárias');
    console.error('📧 Exemplo: EMAIL_USER=seu.email@gmail.com');
    console.error('🔑 Exemplo: EMAIL_PASS=sua_senha_de_app');
    process.exit(1);
  }

  // Avisos para configurações opcionais
  if (!process.env.EMAIL_RH) {
    console.warn('⚠️  EMAIL_RH não definido, usando EMAIL_USER para candidaturas');
  }

  console.log('✅ Configurações de email verificadas');
  console.log(`📧 Email principal: ${process.env.EMAIL_USER}`);
  console.log(`👥 Email RH: ${process.env.EMAIL_RH || process.env.EMAIL_USER}`);
};

// Chamar a verificação
checkEmailConfig();

// Importar configurações do banco de dados
const { initDatabase, jobsDB, applicationsDB, closeDatabase } = require('./database/database');

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos (incluindo o painel admin)
app.use(express.static('public'));

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/resumes';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'resume-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Apenas arquivos PDF são permitidos!'), false);
    }
  }
});

// Configuração do transportador de email (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Seu email
    pass: process.env.EMAIL_PASS // Sua senha de app do Gmail
  }
});

// Configurações de admin
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'admin123'
};

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Middleware de autenticação
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token de acesso requerido' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
};

// Mapeamento de emails por seção
const sectionEmails = {
  'SAC': process.env.EMAIL_SAC,
  'Comercial': process.env.EMAIL_COMERCIAL,
  'Licitação': process.env.EMAIL_LICITACAO,
  'Financeiro': process.env.EMAIL_FINANCEIRO,
  'Comercial - Seja Parceiro': process.env.EMAIL_COMERCIAL,
  'Contato - SAC': process.env.EMAIL_SAC,
  'Contato - Comercial': process.env.EMAIL_COMERCIAL,
  'Contato - Licitação': process.env.EMAIL_LICITACAO,
  'Contato - Financeiro': process.env.EMAIL_FINANCEIRO
};

// ROTA ORIGINAL DE ENVIO DE EMAIL (mantida)
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, telefone, empresa, message, section, toEmail } = req.body;
    
    console.log('📨 Dados recebidos:', {
      name,
      email,
      telefone,
      empresa,
      section,
      messageLength: message ? message.length : 0
    });
    
    // Determina o email de destino
    let destinationEmail = toEmail;
    
    // Se não foi especificado um email, usa o mapeamento por seção
    if (!destinationEmail) {
      destinationEmail = sectionEmails[section] || sectionEmails['SAC'];
    }
    
    // Se ainda não tem email, usa o padrão
    if (!destinationEmail) {
      destinationEmail = 'fernandobastosleite7@gmail.com';
    }
    
    // Detecta se é do formulário "Seja Parceiro" ou "Contato" baseado na seção
    const isSejaParceiroForm = section === 'Comercial - Seja Parceiro';
    const isContatoForm = section && section.startsWith('Contato -');
    
    console.log('🔍 Tipo de formulário detectado:', {
      section,
      isSejaParceiroForm,
      isContatoForm,
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
      // Template para formulário de "Contato" (padrão para todos os outros)
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
      from: 'fernandobastosleite7@gmail.com',
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
    console.log('-----------------------------------');
    
    res.json({ success: true, message: 'Email enviado com sucesso!' });
    
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    console.error('❌ Stack trace:', error.stack);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      message: 'Erro interno do servidor ao enviar email'
    });
  }
});

// NOVAS ROTAS PARA O SISTEMA DE VAGAS COM SQLITE

// Rota de login do admin
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    const token = jwt.sign(
      { username: username, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      token: token,
      admin: { username: username }
    });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Verificar token
app.get('/api/admin/verify', authenticateAdmin, (req, res) => {
  res.json({ success: true, user: req.user });
});

// ROTAS DE VAGAS COM SQLITE

// Listar vagas públicas (para o frontend)
app.get('/api/jobs', (req, res) => {
  jobsDB.getActive((err, jobs) => {
    if (err) {
      console.error('❌ Erro ao buscar vagas ativas:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.json(jobs);
    }
  });
});

// Listar todas as vagas (admin)
app.get('/api/admin/jobs', authenticateAdmin, (req, res) => {
  jobsDB.getAll((err, jobs) => {
    if (err) {
      console.error('❌ Erro ao buscar todas as vagas:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.json(jobs);
    }
  });
});

// Criar nova vaga
app.post('/api/admin/jobs', authenticateAdmin, (req, res) => {
  try {
    const {
      title,
      department,
      location,
      workload,
      type,
      salary,
      shortDescription,
      fullDescription,
      mainRequirements,
      additionalRequirements,
      benefits
    } = req.body;

    // Validações básicas
    if (!title || !department || !location || !workload || !type || !shortDescription) {
      return res.status(400).json({ error: 'Campos obrigatórios não preenchidos' });
    }

    const jobData = {
      title,
      department,
      location,
      workload,
      type,
      salary: salary || null,
      shortDescription,
      fullDescription: fullDescription || null,
      mainRequirements: mainRequirements || [],
      additionalRequirements: additionalRequirements || [],
      benefits: benefits || []
    };

    jobsDB.create(jobData, (err, newJob) => {
      if (err) {
        console.error('❌ Erro ao criar vaga:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        console.log('✅ Nova vaga criada:', newJob.title);
        res.status(201).json(newJob);
      }
    });
  } catch (error) {
    console.error('❌ Erro ao processar criação de vaga:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Atualizar vaga
app.put('/api/admin/jobs/:id', authenticateAdmin, (req, res) => {
  try {
    const jobId = parseInt(req.params.id);
    const {
      title,
      department,
      location,
      workload,
      type,
      salary,
      shortDescription,
      fullDescription,
      mainRequirements,
      additionalRequirements,
      benefits
    } = req.body;

    // Validações básicas
    if (!title || !department || !location || !workload || !type || !shortDescription) {
      return res.status(400).json({ error: 'Campos obrigatórios não preenchidos' });
    }

    const jobData = {
      title,
      department,
      location,
      workload,
      type,
      salary: salary || null,
      shortDescription,
      fullDescription: fullDescription || null,
      mainRequirements: mainRequirements || [],
      additionalRequirements: additionalRequirements || [],
      benefits: benefits || []
    };

    jobsDB.update(jobId, jobData, (err, updatedJob) => {
      if (err) {
        console.error('❌ Erro ao atualizar vaga:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else if (!updatedJob) {
        res.status(404).json({ error: 'Vaga não encontrada' });
      } else {
        console.log('✅ Vaga atualizada:', updatedJob.title);
        res.json(updatedJob);
      }
    });
  } catch (error) {
    console.error('❌ Erro ao processar atualização de vaga:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Alternar status da vaga (ativar/desativar)
app.patch('/api/admin/jobs/:id/toggle', authenticateAdmin, (req, res) => {
  try {
    const jobId = parseInt(req.params.id);

    jobsDB.toggleStatus(jobId, (err, updatedJob) => {
      if (err) {
        console.error('❌ Erro ao alterar status da vaga:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else if (!updatedJob) {
        res.status(404).json({ error: 'Vaga não encontrada' });
      } else {
        console.log('✅ Status da vaga alterado:', updatedJob.title, updatedJob.isActive);
        res.json(updatedJob);
      }
    });
  } catch (error) {
    console.error('❌ Erro ao processar alteração de status:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Excluir vaga
app.delete('/api/admin/jobs/:id', authenticateAdmin, (req, res) => {
  try {
    const jobId = parseInt(req.params.id);

    jobsDB.delete(jobId, (err, result) => {
      if (err) {
        console.error('❌ Erro ao excluir vaga:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        console.log('✅ Vaga excluída, ID:', result.deletedId);
        res.json({ success: true, message: 'Vaga excluída com sucesso' });
      }
    });
  } catch (error) {
    console.error('❌ Erro ao processar exclusão de vaga:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// ROTAS DE CANDIDATURAS COM SQLITE

// Enviar candidatura
app.post('/api/job-applications', upload.single('resume'), async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      position,
      education,
      experience,
      message,
      expectations,
      jobId,
      jobTitle
    } = req.body;

    // Validações básicas
    if (!name || !email || !phone || !position || !education || !experience || !message) {
      return res.status(400).json({ error: 'Campos obrigatórios não preenchidos' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Currículo é obrigatório' });
    }

    const applicationData = {
      name,
      email,
      phone,
      position: jobTitle || position,
      education,
      experience,
      message,
      expectations: expectations || null,
      jobId: jobId ? parseInt(jobId) : null,
      resumePath: `/uploads/resumes/${req.file.filename}`
    };

    applicationsDB.create(applicationData, async (err, newApplication) => {
      if (err) {
        console.error('❌ Erro ao criar candidatura:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
        return;
      }

      // Enviar email de notificação
      try {
        // Determinar email de destino para RH
        const destinationEmail = process.env.EMAIL_RH || 
                               process.env.EMAIL_USER || 
                               'fernandobastosleite7@gmail.com';

        console.log('📧 Enviando email de candidatura para:', destinationEmail);

        const mailOptions = {
          from: process.env.EMAIL_USER || 'fernandobastosleite7@gmail.com',
          to: destinationEmail,
          subject: `Nova Candidatura - ${newApplication.position}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #AE2C2A; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0;">👤 Nova Candidatura Recebida</h2>
                <p style="margin: 10px 0 0 0; font-size: 16px;">Sistema de Vagas - UniHospitalar</p>
              </div>
              
              <div style="padding: 20px; background-color: #f9f9f9;">
                <h3 style="color: #AE2C2A; margin-top: 0;">📋 Dados do Candidato:</h3>
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
                    <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Vaga:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd;">${newApplication.position}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Formação:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd;">${education}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Experiência:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd;">${experience}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Expectativas:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd;">${expectations || 'Não informado'}</td>
                  </tr>
                </table>
              </div>
              
              <div style="padding: 20px;">
                <h3 style="color: #AE2C2A; margin-top: 0;">📝 Apresentação Pessoal:</h3>
                <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #AE2C2A; white-space: pre-wrap;">${message}</div>
              </div>
              
              <div style="background-color: #28a745; color: white; padding: 15px; text-align: center;">
                <p style="margin: 0; font-weight: bold;">✅ Ação Requerida: Análise de Candidatura</p>
                <p style="margin: 5px 0 0 0; font-size: 14px;">Currículo anexado - Acesse o painel administrativo</p>
                <p style="margin: 5px 0 0 0; font-size: 12px;">Painel: ${req.protocol}://${req.get('host')}/admin</p>
              </div>
              
              <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
                <p style="margin: 0;">Enviado através do sistema de vagas - UniHospitalar</p>
                <p style="margin: 5px 0 0 0;">Data: ${new Date().toLocaleString('pt-BR')}</p>
                <p style="margin: 5px 0 0 0;">ID da Candidatura: #${newApplication.id}</p>
              </div>
            </div>
          `,
          attachments: [{
            filename: `curriculo-${name.replace(/\s+/g, '-').toLowerCase()}.pdf`,
            path: req.file.path
          }]
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email de candidatura enviado para:', destinationEmail);
        
      } catch (emailError) {
        console.error('❌ Erro ao enviar email de candidatura:', emailError);
        console.error('❌ Detalhes do erro:', {
          message: emailError.message,
          code: emailError.code,
          command: emailError.command
        });
        
        // Log das configurações de email (sem mostrar senha)
        console.log('📧 Configurações de email:', {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_RH || process.env.EMAIL_USER || 'fernandobastosleite7@gmail.com',
          emailUserDefined: !!process.env.EMAIL_USER,
          emailRhDefined: !!process.env.EMAIL_RH
        });
        
        // Não falha a candidatura se o email não for enviado
      }

      console.log('✅ Nova candidatura recebida:', name, '-', newApplication.position);
      res.status(201).json({ 
        success: true, 
        message: 'Candidatura enviada com sucesso!',
        application: newApplication 
      });
    });
  } catch (error) {
    console.error('❌ Erro ao processar candidatura:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Listar candidaturas (admin)
app.get('/api/admin/applications', authenticateAdmin, (req, res) => {
  try {
    const filters = {};
    
    if (req.query.status) {
      filters.status = req.query.status;
    }
    
    if (req.query.jobId) {
      filters.jobId = parseInt(req.query.jobId);
    }

    applicationsDB.getAll(filters, (err, applications) => {
      if (err) {
        console.error('❌ Erro ao buscar candidaturas:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        res.json(applications);
      }
    });
  } catch (error) {
    console.error('❌ Erro ao processar listagem de candidaturas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Atualizar status da candidatura
app.put('/api/admin/applications/:id', authenticateAdmin, (req, res) => {
  try {
    const applicationId = parseInt(req.params.id);
    const { status } = req.body;

    const validStatuses = ['Pendente', 'Em Análise', 'Aprovado', 'Rejeitado'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Status inválido' });
    }

    applicationsDB.updateStatus(applicationId, status, (err, updatedApplication) => {
      if (err) {
        console.error('❌ Erro ao atualizar status da candidatura:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else if (!updatedApplication) {
        res.status(404).json({ error: 'Candidatura não encontrada' });
      } else {
        console.log('✅ Status da candidatura atualizado:', updatedApplication.name, status);
        res.json(updatedApplication);
      }
    });
  } catch (error) {
    console.error('❌ Erro ao processar atualização de status:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Excluir candidatura
app.delete('/api/admin/applications/:id', authenticateAdmin, (req, res) => {
  try {
    const applicationId = parseInt(req.params.id);

    applicationsDB.delete(applicationId, (err, result) => {
      if (err) {
        console.error('❌ Erro ao excluir candidatura:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        // Tentar deletar o arquivo de currículo se existir
        if (result.resumePath) {
          const filePath = path.join(__dirname, 'uploads', 'resumes', path.basename(result.resumePath));
          
          fs.unlink(filePath, (err) => {
            if (err) {
              console.warn('⚠️ Erro ao deletar arquivo de currículo:', err.message);
            } else {
              console.log('✅ Arquivo de currículo deletado:', filePath);
            }
          });
        }
        
        console.log('✅ Candidatura excluída, ID:', result.deletedId);
        res.json({ 
          success: true, 
          message: 'Candidatura excluída com sucesso'
        });
      }
    });
  } catch (error) {
    console.error('❌ Erro ao processar exclusão de candidatura:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Obter estatísticas das candidaturas
app.get('/api/admin/applications/stats', authenticateAdmin, (req, res) => {
  applicationsDB.getStats((err, stats) => {
    if (err) {
      console.error('❌ Erro ao buscar estatísticas:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.json(stats);
    }
  });
});

// Servir arquivos de currículo
app.use('/uploads', express.static('uploads'));

// Rota para servir o painel administrativo
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Endpoint para verificar se o servidor está funcionando
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Servidor de email funcionando',
    timestamp: new Date().toISOString(),
    database: 'SQLite3 conectado',
    endpoints: [
      'POST /send-email - Envio de emails',
      'GET /health - Status do servidor',
      'GET /sections - Listar seções',
      'POST /api/admin/login - Login admin',
      'GET /api/jobs - Listar vagas públicas',
      'POST /api/job-applications - Enviar candidatura',
      'GET /admin - Painel administrativo'
    ]
  });
});

// Endpoint para listar as seções disponíveis
app.get('/sections', (req, res) => {
  res.json({
    message: 'Seções disponíveis para envio de email',
    sections: Object.keys(sectionEmails),
    defaultEmail: 'fernandobastosleite7@gmail.com'
  });
});

// Inicializar banco de dados e servidor
const startServer = async () => {
  try {
    // Inicializar banco de dados
    await initDatabase();
    console.log('✅ Banco de dados inicializado com sucesso');

    const PORT = process.env.PORT || 3000;
    
// Para o Vercel
if (process.env.VERCEL) {
  module.exports = app;
} else {
  // Para desenvolvimento local
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📧 Email configurado: ${process.env.EMAIL_USER}`);
    console.log(`🔗 Acesse: http://localhost:${PORT}`);
  });
}

    const server = app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
      console.log('📧 Email principal:', process.env.EMAIL_USER);
      console.log('👥 Email RH (candidaturas):', process.env.EMAIL_RH || process.env.EMAIL_USER);
      console.log(`📊 Painel administrativo: http://localhost:${PORT}/admin`);
      console.log(`👤 Usuário admin: ${ADMIN_CREDENTIALS.username}`);
      console.log(`🔑 Senha admin: ${ADMIN_CREDENTIALS.password}`);
      console.log('🗄️ Banco de dados: SQLite3 (dados persistentes)');
      console.log('');
      console.log('📋 Endpoints disponíveis:');
      console.log('  - POST /send-email (Envio de emails de contato)');
      console.log('  - GET /health (Status do servidor)');
      console.log('  - GET /sections (Listar seções)');
      console.log('  - POST /api/admin/login (Login administrativo)');
      console.log('  - GET /api/jobs (Listar vagas públicas)');
      console.log('  - POST /api/job-applications (Enviar candidatura)');
      console.log('  - GET /admin (Painel administrativo)');
      console.log('');
      console.log('🎯 Seções de email configuradas:');
      Object.keys(sectionEmails).forEach(section => {
        console.log(`  - ${section} → ${sectionEmails[section] || 'fernandobastosleite7@gmail.com'}`);
      });
      console.log('');
      console.log('💼 Sistema de vagas com SQLite3 ativo');
      console.log('📁 Dados salvos em: ./database/unihospitalar.db');
      console.log('-----------------------------------');
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      console.log('\n🔄 Encerrando servidor...');
      
      server.close(async () => {
        console.log('✅ Servidor HTTP encerrado');
        
        try {
          await closeDatabase();
          console.log('✅ Conexão com banco de dados fechada');
          process.exit(0);
        } catch (error) {
          console.error('❌ Erro ao fechar banco de dados:', error);
          process.exit(1);
        }
      });
    });

    process.on('SIGTERM', async () => {
      console.log('\n🔄 Encerrando servidor (SIGTERM)...');
      
      server.close(async () => {
        try {
          await closeDatabase();
          process.exit(0);
        } catch (error) {
          console.error('❌ Erro ao fechar banco de dados:', error);
          process.exit(1);
        }
      });
    });

  } catch (error) {
    console.error('❌ Erro ao inicializar servidor:', error);
    process.exit(1);
  }
};

// Iniciar o servidor
startServer();
