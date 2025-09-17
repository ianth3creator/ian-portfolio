import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './TechStack.module.css';
import { Icon } from '@iconify/react';
import { FileStack } from 'lucide-react'; // ✅ Imported correctly
import Particles from '../Particles/Particles';

const TechStack = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Detect system preference or use localStorage
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(saved === 'true' || (!saved && prefersDark));
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  // Pass darkMode to component
  const containerClass = `${styles.techStack} ${darkMode ? styles.dark : ''}`;

  const techs = [
    {
      name: 'React',
      icon: <Icon icon="logos:react" width="60" height="60" />,
      description: 'Build dynamic user interfaces with reusable components'
    },
    {
      name: 'TypeScript',
      icon: <Icon icon="logos:typescript-icon" width="60" height="60" />,
      description: 'Strongly typed JavaScript for scalable code'
    },
    {
      name: 'Tailwind CSS',
      icon: <Icon icon="logos:tailwindcss" width="60" height="60" />,
      description: 'Utility-first CSS framework for rapid UI development'
    },
    {
      name: 'JavaScript',
      icon: <Icon icon="logos:javascript" width="60" height="60" />,
      description: 'Core language for web interactivity'
    },
    {
      name: 'HTML5',
      icon: <Icon icon="logos:html5" width="60" height="60" />,
      description: 'Modern markup standard for web content'
    },
    {
      name: 'CSS3',
      icon: <Icon icon="logos:css3" width="60" height="60" />,
      description: 'Styling language for beautiful layouts'
    },
    {
      name: 'Figma',
      icon: <Icon icon="logos:figma" width="60" height="60" />,
      description: 'Design collaboration and prototyping tool'
    },
    {
      name: 'Photoshop',
      icon: <Icon icon="logos:adobe-photoshop" width="60" height="60" />,
      description: 'Professional image editing and design'
    },
    {
      name: 'Canva',
      icon: <Icon icon="logos:canva" width="60" height="60" />,
      description: 'Visual design and social media tools'
    },
    {
      name: 'ChatGPT',
      icon: <Icon icon="logos:openai" width="60" height="60" />,
      description: 'AI assistant for code, writing, and ideation'
    }
  ];

  // Duplicate techs to create seamless loop
  const duplicatedTechs = [...techs, ...techs];

  return (
    <section className={containerClass}>
      <div className={styles.container}>
        {/* ✅ FIXED: Use PascalCase <FileStack /> */}
        <FileStack size={30} color="#00e5ff" />

        <h2>My Tech Stack</h2>
        <p>Tools I use to build modern, scalable digital experiences</p>

        <div className={styles.carouselContainer}>
          {/* Fade-out edges */}
          <div className={styles.fadeLeft}></div>
          <div className={styles.fadeRight}></div>

          <div className={styles.carousel}>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-200%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className={styles.slide}
            >
              {duplicatedTechs.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={styles.techItem}
                >
                  <div className={styles.icon}>{tech.icon}</div>
                  <h3>{tech.name}</h3>
                  <p>{tech.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className={styles.buttonContainer}>
</div>
        </div>
        {/* ✅ BUTTON NOW BELOW THE CAROUSEL */}
<div className={styles.buttonContainer}>
  <a href="/full-tech-stack" className={styles.fullStackButton}>
    Full Tech Stack
  </a>
</div>
      </div>
    </section>
  );
};

export default TechStack;