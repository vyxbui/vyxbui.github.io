import './Skills.css'

const Skills = () => {
  const languages = ['French', 'English', 'Vietnamese']
  const software = [
    'Linux', 'Unix', 'Bash', 'Git', 'JUnit', 'Python', 
    'Java', 'C', 'C++', 'HTML/CSS', 'JavaScript', 'React.js',
    'Node.js',
  ]

  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3 className="skill-category-title">Languages</h3>
          <div className="skill-items">
            {languages.map((lang, index) => (
              <div key={index} className="skill-item">
                {lang}
              </div>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3 className="skill-category-title">Software & Technologies</h3>
          <div className="skill-items">
            {software.map((tech, index) => (
              <div key={index} className="skill-item skill-item-tech">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
