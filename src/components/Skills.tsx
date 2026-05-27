"use client";

import { motion } from "framer-motion";
import { Code2, Server, Shield, Terminal } from "lucide-react";

export default function Skills() {
  return (
    <section id="about" className="py-32 px-8 lg:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            About & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {/* Biography Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 glass-panel p-10 rounded-[2rem] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
              <Terminal className="text-primary" /> About Candidate
            </h3>
            <p className="text-muted leading-relaxed font-sans text-lg md:text-xl">
              I am a Full-Stack Developer currently pursuing a B.Tech in Computer Science and Engineering at ITM (SLS) Baroda University (Expected July 2025). I specialize in developing eye-catching frontend interfaces with seamless transitions paired with robust backend architectures. Adept at rapid problem-solving, algorithmic optimization, and end-to-end deployment.
            </p>
          </motion.div>

          {/* Years of Experience Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 glass-panel p-8 rounded-[2rem] flex flex-col justify-center items-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-2 drop-shadow-lg">3+</span>
            <span className="text-primary font-display text-lg tracking-widest uppercase text-center font-bold">Major Projects</span>
          </motion.div>

          {/* Tech Stack Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 glass-panel p-8 rounded-[2rem] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">
              <Code2 className="text-secondary" /> Core Stacks
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Spring Boot', 'PHP/Laravel', 'MySQL', 'MongoDB', 'Java', 'Python', 'C/C++'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-sans text-foreground shadow-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
