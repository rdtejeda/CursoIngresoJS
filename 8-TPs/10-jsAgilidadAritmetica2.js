/*.AUTOR: TEJEDA ROBERTO
    ENUNCIADO: if else TP 10
    Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

 var eleccionMaquina1;
 var eleccionMaquina2; 
 var respuesta;
 var operacionAleatoria;
 var operador;
 var segundos;
 
 segundos =0;
 setInterval(sumarSegundos,1000);
 segundos = segundos+sumarSegundos;


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
     alert(eleccionMaquina2);
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