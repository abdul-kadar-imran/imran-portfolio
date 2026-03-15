import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "Ethernote",
    description: "A decentralized note-taking platform that allows users to securely create, store, and manage .",
    image: "./public/Ethernote.png",
    tech: ["React", "TypeScript", "Canvas API"],
    liveUrl: "https://ethernote.vercel.app/",
    vercelUrl: "https://vercel.com",
  },
  {
    title: "QR Nest",
    description: "A simple web tool for generating and managing QR codes quickly and efficiently.",
    image: "./public/QR Nest.png",
    tech: ["React", "TypeScript", "Canvas API"],
    liveUrl: "https://qr-nest-app.vercel.app/",
    vercelUrl: "https://vercel.com",
  },
  {
    title: "Layout Lab",
    description: "A modern web tool for experimenting with and building responsive UI layouts.",
    image: "./public/Layout Lab.png",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    liveUrl: "https://layout-lab-five.vercel.app/",
    vercelUrl: "https://vercel.com",
  },
  {
    title: "Crescent Connect",
    description: "A modern platform designed to connect students and share academic resources in an organized way.",
    image: "./public/crescent connect.png",
    tech: ["React", "Tailwind CSS", "Motion"],
    liveUrl: "https://vercel.com/abdul-kadar-imrans-projects/college-website",
    vercelUrl: "https://vercel.com",
  },
  {
    title: "T-Strike",
    description: "An interactive typing game designed to improve speed and accuracy through challenges.",
    image: "./public/T-stike.png",
    tech: ["React", "Recharts", "Firebase"],
    liveUrl: "https://t-strike.vercel.app/",
    vercelUrl: "https://vercel.com",
  },
  {
    title: "Layerly",
    description: "A modern web application designed to organize and present layered content.",
    image: "./public/Layerly App.png",
    tech: ["React", "OpenWeather API", "Geolocation"],
    liveUrl: "https://layerly-app.vercel.app/",
    vercelUrl: "https://vercel.com",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-display dark:text-white text-app-text mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative glass rounded-[40px] overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_rgba(99,102,241,0.15)] flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-app-bg via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[9px] font-bold uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl font-bold font-display dark:text-white text-app-text mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="dark:text-text-dark/70 text-text-light mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20"
                  >
                    View Website <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
