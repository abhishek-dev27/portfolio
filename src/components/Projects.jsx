import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'General Store Management System',
    bullets: [
      'Built a full-stack e-commerce platform with POS Dashboard, Live Chat, Coupon System, and Dark Mode.',
      'Created an admin dashboard using Spring Boot and MySQL to safely store data and manage the app\'s backend.',
      'Added a checkout system that easily accepts UPI payments and Cash on Delivery (COD).',
      'Implemented Product Recommendations, Order Tracking, Returns & 12+ features for a complete retail solution.'
    ],
    tags: ['Spring Boot', 'React', 'MySQL', 'UPI'],
    link: '#',
    github: 'https://github.com/abhishek-dev27/online-general-store',
    featured: true
  },
  {
    title: 'ExamGuard AI',
    bullets: [
      'Created a secure online testing platform designed to prevent cheating during remote exams.',
      'Engineered a secure Node.js platform utilizing TensorFlow.js and face-api.js for real-time AI webcam proctoring.',
      'Designed the system architecture to watch students in real-time and grade their tests automatically.'
    ],
    tags: ['AI', 'Node.js', 'TensorFlow.js'],
    link: '#',
    github: 'https://github.com/abhishek-dev27',
    featured: true
  },
  {
    title: 'ShopVerse E-Commerce',
    bullets: [
      'Built a full-stack e-commerce platform with React, Vite, Express, and MongoDB.',
      'Implemented JWT authentication, product search, shopping cart, and checkout flow.',
      'Created an admin dashboard for product management and order tracking.'
    ],
    tags: ['React', 'Vite', 'Express', 'MongoDB'],
    link: '#',
    github: 'https://github.com/abhishek-dev27/shopverse-ecommerce',
    featured: true
  },
  {
    title: 'TaskFlow Management System',
    bullets: [
      'Built a professional task management system with Kanban board, Analytics dashboard, and Calendar view.',
      'Implemented a Pomodoro timer for productivity tracking and dynamic task categorization.',
      'Designed with React + Vite for a fast, responsive user experience.'
    ],
    tags: ['React', 'Vite', 'Kanban', 'Analytics'],
    link: '#',
    github: 'https://github.com/abhishek-dev27/TaskFlow-Task-Management-System',
    featured: true
  },
  {
    title: 'Blog Platform with Comments',
    bullets: [
      'Developed a full-stack blog platform with Express, React, and SQLite.',
      'Implemented JWT authentication, CRUD operations for posts and comments.',
      'Designed a premium dark-mode UI for an immersive reading experience.'
    ],
    tags: ['Express', 'React', 'SQLite', 'JWT'],
    link: '#',
    github: 'https://github.com/abhishek-dev27/Blog-Platform-with-Comments',
    featured: false
  },
  {
    title: 'Nexus Board (Agent-First Workspace)',
    bullets: [
      'Architected a web application featuring autonomous AI agents that scan backlogs and stream reasoning logs via the Gemini API.',
      'Built and integrated interactive task card components, optimizing the user experience for workflow automation.'
    ],
    tags: ['Gemini API', 'Agentic UI', 'Vanilla JS'],
    link: '#',
    github: 'https://github.com/abhishek-dev27',
    featured: false
  },
  {
    title: 'TutorHub Dashboard',
    bullets: [
      'Developed a React and Express dashboard to streamline educator operations and manage student/parent data.',
      'Utilized Recharts for dynamic progress data visualization and Helmet for secure API routing.'
    ],
    tags: ['React', 'Express', 'Recharts'],
    link: '#',
    github: 'https://github.com/abhishek-dev27',
    featured: false
  },
  {
    title: 'NexTrack | Indian Railways',
    bullets: [
      'Created a live-tracking dashboard using Vanilla JS, DOM manipulation, and a glassmorphism UI.',
      'Designed a dynamic mock data generator to render realistic train routes, schedules, and coach positions.'
    ],
    tags: ['Vanilla JS', 'DOM', 'UI/UX'],
    link: '#',
    github: 'https://github.com/abhishek-dev27',
    featured: false
  },
  {
    title: 'Attendance Nexus',
    bullets: [
      'Made a web app that helps students figure out exactly how many classes they need to attend to reach their target attendance percentage.',
      'Designed a clean, easy to use interface that works on mobile and updates instantly as you type.'
    ],
    tags: ['Web App', 'Responsive UI'],
    link: '#',
    github: 'https://github.com/abhishek-dev27',
    featured: true
  },
  {
    title: 'Oxford Public School',
    bullets: [
      'Built a premium, SEO-optimized landing page featuring custom HTML5 Canvas particle systems and magnetic button physics.'
    ],
    tags: ['HTML5 Canvas', 'Animations', 'SEO'],
    link: '#',
    github: 'https://github.com/abhishek-dev27',
    featured: true
  }
];


const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label">Selected Work</span>
          <h2 className="heading-lg" style={{ marginBottom: '4rem' }}>Featured Projects</h2>
        </motion.div>

        <div className="bento-grid">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1 }}
              className={`bento-card ${project.featured ? 'col-span-6' : 'col-span-4'}`}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: project.featured ? '420px' : '380px' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)' }}>
                    <FiExternalLink style={{ fontSize: '1.3rem', color: 'var(--text-secondary)' }} />
                  </div>
                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <a href={project.github} className="icon-link"><FiGithub /></a>
                    <a href={project.link} className="icon-link"><FiArrowUpRight /></a>
                  </div>
                </div>
                
                <h3 style={{ fontSize: project.featured ? '1.6rem' : '1.3rem', color: '#fff', marginBottom: '1rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', borderRadius: '100px', border: '1px solid var(--border-light)', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .icon-link { color: var(--text-tertiary); font-size: 1.2rem; transition: color 0.2s; }
        .icon-link:hover { color: #fff; }
      `}</style>
    </section>
  );
};

export default Projects;
