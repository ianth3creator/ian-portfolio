import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { X, Instagram, Dribbble, LinkedinIcon, Github } from 'lucide-react';
import Particles from '../Particles/Particles'; // 👈 Import particles

const Contact = () => {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        {/* Let's Talk (arrow floats between words) */}
        <motion.div
          className={styles.letsTalk}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setShowArrow(true)}
          onMouseLeave={() => setShowArrow(false)}
        >
          {/* Left word (linked to WhatsApp) */}
          <a
            href="https://wa.me/2348146003773"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              animate={
                showArrow
                  ? { opacity: 0.5, filter: 'blur(3px)' }
                  : { opacity: 1, filter: 'blur(0px)' }
              }
              transition={{ duration: 0.4 }}
            >
              Let’s
            </motion.span>
          </a>

          {/* Arrow button (linked to WhatsApp) */}
          <motion.button
            aria-label="Contact on WhatsApp"
            className={styles.arrowButton}
            initial={{ opacity: 0, y: 30 }}
            animate={
              showArrow
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.5 }}
            onClick={() =>
              window.open('https://wa.me/2348146003773', '_blank')
            }
            type="button"
          >
            <motion.span
              className={styles.arrowWrapper}
              animate={
                showArrow
                  ? {
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        '0 0 0px rgba(0,229,255,0.0)',
                        '0 0 14px rgba(0,229,255,0.28)',
                        '0 0 0px rgba(0,229,255,0.0)',
                      ],
                    }
                  : { scale: 1, boxShadow: '0 0 0px rgba(0,0,0,0)' }
              }
              transition={{
                duration: 1.4,
                repeat: showArrow ? Infinity : 0,
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden
              >
                <path
                  d="M18 24H30M30 24L24 18M30 24L24 30"
                  stroke="#00e5ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          </motion.button>

          {/* Right word (linked to WhatsApp) */}
          <a
            href="https://wa.me/2348146003773"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              className={styles.letsWord}
              animate={
                showArrow
                  ? { opacity: 0.55, filter: 'blur(3px)' }
                  : { opacity: 1, filter: 'blur(0px)' }
              }
              transition={{ duration: 0.32 }}
            >
              Talk
            </motion.span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className={styles.socialIcons}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {[ 
            { href: 'https://x.com/web3pest', Icon: X },
            { href: 'https://instagram.com/ian_the.creator', Icon: Instagram },
            { href: 'https://dribbble.com/yourhandle', Icon: Dribbble },
            { href: 'https://linkedin.com/in/yourhandle', Icon: LinkedinIcon },
            { href: 'https://github.com/ianth3creator', Icon: Github },
          ].map(({ href, Icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              whileHover={{ translateY: -6, scale: 1.08, rotate: 0.5 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          <p>&copy; {new Date().getFullYear()}. All rights Reserved.</p>
          <p>Designed by Ian using React & Framer Motion</p>
          <a
            href="mailto:chapellennamani@gmail.com"
            className={styles.contactLink}
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* ✅ MANUALLY ADD PARTICLES HERE — JUST LIKE IN HERO */}
      <Particles />
    </section>
  );
};

export default Contact;