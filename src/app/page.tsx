import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Spotify } from "@/components/spotify";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      {/* Hero Section */}
      <section className="w-full pt-20">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto px-4 leading-tight">
                I build fast, modern systems <br />
                <span className="text-zinc-500">and AI workflows.</span>
              </h1>
              <div className="mt-8">
                <InteractiveHoverButton>Let's Talk</InteractiveHoverButton>
              </div>
            </div>
          }
        >
          <Image
            src="/hero.png"
            alt="Hero Image"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Expertise Section */}
      <section id="services" className="w-full py-32 bg-zinc-950 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-zinc-700 text-sm font-mono mb-16 underline uppercase tracking-widest">
            01 / What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-800 pt-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Full-Stack Development</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Next.js, UI/UX, Web Dev. Building highly responsive and visually stunning web applications with the latest technologies.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Agents, Generative AI, RAG. Crafting intelligent workflows and autonomous agents that solve complex real-world problems.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Systems Engineering</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                DBMS, Custom Engines, Core Algorithms. Low-level optimization and architecture for high-performance computing environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="works" className="w-full py-32 bg-black px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-zinc-700 text-sm font-mono mb-16 underline uppercase tracking-widest text-right">
            02 / Selected Works
          </h2>
          <div className="flex flex-col gap-24 mt-12">
            <ProjectItem
              number="01"
              title="Consensus Engine"
              description="Multi-agent AI consensus system built on AWS."
            />
            <ProjectItem
              number="02"
              title="Mini-DB"
              description="A custom database engine with CRUD operations and ACID compliance."
            />
            <ProjectItem
              number="03"
              title="Repository Janitor"
              description="A DevTools agent that scans GitHub for tech debt and opens PRs."
            />
            <ProjectItem
              number="04"
              title="Medical Prescription OCR"
              description="Vision API and custom transformer model for digitizing handwritten notes."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full py-20 px-8 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-bold tracking-tighter">Get in touch.</h2>
            <div className="flex gap-6 text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4 text-right">
            <Spotify />
            <p className="text-zinc-600 text-xs">
              © {new Date().getFullYear()} Vivin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProjectItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="group relative flex items-center justify-between border-b border-zinc-900 pb-12 cursor-pointer">
      <div className="flex items-center gap-12">
        <span className="text-8xl font-black text-zinc-900 group-hover:text-zinc-800 transition-colors">
          {number}
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl md:text-5xl font-bold group-hover:translate-x-4 transition-transform duration-500">
            {title}
          </h3>
          <p className="text-zinc-500 text-lg max-w-md group-hover:translate-x-4 transition-transform duration-500 delay-75">
            {description}
          </p>
        </div>
      </div>
      <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <InteractiveHoverButton>View Case Study</InteractiveHoverButton>
      </div>
    </div>
  );
}
