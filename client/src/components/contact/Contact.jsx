import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    setStatus("sending");
    
    try {
      const response = await fetch("https://formspree.io/f/viralpatanvadiya24@gmail.com", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit mt-4 mb-6"
          >
            Let's Build Something <span className="text-gradient">Together</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your visions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-primary/20 transition-colors">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email Me</h3>
                <p className="text-slate-400 text-sm">viralpatanvadiya24@gmail.com</p>
                <p className="text-primary-light text-xs mt-2 font-medium">Fast Response Guaranteed</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-accent-purple/20 transition-colors">
              <div className="p-3 bg-accent-purple/10 rounded-lg text-accent-purple">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                <p className="text-slate-400 text-sm">India</p>
                <p className="text-accent-purple text-xs mt-2 font-medium">Available Worldwide (Remote)</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-accent-pink/20 transition-colors">
              <div className="p-3 bg-accent-pink/10 rounded-lg text-accent-pink">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Chat With Me</h3>
                <p className="text-slate-400 text-sm">Available on LinkedIn/Twitter</p>
                <p className="text-accent-pink text-xs mt-2 font-medium">24/7 Availability</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-10 rounded-3xl border border-white/5 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="What is this about?"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {status === "success" && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-green-400 text-center font-medium mt-4"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-red-400 text-center font-medium mt-4"
                >
                  ❌ Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
