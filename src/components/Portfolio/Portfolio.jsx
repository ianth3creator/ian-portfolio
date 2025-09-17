import React from 'react';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';
import web1image from '../../assets/images/web1.jpg';
import web2image from '../../assets/images/web2.jpg';
import web3image from '../../assets/images/web3.jpg';
import { LaptopMinimalCheck } from 'lucide-react'; // ✅ Imported correctly
import Particles from '../Particles/Particles';

const Portfolio = () => {
  const projects = [
    {
      title: "CO-developed a Donation web app for HAVESTA (startup phase)",
      image: web1image,
      link: "https://havesta.com/donation/"
    },
    {
      title: "E-commerce website",
      image: web2image,
      link: "http://plushhomes.netlify.app"
    },
    {
      title: "Marketing website/gallery",
      image: web3image,
      link: "http://kenedixon-investment-enterprise.netlify.app"
    }
  ];

  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <LaptopMinimalCheck size={30} color="#00e5ff" />
        <h2>Latest Works</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={styles.projectCard}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <div className={styles.glassCase}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.glassOverlay}></div>
                </div>
                <h3>{project.title}</h3>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;