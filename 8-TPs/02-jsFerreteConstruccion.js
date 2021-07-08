/*2.
	
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S TP2

	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo
	var ancho
	var perimetro
	var metrosparaperimetro

	largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);

    perimetro=(largo+ancho)*2
    metrosparaperimetro=perimetro*3
	
	alert("Debe compra "+metrosparaperimetro+" metros de alambre para alambrar con tres hilos");
}
function Circulo () 
{
	var radio;
	var perimetrocirculo;
	var metrospercirculo;

	radio=parseInt(document.getElementById("txtIdRadio").value);

	perimetrocirculo=Math.PI*(radio*radio);
	metrospercirculo=perimetrocirculo*3;

	alert("Debe compra "+metrospercirculo+" metros de alambre para alambrar con tres hilos");

}
function Materiales () 
{
	var largo;
	var ancho;
	var superficie;
	var cantidadcemento;
	var cantidadcal;

	largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);

    superficie=(largo*ancho);
    cantidadcemento=superficie*2;
    cantidadcal=superficie*3

	alert("Debe compra "+cantidadcemento+" bolsas de cemento y "+cantidadcal+" bolsas de cal");
}