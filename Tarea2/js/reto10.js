
function evaluar() {
    if(document.getElementById('cedula').value == 105130038) {
        cliente1();
        limpiar()
    } else {
        if(document.getElementById('cedula').value == 205130038) {
        cliente2();
        limpiar()
    } else {
        if(document.getElementById('cedula').value == 305130038) {
        cliente3();
        limpiar()
    } else {
        if(document.getElementById('cedula').value == 405130038) {
        cliente4();
        limpiar()
    } else {
        error()
    }
    }
    }
    }
}
                                             

function cliente1() {
    Swal.fire({
        text: 'Esteban',
        imageUrl: "img/reto10/2.jpg",
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3d678f"
    })
}



function cliente2() {
    Swal.fire({
        text: 'Carolina',
        imageUrl: "img/reto10/3.jpg",
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3d678f"
    })
}



function cliente3() {
    Swal.fire({
        text: 'Jose Pablo',
        imageUrl: "img/reto10/4.jpg",
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3d678f"
    })
}




function cliente4() {
    Swal.fire({
        text: 'Miranda',
        imageUrl: "img/reto10/5.jpg",
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3d678f"
    })
}


function error() {
    Swal.fire({
        icon: 'alert',
        text: '¡Usuario no Existe!',
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3d678f"
    })
}



function limpiar() {
    document.getElementById('cedula').value = " ";
}