import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent">
      <div className="text-xl font-bold tracking-tighter">
        <Link href="/">Vivin / Developer</Link>
      </div>
      <div className="flex gap-8 text-sm font-medium">
        <Link href="#services" className="hover:opacity-70 transition-opacity">
          Services
        </Link>
        <Link href="#works" className="hover:opacity-70 transition-opacity">
          Works
        </Link>
        <Link href="#contact" className="hover:opacity-70 transition-opacity">
          Contact
        </Link>
      </div>
    </nav>
  );
};
