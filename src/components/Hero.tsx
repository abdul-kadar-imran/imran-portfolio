import { motion } from 'motion/react';
import { ArrowRight, Download, Send, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ><br />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Available for new projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[0.9] dark:text-white text-app-text mb-6 tracking-tighter">
            Hi , I'm <span className="text-gradient">Imran</span></h1>

          <p className="text-xl dark:text-text-dark/70 text-text-light max-w-lg mb-10 leading-relaxed font-medium">
            A passionate Frontend Developer with 4 months of experience in crafting high-performance, visually stunning web experiences. <br /><br />Specialized in building smooth, responsive UIs with React and modern web technologies. <br />Noble World Record Holder in Silambam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/40 w-full sm:w-auto"
            >
              Explore Work
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </a>
            <a
              target="_blank"
              href="./Imran-resume.pdf"
              className="flex items-center justify-center gap-2 glass dark:text-white text-app-text px-8 py-4 rounded-2xl font-bold transition-all hover:bg-white/10 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Abstract Visual */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            <div className="absolute inset-0 border-[1px] border-app-border rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-10 border-[1px] border-app-border rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-20 border-[1px] border-app-border rounded-full animate-[spin_10s_linear_infinite]" />

            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-64 h-64 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-3xl opacity-20"
            />

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 glass p-6 rounded-3xl shadow-2xl border-white/20 w-64 rotate-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Cpu size={20} />
                </div>
                <div>
                  <div className="h-2 w-20 bg-primary/20 rounded-full mb-2" />
                  <div className="h-2 w-12 bg-primary/10 rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-app-border rounded-full" />
                <div className="h-1.5 w-full bg-app-border rounded-full" />
                <div className="h-1.5 w-2/3 bg-app-border rounded-full" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 glass p-6 rounded-3xl shadow-2xl border-white/20 w-56 -rotate-12"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-bold uppercase tracking-widest text-secondary">Performance</div>
                <div className="text-xs font-bold text-secondary">99%</div>
              </div>
              <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "99%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-secondary"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
