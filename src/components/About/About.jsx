import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import ianImage from '../../assets/images/ian.jpg';
import { MapPin } from 'lucide-react';
import Particles from '../Particles/Particles'; // 👈 Import global particles

const About = () => {
  // === Location Icon Component ===
  const LocationIcon = () => {
    return (
      <div className={styles.locationCard}>
        <div className={styles.locationHeader}>
          <MapPin size={16} color="#00e5ff" />
          <span>Lagos, Nigeria</span>
        </div>

        <div className={styles.map}>
          {/* Nigeria Map Outline */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 200"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svgMap}
          >
            {/* Background */}
            <rect width="400" height="200" fill="#0a0a0a" rx="10" />

            {/* Nigeria Outline (simplified) */}
            <path
              d="M104 96 L122 78 L150 82 L166 110 L192 104 L216 118 L250 120 L278 106 L310 104 L334 112 L364 94 L380 116 L386 146 L402 152 L396 182 L370 232 L352 246 L344 284 L326 300 L306 288 L274 308 L256 336 L246 370 L206 376 L182 364 L170 332 L146 310 L116 308 L116 246 L128 220 L118 190 L120 162 L104 134 Z"

              fill="none"
              stroke="#00e5ff"
              strokeWidth="1"
              opacity="0.3"
              className={styles.mapOutline}
            />
          </svg>

          {/* Floating Pin — CENTERED ON MAP */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={styles.floatingPin}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <MapPin
              size={40}
              color="#00e5ff"
              className={styles.pin}
              style={{
                filter: 'drop-shadow(0 0 15px rgba(0, 229, 255, 0.7))'
              }}
            />
          </motion.div>
        </div>
      </div>
    );
  };

  // === Skills Grid Component ===
  const SkillsGrid = () => {
    const skills = [
      "HTML5/CSS3 Mastery", "Responsive Design", "UI/UX Expertise",
      "Collaborative Team Player", "JavaScript Proficiency", "Design Tools Mastery",
      "Keeping Ahead of Trends", "Attention to Detail", "Problem Solving"
    ];

    // Duplicate skills to create seamless loop
    const duplicatedSkills = [...skills, ...skills];

    return (
      <div className={styles.skillsCard}>
        <div className={styles.skillsHeader}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L8 6H16L12 10V2Z" fill="#00e5ff"/>
            <path d="M12 12L8 16H16L12 20V12Z" fill="#00e5ff"/>
          </svg>
          <span>Skills</span>
        </div>
        <div className={styles.skillsList}>
          <div className={styles.scrollContainer}>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-500%" }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className={styles.scrollContent}
            >
              {duplicatedSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={styles.skillItem}
                >
                  {skill}
                  <span className={styles.plus}>+</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.aboutText}
        >
          <h2>About Me</h2>
          <p>
            I'm a web developer and UI designer with 1+ years of experience turning complex problems into elegant solutions.
            My work blends creativity with technical excellence to build digital experiences that are both beautiful and functional.
          </p>

          <div className={styles.skillsSection}>
            <LocationIcon />
            <SkillsGrid />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.aboutImage}
        >
          <img
            src={ianImage}
            alt="Ian - Developer"
          />
        </motion.div>
      </div>

      {/* ✅ GLOBAL PARTICLES — REUSABLE COMPONENT */}
      <Particles />
    </section>
  );
};

export default About;