
window.onload = function() {
    //instruccion que carga logotipo principal
    document.getElementById("output-img").innerHTML = "<img src='img/combo/logo.jpg' class='img-fluid img-thumbnail rounded' alt='logo' />";

    //evento que permite cambiar el objrto onchange
    document.getElementById("provincia").onchange = function(e) {
        //destino del valor seleccionado por user
        let n = e.target.value;
        //expresiones que grabam las imagenes de los estadios e informacion
        // las fotos se denben guardar en subcarpeta
        let imagen = "<img src='img/combo/" +n+ ".jpg' class='img-fluid img-thumbnail rounded' alt='provincia' />";
        let text = ["San José - 340.000 habitantes",
            "Alajuela - 305.000 habitantes",
            "Cartago - 160.000 habitantes",
            "Heredia - 138.000 habitantes",
            "Puntarenas - 134.000 habitantes",
            "Guanacaste - 354.000 habitantes",
            "Limón - 98.000 habitantes",
    ];
    //salida de las imageemes y los textos informativos...
    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-txt").innerHTML = text[n - 1];
    };
};

//function del boton reiniciar
document.getElementById("btn-clean").onclick = function() {
    document.getElementById("output-img").innerHTML = "<img src='img/combo/logo.jpg' class='img-fluid img-thumbnail rounded' alt='logo' />";
    //limoia los textos informativos de los estadios...
    document.getElementById("output-txt").innerHTML = "";
    //dejar el select con el tecto por defecto
    document.getElementById("provincia").value = "";

};