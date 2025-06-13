const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho para o arquivo do banco de dados
const dbPath = path.join(__dirname, 'unihospitalar.db');

// Criar conexão com o banco
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Erro ao conectar com o banco de dados:', err.message);
  } else {
    console.log('✅ Conectado ao banco de dados SQLite');
  }
});

// Criar tabelas se não existirem
const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Tabela de vagas
      db.run(`
        CREATE TABLE IF NOT EXISTS jobs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          department TEXT NOT NULL,
          location TEXT NOT NULL,
          workload TEXT NOT NULL,
          type TEXT NOT NULL,
          salary TEXT,
          shortDescription TEXT NOT NULL,
          fullDescription TEXT,
          mainRequirements TEXT, -- JSON string
          additionalRequirements TEXT, -- JSON string
          benefits TEXT, -- JSON string
          isActive BOOLEAN DEFAULT 1,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
          updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) {
          console.error('❌ Erro ao criar tabela jobs:', err.message);
        } else {
          console.log('✅ Tabela jobs criada/verificada');
        }
      });

      // Tabela de candidaturas
      db.run(`
        CREATE TABLE IF NOT EXISTS applications (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT NOT NULL,
          position TEXT NOT NULL,
          education TEXT NOT NULL,
          experience TEXT NOT NULL,
          message TEXT NOT NULL,
          expectations TEXT,
          jobId INTEGER,
          resumePath TEXT,
          status TEXT DEFAULT 'Pendente',
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
          updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (jobId) REFERENCES jobs (id)
        )
      `, (err) => {
        if (err) {
          console.error('❌ Erro ao criar tabela applications:', err.message);
        } else {
          console.log('✅ Tabela applications criada/verificada');
        }
      });

      // Inserir dados iniciais se não existirem
      db.get("SELECT COUNT(*) as count FROM jobs", (err, row) => {
        if (err) {
          console.error('❌ Erro ao verificar dados iniciais:', err.message);
          reject(err);
        } else if (row.count === 0) {
          console.log('📝 Inserindo dados iniciais...');
          insertInitialData();
        }
        resolve();
      });
    });
  });
};

// Inserir dados iniciais
const insertInitialData = () => {
  const initialJobs = [
    {
      title: 'Analista de Marketing Digital',
      department: 'Marketing',
      location: 'São Paulo - SP',
      workload: '40h semanais',
      type: 'CLT',
      salary: 'R$ 4.000 - R$ 6.000',
      shortDescription: 'Responsável por desenvolver e executar estratégias de marketing digital para aumentar a visibilidade da marca.',
      fullDescription: 'Buscamos um profissional proativo para integrar nossa equipe de marketing, desenvolvendo campanhas digitais inovadoras e analisando métricas de performance.',
      mainRequirements: JSON.stringify([
        'Superior completo em Marketing, Publicidade ou áreas afins',
        'Experiência com Google Ads e Facebook Ads',
        'Conhecimento em SEO e Analytics'
      ]),
      additionalRequirements: JSON.stringify([
        'Experiência com automação de marketing',
        'Conhecimento em design gráfico'
      ]),
      benefits: JSON.stringify([
        'Plano de saúde e odontológico',
        'Vale-alimentação',
        'Horário flexível'
      ])
    },
    {
      title: 'Desenvolvedor Full Stack',
      department: 'Tecnologia',
      location: 'Remoto',
      workload: '40h semanais',
      type: 'CLT',
      salary: 'R$ 6.000 - R$ 10.000',
      shortDescription: 'Desenvolvimento de aplicações web e mobile para soluções hospitalares.',
      fullDescription: 'Oportunidade para trabalhar com tecnologias modernas no desenvolvimento de sistemas para o setor de saúde.',
      mainRequirements: JSON.stringify([
        'Superior em Ciência da Computação ou áreas afins',
        'Experiência com Vue.js, Node.js e bancos de dados',
        'Conhecimento em metodologias ágeis'
      ]),
      additionalRequirements: JSON.stringify([
        'Experiência com Docker e AWS',
        'Conhecimento em testes automatizados'
      ]),
      benefits: JSON.stringify([
        'Trabalho remoto',
        'Plano de saúde premium',
        'Auxílio home office'
      ])
    },
    {
      title: 'Coordenador de Logística',
      department: 'Logística',
      location: 'São Paulo - SP',
      workload: '44h semanais',
      type: 'CLT',
      salary: 'R$ 5.000 - R$ 7.500',
      shortDescription: 'Coordenar operações logísticas e gestão de estoque de produtos hospitalares.',
      fullDescription: 'Responsável por coordenar toda a operação logística da empresa, garantindo eficiência e qualidade nos processos.',
      mainRequirements: JSON.stringify([
        'Superior em Logística, Administração ou áreas afins',
        'Experiência em gestão de equipes',
        'Conhecimento em sistemas WMS/ERP'
      ]),
      additionalRequirements: JSON.stringify([
        'Certificação em logística',
        'Experiência no setor hospitalar'
      ]),
      benefits: JSON.stringify([
        'Plano de saúde',
        'Vale-transporte',
        'Participação nos lucros'
      ])
    }
  ];

  const stmt = db.prepare(`
    INSERT INTO jobs (
      title, department, location, workload, type, salary,
      shortDescription, fullDescription, mainRequirements,
      additionalRequirements, benefits
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  initialJobs.forEach(job => {
    stmt.run([
      job.title, job.department, job.location, job.workload,
      job.type, job.salary, job.shortDescription, job.fullDescription,
      job.mainRequirements, job.additionalRequirements, job.benefits
    ]);
  });

  stmt.finalize();
  console.log('✅ Dados iniciais inseridos com sucesso');
};

// Funções para manipular vagas
const jobsDB = {
  // Listar todas as vagas
  getAll: (callback) => {
    db.all(`
      SELECT id, title, department, location, workload, type, salary,
             shortDescription, fullDescription, mainRequirements,
             additionalRequirements, benefits, isActive,
             createdAt, updatedAt
      FROM jobs
      ORDER BY createdAt DESC
    `, (err, rows) => {
      if (err) {
        callback(err, null);
      } else {
        // Parse JSON fields
        const jobs = rows.map(row => ({
          ...row,
          isActive: Boolean(row.isActive),
          mainRequirements: row.mainRequirements ? JSON.parse(row.mainRequirements) : [],
          additionalRequirements: row.additionalRequirements ? JSON.parse(row.additionalRequirements) : [],
          benefits: row.benefits ? JSON.parse(row.benefits) : []
        }));
        callback(null, jobs);
      }
    });
  },

  // Listar apenas vagas ativas
  getActive: (callback) => {
    db.all(`
      SELECT id, title, department, location, workload, type, salary,
             shortDescription, fullDescription, mainRequirements,
             additionalRequirements, benefits, isActive,
             createdAt, updatedAt
      FROM jobs
      WHERE isActive = 1
      ORDER BY createdAt DESC
    `, (err, rows) => {
      if (err) {
        callback(err, null);
      } else {
        const jobs = rows.map(row => ({
          ...row,
          isActive: Boolean(row.isActive),
          mainRequirements: row.mainRequirements ? JSON.parse(row.mainRequirements) : [],
          additionalRequirements: row.additionalRequirements ? JSON.parse(row.additionalRequirements) : [],
          benefits: row.benefits ? JSON.parse(row.benefits) : []
        }));
        callback(null, jobs);
      }
    });
  },

  // Buscar vaga por ID
  getById: (id, callback) => {
    db.get(`
      SELECT id, title, department, location, workload, type, salary,
             shortDescription, fullDescription, mainRequirements,
             additionalRequirements, benefits, isActive,
             createdAt, updatedAt
      FROM jobs
      WHERE id = ?
    `, [id], (err, row) => {
      if (err) {
        callback(err, null);
      } else if (row) {
        const job = {
          ...row,
          isActive: Boolean(row.isActive),
          mainRequirements: row.mainRequirements ? JSON.parse(row.mainRequirements) : [],
          additionalRequirements: row.additionalRequirements ? JSON.parse(row.additionalRequirements) : [],
          benefits: row.benefits ? JSON.parse(row.benefits) : []
        };
        callback(null, job);
      } else {
        callback(null, null);
      }
    });
  },

  // Criar nova vaga
  create: (jobData, callback) => {
    const {
      title, department, location, workload, type, salary,
      shortDescription, fullDescription, mainRequirements,
      additionalRequirements, benefits
    } = jobData;

    db.run(`
      INSERT INTO jobs (
        title, department, location, workload, type, salary,
        shortDescription, fullDescription, mainRequirements,
        additionalRequirements, benefits
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      title, department, location, workload, type, salary,
      shortDescription, fullDescription,
      JSON.stringify(mainRequirements || []),
      JSON.stringify(additionalRequirements || []),
      JSON.stringify(benefits || [])
    ], function(err) {
      if (err) {
        callback(err, null);
      } else {
        jobsDB.getById(this.lastID, callback);
      }
    });
  },

  // Atualizar vaga
  update: (id, jobData, callback) => {
    const {
      title, department, location, workload, type, salary,
      shortDescription, fullDescription, mainRequirements,
      additionalRequirements, benefits
    } = jobData;

    db.run(`
      UPDATE jobs SET
        title = ?, department = ?, location = ?, workload = ?,
        type = ?, salary = ?, shortDescription = ?, fullDescription = ?,
        mainRequirements = ?, additionalRequirements = ?, benefits = ?,
        updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [
      title, department, location, workload, type, salary,
      shortDescription, fullDescription,
      JSON.stringify(mainRequirements || []),
      JSON.stringify(additionalRequirements || []),
      JSON.stringify(benefits || []),
      id
    ], function(err) {
      if (err) {
        callback(err, null);
      } else {
        jobsDB.getById(id, callback);
      }
    });
  },

  // Alternar status da vaga
  toggleStatus: (id, callback) => {
    db.run(`
      UPDATE jobs SET
        isActive = NOT isActive,
        updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [id], function(err) {
      if (err) {
        callback(err, null);
      } else {
        jobsDB.getById(id, callback);
      }
    });
  },

  // Deletar vaga
  delete: (id, callback) => {
    db.run('DELETE FROM jobs WHERE id = ?', [id], function(err) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, { success: true, deletedId: id });
      }
    });
  }
};

// Funções para manipular candidaturas
const applicationsDB = {
  // Listar todas as candidaturas
  getAll: (filters = {}, callback) => {
    let query = `
      SELECT a.*, j.title as jobTitle
      FROM applications a
      LEFT JOIN jobs j ON a.jobId = j.id
    `;
    let params = [];
    let conditions = [];

    if (filters.status) {
      conditions.push('a.status = ?');
      params.push(filters.status);
    }

    if (filters.jobId) {
      conditions.push('a.jobId = ?');
      params.push(filters.jobId);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY a.createdAt DESC';

    db.all(query, params, callback);
  },

  // Buscar candidatura por ID
  getById: (id, callback) => {
    db.get(`
      SELECT a.*, j.title as jobTitle
      FROM applications a
      LEFT JOIN jobs j ON a.jobId = j.id
      WHERE a.id = ?
    `, [id], callback);
  },

  // Criar nova candidatura
  create: (applicationData, callback) => {
    const {
      name, email, phone, position, education, experience,
      message, expectations, jobId, resumePath
    } = applicationData;

    db.run(`
      INSERT INTO applications (
        name, email, phone, position, education, experience,
        message, expectations, jobId, resumePath
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      name, email, phone, position, education, experience,
      message, expectations, jobId, resumePath
    ], function(err) {
      if (err) {
        callback(err, null);
      } else {
        applicationsDB.getById(this.lastID, callback);
      }
    });
  },

  // Atualizar status da candidatura
  updateStatus: (id, status, callback) => {
    db.run(`
      UPDATE applications SET
        status = ?,
        updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [status, id], function(err) {
      if (err) {
        callback(err, null);
      } else {
        applicationsDB.getById(id, callback);
      }
    });
  },

  // Deletar candidatura
  delete: (id, callback) => {
    // Primeiro buscar o caminho do arquivo para deletar
    db.get('SELECT resumePath FROM applications WHERE id = ?', [id], (err, row) => {
      if (err) {
        callback(err, null);
        return;
      }

      // Deletar do banco
      db.run('DELETE FROM applications WHERE id = ?', [id], function(deleteErr) {
        if (deleteErr) {
          callback(deleteErr, null);
        } else {
          callback(null, { 
            success: true, 
            deletedId: id, 
            resumePath: row ? row.resumePath : null 
          });
        }
      });
    });
  },

  // Contar candidaturas por status
  getStats: (callback) => {
    db.all(`
      SELECT status, COUNT(*) as count
      FROM applications
      GROUP BY status
    `, callback);
  }
};

// Fechar conexão com o banco
const closeDatabase = () => {
  return new Promise((resolve, reject) => {
    db.close((err) => {
      if (err) {
        console.error('❌ Erro ao fechar banco de dados:', err.message);
        reject(err);
      } else {
        console.log('✅ Conexão com banco de dados fechada');
        resolve();
      }
    });
  });
};

module.exports = {
  db,
  initDatabase,
  jobsDB,
  applicationsDB,
  closeDatabase
};
