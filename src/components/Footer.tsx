import { Linkedin, Twitter, Mail, ArrowUpCircle, MessageCircle } from 'lucide-react';
import { VercelIcon } from './VercelIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+919363001680"; // Using the same number as in Contact.tsx
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Imran, I'd like to discuss a project with you.")}`;

  return (
    <footer className="pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-app-border relative overflow-hidden bg-white dark:bg-app-bg">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="text-2xl font-bold font-display tracking-tighter flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform">I</div>
              <span className="dark:text-white text-app-text">Imran</span>
            </a>
            <p className="text-sm dark:text-text-dark/60 text-text-light/80 leading-relaxed max-w-md">
              Crafting exceptional digital experiences through modern web technologies and AI-driven solutions. Focused on performance, accessibility, and user-centric design.
            </p>
            <div className="flex gap-4">
              {[
                { icon: VercelIcon, href: 'https://vercel.com/abdul-kadar-imrans-projects', label: 'Vercel' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/abdulkadarimran/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:abdulkadarimran@gmail.com', label: 'Email' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center dark:text-white text-app-text hover:text-primary dark:hover:text-primary hover:border-primary/50 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="relative flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-8">Get In Touch</h4>
              <div className="space-y-4">
                <p className="text-sm dark:text-text-dark/60 text-text-light/80 font-medium leading-relaxed max-w-xs">
                  Have a project in mind? Let's build something amazing together.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-4 transition-all group"
                  >
                    Contact Me on WhatsApp
                    <MessageCircle size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8 md:mt-0">
              <button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full border border-app-border flex items-center justify-center dark:text-white text-app-text hover:bg-primary hover:border-primary hover:text-white transition-all group shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUpCircle size={24} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-app-border flex flex-col md:flex-row justify-between items-center gap-6">
        </div>
      </div>
    </footer>
  );
}
