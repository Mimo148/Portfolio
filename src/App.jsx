import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Terminal from './components/Terminal'


function App() {
  return (
    <main className="bg-[#06080a] text-[#e8dfc8] font-serif">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Cursor />
      <Loader />
      <Navbar />
      <Terminal />
    </main>
  )
}

export default App