import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          className="bento-card"
          style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem', 
            background: 'linear-gradient(to bottom right, rgba(139, 92, 246, 0.1), rgba(3, 0, 20, 0.8))',
            border: '1px solid rgba(139, 92, 246, 0.2)'
          }}
        >
          <span className="section-label" style={{ margin: '0 auto 1.5rem', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
            What's Next?
          </span>
          <h2 className="heading-xl" style={{ marginBottom: '1.5rem' }}>Let's work together.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            I am currently looking for entry-level software engineering roles. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:kabhishek54866@gmail.com" className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
              <FiMail /> Say Hello <FiArrowRight style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="https://wa.me/916209794249?text=Hi%20Abhishek!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
              <FiMessageCircle /> WhatsApp <FiArrowRight style={{ marginLeft: '0.5rem' }} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
