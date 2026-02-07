
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
                Sou um desenvolvedor full stack especializado em criar soluções digitais robustas e escaláveis. 
                Com experiência comprovada em projetos reais para empresas do setor financeiro e contábil, 
                desenvolvo sistemas completos desde o backend até interfaces intuitivas, sempre focando em 
                automação de processos e eficiência operacional.
              </p>
            </div>
            <div className="skills">
              <div className="skill-item">Next.js</div>
              <div className="skill-item">NestJS</div>
              <div className="skill-item">TypeORM</div>
              <div className="skill-item">Mantine UI</div>
              <div className="skill-item">SQLite</div>
              <div className="skill-item">Multi-tenant</div>
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
            
            <div className="project-card" onClick={() => openModal('webapp')}>
              <div className="project-image project-image-3">
                <div className="project-mockup">
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="mockup-title">Web Dashboard</div>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-sidebar">
                      <div className="sidebar-item"></div>
                      <div className="sidebar-item"></div>
                      <div className="sidebar-item"></div>
                    </div>
                    <div className="mockup-main">
                      <div className="main-chart"></div>
                      <div className="main-stats">
                        <div className="stat-box"></div>
                        <div className="stat-box"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Web App</h3>
                <p>Sistema web completo com dashboard e autenticação</p>
                <div className="project-tech">
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Express</span>
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
              <h2>App Mobile - Interface Moderna</h2>
            </div>
            <div className="modal-body">
              <div className="modal-images">
                <div className="modal-image-placeholder">
                  <div className="image-demo mobile-demo">
                    <div className="phone-mockup">
                      <div className="phone-header">
                        <div className="phone-time">9:41</div>
                        <div className="phone-battery">🔋</div>
                      </div>
                      <div className="phone-content">
                        <div className="app-header">
                          <h3>Meu App</h3>
                          <div className="app-search">🔍</div>
                        </div>
                        <div className="app-cards">
                          <div className="app-card">
                            <div className="card-icon">📊</div>
                            <div className="card-info">
                              <div className="card-title">Dashboard</div>
                              <div className="card-desc">Visão geral</div>
                            </div>
                          </div>
                          <div className="app-card">
                            <div className="card-icon">⚙️</div>
                            <div className="card-info">
                              <div className="card-title">Configurações</div>
                              <div className="card-desc">Preferências</div>
                            </div>
                          </div>
                        </div>
                        <div className="app-bottom-nav">
                          <div className="nav-item active">🏠</div>
                          <div className="nav-item">📈</div>
                          <div className="nav-item">⚙️</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-info">
                <h3>Características</h3>
                <ul>
                  <li>📱 Design responsivo e intuitivo</li>
                  <li>🎨 Interface moderna com Material Design</li>
                  <li>⚡ Performance otimizada</li>
                  <li>🔄 Sincronização em tempo real</li>
                  <li>🔐 Autenticação biométrica</li>
                  <li>📊 Gráficos interativos</li>
                </ul>
                <h3>Stack Tecnológico</h3>
                <div className="modal-tech">
                  <span>React Native</span>
                  <span>TypeScript</span>
                  <span>Expo</span>
                  <span>API REST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalOpen === 'webapp' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>Web App - Sistema Completo</h2>
            </div>
            <div className="modal-body">
              <div className="modal-images">
                <div className="modal-image-placeholder">
                  <div className="image-demo webapp-demo">
                    <div className="webapp-mockup">
                      <div className="webapp-sidebar">
                        <div className="webapp-logo">🌐 WebApp</div>
                        <div className="webapp-menu">
                          <div className="menu-item active">📊 Analytics</div>
                          <div className="menu-item">👥 Usuários</div>
                          <div className="menu-item">📋 Relatórios</div>
                          <div className="menu-item">⚙️ Config</div>
                        </div>
                      </div>
                      <div className="webapp-main">
                        <div className="webapp-header">
                          <h3>Dashboard Analytics</h3>
                          <div className="webapp-user">👤 Admin</div>
                        </div>
                        <div className="webapp-stats">
                          <div className="stat-card">
                            <div className="stat-icon">👥</div>
                            <div className="stat-number">1,234</div>
                            <div className="stat-label">Usuários</div>
                          </div>
                          <div className="stat-card">
                            <div className="stat-icon">📈</div>
                            <div className="stat-number">89%</div>
                            <div className="stat-label">Growth</div>
                          </div>
                        </div>
                        <div className="webapp-chart">
                          <div className="chart-title">Vendas por Mês</div>
                          <div className="chart-bars">
                            <div className="bar" style={{height: '60%'}}></div>
                            <div className="bar" style={{height: '80%'}}></div>
                            <div className="bar" style={{height: '70%'}}></div>
                            <div className="bar" style={{height: '90%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-info">
                <h3>Funcionalidades</h3>
                <ul>
                  <li>🔐 Sistema de autenticação completo</li>
                  <li>📊 Dashboard com analytics em tempo real</li>
                  <li>👥 Gestão de usuários e permissões</li>
                  <li>📈 Relatórios personalizáveis</li>
                  <li>🔄 Integração com APIs externas</li>
                  <li>📱 Interface responsiva</li>
                </ul>
                <h3>Tecnologias</h3>
                <div className="modal-tech">
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>Socket.io</span>
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
              <h2>App Mobile - Interface Moderna</h2>
            </div>
            <div className="modal-body">
              <div className="modal-images">
                <div className="modal-image-placeholder">
                  <div className="image-demo mobile-demo">
                    <div className="phone-mockup">
                      <div className="phone-header">
                        <div className="phone-time">9:41</div>
                        <div className="phone-battery">🔋</div>
                      </div>
                      <div className="phone-content">
                        <div className="app-header">
                          <h3>Meu App</h3>
                          <div className="app-search">🔍</div>
                        </div>
                        <div className="app-cards">
                          <div className="app-card">
                            <div className="card-icon">📊</div>
                            <div className="card-info">
                              <div className="card-title">Dashboard</div>
                              <div className="card-desc">Visão geral</div>
                            </div>
                          </div>
                          <div className="app-card">
                            <div className="card-icon">⚙️</div>
                            <div className="card-info">
                              <div className="card-title">Configurações</div>
                              <div className="card-desc">Preferências</div>
                            </div>
                          </div>
                        </div>
                        <div className="app-bottom-nav">
                          <div className="nav-item active">🏠</div>
                          <div className="nav-item">📈</div>
                          <div className="nav-item">⚙️</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-info">
                <h3>Características</h3>
                <ul>
                  <li>📱 Design responsivo e intuitivo</li>
                  <li>🎨 Interface moderna com Material Design</li>
                  <li>⚡ Performance otimizada</li>
                  <li>🔄 Sincronização em tempo real</li>
                  <li>🔐 Autenticação biométrica</li>
                  <li>📊 Gráficos interativos</li>
                </ul>
                <h3>Stack Tecnológico</h3>
                <div className="modal-tech">
                  <span>React Native</span>
                  <span>TypeScript</span>
                  <span>Expo</span>
                  <span>API REST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalOpen === 'webapp' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>Web App - Sistema Completo</h2>
            </div>
            <div className="modal-body">
              <div className="modal-images">
                <div className="modal-image-placeholder">
                  <div className="image-demo webapp-demo">
                    <div className="webapp-mockup">
                      <div className="webapp-sidebar">
                        <div className="webapp-logo">🌐 WebApp</div>
                        <div className="webapp-menu">
                          <div className="menu-item active">📊 Analytics</div>
                          <div className="menu-item">👥 Usuários</div>
                          <div className="menu-item">📋 Relatórios</div>
                          <div className="menu-item">⚙️ Config</div>
                        </div>
                      </div>
                      <div className="webapp-main">
                        <div className="webapp-header">
                          <h3>Dashboard Analytics</h3>
                          <div className="webapp-user">👤 Admin</div>
                        </div>
                        <div className="webapp-stats">
                          <div className="stat-card">
                            <div className="stat-icon">👥</div>
                            <div className="stat-number">1,234</div>
                            <div className="stat-label">Usuários</div>
                          </div>
                          <div className="stat-card">
                            <div className="stat-icon">📈</div>
                            <div className="stat-number">89%</div>
                            <div className="stat-label">Growth</div>
                          </div>
                        </div>
                        <div className="webapp-chart">
                          <div className="chart-title">Vendas por Mês</div>
                          <div className="chart-bars">
                            <div className="bar" style={{height: '60%'}}></div>
                            <div className="bar" style={{height: '80%'}}></div>
                            <div className="bar" style={{height: '70%'}}></div>
                            <div className="bar" style={{height: '90%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-info">
                <h3>Funcionalidades</h3>
                <ul>
                  <li>🔐 Sistema de autenticação completo</li>
                  <li>📊 Dashboard com analytics em tempo real</li>
                  <li>👥 Gestão de usuários e permissões</li>
                  <li>📈 Relatórios personalizáveis</li>
                  <li>🔄 Integração com APIs externas</li>
                  <li>📱 Interface responsiva</li>
                </ul>
                <h3>Tecnologias</h3>
                <div className="modal-tech">
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>Socket.io</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Hendy Vorpagel. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;