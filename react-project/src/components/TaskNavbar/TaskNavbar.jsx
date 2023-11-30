import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './TaskNavbar.css';
import { TaskForm } from '../index';

const TaskNavbar = ({ addTasks, searchString, handleChangeFilter, handleModeDark, modeDark }) => {

    return (
        <header className={`navbar ${modeDark && 'navBarModeDark'}`}>
            <div className='logoWrapper'>
                <img src={logo} className='logo' alt="logo-type" />
                <span className='logoText'>To do List</span>
            </div>
            <div className='taskManagerWrapper'>
                <input
                    type="text"
                    placeholder='buscar tarea...'
                    value={searchString}
                    onChange={handleChangeFilter}
                    className={`inputTaskSearch ${modeDark && 'inputTaskSearhModeDark'}`} />
                <TaskForm addTasks={addTasks} modeDark={modeDark} />
                <button
                    className={`btnHandleMode ${modeDark && 'btnHandleModeDK'}`}
                    onClick={handleModeDark}>
                    {
                        modeDark
                            ?
                            <i class="bi bi-moon-stars-fill"></i>
                            :
                            <i class="bi bi-brightness-high-fill"></i>
                    }
                </button>
            </div>
        </header>
    )
};

export default TaskNavbar;