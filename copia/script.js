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
