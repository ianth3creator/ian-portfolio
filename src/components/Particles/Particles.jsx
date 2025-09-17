// src/components/Particles/Particles.jsx
import React from 'react';
import styles from './Particles.module.css';

const Particles = () => {
  return (
    <div className={styles.particles}>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;