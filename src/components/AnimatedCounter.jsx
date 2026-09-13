import React, { useState, useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 1.0 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.floor(v));
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const controls = animate(count, target, { duration: duration, ease: [0.16, 1, 0.3, 1] });
          return () => controls.stop();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', v => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}
