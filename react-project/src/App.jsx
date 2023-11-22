import { useState } from 'react'
import { TaskForm, TaskList,  } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import chicos from './chicos';
import ChicosView from './view/ChicosView';




function App() {

  // estado global de las tareas
  const [tareas, setTareas] = useState([])
  
  // funcion que agrega las tareas al estado tarea
  const nuevaTarea = (tarea) =>{
    setTareas([...tareas, tarea])
  }
  
  // funcion que elimina las tareas al estado tarea
  const borrarTarea = (tareaId) =>{
    setTareas(tareas.filter(tarea => tarea.id != tareaId)) 
  }

  return (
    <>
      <Router>
      <div>
        <Sidebar />
        <Routes>
          {chicos.map((chico, index) => (
            <Route
              key={index}
              path={`/${chico.name}`}
              element={<ChicosView chico={chico} />}
            />
            ))}
            <Route
              path="/" // Esta ruta se activará en la página principal
              element={
                <>
                  <TaskForm nuevaTarea={nuevaTarea} />
                  <TaskList tareas={tareas} borrarTarea={borrarTarea} />
                </>
              }
            />
          </Routes>
      </div>
    </Router>    
    </>
    
  )
}

export default App
