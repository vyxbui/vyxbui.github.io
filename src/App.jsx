import { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Awards from './components/Awards'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const sectionsRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="app">
      <Navigation />
      <div id="hero" ref={addToRefs} className="section hero-section">
        <Hero />
      </div>
      <div className="content">
        <div id="experience" ref={addToRefs} className="section">
          <Experience />
        </div>
        <div id="education" ref={addToRefs} className="section">
          <Education />
        </div>
        <div id="awards" ref={addToRefs} className="section">
          <Awards />
        </div>
        <div id="projects" ref={addToRefs} className="section">
          <Projects />
        </div>
        <div id="skills" ref={addToRefs} className="section">
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default App
