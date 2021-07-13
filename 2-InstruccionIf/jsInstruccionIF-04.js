/*
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: if  Ej. 4

Enunciado:
Al ingresar una edad debemos informar
 si la persona es adolescente, 
 edad entre 13 y 17 años (inclusive) .
*/
function mostrar()
{
	var laEdad;
	laEdad=parseInt(document.getElementById("txtIdEdad").value);
	if (laEdad>=13 && laEdad<=17)
	{
 	alert("ud. es adolecente");
	}
	else
	{
		alert("ud. no es adolecente");
	}
}