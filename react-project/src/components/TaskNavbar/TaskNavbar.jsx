import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './TaskNavbar.css';
import { TaskForm } from '../index';

const TaskNavbar = ({ addTasks, searchString, handleChangeFilter }) => {

    // estado que maneja el estado del sidebar mobile
    const [sidebarActive, setSidebarActive] = useState(false);

    // accion que se encarga de abrir el sidebar
    const handleSidebarOpen = () => {
        setSidebarActive(true);
    };

    // accion que se encarga de cerrar el sidebar
    const handleSidebarClose = () => {
        setSidebarActive(false);
    };

    return (
        <header className='navbar'>
            <div className='logoWrapper'>
                <img src={logo} className='logo' alt="logo-type" />
                <span className='logoText'>To do List</span>
            </div>
            <div className='taskManagerDesktop'>
                <div className='taskManagerWrapper'>
                    <input
                        type="text"
                        placeholder='Escriba el nombre de su tarea para buscar...'
                        value={searchString}
                        onChange={handleChangeFilter}
                        className='inputTaskSeach' />
                    <TaskForm addTasks={addTasks} />
                </div>
            </div>
            <div className='taskMobile'>
                <TaskForm addTasks={addTasks} />
                <button
                    onClick={handleSidebarOpen}
                    className='btnBarsDesktop'>
                    <i className="bi bi-list barsDesktop"></i>
                </button>
            </div>
            {
                sidebarActive &&
                <div className='taskManagerMobile'>
                    <button
                        onClick={handleSidebarClose}
                        className='btnCloseSidebarMobile'>
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <div className='taskManagerWrapper'>
                        <input
                            type="text"
                            placeholder='Escriba el nombre de su tarea para buscar...'
                            value={searchString}
                            onChange={handleChangeFilter}
                            className='inputTaskSeach' />
                    </div>
                </div>
            }
        </header>
    )
};

export default TaskNavbar;