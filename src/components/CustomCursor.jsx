import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if touch device / mobile width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hovered element cursor data
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        setCursorText(type || '');
        setCursorVariant(type ? 'hover' : 'default');
      } else if (e.target.closest('a, button')) {
        setCursorText('→');
        setCursorVariant('hover');
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#00ff66] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: cursorVariant === 'hover' ? 0 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer Ring / Follower */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center font-mono text-[10px] font-bold uppercase tracking-widest transition-colors duration-200"
        animate={{
          x: position.x - (cursorVariant === 'hover' ? 36 : 18),
          y: position.y - (cursorVariant === 'hover' ? 36 : 18),
          width: cursorVariant === 'hover' ? 72 : 36,
          height: cursorVariant === 'hover' ? 72 : 36,
          backgroundColor: cursorVariant === 'hover' ? 'rgba(0, 255, 102, 0.9)' : 'rgba(255, 255, 255, 0.05)',
          borderColor: cursorVariant === 'hover' ? '#00ff66' : 'rgba(0, 255, 102, 0.4)',
          color: cursorVariant === 'hover' ? '#000000' : '#ffffff',
          borderWidth: 1
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorText}
      </motion.div>
    </>
  );
}
