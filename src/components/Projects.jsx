import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { WordReveal } from './TextReveal';
import MagneticButton from './MagneticButton';

const projects = [
  {
    title: 'InventoryPro — Store Management Dashboard',
    bullets: [
      'Full-stack inventory/store management dashboard deployed and in active use by 100+ users across 5 cities (Ranchi, Jamshedpur, Patna, Hazaribagh, Daltonganj).',
      'Built during internship at Sologix Energy with real-time inventory tracking, user roles, and analytics.',
    ],
    tags: ['Spring Boot', 'React', 'MySQL'],
    link: '#',
    github: 'https://github.com/abhishek-dev27',
    featured: true,
    status: 'deployed'
  },
  {
    title: 'Lead Manager CRM',
    bullets: [
      'Full CRM system for tracking leads, proposals, followups, and conversions, built as part of ongoing internship work at Sologix Energy.',
      'Designed an 8-table relational schema (user, user_permission, customer, product, proposal, followup, conversion, notification).'
    ],
    tags: ['Spring Boot', 'MySQL', 'Database Design'],
    link: '#',
    github: 'https://github.com/abhishek-dev27',
    featured: true,
    status: 'progress'
  },
  {
    title: 'Job Scam Detector',
    bullets: [
      'Machine learning pipeline that detects fraudulent job postings using Python, scikit-learn, TF-IDF feature extraction, and Logistic Regression.',
      'Trained on the EMSCAD dataset with a full pytest test suite. FastAPI/Spring Boot integration layer in progress.'
    ],
    tags: ['Python', 'scikit-learn', 'Machine Learning'],
    link: '#',
    github: 'https://github.com/abhishek-dev27',
    featured: true,
    status: 'progress'
  },
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

const gradientMap = {
  'Spring Boot': 'linear-gradient(135deg, #10b981, #06b6d4)',
  'React': 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  'MySQL': 'linear-gradient(135deg, #f59e0b, #f97316)',
  'Python': 'linear-gradient(135deg, #3b82f6, #facc15)',
  'AI': 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  'Node.js': 'linear-gradient(135deg, #10b981, #22c55e)',
  'Vite': 'linear-gradient(135deg, #8b5cf6, #f97316)',
  'Express': 'linear-gradient(135deg, #6b7280, #9ca3af)',
  'Gemini API': 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  'Vanilla JS': 'linear-gradient(135deg, #facc15, #f59e0b)',
  'Web App': 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
  'HTML5 Canvas': 'linear-gradient(135deg, #f97316, #ef4444)',
  'default': 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set custom properties for cursor glow
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // 3D tilt calculation (capped at ~6-7 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 6.5;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    
    setTilt({ rx: rotateX, ry: rotateY });
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
  };

  const gradient = gradientMap[project.tags[0]] || gradientMap['default'];
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        delay: (index % 3) * 0.09,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`project-card bento-card ${project.featured ? 'col-span-6' : 'col-span-4'}`}
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(-5px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered 
          ? 'transform 0.12s ease-out, border-color 0.3s, box-shadow 0.3s' 
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s',
        willChange: 'transform'
      }}
    >
      {/* Gradient top strip */}
      <div className="card-gradient-strip" style={{ background: gradient }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)' }}>
              <FiExternalLink style={{ fontSize: '1.3rem', color: 'var(--text-secondary)' }} />
            </div>
            {project.status === 'progress' && (
              <span className="status-badge status-progress">In Progress</span>
            )}
            {project.status === 'deployed' && (
              <span className="status-badge status-deployed">✦ Deployed</span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="card-number">{num}</span>
            <MagneticButton href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link" ariaLabel="GitHub repo">
              <FiGithub />
            </MagneticButton>
            <MagneticButton href={project.link} className="icon-link" ariaLabel="Live link">
              <FiArrowUpRight />
            </MagneticButton>
          </div>
        </div>

        {/* Project Thumbnail / Visual Preview */}
        <div className="project-thumbnail" style={{ position: 'relative', height: '140px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {project.image ? (
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: gradient }} />
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, color: 'var(--text-secondary)' }}>
                <FiCode style={{ fontSize: '1.2rem' }} />
              </div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', marginTop: '0.5rem', zIndex: 1, letterSpacing: '0.04em' }}>
                PROJECT PREVIEW
              </span>
            </div>
          )}
        </div>
        
        <h3 style={{ fontSize: project.featured ? '1.5rem' : '1.25rem', color: '#fff', marginBottom: '1rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
          {project.title}
        </h3>
        
        <ul className="project-bullets" style={{ flexGrow: 1 }}>
          {project.bullets.map((bullet, idx) => (
            <li key={idx}>
              <span className="bullet-dot" style={{ background: gradient }} />
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech tag list with pop-in scale & stagger - pinned to bottom */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.05, delayChildren: (index % 3) * 0.09 + 0.1 } }
        }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto', paddingTop: '1.75rem', position: 'relative', zIndex: 1 }}
      >
        {project.tags.map(tag => (
          <motion.span 
            key={tag} 
            variants={{
              hidden: { opacity: 0, scale: 0.88 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="project-tag"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

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
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.16), rgba(6, 182, 212, 0.08), transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        .project-card:hover::before { opacity: 1; }

        .card-gradient-strip {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 24px 24px 0 0;
          opacity: 0.7;
          transition: opacity 0.3s, height 0.3s;
        }
        .project-card:hover .card-gradient-strip { opacity: 1; height: 4px; }

        .card-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-tertiary);
          opacity: 0.4;
          font-weight: 600;
        }

        .status-badge {
          font-size: 0.7rem;
          padding: 0.25rem 0.7rem;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .status-progress {
          background: rgba(250, 204, 21, 0.1);
          border: 1px solid rgba(250, 204, 21, 0.3);
          color: #facc15;
        }
        .status-deployed {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
        }

        .project-bullets {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .project-bullets li {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }
        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.55rem;
        }

        .project-tag {
          font-size: 0.75rem;
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          border: 1px solid var(--border-light);
          color: var(--text-tertiary);
          font-family: var(--font-mono);
          transition: all 0.2s;
          display: inline-block;
          will-change: transform, opacity;
        }
        .project-card:hover .project-tag {
          border-color: rgba(139, 92, 246, 0.3);
          color: var(--text-secondary);
        }

        .icon-link { 
          color: var(--text-tertiary); 
          font-size: 1.2rem; 
          padding: 0.35rem;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s; 
        }
        .icon-link:hover { color: #fff; }
      `}</style>
    </section>
  );
};

export default Projects;
