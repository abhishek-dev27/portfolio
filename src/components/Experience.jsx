import React from 'react';
import { motion } from 'framer-motion';
import { WordReveal } from './TextReveal';
import AnimatedCounter from './AnimatedCounter';

const courses = ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label">Background</span>
          <h2 className="heading-lg" style={{ marginBottom: '4rem' }}>Experience & Education</h2>
        </motion.div>

        <div className="bento-grid">
          
          {/* Work Column */}
          <div className="col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
            {/* Timeline connector */}
            <div className="timeline-line" />

            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card timeline-card"
            >
              <div className="timeline-dot" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="company-icon" style={{ background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))' }}>S</div>
                  <span style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Work</span>
                </div>
                <span className="timeline-tag">Aug 2026 - Present</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>Software Engineer Intern</h3>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', marginBottom: '1.5rem' }}>Sologix Energy Private Limited · STPI Ranchi (on-site)</p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>
                  Developed and deployed InventoryPro, a full-stack inventory/store management dashboard now in active use by <strong style={{ color: '#fff' }}><AnimatedCounter target={100} suffix="+" duration={1.2} /> users</strong> across Ranchi, Jamshedpur, Patna, Hazaribagh, and Daltonganj.
                </li>
                <li>Currently building a Lead Management/CRM system, designing an 8-table relational schema covering leads, proposals, followups, and conversions.</li>
                <li>Working in an offline/in-person engineering role reporting to the engineering team.</li>
              </ul>
            </motion.div>
          </div>

          {/* Education Column */}
          <div className="col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
            <div className="timeline-line" />

            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card timeline-card" 
              style={{ background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)' }}
            >
              <div className="timeline-dot" style={{ background: 'var(--accent-cyan)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="company-icon" style={{ background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))' }}>A</div>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</span>
                </div>
                <span className="timeline-tag">2023 - 2027</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>B.Tech Computer Science</h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 500 }}>Amity University Jharkhand</p>
              
              {/* Staggered Course Tags */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
                }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
              >
                {courses.map(c => (
                  <motion.span 
                    key={c} 
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    style={{ background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', border: '1px solid var(--border-light)' }}
                  >
                    {c}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
              className="bento-card timeline-card"
            >
              <div className="timeline-dot" style={{ background: 'var(--accent-cyan)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="company-icon" style={{ background: 'linear-gradient(135deg, var(--accent-cyan), #10b981)' }}>O</div>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</span>
                </div>
                <span className="timeline-tag">2021 - 2023</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>Senior Secondary (XII)</h3>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>Oxford Public School (CBSE Class XII PCM)</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
              className="bento-card timeline-card"
            >
              <div className="timeline-dot" style={{ background: 'var(--accent-pink)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="company-icon" style={{ background: 'linear-gradient(135deg, var(--accent-pink), #f97316)' }}>★</div>
                  <span style={{ color: 'var(--accent-pink)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Leadership</span>
                </div>
              </div>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Volunteer & Participant at College TechFest 2026.</li>
                <li>School Leadership as House Captain and Class Monitor.</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        .timeline-line {
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-purple), var(--accent-cyan), transparent);
          opacity: 0.3;
          z-index: 1;
        }
        .timeline-card {
          position: relative;
          margin-left: 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .timeline-card:hover {
          transform: translateY(-4px);
        }
        .timeline-dot {
          position: absolute;
          left: -35px;
          top: 2rem;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent-purple);
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.5);
          z-index: 2;
        }
        .company-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 0.8rem;
          font-family: var(--font-heading);
          flex-shrink: 0;
        }
        .timeline-tag {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-tertiary);
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-light);
        }
        @media (max-width: 1024px) {
          .timeline-line { display: none; }
          .timeline-dot { display: none; }
          .timeline-card { margin-left: 0; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
