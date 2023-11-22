import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./TaskForm.css"


const TaskForm = ({ nuevaTarea }) => {

    // estado que maneja la visibilidad del modal
    const [abrirModal, setAbrirModal] = useState(false)

    // accion para cerrar el modal
    const closeModal = () => {
        setAbrirModal(false)
    }

    // accion para abrir el modal
    const openModal = () => {
        setAbrirModal(true)
    }

    
    const handleSubmitTask = (e) => {
        e.preventDefault()
        const title = e.target.title.value //capturamos el titulo del input
        const description = e.target.description.value //capturamos la descripcion del input
        const task = { title, description, createAt: new Date().toDateString(), id: uuidv4() } //tarea
        nuevaTarea(task) //agrega la tarea al estado global
        closeModal() // cierra el modal
    }

    return (
        <div>
            <button onClick={openModal}>
                Nueva Tarea
            </button>
            {
                abrirModal
                &&
                <div className='modal-background'>
                    <div className='modal'>
                        <h2>Agregar nueva tarea</h2>
                        <form onSubmit={handleSubmitTask}>
                            <div className='input-container'>
                                <label htmlFor="title">Ingresa el titulo de su tarea</label>
                                <input
                                    type="text"
                                    id='title'
                                    name='title'
                                    placeholder='Ingrese' />
                            </div>
                            <div className='input-container'>
                                <label htmlFor="description">Ingrese la descripcion para su tarea</label>
                                <textarea name="description" id="description" placeholder='Alguna aclaracion/descripcion' ></textarea>
                            </div>
                            <div className='btn-container'>
                                <button onClick={closeModal}>Cancelar</button>
                                <button type='submit'>Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            }

        </div>
    )
}

export default TaskForm