/*

	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S Ej. 9

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldoaumentado;

	sueldo=parseInt(document.getElementById("txtIdSueldo").value);

	sueldoaumentado=sueldo*1.1;

	document.getElementById("txtIdResultado").value = "RESULTADO "+sueldoaumentado;
}
