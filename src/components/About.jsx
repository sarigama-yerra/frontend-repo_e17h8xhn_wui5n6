export default function About() {
  return (
    <section id="about" className="bg-blue-50 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black">About Me</h2>
            <p className="mt-4 text-lg font-medium text-black/80">
              I'm a product-focused engineer crafting bold, playful interfaces with real-world impact.
              My work blends interaction design, performance, and accessibility to create experiences that feel alive.
            </p>
            <p className="mt-4 font-medium text-black/70">
              When I'm not shipping features, you'll find me sketching systems, exploring motion, or tinkering with 3D scenes.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_#000]">
              <h3 className="font-extrabold">Expertise</h3>
              <ul className="list-disc pl-5 mt-2 font-medium">
                <li>Front-end engineering (React, TypeScript)</li>
                <li>Design systems & accessibility</li>
                <li>3D & motion on the web (Spline, Framer Motion)</li>
              </ul>
            </div>
            <div className="bg-yellow-300 border-4 border-black p-4 shadow-[8px_8px_0_0_#000]">
              <h3 className="font-extrabold">Values</h3>
              <ul className="list-disc pl-5 mt-2 font-medium">
                <li>Clarity through boldness</li>
                <li>Playfulness with purpose</li>
                <li>Fast, accessible, inclusive experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
