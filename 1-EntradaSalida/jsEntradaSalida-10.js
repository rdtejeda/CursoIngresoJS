/*

	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S Ej. 10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;

	importe=parseInt(document.getElementById("txtIdImporte").value);

	resultado=importe*0.75;

	document.getElementById("txtIdResultado").value = "RESULTADO "+resultado;
}
