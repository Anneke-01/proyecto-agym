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
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
    isModalActive = true;
    disableMenu();
});

closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    isModalActive = false;
    enableMenu();
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        isModalActive = false;
        enableMenu();
    }
});



menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    disableMenu();
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    enableMenu();
};

function disableMenu() {
    if (isModalActive) {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
}

function enableMenu() {
    if (!isModalActive) {
        menu.classList.add('fa-times');
        navbar.classList.add('active');
    }
}
