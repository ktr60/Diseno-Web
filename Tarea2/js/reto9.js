

function mostrar() {
    if(document.getElementById('radio1').checked == true) {
        animal1();
    }
    if(document.getElementById('radio2').checked == true) {
        animal2();
    }
    if(document.getElementById('radio3').checked == true) {
        animal3();
    }
    if(document.getElementById('radio4').checked == true) {
        animal4();
    }
}


function animal1() {
    Swal.fire({
        title: 'Perezoso',
        iconColor: '#3a7aa5',
        text: 'Es un mamífero placentario encontrado comúnmente en las selvas húmedas de Centro y Sudamérica. Se puede clasificar en dos grandes familias (de dos y tres dedos), a pesar que se conocen más de 50 géneros distintos. Reciben su nombre por pasar la mayor parte del día dormitando entre las ramas de los árboles.',
        imageUrl: "img/reto9/2.png",
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3d678f"
    })
}



function animal2() {
    Swal.fire({
        title: 'Jaguar ',
        text: 'Este felino ocupa el tercer puesto los más grandes del mundo. Pertenece a los carnívoros del género Panthera y es la única especie de este tipo que se encuentra en las selvas tropicales América Central y del Sur.',
        imageUrl: "img/reto9/3.png",
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3d678f"
    })
}



function animal3() {
    Swal.fire({
        title: 'Tortuga verde',
        text: 'En Costa Rica  se pueden observar 5 de las 7 especies de quelonios marinos que habitan en el mundo, entre ellas la tortuga verde. Esta es de gran tamaño y se distribuye en mares tropicales y subtropicales.',
        imageUrl: "img/reto9/4.png",
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3d678f"
    })
}




function animal4() {
    Swal.fire({
        title: 'Mono capuchino ',
        text: 'DPertenece al género Cebus de los primates, nativo principalmente de Centroamérica y del sur del continente.',
        imageUrl: "img/reto9/5.png",
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3d678f"
    })
}






function limpiar() {
    document.getElementById('radio1').checked = false;
    document.getElementById('radio2').checked = false;
    document.getElementById('radio3').checked = false;
    document.getElementById('radio4').checked = false;
    document.getElementById('radio5').checked = false;
}