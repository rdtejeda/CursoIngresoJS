/*
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: if  Ej. 7

Enunciado:
Al ingresar una edad menor a 18 años
 y un estado civil distinto a "Soltero", 
 mostrar el siguiente mensaje: 
 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	var laEdad;
	var elEstado;
	laEdad=parseInt(document.getElementById("txtIdEdad").value);
	elEstado=document.getElementById("estadoCivil").value;
		if (elEstado!="Soltero" && laEdad<18)
	{
 	alert("Es muy pequeño para NO ser soltero.");
	}
}