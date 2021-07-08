
	/*AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S P2

	A una pareja se le pide los datos para mostrar un mensaje
	 " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, 
	 que sumados son xx kilos y el promedio de peso xx ".
*/


function mostrar()
{
  var persona1;
  var peso1;
  var persona2;
  var peso2;
  var pesototal;
  var pesoprom;

  persona1=prompt("PERSONA 1 ¿Cual es su nombre?");
  peso1=parseInt(prompt("PERSONA 1 ¿Cual es su peso en kg?"));
  persona2=prompt("PERSONA 2 ¿Cual es su nombre?");
  peso2=parseInt(prompt("PERSONA 2 ¿Cual es su peso en kg?"));
  pesototal=peso1+peso2
  pesoprom=pesototal/2

  alert("Ustedes se llaman "+persona1+" y "+persona2+" pesan "+peso1+" y "+peso2+" kilos, que sumados son "+pesototal+" kilos y el promedio de peso es "+pesoprom);
}