/* 
	AUTOR: TEJEDA ROBERTO
	ENUNCIADO: E/S Ej. 4

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var respuesta;

	nombre=prompt("Ingrese su nombre")
	respuesta="Su nombre es: " + nombre;
    
	document.getElementById("txtIdNombre").value = respuesta;
}

