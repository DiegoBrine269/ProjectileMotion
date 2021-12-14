import React, { Component } from 'react'
import {useLocation} from 'react-router-dom'

function Actualizar () {
    const location = useLocation();
    const { id, nombre, distanciaX, fondo, objetivo } = location.aboutProps;
    
    state = {
        campoUno: nombre,
        campoDos: distanciaX,
        campoTres: fondo
        
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
                <label>Distancia del objetivo</label>
                <input type="text" name="distanciaX" value={distanciaX} onChange={actualizarCampoDos}/>
            </div>
            <div className="campo">
                <label>Fondo del escenario</label>
                <input type="text" name="fondo" value={fondo} onChange={actualizarCampoTres}/>
            </div>
            <div className="campo">
                <label>Imagen del objetivo</label>
                <input type="text" name="objetivo" value={objetivo} onChange={actualizarCampoTres}/>
            </div>
            <button className="btn btn-success" type="submit">Actualizar</button>
        </form>
    )
    
}


export default Actualizar;