/* AUTOR: TEJEDA ROBERTO
	0ENUNCIADO: wile  Ej. 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. *
2-Suma de los positivos. *
3-Cantidad de positivos. *
4-Cantidad de negativos. *
5-Cantidad de ceros.	*
6-Cantidad de números pares. *
7-Promedio de positivos. *
8-Promedios de negativos. *
9-Diferencia entre positivos y negativos, (positvos-negativos). *
*/
function mostrar()
{
	var SumaNegativos;
	var SumaPositivos;
	var CantidadPositivos;
	var CantidadNegativos;
	var CantidadCeros;
	var CantidadNumerosPares;
	var PromedioPositivos;
	var PromediosNegativos;
	var DiferenciaPyN;
	var verPar;
	var seguir;
	var numeroIngresado;
	var cantidadDatos;
			
	seguir = "si";
	cantidadDatos = 0;
	SumaNegativos = 0;
	SumaPositivos = 0;
	CantidadPositivos =0;
	CantidadNegativos = 0;
	CantidadCeros = 0;
	CantidadNumerosPares = 0;
	
	while( seguir == "si")
	{
		numeroIngresado = prompt ("Ingrese numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		cantidadDatos = cantidadDatos+1;
		if (numeroIngresado<0) //1-Suma de los negativos
		{
			SumaNegativos = SumaNegativos+numeroIngresado;
			CantidadNegativos = CantidadNegativos + 1; //4-Cantidad de negativos
		}
		else
		{
			if (numeroIngresado>0) //2-Suma de los positivos.
			{
				SumaPositivos = SumaPositivos+numeroIngresado;
				CantidadPositivos = CantidadPositivos+1; //3-Cantidad de positivos.
			}
			else // Cantidad de ceros
			{
				CantidadCeros = CantidadCeros+1
			}
		}
		verPar = numeroIngresado % 2; //6-Cantidad de números pares.
		if (verPar == 0 && numeroIngresado != 0)
		{
			CantidadNumerosPares = CantidadNumerosPares + 1;
		}
	seguir = prompt("desea continuar?");
	}
	if (CantidadNegativos>0) //8-Promedios de negativos
	{
		PromediosNegativos = SumaNegativos/CantidadNegativos;
	}
	if (CantidadPositivos>0) //7-Promedio de positivos
	{
		PromedioPositivos = SumaPositivos/CantidadPositivos;
	}
	DiferenciaPyN = SumaPositivos-SumaNegativos; //9-Diferencia entre positivos y negativos,(positvos-negativos)
	alert
	(	
		"La Suma de los negativos es: "+SumaNegativos+
		" ; La Suma de los positivos es: "+SumaPositivos+
		" ; La Cantidad de positivos es: "+CantidadPositivos+
		" ; La Cantidad de negativos es: "+CantidadNegativos+
		" ; La Cantidad de ceros es : "+CantidadCeros+
		" ; La Cantidad de números pares es: "+CantidadNumerosPares+
		" ; El Promedio de positivos es: "+PromedioPositivos+
		" ; El Promedios de negativos es: "+PromediosNegativos+
		" ; La Diferencia entre positivos y negativos es: "+DiferenciaPyN
	)
}