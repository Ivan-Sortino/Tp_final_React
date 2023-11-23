import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = ({currentTasks, deleteTask}) => {
  return (
    // si el estado de las tareas no esta vacio se le agrega una clase al ul para que su display sea en grilla y el h2 que se renderiza si no hay tareas pueda abarcar todo su ancho
    <ul className={`taskListWrapper ${currentTasks!= 0 && 'gridTemplate'}`}>
      {
        currentTasks.length == 0
          ? <h2 className='taskListEmpty'>
            Aun no has ingresado tareas a tu lista :(
            </h2>
          : currentTasks.map(currentTask => (
            <TaskItem currentTask={currentTask} key={currentTask.id} deleteTask={deleteTask} />
          ))
      }
    </ul>
  )
};

export default TaskList;