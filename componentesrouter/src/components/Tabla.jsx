import React, { Component } from 'react'
import Ejercicio from './Ejercicio.jsx';

export default class Tabla extends Component {
    
    llenarTabla = () => {
        const usuarios = this.props.usuarios;

      
        
        return(
            <>
                {usuarios.map(usuario => (
                    <Ejercicio 
                        key = {usuario.id}
                        id = {usuario.id}
                        nombre = {usuario.nombre}
                        ancho = {usuario.ancho}
                        altura = {usuario.altura}
                    />
                ))}

            </>
        );
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre del diagrama</th>
                        <th>Acciones</th>
                    </tr>
                </thead>                
                <tbody>
                    { this.llenarTabla() }
                </tbody>
            </table>
        )
    }
}
