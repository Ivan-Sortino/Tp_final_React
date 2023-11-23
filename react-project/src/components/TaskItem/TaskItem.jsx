import React from 'react'
import './TaskItem.css';

const TaskItem = ({currentTask, deleteTask}) => {
  return (
    <li className='taskItemCard'>
      <h3>{currentTask.title}</h3>
      <p className='taskItemDesc'>{currentTask.description}</p>
      <div className='taskItemBottom'>
        <span className='taskItemDate'>{currentTask.createAt}</span>
        <button
          className='btnFinishTask' 
          onClick={() => deleteTask(currentTask.id)}
          >
          finalizar
        </button>
      </div>
    </li>
  )
};

export default TaskItem;