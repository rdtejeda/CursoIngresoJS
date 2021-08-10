/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/

function mostrar()
{
    var seguir;
    seguir="si";
    var letra;
    var numero;
    var cantidaddepares;
    cantidaddepares=0;
    var cantidaddeimpares;
    cantidaddeimpares=0;
    var cantidaddeceros;
    cantidaddeceros=0;
    var contarpositivos;
    contarpositivos=0;
    var sumarpositivos;
    sumarpositivos=0;
    var promediodepostivos;
    var sumadenegativos;
    sumadenegativos=0;
    var banderamaximo;
    banderamaximo=true;
    var banderaminimo;
    banderaminimo=true;
    var numeromax;
    var   letramax;
    var numeromin;
    var letramin;

    while (seguir == "si")
    {
        //letra
        letra= prompt("Ingrese una letra ");
        while (letra.length<1 || letra.length>1) 
          {
            letra= prompt("ERROR Ingrese una letra");
          }      
        //Numero un número entre -100 y 100
        numero = prompt("Ingrese  un número entre -100 y 100");
        numero = parseInt(numero);
        while( numero<-100 || numero>100)
         {
            numero = prompt("ERROR - Ingrese un número entre -100 y 100");
            numero = parseInt(numero);    
         }

         //a) La cantidad de números pares.
         if(numero%2 == 0)
         {
            cantidaddepares++
         }
         if (numero%2 == 1)
         {
           cantidaddeimpares++  
         }
         
        //d) El promedio de todos los números positivos ingresados.
         if (numero>0) 
         {
             contarpositivos++
             sumarpositivos=sumarpositivos+numero;
         } 
         else
             {
                if (numero<0)// e) La suma de todos los números negativos.
                {
                    sumadenegativos=sumadenegativos+numero;
                } 
                else
                {
                     cantidaddeceros++ //c) La cantidad de ceros.
                }
             }
      
        if (banderaminimo) //f) El número y la letra del máximo y el mínimo.
                   {
                       banderaminimo=false;
                       numeromin=numero;
                        letramin=letra;
                     
                   } 
                    else 
                      {
                          if (numero<numeromin) 
                          {
                            numeromin=numero;
                            letramin=letra;
                          }
                      }

             if (banderamaximo) 
                   {
                       banderamaximo=false;
                       numeromax=numero;
                       letramax=letra;
                   } 
                    else 
                      {
                          if (numero>numeromax) 
                          {
                            numeromax=numero;
                            letramax=letra;
                          }
                      }

     seguir=prompt("Para seguir ingrese 'si' y para terminar 'no'");
     while (seguir!="si" && seguir!="no") 
     {
       seguir=prompt("ERROR - Para seguir ingrese 'si' y para terminar 'no'");
     }
    }
promediodepostivos=sumarpositivos/contarpositivos;
	alert("a) La cantidad de números pares ingresados fuero "+cantidaddepares);
	alert("b) La cantidad de números impares es "+cantidaddeimpares);
	alert("//c) La cantidad de ceros es "+cantidaddeceros);
    alert("d) El promedio de todos los números positivos ingresados es "+promediodepostivos);
    alert("e) La suma de todos los números negativos es "+sumadenegativos);
    alert("f) El número y la letra del máximo son "+numeromax+" y "+letramax+" y el mínimo son "+numeromin+" y "+letramin);
   // document.write("");

  /*
  if (var !=0)
  {
    alert("");
  }
  */
  
	/*
	if (!(isNaN(var)))
	{
	alert("");
	}
	*/		
}