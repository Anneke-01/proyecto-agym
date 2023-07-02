// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header .navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');


// };

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// };







const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementsByClassName("close")[0];
let isModalActive = false;

openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
    isModalActive = true;
    disableMenu();
});

closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    isModalActive = false;
    // enableMenu();
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        isModalActive = false;
        // enableMenu();
    }
});


const openModalBtnReg = document.getElementById("openModalReg");
const modalReg = document.getElementById("modalRegistro")
let isModalRegActive = false;
const closeModalRegBtn = document.getElementsByClassName("closeReg")[0];
openModalBtnReg.addEventListener("click", function () {
    modalReg.style.display = "block";
    isModalRegActive = true;
})
closeModalRegBtn.addEventListener("click", function () {
    modalReg.style.display = "none";
    isModalRegActive = false;
});

const openModalBtnSes = document.getElementById("openModalSes");
const modalSes = document.getElementById("modalSes");
let isModalSesActive = false;
const closeModalSesBtn = document.getElementsByClassName("closeSes")[0];

openModalBtnSes.addEventListener("click", function () {
    console.log("Open modal button clicked");
    modalSes.style.display = "block";
    isModalSesActive = true;
    disableMenu();
});

closeModalSesBtn.addEventListener("click", function () {
    modalSes.style.display = "none";
    isModalSesActive = false;
});

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    disableMenu();
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    // enableMenu();
};

function disableMenu() {
    if (isModalActive || isModalSesActive) {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
}

function enableMenu() {
    if (!isModalActive || !isModalSesActive) {
        menu.classList.add('fa-times');
        navbar.classList.add('active');
    }
}
