import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import  { Redirect } from 'react-router-dom';

let canvas;
let ctx;

//Distancia a la que se encuentra el objetivo
let objetivoX = 5;
let objetivoY = 5;

//Posición en cada momento
let x;
let y;

//Parámetros
let vox = 0;
let voy = 0;

let angulo = 0;
let time = 0;

let intervalo;


class Laboratorio extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    state = {
        vo: 0,
        angulo: 0,
        ejercicio: '',
        intentos: 10,
        deshabilitado: false,
        img : '/img/background.jpg',
        opts: ''
    };

    constructor(props) {
        super(props);

        //Referencias
        this.reglaVertical = React.createRef();
        this.canvas = React.createRef();
        this.botonPlay = React.createRef();
        this.selectImg = React.createRef();

        localStorage.getItem('id');
        
        localStorage.getItem('fondo');
        localStorage.getItem('objetivo');

        //this.llenarLista = this.llenarLista.bind(this);
        this.iniciarAnimacion = this.iniciarAnimacion.bind(this);
        this.draw = this.draw.bind(this);
        this.drawBall = this.drawBall.bind(this);
        this.cambiarFondo = this.cambiarFondo.bind(this);

    }

    drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI*2);
        ctx.fillStyle = "#ff2643";
        ctx.fill();
        ctx.closePath();
    }
    
    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawBall();
        
        time = time + 0.01; 
        
        //Para que no se salga por el borde superior y por el borde dercho
        if(x <= canvas.width /*&& y >= 0*/ && x >= 0  && y <= canvas.height){
            x = vox * time; 
            y = canvas.height - (voy * time - (9.81 * Math.pow(time, 2)/2));    
        }
        else{
            clearInterval(intervalo);
            
            //Desloqueamos el botón
            this.setState({ deshabilitado: false })

            //Reducimos el número de intentos
            this.setState({intentos: this.state.intentos-1 })
        }

        const xRedondeado = Math.trunc(x);
        const yRedondeado = Math.trunc(y);


        //La pelota llegó al objetivo, y cayó al suelo (no salió del canvas)
        if(xRedondeado == localStorage.getItem('distanciaX') && yRedondeado === canvas.height ){
            Swal.fire(
                'Felicidades',
                `La pelota llegó a su objetivo. Puntos obtenidos:${this.state.intentos}`,
                'success'
            )

            this.props.history.push('/home');
            return;
        }
        
        //Límite de intentos superados
        if(this.state.intentos <= 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Límite de intentos superados, adiós`
            })
            this.props.history.push('/home');
            return;
        }

        //La pelota no llegó al objetivo
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Vuelve a intentarlo, la pelota llegó a ${xRedondeado}m`
        })
        
        
        //console.log(`Posición: (${x}, ${y}), tiempo = ${time}s`);
    }
    
    //Métodos para actualizar el valor de los estados
    updateVO(evt) {
          this.setState({
            vo: evt.target.value
        })
    }
    
    updateAngulo(evt) {
        this.setState({
            angulo: evt.target.value
        })
    }
    
    iniciarAnimacion(e) {

        e.preventDefault();

        console.log(this.state.files);

        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        //ctx.translate(0, canvas.height);
        x = 0; 
        y = canvas.height;

        //Reiniciamos el tiempo
        time = 0;
        
        clearInterval(intervalo);
        
        if(this.state.vo === 0 || this.state.angulo <= 0 || this.state.angulo > 90){
            alert('Ingrese valores válidos');
            return;
        }

        //Bloqueamos el botón momentáneamente
        this.setState({ deshabilitado: true })
        
        vox = parseFloat(this.state.vo) * Math.cos(this.state.angulo * Math.PI / 180); //convertimos a radianes
        voy = parseFloat(this.state.vo) * Math.sin(this.state.angulo * Math.PI / 180); //convertimos a radianes 
        //console.log(vox, voy);

        intervalo = setInterval(this.draw, 10);
    }

    componentDidMount() {
        const url = `http://localhost:8080/ProjectileMotion/ConsultarArchivos`
        fetch (url)
            .then( response => response.json() )
            .then( data => {
                //this.setState({ files: data.files })
                let arrTen = [];

                for(let i = 0; i<data.files.length; i++){
                    arrTen.push(<option key={i} value={data.files[i]}> {data.files[i]} </option>);
                }

                this.setState({
                    opts: arrTen
                });
            })  

    }

    componentWillUnmount(){
        //this.serverRequest.abort();
    }

    cambiarFondo(e){
        console.log(e.target);
        this.setState({
            img: e.target.value
        });
    }

    render() {
        return (
            <div className="laboratorio">
                <h2> {localStorage.getItem('nombre')} </h2>
                <p>Calcula la velocidad inicial y el ángulo de inclinación con la que se debe patear la pelota roja para llegar al objetivo que se encuentra a <span className='bold'>{localStorage.getItem('distanciaX')}m</span> de distancia </p>
                <p>Intentos pemitidos: <span className='bold'>{this.state.intentos}</span></p>
                <div className="campo">
                    <p className='bold'>Fondo del escenario: </p> 
                    <select name="selectImg" id="selectImg" ref={this.selectImg} onChange={ (e) => this.cambiarFondo(e) }>
                        <option value="-" selected disabled>Seleccione un fondo</option>
                        {this.state.opts}
                    </select>
                </div>

                <div className="layout">
                    <div ref={this.reglaVertical} className="regla-vertical">
                    </div>
                    <canvas width="500" height="250" id="canvas" ref={this.canvas} style={{backgroundImage: `url(${this.state.img})`}}>
                    </canvas>
                    <div className="regla-horizontal"></div>
                </div>

                <form class="formulario controles">
                    <div className="campo">
                        <label htmlFor="vo"> Velocidad inicial: </label>
                        <input type="number" name="vo" id="vo"  value={this.state.vo} onChange={evt => this.updateVO(evt)}/>
                    </div>

                    <div className="campo">
                        <label htmlFor="vo"> Ángulo de inclinación: </label>
                        <input type="number" name="angulo" id="angulo" value={this.state.angulo} onChange={evt => this.updateAngulo(evt)} />
                    </div>

                    <button disabled={this.state.deshabilitado} className="btn btn-success" type="submit" onClick={evt => this.iniciarAnimacion(evt)}>Play</button>
                </form>
            </div>
        )
    }

    llenarRegla() {
        
        //Regla vertical
        const reglaVertical = this.reglaVertical.current;

        const altura = this.canvas.current.height;
        const numero = Math.trunc(altura / 50);

        console.log(numero, reglaVertical.innerHTML);

        let nodeList = [];

        for(let i = 1; i<=numero; i++){
            const span = React.createElement('span', {className: 'regla-cuadro'}, i*50);
            nodeList.push(span);
        }

        console.log(nodeList);

        reglaVertical.innerHTML = nodeList;
    }
}

export default withRouter(Laboratorio);