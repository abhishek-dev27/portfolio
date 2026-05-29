import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.6rem', fontWeight: 800 }}>A</span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>Abhishek Kumar</span>
        </div>

        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Designed & Built by Abhishek.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
