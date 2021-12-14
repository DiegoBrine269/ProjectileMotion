import React, { Component } from 'react';

export default class Crear extends Component {
    render() {
        return (

            <div className="contenedor">  
                <h2>Crear un nuevo ejercicio</h2>
                {/*method="POST" action="http://localhost:8080/ProjectileMotion/Insertar"*/}
                <form className="formulario" method="post" action="http://localhost:8080/ProjectileMotion/UploadServlet" enctype="multipart/form-data">
                    <div className="campo">
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" name="nombre" id="nombre" />
                    </div>

                    <div className="campo">
                        <label htmlFor="distanciaX">Distancia del objetivo:</label>
                        <input type="text" name="distanciaX" id="distanciaX" />
                    </div>

                    <div className="campo">
                        <label htmlFor="fondo">Fondo:</label>
                        <input type="file" name="file"/>
                    </div>
                    
                    <div className="campo">
                        <button className="btn btn-success" type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        )
    }
}