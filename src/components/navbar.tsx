"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Works", href: "/#works" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-6 bg-background/80 backdrop-blur-lg md:bg-transparent md:backdrop-blur-none">
        <div className="text-xl font-bold tracking-[0.2em] uppercase">
          <Link href="/" onClick={handleHomeClick}>Home</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <ThemeToggle />
          {navLinks.filter(l => l.name !== "Home").map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 z-[70] text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            className="fixed inset-0 z-[55] bg-background flex flex-col items-center justify-center gap-8 md:hidden p-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="w-full text-center"
              >
                <Link 
                  href={link.href} 
                  onClick={(e) => {
                    if (link.name === "Home") handleHomeClick(e as any);
                    setIsOpen(false);
                  }}
                  className="text-4xl font-black tracking-tighter hover:text-primary transition-colors block py-4 uppercase active:scale-95 touch-manipulation"
                >
                  <motion.span whileTap={{ scale: 0.9 }} className="block">
                    {link.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
