import React, { Component } from 'react';
import { Link } from "react-router-dom";


//import ModalConsultarUsuario from './Modals/ModalConsultarUsuario.jsx';
//import ModalActualizarUsuario from './Modals/ModalActualizarUsuario';
// import ModalConsultarUsuario from '';

export default class Usuario extends Component {

    render() {
        
        const { id, nombre, ancho, altura } = this.props;
        console.log(id, nombre, ancho, altura);
        const ruta = `http://localhost:8080/ProjectileMotion/Eliminar?id=${id}`;
        

        return (
          <tr>
            <td>
              {nombre}
            </td>
            <td class="acciones">
                <Link to={{ 
                  pathname: '/laboratorio', 
                  ejercicio :{ 
                    id : id, 
                    nombre : nombre, 
                    ancho : ancho, 
                    altura : altura }}
                  }>Probar
                </Link>        
                
                <Link to={{ 
                  pathname: '/actualizar', 
                  aboutProps:{ 
                    id : id, 
                    nombre : nombre, 
                    ancho : ancho, 
                    altura : altura }}
                  }>Actualizar
                </Link>                     
                
                <Link 
                  to={{ 
                    pathname: '/consultar', 
                    aboutProps:{ 
                      id:id, 
                      nombre:nombre, 
                      ancho:ancho, 
                      altura:altura }}
                    }
                >
                Consultar</Link> 
                
                <a href={ruta}>Eliminar</a>
            </td>
          </tr>
    
        )
    }
}
