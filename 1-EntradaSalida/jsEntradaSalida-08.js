/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;

	dividendo=parseInt(document.getElementById("txtIdNumeroDividendo").value);
    divisor=parseInt(document.getElementById("txtIdNumeroDivisor").value);
    
// El resto o residuo de una división de dos números enteros
// es el número que se le ha de restar al dividendo
// para que sea igual a un determinado
	
	var reultado;
	var resto;
	var respuesta;

    resultado=dividendo/divisor;
    entero=parseInt(resultado);
    resto=dividendo-(divisor*entero);
    respuesta="El resto es "+resto;
	alert(respuesta);

}
