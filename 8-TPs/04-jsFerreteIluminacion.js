/*4.AUTOR: TEJEDA ROBERTO
    ENUNCIADO: if else TP4
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta
al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

/*TP 04 solo if
AUTOR: TEJEDA ROBERTO
ENUNCIADO: if else TP4*/
function CalcularPrecio() 
{
    var valorUnidad;
    var cantidad;
    var marca;
    var descuento = 0;
    var precioDescuento;
    var ingresosBruto;
    var precioMasIB;
    valorUnidad = parseInt(35);
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    if (cantidad > 5)
        {
        descuento = 0.5;
        }
    if (cantidad == 5) 
        {
            if (marca == "ArgentinaLuz") 
            {
            descuento = 0.4;
            }
            else 
            {
            descuento = 0.3;
            }
        }
    if (cantidad == 4)
        {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
            descuento = 0.25;
            }
            else 
            {
            descuento = 0.2;
            }
        }
    if (cantidad == 3)
        {
            if (marca == "ArgentinaLuz")
            {
                descuento = 0.15;
            }
            else
            {
                if (marca == "FelipeLamparas") 
                {
                descuento = 0.1;
                }
                else 
                {
                descuento = 0.05;
                }
            }
        }
    precioDescuento = cantidad * valorUnidad * (1 - descuento);
    if (precioDescuento < 120) 
        {
        document.getElementById("txtIdprecioDescuento").value = "Precio con descuento $" + precioDescuento;
        }
    else 
        {
        ingresosBruto = precioDescuento * 0.1;
        precioMasIB = precioDescuento + ingresosBruto;
        document.getElementById("txtIdprecioDescuento").value = "Precio con descuento $" + precioMasIB;
        alert("Usted pago $" + ingresosBruto + " de IIBB.");
        }
}

/*TP 04 solo switch
AUTOR: TEJEDA ROBERTO
ENUNCIADO: if else TP4
function CalcularPrecio() {
    var valorUnidad;
    var cantidad;
    var marca;
    var descuento = 0;
    var precioDescuento;
    var ingresosBruto;
    var precioMasIB;
    valorUnidad = parseInt(35);
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    switch (cantidad) {
        case 1:
        case 2:
            break;
        case 3:
            switch (marca) 
            {
                case "ArgentinaLuz":
                    descuento = 0.15;
                    break;
                case "FelipeLamparas":
                    descuento = 0.1;
                    break;
                default:
                    descuento = 0.05;
                    break;
            }
            break;
        case 4:
            switch (marca) 
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 0.25;
                    break;
                default:
                    descuento = 0.2;
                    break;
            }
            break;
        case 5:
            switch (marca) {
                case "ArgentinaLuz":
                    descuento = 0.4;
                    break;
                default:
                    descuento = 0.3;
                    break;
            }
            break;
        default:
                descuento = 0.5;
                break;          
    }
    precioDescuento = cantidad * valorUnidad * (1 - descuento);
    if (precioDescuento < 120) {
        document.getElementById("txtIdprecioDescuento").value = "Precio con descuento $" + precioDescuento;
    }
    else {
        ingresosBruto = precioDescuento * 0.1;
        precioMasIB = precioDescuento + ingresosBruto;
        document.getElementById("txtIdprecioDescuento").value = "Precio con descuento $" + precioMasIB;
        alert("Usted pago $" + ingresosBruto + " de IIBB.");
    }
}*/

/* TP 04 if de cantidad swicth de marca
AUTOR: TEJEDA ROBERTO
ENUNCIADO: if else TP4
function CalcularPrecio() {
    var valorUnidad;
    var cantidad;
    var marca;
    var descuento = 0;
    var precioDescuento;
    var ingresosBruto;
    var precioMasIB;
    valorUnidad = parseInt(35);
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    if (cantidad > 5) 
        {
        descuento = 0.5;
        }
    if (cantidad == 5) 
        {
            switch (marca) 
            {
            case "ArgentinaLuz":
                descuento = 0.4;
                break;
            default:
                descuento = 0.3;
                break;
            }
        }
    if (cantidad == 4) 
        {
            switch (marca) 
            {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento = 0.25;
                break;
            default:
                descuento = 0.2;
                break;
            }
        }
    if (cantidad == 3) 
        {
        switch (marca) 
            {
            case "ArgentinaLuz":
                descuento = 0.15;
                break;
            case "FelipeLamparas":
                descuento = 0.1;
                break;
            default:
                descuento = 0.05;
                break;
            }
        }
    precioDescuento = cantidad * valorUnidad * (1 - descuento);
    if (precioDescuento < 120) 
        {
        document.getElementById("txtIdprecioDescuento").value = "Precio con descuento $" + precioDescuento;
        }
    else 
        {
        ingresosBruto = precioDescuento * 0.1;
        precioMasIB = precioDescuento + ingresosBruto;
        document.getElementById("txtIdprecioDescuento").value = "Precio con descuento $" + precioMasIB;
        alert("Usted pago $" + ingresosBruto + " de IIBB.");
        }
}*/

/*TP 04 switch de cantidad if de marca
AUTOR: TEJEDA ROBERTO
ENUNCIADO: if else TP4
function CalcularPrecio() {
    var valorUnidad;
    var cantidad;
    var marca;
    var descuento = 0;
    var precioDescuento;
    var ingresosBruto;
    var precioMasIB;
    valorUnidad = parseInt(35);
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
     switch (cantidad)
    {
        case 1:
        case 2:
            break;
        case 3:
            if (marca == "ArgentinaLuz")
            {
                descuento = 0.15;
            }
            else
            {
                if (marca == "FelipeLamparas") 
                {
                descuento = 0.1;
                }
                else 
                {
                descuento = 0.05;
                }
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = 0.25;
                }
            else 
                {
                descuento = 0.2;
                }
            break;
        case 5:
            if (marca == "ArgentinaLuz") 
            {
                descuento = 0.4;
            }
                else 
                {
                descuento = 0.3;
                }
            break;
        default:
            descuento = 0.5;
            break;
    }
    precioDescuento = cantidad * valorUnidad * (1 - descuento);
    if (precioDescuento < 120) 
    {
        document.getElementById("txtIdprecioDescuento").value = "Precio con descuento $" + precioDescuento;
    }
    else 
    {
        ingresosBruto = precioDescuento * 0.1;
        precioMasIB = precioDescuento + ingresosBruto;
        document.getElementById("txtIdprecioDescuento").value = "Precio con descuento $" + precioMasIB;
        alert("Usted pago $" + ingresosBruto + " de IIBB.");
    }
}*/