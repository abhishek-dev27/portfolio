import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight, FiMessageCircle, FiCopy, FiCheck } from 'react-icons/fi';
import { WordReveal } from './TextReveal';
import MagneticButton from './MagneticButton';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kabhishek54866@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="contact-card bento-card"
          style={{ 
            textAlign: 'center', 
            padding: '5rem 2rem', 
            background: 'linear-gradient(to bottom right, rgba(139, 92, 246, 0.08), rgba(3, 0, 20, 0.8))',
            border: '1px solid rgba(139, 92, 246, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated border glow */}
          <div className="contact-border-glow" />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-label" style={{ margin: '0 auto 1.5rem', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
              What's Next?
            </span>
            <h2 className="heading-xl" style={{ marginBottom: '1.5rem' }}>Let's work together.</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              I am currently looking for entry-level software engineering roles. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            {/* Email display with copy */}
            <div className="email-display" onClick={copyEmail} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && copyEmail()}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                kabhishek54866@gmail.com
              </span>
              <span className="copy-icon">
                {copied ? <FiCheck style={{ color: '#10b981' }} /> : <FiCopy />}
              </span>
              {copied && <span className="copied-tooltip">Copied!</span>}
            </div>

            {/* Magnetic CTA buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <MagneticButton href="mailto:kabhishek54866@gmail.com" className="btn-primary btn-shimmer" style={{ padding: '1.2rem 3rem', fontSize: '1.05rem' }}>
                <FiMail /> Say Hello <FiArrowRight style={{ marginLeft: '0.3rem' }} />
              </MagneticButton>
              <MagneticButton href="https://wa.me/916209794249?text=Hi%20Abhishek!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.05rem', background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                <FiMessageCircle /> WhatsApp <FiArrowRight style={{ marginLeft: '0.3rem' }} />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-card {
          position: relative;
        }
        .contact-border-glow {
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          border-radius: inherit;
          background: conic-gradient(from var(--glow-angle, 0deg), transparent 60%, var(--accent-purple) 75%, var(--accent-cyan) 85%, transparent 100%);
          z-index: 0;
          opacity: 0.4;
          animation: rotate-border 4s linear infinite;
          pointer-events: none;
        }
        .contact-card::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: inherit;
          background: linear-gradient(to bottom right, rgba(139, 92, 246, 0.08), rgba(3, 0, 20, 0.95));
          z-index: 0;
        }
        @keyframes rotate-border {
          0% { --glow-angle: 0deg; }
          100% { --glow-angle: 360deg; }
        }
        @property --glow-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .email-display {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          border-radius: 100px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        .email-display:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.15);
        }
        .copy-icon {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          display: flex;
          transition: color 0.2s;
        }
        .email-display:hover .copy-icon { color: #fff; }
        .copied-tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.75rem;
          color: #10b981;
          font-family: var(--font-mono);
          animation: fade-up 0.3s ease;
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateX(-50%) translateY(5px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
