'use client';

import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  className?: string;
}

const blobs = [
  {
    color: '#C4866A',
    size: '60%',
    initialX: '-10%',
    initialY: '-20%',
    animate: {
      x: ['-10%', '15%', '-5%', '10%', '-10%'],
      y: ['-20%', '10%', '20%', '-10%', '-20%'],
      scale: [1, 1.15, 0.95, 1.1, 1],
    },
    duration: 24,
  },
  {
    color: '#B8A078',
    size: '55%',
    initialX: '50%',
    initialY: '-15%',
    animate: {
      x: ['50%', '30%', '55%', '35%', '50%'],
      y: ['-15%', '15%', '-5%', '20%', '-15%'],
      scale: [1, 0.9, 1.1, 0.95, 1],
    },
    duration: 28,
  },
  {
    color: '#7A8472',
    size: '65%',
    initialX: '10%',
    initialY: '40%',
    animate: {
      x: ['10%', '35%', '5%', '30%', '10%'],
      y: ['40%', '20%', '50%', '30%', '40%'],
      scale: [1, 1.1, 0.9, 1.05, 1],
    },
    duration: 26,
  },
  {
    color: '#C4866A',
    size: '50%',
    initialX: '60%',
    initialY: '50%',
    animate: {
      x: ['60%', '40%', '65%', '45%', '60%'],
      y: ['50%', '30%', '55%', '25%', '50%'],
      scale: [1, 1.05, 1.15, 0.9, 1],
    },
    duration: 30,
  },
];

export default function GradientBackground({ className }: GradientBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ''}`}
      aria-hidden="true"
    >
      {/* Dark green base layer */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#2F3530' }}
      />

      {/* Animated gradient orbs */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          initial={{
            x: blob.initialX,
            y: blob.initialY,
            scale: 1,
          }}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: blob.size,
            height: blob.size,
            borderRadius: '50%',
            background: `radial-gradient(circle at center, ${blob.color} 0%, transparent 70%)`,
            opacity: index % 2 === 0 ? 0.4 : 0.3,
            filter: 'blur(80px)',
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
}
