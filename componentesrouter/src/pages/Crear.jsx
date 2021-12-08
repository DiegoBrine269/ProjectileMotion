import React, { Component } from 'react'

export default class Crear extends Component {
    render() {
        return (
              <div className="formulario">  
                  <form method="POST" action="http://localhost:8080/ProjectileMotion/Insertar">
                      <div className="campo">
                          <label htmlFor="nombre">Nombre: </label>
                          <input type="text" name="nombre" id="nombre" />
                      </div>
  
                      <div className="campo">
                          <label htmlFor="ancho">Ancho: </label>
                          <input type="text" name="ancho" id="ancho" />
                      </div>
  
                      <div className="campo">
                          <label htmlFor="altura">Altura: </label>
                          <input type="text" name="altura" id="altura" />
                      </div>
  
                      
                      <div className="campo">
                          <button className="btn btn-success" type="submit">Guardar</button>
                      </div>
                      
                  </form>
              </div>

        )
    }
}

