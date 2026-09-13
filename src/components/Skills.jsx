import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu } from 'react-icons/fi';
import { WordReveal } from './TextReveal';

const row1Skills = [
  "JavaScript", "React.js", "Node.js", "Express", "Spring Boot", "Java", "Python", "MySQL"
];

const row2Skills = [
  "Git", "REST APIs", "Data Structures", "Algorithms", "DBMS", "C++", "Tailwind CSS"
];

const categories = [
  {
    title: "Frontend & UI",
    icon: <FiCode />,
    accent: 'var(--accent-cyan)',
    accentBg: 'rgba(6, 182, 212, 0.1)',
    accentBorder: 'rgba(6, 182, 212, 0.2)',
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Framer Motion", "UI/UX Design"]
  },
  {
    title: "Backend & Database",
    icon: <FiServer />,
    accent: 'var(--accent-purple)',
    accentBg: 'rgba(139, 92, 246, 0.1)',
    accentBorder: 'rgba(139, 92, 246, 0.2)',
    items: ["Java (Spring Boot)", "Node.js", "Express.js", "MySQL", "RESTful APIs", "Authentication"]
  },
  {
    title: "Core Fundamentals",
    icon: <FiCpu />,
    accent: 'var(--accent-pink)',
    accentBg: 'rgba(236, 72, 153, 0.1)',
    accentBorder: 'rgba(236, 72, 153, 0.2)',
    items: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Git & GitHub"]
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
            {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, i) => (
              <div key={i} className="skill-pill">{skill}</div>
            ))}
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee-content slide-right">
            {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, i) => (
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card skill-category-card col-span-4"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <div className="category-icon" style={{ background: cat.accentBg, border: `1px solid ${cat.accentBorder}`, color: cat.accent }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600 }}>{cat.title}</h3>
              </div>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.05, delayChildren: i * 0.1 + 0.15 } }
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', listStyle: 'none' }}
              >
                {cat.items.map((item, j) => (
                  <motion.li 
                    key={j} 
                    variants={{
                      hidden: { opacity: 0, scale: 0.9, x: -8 },
                      visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="skill-item" 
                    style={{ '--item-accent': cat.accent }}
                  >
                    <span className="skill-bullet" style={{ background: cat.accent }} />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
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
          padding: 0.8rem 2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
        }
        .skill-pill:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.4);
          transform: scale(1.05);
          color: #fff;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
        }
        @keyframes slide-l { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes slide-r { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }

        .category-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .skill-category-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .skill-category-card:hover {
          border-color: rgba(139, 92, 246, 0.2);
          transform: translateY(-4px);
        }
        .skill-item {
          color: var(--text-secondary);
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.3rem 0;
          transition: color 0.2s;
        }
        .skill-item:hover {
          color: #fff;
        }
        .skill-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .skill-item:hover .skill-bullet { opacity: 1; }
      `}</style>
    </section>
  );
};

export default Skills;
