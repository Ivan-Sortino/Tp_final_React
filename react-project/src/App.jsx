import { useState, useEffect } from 'react';
import { TaskNavbar, TaskList } from './components';
import './App.css';

const modeDarkLS = JSON.parse(localStorage.getItem('isDark')) || false;

function App() {

  // estado global de las tareas
  const [tasks, setTasks] = useState([]);
  const [currentTasks, setCurrentTasks] = useState([]);
  const [searchString, setSearhString] = useState('');
  const [modeDark, setModeDark] = useState(modeDarkLS);

  // funcion que agrega las tareas al estado tarea, y hacemos un spread(...) del array de tareas y le agregamos la tarea que traemos como parametro
  const addTasks = (task) =>{
    setTasks([...tasks, task]);
  };
  
  // funcion que elimina las tareas al estado tarea, con el filter, lo que hacemos es retornar todas las tareas.id que sean diferentes al id que pasamos como parametro
  const deleteTask = (tareaId) =>{
    setTasks(tasks.filter(tarea => tarea.id != tareaId)) 
  };

  // manejador del input de los filtros de las tareas
  const handleChangeFilter = (e) => {
    setSearhString(e.target.value);
  };

  // efecto que recarga el componente cada vez que cambie el estado que contiene el valor del input par buscar, o cuando se agregue una tarea al estado original
  useEffect(() => {
    // retorna la tarea que incluya el valor del estado searchString, que es lo que el usuario escribe en el buscador
    setCurrentTasks(tasks.filter((task) => task.title.toLowerCase().includes(searchString.toLowerCase())));
  }, [searchString, tasks]);

  // efecto que maneja el estado del modo escuro
  const handleModeDark = () => {
    setModeDark(!modeDark);
  }
  
  // useEffect que maneja el seteo del localStorage
  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(modeDark));
  }, [modeDark]);
  

  return (
    <section className={`app ${modeDark && 'appModeDark'}`}>
      <TaskNavbar 
        addTasks={addTasks} 
        searchString={searchString} 
        handleChangeFilter={handleChangeFilter} 
        handleModeDark={handleModeDark}
        modeDark={modeDark}
      />
      <TaskList currentTasks={currentTasks} deleteTask={deleteTask}/>
    </section>
  )
};

export default App;