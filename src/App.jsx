import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contacts from './components/Contacts/Contacts'
import projects from './data.json'

function App() {



  return (
    <>
    <NavBar />
    <Header />
    <main>
      <About />
      {projects.map((project) => (
        <Project project={project} />
      ))}
      <Contacts />
    </main>

    </>
  )
}

export default App
