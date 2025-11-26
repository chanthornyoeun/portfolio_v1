import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 transition-colors overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 dark:text-white">
              Chanthorn Yoeun
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
              Passionate software engineer specializing in building scalable web applications
              and creating exceptional digital experiences with modern technologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:alex@example.com"
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 text-lg border-2 border-blue-600 dark:border-purple-500 text-blue-600 dark:text-purple-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Image with Creative Design */}
          <motion.div
            className="flex-1 max-w-md relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated gradient blob background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>

              {/* Decorative circles */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-20"
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              ></motion.div>

              {/* Rotating border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                  backgroundSize: '300% 300%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute inset-[3px] rounded-2xl bg-white dark:bg-gray-800"></div>
              </motion.div>

              {/* Main image */}
              <div className="relative z-10 p-3">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop"
                  alt="Workspace"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -left-4 top-1/4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border-2 border-blue-500"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">🚀 React</span>
              </motion.div>

              <motion.div
                className="absolute -right-4 top-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border-2 border-purple-500"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">💻 Node.js</span>
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-1/4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border-2 border-pink-500"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">⚡ TypeScript</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="#about" aria-label="Scroll to about section">
            <ChevronDown size={32} className="text-gray-400 dark:text-gray-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}