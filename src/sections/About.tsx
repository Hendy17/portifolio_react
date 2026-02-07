
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';
import type { Skill } from '../types';

const About = () => {
  const skills: Skill[] = [
    { name: 'React', level: 5, category: 'frontend' },
    { name: 'TypeScript', level: 5, category: 'frontend' },
    { name: 'Next.js', level: 4, category: 'frontend' },
    { name: 'Tailwind CSS', level: 5, category: 'frontend' },
    { name: 'Node.js', level: 4, category: 'backend' },
    { name: 'PostgreSQL', level: 4, category: 'backend' },
    { name: 'MongoDB', level: 3, category: 'backend' },
    { name: 'Git', level: 5, category: 'tools' },
    { name: 'Docker', level: 3, category: 'tools' },
    { name: 'AWS', level: 3, category: 'tools' },
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desenvolvimento Frontend',
      description: 'Especializado em React, TypeScript e frameworks modernos para criar interfaces responsivas e performáticas.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Criação de experiências de usuário intuitivas com foco em usabilidade e design moderno.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Otimização de aplicações para máxima velocidade e eficiência utilizando as melhores práticas.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Trabalho em Equipe',
      description: 'Experiência em metodologias ágeis e colaboração efetiva em equipes de desenvolvimento.'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}/5
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(skill.level / 5) * 100}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Sobre</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Mim</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre buscando
            criar soluções elegantes para problemas complexos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Descrição */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Minha Jornada
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Com mais de 3 anos de experiência em desenvolvimento web, especializo-me
                em criar aplicações modernas e escaláveis. Minha paixão pela tecnologia
                me leva a estar sempre atualizado com as últimas tendências e 
                melhores práticas do mercado.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Acredito que o código deve ser não apenas funcional, mas também
                limpo, mantível e bem documentado. Valorizo a colaboração em equipe
                e a comunicação clara como pilares fundamentais para o sucesso
                de qualquer projeto.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Habilidades Técnicas
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Frontend
                  </h4>
                  {getSkillsByCategory('frontend').map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Backend
                  </h4>
                  {getSkillsByCategory('backend').map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Ferramentas
                  </h4>
                  {getSkillsByCategory('tools').map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/20 hover:border-purple-200 dark:hover:border-purple-400 group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;