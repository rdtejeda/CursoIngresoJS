/*
AUTOR: TEJEDA ROBERTO
ENUNCIADO: E/S TP03

Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento,
 mostrar el precio final con descuento por id.*/


function mostrar()
{
	var precio;
	var descuento;
	var final;

	precio=parseInt(prompt("¿Cual es el precio?"));
	descuento=parseInt(prompt("¿Cual es el posentaje de descuento?"));
	final=precio-(precio*descuento/100);

	document.getElementById("elPrecioFinal").value=final;
}
