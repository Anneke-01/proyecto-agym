function scrollLeft() {
    var container = document.querySelector('.image-container');
    container.scrollBy({ left: -200, behavior: 'smooth' }); // Adjust the scroll distance as needed
}

function scrollRight() {
    var container = document.querySelector('.image-container');
    container.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust the scroll distance as needed
}