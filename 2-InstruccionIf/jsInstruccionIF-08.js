/*
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: if  Ej. 8

Enunciado:
Al ingresar una edad menor a 18 años
 y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	var laEdad;
	var elEstado;
	laEdad=parseInt(document.getElementById("txtIdEdad").value);
	elEstado=document.getElementById("estadoCivil").value;
		if (laEdad<18 && elEstado!="Soltero")
	{
 	}
		else if (elEstado="Soltero")
		{
			alert("Es soltero y no es menor");
		}	
}