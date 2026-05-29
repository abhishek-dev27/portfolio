import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMessageCircle } from 'react-icons/fi';

const links = ['About', 'Projects', 'Experience', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '1rem 0',
          background: scrolled ? 'rgba(3, 0, 20, 0.6)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <a href="#" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem' }}>A</span>
            Abhishek
          </a>

          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', background: scrolled ? 'transparent' : 'rgba(255,255,255,0.03)', padding: scrolled ? '0' : '0.5rem 1.5rem', borderRadius: '100px', border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s' }}>
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                {link}
              </a>
            ))}
          </div>

          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="https://github.com/abhishek-dev27" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><FiGithub /></a>
            <a href="https://www.linkedin.com/in/abhishek-kumar-8746a1321/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><FiLinkedin /></a>
            <a href="https://wa.me/916209794249?text=Hi%20Abhishek!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#25D366'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><FiMessageCircle /></a>
          </div>

          <button className="nav-mobile-btn" onClick={() => setMobileMenu(!mobileMenu)} style={{ display: 'none', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '70px', left: '1rem', right: '1rem', zIndex: 99,
              background: 'rgba(15, 15, 20, 0.95)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)',
              padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'
            }}
          >
            {links.map((link, i) => (
              <motion.a 
                key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileMenu(false)}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.8rem' }}
              >
                {link}
              </motion.a>
            ))}
            <a href="https://wa.me/916209794249?text=Hi%20Abhishek!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem', background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
              <FiMessageCircle /> WhatsApp
            </a>
            <a href="https://drive.google.com/file/d/1HIPH_vKFUwotvY5IXE7FElILZrz102Ni/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
