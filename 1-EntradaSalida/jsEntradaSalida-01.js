/*
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S Ej. 1

Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
*/
/*
function mostrar()
{
	alert("Esto funciona de maravilla");
}
*/
/*
1. Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a
ambas. Comparar si “nota1” es mayor a “nota2” e imprimir el resultado de la
comparación.

var nota1
var nota2
nota1= parseInt(prompt("ingrese de la nota 1 "));
nota2= parseInt(prompt("ingrese de la nota 2 "));
alert("la nota 1 es "+nota1)
alert("La nota 2 es "+nota2)
if (nota1>nota2) 
	{
		alert("LA NOTA 1 ES MAYOR A LA NOTA 2");
	} 
	else 
	{
		alert("LA NOTA 1 ES MENOR A LA NOTA 2");
    }
	*/
/* Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a
ambas. Comparar si “nota1” es mayor a “nota2” imprimir el mensaje “Nota1 es mayor”
o “Nota2 es mayor” según el resultado de la comparación.*/

/*
var nota1
var nota2
nota1= parseInt(prompt("ingrese de la nota 1 "));
nota2= parseInt(prompt("ingrese de la nota 2 "));
alert("la nota 1 es "+nota1)
alert("La nota 2 es "+nota2)
if (nota1>nota2) 
	{
		alert("LA NOTA 1 ES MAYOR");
	} 
	else 
	{
		alert("LA NOTA 2 ES MAYOR");
    }
*/
/*
	Las puntuaciones de las películas se clasifican en:
	◦ 0 : mala
	◦ 1 : regular
	◦ 2 : buena
	◦ 3 : muy buena
	◦ 4 : excelente
	Definir una variable llamada “puntuacion” y cargarla con un valor de 0 a 4. Imprimir la
	clasificación de la película según el valor numérico.
*/
/*
var puntuacion
puntuacion= parseInt(prompt("Ingrese la puntuaciones de las películas entre 0 y 4"));
alert("La puntuacion es "+puntuacion)
switch (puntuacion) {
	case 0:
		alert("La pelicula es mala")
		break;
	case 1:
		alert("La pelicula es regular")
		break;
	case 2:
		alert("La pelicula es buena")
		break;
	case 3:
		alert("La pelicula es muy buena")
		break;
	case 4:
		alert("La pelicula es excelente")
		break;
	default:
		break;
}
*/
//1. Crear un programa que imprima una cuenta regresiva de 59 a 0.

var regresiva=60;
while (regresiva=10); 
{
regresiva=regresiva-1;
console.log(regresiva)	
}