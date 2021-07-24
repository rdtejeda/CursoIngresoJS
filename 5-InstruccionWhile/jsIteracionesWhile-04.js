/* AUTOR: TEJEDA ROBERTO
	0ENUNCIADO: wile  Ej. 4

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado>9 || numerIngresado<0) 
	{
		alert("numero invalido")
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
		numeroIngresado = parseInt(numeroIngresado);
	}
}
//FIN DE LA FUNCIÓN