/*AUTOR: TEJEDA ROBERTO
	ENUNCIADO: wile  Ej. 1

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var mostrarnumero;
	mostrarnumero = 0;

	while (mostrarnumero<10) 
	{
		mostrarnumero=mostrarnumero+1;
		document.write(mostrarnumero);		
	}
}
	/*	VALIDACION
	var password;
	password=prompt("ingrese clave");//1 inicio el valor

	while(password!="holamundo")//2 logica
	{
		password=prompt("error ,ingrese clave"); //3 modificacion de variable
	}
	alert("bienvenido")
	*/
	
	/* CONTADOR
	var contadorDeVueltas;
	
	contadorDeVueltas=0 //1 inicio valor
	while (contadorDeVueltas<3) // 2 la logica
	{
		contadorDeVueltas=contadorDeVueltas+1; //3 modi logica
		console.log(contadorDeVueltas);
	}
	console.log("el final es:"+contadorDeVueltas);
	*/
	/*
	var respuesta;
	respuesta="si"; //1
	while (respuesta=="si") //2
	{
		respuesta=prompt("si para continuar");	//3
	}
	*/
//FIN DE LA FUNCIÓN