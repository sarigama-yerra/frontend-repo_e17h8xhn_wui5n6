import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-xl sm:text-2xl text-black">
            <span className="px-2 py-1 bg-yellow-300 border-4 border-black shadow-[6px_6px_0_0_#000]">Neo</span>
            <span className="ml-2">Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-3 py-2 bg-green-300 border-4 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-transform"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Say hi</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white border-4 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-transform"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white border-4 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
