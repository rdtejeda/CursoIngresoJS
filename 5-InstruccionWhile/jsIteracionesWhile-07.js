/*	AUTOR: TEJEDA ROBERTO
	0ENUNCIADO: while  Ej. 7
Al presionar el botón pedir  números 
 hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	var finalizar;
	contador = 0;
	acumulador = 0;
	finalizar = 1;
		while (contador >=0 && finalizar == 1) //si es true se ejecuta
	{
		numeroIngresado = prompt("ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador = contador+1;
		finalizar = prompt("para continuar ingrese 1 ");
		finalizar = parseInt(finalizar);
	}
	promedio = acumulador/contador;
	txtIdSuma.value = "La suma acumulada "+acumulador;
	txtIdPromedio.value = "El promedio "+promedio;
}