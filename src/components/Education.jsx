import './Education.css'

const Education = () => {
  return (
    <section className="education">
      <h2 className="section-title">Education</h2>
      <div id="MSc" className="education-card">
        <div className="education-header">
          <h3 className="education-degree">Master of Science in Computer Science</h3>
          <div className="education-period">September 2026 - 2028</div>
        </div>
        <p className="education-institution">McGill University, Montreal <br></br>Supervised by Prof. Jin Guo</p>
      </div>

      <div id="Bsc" className="education-card">
        <div className="education-header">
          <h3 className="education-degree">Bachelor of Science in Honours Computer Science</h3>
          <div className="education-period">2023 – April 2026</div>
        </div>
        <p className="education-institution">McGill University, Montreal</p>
        <div className="education-courses">
          <h4>Relevant Courses:</h4>
          <ul>
            <li>Information Privacy (Graduate Level)</li>
            <li>Applied Machine Learning (Graduate Level)</li>
            <li>Intelligent Software Systems (Graduate Level)</li>
            <li>Honours Research Project in Computer Science</li>
            <li>Software Design</li>
            <li>Honours Data Structures and Algorithms</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education
