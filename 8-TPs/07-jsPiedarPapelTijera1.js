/* .AUTOR: TEJEDA ROBERTO
    ENUNCIADO: if else TP7 

Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var alerta;

function comenzar()
{	
    eleccionMaquina = Math.random();
    eleccionMaquina =  eleccionMaquina*3;
    eleccionMaquina = parseInt(eleccionMaquina)+1;
    alert(eleccionMaquina);
}
function piedra() //1
{
    switch (eleccionMaquina)
    {
        case 1:
            alerta = "empató";
            break;
        case 2:
            alerta = "perdió";
            break;
        case 3:
            alerta = "ganó";
            break;
        default:
            break;
    }
    alert(alerta);
}
function papel() //2
{
    switch (eleccionMaquina)
    {
        case 2:
            alerta = "empató";
            break;
        case 3:
            alerta = "perdió";
            break;
        case 1:
            alerta = "ganó";
            break;
        default:
            break;
    }
    alert(alerta);
}
function tijera() //3
{
    switch (eleccionMaquina)
    {
        case 3:
            alerta = "empató";
            break;
        case 1:
            alerta = "perdió";
            break;
        case 2:
            alerta = "ganó";
            break;
        default:
            break;
    }
    alert(alerta);
}