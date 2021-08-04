/*  AUTOR: TEJEDA ROBERTO
	  ENUNCIADO: Parcial 2020
				Ejercisio 2
				Punto a)

Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

function mostrar()
{
  var producto;
  var bolsas;
  var precio;
  var seguir;
  var barena;
  var bcal;
  var bcemento;
  var parena;
  var pcal;
  var pcemento;
  var descuento;
  var btotales;
  var totalpagarsindes;
  var totalpagarcondes;
  parena=1;
  pcal=1;
  pcemento=1;
  descuento=1;
  barena=0;
  bcal=0;
  bcemento=0;
  seguir="si";
  while (seguir == "si") 
  {
    producto = prompt("Ingrese Producto 'Arena', 'Cal' ó 'Cemento'");
      while (producto != "Arena" && producto != "Cal" && producto != "Cemento" ) 
      {
        producto = prompt("INGRESO ERRONEO Ingrese 'Arena', 'Cal' ó 'Cemento'");
      }
    bolsas = prompt("Ingrese la Cantidad de Bolsas");
    bolsas = parseInt(bolsas);
    precio = prompt("Ingrese el valor de la Bolsa");
    precio = parseInt(precio);
      while (precio == 0) 
      {
        precio = prompt("INGRESO ERRONEO Ingrese un valor mayor a 0");
        precio = parseInt(precio);
      }
    switch (producto) 
		{
			case "Arena":
        barena=barena+bolsas;
        parena=precio;
				break;
			case "Cal":
        bcal=bcal+bolsas;
        pcal=precio;				
				break;
			case "Cemento":
				bcemento=bcemento+bolsas;
        pcemento=precio;
				break;
			default:
				break;
    }
    seguir= prompt("Desea continuar la carga 'si' o 'no'");
  }
  btotales = barena+bcemento+bcal;
  totalpagarsindes=((barena*parena)+(bcal*pcal)+(bcemento*pcemento));
  alert("El importe total a pagar, bruto sin descuento es "+totalpagarsindes);
}*/

/*  AUTOR: TEJEDA ROBERTO
	  ENUNCIADO: Parcial 2020
				Ejercisio 2
				Punto b)

Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

function mostrar()
{
  var producto;
  var bolsas;
  var precio;
  var seguir;
  var barena;
  var bcal;
  var bcemento;
  var parena;
  var pcal;
  var pcemento;
  var descuento;
  var btotales;
  var totalpagarsindes;
  var totalpagarcondes;
  parena=1;
  pcal=1;
  pcemento=1;
  descuento=1;
  barena=0;
  bcal=0;
  bcemento=0;
  seguir="si";
  while (seguir == "si") 
  {
    producto = prompt("Ingrese Producto 'Arena', 'Cal' ó 'Cemento'");
      while (producto != "Arena" && producto != "Cal" && producto != "Cemento" ) 
      {
        producto = prompt("INGRESO ERRONEO Ingrese 'Arena', 'Cal' ó 'Cemento'");
      }
    bolsas = prompt("Ingrese la Cantidad de Bolsas");
    bolsas = parseInt(bolsas);
    precio = prompt("Ingrese el valor de la Bolsa");
    precio = parseInt(precio);
      while (precio == 0) 
      {
        precio = prompt("INGRESO ERRONEO Ingrese un valor mayor a 0");
        precio = parseInt(precio);
      }
    switch (producto) 
		{
			case "Arena":
        barena=barena+bolsas;
        parena=precio;
				break;
			case "Cal":
        bcal=bcal+bolsas;
        pcal=precio;				
				break;
			case "Cemento":
				bcemento=bcemento+bolsas;
        pcemento=precio;
				break;
			default:
				break;
    }
    seguir= prompt("Desea continuar la carga 'si' o 'no'");
  }
  btotales = barena+bcemento+bcal;
  totalpagarsindes=((barena*parena)+(bcal*pcal)+(bcemento*pcemento));
  if (btotales<10) 
  {
    alert("El importe total a pagar, bruto sin descuento es "+totalpagarsindes);
  } else if (btotales>=10 && btotales<30) 
    {
    descuento=descuento-0.15;
    totalpagarcondes=totalpagarsindes*descuento;
    alert("El total a pagar sin descuento es "+totalpagarsindes+" y con descuento es "+totalpagarcondes);
    }
    else if (btotales>=30)
    {
    descuento=descuento-0.25;
    totalpagarcondes=totalpagarsindes*descuento;
    alert("El total a pagar sin descuento es "+totalpagarsindes+" y con descuento es "+totalpagarcondes);
    }
 }
 */
/*  AUTOR: TEJEDA ROBERTO
	  ENUNCIADO: Parcial 2020
				Ejercisio 2
				Punto d)

Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

function mostrar()
{
  var producto;
  var bolsas;
  var precio;
  var seguir;
  var barena;
  var bcal;
  var bcemento;
  var parena;
  var pcal;
  var pcemento;
  var descuento;
  parena=1;
  pcal=1;
  pcemento=1;
  descuento=1;
  barena=0;
  bcal=0;
  bcemento=0;
  seguir="si";
  while (seguir == "si") 
  {
    producto = prompt("Ingrese Producto 'Arena', 'Cal' ó 'Cemento'");
      while (producto != "Arena" && producto != "Cal" && producto != "Cemento" ) 
      {
        producto = prompt("INGRESO ERRONEO Ingrese 'Arena', 'Cal' ó 'Cemento'");
      }
    bolsas = prompt("Ingrese la Cantidad de Bolsas");
    bolsas = parseInt(bolsas);
    precio = prompt("Ingrese el valor de la Bolsa");
    precio = parseInt(precio);
      while (precio == 0) 
      {
        precio = prompt("INGRESO ERRONEO Ingrese un valor mayor a 0");
        precio = parseInt(precio);
      }
    switch (producto) 
		{
			case "Arena":
        barena=barena+bolsas;
        parena=precio;
				break;
			case "Cal":
        bcal=bcal+bolsas;
        pcal=precio;				
				break;
			case "Cemento":
				bcemento=bcemento+bolsas;
        pcemento=precio;
				break;
			default:
				break;
    }
    seguir= prompt("Desea continuar la carga 'si' o 'no'");
  }
 if (barena>bcal && barena>bcemento) 
  {
    alert("El tipo con mas cantidad de bolsas es la 'Arena'");
  } else if ( bcal>barena && bcal>bcemento ) 
    {
    alert("El tipo con mas cantidad de bolsas es la 'Cal'");
    }
    else if (bcemento>barena && bcemento>bcal)
    {
    alert("El tipo con mas cantidad de bolsas es la 'Cemento'");
    }
 }*/

 /*  AUTOR: TEJEDA ROBERTO
	  ENUNCIADO: Parcial 2020
				Ejercisio 2
				Punto f)

Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  var producto;
  var bolsas;
  var precio;
  var seguir;
  var barena;
  var bcal;
  var bcemento;
  var parena;
  var pcal;
  var pcemento;
  var descuento;
  parena=1;
  pcal=1;
  pcemento=1;
  descuento=1;
  barena=0;
  bcal=0;
  bcemento=0;
  seguir="si";
  while (seguir == "si") 
  {
    producto = prompt("Ingrese Producto 'Arena', 'Cal' ó 'Cemento'");
      while (producto != "Arena" && producto != "Cal" && producto != "Cemento" ) 
      {
        producto = prompt("INGRESO ERRONEO Ingrese 'Arena', 'Cal' ó 'Cemento'");
      }
    bolsas = prompt("Ingrese la Cantidad de Bolsas");
    bolsas = parseInt(bolsas);
    precio = prompt("Ingrese el valor de la Bolsa");
    precio = parseInt(precio);
      while (precio == 0) 
      {
        precio = prompt("INGRESO ERRONEO Ingrese un valor mayor a 0");
        precio = parseInt(precio);
      }
    switch (producto) 
		{
			case "Arena":
        barena=barena+bolsas;
        parena=precio;
				break;
			case "Cal":
        bcal=bcal+bolsas;
        pcal=precio;				
				break;
			case "Cemento":
				bcemento=bcemento+bolsas;
        pcemento=precio;
				break;
			default:
				break;
    }
    seguir= prompt("Desea continuar la carga 'si' o 'no'");
  }
 if (parena>pcal && parena>pcemento) 
  {
    alert("El tipo con mas caro es la 'Arena'");
  } else if ( pcal>parena && pcal>pcemento ) 
    {
    alert("El tipo con mas caro es la 'Cal'");
    }
    else if (pcemento>parena && pcemento>pcal)
    {
    alert("El tipo con mas caro es el 'Cemento'");
    }
 }