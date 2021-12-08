import React, { Component } from 'react'
import {useLocation} from 'react-router-dom'

function Actualizar () {
    
    const location = useLocation()

    let { id, nombre, ancho, altura } = location.aboutProps;
    
    state = {
        campoUno: nombre,
        campoDos: ancho,
        campoTres: altura
        
      };

    actualizarCampoUno = (e, { value }) => {
        this.setState({ 
          campoUno: value
        });  
      };
      
      actualizarCampoDos = (e, { value }) => {
          this.setState({
            campoDos: value
          });
      };
      
      actualizarCampoTres = (e, { value }) => {
          this.setState({
            campoTres: value
          });
      };

    return (
        <form className="formulario" method="GET" action="http://localhost:8080/ProjectileMotion/Actualizar">
            <div className="campo">
                <label>ID</label>
                <input type="text" name="id" value={id}/>
            </div>
            <div className="campo">
                <label>Nombre</label>
                <input type="text" name="nombre" value={nombre} onChange={actualizarCampoUno}/>
            </div>
            <div className="campo">
                <label>Ancho</label>
                <input type="text" name="ancho" value={ancho} onChange={actualizarCampoDos}/>
            </div>
            <div className="campo">
                <label>Altura</label>
                <input type="text" name="altura" value={altura} onChange={actualizarCampoTres}/>
            </div>
            <button className="btn btn-success" type="submit">Actualizar</button>
        </form>
    )
    
}


export default Actualizar;