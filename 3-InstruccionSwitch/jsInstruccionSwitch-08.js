/*
AUTOR: TEJEDA ROBERTO
ENUNCIADO: Sw Ej. 8

Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado;
	var clima;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch (destinoIngresado) 	{
		case "Bariloche":
		case "Ushuaia":
			clima = "FRIO";
			break;
		case "Cataratas":
		case "Mar del plata":
			clima = "CALOR";
			break;
		default:
			break;
	}
	alert(clima);
}