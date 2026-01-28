import './Awards.css'

const Awards = () => {
  const awards = [
    {
      year: '2025',
      title: 'Undergraduate Student Research Award',
      organization: 'Natural Sciences and Engineering Research Council of Canada (NSERC)'
    },
    {
      year: '2024',
      title: 'Science Undergraduate Research Award',
      organization: 'School of Computer Science, McGill University, Montreal'
    },
    {
      year: '2023',
      title: 'University Entrance Scholarship',
      organization: 'McGill University, Montreal'
    },
    {
      year: '2022',
      title: 'College-Level Research Internship Award',
      organization: 'Mitacs, Fonds de recherche du Québec – Nature et technologies (FRQNT)'
    }
  ]

  return (
    <section className="awards">
      <h2 className="section-title">Awards</h2>
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <div className="award-year">{award.year}</div>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-organization">{award.organization}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Awards
