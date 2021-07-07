/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var porcentajededescuento;

	importe=parseInt(document.getElementById("txtIdImporte").value);

	porcentajededescuento=parseInt(prompt("ingrese porcetaje de descuento "));

	resultado = importe -( importe * porcentajededescuento /100);

	document.getElementById("txtIdResultado").value = "RESULTADO "+resultado;
}