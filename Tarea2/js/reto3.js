
window.onload = function() {
    document.getElementById("sitio").innerHTML = "<iframe src='https://science.nasa.gov' height='800px' width='1000px'></iframe>";

    document.getElementById("planeta").onchange = function(e) {

        let n = document.getElementById("planeta").value;

        let sitio = "<iframe src='https://science.nasa.gov/" + n + "/' height='800px' width='1000px'></iframe>";

    //salida de las imageemes y los textos informativos...
    document.getElementById("sitio").innerHTML = sitio;
    };
};
