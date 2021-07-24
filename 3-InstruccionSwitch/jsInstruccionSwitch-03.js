/*
AUTOR: TEJEDA ROBERTO
ENUNCIADO: Sw Ej. 3

Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño = document.getElementById("txtIdMes").value;
	switch (mesDelAño) 
	{
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Febrero":
			mensaje = " Este mes no tiene más de 29 días.";
			break;
		default:
			break;
	}
	alert(mensaje);
}