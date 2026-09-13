import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse events
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.x;
      mouseRef.current.y = e.y;
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // Particle Class
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Interactive mouse repel
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (mouseRef.current.x != null && distance < mouseRef.current.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouseRef.current.radius;
          const force = (maxDistance - distance) / maxDistance;
          const dirX = forceDirectionX * force * 5;
          const dirY = forceDirectionY * force * 5;
          
          this.x -= dirX;
          this.y -= dirY;
        } else {
          // Slowly return to base path
          if (this.x !== this.baseX) {
            let bx = this.x - this.baseX;
            this.x -= bx / 50;
          }
          if (this.y !== this.baseY) {
            let by = this.y - this.baseY;
            this.y -= by / 50;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.baseX += this.directionX;
        this.baseY += this.directionY;

        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      // Optimized: reduced density for better performance
      let numberOfParticles = Math.min((canvas.height * canvas.width) / 18000, 120);
      
      // Color palette
      const colors = ['#06b6d4', '#8b5cf6', '#ec4899', '#ffffff'];

      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 1.8) + 0.8;
        let x = Math.random() * (canvas.width - size * 2) + size * 2;
        let y = Math.random() * (canvas.height - size * 2) + size * 2;
        let directionX = (Math.random() * 0.6) - 0.3;
        let directionY = (Math.random() * 0.6) - 0.3;
        let color = colors[Math.floor(Math.random() * colors.length)];
        
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      const connectionDistance = (canvas.width / 8) * (canvas.height / 8);
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + 
                         ((particlesArray[a].y - particlesArray[b].y) ** 2);
          if (distance < connectionDistance) {
            let opacityValue = 1 - (distance / 15000);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacityValue * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      
      ctx.fillStyle = 'rgba(3, 0, 20, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    init();
    animate();

    // Re-init particles on resize
    const handleResize = () => {
      resizeCanvas();
      init();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: '#030014' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      {/* Subtle gradient orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <style>{`
        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          pointer-events: none;
          animation: float-orb 20s ease-in-out infinite;
        }
        .bg-orb-1 {
          width: 500px;
          height: 500px;
          background: var(--accent-purple);
          top: 10%;
          right: -10%;
          animation-delay: 0s;
        }
        .bg-orb-2 {
          width: 400px;
          height: 400px;
          background: var(--accent-cyan);
          bottom: 20%;
          left: -8%;
          animation-delay: -7s;
        }
        .bg-orb-3 {
          width: 350px;
          height: 350px;
          background: var(--accent-pink);
          top: 50%;
          right: 20%;
          animation-delay: -14s;
          opacity: 0.08;
        }
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -20px) scale(1.05); }
          50% { transform: translate(-20px, 30px) scale(0.95); }
          75% { transform: translate(20px, 20px) scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default Background;
