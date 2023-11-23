import React, { useState } from 'react';
import './Sidebar.css';  // Asegúrate de tener un archivo de estilo para la barra lateral
import chicos from '../../chicos';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = {
    textDecoration: 'none', // Elimina el subrayado predeterminado
    color: 'white',         // Color del texto
    // Agrega más estilos según sea necesario
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <ul>
      {chicos.map((chico, index) => (
          <li key={index}>
          <Link to={`/${chico.name}`} style={linkStyle}>{chico.name}</Link>

            </li>
         
        ))}
        {/* Agrega más elementos según sea necesario */}
      </ul>
    </div>
  );
};

export default Sidebar;
