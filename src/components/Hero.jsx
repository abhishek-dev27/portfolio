import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiTerminal, FiDatabase, FiCode, FiGithub, FiLinkedin } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';
import MagneticButton from './MagneticButton';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6.5rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <span className="section-label pulse-badge" style={{ marginBottom: '1.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }} />
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-xl"
              style={{ marginBottom: '1.25rem', lineHeight: 1.12 }}
            >
              I build full-stack systems that people actually use.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
                {'> '}Full-Stack Software Engineer Intern @ Sologix Energy
              </span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '640px', lineHeight: 1.75 }}
            >
              Hi, I'm <strong style={{ color: '#fff', fontWeight: 600 }}>Abhishek Kumar</strong> — a CS student and full-stack developer currently interning as a Software Engineer at Sologix Energy, where an application I built end-to-end is in production for 100+ users across five cities. I work across <span className="text-gradient" style={{ fontWeight: 600 }}>Java Spring Boot</span>, <span className="text-gradient" style={{ fontWeight: 600 }}>React</span>, and <span className="text-gradient" style={{ fontWeight: 600 }}>MySQL</span>, from schema design to the UI.
            </motion.p>

            {/* CTAs with Magnetic Effect */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '3rem', alignItems: 'center' }}
            >
              <MagneticButton href="#projects" className="btn-primary btn-shimmer">
                View Projects <FiArrowRight />
              </MagneticButton>
              <MagneticButton href="https://drive.google.com/file/d/1HPgvf577gxdoqVh7f0ZXSfy3c9xnPpjA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Resume <FiDownload />
              </MagneticButton>
            </motion.div>

            {/* Quick Stats with Animated Counter */}
            <motion.div
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.35 }}
              className="hero-stats-grid"
            >
              <div className="stat-item">
                <div className="stat-icon" style={{ borderColor: 'rgba(6, 182, 212, 0.2)' }}>
                  <FiTerminal style={{ color: 'var(--accent-cyan)', fontSize: '1.3rem' }} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>
                    <AnimatedCounter target={12} suffix="+" duration={1.0} /> Projects
                  </h4>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>Full-stack applications</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ borderColor: 'rgba(139, 92, 246, 0.2)' }}>
                  <FiDatabase style={{ color: 'var(--accent-purple)', fontSize: '1.3rem' }} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>Database Design</h4>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>MySQL, Schema Architecture</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon" style={{ borderColor: 'rgba(236, 72, 153, 0.2)' }}>
                  <FiCode style={{ color: 'var(--accent-pink)', fontSize: '1.3rem' }} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>API Development</h4>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>RESTful APIs, Spring Boot</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Profile Card (Shifted Upwards to align with top third of headline) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-profile-wrapper"
          >
            <div className="profile-card">
              <div className="profile-glow" />
              <div className="profile-image-container">
                <img src={profileImg} alt="Abhishek Kumar" className="profile-image" />
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem 1.5rem 1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: '#fff', marginBottom: '0.3rem' }}>Abhishek Kumar</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>SDE Intern @ Sologix Energy</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', paddingBottom: '1.5rem' }}>
                <MagneticButton href="https://github.com/abhishek-dev27" target="_blank" rel="noopener noreferrer" className="profile-social-link" ariaLabel="GitHub">
                  <FiGithub />
                </MagneticButton>
                <MagneticButton href="https://www.linkedin.com/in/abhishek-kumar-8746a1321/" target="_blank" rel="noopener noreferrer" className="profile-social-link" ariaLabel="LinkedIn">
                  <FiLinkedin />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 3.5rem;
          align-items: start;
        }
        .hero-content { 
          max-width: 750px; 
        }

        .pulse-badge { animation: pulse-badge 3s ease-in-out infinite; }
        @keyframes pulse-badge {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
          50% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.1); }
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          border-top: 1px solid var(--border-light);
          padding-top: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .stat-icon {
          padding: 0.9rem;
          background: rgba(255,255,255,0.03);
          border-radius: 12px;
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .stat-item:hover .stat-icon {
          background: rgba(255,255,255,0.06);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-stats-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        /* Profile Card - Vertically aligned with top third of headline */
        .hero-profile-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
        }
        .profile-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          width: 270px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .profile-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-8px);
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5), 0 0 40px -10px rgba(139, 92, 246, 0.15);
        }
        .profile-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, var(--accent-purple), transparent, var(--accent-cyan), transparent);
          animation: rotate-glow 6s linear infinite;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .profile-card:hover .profile-glow { opacity: 0.1; }
        @keyframes rotate-glow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .profile-image-container {
          padding: 1.25rem 1.25rem 0;
          position: relative;
          z-index: 1;
        }
        .profile-image {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          object-position: top;
          border-radius: 16px;
          display: block;
          border: 2px solid rgba(255,255,255,0.06);
        }
        .profile-social-link {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-size: 1rem;
          transition: all 0.2s;
        }
        .profile-social-link:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            align-items: center;
          }
          .hero-profile-wrapper {
            order: -1;
            margin-top: 0;
          }
          .profile-card { width: 220px; }
        }
        @media (max-width: 480px) {
          .profile-card { width: 180px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
