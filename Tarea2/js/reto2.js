function pago() {
    //variables
    var nombre = document.getElementById("nombre").value;
    var art = document.getElementById("art").value;
    var cant = document.getElementById("cant").value;
    var precio = document.getElementById("precio").value;

    //validacion campos blanco
    if (art== "" || cant =="" || nombre== "" || precio == "") {
        swal.fire({
            icon: "error",
            title: "Atencion usuario",
            text: "No dejar campos vacios"
        })
    } else {

        //Calculos y resultados
        var subtotal= cant * precio;
        var iva= subtotal * 0.13;
        var servicio= subtotal * 0.05;
        var total = subtotal + iva + servicio;
        

        document.getElementById("nombreE").innerHTML = " " + nombre;
        document.getElementById("artE").innerHTML = " " + art;
        document.getElementById("cantE").innerHTML = " " + cant;
        document.getElementById("precioE").innerHTML = " " + precio;
        document.getElementById("subtotalE").innerHTML = " " + subtotal;
        document.getElementById("ivaE").innerHTML = " " + iva;
        document.getElementById("servicioE").innerHTML = " " + servicio;
        document.getElementById("totalE").innerHTML = " " + total;

    }
}

function btnLimpiar() {
    document.getElementById("nombre").value = " ";
    document.getElementById("cant").value = " ";
    document.getElementById("art").value = " ";
    document.getElementById("precio").value = " ";
    document.getElementById("nombreE").innerHTML = " ";
    document.getElementById("artE").innerHTML = " ";
    document.getElementById("cantE").innerHTML = " ";
    document.getElementById("precioE").innerHTML = " ";
    document.getElementById("subtotalE").innerHTML = " ";
    document.getElementById("ivaE").innerHTML = " ";
    document.getElementById("servicioE").innerHTML = " ";
    document.getElementById("totalE").innerHTML = " ";

}