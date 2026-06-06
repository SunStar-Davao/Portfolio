import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div className="noise" />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer>
        <div className="footer-copy">
          © 2025 <span>Marc Angel Villarosa</span> — Built with Vite + React
        </div>
        <a href="#hero" className="footer-back">↑ Back to top</a>
      </footer>
    </>
  )
}
