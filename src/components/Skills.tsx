"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const groups = [
    {
      label: "Languages",
      items: ["C / C++", "Java", "JavaScript", "C#", "Kotlin", "Python", "PHP"],
    },
    {
      label: "Frontend",
      items: ["React.js", "Vue.js", "HTML / CSS", "Tailwind CSS", "Bootstrap"],
    },
    {
      label: "Backend & Security",
      items: ["Spring Boot", "MySQL", "Linux", "Cyber Security", "Ethical Hacking"],
    },
  ];

  return (
    <section id="skills">
      <div className="skills-section-inner">
        <h2 className="section-title reveal">What I work with.</h2>

        <div className="skills-grid stagger-children">
          {groups.map((group) => (
            <motion.div 
              key={group.label} 
              className="skill-group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="skill-group-label">{group.label}</div>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item} className="skill-item">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
