import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Switch, Route, HashRouter, Redirect} from "react-router-dom";
import Home from './pages/Home.jsx';
import Consultar from './pages/Consultar.jsx';
import Crear from './pages/Crear.jsx';
import Actualizar from './pages/Actualizar.jsx';
import Login from './pages/Login.jsx';
import Laboratorio from './pages/Laboratorio.jsx';
 
class Aplicacion extends React.Component {

  /*state = {
    loggedIn : false
  }

  constructor(props){
    super(props);
    if (window.performance) {
      if (performance.navigation.type == 1) {

        
      } 
    }
  }

  componentWillMount() {

    if(localStorage.getItem('loggedIn'))
      this.setState({loggedIn : localStorage.getItem('loggedIn')});
    else
      this.setState({loggedIn : false});
    
    console.log(this.state.loggedIn);
  }*/

  render() {

    let loggedIn = true;

    return (
      <HashRouter>
          <Switch>
            <Route exact path="/consultar">
              {loggedIn ?  <Consultar /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/crear">
              {loggedIn ?  <Crear /> : <Redirect to="/login" />}
            </Route>
            
            <Route exact path="/actualizar">
              {loggedIn ?  <Actualizar /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/laboratorio">
              {loggedIn ?  <Laboratorio /> : <Redirect to="/login" /> }
            </Route>

            <Route exact path="/login">
              {loggedIn ?  <Redirect to="/home" /> : <Login />}
            </Route>
            
            <Route exact path="/home">
              {loggedIn ?  <Home /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/">
              {loggedIn ?  <Home /> : <Redirect to="/login" /> }
            </Route>

            
          </Switch>
      </HashRouter>

    );
  }
 
}




 
export default Aplicacion;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Aplicacion />, wrapper) : false;