/*AUTOR: TEJEDA ROBERTO
ENUNCIADO: Sw Ej. 10

Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
	var destinoIngresado;
	var estacion;
	var seviaja;
	var noseviaja;
	var alerta;

	seviaja = "se viaja";
	noseviaja = "No se viaja";
	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	
	switch (estacion)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alerta = seviaja;
					break;
				default: //"Cordoba" , "Cataratas" y "Mar del plata"
					alerta = noseviaja;
					break;
			}		
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					alerta = seviaja;
					break;
				default: //"Bariloche" y "Cordoba"
				alerta = noseviaja;
					break;
			}		
			break;
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alerta = seviaja;
					break;
				default: // y "Cordoba", "Cataratas" y "Mar del plata"
					alerta = noseviaja;
					break;
			}
			break;
		default: //"Otoño" 
			alerta = seviaja;
			break;
	}
	alert(alerta);
}