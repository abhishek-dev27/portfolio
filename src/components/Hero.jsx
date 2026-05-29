import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiTerminal, FiDatabase, FiCode } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <span className="section-label" style={{ marginBottom: '2rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }} />
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-xl" style={{ marginBottom: '1.5rem', lineHeight: 1.15 }}
          >
            Engineering robust backends & dynamic frontends.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', lineHeight: 1.6 }}
          >
            Hi, I'm <strong style={{ color: '#fff' }}>Abhishek Kumar</strong>. A computer science student specializing in building scalable architectures with <span className="text-gradient">Java Spring Boot</span>, high-performance UIs in <span className="text-gradient">React</span>, and secure database integrations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}
          >
            <a href="#projects" className="btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="https://drive.google.com/file/d/1HIPH_vKFUwotvY5IXE7FElILZrz102Ni/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Resume <FiDownload />
            </a>
          </motion.div>

          {/* Quick Stats / Specs Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <FiTerminal style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>7+ Projects Built</h4>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>Full-stack web applications</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <FiDatabase style={{ color: 'var(--accent-purple)', fontSize: '1.5rem' }} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>Database Design</h4>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>MySQL, Schema Architecture</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <FiCode style={{ color: 'var(--accent-pink)', fontSize: '1.5rem' }} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>API Development</h4>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>RESTful APIs, Data Integration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
