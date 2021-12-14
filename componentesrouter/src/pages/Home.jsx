import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabla from '../components/Tabla.jsx'; 
 
class Home extends React.Component {
  
  state = {
    ejercicios: []
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
      this.setState({ejercicios:data});            
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
            <Link className="btn btn-success mt-3" to="/upload">Añadir fondos</Link> 

          <Tabla ejercicios = { this.state.ejercicios } />
        </div>        
      </>
    );
  }
}
 
export default Home;

