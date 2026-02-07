
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import type { Experience, Education } from '../types';

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      position: 'Desenvolvedor Frontend Sênior',
      company: 'TechCorp Solutions',
      period: '2023 - Presente',
      description: [
        'Desenvolvimento de aplicações web complexas usando React, TypeScript e Next.js',
        'Liderança técnica de equipe com 4 desenvolvedores juniores',
        'Implementação de testes automatizados e CI/CD pipelines',
        'Melhoria da performance de aplicações em 40%'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'AWS']
    },
    {
      id: '2',
      position: 'Desenvolvedor Full Stack',
      company: 'Startup Inovadora',
      period: '2021 - 2023',
      description: [
        'Desenvolvimento de MVP para plataforma de e-commerce',
        'Criação de APIs RESTful com Node.js e Express',
        'Integração com sistemas de pagamento (Stripe, PayPal)',
        'Colaboração direta com equipes de design e produto'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker']
    },
    {
      id: '3',
      position: 'Desenvolvedor Junior',
      company: 'Agência Digital',
      period: '2020 - 2021',
      description: [
        'Desenvolvimento de websites responsivos para clientes',
        'Manutenção e otimização de aplicações existentes',
        'Colaboração em projetos ágeis usando Scrum',
        'Aprendizado contínuo de novas tecnologias'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'jQuery']
    }
  ];

  const education: Education[] = [
    {
      id: '1',
      degree: 'Bacharelado em Ciência da Computação',
      institution: 'Universidade Federal de Tecnologia',
      period: '2016 - 2020',
      description: 'Foco em desenvolvimento de software, algoritmos e estruturas de dados'
    },
    {
      id: '2',
      degree: 'Certificação em React Developer',
      institution: 'Meta (Facebook)',
      period: '2022',
      description: 'Certificação oficial em desenvolvimento React avançado'
    },
    {
      id: '3',
      degree: 'AWS Certified Developer',
      institution: 'Amazon Web Services',
      period: '2023',
      description: 'Certificação em desenvolvimento e deployment na AWS'
    }
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experiência & Educação
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Minha trajetória profissional e acadêmica no mundo da tecnologia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experiência Profissional */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg mr-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Experiência Profissional
              </h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-24 bg-gray-200 dark:bg-gray-600" />
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800" />
                  
                  {/* Content */}
                  <div className="ml-12 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h4>
                      <span className="text-blue-600 dark:text-blue-400">@</span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>

                    <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Educação */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:mt-0 mt-12"
          >
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-lg mr-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Educação & Certificações
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200 dark:bg-gray-600" />
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800" />
                  
                  {/* Content */}
                  <div className="ml-12 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    
                    <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.institution}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>

                    {edu.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Anos de Experiência', value: '3+' },
            { label: 'Projetos Concluídos', value: '50+' },
            { label: 'Tecnologias', value: '15+' },
            { label: 'Certificações', value: '5' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;