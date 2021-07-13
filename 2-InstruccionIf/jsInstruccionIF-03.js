/*
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: if  Ej. 3

Enunciado:
Al ingresar una edad debemos informar
 si la persona es mayor de edad, 
 sino informar que es un menor de edad.
*/
function mostrar()
{
	var laEdad;
	laEdad=parseInt(document.getElementById("txtIdEdad").value);
	if (laEdad>=18)
	{
 	alert("ud. es mayor de edad");
	}
	else
	{
		alert("ud. es menor de edad");
	}
}