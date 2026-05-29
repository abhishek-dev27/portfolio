import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Java", "Spring Boot", "React.js", "JavaScript", "Node.js", 
  "Express", "MySQL", "Tailwind CSS", "REST APIs", "Data Structures", 
  "Algorithms", "Git", "C++", "DBMS"
];

const categories = [
  {
    title: "Frontend & UI",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Framer Motion", "UI/UX Design"]
  },
  {
    title: "Backend & Database",
    items: ["Java (Spring Boot)", "Node.js", "Express.js", "MySQL", "RESTful APIs", "Authentication"]
  },
  {
    title: "Core Fundamentals",
    items: ["Data Structures", "Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Computer Networks", "Git & GitHub"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Tech Stack</span>
          <h2 className="heading-lg">Tools & Technologies</h2>
        </motion.div>
      </div>

      {/* Infinite Marquee Rows */}
      <div style={{ position: 'relative', width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', marginBottom: '4rem' }}>
        <div className="marquee-container" style={{ marginBottom: '1.5rem' }}>
          <div className="marquee-content slide-left">
            {[...skills, ...skills].map((skill, i) => (
              <div key={i} className="skill-pill">{skill}</div>
            ))}
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee-content slide-right">
            {[...skills.reverse(), ...skills].map((skill, i) => (
              <div key={i} className="skill-pill">{skill}</div>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, var(--bg-base), transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, var(--bg-base), transparent)', zIndex: 10, pointerEvents: 'none' }} />
      </div>

      {/* Categorized Skills Grid */}
      <div className="container">
        <div className="bento-grid">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card col-span-4"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.5rem', fontWeight: 600 }}>{cat.title}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', listStyle: 'none' }}>
                {cat.items.map((item, j) => (
                  <li key={j} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-container { overflow: hidden; display: flex; white-space: nowrap; width: 100%; }
        .marquee-content { display: flex; gap: 1.5rem; padding-left: 1.5rem; }
        .slide-left { animation: slide-l 40s linear infinite; }
        .slide-right { animation: slide-r 40s linear infinite; }
        .skill-pill {
          padding: 0.8rem 2rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px; font-family: var(--font-heading); font-weight: 600; font-size: 1.1rem;
          color: var(--text-primary); transition: all 0.3s ease; display: inline-flex; align-items: center; justify-content: center;
        }
        .skill-pill:hover { background: rgba(255,255,255,0.1); border-color: rgba(139, 92, 246, 0.5); transform: scale(1.05); color: #fff; }
        @keyframes slide-l { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes slide-r { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
    </section>
  );
};

export default Skills;
