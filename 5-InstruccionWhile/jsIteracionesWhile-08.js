/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	
	respuesta = 'si';
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	while (respuesta == "si")
	{
		numeroIngresado = prompt ("Ingrese numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if ( numeroIngresado > 0 )
		{		
			sumaPositivos = sumaPositivos + numeroIngresado;
		} 
		else 
		{
			if (numeroIngresado<0)
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}
		}	
	respuesta = prompt("desea continuar? (si)");	
	}
	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value= multiplicacionNegativos;	
}	
	/*
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
*/
//FIN DE LA FUNCIÓN