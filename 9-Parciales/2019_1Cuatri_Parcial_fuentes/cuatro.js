/*
AUTOR: TEJEDA ROBERTO
ENUNCIADO: switch P4

Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/
function mostrar() {
    var primernumero;
    var segundonumero;
    var resultado;
    primernumero = prompt("Ingrese el Primer Numero");
    segundonumero = prompt("Ingrese el Segundo Numero");
    if (primernumero == segundonumero) {
        resultado = primernumero + segundonumero;
    }
    else {
        primernumero = parseInt(primernumero);
        segundonumero = parseInt(segundonumero);
        if (primernumero > segundonumero) {
            resultado = primernumero - segundonumero;
            if (resultado > 10) {
                resultado = "La resta es " + resultado + " y supero el 10";
            }
        }
        else {
            resultado = primernumero + segundonumero;
        }
    }
    alert(resultado);
}