/*
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: if  Ej. 2

Enunciado:
Al ingresar una edad 
debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	var laEdad;
	laEdad=parseInt(document.getElementById("txtIdEdad").value);
	if (laEdad>=18)
	{
 	alert("ud. es mayor de edad");
	}
}