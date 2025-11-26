import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function Education() {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      location: 'Location',
      period: '2015 - 2019',
      achievements: [
        'GPA: 3.8/4.0',
        'Relevant coursework: Data Structures, Algorithms, Web Development',
        'Dean\'s List: All semesters',
      ],
    },
    {
      id: 2,
      degree: 'Certifications & Online Courses',
      school: 'Various Platforms',
      location: 'Online',
      period: '2019 - Present',
      achievements: [
        'AWS Certified Solutions Architect',
        'Advanced React Development',
        'Full Stack Web Development Bootcamp',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 dark:text-white">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="dark:text-white mb-1">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-1">{edu.school}</p>
                    <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <ul className="space-y-2 ml-16">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-blue-600 dark:text-purple-400 mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
