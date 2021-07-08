/*3.

	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S TP3

	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje
    concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit
    (ej.: "0  centígrados son 32 Fahrenheit ").
*/
	var entrada;
	var centi;
	var fahren;
function FahrenheitCentigrados () 
{
	entrada=parseInt(document.getElementById("txtIdTemperatura").value);
	centigrados=(entrada-32)*5/9;
	alert(entrada+"° Fahrenheit son "+centigrados+"° Centígrados");
}
function CentigradosFahrenheit ()
{
	entrada=parseInt(document.getElementById("txtIdTemperatura").value);
	fahren=(entrada*9/5)+32;
	alert(entrada+"° Centigrados son "+fahren+"° Fahrenheit");	
}