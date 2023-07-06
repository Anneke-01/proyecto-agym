// Validación del local Storage
let nameUser = localStorage.getItem("name");
let emailUser = localStorage.getItem("correo");
const btnIniciarSesion = document.querySelector(".btn-iniciarsesion");
const btnRegistrarse = document.querySelector(".btn-registrarse");
const nombreUsuario = document.getElementById("nombre-usuario");
const SalirUsuario = document.getElementById("salir");

const form1 = document.getElementById("form-register-p1");
const emailInput1 = document.getElementById("email-register");
const nameInput1 = document.getElementById("name-register");
const apellidoInput1 = document.getElementById("apellido-register");
const contrasenaInput1 = document.getElementById("contrasena-register");

const modalRegistro = document.getElementById("modalRegistro");
const formRegistro = document.querySelector("#modalRegistro .form-register");


const formSes = document.getElementById("modalSes").querySelector(".form-sesion");
const modalSesNext1 = document.getElementById("modalSesionNext");
const emailRegistroPlaceholder = document.getElementById("email-registro-placeholder");
const emailInput2 = document.getElementById("email-sesion");
const emailSesionPlaceholder = document.getElementById("email-sesion-placeholder")
const contrasenaInput2 = document.getElementById("contrasena-sesion");

const formSesNext = document.getElementById("modalSesionNext").querySelector(".form-sesion");


if (nameUser != null || emailUser != null) {
    // nameUser = localStorage.getItem("name");
    console.log("Valor obtenido del localStorage:", nameUser);
    btnIniciarSesion.style.display = "none";
    btnRegistrarse.style.display = "none";
    nombreUsuario.style.display = "block";
    nombreUsuario.innerHTML += "<i class='fa-solid fa-user'></i>" + nameUser;
} else {
    btnIniciarSesion.style.display = "block";
    btnRegistrarse.style.display = "block";
    nombreUsuario.style.display = "none";
    SalirUsuario.style.display = "none"
}

SalirUsuario.addEventListener("click", function () {
    // Limpiar todo el contenido del localStorage
    localStorage.clear();
    nombreUsuario.style.display = "none";
    SalirUsuario.style.display = "none"
    window.location.href = "index.html";
});




form1.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = emailInput1.value;

    if (emailValue) {
        console.log("Bienvenido");
        modalRegistro.style.display = "block";
        console.log(emailInput1)
        emailRegistroPlaceholder.placeholder = emailValue;
    } else {
        modalRegistro.style.display = "none";
        alert("Por favor, ingrese su correo electrónico.");
    }
});

formRegistro.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameValue = nameInput1.value;
    const apellidoValue = apellidoInput1.value;
    const contrasenaValue = contrasenaInput1.value;
    console.log("Contraseña:", contrasenaValue);
    let nameUserR = "";
    if (nameValue && apellidoValue && contrasenaValue) {
        localStorage.setItem("name", nameValue);
        alert("¡Bienvenido o bienvenida a Nadsat Guide!");
        window.location.href = "index.html";
        nameUserR = localStorage.getItem("name");
    } else {
        alert("Por favor, debe llenar todos los datos.");
    }
    console.log("CSSS", nameUserR);
});

formSes.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInputSes = formSes.querySelector('input[type="email"]');
    const emailValueSes = emailInputSes.value;

    if (emailValueSes) {
        localStorage.setItem("correo", emailValueSes);
        modalSesNext1.style.display = "block";
        emailSesionPlaceholder.placeholder = emailInput2.value;
    } else {
        modalSesNext1.style.display = "none";
        alert("Por favor, ingrese su correo electrónico.");
    }
});


formSesNext.addEventListener("submit", function (event) {
    event.preventDefault();
    const contrasenaSesionValue = contrasenaInput2.value;
    console.log("Contraseña:", contrasenaSesionValue);
    let nameUserS = "";
    if (contrasenaSesionValue) {
        alert("¡Bienvenido o bienvenida a Nadsat Guide!");
        window.location.href = "index.html";
        nameUserS = localStorage.getItem("correo");
    } else {
        alert("Por favor, ingresa tu contraseña");
    }

});


