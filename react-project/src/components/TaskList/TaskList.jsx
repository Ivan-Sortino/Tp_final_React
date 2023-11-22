import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ tareas, borrarTarea }) => {
  return (
    <div>
      {
        tareas.length == 0
          ? <h2>Aun no has ingresado tareas</h2>
          : tareas.map(tarea => (
            <TaskItem tarea={tarea} key={tarea.id} borrarTarea={borrarTarea} />
          ))
      }
    </div>
  )
}

export default TaskList