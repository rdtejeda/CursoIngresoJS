/*
AUTOR: TEJEDA ROBERTO
ENUNCIADO: Sw Ej. 4

Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	var mesDelAño;
	var dias;
	mesDelAño = document.getElementById("txtIdMes").value;
	switch (mesDelAño) 
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			dias = 31;
			break;		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			dias = 30;
			break;
		case "Febrero":
			dias = 28;
			break;
		default:
			break;
	}
	alert ("Tiene "+dias+" días.")
}