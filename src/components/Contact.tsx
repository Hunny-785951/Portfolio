"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  return (
    <footer id="contact" className="py-32 px-8 lg:px-20 border-t border-white/5 relative z-10 overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[150px] pointer-events-none rounded-t-full" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10">
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-8"
          >
            Contacts & <span className="text-gradient">Resume</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl text-muted font-sans mb-6">
              Contacts: Email, Social Media, Git Profile, etc ....
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:himeshs159587@gmail.com" className="flex items-center gap-4 text-xl md:text-2xl font-display font-bold text-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" /> <span className="truncate">himeshs159587@gmail.com</span>
              </a>
              <a href="https://github.com/Hunny-785951" className="flex items-center gap-4 text-xl md:text-2xl font-display font-bold text-foreground hover:text-secondary transition-colors">
                <GithubIcon className="w-6 h-6 md:w-8 md:h-8 text-secondary shrink-0" /> GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/himesh-s5847" className="flex items-center gap-4 text-xl md:text-2xl font-display font-bold text-foreground hover:text-accent transition-colors">
                <LinkedinIcon className="w-6 h-6 md:w-8 md:h-8 text-accent shrink-0" /> LinkedIn Connect
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 items-start md:items-end mt-12 md:mt-0"
        >
          <p className="text-muted font-display tracking-widest uppercase mb-2">Resume Download Link</p>
          <MagneticButton href="/Resume.pdf" target="_blank" download="Himesh_Solanki_Resume.pdf">
            <span className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-display font-bold tracking-wider uppercase rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
              <Download size={20} /> Download Resume
            </span>
          </MagneticButton>
          
          <div className="text-muted font-display text-sm tracking-widest uppercase mt-8 md:mt-auto">
            © {new Date().getFullYear()} Himesh Solanki
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
