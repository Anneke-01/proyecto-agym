// MODAL

// Obtener elementos del DOM
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementsByClassName('close')[0];

// Función para abrir el modal
function openModal() {
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Asignar eventos a los botones
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
// FINALIZA MODAL

const openModalButton2 = document.getElementById('openModal-iniciar-sesion');
const modal2 = document.getElementById('modal');
const closeModalButton2 = document.getElementsByClassName('close')[0];

// Función para abrir el modal
function openModal2() {
    modal2.style.display = 'block';
}

// Función para cerrar el modal
function closeModal2() {
    modal2.style.display = 'none';
}

// Asignar eventos a los botones
openModalButton2.addEventListener('click', openModal2);
closeModalButton2.addEventListener('click', closeModal2);