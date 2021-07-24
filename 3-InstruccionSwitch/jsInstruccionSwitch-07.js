/*
AUTOR: TEJEDA ROBERTO
ENUNCIADO: Sw Ej. 7

Enunciado:
Al selecionar un destino , indicar el punto cardinal 
de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado;
	var puntoCardinal;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch (destinoIngresado) {
		case "Bariloche":
			puntoCardinal = "Oeste";
			break;
		case "Cataratas":
			puntoCardinal = "Norte";
			break;
		case "Mar del plata":
			puntoCardinal = "Este";
			break;
		case "Ushuaia":
			puntoCardinal = "Sur";
			break;
		default:
			break;
	}
	alert(puntoCardinal);
}