import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      year: '2025',
      title: 'Software Engineering Researcher, Intern',
      organization: 'McGill University, Montreal',
      note: 'Renewal of contract to a Research Assistant position during the Fall semester',
      points: [
        'Recipient of the NSERC Undergraduate Student Research Award',
        'Lead developer using an existing large codebase, developing the RESTful backend of an LLM-integrated web-based tool using Python libraries such as Flask and HuggingFace',
        'Contribute to the writing of a scientific paper submitted to a top conference under the supervision of a PhD student and Prof. Jin Guo'
      ]
    },
    {
      year: '2024',
      title: 'Software Engineering Researcher, Intern',
      organization: 'McGill University, Montreal',
      note: 'Renewal of contract to a Research Assistant position during the Fall semester',
      points: [
        'Recipient of the Science Undergraduate Research Award',
        'Co-authored on a project on Human-Computer Interaction by performing qualitative analysis on data sourced from online platforms under the supervision of Prof. Jin Guo'
      ]
    },
    {
      year: '2023',
      title: 'Artificial Intelligence Researcher, Intern',
      organization: 'Concordia University, Montreal',
      points: [
        'Contributed to a project incorporating machine learning and data exploration algorithms with an application in building automation by autonomously developing skills in Python libraries Tensorflow, Scikit-learn and Keras under the supervision of Prof. Manar Amayri'
      ]
    },
    {
      year: '2022',
      title: 'Discrete Mathematics Researcher, Intern',
      organization: 'University of Montreal, Montreal',
      points: [
        'Recipient of the College-Level Research Internship Scholarship offered by FRQNT and Mitacs',
        'Contributed to a project on the Cops and Robbers problem under the supervision of Prof. Benjamin Seamone'
      ]
    }
  ]

  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-year">{exp.year}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-organization">{exp.organization}</p>
              {exp.note && <p className="timeline-note">{exp.note}</p>}
              <ul className="timeline-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
