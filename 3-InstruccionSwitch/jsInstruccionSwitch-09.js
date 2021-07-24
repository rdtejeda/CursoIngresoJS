/*AUTOR: TEJEDA ROBERTO
ENUNCIADO: Sw Ej. 9

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso 
de una estacion del año y localidad para vacacionar para poder 
calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba
tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba 
tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba 
tiene el precio sin descuento

*/
function mostrar()
{
	var destinoIngresado;
	var estacion;
	var estadia;
	var preciofinal;
	var descuento;
	
	estadia = 15000;
	descuento = 1;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	
	switch (estacion)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					descuento = descuento + 0.2;
					break;
				case "Mar del plata":
					descuento = descuento - 0.2;
					break;
				default: //"Cordoba" y "Cataratas"
					descuento = descuento - 0.1;
					break;
			}		
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					descuento = descuento - 0.2;
					break;
				case "Mar del plata":
					descuento = descuento + 0.2;
					break;
				default: //"Cataratas" y "Cordoba"
					descuento = descuento + 0.1;
					break;
			}		
			break;
		default: //"Otoño" y "Primavera"
			switch (destinoIngresado)
			{
		   		case "Bariloche":
		   		case "Cataratas":
		   		case "Mar del plata":
					descuento = descuento + 0.1;
			   		break;
		   		default: //"Cordoba"
			   		break;
	   		}		
			break;
	}
	preciofinal = estadia*descuento;
	alert("Precio Final : $ "+preciofinal);
}