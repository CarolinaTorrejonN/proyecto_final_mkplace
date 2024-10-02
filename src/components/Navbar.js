//componente reutilizable de navegación
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
        <li><Link to="/registro">Registrarse</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
        <li><Link to="/perfil">Mi Perfil</Link></li> 
        <li><Link to="/crear-post">Crear Publicación</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
