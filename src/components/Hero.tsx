"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-20 pt-28 md:pt-20 pb-12">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side: Candidate Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 glass-panel p-8 md:p-10 lg:p-16 rounded-[2rem] bg-white/[0.05] border border-white/10"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Himesh M. Solanki
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-accent mb-6">
            Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted font-sans max-w-xl mb-12">
            Passionate and detail-oriented Full-Stack Developer dedicated to building responsive, interactive, and aesthetically polished web applications.
          </p>
          <div className="space-y-4 text-muted font-sans text-lg leading-relaxed">
            <p>
              <strong className="text-foreground">Interests:</strong> 3D animation, high-fidelity rendering, and motion-based visual effects for web environments.
            </p>
            <p>
              <strong className="text-foreground">Specialty:</strong> Creating complex particle effects and aesthetically polished UI transformations.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Candidate Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-white/5 relative flex-shrink-0 shadow-2xl group"
        >
          {/* Loop Glass Shine Effect (Every 10s) */}
          <motion.div
            className="absolute top-0 bottom-0 z-20 pointer-events-none w-[150%]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), rgba(255,255,255,0.5), rgba(255,255,255,0.1), transparent)",
              transform: "skewX(-25deg)",
            }}
            animate={{
              left: ["-250%", "150%"],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 6 // 4s sweep + 6s delay = 10s loop
            }}
          />
          <Image
            src="/image1.jpeg"
            alt="Candidate Image"
            fill
            className="object-cover hover:scale-110 transition-transform duration-700 relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
