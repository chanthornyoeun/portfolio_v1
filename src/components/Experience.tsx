import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Your Company Name',
      location: 'Location',
      period: 'Jan 2022 - Present',
      description: [
        'Led development of key features and improvements',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with cross-functional teams to deliver high-quality software',
      ],
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Previous Company',
      location: 'Location',
      period: 'Jun 2020 - Dec 2021',
      description: [
        'Developed and maintained web applications using modern technologies',
        'Implemented responsive designs and optimized performance',
        'Participated in agile development processes',
      ],
    },
    {
      id: 3,
      title: 'Junior Software Developer',
      company: 'Another Company',
      location: 'Location',
      period: 'Jan 2019 - May 2020',
      description: [
        'Assisted in building user-facing features',
        'Fixed bugs and improved existing codebase',
        'Learned best practices and modern development tools',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 dark:text-white">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-gray-300 dark:border-gray-600 last:border-l-0 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white dark:border-gray-800"></div>

              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="dark:text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-blue-600 dark:text-purple-400 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
