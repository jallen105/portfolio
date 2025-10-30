
const Project = ({ project, img }) => {

  return (
    <div className="card">
      <h3 className="title">{ project.title }</h3>
      <img src={img} alt="pic of app" />
      <p>{ project.description }</p>
      <p><b>Technologies</b></p>
      <ul>
      { project.technologies.map((technology, idx) => (
        <li key={idx}>{technology}</li>
      ))}
      </ul>
      <p><a href={ project.siteLink } >Deployed App</a></p>
      <p><a href={ project.repoLink } >Git Hub Repo</a></p>
    </div>
  )
}

export default Project