
const Project = ({ project, img }) => {

  return (
    <div className="card">
      <div className="card-front">
        <h3>{ project.title }</h3>
        <img src={img} alt="pic of app" />
      </div>
      <div className="card-back">
        <p>{ project.description }</p>
        <ul>
        { project.technologies.map((technology, idx) => (
          <li key={idx}>{technology}</li>
        ))}
        </ul>
        <p><a href={ project.siteLink } >Deployed App</a></p>
        <p><a href={ project.repoLink } >Git Hub repo</a></p>
      </div>     
    </div>
  )
}

export default Project