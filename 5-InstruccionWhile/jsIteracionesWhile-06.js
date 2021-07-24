/*	AUTOR: TEJEDA ROBERTO
	0ENUNCIADO: wile  Ej. 6

Enunciado:
Al presionar el botón pedir 5 números
 e informar la suma acumulada y el promedio.
 */

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;

	while (contador<5)
	{
		contador = contador+1;
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
	}
	
	promedio = acumulador/contador;
	txtIdSuma.value="La suma acumulada "+acumulador;
	txtIdPromedio.value="El promedio "+promedio;
}
//FIN DE LA FUNCIÓN