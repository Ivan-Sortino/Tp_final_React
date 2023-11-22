import React from 'react'

const TaskItem = ({tarea, borrarTarea}) => {
  return (
    <div>
      <h3>{tarea.title}</h3>
      <p>{tarea.description}</p>
      <span>{tarea.createAt}</span>
      <button onClick={() => borrarTarea(tarea.id)}>finalizar</button>
      <hr />
    </div>
  )
}

export default TaskItem