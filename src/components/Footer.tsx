import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Chanthorn Yoeun</h3>
            <p className="text-gray-400">
              Full Stack Software Engineer passionate about creating amazing digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:scale-110 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:alex@example.com"
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:scale-110 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>&copy; {currentYear} Chanthorn Yoeun. All rights reserved.</p>
          
          {/* Credits Section */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Built & Designed With</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
              <div>
                <p className="text-gray-300 font-semibold mb-2">🛠️ Framework</p>
                <div className="space-y-1">
                  <p><a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">React</a></p>
                  <p><a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Tailwind CSS</a></p>
                  <p><a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Vite</a></p>
                </div>
              </div>
              <div>
                <p className="text-gray-300 font-semibold mb-2">🎨 Design</p>
                <div className="space-y-1">
                  <p><a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Radix UI</a></p>
                  <p><a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Figma AI</a></p>
                  <p><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Unsplash</a></p>
                </div>
              </div>
              <div>
                <p className="text-gray-300 font-semibold mb-2">⚡ Development</p>
                <div className="space-y-1">
                  <p><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">GitHub Copilot</a></p>
                  <p><a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">Lucide Icons</a></p>
                  <p><a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">GitHub Pages</a></p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="https://github.com/chanthornyoeun/portfolio_v1/blob/master/ATTRIBUTION.md" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-gray-100 hover:text-white transition-all font-semibold">
                → View Full Credits
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}