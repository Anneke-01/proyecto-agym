const form = document.getElementById('add-form');
const input = document.getElementById('add-input');
const itemList = document.getElementById('item-list');
const modal = document.getElementById('edit-modal');
const modalContent = document.querySelector('.modal-content');
const editInput = document.getElementById('edit-input');
const saveBtn = document.getElementById('save-btn');

let currentItem = null; // Elemento actualmente seleccionado para editar
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = input.value.trim();
    if (value !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${value}</span>
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Eliminar</button>
        `;
        itemList.appendChild(li);
        input.value = '';
    }
});
// Agregar eventos de clic en los elementos de la lista para eliminarlos
itemList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.remove(); // Eliminar el elemento de la lista
    }
});
// Eliminar un elemento de la lista
itemList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});

// Abrir el modal para editar un elemento
itemList.addEventListener('click', function (e) {
    if (e.target.classList.contains('edit-btn')) {
        currentItem = e.target.parentElement;
        const value = currentItem.querySelector('span').textContent;
        editInput.value = value;
        showModal();
    }
});

// Guardar cambios en un elemento de la lista
saveBtn.addEventListener('click', function () {
    const value = editInput.value.trim();
    if (value !== '') {
        currentItem.querySelector('span').textContent = value;
        hideModal();
    }
});

// Cerrar el modal al hacer clic en la "X"
modalContent.addEventListener('click', function (e) {
    if (e.target.classList.contains('close')) {
        hideModal();
    }
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        hideModal();
    }
});

// Ocultar el modal al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    hideModal();
});

// Función para mostrar el modal
function showModal() {
    modal.style.display = 'block';
}

// Función para ocultar el modal
function hideModal() {
    modal.style.display = 'none';
}