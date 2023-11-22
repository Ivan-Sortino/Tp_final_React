import { useState } from 'react'
import { TaskForm, TaskList } from './components'
import './App.css'

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
      <TaskForm nuevaTarea={nuevaTarea}/>
      <TaskList tareas={tareas} borrarTarea={borrarTarea}/>
    </>
  )
}

export default App
