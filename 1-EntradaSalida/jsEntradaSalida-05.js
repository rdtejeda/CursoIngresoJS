/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var edad;
	var nombre;
	var respuesta="";

	edad=document.getElementById("txtIdEdad").value;
	nombre=document.getElementById("txtIdNombre").value;

	respuesta="Usted se llama ";
	respuesta=respuesta+nombre;
	respuesta=respuesta+" y tiene ";
	respuesta=respuesta+edad;

	alert(respuesta);
}

