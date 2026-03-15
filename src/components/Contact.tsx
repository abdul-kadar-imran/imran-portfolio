import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Send, MessageCircle } from 'lucide-react';
import { VercelIcon } from './VercelIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello Imran,\nMy name is ${formData.name}.\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919363001680?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Contact</h2>
            <h3 className="text-4xl md:text-6xl font-bold font-display dark:text-white text-app-text mb-8">
              Let's <span className="text-gradient">Connect</span>
            </h3>
            <p className="text-xl dark:text-text-dark/60 text-text-light mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-4 md:space-y-6">
              <a href="mailto:abdulkadarimran@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 p-6 md:p-8 glass rounded-[32px] hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest dark:text-text-dark/40 text-text-light/40 mb-1">Email</div>
                  <div className="text-lg md:text-xl font-bold dark:text-white text-app-text truncate">gmail.com</div>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/abdulkadarimran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 p-6 md:p-8 glass rounded-[32px] hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0 block">
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest dark:text-text-dark/40 text-text-light/40 mb-1">
                    LinkedIn
                  </div>
                  <div className="text-lg md:text-xl font-bold dark:text-white text-app-text truncate">
                    linkedin.com
                  </div>
                </div>
              </a>
              <a href="https://vercel.com/abdul-kadar-imrans-projects" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 p-6 md:p-8 glass rounded-[32px] hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <VercelIcon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest dark:text-text-dark/40 text-text-light/40 mb-1">Vercel</div>
                  <div className="text-lg md:text-xl font-bold dark:text-white text-app-text truncate">vercel.com</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[48px] relative mt-10 lg:mt-0"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-primary rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-primary/40 z-10">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest dark:text-text-dark/60 text-text-light/60 ml-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    className="w-full px-8 py-5 rounded-3xl bg-surface/50 border border-app-border dark:text-white text-app-text focus:border-primary outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest dark:text-text-dark/60 text-text-light/60 ml-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="w-full px-8 py-5 rounded-3xl bg-surface/50 border border-app-border dark:text-white text-app-text focus:border-primary outline-none transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest dark:text-text-dark/60 text-text-light/60 ml-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-8 py-5 rounded-3xl bg-surface/50 border border-app-border dark:text-white text-app-text focus:border-primary outline-none transition-all font-medium resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white py-6 rounded-3xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/30"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
