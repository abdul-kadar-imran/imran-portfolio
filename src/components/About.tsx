import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const focusAreas = [
  "Frontend Development",
  "UI Implementation",
  "Responsive Web Design",
  "Interactive Web Applications",
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8 lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden glass p-4 aspect-[4/5]">
                <img
                  src="/image.png"
                  alt="Imran A"
                  className="w-full h-full object-cover rounded-[32px]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl -z-10" />

              {/* Desktop Floating cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="hidden lg:block absolute bottom-10 right-10 glass p-4 rounded-2xl shadow-2xl border-white/20 z-20"
              >
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest dark:text-text-dark/60 text-text-light/60">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="hidden lg:block absolute top-10 left-10 glass p-4 rounded-2xl shadow-2xl border-white/20 z-20"
              >
                <div className="text-2xl font-bold text-secondary">10+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest dark:text-text-dark/60 text-text-light/60">Projects Built</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="hidden lg:block absolute bottom-32 left-10 glass p-4 rounded-2xl shadow-2xl border-white/20 z-20"
              >
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest dark:text-text-dark/60 text-text-light/60">Technologies</div>
              </motion.div>
            </motion.div>

            {/* Mobile Stats Grid */}
            <div className="grid grid-cols-3 gap-3 lg:hidden">
              <div className="glass p-4 rounded-2xl shadow-xl border-white/20 flex flex-col items-center justify-center text-center">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-[8px] font-bold uppercase tracking-widest dark:text-text-dark/60 text-text-light/60">Experience</div>
              </div>
              <div className="glass p-4 rounded-2xl shadow-xl border-white/20 flex flex-col items-center justify-center text-center">
                <div className="text-2xl font-bold text-secondary">10+</div>
                <div className="text-[8px] font-bold uppercase tracking-widest dark:text-text-dark/60 text-text-light/60">Projects</div>
              </div>
              <div className="glass p-4 rounded-2xl shadow-xl border-white/20 flex flex-col items-center justify-center text-center">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-[8px] font-bold uppercase tracking-widest dark:text-text-dark/60 text-text-light/60">Tech</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Discovery</h2>
            <h3 className="text-4xl md:text-6xl font-bold font-display dark:text-white text-app-text mb-8 leading-tight">
              About <span className="text-gradient">Me</span>
            </h3>

            <p className="text-xl dark:text-text-dark/80 text-text-light leading-relaxed mb-8 font-medium">
              I'm an Enthusiastic Computer Science Engineering graduate specializing in IoT and front-end development. Proficient in Web Development ,Typescript and React JS with hands-on experience in building responsive web applications. Eager to contribute to innovative projects and grow within a dynamic software development environment.            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-surface/50 border border-app-border group hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold dark:text-text-dark text-text-light">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
