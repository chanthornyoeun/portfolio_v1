import { Code2, Lightbulb, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code is my priority.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'I thrive on tackling complex challenges and finding elegant solutions.',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaboration and communication are key to successful projects.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a dedicated full stack software engineer with expertise in building 
              modern web applications. My passion lies in creating efficient, scalable 
              solutions using cutting-edge technologies and best practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With a strong foundation in both frontend and backend development, I enjoy 
              tackling complex challenges and transforming ideas into robust applications 
              that deliver real value to users and businesses.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I'm committed to continuous learning and staying current with emerging 
              technologies, always seeking opportunities to grow and contribute to 
              innovative projects.
            </p>
          </motion.div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="flex gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <highlight.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 dark:text-white">{highlight.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}