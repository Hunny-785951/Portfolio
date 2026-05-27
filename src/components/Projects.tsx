"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Alumni System",
    details: "Engineered a university networking platform connecting students with alumni and corporate partners for hiring and internships. Implemented engagement features for mentoring programs, delivering a fully functional full-stack app (React.js, Spring Boot).",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
    link: "https://github.com/Hunny-785951",
  },
  {
    id: 2,
    title: "Cab Booking System",
    details: "Designed an optimized ride-hailing platform utilizing Min-Heap and Linked List data structures to efficiently assign the nearest available cab. Built a highly responsive React interface with eye-catching hover effects and seamless dynamic transitions.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop",
    link: "https://github.com/Hunny-785951/cab-booking-project",
  },
  {
    id: 3,
    title: "Recruitment Portal",
    details: "Developed a comprehensive, end-to-end job board connecting job seekers with prospective employers using PHP/Laravel and Bootstrap. Designed robust architecture to handle user registrations, job postings, and interactive applicant tracking.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/Hunny-785951",
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-panel rounded-[2rem] overflow-hidden group relative flex flex-col bg-white/[0.05]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image Block */}
      <div className="relative h-56 md:h-72 w-full overflow-hidden shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="p-8 flex-1 flex flex-col relative z-10 -mt-10 bg-gradient-to-b from-transparent to-background/50 backdrop-blur-sm rounded-t-[2rem]">
        {/* Project's name */}
        <h3 className="text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Project's Details */}
        <p className="text-muted text-base font-sans leading-relaxed flex-1 mb-8">
          {project.details}
        </p>

        {/* Visit Project link */}
        <div className="pt-6 border-t border-white/10 mt-auto">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-widest text-foreground hover:text-primary transition-colors group/link font-bold">
            <ExternalLink size={18} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> Visit Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Project <span className="text-gradient">Showcase</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
