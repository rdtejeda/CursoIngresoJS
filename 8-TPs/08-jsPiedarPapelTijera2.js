/* .AUTOR: TEJEDA ROBERTO
    ENUNCIADO: if else TP 8


Enunciado:
3. Piedra, Papel o Tijera (v 2.0):
Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página
*/
var eleccionMaquina;
var alerta;
var ContadorDeEmpates;
var ContadorDeGanadas;
var ContadorDePerdidas;

ContadorDeEmpates = 0;
ContadorDeGanadas = 0;
ContadorDePerdidas = 0;

function comenzar()
{	
    eleccionMaquina = Math.random();
    eleccionMaquina = eleccionMaquina*3;
    eleccionMaquina = parseInt(eleccionMaquina)+1;
    //alert(eleccionMaquina);
}
function piedra() //1
{
    switch (eleccionMaquina)
    {
        case 1:
            alerta = "empató";
			ContadorDeEmpates = ContadorDeEmpates + 1;
            break;
        case 2:
            alerta = "perdió";
			ContadorDePerdidas = ContadorDePerdidas + 1;
            break;
        case 3:
            alerta = "ganó";
			ContadorDeGanadas = ContadorDeGanadas + 1;
			break;
        default:
            break;
    }
    alert(alerta);
	document.getElementById("txtIdGanadas").value ="Juegos ganados "+ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value ="Juegos perdidos "+ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value ="Juegos empatados "+ContadorDeEmpates;
}
function papel() //2
{
    switch (eleccionMaquina)
    {
        case 2:
            alerta = "empató";
			ContadorDeEmpates = ContadorDeEmpates + 1;
            break;
        case 3:
            alerta = "perdió";
			ContadorDePerdidas = ContadorDePerdidas + 1;
            break;
        case 1:
            alerta = "ganó";
			ContadorDeGanadas = ContadorDeGanadas + 1;
            break;
        default:
            break;
    }
    alert(alerta);
	document.getElementById("txtIdGanadas").value ="Juegos ganados "+ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value ="Juegos perdidos "+ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value ="Juegos empatados "+ContadorDeEmpates;
}
function tijera() //3
{
    switch (eleccionMaquina)
    {
        case 3:
            alerta = "empató";
			ContadorDeEmpates = ContadorDeEmpates + 1;
            break;
        case 1:
            alerta = "perdió";
			ContadorDePerdidas = ContadorDePerdidas + 1;
            break;
        case 2:
            alerta = "ganó";
			ContadorDeGanadas = ContadorDeGanadas + 1;
            break;
        default:
            break;
    }
    alert(alerta);
	document.getElementById("txtIdGanadas").value ="Juegos ganados "+ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value ="Juegos perdidos "+ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value ="Juegos empatados "+ContadorDeEmpates;
}
function mostrarResultado()
{
	//document.getElementById("txtIdGanadas").value ="Juegos ganados "+ContadorDeGanadas;
	//document.getElementById("txtIdPerdidas").value ="Juegos perdidos "+ContadorDePerdidas;
	//document.getElementById("txtIdEmpatadas").value ="Juegos empatados "+ContadorDeEmpates;
}