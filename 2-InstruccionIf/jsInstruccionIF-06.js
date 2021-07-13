/*
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: if  Ej. 6

Enunciado:
Al ingresar una edad debemos informar 
si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	var laEdad;
	laEdad=parseInt(document.getElementById("txtIdEdad").value);
	if (laEdad>=18)
	{
 	alert("ud. es mayor de edad");
	}
	else if (laEdad>=13)
		{
		alert("ud. es adolecente");
		}
		else
		{
		alert("ud. es un niñe");
		}
}