
const Header = ({ img }) => {
  return (
    <header>
        <img src={img} alt="a picture of me." />
        <div className="header-content">
          <h1>Jonathan Allen</h1>
          <h3>From IT help desk to Full Stack Software Engineer — growing, building, and having fun along the way.</h3>
        </div>

    </header>
  )
}

export default Header