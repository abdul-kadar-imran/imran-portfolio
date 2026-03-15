import { motion } from 'motion/react';
import { Cpu, Github, Brain } from 'lucide-react';
import { TechItem } from '../types';

const techStack: TechItem[] = [
  { 
    name: 'Web Development', 
    icons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    ], 
    category: 'Frontend' 
  },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
  { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
  { name: 'AI Development', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMiAzSDdhNCA0IDAgMCAwLTQgNHYxMGE0IDQgMCAwIDAgNCA0aDEwYTQgNCAwIDAgMCA0LTR2LTUiIC8+PHBhdGggZD0iTTE5IDJsLjUgMS41IDEuNS41LTEuNS41LS41IDEuNS0uNS0xLjUtMS41LS41IDEuNS0uNS41LTEuNXoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJub25lIiAvPjxwYXRoIGQ9Ik0xNSAxbC40IDEuMSAxLjEuNC0xLjEuNC0uNCAxLjEtLjQtMS4xLTEuMS0uNCAxLjEtLjQuNC0xLjF6IiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0ibm9uZSIgLz48cGF0aCBkPSJNMjIgNmwuNCAxLjEgMS4xLjQtMS4xLjQtLjQgMS4xLS40LTEuMS0xLjEtLjQuMS4xLS40eiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9Im5vbmUiIC8+PHRleHQgeD0iMTAuNSIgeT0iMTUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNyIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0iY3VycmVudENvbG9yIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BSTwvdGV4dD48L3N2Zz4=', category: 'Frontend' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', category: 'Tools' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'Tools' },
];

const concepts = [
  "Responsive Design",
  "Component-based UI",
  "Performance Optimization",
  "AI Integration",
];

export default function TechStack() {
  return (
    <section id="tech" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-display dark:text-white text-app-text mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Frontend & Tools */}
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h4 className="text-2xl font-bold font-display dark:text-white text-app-text mb-10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Cpu size={20} />
                </div>
                Frontend Technologies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {techStack.filter(t => t.category === 'Frontend').map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-[32px] flex flex-col items-center gap-6 group hover:border-primary/50 transition-all duration-500 glow-hover"
                  >
                    <div className="flex gap-4 justify-center items-center">
                      {tech.icons ? (
                        tech.icons.map((icon, idx) => (
                          <div key={idx} className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img src={icon} alt={`${tech.name} icon ${idx}`} className="w-12 h-12 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        ))
                      ) : (
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500" 
                          />
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-bold dark:text-text-dark text-text-light tracking-tight">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold font-display dark:text-white text-app-text mb-10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Github size={20} />
                </div>
                Development Tools
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {techStack.filter(t => t.category === 'Tools').map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-[32px] flex flex-col items-center gap-4 group hover:border-secondary/50 transition-all duration-500 glow-hover"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className={`w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500 ${['GitHub', 'Vercel'].includes(tech.name) ? 'dark:invert' : ''}`} 
                      />
                    </div>
                    <span className="text-sm font-bold dark:text-text-dark text-text-light tracking-tight">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Concepts */}
          <div className="glass p-12 rounded-[48px] h-fit sticky top-32">
            <h4 className="text-2xl font-bold font-display dark:text-white text-app-text mb-10">Core Concepts</h4>
            <div className="space-y-4">
              {concepts.map((concept, i) => (
                <motion.div
                  key={concept}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl bg-surface/50 border border-app-border flex items-center gap-4 group hover:border-primary/30 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="font-bold dark:text-text-dark text-text-light">{concept}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 rounded-3xl bg-primary/10 border border-primary/20">
              <p className="text-sm font-medium dark:text-primary text-primary leading-relaxed">
                Always learning and exploring new technologies to stay at the forefront of digital innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
