import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';

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
          <a href="mailto:kabhishek54866@gmail.com" className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
            <FiMail /> Say Hello <FiArrowRight style={{ marginLeft: '0.5rem' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
