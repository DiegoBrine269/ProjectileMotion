import React, { Component } from 'react'
import Ejercicio from './Ejercicio.jsx';

export default class Tabla extends Component {
    
    llenarTabla = () => {
        const ejercicios = this.props.ejercicios;

        return(
            <>
                {ejercicios.map(ejercicio => (
                    <Ejercicio 
                        key = {ejercicio.id}
                        id = {ejercicio.id}
                        nombre = {ejercicio.nombre}
                        distanciaX = {ejercicio.distanciaX}
                        fondo = {ejercicio.fondo}
                        objetivo = {ejercicio.objetivo}
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
