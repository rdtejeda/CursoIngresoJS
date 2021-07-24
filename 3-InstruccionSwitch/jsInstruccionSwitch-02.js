/*AUTOR: TEJEDA ROBERTO
	ENUNCIADO: Sw Ej. 2
Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño = document.getElementById("txtIdMes").value;
	switch (mesDelAño) 
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
			mensaje = "Falta para el invierno.";
			break;
		case "Junio":
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
		default:
			break;
	}
	alert(mensaje);
}