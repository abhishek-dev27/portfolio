import React from 'react';
import { motion } from 'framer-motion';

export const WordReveal = ({ text, className = '', style = {}, delay = 0, as = 'h2' }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: delay 
      }
    }
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      style={{ ...style }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.28em', willChange: 'transform, opacity' }}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
};
