import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'experience', 'education', 'awards', 'projects', 'skills']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          Vy Bui
        </div>
        <div className="nav-links">
          <button
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
          <button
            className={activeSection === 'education' ? 'active' : ''}
            onClick={() => scrollToSection('education')}
          >
            Education
          </button>
          <button
            className={activeSection === 'awards' ? 'active' : ''}
            onClick={() => scrollToSection('awards')}
          >
            Awards
          </button>
          <button
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
