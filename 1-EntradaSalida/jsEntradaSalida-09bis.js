/*

	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S Ej. 9bis

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentajedeaumento;
	var sueldoaumentado;

	sueldo=parseInt(document.getElementById("txtIdSueldo").value);

	porcentajedeaumento= parseInt(prompt("ingrese porcetaje de aumento "));

	sueldoaumentado=sueldo+(sueldo*porcentajedeaumento/100);

	document.getElementById("txtIdResultado").value = "RESULTADO "+sueldoaumentado;
}