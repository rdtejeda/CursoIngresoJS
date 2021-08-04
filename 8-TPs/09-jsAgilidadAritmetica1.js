/* .AUTOR: TEJEDA ROBERTO
    ENUNCIADO: if else TP 9

Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var eleccionMaquina1;
var eleccionMaquina2; 
var respuesta;
var operacionAleatoria;
var operador;

function comenzar()
{
    eleccionMaquina1 = Math.random(); //selección primer número
    eleccionMaquina1 = eleccionMaquina1*10;
    eleccionMaquina1 = parseInt(eleccionMaquina1)+1;
    // alert(eleccionMaquina1);
    document.getElementById("txtIdPrimerNumero").value ="Priemer número es "+eleccionMaquina1;
   
    eleccionMaquina2 = Math.random(); //seleccción segundo número
    eleccionMaquina2 = eleccionMaquina2*10;
    eleccionMaquina2 = parseInt(eleccionMaquina2)+1;
    // alert(eleccionMaquina2);
    document.getElementById("txtIdSegundoNumero").value ="Segundo número es "+eleccionMaquina2;

    operador = Math.random(); //selección operador
    operador = operador*4;
    operador =parseInt(operador)+1;
    // alert(operador);
        switch (operador)
        {
            case 1:
                operacionAleatoria = eleccionMaquina1+eleccionMaquina2;
                document.getElementById("txtIdOperador").value ="SUMA";
                break;
            case 2:
                operacionAleatoria = eleccionMaquina1-eleccionMaquina2;
                document.getElementById("txtIdOperador").value ="RESTA";
                break;
            case 3:
                operacionAleatoria = eleccionMaquina1*eleccionMaquina2;
                document.getElementById("txtIdOperador").value ="MULTIPLICACIÓN";
                break;
            case 4:
                operacionAleatoria = eleccionMaquina1/eleccionMaquina2;
                document.getElementById("txtIdOperador").value ="DIVISÓN";
                break;
            default:
                break;
        }  
}
function Responder()
{
    respuesta = document.getElementById("txtIdRespuesta").value;
    //respuesta = parseInt(respuesta);
    if (respuesta == operacionAleatoria)
        {
            alert("El resultado es correcto");
        }
        else
        {
            alert("no es correcto");
        }
}