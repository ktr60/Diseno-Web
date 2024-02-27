
window.onload = function() {
    //instruccion que carga logotipo principal
    document.getElementById("output-img").innerHTML = "<img src='img/reto6/1.png' class='img-fluid rounded' alt='logo' width='700px' />";

    //evento que permite cambiar el objrto onchange
    document.getElementById("color").onchange = function(e) {
        //destino del valor seleccionado por user
        let n = e.target.value;
        //expresiones que grabam las imagenes de los estadios e informacion
        // las fotos se denben guardar en subcarpeta
        let imagen = "<img src='img/reto6/" +n+ ".png' class='img-fluid rounded' alt='color' width='700px'/>";

    //salida de las imageemes y los textos informativos...
    document.getElementById("output-img").innerHTML = imagen;
    };
};

