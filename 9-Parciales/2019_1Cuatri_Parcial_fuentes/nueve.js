/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar()
{
var seguir;
seguir="si";
var pais;
var habitantes;
var tempminima;
var canttempares;
canttempares=0;
var banderamenohabitantes;
banderamenohabitantes=true;
var paismenoshabitado;
paismenoshabitado=0;
var paisescalientes;
paisescalientes=0;
var habitantestotales;
habitantestotales=0;
var paisestotales;
paisestotales=0;
var promediohab;
var banderatempminima;
banderatempminima=true;
var tempminimima;
tempminimima=-50;
var paisfrio;
var numhabmenohabitado;

while (seguir == "si")
{
    pais=prompt("ingresar el nombre de un país");
    habitantes = prompt("cantidad de habitantes en millones entre 1 y 7000");
	habitantes = parseInt(habitantes);
    while (habitantes<1 || habitantes>7000)
	{
		habitantes = prompt("INGRESE valor en millones entre 1 y 7000 ");
		habitantes= parseInt(habitantes);		
	}
    tempminima=parseInt(prompt("temperaruta mínima que se registra en su territorio(entre -50 y 50)"));
    while (tempminima<-50 || tempminima>50)
	{
		tempminima = prompt("INGRESE valor entre -50 y 50");
		tempminima= parseInt(tempminima);		
	}
   // a) La cantidad de temperaturas pares.
   if (tempminima%2==0)
   {
       canttempares++
   }
   //b) El nombre del pais con menos habitantes
   if (banderamenohabitantes) //minimo
    {
        paismenoshabitado=pais;
        numhabmenohabitado=habitantes;
        banderamenohabitantes=false;
    }
    else
    {
        if (numhabmenohabitado>habitantes)
        {
            paismenoshabitado=pais;
        }
    
    }

    //c) la cantidad de paises que superan los 40 grados.
    if (tempminima>40) 
    {
        paisescalientes=paisescalientes+1;
    }
    //d) el promedio de habitantes entre los paises ingresados
    habitantestotales=habitantestotales+habitantes;
    paisestotales++;
    promediohab=habitantestotales/paisestotales;
//f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
    if (banderatempminima) 
    {
        tempminimima=tempminima;
        paisfrio=pais;
        banderatempminima=false;        
    }
    else
    {
        if (tempminima<tempminimima) 
        {
        tempminimima=tempminima;
        paisfrio=pais;
        }       
        
    }
    seguir=prompt("para contibnuar la carga 'si'");
}

document.write("La cantidad de temperaturas pares es "+canttempares+" ; El pais con menos habitantes es "+paismenoshabitado+
" ; La cantidad de paises que superan los 40 grados es "+paisescalientes+" ; el promedio de habitantes entre los paises ingresados es "+promediohab+
" ; la temperatura mínima ingresada es "+tempminimima+" y el pais que registro esa temperatura es"+paisfrio+"<br>");
}
