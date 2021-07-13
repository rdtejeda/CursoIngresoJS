/*
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: if  Ej. 5

Enunciado:
Al ingresar una edad 
solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	var laEdad;
	laEdad=parseInt(document.getElementById("txtIdEdad").value);
	if (laEdad<13 || laEdad>17)
	{
 	alert("ud. no es adolecente");
	}
	else
	{
		alert("ud. es adolecente");
	}
}