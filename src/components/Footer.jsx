import React from 'react';
import { FiGithub, FiLinkedin, FiMessageCircle, FiArrowUp } from 'react-icons/fi';
import MagneticButton from './MagneticButton';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border-light)', position: 'relative' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.6rem', fontWeight: 800 }}>A</span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>Abhishek Kumar</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <MagneticButton href="https://github.com/abhishek-dev27" target="_blank" rel="noopener noreferrer" className="footer-social-link" ariaLabel="GitHub">
            <FiGithub />
          </MagneticButton>
          <MagneticButton href="https://www.linkedin.com/in/abhishek-kumar-8746a1321/" target="_blank" rel="noopener noreferrer" className="footer-social-link" ariaLabel="LinkedIn">
            <FiLinkedin />
          </MagneticButton>
          <MagneticButton href="https://wa.me/916209794249?text=Hi%20Abhishek!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noopener noreferrer" className="footer-social-link footer-whatsapp" ariaLabel="WhatsApp">
            <FiMessageCircle />
          </MagneticButton>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Designed & Built by Abhishek.
          </p>
          <MagneticButton as="button" onClick={scrollToTop} className="back-to-top" ariaLabel="Back to top">
            <FiArrowUp />
          </MagneticButton>
        </div>
      </div>

      <style>{`
        .footer-social-link {
          color: var(--text-tertiary);
          font-size: 1.1rem;
          transition: color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: transparent;
        }
        .footer-social-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        .footer-whatsapp:hover { color: #25D366; }

        .back-to-top {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
        }
        .back-to-top:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(139, 92, 246, 0.3);
          color: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
