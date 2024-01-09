import { useState } from 'react'
import NewProject from './components/NewProject.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx'
import SideBar from './components/SideBar.jsx'

function App() {
  
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined, //initial
    projects: [], //we'll add projects
  })

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState, //spreading the old state
        selectedProject: null, //null means adding new project
      }
    })
  }

  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject />
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  )
}

export default App
