
const Header = ({ img }) => {
  return (
    <header>
        <img src={img} alt="a picture of me." id="portrait" />
        <h1>Jonathan Allen</h1>
        <h3 className="job-title">Full Stack Developer</h3>
        <h3 className="tagline">From IT help desk to Full Stack Software Engineer — growing, building, and having fun along the way.</h3>
    </header>
  )
}

export default Header