/*
AUTOR: TEJEDA ROBERTO
ENUNCIADO: For  Ej. 3

Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{
	var texto;
	var i;
	var v;
	v=parseInt(prompt("Ingrese el numero de repeticiones"));
	i=0;
		for (i= 0; i<v; i=i+1) 
		{
			alert("Hola UTN FRA");
		}
}