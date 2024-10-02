//componente reutilizable de pie de página
// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importar Bootstrap si lo estás usando

function Footer() {
  const footerStyle = {
    position: 'fixed',  // Fija el footer en la parte inferior
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Musaikaplace by Rachid - Musaika</p>
      <p> Contacto </p>
      <p> Medios de pago</p>
    </footer>
  );
}

export default Footer;
