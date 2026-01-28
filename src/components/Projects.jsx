import './Projects.css'

const Projects = () => {
  const technologies = [
    'NumPy', 'Torch', 'Git', 'Docker', 'Kubernetes', 'FastAPI', 
    'MongoDB', 'GitLab Runner', 'Kafka', 'PyTest', 'Scikit-Learn', 'Bash scripting'
  ]

  return (
    <section className="projects">
      <h2 className="section-title">Software Projects</h2>
      <div className="project-card">
        <div className="project-header">
          <h3 className="project-title">Movie Recommender System</h3>
        </div>
        <div className="project-description">
          <p>Developed in a team of 4 developers on an intelligent system providing movie recommendations across to 1 million simulated users with live interaction data from a Kafka stream for COMP 585: Intelligent Software Systems.</p>
        </div>
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            <li>Built and integrated a two-model neural network approach to recommend movies and predict user ratings</li>
            <li>Automated data collection, preprocessing, ensuring data quality, model retraining, evaluation and deployment pipeline through Python scripts, Docker containers, RESTful APIs and Kubernetes to detect and combat data drift</li>
            <li>Developed RESTful APIs to communicate internally and externally, and to deploy newly trained models via a canary release strategy</li>
            <li>Implemented industry-level Git and DevOps workflow and techniques, such as commit message and branch-naming conventions, code review, merge requests, documentation and CI/CD pipelines</li>
            <li>Implemented external database to store user interactions and facilitate batch retraining using MongoDB</li>
          </ul>
        </div>
        <div className="project-technologies">
          <h4>Tech Stack:</h4>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
