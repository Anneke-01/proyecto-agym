function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    var arrowIcon = document.getElementById("arrow-icon");

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        arrowIcon.classList.remove("fa-chevron-up");
        arrowIcon.classList.add("fa-chevron-down");
    } else {
        dropdownContent.style.display = "block";
        arrowIcon.classList.remove("fa-chevron-down");
        arrowIcon.classList.add("fa-chevron-up");
    }
}

function toggleDropdown2() {
    var dropdownContent2 = document.getElementById("dropdown-content2");
    var arrowIcon2 = document.getElementById("arrow-icon2");

    if (dropdownContent2.style.display === "block") {
        dropdownContent2.style.display = "none";
        arrowIcon2.classList.remove("fa-chevron-up");
        arrowIcon2.classList.add("fa-chevron-down");
    } else {
        dropdownContent2.style.display = "block";
        arrowIcon2.classList.remove("fa-chevron-down");
        arrowIcon2.classList.add("fa-chevron-up");
    }
}

function toggleDropdown3() {
    var dropdownContent3 = document.getElementById("dropdown-content3");
    var arrowIcon3 = document.getElementById("arrow-icon3");

    if (dropdownContent3.style.display === "block") {
        dropdownContent3.style.display = "none";
        arrowIcon3.classList.remove("fa-chevron-up");
        arrowIcon3.classList.add("fa-chevron-down");
    } else {
        dropdownContent3.style.display = "block";
        arrowIcon3.classList.remove("fa-chevron-down");
        arrowIcon3.classList.add("fa-chevron-up");
    }
}

function toggleDropdown4() {
    var dropdownContent4 = document.getElementById("dropdown-content4");
    var arrowIcon4 = document.getElementById("arrow-icon4");

    if (dropdownContent4.style.display === "block") {
        dropdownContent4.style.display = "none";
        arrowIcon4.classList.remove("fa-chevron-up");
        arrowIcon4.classList.add("fa-chevron-down");
    } else {
        dropdownContent4.style.display = "block";
        arrowIcon4.classList.remove("fa-chevron-down");
        arrowIcon4.classList.add("fa-chevron-up");
    }
}

// Obtenemos los elementos relevantes
const cantidadValorElement = document.querySelector('.cantidad-valor');
const btnIncrementElement = document.querySelector('.btn-increment');
const btnDecrementElement = document.querySelector('.btn-decrement');
const precioElement = document.querySelector('.rprecio p');
const totalElement = document.querySelector('.cantidad span p');

// Obtenemos el precio inicial
const precio = parseInt(precioElement.textContent.replace(/\D/g, ''));

// Función para actualizar el total
const actualizarTotal = () => {
    // Obtenemos la cantidad actual
    const cantidad = parseInt(cantidadValorElement.textContent);
    // Calculamos el total
    const total = cantidad * precio;
    // Actualizamos el total en la etiqueta p
    totalElement.textContent = 'U$' + total;
};

// Manejador del evento de clic en el botón de incremento
btnIncrementElement.addEventListener('click', () => {
    // Obtenemos el valor actual y lo incrementamos en 1
    let valor = parseInt(cantidadValorElement.textContent);
    valor += 1;
    // Actualizamos el valor en la etiqueta p
    cantidadValorElement.textContent = valor;
    // Actualizamos el total
    actualizarTotal();
});

// Manejador del evento de clic en el botón de decremento
btnDecrementElement.addEventListener('click', () => {
    // Obtenemos el valor actual y lo decrementamos en 1 (si es mayor a 0)
    let valor = parseInt(cantidadValorElement.textContent);
    if (valor > 0) {
        valor -= 1;
        // Actualizamos el valor en la etiqueta p
        cantidadValorElement.textContent = valor;
        // Actualizamos el total
        actualizarTotal();
    }
});
