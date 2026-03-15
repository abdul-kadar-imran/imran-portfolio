import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, Home, User, Briefcase, Cpu, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Tech Stack', href: '#tech', icon: Cpu },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    
    if (shouldBeDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center pt-6 px-6">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-500 w-full max-w-4xl">
        <a href="#home" className="text-2xl font-bold font-display tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform">I</div>
          <span className="dark:text-white text-app-text">Imran</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'dark:text-text-dark/60 text-text-light/60 hover:text-primary dark:hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="relative w-14 h-8 rounded-full bg-black/10 dark:bg-white/10 p-1 flex items-center transition-colors overflow-hidden"
            aria-label="Toggle Theme"
          >
            <motion.div
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 rounded-full bg-white dark:bg-primary shadow-md flex items-center justify-center z-10"
            >
              {isDark ? <Moon size={14} className="text-white" /> : <Sun size={14} className="text-primary" />}
            </motion.div>
            <div className="absolute inset-0 flex justify-between px-2 items-center opacity-30">
              <Sun size={12} className="dark:text-white text-app-text" />
              <Moon size={12} className="dark:text-white text-app-text" />
            </div>
          </motion.button>

          <button
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors dark:text-text-dark text-text-light"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass w-full max-w-sm rounded-3xl p-8 flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold font-display dark:text-white text-text-light">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 dark:text-text-dark text-text-light"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                      activeSection === link.href.substring(1)
                        ? 'bg-primary text-white'
                        : 'dark:text-text-dark text-text-light hover:bg-white/10'
                    }`}
                  >
                    <link.icon size={20} />
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
