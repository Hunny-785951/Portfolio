"use client";

import { motion } from "framer-motion";

const languages = [
  { name: "JavaScript", colorClass: "text-[#F7DF1E] border-[#F7DF1E]/30 hover:border-[#F7DF1E] hover:shadow-[0_0_20px_rgba(247,223,30,0.4)]" },
  { name: "Java", colorClass: "text-[#ED8B00] border-[#ED8B00]/30 hover:border-[#ED8B00] hover:shadow-[0_0_20px_rgba(237,139,0,0.4)]" },
  { name: "Python", colorClass: "text-[#3776AB] border-[#3776AB]/30 hover:border-[#3776AB] hover:shadow-[0_0_20px_rgba(55,118,171,0.4)]" },
  { name: "HTML/CSS", colorClass: "text-[#E34F26] border-[#E34F26]/30 hover:border-[#E34F26] hover:shadow-[0_0_20px_rgba(227,79,38,0.4)]" },
  { name: "C/C++", colorClass: "text-[#00599C] border-[#00599C]/30 hover:border-[#00599C] hover:shadow-[0_0_20px_rgba(0,89,156,0.4)]" },
  { name: "C#", colorClass: "text-[#239120] border-[#239120]/30 hover:border-[#239120] hover:shadow-[0_0_20px_rgba(35,145,32,0.4)]" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-32 px-8 lg:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <h3 className="text-lg md:text-2xl text-foreground font-display font-semibold mt-6 text-center">
            Skills & Tech Stack Details
          </h3>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left side: Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 glass-panel p-8 md:p-10 lg:p-14 rounded-[2rem] flex flex-wrap gap-3 md:gap-4 items-center justify-center bg-white/[0.02]"
          >
            {languages.map((lang, idx) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`px-8 py-3 rounded-full font-display font-bold tracking-wider bg-white/[0.03] border transition-all duration-300 backdrop-blur-sm cursor-pointer hover:-translate-y-1 ${lang.colorClass}`}
              >
                {lang.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Right side: Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 glass-panel p-8 md:p-10 lg:p-14 rounded-[2rem] bg-white/[0.03]"
          >
            <h4 className="text-2xl font-display font-bold mb-8 text-foreground border-b border-white/10 pb-4">
              Tech Stack details
            </h4>
            <div className="space-y-6 text-muted font-sans text-lg">
              <p>
                <strong className="text-primary block mb-1">Frameworks & Libraries:</strong> 
                React.js, Spring Boot, Bootstrap, PHP/Laravel
              </p>
              <p>
                <strong className="text-secondary block mb-1">Databases:</strong> 
                MySQL, MongoDB, Cassandra
              </p>
              <p>
                <strong className="text-accent block mb-1">Tools & Concepts:</strong> 
                Git, GitHub, Vercel, Data Structures (Min-Heap, Linked Lists)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
