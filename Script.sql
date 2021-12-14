DROP DATABASE ProjectileMotion;

/*Create*/
CREATE DATABASE ProjectileMotion;
USE ProjectileMotion;

CREATE TABLE DatosUsuario
(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	nombre VARCHAR(25) NOT NULL,
    apPaterno VARCHAR(25) NOT NULL,
    apMaterno VARCHAR(25) NOT NULL
);

CREATE TABLE Usuario
(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY ,
	pass VARCHAR(23) NOT NULL,
	FOREIGN KEY (id) REFERENCES DatosUsuario(id)
);

CREATE TABLE Ejercicio
(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY ,
    nombre VARCHAR(50),
	distanciaX INT NOT NULL,  /*Distancia a la que se encuentra el objetivo*/
    fondo VARCHAR(100), 	  /*Ubicación de la imagen de fondo*/
    objetivo VARCHAR(100) 	  /*Ubicación de la imagen que representa al objetivo*/
);

CREATE TABLE Usuario_Ejercicio
(
	idUsuario INT NOT NULL ,
	idEjercicio INT NOT NULL,
    puntos INT NOT NULL, 		/*Inicialmente 10, por cada intento fallido reduce un punto*/
	FOREIGN KEY (idEjercicio) REFERENCES DatosUsuario(id),
    FOREIGN KEY (idUsuario) REFERENCES DatosUsuario(id),
    PRIMARY KEY (idUsuario, idEjercicio)
);

SELECT Usuario.id, nombre, apPaterno, apMaterno FROM Usuario JOIN DatosUsuario ON Usuario.id = DatosUsuario.id WHERE DatosUsuario.nombre = 'Mabel' AND Usuario.pass = 1234; 