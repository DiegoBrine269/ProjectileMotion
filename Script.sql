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
	ancho INT NOT NULL,
    altura INT NOT NULL
);

CREATE TABLE Usuario_Ejercicio
(
	idUsuario INT NOT NULL ,
	idEjercicio INT NOT NULL,
    puntos INT NOT NULL,
	FOREIGN KEY (idEjercicio) REFERENCES DatosUsuario(id),
    FOREIGN KEY (idUsuario) REFERENCES DatosUsuario(id),
    PRIMARY KEY (idUsuario, idEjercicio)
);

