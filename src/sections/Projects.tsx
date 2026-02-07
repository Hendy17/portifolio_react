import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import type { Project } from '../types';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.',
      image: 'https://via.placeholder.com/400x300/4f46e5/ffffff?text=E-commerce',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      featured: true
    },
    {
      id: '2',
      title: 'Task Manager App',
      description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações.',
      image: 'https://via.placeholder.com/400x300/06b6d4/ffffff?text=Task+Manager',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      featured: true
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico com previsões detalhadas e mapas interativos.',
      image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Weather+App',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      id: '4',
      title: 'Social Media Dashboard',
      description: 'Painel de controle para gerenciar múltiplas redes sociais com analytics.',
      image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Social+Dashboard',
      technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MongoDB'],
      githubUrl: 'https://github.com'
    },
    {
      id: '5',
      title: 'Portfolio Website',
      description: 'Website responsivo para portfólio pessoal com animações e modo escuro.',
      image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Portfolio',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      id: '6',
      title: 'Fitness Tracker',
      description: 'App para acompanhamento de exercícios e nutrição com gráficos de progresso.',
      image: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Fitness+App',
      technologies: ['React Native', 'TypeScript', 'SQLite', 'Chart.js'],
      githubUrl: 'https://github.com'
    }
  ];

  const categories = ['all', 'web', 'mobile', 'fullstack'];
  const categoryLabels = {
    all: 'Todos',
    web: 'Web',
    mobile: 'Mobile',
    fullstack: 'Full Stack'
  };

  const getFilteredProjects = () => {
    if (filter === 'all') return projects;
    return projects.filter(project => {
      if (filter === 'web') {
        return project.technologies.some(tech => 
          ['React', 'Next.js', 'Vue.js'].includes(tech)
        );
      }
      if (filter === 'mobile') {
        return project.technologies.includes('React Native');
      }
      if (filter === 'fullstack') {
        return project.technologies.some(tech => 
          ['Node.js', 'Express.js'].includes(tech)
        );
      }
      return true;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes
            tecnologias e abordagens de desenvolvimento.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center space-x-1 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
            <Filter className="w-4 h-4 text-gray-500 ml-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {categoryLabels[category as keyof typeof categoryLabels]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getFilteredProjects().map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Destaque
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <Github size={18} />
                        <span className="text-sm">Código</span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interessado em ver mais projetos ou trabalhar comigo?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Vamos Conversar
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;