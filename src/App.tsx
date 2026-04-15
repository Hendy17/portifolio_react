import { useEffect, useRef, useState, type VideoHTMLAttributes } from 'react';
import transferPlatformVideo from './assets/video_project_transfer_platarforma.mp4';
import transferPlatformPoster from './assets/video_project_transfer_platarforma.mp4.png';
import financialControlVideo from './assets/video_finacnceiro_web.mov';
import transferSiteVideo from './assets/video_site_tranfer.mp4';
import transferSitePoster from './assets/video_site_tranfer.mov.png';
import flow8Video from './assets/video_web_flow8.mp4';
import flow8Poster from './assets/video_web_flow8.mp4.png';

type LazyVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src' | 'poster'> & {
  src: string;
  poster: string;
  containerClassName?: string;
  rootMargin?: string;
};

function LazyVideo({
  src,
  poster,
  containerClassName,
  rootMargin = '200px',
  preload = 'metadata',
  className,
  ...videoProps
}: LazyVideoProps) {
  const supportsIntersectionObserver =
    typeof window !== 'undefined' && 'IntersectionObserver' in window;
  const [shouldLoad, setShouldLoad] = useState(() => !supportsIntersectionObserver);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || shouldLoad || !supportsIntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.15,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [rootMargin, shouldLoad, supportsIntersectionObserver]);

  return (
    <div ref={containerRef} className={containerClassName}>
      <video
        {...videoProps}
        className={className}
        poster={poster}
        preload={shouldLoad ? preload : 'none'}
        src={shouldLoad ? src : undefined}
      />
    </div>
  );
}

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
                <LazyVideo
                  containerClassName="project-video-frame"
                  className="project-video"
                  src={transferPlatformVideo}
                  poster={transferPlatformPoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="project-info">
                <h3>Plataforma de Gestao para Transporte Executivo</h3>
                <p>Plataforma web sob medida para centralizar funcionarios, veiculos, ganhos, gastos, quilometragem e relatorios da operacao de uma empresa de transporte executivo.</p>
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
                <div className="project-video-frame">
                  <video
                    className="project-video"
                    src={financialControlVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
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

            <div className="project-card" onClick={() => openModal('transfer-site')}>
              <div className="project-image project-image-3">
                <LazyVideo
                  containerClassName="project-video-frame"
                  className="project-video"
                  src={transferSiteVideo}
                  poster={transferSitePoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="project-info">
                <h3>Transfer Executivo Premium</h3>
                <p>Site institucional de alta conversão para a empresa Transfer Executivo Premium, com captação de clientes via WhatsApp automatizado, formulário inteligente e publicação no domínio escolhido pelo cliente.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>WhatsApp</span>
                  <span>Automação</span>
                  <span>UX</span>
                  <span>Deploy</span>
                </div>
              </div>
            </div>

            <div className="project-card" onClick={() => openModal('flow8-accounting')}>
              <div className="project-image project-image-4">
                <LazyVideo
                  containerClassName="project-video-frame"
                  className="project-video"
                  src={flow8Video}
                  poster={flow8Poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="project-info">
                <h3>Flow8 - Sistema Web de Gestao Contabil</h3>
                <p>Plataforma desenvolvida para automatizar o controle de despesas empresariais, com importacao de planilhas, processamento financeiro e dashboard para analise por categoria e periodo.</p>
                <div className="project-tech">
                  <span>Next.js</span>
                  <span>NestJS</span>
                  <span>TypeORM</span>
                  <span>JWT</span>
                  <span>Excel/CSV</span>
                  <span>Multi-tenant</span>
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
              <h2>Plataforma de Gestao para Transporte Executivo</h2>
            </div>
            <div className="modal-body">
              <div className="modal-images">
                <div className="modal-image-placeholder">
                  <LazyVideo
                    containerClassName="modal-video-frame"
                    className="modal-project-video"
                    src={transferPlatformVideo}
                    poster={transferPlatformPoster}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    rootMargin="0px"
                  />
                </div>
              </div>
              <div className="modal-info">
                <h3>Visao Geral</h3>
                <ul>
                  <li>✅ Plataforma web criada sob medida para transporte executivo</li>
                  <li>✅ Centralizacao de dados operacionais e financeiros em um unico sistema</li>
                  <li>✅ Apoio direto na rotina administrativa e no controle da operacao</li>
                  <li>✅ Estrutura pensada para dar mais visibilidade e organizacao ao negocio</li>
                </ul>
                <h3>Funcionalidades Principais</h3>
                <ul>
                  <li>✅ Autenticacao segura</li>
                  <li>✅ Cadastro de funcionarios e veiculos</li>
                  <li>✅ Controle financeiro por veiculo</li>
                  <li>✅ Registro de ganhos, gastos e km rodado</li>
                  <li>✅ Indicadores de desempenho e graficos comparativos</li>
                  <li>✅ Relatorios mensais em Excel e PDF</li>
                  <li>✅ Visao centralizada para mais controle e decisao</li>
                  <li>✅ Estrutura pratica e alinhada a rotina do cliente</li>
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
                  <div className="modal-video-frame">
                    <video
                      className="modal-project-video"
                      src={financialControlVideo}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
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

      {modalOpen === 'transfer-site' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>Transfer Executivo Premium</h2>
            </div>
            <div className="modal-body">
              <div className="modal-images">
                <div className="modal-image-placeholder">
                  <LazyVideo
                    containerClassName="modal-video-frame"
                    className="modal-project-video"
                    src={transferSiteVideo}
                    poster={transferSitePoster}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    rootMargin="0px"
                  />
                </div>
              </div>
              <div className="modal-info">
                <h3>Dominio Publicado</h3>
                <div className="modal-tech">
                  <a
                    href="https://transferexecutivopremium.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    transferexecutivopremium.com.br
                  </a>
                </div>
                <h3>Funcionalidades Principais</h3>
                <ul>
                  <li>✅ Site institucional premium com foco em autoridade e conversão</li>
                  <li>✅ Captação de leads integrada ao WhatsApp com atendimento automatizado</li>
                  <li>✅ Formulário inteligente para qualificar o cliente antes do contato</li>
                  <li>✅ Estrutura pensada para uma experiência mais fluida e objetiva</li>
                  <li>✅ Layout responsivo para desktop e mobile</li>
                  <li>✅ Projeto publicado em https://transferexecutivopremium.com.br/</li>
                  <li>✅ Comunicação clara dos diferenciais do serviço executivo premium</li>
                  <li>✅ Jornada otimizada para aumentar pedidos de orçamento e contato</li>
                </ul>
                <h3>Recursos Aplicados</h3>
                <div className="modal-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>WhatsApp</span>
                  <span>Automação</span>
                  <span>Formulário Inteligente</span>
                  <span>Deploy em Domínio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalOpen === 'flow8-accounting' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>Flow8 - Sistema Web de Gestao Contabil</h2>
            </div>
            <div className="modal-body">
              <div className="modal-images">
                <div className="modal-image-placeholder">
                  <LazyVideo
                    containerClassName="modal-video-frame"
                    className="modal-project-video"
                    src={flow8Video}
                    poster={flow8Poster}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    rootMargin="0px"
                  />
                </div>
              </div>
              <div className="modal-info">
                <h3>Visao Geral</h3>
                <p>Sistema web criado para automatizar o controle e a analise de despesas empresariais, reduzindo tarefas operacionais e organizando informacoes financeiras em uma unica plataforma.</p>
                <h3>Funcionalidades Principais</h3>
                <ul>
                  <li>✅ Autenticacao de usuarios com controle de acesso</li>
                  <li>✅ Estrutura multi-tenant com isolamento de dados</li>
                  <li>✅ Cadastro e busca de clientes por CNPJ</li>
                  <li>✅ Upload de arquivos Excel e CSV</li>
                  <li>✅ Processamento automatico de despesas e receitas</li>
                  <li>✅ Tratamento de formatos brasileiros de valores e datas</li>
                  <li>✅ Dashboard com indicadores por categoria e periodo</li>
                  <li>✅ Edicao, exclusao e historico detalhado de lancamentos</li>
                </ul>
                <h3>Recursos Aplicados</h3>
                <div className="modal-tech">
                  <span>Next.js</span>
                  <span>NestJS</span>
                  <span>TypeORM</span>
                  <span>JWT</span>
                  <span>Excel/CSV</span>
                  <span>Dashboard</span>
                  <span>Multi-tenant</span>
                  <span>CNPJ Search</span>
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
