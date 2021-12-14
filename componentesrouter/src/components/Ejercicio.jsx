import React, { Component } from 'react';
import { Link } from "react-router-dom";


//import ModalConsultarUsuario from './Modals/ModalConsultarUsuario.jsx';
//import ModalActualizarUsuario from './Modals/ModalActualizarUsuario';
// import ModalConsultarUsuario from '';

export default class Usuario extends Component {

    render() {
        
        const { id, nombre, distanciaX, fondo, objetivo } = this.props;
        //console.log(id, nombre, distanciaX, fondo, objetivo);
        const ruta = `http://localhost:8080/ProjectileMotion/Eliminar?id=${id}`;
        

        return (
          <tr>
            <td>
              {nombre}
            </td>
            <td class="acciones">
                <Link 
                  to="/laboratorio"
                  onClick={() => {
                    localStorage.setItem('id', id);
                    localStorage.setItem('nombre', nombre);
                    localStorage.setItem('distanciaX', distanciaX);
                    localStorage.setItem('fondo', fondo);
                    localStorage.setItem('objetivo', objetivo);
                  }}
                >
                    Probar
                </Link>        
                
                <Link to={{ 
                        pathname: '/actualizar', 
                        aboutProps :{ 
                          id : id, 
                          nombre : nombre, 
                          distanciaX: distanciaX, 
                          fondo : fondo, 
                          objetivo : objetivo
                      }}
                  }>Actualizar
                </Link>                     
                
                <Link 
                  to={{ 
                    pathname: '/consultar', 
                    aboutProps :{ 
                      id : id, 
                      nombre : nombre, 
                      distanciaX: distanciaX, 
                      fondo : fondo, 
                      objetivo : objetivo
                    }}
                  }
                >
                Consultar</Link> 
                
                <a href={ruta}>Eliminar</a>
            </td>
          </tr>
    
        )
    }
}
