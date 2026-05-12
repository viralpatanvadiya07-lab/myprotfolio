import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Shopping App",
    description: "A premium e-commerce platform built with modern AI integration for a seamless shopping experience. Features include glassmorphism UI, responsive design, and smart cart management.",
    image: "/assets/projects/shopping.png",
    link: "https://shopping-theta-rust.vercel.app",
    tags: ["React", "AI", "Tailwind", "Vite"]
  },
  {
    title: "Advanced URL Detection",
    description: "A cybersecurity focused application designed to detect and flag suspicious URLs. Uses heuristic analysis to provide real-time safety ratings and protect users from phishing.",
    image: "/assets/projects/url-detection.png",
    link: "https://thala-for-a-reason-7.vercel.app",
    tags: ["Cybersecurity", "Heuristics", "React", "Security"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            My Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit mt-4 mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Here are some of my recent works that showcase my skills in building modern, 
            secure, and high-performance web applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 rounded bg-primary/10 text-primary-light border border-primary/20 font-bold uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-outfit mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Live Preview <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
