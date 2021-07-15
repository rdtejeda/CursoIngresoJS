/*
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: if  Ej. 10

Enunciado:
Al presionar el Botón, asignar una nota RANDOM
al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar() 
{
	var nota;
	nota = parseInt(Math.random() * 10 + 1);
	if (nota >= 9) 
	{
		alert("EXCELENTE");
	}
	else if (nota < 9 && nota > 4) {
		alert("APROBÓ");
	}
	else 
	{
		alert("Vamos, la proxima se puede");
	}
}