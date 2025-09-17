import React from 'react';
import { motion } from 'framer-motion';
import styles from './Blog.module.css';
import post1Image from '../../assets/images/post1.jpg';
import post2Image from '../../assets/images/post2.jpg';
import post3Image from '../../assets/images/post3.jpg';
import { PencilLine } from 'lucide-react'; // ✅ Imported correctly
import Particles from '../Particles/Particles';

const Blog = () => {
  const posts = [
    { title: "PR brand flyer made with canva", image: post1Image},
    { title: "Health app-Figma ui/ux", image: post2Image },
    { title: "photo manipulation with Photoshop", image: post3Image }
  ];

  const instagramURL = "https://www.instagram.com/ian_the.creator?igsh=MWF6empjcHA0a3lleA==";

  return (
    <section className={styles.blog}>
      <div className={styles.container}>
     <PencilLine size={30} color="#00e5ff" />
        <h2>Brand graphics, UI & creative expression</h2>
        <div className={styles.postsGrid}>
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={styles.postCard}
            >
              <a
                href={i === 2 ? instagramURL : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <div className={styles.glassCase}>
                  <img src={post.image} alt={post.title} className={styles.projectImage} />
                  <div className={styles.glassOverlay}></div>
                </div>
                <h3>{post.title}</h3>
                <p>{post.readTime}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;