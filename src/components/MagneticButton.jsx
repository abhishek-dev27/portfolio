import React, { useRef, useState } from 'react';

const MagneticButton = ({ 
  children, 
  className = '', 
  style = {}, 
  href, 
  onClick, 
  target, 
  rel, 
  as = 'a',
  ariaLabel
}) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e) => {
    if (!btnRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    // Capped at 7px max offset with smooth proximity pull
    const maxOffset = 7;
    const pullX = (deltaX / (rect.width / 2 || 1)) * maxOffset;
    const pullY = (deltaY / (rect.height / 2 || 1)) * maxOffset;
    
    setPosition({
      x: Math.max(-maxOffset, Math.min(maxOffset, pullX)),
      y: Math.max(-maxOffset, Math.min(maxOffset, pullY))
    });
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const Component = as === 'button' ? 'button' : 'a';

  return (
    <Component
      ref={btnRef}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered 
          ? 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)' 
          : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s',
        willChange: 'transform',
        display: 'inline-flex'
      }}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
