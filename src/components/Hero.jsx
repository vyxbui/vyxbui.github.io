import './Hero.css'
import { MdArrowDownward } from 'react-icons/md'
import headshot from 'src/assets/headshot.jpg'

const ScrollDownIcon = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <MdArrowDownward size={48} color="#000" />
    </div>
  );
}

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image-container">
          <div className="hero-image-placeholder">
            <img 
              src={headshot}
              alt="Headshot of me and my dog Sunny"
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero-image-fallback" style={{display: 'none'}}>
            </div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-name">Vy Bui</h1>
          <p className="hero-location">Montreal, QC</p>
          <div className="hero-contact">
            <a href="mailto:vy.bui@mail.mcgill.ca">vy.bui@mail.mcgill.ca</a>
            <span className="separator">|</span>
            <a href="https://www.linkedin.com/in/vybuii/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="hero-description">
            <h2>Software Engineering Researcher & Computer Science Student</h2>
            <p>Hi! Welcome to my website :) My name is Vy, and I am an undergraduate student in my final year in the Honours Computer Science program at McGill University.
            </p>
            <p>Passionate and curious about understanding and supporting how users interact with software and AI systems, I will be starting a Master of Science in Computer Science in September 2026 to further develop my research skills and pursue work at the intersection of HCI and software engineering!
            </p>
            <p>In my free time, I enjoy playing with my dog Sunny (pictured above), hiking, rock climbing, cycling, swimming, running, baking, writing music, and knitting (my newest hobby!)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
