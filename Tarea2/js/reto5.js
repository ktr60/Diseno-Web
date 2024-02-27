"use strict"

document.getElementById("imagen").innerHTML = "<img src='img/reto5/auto.jpg' class='img-fluid img-thumbnail rounded' alt='auto' width='800vh' />";

//carga la function y declaro variables en cero
function determinarMontoFinal() {
    let modelo = '';
    let mes = 0;
    let costo = 0;
    let montoFinal =0;
    let imagen ='';


    //conversiones usando el metodo querySelector
    modelo = document.getElementById('modelo').value;
    mes= document.getElementById('mes').value;

    if (modelo =="" || mes =="") {
        swal.fire({
            icon: "error",
            title: "Atencion usuario",
            text: "No dejar campos vacios",
            confirmButtonColor: "#4c91cd",
        })
    }
    // ciclo de js para elegir opciones del equipo
    switch (modelo) {
        case '1':
            costo = 72000;
            imagen = 1;
            break;
        case '2':
            costo = 52000;
            imagen = 2;
            break;
        case '3':
            costo = 60000;
            imagen = 3;
            break;
        case '4':
            costo = 50000;
            imagen = 4;
            break;
        case '5':
            costo = 58000;
            imagen = 5;
            break;
        default:
            costo = 0;
            break;
    }


    //calculos
    montoFinal= costo/mes
    montoFinal = Math.round(montoFinal)

    //asigancion de valor a la variable del monto final.
    document.getElementById('txtResultadoMontoFinal').value = "$" + montoFinal;
    document.getElementById('imagen').innerHTML = "<img src='img/reto5/" + imagen + ".png' class='img-fluid img-thumbnail rounded' alt='auto' width='700vh'/>";

}

function btnlimpiar() {
    document.getElementById('modelo').value = "";
    document.getElementById('mes').value = "";
    document.getElementById('txtResultadoMontoFinal').value = "";
    document.getElementById("imagen").innerHTML = "<img src='img/reto5/auto.jpg' class='img-fluid img-thumbnail rounded' alt='auto' width='800vh' />";
}