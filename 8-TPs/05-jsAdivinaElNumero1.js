/* .AUTOR: TEJEDA ROBERTO
    ENUNCIADO: if else TP5    
Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
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
}
function verificar()
{
  numeroIngresado = document.getElementById("txtIdNumero").value;
  numeroIngresado =	parseInt(numeroIngresado);
  contadorIntentos = contadorIntentos + 1;
    if (numeroSecreto == numeroIngresado)
    {
      alerta = "Usted es un ganador!!! y en solo "+contadorIntentos+" intentos.";
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