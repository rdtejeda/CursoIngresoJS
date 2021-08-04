/*	 .AUTOR: TEJEDA ROBERTO
    ENUNCIADO: if else TP6 

En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var alerta;
contadorIntentos = 0;
numeroIngresado = 0;
function comenzar()
{
  numeroSecreto = Math.random();
  numeroSecreto = numeroSecreto*100;
  numeroSecreto = parseInt(numeroSecreto)+1;
  alert(numeroSecreto);
}
function verificar()
{
  numeroIngresado = document.getElementById("txtIdNumero").value;
  numeroIngresado =	parseInt(numeroIngresado);
  contadorIntentos = contadorIntentos + 1;
      if (numeroSecreto == numeroIngresado)
    {
      switch (contadorIntentos)
	  {
		case 1:
			alerta = "usted es un Psíquico";		  
			break;
		case 2:
			alerta = "excelente percepción";
			break;
		case 3:
			alerta = "Esto es suerte";
			break;
		case 4:
			alerta = "Excelente técnica";
			break;
		case 5:
			alerta = "usted está en la media";
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alerta = "falta técnica";
			break;
		default:
			alerta = "afortunado en el amor!!"
			  break;
	  }
  document.getElementById("txtIdIntentos").value = contadorIntentos;
    } 
      else
      {
        if (numeroIngresado<numeroSecreto) 
        {
          alerta = "Falta para llegar al numero secreto";
        } else
        {
          alerta = "se paso";
        }
      }

    alert(alerta);
}