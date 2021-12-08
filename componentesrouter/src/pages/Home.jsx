import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabla from '../components/Tabla.jsx';

 
class Home extends React.Component {
  
  state = {
    usuarios: []
  };

  constructor(props) {
    super(props);

    this.consumirAPI();
  }


  consumirAPI = () => {

    const url = `http://localhost:8080/ProjectileMotion/Consultar`
    fetch (url)
        .then( response => response.json() )
        .then( data => {
          
          this.setState({usuarios:data});            
        })   
  }

  render() {

    // let logueado = false;
    // if(!logueado){
    //   window.location.replace("/#/login");
    // }

    return (
      <>
        <div className="contenedor">
          <h2>Altas, bajas, consultas y cambios de ejercicios</h2>

            <Link className="btn btn-success mt-3" id="btnAdd" to="/crear">Crear</Link>

          <Tabla usuarios = { this.state.usuarios } />
        </div>        
      </>
    );
  }
}
 
export default Home;

