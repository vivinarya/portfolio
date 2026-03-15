"use client";

import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Spotify } from "@/components/spotify";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { SmoothScrollHero } from "@/components/ui/modern-hero";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background text-foreground transition-colors duration-500">
      {/* Hero Section */}
      <section className="w-full">
        <SmoothScrollHero />
      </section>

      {/* Expertise Section */}
      <section id="services" className="w-full bg-background transition-colors duration-500">
        <div className="bg-background">
          <TextRevealByWord text="I craft high-performance digital experiences that merge systems engineering with intelligent AI workflows." />
        </div>
        <div className="max-w-7xl mx-auto py-24 md:py-40 px-8">
          <h2 className="text-foreground text-xl font-bold mb-20 underline uppercase tracking-[0.3em]">
            01 / What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-border pt-20">
            <ExpertiseCard 
              title="Full-Stack Development"
              description="Next.js, UI/UX, Web Dev. Building highly responsive and visually stunning web applications with the latest technologies."
            />
            <ExpertiseCard 
              title="AI & Machine Learning"
              description="Agents, Generative AI, RAG. Crafting intelligent workflows and autonomous agents that solve complex real-world problems."
            />
            <ExpertiseCard 
              title="Systems Engineering"
              description="DBMS, Custom Engines, Core Algorithms. Low-level optimization and architecture for high-performance computing environments."
            />
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="works" className="w-full py-24 md:py-40 bg-background px-8 overflow-hidden border-t border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-foreground text-xl font-bold mb-20 underline uppercase tracking-[0.3em] text-right">
            02 / Selected Works
          </h2>
          <div className="flex flex-col">
            <ProjectItem
              number="01"
              title="Consensus Bedrock Engine"
              description="Production-grade multi-agent AI consensus system on AWS. Features a 7-metric scoring engine and adaptive LLM routing for high-accuracy, low-cost inference."
              image="/images/consensus.png"
              href="https://prototype.d3ddhsf8bhejkw.amplifyapp.com/"
            />
            <ProjectItem
              number="02"
              title="AI Customer Support Agent"
              description="A sophisticated AI-driven support system designed to handle complex customer queries with natural language understanding and automated resolution paths."
              image="/images/support.png"
              href="https://github.com/vivinarya/AI-Support-Agent"
            />
            <ProjectItem
              number="03"
              title="Repository Janitor"
              description="An autonomous DevTools agent that scans repositories for technical debt, security vulnerabilities, and outdated patterns, proactively opening high-quality Pull Requests."
              image="/images/support.png" 
              href="https://github.com/vivinarya/Repository-Janitor"
              isComingSoon
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full py-24 md:py-40 px-8 border-t border-border bg-background transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-muted-foreground uppercase">Get in touch.</h2>
            
            <div className="flex flex-col gap-8">
              {[
                { name: "GITHUB", href: "https://github.com/vivinarya" },
                { name: "LINKEDIN", href: "https://www.linkedin.com/in/vivin-arya" },
                { name: "vivinarya2@gmail.com", href: "mailto:vivinarya2@gmail.com" }
              ].map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  whileHover={{ scale: 1.05, x: 20 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20 
                  }}
                  className="text-4xl md:text-7xl font-black hover:text-primary tracking-tighter will-change-transform block w-fit"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex justify-between items-center pt-20 border-t border-border mt-20">
              <p className="text-muted-foreground text-xs font-mono tracking-widest uppercase">
                © {new Date().getFullYear()} VIVIN'26
              </p>
              <p className="text-muted-foreground text-xs font-mono tracking-widest uppercase">
                BUILT WITH NEXT.JS & FRAMER MOTION
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ExpertiseCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true }}
      className="group cursor-default p-4 md:p-0 rounded-xl active:bg-secondary/10 transition-colors"
    >
     <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">{title}</h3>
      <p className="text-muted-foreground text-xl leading-relaxed group-hover:text-foreground transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
}

function ProjectItem({ number, title, description, image, href, isComingSoon }: { number: string; title: string; description: string; image: string; href?: string; isComingSoon?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-border py-12 md:py-32 md:cursor-none transition-colors duration-500 gap-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center gap-6 md:gap-12 z-10 pointer-events-none">
          <span className="text-4xl md:text-9xl font-black text-transparent opacity-20 transition-all duration-700 whitespace-nowrap" style={{ WebkitTextStroke: '1px var(--foreground)' }}>
            {number}
          </span>
          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="flex flex-col gap-2 active:opacity-70 transition-opacity"
          >
            <h3 className="text-2xl md:text-6xl font-bold group-hover:translate-x-4 transition-transform duration-500">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm md:text-lg max-w-md group-hover:translate-x-6 group-hover:text-foreground transition-all duration-500 delay-75">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Mobile Preview Image - Visible on mobile when in view */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="md:hidden w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-secondary/10 relative shadow-lg"
        >
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover ${isComingSoon ? 'blur-sm opacity-50' : ''}`}
            loading="lazy"
          />
          {isComingSoon && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-white text-xl font-black tracking-widest uppercase italic">
                Coming Soon
              </span>
            </div>
          )}
        </motion.div>
      </div>
      
      <div className="hidden md:flex md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <InteractiveHoverButton onClick={() => href && window.open(href, '_blank')} className="h-12">
          View Project
        </InteractiveHoverButton>
      </div>

      {/* Mobile-only CTA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        className="md:hidden w-full"
      >
        <InteractiveHoverButton onClick={() => href && window.open(href, '_blank')} className="w-full h-14">
          View Project
        </InteractiveHoverButton>
      </motion.div>


      {/* Floating Preview Image - Hidden on Mobile */}
      <motion.div
        style={{
          left: mouseXSpring,
          top: mouseYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute pointer-events-none z-0 hidden md:block overflow-hidden rounded-xl h-[300px] w-[450px] border border-white/10 shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 0.9 : 0,
          scale: isHovered ? 1 : 0.8,
          rotate: isHovered ? 5 : 0
        }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700 ${isComingSoon ? 'blur-sm opacity-50' : ''}`}
        />
        {isComingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="text-white text-3xl font-black tracking-[0.2em] uppercase italic">
              Coming Soon
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
