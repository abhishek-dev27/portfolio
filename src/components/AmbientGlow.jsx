import React, { useEffect, useState } from 'react';

const AmbientGlow = () => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId;
    const handlePointerMove = (e) => {
      if (!visible) setVisible(true);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.body.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      document.body.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [visible]);

  return (
    <div
      className="ambient-cursor-glow"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 2,
        opacity: visible ? 0.06 : 0,
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.9) 0%, rgba(6, 182, 212, 0.4) 30%, rgba(236, 72, 153, 0.15) 50%, transparent 70%)',
        transform: `translate3d(${pos.x - 300}px, ${pos.y - 300}px, 0)`,
        transition: 'opacity 0.5s ease, transform 0.05s linear',
        willChange: 'transform, opacity',
      }}
    />
  );
};

export default AmbientGlow;
