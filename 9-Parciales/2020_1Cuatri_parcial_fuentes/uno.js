/*  AUTOR: TEJEDA ROBERTO
	0ENUNCIADO: Parcial 2020
				Ejercisio 1
				Punto a)
Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

function mostrar()
{
	var producto; 
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	precio = 0;
	cantidad=0;
	var alcoholMasBarato;
	var cantidadAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var banderaAlcohol;
	banderaAlcohol=true;	
	for (var i=0; i < 5; i=i+1) 
	{
		producto = prompt("Ingrese producto barbijo, jabón o alcohol ");//Ingreso y validación
			while (producto != "barbijo" && producto != "jabón" && producto != "alcohol")
			{
				producto = prompt("INGRESO ERRONEO, Ingrese producto 'barbijo','jabón'o'alcohol'");
			}
		precio = prompt("Ingrese costo Mayor a 100 y Menor a 300");
		precio = parseInt(precio);
			while ( precio<100 || precio>300)
			{
				precio = prompt("INGRESO ERRONEO, Ingrese costo Mayor a 100 y Menor a 300");
				precio = parseInt(precio);
			}
		cantidad = prompt("Ingrese la cantidad de unidades, no debe superar las 1000");
		cantidad = parseInt(cantidad);
			while(cantidad<1 || cantidad>1000)
			{
				cantidad = prompt("INGRESO ERRONEO, NO puede ser 0, NEGATIVO y no debe superar las 1000");
				cantidad = parseInt(cantidad);
			}
		marca = prompt("Ingrese Marca del Producto");
		fabricante = prompt("Ingrese fabricante del Producro");
		// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		switch (producto) 
		{
			case "alcohol":
				if ( banderaAlcohol ) 
				{
					banderaAlcohol=false;
					alcoholMasBarato = precio;
					cantidadAlcoholMasBarato = cantidad;
					fabricanteAlcoholMasBarato  = fabricante;
					
				} 
				else 
					{
						if (precio<alcoholMasBarato) 
						{
							alcoholMasBarato = precio;
							cantidadAlcoholMasBarato = cantidad;
							fabricanteAlcoholMasBarato  = fabricante;
						} 
					}
				break;
			default:
				break;
		}		
	}
	alert("El alcohol más barato es el del fabricante "+fabricanteAlcoholMasBarato+
	" y la cantidad es "+cantidadAlcoholMasBarato+	" unidades")
}
*/

/*  AUTOR: TEJEDA ROBERTO
	0ENUNCIADO: Parcial 2020
				Ejercisio 1
				Punto b)
Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var producto; 
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	precio = 0;
	cantidad = 0;
   	var cantidadBarbijo;
	var cantidadAlcohol;
	var cantidadjabon;
	var promedio;
	var mascomprado;
	var contadorBarbijo;
	var contadorAlcohol;
	var contadorjabon;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorjabon=0;
	cantidadBarbijo=0;
	cantidadjabon=0;
	cantidadAlcohol=0;
	for (var i=0; i < 2; i=i+1) 
	{
		producto = prompt("Ingrese producto barbijo, jabón o alcohol ");//Ingreso y validación
			while (producto != "barbijo" && producto != "jabón" && producto != "alcohol")
			{
				producto = prompt("INGRESO ERRONEO, Ingrese producto 'barbijo','jabón'o'alcohol'");
			}
		precio = prompt("Ingrese costo Mayor a 100 y Menor a 300");
		precio = parseInt(precio);
			while ( precio<100 || precio>300)
			{
				precio = prompt("INGRESO ERRONEO, Ingrese costo Mayor a 100 y Menor a 300");
				precio = parseInt(precio);
			}
		cantidad = prompt("Ingrese la cantidad de unidades, no debe superar las 1000");
		cantidad = parseInt(cantidad);
			while(cantidad<1 || cantidad>1000)
			{
				cantidad = prompt("INGRESO ERRONEO, NO puede ser 0, NEGATIVO y no debe superar las 1000");
				cantidad = parseInt(cantidad);
			}
		marca = prompt("Ingrese Marca del Producto");
		fabricante = prompt("Ingrese fabricante del Producro");
		switch (producto) 
		{
			case "alcohol":
				cantidadAlcohol = cantidadAlcohol+cantidad;
				contadorAlcohol = contadorAlcohol+1;
				break;
			case "barbijo":
				cantidadBarbijo = cantidadBarbijo+cantidad;
				contadorBarbijo = contadorBarbijo+1
				break;
			case "jabón":
				cantidadjabon = cantidadjabon+cantidad;
				contadorjabon = contadorjabon+1;
				break;
			default:
				break;
		}
	}
	if (cantidadAlcohol>cantidadBarbijo && cantidadAlcohol>cantidadjabon) //cantidad de alcohol mayor
		{
		promedio=cantidadAlcohol/contadorAlcohol;
		mascomprado="Alcohol";
		}
		else
		{
			if (cantidadBarbijo>cantidadAlcohol && cantidadBarbijo>cantidadjabon) //cantidad de barbijo mayor
			{
				promedio=cantidadBarbijo/contadorBarbijo;
				mascomprado="Barbijo";	
			}
				else
				{
					promedio=cantidadjabon/contadorjabon;
					mascomprado="Jabón";
				}
		}
	alert(" El prducto con mas unidades de compra es "+mascomprado+" con un promedio de "+promedio+" de uniudades.")
}


/*  AUTOR: TEJEDA ROBERTO
	0ENUNCIADO: Parcial 2020
				Ejercisio 1
				Punto c)
Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

function mostrar()
{
	var producto; 
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	precio = 0;
	cantidad = 0;
   	var cantidadBarbijo;
	var cantidadAlcohol;
	var cantidadjabon;
	cantidadBarbijo=0;
	cantidadjabon=0;
	cantidadAlcohol=0;
	for (var i=0; i < 4; i=i+1) 
	{
		producto = prompt("Ingrese producto barbijo, jabón o alcohol ");//Ingreso y validación
			while (producto != "barbijo" && producto != "jabón" && producto != "alcohol")
			{
				producto = prompt("INGRESO ERRONEO, Ingrese producto 'barbijo','jabón'o'alcohol'");
			}
		precio = prompt("Ingrese costo Mayor a 100 y Menor a 300");
		precio = parseInt(precio);
			while ( precio<100 || precio>300)
			{
				precio = prompt("INGRESO ERRONEO, Ingrese costo Mayor a 100 y Menor a 300");
				precio = parseInt(precio);
			}
		cantidad = prompt("Ingrese la cantidad de unidades, no debe superar las 1000");
		cantidad = parseInt(cantidad);
			while(cantidad<1 || cantidad>1000)
			{
				cantidad = prompt("INGRESO ERRONEO, NO puede ser 0, NEGATIVO y no debe superar las 1000");
				cantidad = parseInt(cantidad);
			}
		marca = prompt("Ingrese Marca del Producto");
		fabricante = prompt("Ingrese fabricante del Producro");
		switch (producto) 
		{
			case "alcohol":
				cantidadAlcohol = cantidadAlcohol+cantidad;
				break;
			case "barbijo":
				cantidadBarbijo = cantidadBarbijo+cantidad;
				break;
			case "jabón":
				cantidadjabon = cantidadjabon+cantidad;
				break;
			default:
				break;
		}
	}
	alert(" Hay "+cantidadjabon+ " unidades de jabón en total")
}
*/