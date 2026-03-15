"use client";

import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { BlurText } from "./blur-text";
import { InteractiveHoverButton } from "./interactive-hover-button";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-background">
      <ReactLenis root options={{ lerp: 0.2, duration: 1.2, smoothWheel: true }}>
        <HeroSection />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 800;

const HeroSection = () => {
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <motion.div 
        style={{ opacity: indicatorOpacity }}
        className="fixed bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 md:gap-4 pointer-events-none"
      >
        <motion.span 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[11px] font-bold uppercase tracking-[0.5em] text-foreground whitespace-nowrap drop-shadow-sm"
        >
          Scroll to explore
        </motion.span>
        <div className="h-12 md:h-24 w-[2px] md:w-[3px] bg-foreground/10 relative overflow-hidden rounded-full">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary shadow-[0_0_12px_var(--primary)]"
          />
        </div>
      </motion.div>
      <StickyBackground />
      <ParallaxContent />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
};

const StickyBackground = () => {
  const { scrollY } = useScroll();
  const router = useRouter();

  // Morphing clip path - Extra wide initial values to prevent side-clipping of "B" and "S"
  const clip1 = useTransform(scrollY, [0, 800], [0, 0]); // Stabilize clip on mobile
  const clip2 = useTransform(scrollY, [0, 800], [100, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundScale = useTransform(
    scrollY,
    [0, 800],
    [1.5, 1]
  );
  
  const opacity = useTransform(
    scrollY,
    [800, 1200],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden will-change-[clip-path,opacity,background-color]"
      style={{
        clipPath,
        opacity,
        background: "var(--background)",
      }}
    >
      {/* Background visual element instead of image */}
      <motion.div 
        style={{ scale: backgroundScale }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center will-change-transform"
      >
        <div className="w-[80vw] h-[80vw] rounded-full bg-primary/5 blur-[120px]" />
      </motion.div>

      {/* Main Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-4 w-full">
        <BlurText
          text="building fast modern systems"
          delay={100}
          animateBy="words"
          direction="bottom"
          className="text-3xl md:text-6xl font-black tracking-tighter leading-none text-foreground uppercase max-w-[90vw] md:max-w-4xl mx-auto"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/50 mt-8 md:mt-16 max-w-lg mx-auto leading-relaxed"
        >
          "He is terribly afraid of dying because he hasn’t yet lived." — Franz Kafka
        </motion.p>
        <BlurText
          text="with ai workflow"
          delay={150}
          animateBy="words"
          direction="bottom"
          className="text-xl md:text-4xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/30 italic mt-4 max-w-2xl mx-auto"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-4"
        >
           <InteractiveHoverButton onClick={() => router.push('/about')}>
             Learn About Me
           </InteractiveHoverButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ParallaxContent = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[100px] md:pt-[200px] relative z-20 pointer-events-none">
      <ParallaxItem
        start={-100}
        end={400}
        className="ml-auto pr-8 w-1/4 md:w-1/5 opacity-30 md:opacity-20 translate-y-[-100px] md:translate-y-0"
      >
        <div className="aspect-square w-full bg-primary/10 rounded-full border border-primary/20 blur-2xl mix-blend-overlay [backface-visibility:hidden] transform-gpu" />
      </ParallaxItem>

      <ParallaxItem
        start={150}
        end={-300}
        className="mr-auto w-fit pl-4 translate-y-[200px] md:translate-y-0"
      >
        <div className="h-16 w-fit border-l border-primary/20 flex flex-col justify-center pl-4">
            <span className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground whitespace-nowrap">Vivin '26</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">Developer</span>
        </div>
      </ParallaxItem>
    </div>
  );
};

const ParallaxItem = ({ className, children, start, end }: { className: string, children: React.ReactNode, start: number, end: number }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  
  return (
    <motion.div
      className={cn(className, "will-change-transform")}
      ref={ref}
      style={{ y, scale, opacity }}
    >
      {children}
    </motion.div>
  );
};
