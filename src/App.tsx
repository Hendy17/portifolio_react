import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState<string | null>(null);

  const openModal = (projectId: string) => {
    setModalOpen(projectId);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <h1 className="logo">Hendy Vorpagel</h1>
            <nav className="nav-links">
              <a href="#sobre">Sobre</a>
              <a href="#skills">Skills</a>
              <a href="#projetos">Projetos</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">Desenvolvedor Full Stack</h2>
            <p className="hero-subtitle">
              Especialista em soluções digitais para gestão empresarial, com foco em sistemas contábeis e financeiros. 
              Transformando processos manuais em automação inteligente.
            </p>
            <a href="#projetos" className="cta-button">Ver Projetos</a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="about">
        <div className="container">
          <h2 className="section-title">Sobre mim</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Desenvolvedor Full Stack com mais de 4 anos de experiência na criação de soluções web escaláveis e eficientes. Minha expertise se estende por todo o ciclo de desenvolvimento, do Frontend ao Backend, com um domínio sólido das linguagens JavaScript, React e TypeScript.
              </p>
              <p>
                No Frontend, domino HTML, CSS, React e Next.js, construindo interfaces de usuário acessíveis e com design responsivo. No Backend, crio APIs robustas com Node.js, Express, NestJS, PostgreSQL, MongoDB, GraphQL, SQLite.
              </p>
              <p>
                Sou um profissional comprometido com a entrega de soluções para empresas e clientes. Tenho forte atuação em ambientes ágeis, aplicando metodologias como Kanban, Scrum e Jira, para garantir a qualidade e a pontualidade das entregas.
              </p>
            </div>
            <div className="skills">
              <div className="skill-item">React</div>
              <div className="skill-item">Next.js</div>
              <div className="skill-item">TypeScript</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">NestJS</div>
              <div className="skill-item">PostgreSQL</div>
              <div className="skill-item">TypeORM</div>
              <div className="skill-item">JWT</div>
              <div className="skill-item">Ant Design</div>
              <div className="skill-item">Mantine UI</div>
              <div className="skill-item">Tailwind CSS</div>
              <div className="skill-item">Multi-tenant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-content">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>ApolloClient</li>
                <li>Tailwind</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>TypeScript</li>
                <li>SQLite</li>
                <li>Next.js</li>
                <li>GraphQL</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>API Integration</h3>
              <ul>
                <li>RESTful APIs</li>
                <li>Microservices</li>
                <li>Swagger</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Database</h3>
              <ul>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>SQLite</li>
                <li>MongoDB</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Agile Methodologies</h3>
              <ul>
                <li>Kanban</li>
                <li>Scrum</li>
                <li>GitHub</li>
                <li>Jira</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Data Security</h3>
              <ul>
                <li>Token Authentication</li>
                <li>WSD</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>DevOps & Automation</h3>
              <ul>
                <li>Automation of build, testing, and deployment processes</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Accessibility and Usability</h3>
              <ul>
                <li>Development of accessible and responsive interfaces</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Version Control Tools</h3>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Project Management</h3>
              <ul>
                <li>Process Automation</li>
                <li>Technical Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="projects">
        <div className="container">
          <h2 className="section-title">Projetos</h2>
          <div className="projects-grid">
            <div className="project-card" onClick={() => openModal('flow8')}>
              <div className="project-image project-image-1">
                <div className="project-mockup">
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="mockup-title">Flow8 Sistema</div>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-card">
                      <div className="mockup-text"></div>
                      <div className="mockup-text short"></div>
                    </div>
                    <div className="mockup-stats">
                      <div className="stat-item"></div>
                      <div className="stat-item"></div>
                      <div className="stat-item"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Flow8 - Sistema de Gestão Contábil</h3>
                <p>Solução completa de gestão contábil multi-tenant com processamento automático de planilhas, gestão de clientes e relatórios. Sistema em produção para empresa de contabilidade.</p>
                <div className="project-tech">
                  <span>Next.js 15</span>
                  <span>NestJS</span>
                  <span>TypeORM</span>
                  <span>Mantine UI</span>
                  <span>SQLite</span>
                  <span>JWT</span>
                </div>
              </div>
            </div>
            
            <div className="project-card" onClick={() => openModal('mobile')}>
              <div className="project-image project-image-2">
                <div className="project-mockup mobile">
                  <div className="mobile-frame">
                    <div className="mobile-header">
                      <div className="mobile-notch"></div>
                    </div>
                    <div className="mobile-content">
                      <div className="mobile-nav">
                        <div className="nav-item active"></div>
                        <div className="nav-item"></div>
                        <div className="nav-item"></div>
                      </div>
                      <div className="mobile-cards">
                        <div className="mobile-card"></div>
                        <div className="mobile-card"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Sistema de Controle Financeiro Empresarial</h3>
                <p>Plataforma completa multi-tenant para gestão financeira com dashboard analytics, processamento de planilhas Excel/CSV e emissão de notas fiscais. Sistema em produção com isolamento total por cliente.</p>
                <div className="project-tech">
                  <span>Next.js</span>
                  <span>NestJS</span>
                  <span>TypeORM</span>
                  <span>PostgreSQL</span>
                  <span>Ant Design</span>
                  <span>Recharts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modais dos Projetos */}
      {modalOpen === 'flow8' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>Flow8 - Sistema de Gestão Contábil</h2>
            </div>
            <div className="modal-body">
              <div className="modal-images">
                <div className="modal-image-placeholder">
                  <div className="image-demo flow8-demo">
                    <div className="demo-header">
                      <div className="demo-nav">
                        <div className="demo-logo">Flow8</div>
                        <div className="demo-user">👤 Admin</div>
                      </div>
                    </div>
                    <div className="demo-content">
                      <div className="demo-sidebar">
                        <div className="demo-menu-item active">📊 Dashboard</div>
                        <div className="demo-menu-item">👥 Clientes</div>
                        <div className="demo-menu-item">💰 Despesas</div>
                        <div className="demo-menu-item">📈 Relatórios</div>
                      </div>
                      <div className="demo-main">
                        <div className="demo-cards">
                          <div className="demo-card">
                            <div className="demo-card-title">💰 Total de Entradas</div>
                            <div className="demo-card-value">R$ 45.230,00</div>
                          </div>
                          <div className="demo-card">
                            <div className="demo-card-title">📤 Total de Saídas</div>
                            <div className="demo-card-value">R$ 32.150,00</div>
                          </div>
                          <div className="demo-card">
                            <div className="demo-card-title">💵 Saldo Líquido</div>
                            <div className="demo-card-value">R$ 13.080,00</div>
                          </div>
                        </div>
                        <div className="demo-table">
                          <div className="demo-table-header">Lançamentos Recentes</div>
                          <div className="demo-table-row">
                            <span>📁 Fornecedor XYZ</span>
                            <span>R$ 1.200,00</span>
                          </div>
                          <div className="demo-table-row">
                            <span>🏢 Empresa ABC</span>
                            <span>R$ 5.400,00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-info">
                <h3>Funcionalidades Principais</h3>
                <ul>
                  <li>✅ Processamento automático de planilhas Excel/CSV</li>
                  <li>✅ Gestão completa de clientes e despesas</li>
                  <li>✅ Filtros por período (mensal/trimestral)</li>
                  <li>✅ Upload de anexos e documentos</li>
                  <li>✅ Suporte a formatos brasileiros (CNPJ, valores R$)</li>
                  <li>✅ Sistema de autenticação seguro com JWT</li>
                  <li>✅ Arquitetura multi-tenant com isolamento total</li>
                  <li>✅ Interface intuitiva e responsiva</li>
                </ul>
                <h3>Tecnologias Utilizadas</h3>
                <div className="modal-tech">
                  <span>Next.js 15</span>
                  <span>NestJS</span>
                  <span>TypeORM</span>
                  <span>Mantine UI</span>
                  <span>SQLite</span>
                  <span>JWT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalOpen === 'mobile' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>Sistema de Controle Financeiro Empresarial</h2>
            </div>
            <div className="modal-body">
              <div className="modal-images">
                <div className="modal-image-placeholder">
                  <div className="image-demo finance-demo">
                    <div className="finance-header">
                      <div className="finance-nav">
                        <div className="finance-logo">Financial Control</div>
                        <div className="finance-menu">
                          <span>Dashboard</span>
                          <span>Clientes</span>
                          <span>Despesas</span>
                          <span>Emissão NF</span>
                        </div>
                      </div>
                    </div>
                    <div className="finance-dashboard">
                      <div className="dashboard-title">Dashboard</div>
                      <div className="dashboard-subtitle">Resumo visual do balanço mensal das notas emitidas.</div>
                      <div className="dashboard-content">
                        <div className="chart-section">
                          <div className="chart-container">
                            <div className="chart-title">Faturamento por Dia (R$)</div>
                            <div className="bar-chart">
                              <div className="bar" style={{height: '40%'}}></div>
                              <div className="bar" style={{height: '60%'}}></div>
                              <div className="bar" style={{height: '30%'}}></div>
                              <div className="bar" style={{height: '80%'}}></div>
                              <div className="bar" style={{height: '50%'}}></div>
                              <div className="bar" style={{height: '90%'}}></div>
                              <div className="bar" style={{height: '70%'}}></div>
                            </div>
                            <div className="chart-labels">
                              <span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span>
                            </div>
                          </div>
                        </div>
                        <div className="pie-section">
                          <div className="pie-container">
                            <div className="chart-title">Notas Emitidas por Tipo</div>
                            <div className="pie-chart"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-info">
                <h3>Funcionalidades Principais</h3>
                <ul>
                  <li>✅ Sistema multi-tenant com isolamento total por cliente</li>
                  <li>✅ Autenticação segura com JWT em HttpOnly cookies</li>
                  <li>✅ Upload e processamento automático de planilhas Excel/CSV</li>
                  <li>✅ Gestão de clientes com validação de CNPJ</li>
                  <li>✅ Dashboard com gráficos interativos (Recharts)</li>
                  <li>✅ Emissão de notas fiscais com formatos brasileiros</li>
                  <li>✅ Analytics e visualização de despesas por categoria</li>
                  <li>✅ Audit trail completo de operações</li>
                </ul>
                <h3>Stack Tecnológico</h3>
                <div className="modal-tech">
                  <span>Next.js</span>
                  <span>NestJS</span>
                  <span>TypeORM</span>
                  <span>PostgreSQL</span>
                  <span>Ant Design</span>
                  <span>Recharts</span>
                  <span>JWT</span>
                  <span>Multer</span>
                  <span>XLSX</span>
                  <span>Axios</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contato */}
      <section id="contato" className="contact">
        <div className="container">
          <h2 className="section-title">Vamos conversar?</h2>
          <div className="contact-content">
            <p>Entre em contato comigo para discutir projetos ou oportunidades</p>
            <div className="contact-links">
              <a href="mailto:contato@hendyvorpagel.com" className="contact-link">
                📧 Email
              </a>
              <a href="https://linkedin.com" className="contact-link">
                💼 LinkedIn
              </a>
              <a href="https://github.com" className="contact-link">
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Hendy Vorpagel. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;