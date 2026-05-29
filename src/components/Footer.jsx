import React from 'react';
import { FiGithub, FiLinkedin, FiMessageCircle } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.6rem', fontWeight: 800 }}>A</span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>Abhishek Kumar</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <a href="https://github.com/abhishek-dev27" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)', fontSize: '1.1rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-tertiary)'}><FiGithub /></a>
          <a href="https://www.linkedin.com/in/abhishek-kumar-8746a1321/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)', fontSize: '1.1rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#0A66C2'} onMouseOut={e => e.target.style.color = 'var(--text-tertiary)'}><FiLinkedin /></a>
          <a href="https://wa.me/916209794249?text=Hi%20Abhishek!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)', fontSize: '1.1rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#25D366'} onMouseOut={e => e.target.style.color = 'var(--text-tertiary)'}><FiMessageCircle /></a>
        </div>

        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Designed & Built by Abhishek.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
