/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerdato;
	var segundodato;
	var resultado;

	primerdato=parseInt(document.getElementById("txtIdNumeroUno").value);
	segundodato=parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado=primerdato+segundodato


	alert("El resultado es : " + resultado);

	document.getElementById("txtIdNumeroUno").value="";
	document.getElementById("txtIdNumeroDos").value="";


}

