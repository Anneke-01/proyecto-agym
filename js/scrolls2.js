const imageContainer = document.querySelector('.box-container2');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const scrollAmount = 350; // Cantidad de desplazamiento en píxeles

prevButton.addEventListener('click', () => {
    imageContainer.scrollBy(-scrollAmount, 0);
});

nextButton.addEventListener('click', () => {
    imageContainer.scrollBy(scrollAmount, 0);
});


const imageContainer3 = document.querySelector('.box-container3');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

const scrollAmount3 = 350; // Cantidad de desplazamiento en píxeles

leftButton.addEventListener('click', () => {
    imageContainer3.scrollBy(-scrollAmount3, 0);
});

rightButton.addEventListener('click', () => {
    imageContainer3.scrollBy(scrollAmount3, 0);
});