import React, { Component } from 'react';

function Upload () {

  return (
    <div className="contenedor">  
    <h2>Añadir fondos de escenario</h2>
        <form className="formulario" method="post" action="http://localhost:8080/ProjectileMotion/UploadServlet" enctype="multipart/form-data">
            <div className="campo">
                <label htmlFor="fondo">Fondo del escenario:</label>
                <input type="file" name="file"/>
            </div>
            
            <div className="campo">
                <button className="btn btn-success" type="submit">Guardar</button>
            </div>

        </form>
    </div>  
  )
}


 
export default Upload;
