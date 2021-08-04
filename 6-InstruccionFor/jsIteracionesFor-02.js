/*
AUTOR: TEJEDA ROBERTO
ENUNCIADO: For  Ej. 2

Enunciado:
al presionar el botón mostrar 10 repeticiones con números , desde el 10 al 1.
*/

function mostrar()
{
	var numero;
	var w;
	var i;
	i=0;
		for (i= 0; i<10; i=i+1) 
		{
			w = 0;
			numero=11;
			while (w < 10) 
			{
				w=w+1;
				numero=parseInt(numero-1);
				document.write(numero+"<br>");
			}
		}
}