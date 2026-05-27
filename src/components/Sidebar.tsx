"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section, header, footer");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="hidden md:flex flex-col justify-between fixed top-0 left-0 h-screen w-64 bg-background/50 backdrop-blur-3xl border-r border-white/5 p-8 z-50 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
      <div>
        <Link href="/" className="text-3xl font-display font-black tracking-tight mb-16 block relative group">
          <span className="text-gradient">HS</span><span className="text-white/20 group-hover:text-white transition-colors">.</span>
        </Link>
        <div className="flex flex-col gap-6 font-display text-sm tracking-widest uppercase relative">
          {[
            { id: "", label: "Home" },
            { id: "about", label: "About" },
            { id: "projects", label: "Work" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <Link 
              key={item.label}
              href={item.id ? `#${item.id}` : "/"} 
              className={`transition-all duration-300 flex items-center gap-4 group ${activeSection === item.id || (!activeSection && !item.id) ? "text-primary font-bold" : "text-muted hover:text-white"}`}
            >
              <span className={`w-1 h-1 rounded-full bg-primary transition-all duration-300 ${activeSection === item.id || (!activeSection && !item.id) ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 group-hover:bg-white"}`} />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="flex gap-6 text-muted border-t border-white/10 pt-8">
        <a href="https://github.com/Hunny-785951" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform">
          <GithubIcon size={22} />
        </a>
        <a href="https://www.linkedin.com/in/himesh-s5847" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors hover:scale-110 transform">
          <LinkedinIcon size={22} />
        </a>
        <a href="mailto:himeshs159587@gmail.com" className="hover:text-accent transition-colors hover:scale-110 transform">
          <Mail size={22} />
        </a>
      </div>
    </nav>
  );
}
