import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';


function Consultar () {
  const location = useLocation()
 
  const { id, nombre, ancho, altura } = location.aboutProps

  return (
    <table className="tabla-datos-usuario table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Longitud</th>
          <th>Altura</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{nombre}</td>
          <td>{ancho}</td>
          <td>{altura}</td>
        </tr>
      </tbody>
    </table>
  )
}


 
export default Consultar;
