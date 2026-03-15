"use client";

import React from "react";
import { motion } from "framer-motion";
import { Spotify } from "@/components/spotify";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { TextScramble } from "@/components/ui/text-scramble";
import { BlurText } from "@/components/ui/blur-text";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-500 pt-32 px-8">
      <div className="max-w-7xl mx-auto w-full pb-40">
        
        {/* Header Section */}
        <section className="mb-32">
          <BlurText 
            text="About Me."
            delay={100}
            animateBy="letters"
            direction="bottom"
            className="text-5xl md:text-9xl font-bold tracking-tighter leading-none"
          />
        </section>

        {/* Section 1: Interests & Goal */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-32 md:mb-60">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-foreground text-sm font-bold uppercase tracking-[0.4em] px-4 py-1 border border-border rounded-full w-fit">
                01 / Lifestyle & Vision
              </h2>
              <div className="text-3xl md:text-5xl font-light leading-tight tracking-tight flex flex-wrap gap-x-[0.3em]">
                <TextScramble duration={2.0} speed={0.03} trigger={true} repeatDelay={10}>
                  Driven by rhythm,
                </TextScramble>
                <TextScramble duration={2.2} speed={0.03} trigger={true} repeatDelay={10} className="text-zinc-500 italic">
                  strategy,
                </TextScramble>
                <TextScramble duration={2.4} speed={0.03} trigger={true} repeatDelay={10}>
                  and exploration.
                </TextScramble>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Beyond the screen, I find balance in the strings of my <strong>guitar</strong>, the tactical intensity of <strong>football</strong>, and the perspective gained through <strong>traveling</strong>.
            </p>
            <div className="p-8 border-l-2 border-primary/20 bg-primary/5 rounded-r-3xl">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium italic">
                "To build something that outlives you is the ultimate privilege. I want to leave behind work that doesn't just take up space, but continues to make life a little easier for whoever finds it next."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/5] bg-secondary/20 rounded-[2rem] border border-border relative overflow-hidden group shadow-2xl"
          >
            <Image 
              src="/images/me_guitar.jpeg"
              alt="Vivin with guitar"
              fill
              priority
              style={{ objectPosition: '15% 15%', objectFit: 'cover' }}
              className="scale-[1.5] transition-transform duration-700 group-hover:scale-[1.6]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-3xl z-10" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-3xl z-10" />
          </motion.div>
        </section>

        {/* Section 2: Technical Mastery */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-32 md:mb-60">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/5] bg-secondary/20 rounded-[2rem] border border-border relative overflow-hidden group order-2 md:order-1 shadow-2xl"
          >
            <Image 
              src="/images/me_technical.jpeg"
              alt="Vivin Technical"
              fill
              style={{ objectFit: 'cover', objectPosition: '35% center' }}
              className="transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-3xl z-10" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-3xl z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-10 order-1 md:order-2"
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-foreground text-sm font-bold uppercase tracking-[0.4em] px-4 py-1 border border-border rounded-full w-fit">
                02 / Technical Mastery
              </h2>
              <div className="text-3xl md:text-5xl font-light leading-tight tracking-tight flex flex-wrap gap-x-[0.3em]">
                <TextScramble duration={2.0} speed={0.03} trigger={true} repeatDelay={10}>
                  Crafting the future with
                </TextScramble>
                <TextScramble duration={2.2} speed={0.03} trigger={true} repeatDelay={10} className="text-primary italic">
                  precision.
                </TextScramble>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              My technical focus lies at the intersection of high-performance <strong>systems engineering</strong> and <strong>autonomous AI</strong>. I build tools that act as extensions of human thought.
            </p>
            <div className="space-y-6">
              <p className="text-lg text-zinc-400 font-light">
                What I hope to achieve is a seamless integration where technology disappears into the background, leaving only pure, unhindered creativity and problem-solving.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "Node.js", "Python", "AWS", "Framer Motion", "Machine Learning", "Postgres"].map((skill) => (
                  <motion.span 
                    key={skill} 
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-1.5 text-[10px] font-mono border border-border rounded-full uppercase tracking-widest text-zinc-500 hover:text-foreground hover:border-foreground transition-colors cursor-default select-none active:bg-secondary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Gallery Peek */}
        <section className="mb-32 md:mb-60">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-16"
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-foreground text-sm font-bold uppercase tracking-[0.4em] px-4 py-1 border border-border rounded-full w-fit">
                03 / Gallery Peek
              </h2>
              <div className="text-3xl md:text-5xl font-light tracking-tight flex flex-wrap gap-x-[0.3em]">
                 <TextScramble duration={2.0} speed={0.03} trigger={true} repeatDelay={10}>
                  a peek through my gallery
                </TextScramble>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[700px] auto-rows-[200px] md:auto-rows-auto">
              <div className="col-span-2 row-span-2 bg-secondary/10 rounded-3xl border border-border group overflow-hidden relative shadow-xl">
                <Image 
                  src="/gallery/g1.jpg"
                  alt="Gallery 1"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                  className="transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="bg-secondary/10 rounded-3xl border border-border group overflow-hidden relative shadow-xl">
                <Image 
                  src="/gallery/g2.jpg"
                  alt="Gallery 2"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="bg-secondary/10 rounded-3xl border border-border group overflow-hidden relative shadow-xl">
                <Image 
                  src="/gallery/g3.jpg"
                  alt="Gallery 3"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="bg-secondary/10 rounded-3xl border border-border group overflow-hidden relative shadow-xl">
                <Image 
                  src="/gallery/g4.jpg"
                  alt="Gallery 4"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="bg-secondary/10 rounded-3xl border border-border group overflow-hidden relative shadow-xl">
                <Image 
                  src="/gallery/g5.jpg"
                  alt="Gallery 5"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 4: Current Listening */}
        <section className="flex flex-col items-center py-20 md:py-40 border-t border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-12 w-full max-w-4xl"
          >
            <div className="text-center space-y-4">
              <h2 className="text-foreground text-sm font-bold uppercase tracking-[0.5em]">
                04 / Soundscape
              </h2>
              <p className="text-3xl md:text-4xl font-light text-zinc-500 tracking-tight">
                What I am currently listening to
              </p>
            </div>
            
            <div className="w-full flex justify-center text-left">
              <Spotify />
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-20 group flex flex-col items-center gap-4 transition-all duration-300 bg-transparent border-none cursor-pointer"
            >
              <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground group-hover:text-primary transition-colors">
                Back to top
              </div>
              <div className="h-12 w-[1px] bg-border group-hover:bg-primary transition-colors" />
            </motion.button>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
