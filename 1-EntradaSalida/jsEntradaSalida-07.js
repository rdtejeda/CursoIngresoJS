/*

	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S Ej. 7

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
	var primerdato;
	var segundodato;

function sumar()
{	
	primerdato=parseInt(document.getElementById("txtIdNumeroUno").value);
    segundodato=parseInt(document.getElementById("txtIdNumeroDos").value);
    var sumando;
    sumando="La suma es "+(primerdato+segundodato);
	alert(sumando);
}

function restar()
{
	primerdato=parseInt(document.getElementById("txtIdNumeroUno").value);
    segundodato=parseInt(document.getElementById("txtIdNumeroDos").value);
	var restando;
	restando="La resta es "+(primerdato-segundodato);
	alert(restando);
}

function multiplicar()
{ 
	primerdato=parseInt(document.getElementById("txtIdNumeroUno").value);
    segundodato=parseInt(document.getElementById("txtIdNumeroDos").value);
	var multiplicando;
	multiplicando="La muliplicación es "+(primerdato*segundodato);
	alert(multiplicando);
}

function dividir()
{
	primerdato=parseInt(document.getElementById("txtIdNumeroUno").value);
    segundodato=parseInt(document.getElementById("txtIdNumeroDos").value);
	var dividendo;
	dividendo="La División es "+(primerdato/segundodato);
	alert(dividendo);
}