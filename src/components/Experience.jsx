import React from 'react';
import { motion } from 'framer-motion';

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
          <div className="col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bento-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Work</span>
                <span className="tag">Aug 2023 - Present</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>Freelance Digital Designer</h3>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', marginBottom: '1.5rem' }}>Dinesh Caterers</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Design posters, banners, and digital ads to help a local catering business get more customers and stand out in the area.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bento-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Work</span>
                <span className="tag">Mar 2023 - Present</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>Independent Educator</h3>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', marginBottom: '1.5rem' }}>Self-Employed (Ranchi)</p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Teach math and science to primary school students, helping them prepare for their transition into higher classes.</li>
                <li>Create custom practice tests and simple study plans to make learning easier.</li>
              </ul>
            </motion.div>
          </div>

          {/* Education Column */}
          <div className="col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bento-card" style={{ background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</span>
                <span className="tag">2023 - 2027</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>B.Tech Computer Science</h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 500 }}>Amity University Jharkhand</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'].map(c => (
                  <span key={c} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bento-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</span>
                <span className="tag">2021 - 2023</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>Senior Secondary (XII)</h3>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>Oxford Public School (CBSE Class XII PCM)</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bento-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-pink)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Leadership</span>
              </div>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Volunteer & Participant at College TechFest 2026.</li>
                <li>School Leadership as House Captain and Class Monitor.</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
