import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] grid place-items-center bg-white border-b-4 border-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-pink-300 border-4 border-black shadow-[6px_6px_0_0_#000] text-xs sm:text-sm font-black uppercase tracking-wider mb-4">Neobrutalism</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-black">
            Building playful, modern, tech-first experiences.
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-medium text-black/70 max-w-xl">
            I design and ship interactive products that feel alive. Explore my projects and get in touch.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 bg-yellow-300 border-4 border-black shadow-[6px_6px_0_0_#000] font-extrabold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-transform">
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 bg-white border-4 border-black shadow-[6px_6px_0_0_#000] font-extrabold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-transform">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
