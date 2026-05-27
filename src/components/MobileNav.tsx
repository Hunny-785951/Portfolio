"use client";

import { Home, Briefcase, Code2, Mail } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4">
      <div className="glass-panel rounded-full flex justify-around items-center p-4">
        <Link href="/" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-1">
          <Home size={20} />
          <span className="text-[10px] uppercase font-display tracking-widest">Home</span>
        </Link>
        <Link href="#skills" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-1">
          <Code2 size={20} />
          <span className="text-[10px] uppercase font-display tracking-widest">Skills</span>
        </Link>
        <Link href="#projects" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-1">
          <Briefcase size={20} />
          <span className="text-[10px] uppercase font-display tracking-widest">Work</span>
        </Link>
        <Link href="#contact" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-1">
          <Mail size={20} />
          <span className="text-[10px] uppercase font-display tracking-widest">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
