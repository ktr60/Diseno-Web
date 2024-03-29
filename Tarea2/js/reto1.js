
document.getElementById("btn-login").addEventListener("click", login);



function validation_alert(ptext) {
    swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#2e4e6b",
        html: '<iframe src="https://embed.lottiefiles.com/animation/62623"></iframe> <br><p>' + ptext + " </p>",
    });
}

function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer:2000,
                html: '<iframe width="320" height="240" src="https://lottie.host/?file=2111a79b-641a-40cd-8d59-fdc227c6eed7/1EDniFv5HA.json"></iframe> <br><br><p>Un momento!</p>',

            }).then(() => {
                window.location.href = "https://ucenfotec.ac.cr/", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            validation_alert(text);
        }
    }
}


const rmCheck = document.getElementById("rememberMe"),
 emailInput = document.getElementById("in-txt-user");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

document.getElementById("rememberMe").addEventListener("click", lsRememberMe);

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}