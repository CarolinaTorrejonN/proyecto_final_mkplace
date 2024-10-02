// Página de detalle de una publicación
// src/pages/DetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams(); // Captura el parámetro de la URL
  
  return (
    <div>
      <h1>Detalle de la Publicación</h1>
      <p>Mostrando los detalles de la publicación con ID: {id}</p>
    </div>
  );
}

export default DetailPage;
