/* AUTOR: TEJEDA ROBERTO
	ENUNCIADO: wile  Ej. 3

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada!="utn750") 
	{
			claveIngresada=prompt("ingrese el número clave.");
	}
	alert("Bienvenido a a la UTN");	
}
//FIN DE LA FUNCIÓN
