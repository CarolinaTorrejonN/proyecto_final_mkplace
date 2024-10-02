//Punto de entrada de la aplicación
//index.js solo se usa para conectar React con el DOM del navegador.
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Asegúrate de que este archivo exista (puedes poner estilos globales aquí)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
