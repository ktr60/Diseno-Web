$("#r0").click(function() {
    Swal.fire({
        title: 'Sol',
        imageUrl: 'img/reto7/sol.jpg',
        imageWidth: 200,
        text: 'El Sol es una estrella situada en el centro del sistema solar y es esencial para la vida en la Tierra. Se trata de una estrella de tipo espectral G2V, lo que significa que pertenece a la secuencia principal y es una estrella enana amarilla. El Sol es una esfera de plasma compuesta principalmente de hidrógeno y helio, y su temperatura en su núcleo alcanza alrededor de 15 millones de grados Celsius, donde se lleva a cabo la fusión nuclear que genera la inmensa cantidad de energía que irradia al espacio en forma de luz y calor. ',
        confirmButtonColor: '#4c91cd',
        confirmButtonText: 'Cerrar',
    });
});



$("#r1").click(function() {
    Swal.fire({
        title: 'Mercurio',
        imageUrl: 'img/reto7/mercurio.jpg',
        imageWidth: 200,
        textAlign: 'right',
        iconColor: '#4c91cd',
        position: 'center',
        confirmButtonColor: '#4c91cd',
        confirmButtonText: 'Cerrar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated bounceIn',
        },
        hideClass: {
            popup: 'animated bounceOut',
        },
        showCloseButton: true,
        html: 'Mercurio es el planeta más cercano al Sol y, debido a su falta de atmósfera significativa, experimenta las mayores fluctuaciones de temperatura en todo el sistema solar, con extremos que van desde el calor abrasador durante el día hasta fríos extremos durante la noche.'
           
    });
});



$("#r2").click(function() {
    Swal.fire({
        imageUrl: 'img/reto7/venus.jpg',
        imageWidth: 200,
        title: 'Venus',
        confirmButtonColor: '#4c91cd',
        showClass: {
            popup: 'animated zoomIn',
        },
        hideClass: {
            popup: 'animated zoomOut',
        },
        text: 'Venus es conocido como el "planeta gemelo" de la Tierra debido a su tamaño y composición similares, pero su atmósfera densa y tóxica lo convierte en el mundo más caliente de nuestro sistema solar.',

    });
});




$("#r3").click(function() {
    Swal.fire({
        title: 'Marte',
        imageUrl: 'img/reto7/marte.jpg',
        position: 'center',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#4c91cd',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated fadeInDown',
        },
        hideClass: {
            popup: 'animated fadeOutUp',
        },
        showCloseButton: true,
        html: 'Marte, a menudo llamado el "Planeta Rojo" debido a su característico color, ha sido objeto de un intenso interés científico y exploración espacial debido a la posibilidad de encontrar evidencia de agua y vida pasada en su superficie.'
           
    });
});





$("#r4").click(function() {
    Swal.fire({
        title: 'Urano',
        text: 'Urano es un planeta gigante de hielo que se destaca por su inclinación extrema, girando casi de lado en comparación con otros planetas del sistema solar, lo que le confiere un comportamiento orbital único y un aspecto distintivo en el sistema solar.',
        imageUrl: 'img/reto7/urano.jpg',
        imageWidth: 200,
        confirmButtonColor: '#4c91cd',
    });
});



$("#r5").click(function() {
    Swal.fire({
        title: 'Pluto',
        imageUrl: 'img/reto7/pluto.jpg',
        imageWidth: 200,
        confirmButtonColor: '#4c91cd',
        text: 'Pluto, anteriormente considerado el noveno planeta del sistema solar, ahora se clasifica como un planeta enano debido a su tamaño relativamente pequeño y su órbita excéntrica que lo lleva a cruzar el camino de Neptuno.',
        timer: 5000,
        onOpen: function() {
            swal.showLoading()
        }
    }).then(
        function() {},
        function(dismiss) {
            if (dismiss === 'timer') {
                console.log('Desplegable cerrada')
            }
        }
    )
});