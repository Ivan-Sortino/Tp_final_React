import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./TaskForm.css";

const TaskForm = ({ addTasks }) => {

    // estado que maneja la visibilidad del modal, comienza en false para que no sea visible
    const [openModal, setOpenModal] = useState(false);

    // accion para cerrar el modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // accion para abrir el modal
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    
    // manejador del evento submit de la tarea
    const handleSubmitTask = (e) => {
        e.preventDefault();

        const title = e.target.title.value //capturamos el titulo del input
        const description = e.target.description.value //capturamos la descripcion del input
        const task = { title, description, createAt: new Date().toDateString(), id: uuidv4() } //tarea
        addTasks(task); //agrega la tarea al estado global
        handleCloseModal(); // cierra el modal
    };

    return (
        <div>
            <button className='btnAddTask' onClick={handleOpenModal}>
                Nueva Tarea
                <i className="bi bi-plus-circle"></i>
            </button>
            {
                openModal
                &&
                <div className='modalBackground'>
                    <div className='modal'>
                        <div className='modalTop'>
                            <h2>Agregar nueva tarea</h2>
                            <button 
                                className='btnCloseModal'
                                onClick={handleCloseModal}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <form 
                            onSubmit={handleSubmitTask}
                            className='formWrapper'>
                            <div className='inputWrapper'>
                                <label htmlFor="title">Ingresa el titulo de su tarea:</label>
                                <input
                                    type="text"
                                    id='title'
                                    name='title'
                                    placeholder='ej: salir a correr 20 minutos'
                                    className='input' />
                            </div>
                            <div className='inputWrapper'>
                                <label htmlFor="description">Ingrese la descripcion para su tarea:</label>
                                <textarea 
                                    name="description" 
                                    id="description" 
                                    placeholder='descripcion / aclaracion' 
                                    className='textarea'
                                    >
                                </textarea>
                            </div>
                            <div className='btnWrapper'>
                                <button 
                                    onClick={handleCloseModal}
                                    className='btnCancel'>Cancelar</button>
                                <button 
                                    type='submit'
                                    className='btnSend'>Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            }

        </div>
    )
};

export default TaskForm;