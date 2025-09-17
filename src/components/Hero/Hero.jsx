import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import ianImage from '../../assets/images/profile.jpg';
import Particles from '../Particles/Particles';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* === CONTAINER WITH GLOWING BORDER === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.heroCard}
        >
          {/* LEFT SIDE: TEXT + STATS */}
          <div className={styles.heroText}>
            <h1>Hello, I’m Ian!</h1>
            <p className={styles.subtitle}>Front-End Developer , UI/UX Designer , Creative  Personnel</p>

            <div className={styles.stats}>
              <span className={styles.statItem}>+200 Projects</span>
              <span className={styles.statItem}>1+ Years Experience</span>
              <span className={styles.statItem}>98% Client Satisfaction</span>
            </div>
          </div>

          {/* RIGHT SIDE: PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.heroImage}
          >
            <img src={ianImage} alt="Ian - Full-Stack Developer" loading="lazy" />
          </motion.div>

          {/* === PROGRESS FLOW BAR === */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className={styles.progressContainer}
          >
            <div className={styles.progressTitle}>My Journey as a Developer</div>
            <div className={styles.progressFlow}>
              {/* Stage 1: HTML */}
              <div className={styles.progressStage}>
                <div className={`${styles.progressDot} ${styles.completed}`}></div>
                <span className={styles.progressLabel}>HTML</span>
              </div>

              {/* Stage 2: CSS */}
              <div className={styles.progressStage}>
                <div className={`${styles.progressDot} ${styles.completed}`}></div>
                <span className={styles.progressLabel}>CSS</span>
              </div>

              {/* Stage 3: JavaScript */}
              <div className={styles.progressStage}>
                <div className={`${styles.progressDot} ${styles.completed}`}></div>
                <span className={styles.progressLabel}>JavaScript</span>
              </div>

              {/* Stage 4: React */}
              <div className={styles.progressStage}>
                <div className={`${styles.progressDot} ${styles.completed}`}></div>
                <span className={styles.progressLabel}>React</span>
              </div>

              {/* Stage 5: React Native */}
              <div className={styles.progressStage}>
                <div className={`${styles.progressDot} ${styles.completed}`}></div>
                <span className={styles.progressLabel}>React Native</span>
              </div>

              {/* Stage 6: Web Apps */}
              <div className={styles.progressStage}>
                <div className={`${styles.progressDot} ${styles.current}`}></div>
                <span className={styles.progressLabel}>Web Apps</span>
              </div>

              {/* Stage 7: Full Backend */}
              <div className={styles.progressStage}>
                <div className={styles.progressDot}></div>
                <span className={styles.progressLabel}>Full Backend</span>
              </div>

              {/* Stage 8: DevOps */}
              <div className={styles.progressStage}>
                <div className={styles.progressDot}></div>
                <span className={styles.progressLabel}>DevOps</span>
              </div>
            </div>

            {/* Glowing Line */}
            <div className={styles.progressLine}></div>
          </motion.div>
        </motion.div>
      </div>

      {/* ANIMATED PARTICLES BACKGROUND */}
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
    </section>
  );
};

export default Hero; 