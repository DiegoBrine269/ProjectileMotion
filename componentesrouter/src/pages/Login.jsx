import React, { Component } from 'react';


function iniciarSesion (e){
    e.preventDefault();
    alert("Iniciando sesión");

    const url = `http://localhost:8080/ProjectileMotion/Login`
    fetch (url)
        .then( response => response.json() )
        .then( data => {
            console.log(data);
        })   
};

export default class Login extends Component{
    render(){
        return(
            <div className="contenedor">
                <form className="formulario login" >
                    <div className="campo">
                        <label htmlFor="usuario">Usuario: </label>
                        <input type="text" name="nombre" id="usuario" />
                    </div>
            
                    <div className="campo">
                        <label htmlFor="pass">Contraseña: </label>
                        <input type="text" name="pass" id="pass" />
                    </div>

                    <div className="campo">
                        <button className="btn btn-success" type="submit" onClick={iniciarSesion}>Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        );
    }
}