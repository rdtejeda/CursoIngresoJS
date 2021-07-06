/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerdato;
	var segundodato;
	primerdato=parseInt(document.getElementById("txtIdNumeroUno").value);
    segundodato=parseInt(document.getElementById("txtIdNumeroDos").value);
    var suma;
    var sumando;
    suma = primerdato+segundodato;
    sumando="La suma es "+suma;
	alert(sumando);
}

function restar()
{
	var primerdato;
	var segundodato;
	primerdato=parseInt(document.getElementById("txtIdNumeroUno").value);
    segundodato=parseInt(document.getElementById("txtIdNumeroDos").value);
	var resto;
	var restando;
	resto=primerdato-segundodato;
	restando="La resta es "+resto;
	alert(restando);
}

function multiplicar()
{ 
	var primerdato;
	var segundodato;
	primerdato=parseInt(document.getElementById("txtIdNumeroUno").value);
    segundodato=parseInt(document.getElementById("txtIdNumeroDos").value);
	var multiplo;
	var multiplicando;
	multiplo=primerdato*segundodato;
	multiplicando="La muliplicación es "+multiplo;
	alert(multiplicando);
}

function dividir()
{
	var primerdato;
	var segundodato;
	primerdato=parseInt(document.getElementById("txtIdNumeroUno").value);
    segundodato=parseInt(document.getElementById("txtIdNumeroDos").value);
	var divide;
	var dividendo;
	divide=primerdato/segundodato;
	dividendo="La División es "+divide;
	alert(dividendo);
}