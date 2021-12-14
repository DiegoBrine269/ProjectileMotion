import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';


function Consultar () {
  const location = useLocation();
  const { id, nombre, distanciaX, fondo, objetivo } = location.aboutProps;

  return (
    <table className="tabla-datos-usuario table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Distancia del objetivo</th>
          <th>Fondo</th>
          <th>Objetivo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{nombre}</td>
          <td>{distanciaX}</td>
          <td>{fondo}</td>
          <td>{objetivo}</td>
        </tr>
      </tbody>
    </table>
  )
}


 
export default Consultar;
