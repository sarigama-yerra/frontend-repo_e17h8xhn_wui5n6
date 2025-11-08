import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Interactive 3D Landing",
    description: "A tech-forward homepage integrating a Spline scene with buttery interactions.",
    tags: ["React", "Spline", "Tailwind"],
    link: "#",
    color: "bg-yellow-300",
  },
  {
    title: "Realtime Dashboard",
    description: "Neobrutalist analytics with bold typography and crisp motion.",
    tags: ["FastAPI", "WebSockets", "Charts"],
    link: "#",
    color: "bg-green-300",
  },
  {
    title: "Design System",
    description: "A reusable component kit embracing playful modern brutalist shapes.",
    tags: ["UI", "Tokens", "Storybook"],
    link: "#",
    color: "bg-pink-300",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-black">Selected Projects</h2>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-white border-4 border-black shadow-[6px_6px_0_0_#000] font-extrabold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-transform">
            <Code2 className="w-4 h-4" />
            View Code
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className={`group ${p.color} border-4 border-black p-6 shadow-[8px_8px_0_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_#000] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-transform`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-black max-w-[12ch] leading-tight">{p.title}</h3>
                <ExternalLink className="w-4 h-4" />
              </div>
              <p className="mt-3 font-medium text-black/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-white border-2 border-black text-xs font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
