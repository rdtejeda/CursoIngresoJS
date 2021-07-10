/*1.

	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S TP1

	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioUno;
var precioDos;
var precioTres;

function Sumar () 
{
	precioUno=parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseInt(document.getElementById("txtIdPrecioTres").value);
	var total;
	total="La suma de los tres productos es: "+(precioUno+precioDos+precioTres);
	alert(total);
}
function Promedio () 
{
    precioUno=parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseInt(document.getElementById("txtIdPrecioTres").value);
	var promedio;
	promedio="El costo promedio de los tres productos es: "+((precioUno+precioDos+precioTres))/3;
	alert(promedio);	
}
function PrecioFinal () 
{
	precioUno=parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseInt(document.getElementById("txtIdPrecioTres").value);
	var preciofin;
	preciofin="El costo final de los tres productos, IVA incluido, es: "+(precioUno+precioDos+precioTres)*1.21;
	alert(preciofin);
}