	/*AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S TP01

	Enunciado:
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/

function mostrar()
{
	var lado;
	var perimetro;
	
	lado=parseInt(prompt("¿Cuantop mide el lado del triangulo equilatero en centimetros?"));
	
	perimetro=lado*3;

	alert("El périmetro es "+perimetro+" centimetros");
	}
