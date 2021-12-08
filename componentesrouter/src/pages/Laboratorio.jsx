import React, { Component } from 'react'

let canvas;
let ctx;

//Posiciones iniciales
let xo = 5;
let yo = 5;

//Posición en cada momento
let x;
let y;

//Parámetros
let vox = 40;
let voy = 70;

let angulo = 45;
let time = 0;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#ff2643";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    time = time + 0.01; 
    
    //Para que no se salga por el borde superior y por el borde dercho
    if(x <= canvas.width && y >= 0 && x >= 0  && y <= canvas.height){
        x = xo + vox * time; 
        y = canvas.height - (yo + voy * time - (9.81 * Math.pow(time, 2)/2));    
    }
    
    console.log(`Posición: (${x}, ${y}), tiempo = ${time}s`);
}


export default class Laboratorio extends Component {
    
    
    componentDidMount(){
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        //ctx.translate(0, canvas.height);
        x = xo; //sumar la variable de ancho
        y = canvas.height - yo; //sumar la variable de altura
        setInterval(draw, 10);
    }
    
    render() {
        //const { id, nombre, ancho, altura } = this.props.location.ejercicio;

        return (
            <div className="laboratorio">
                <h2>Prueba</h2>
                <canvas width="1000" height="500" id="canvas">
                    
                </canvas>
            </div>
        )
    }
}
