import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t-4 border-black bg-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <p className="font-bold">© {new Date().getFullYear()} Neo Portfolio</p>
          <a href="#home" className="px-3 py-2 bg-white border-4 border-black shadow-[6px_6px_0_0_#000] font-extrabold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-transform">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App