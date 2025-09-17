import React from 'react';
import { motion } from 'framer-motion';
import styles from './FullTechStack.module.css';
import { Icon } from '@iconify/react';

const FullTechStack = () => {
  const techs = [
    {
      name: 'React',
      icon: <Icon icon="logos:react" width="40" height="40" />,
      category: 'Frontend',
      description: 'Build dynamic user interfaces with reusable components and hooks.'
    },
    {
      name: 'TypeScript',
      icon: <Icon icon="logos:typescript-icon" width="40" height="40" />,
      category: 'Language',
      description: 'Strongly typed superset of JavaScript for scalable, maintainable codebases.'
    },
    {
      name: 'Tailwind CSS',
      icon: <Icon icon="logos:tailwindcss" width="40" height="40" />,
      category: 'Styling',
      description: 'Utility-first CSS framework enabling rapid, responsive UI development.'
    },
    {
      name: 'JavaScript',
      icon: <Icon icon="logos:javascript" width="40" height="40" />,
      category: 'Language',
      description: 'Core language for web interactivity, event handling, and dynamic content.'
    },
    {
      name: 'HTML5',
      icon: <Icon icon="logos:html5" width="40" height="40" />,
      category: 'Markup',
      description: 'Modern markup standard for semantic structure and accessibility.'
    },
    {
      name: 'CSS3',
      icon: <Icon icon="logos:css3" width="40" height="40" />,
      category: 'Styling',
      description: 'Advanced styling capabilities including animations, flexbox, and grid.'
    },
    {
      name: 'Figma',
      icon: <Icon icon="logos:figma" width="40" height="40" />,
      category: 'Design',
      description: 'Collaborative design tool for wireframing, prototyping, and handoff.'
    },
    {
      name: 'Photoshop',
      icon: <Icon icon="logos:adobe-photoshop" width="40" height="40" />,
      category: 'Design',
      description: 'Professional image editing, compositing, and asset creation.'
    },
    {
      name: 'Canva',
      icon: <Icon icon="logos:canva" width="40" height="40" />,
      category: 'Design',
      description: 'Quick-turnaround visual content creation for social media and marketing.'
    },
    {
      name: 'ChatGPT',
      icon: <Icon icon="logos:openai" width="40" height="40" />,
      category: 'AI Tool',
      description: 'AI assistant for ideation, debugging, documentation, and copywriting.'
    },
    {
      name: 'Node.js',
      icon: <Icon icon="logos:nodejs" width="40" height="40" />,
      category: 'Backend',
      description: 'JavaScript runtime for server-side development and API creation.'
    },
    {
      name: 'Express.js',
      icon: <Icon icon="logos:express" width="40" height="40" />,
      category: 'Backend',
      description: 'Minimalist web framework for building robust REST APIs with Node.js.'
    },
    {
      name: 'MongoDB',
      icon: <Icon icon="logos:mongodb" width="40" height="40" />,
      category: 'Database',
      description: 'NoSQL document database for flexible, scalable data storage.'
    },
    {
      name: 'Git / GitHub',
      icon: <Icon icon="logos:github" width="40" height="40" />,
      category: 'DevOps',
      description: 'Version control and collaborative development workflow.'
    },
    {
      name: 'Vercel',
      icon: <Icon icon="logos:vercel" width="40" height="40" />,
      category: 'Deployment',
      description: 'Cloud platform for instant deployment of frontend applications.'
    },
    {
      name: 'Netlify',
      icon: <Icon icon="logos:netlify" width="40" height="40" />,
      category: 'Deployment',
      description: 'All-in-one platform for hosting, forms, and serverless functions.'
    }
  ];

  return (
    <section className={styles.fullStack}>
      <div className={styles.container}>
        {/* Back Button */}
       
<motion.div className={styles.backButton}>
  <a href="/" className={styles.backBtn}>
    ← Back to Home
  </a>
</motion.div>

        <h1>My Full Tech Stack</h1>
        <p className={styles.subtitle}>
          A comprehensive overview of the tools, languages, and platforms I use daily to build digital experiences.
        </p>

        <div className={styles.techGrid}>
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={styles.techCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{tech.icon}</div>
                <h3>{tech.name}</h3>
                <span className={styles.category}>{tech.category}</span>
              </div>
              <p className={styles.description}>{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullTechStack;