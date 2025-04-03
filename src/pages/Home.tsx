import { ArrowRight, Brain, Zap, Database, Code, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { SiPython } from "react-icons/si";
const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (cursorRef.current) {
        // Add a slight delay for a trailing effect
        setTimeout(() => {
          cursorRef.current!.style.left = `${e.clientX}px`;
          cursorRef.current!.style.top = `${e.clientY}px`;
        }, 100);
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseDown = () => {
      if (cursorRef.current) cursorRef.current.classList.add('cursor-clicked');
      if (cursorDotRef.current) cursorDotRef.current.classList.add('cursor-dot-clicked');
    };

    const handleMouseUp = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('cursor-clicked');
      if (cursorDotRef.current) cursorDotRef.current.classList.remove('cursor-dot-clicked');
    };

    // Add hover effect for interactive elements
    const handleLinkHover = () => {
      if (cursorRef.current) cursorRef.current.classList.add('cursor-hover');
      if (cursorDotRef.current) cursorDotRef.current.classList.add('cursor-dot-hover');
    };

    const handleLinkLeave = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('cursor-hover');
      if (cursorDotRef.current) cursorDotRef.current.classList.remove('cursor-dot-hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const interactiveElements = document.querySelectorAll('a, button, .project-card-3d');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleLinkHover);
      element.addEventListener('mouseleave', handleLinkLeave);
    });

    // Hide the default cursor
    document.body.classList.add('custom-cursor');

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHover);
        element.removeEventListener('mouseleave', handleLinkLeave);
      });

      document.body.classList.remove('custom-cursor');
    };
  }, []);

  // Neural Network Background Effect with enhanced visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; radius: number; vx: number; vy: number; color: string }[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 8), 150);
    const connectionDistance = 150;
    const colors = ['#10B981', '#34D399', '#059669'];

    // Add mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let mouseRadius = 150;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Mouse move event
    canvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Calculate distance from mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Repel particles from mouse
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 0.5;
          p.vy -= Math.sin(angle) * force * 0.5;
        }

        // Move particles
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Create a glow effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${(connectionDistance - distance) / connectionDistance * 0.2})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();

            // Add data transfer effect along the connection
            if (Math.random() > 0.99) {
              ctx.beginPath();
              const pos = Math.random();
              const x = p.x * pos + p2.x * (1 - pos);
              const y = p.y * pos + p2.y * (1 - pos);
              ctx.arc(x, y, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = '#34D399';
              ctx.fill();
            }
          }
        }
      }
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Custom cursor elements */}
      <div
        ref={cursorRef}
        className="custom-cursor-ring pointer-events-none fixed top-0 left-0 w-8 h-8 border border-dsai-green rounded-full transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-100 mix-blend-difference"
      ></div>
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot pointer-events-none fixed top-0 left-0 w-2 h-2 bg-dsai-green rounded-full transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-75"
      ></div>

      {/* Interactive Neural Network Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 opacity-40"
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative mb-10 animate-float">
              <div className="absolute inset-0 bg-dsai-green/20 rounded-full blur-2xl transform-gpu animate-pulse-slow"></div>
              <p className="text-lg relative whitespace-nowrap bg-gradient-to-r from-dsai-green/20 to-dsai-green/5 px-4 py-2 rounded-lg">
                DSAI <span className="text-dsai-green">//</span> CLUB
                <span className="text-dsai-gray">
                  <span className="text-dsai-green">//</span>
                </span> NIT AGARTALA
              </p>

            </div>

            <h4 className="text-[clamp(1.5rem,5vw,4rem)] font-bold mb-8 max-w-7xl animate-blur-in relative leading-relaxed sm:leading-loose">
              <span className="absolute -left-12 -top-12 w-24 h-24 bg-dsai-green/5 rounded-full blur-xl"></span>
              EMP
              <span className="inline-flex items-center justify-center w-[clamp(2rem,5vw,5rem)] h-[clamp(2rem,5vw,5rem)] rounded-full bg-dsai-green relative mx-1 overflow-hidden group align-middle">
                <div className="absolute inset-0 bg-gradient-to-r from-dsai-green/80 to-dsai-green opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <SiPython className="z-10 animate-float text-[clamp(1rem,4vw,2rem)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_60%)] animate-pulse-slow"></div>
              </span>
              WERING DATA SCIENCE
              <br />
              FOR STUDENTS
              <span className="absolute -right-12 -bottom-12 w-24 h-24 bg-dsai-green/5 rounded-full blur-xl"></span>
            </h4>

            <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-400 mb-12 max-w-4xl animate-fade-in animate-delay-300 relative leading-loose sm:leading-relaxed md:leading-loose lg:leading-loose">
              <span className="absolute -left-6 top-1/2 w-12 h-12 bg-dsai-green/5 rounded-full blur-lg"></span>
              We <span className="px-3 py-1 rounded-full bg-gradient-to-r from-dsai-green/20 to-dsai-green/5 text-dsai-green">create</span> projects,
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-dsai-green/20 to-dsai-green/5 text-dsai-green">innovate</span> with AI models, and thrive in
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-dsai-green/20 to-dsai-green/5 text-dsai-green">collaborative learning</span>
              <span className="absolute -right-6 top-1/2 w-12 h-12 bg-dsai-green/5 rounded-full blur-lg"></span>
            </p>

            <Button asChild className="bg-dsai-green hover:bg-dsai-green-light text-black font-semibold text-[clamp(0.875rem,2vw,1.25rem)] px-[clamp(1.5rem,4vw,2rem)] py-[clamp(1rem,3vw,1.5rem)] h-auto rounded-full shadow-lg hover:shadow-dsai-green/20 transition-all animate-fade-in animate-delay-500 relative overflow-hidden group">
              <Link to="https://chat.whatsapp.com/IZtjxNyjq6L5d9dYudzo5K">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                JOIN NOW <ArrowRight className="ml-2 h-[clamp(1rem,2vw,1.25rem)] w-[clamp(1rem,2vw,1.25rem)] animate-pulse-slow" />
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* What We Do Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Our Focus Areas"
            title="What We Explore"
            description="Dive into the exciting domains we explore through workshops, projects, and research initiatives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-dsai-green" />}
              title="Machine Learning"
              description="From classical ML to deep neural networks, we explore algorithms that allow computers to learn patterns from data."
            />

            <FeatureCard
              icon={<Database className="h-10 w-10 text-dsai-green" />}
              title="Data Science"
              description="Mastering the art of extracting insights and knowledge from large and complex datasets."
            />

            <FeatureCard
              icon={<Code className="h-10 w-10 text-dsai-green" />}
              title="AI Applications"
              description="Building innovative solutions across domains like healthcare, finance, education and more."
            />

            <FeatureCard
              icon={<CircuitBoard className="h-10 w-10 text-dsai-green" />}
              title="Research & Innovation"
              description="Pushing boundaries through original research and implementing cutting-edge papers."
            />
          </div>
        </div>
      </section>

      {/* Featured Events with Parallax Effect */}
      <section className="py-24 bg-dsai-dark-lighter relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)]"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border border-dsai-green/20 rounded-full animate-float opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 border border-dsai-green/20 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-dsai-green/10 rounded-full animate-float opacity-10" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Exciting Opportunities Ahead"
            title="Upcoming Events You Can’t Miss!"
            description="Expand your knowledge, connect with experts, and sharpen your skills by joining our exclusive tech events and workshops."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="transform-gpu transition-all duration-500 hover:-translate-y-2">
              <EventCard
                title="AI & Machine Learning Bootcamp"
                date="April 10, 2025"
                time="10:00 AM - 4:00 PM"
                location="Innovation Hub, NIT Agartala"
                description="A hands-on session covering AI fundamentals, model training, and deployment techniques using Python, TensorFlow, and FastAPI."
                imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
              />
            </div>

            <div className="transform-gpu transition-all duration-500 hover:-translate-y-2 hover:z-10">
              <EventCard
                title="Data Science Hackathon"
                date="May 5, 2025"
                time="9:00 AM - 6:00 PM"
                location="Computer Science Block, NIT Agartala"
                description="Put your data skills to the test in this thrilling hackathon! Work with real-world datasets and build impactful solutions."
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
              />
            </div>

            <div className="transform-gpu transition-all duration-500 hover:-translate-y-2 hover:z-10">
              <EventCard
                title="Tech Talk: The Future of AI Ethics"
                date="May 20, 2023"
                time="3:00 PM - 5:00 PM"
                location="Auditorium, NIT Agartala"
                description="An engaging discussion on AI ethics and responsible AI development, featuring renowned experts from academia and industry."
                imageSrc="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3" isPast={true}
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-dsai-green text-dsai-green hover:bg-dsai-green hover:text-black transition-all duration-300 relative overflow-hidden group">
              <Link to="/events">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Featured Projects with Enhanced Card Effect */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Innovation Spotlight"
            title="Our Latest Projects"
            description="Explore cutting-edge projects and research developed by our club members, showcasing the practical applications of AI and technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {/* Project 1 */}
            <div className="project-card-3d transform-gpu transition-all duration-500 hover:-translate-y-2 hover:rotate-y-5 hover:z-10">
              <ProjectCard
                title="AI-Powered Resume Analyzer"
                description="A machine learning tool that analyzes resumes and provides feedback on skill gaps, readability, and industry-specific optimization."
                imageSrc="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                tags={["AI", "Resume Analysis", "NLP", "HR Tech"]}
                githubLink="https://github.com/example/resume-analyzer"
                demoLink="https://example.com/resume-analyzer"
              // className="h-full flex flex-col"
              />
            </div>

            {/* Project 2 */}
            <div className="project-card-3d transform-gpu transition-all duration-500 hover:-translate-y-2 hover:rotate-y-5 hover:z-10">
              <ProjectCard
                title="Smart Traffic Management System"
                description="An IoT-based smart traffic system that optimizes signal timings using real-time data analysis to reduce congestion."
                imageSrc="https://images.pexels.com/photos/8783158/pexels-photo-8783158.jpeg?auto=compress&cs=tinysrgb&w=600"
                tags={["IoT", "Data Science", "Automation", "Urban Planning"]}
                githubLink="https://github.com/example/smart-traffic"
                demoLink="https://example.com/smart-traffic"
              // className="h-full flex flex-col"
              />
            </div>

            {/* Project 3 */}
            <div className="project-card-3d transform-gpu transition-all duration-500 hover:-translate-y-2 hover:rotate-y-5 hover:z-10">
              <ProjectCard
                title="AI Chatbot for Student Assistance"
                description="A chatbot that provides real-time academic assistance and campus-related FAQs using NLP and deep learning models."
                imageSrc="https://images.pexels.com/photos/16094065/pexels-photo-16094065/free-photo-of-eyeglasses-and-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                tags={["Chatbot", "Deep Learning", "NLP", "Education"]}
                githubLink="https://github.com/example/ai-chatbot"
                demoLink="https://example.com/ai-chatbot"
              // className="h-full flex flex-col"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-dsai-green text-dsai-green hover:bg-dsai-green hover:text-black transition-all duration-300 relative overflow-hidden group">
              <Link to="/innovations">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                Explore All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-dsai-dark to-dsai-dark-lighter relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>

        {/* Circuit patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-dsai-green/40"></div>
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-dsai-green/40"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-dsai-green/40"></div>
          <div className="absolute top-0 left-1/4 h-full w-[1px] bg-dsai-green/40"></div>
          <div className="absolute top-0 left-2/4 h-full w-[1px] bg-dsai-green/40"></div>
          <div className="absolute top-0 left-3/4 h-full w-[1px] bg-dsai-green/40"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="20+" label="Active Projects" icon={<Code className="h-8 w-8" />} />
            <StatCard number="50+" label="Members" icon={<Brain className="h-8 w-8" />} />
            <StatCard number="30+" label="Workshops" icon={<CircuitBoard className="h-8 w-8" />} />
            <StatCard number="3+" label="Industry Partners" icon={<Database className="h-8 w-8" />} />
          </div>
        </div>
      </section>

      {/* CTA Section with Glassmorphism */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)]"></div>

        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-12 backdrop-blur-xl relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-dsai-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-dsai-green/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to dive into the world of Data Science & AI?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Join our club of innovators, builders, and problem solvers. Gain valuable skills, work on real projects, and connect with like-minded peers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-dsai-green hover:bg-dsai-green-light text-black font-semibold transition-all relative overflow-hidden group">
                  <Link to="https://chat.whatsapp.com/IZtjxNyjq6L5d9dYudzo5K">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    Become a Member
                  </Link>
                </Button>

                <Button asChild variant="outline" className="border-white/20 hover:border-white/40 transition-all">
                  <Link to="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="glass-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-dsai-green/20 group">
      <div className="w-16 h-16 rounded-xl bg-dsai-green/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-dsai-green/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-dsai-green">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
};

// Stat Card Component
const StatCard = ({ number, label, icon }: { number: string, label: string, icon: React.ReactNode }) => {
  return (
    <div className="text-center transform transition-all duration-500 hover:scale-105">
      <div className="w-20 h-20 bg-dsai-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-dsai-green">
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{number}</div>
      <div className="text-dsai-green font-medium">{label}</div>
    </div>
  );
};

export default Home;
