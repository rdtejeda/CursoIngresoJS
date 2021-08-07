/*
AUTOR: TEJEDA ROBERTO
ENUNCIADO: solo switch P5

Enunciado:
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que dos le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
*/
function mostrar() {
    var continente;
    var dias;
    var preciopordia = 100;
    var mediodepago;
    var descuento;
    var costo;
    dias = parseInt(prompt("Ingreso cantidad de días"));
    mediodepago = parseInt(prompt("Ingrese metodo de pago 1-Debito; 2-MercadoPago; 3-Efectivo"));
    continente = document.getElementById("Marca").value;
    switch (continente) {
        case "América":
            descuento = 1 - 0.5;
            switch (mediodepago) {
                case 1:
                    descuento = descuento - 0.1;
                    break;
                default:
                    break;
            }
            break;
        case "África":
            descuento = 1 - 0.6;
            switch (mediodepago) {
                case 2:
                case 3:
                    descuento = descuento - 0.15
                    break;
                default:
                    break;
            }
            break;
        case "Europa":
            descuento = 1 - 0.2;
            switch (mediodepago) {
                case 1:
                    descuento = descuento - 0.15;
                    break;
                case 2:
                    descuento = descuento - 0.10;
                    break;
                default:
                    descuento = descuento - 0.05;
                    break;
            }
            break;
        case "Oceania":
        case "Asia":
            descuento = 1.2;
            break;
        default:
            break;
    }
    costo = dias * preciopordia * descuento;
    alert("EL COSTO ES " + costo);
}