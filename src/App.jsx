import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contacts from './components/Contacts/Contacts'
import projects from './data.json'
import watchlistPic from './assets/game_watchlist.png'
import murphyPic from './assets/murphy_near_me.png'
import musicPic from './assets/music_share.png'
import pokePic from './assets/poke_stat_wordle.png'
import portrait from './assets/portrait.jpg'

function App() {

  const pictures = [pokePic, musicPic, murphyPic, watchlistPic]

  return (
    <>
    <NavBar />
    <Header img={portrait} />
    <main>
      <About />
      <section id='projects'>
        <h2>Projects</h2>
      {projects.map((project, idx) => (
        <Project project={project} img={pictures[idx]} />
      ))}
      <Contacts />
      </section>

    </main>

    </>
  )
}

export default App
