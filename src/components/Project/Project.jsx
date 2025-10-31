
const Project = ({ project, img }) => {

  return (
    <div className="card">
      <img src={img} alt="picture of the app" />
      <div className="project-content">
        <h3 className="title">{ project.title }</h3>
        <p>{ project.description }</p>
        <p><b>Technologies</b></p>
        <ul>
        { project.technologies.map((technology, idx) => (
          <li key={idx}>{technology}</li>
        ))}
        </ul>
        <div className="project-links">
          <p><a href={ project.siteLink } >Deployed App →</a></p>
          <p><a href={ project.repoLink } >Git Hub Repo →</a></p>
        </div>
      </div>
    </div>
  )
}

export default Project