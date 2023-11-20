import React from 'react'
import './List.css';


const List = () => {
  return (
    <section>
        <div className='container'>
           <h1>Lista React</h1>
           <div className='search'>
            {/* Al form la tenes que dar un onSubmit={handleAddTask o el nombre que vos quieras} */}

              <form>
                {/*Al value se le pasa esa funcion que tenes que declarar antes fuera del return*/}
                {/*El onChange actualiza el estado del inputText que de por si deberia ser ('')*/}    
                <input 
                type="text" 
                placeholder='Agregar una nueva tarea...'
                value={inputText} 
                onChange={() => setInputText(e.target.value)}
                />
                <button className='btn-add' type='submit'>+</button>
              </form>  
           </div>
           <div className='li-container'>
            {/* Mapea sobre la lista de tareas y crea elementos <li> para cada tarea */}
            <ul>
              {tasks.map((tasks, index) => (
                <li key={index}>
                <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</p>

                {/* Botón para eliminar la tarea dada */}
                <button className="btn-checkbox" onClick={() => handleToggleComplete(index)}>
                  {task.completed ? '✘' : '✓'}
                </button>
                
                <button className="btn-delete" onClick={() => handleDeleteTask(index)}>X</button>
                {/* Botón tipo checkbox para cambiar el estado de completado de la tarea */}
              </li>
              ))}
            </ul>
           </div>
           <div className='empty' style={{display: tasks.length === 0 ? 'block':'none'}}>
               <p>No tenes tareas pendientes</p>
           </div>
        </div>
    </section>
  )
}

export default List