const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev-btn');
const nextBtn = document.querySelector('.carousel-next-btn');

const itemWidth = carouselItems[0].offsetWidth;
const visibleItems = 6; // Número de elementos visibles en el carrusel

let currentIndex = 0;
let isRightButtonActive = true;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function toggleButtonVisibility() {
    prevBtn.style.display = isRightButtonActive ? 'none' : 'block';
    nextBtn.style.display = isRightButtonActive ? 'block' : 'none';
}

function handleNextButtonClick() {
    if (currentIndex < carouselItems.length - visibleItems) {
        currentIndex++;
        isRightButtonActive = false;
        updateCarousel();
        toggleButtonVisibility();
    }
}

function handlePrevButtonClick() {
    if (currentIndex > 0) {
        currentIndex--;
        isRightButtonActive = true;
        updateCarousel();
        toggleButtonVisibility();
    }
}

window.addEventListener('resize', () => {
    currentIndex = 0; // Reiniciar el índice al cambiar el tamaño de la ventana
    updateCarousel();
});

nextBtn.addEventListener('click', handleNextButtonClick);
prevBtn.addEventListener('click', handlePrevButtonClick);

toggleButtonVisibility();
