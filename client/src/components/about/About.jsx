import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, BrainCircuit, Rocket } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <BookOpen className="text-primary" />, label: "Education", value: "BCA Student" },
    { icon: <BrainCircuit className="text-accent-purple" />, label: "Focus", value: "AI Web Apps" },
    { icon: <Code2 className="text-accent-pink" />, label: "Status", value: "Learning Phase" },
    { icon: <Rocket className="text-accent-blue" />, label: "Goal", value: "Full Stack Developer" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Me</span>
            <h2 className="text-4xl md:text-5xl font-outfit mt-4 mb-8">
              Passionate <span className="text-gradient">Developer</span> <br />
              Exploring the Future of Web
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-medium">Viral Patanvadiya</span>, a dedicated 
                BCA student with a deep passion for technology and software development. 
                Currently, I am in my learning phase, constantly pushing boundaries to understand 
                how modern web experiences are built.
              </p>
              <p>
                My current focus is on <span className="text-primary-light font-medium">AI-powered web development</span>. 
                I believe that AI is the next frontier for the web, and I'm actively learning how to 
                integrate intelligent features into applications to make them more dynamic and user-centric.
              </p>
              <p>
                As a student, I thrive on challenges and I'm always eager to learn new tools and 
                frameworks. My goal is to become a proficient Full Stack Developer who can 
                create seamless, high-performance, and visually stunning digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="glass p-4 rounded-xl text-center border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">{stat.label}</div>
                  <div className="text-sm font-semibold text-slate-200">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 glass-card p-2 rounded-3xl overflow-hidden">
               <div className="bg-dark/40 p-8 rounded-2xl border border-white/5">
                  <h3 className="text-2xl font-outfit mb-6 text-white">Current Learning Path</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">Frontend Development</span>
                        <span className="text-primary-light">Learning</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">Backend & APIs</span>
                        <span className="text-primary-light">Learning</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '70%' }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className="h-full bg-accent-purple"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">AI Integration</span>
                        <span className="text-primary-light">Active Exploration</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '60%' }}
                          transition={{ duration: 1, delay: 0.9 }}
                          className="h-full bg-accent-pink"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
                    <p className="text-sm text-slate-400 italic">
                      "I believe that learning is a continuous journey. Every line of code is a step towards building something meaningful."
                    </p>
                  </div>
               </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-purple/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-pink/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
