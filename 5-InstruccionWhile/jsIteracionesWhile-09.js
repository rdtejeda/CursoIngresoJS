/*  AUTOR: TEJEDA ROBERTO
	0ENUNCIADO: wile  Ej. 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numeroMaximo;
	var numeroMinimo;
	var seguir;
	var numeroIngresado;
	var banderaDelPrimeroIngreso;
		
	seguir = "si";
	banderaDelPrimeroIngreso = true
	
	while( seguir == "si")
	{
		numeroIngresado = prompt ("Ingrese numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		if ( banderaDelPrimeroIngreso == true ) 
		{
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
			banderaDelPrimeroIngreso = false;
		} 
		else 
		{
			if (numeroIngresado>numeroMaximo) 
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado<numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}
		seguir = prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}