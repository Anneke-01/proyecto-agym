document.addEventListener("DOMContentLoaded", function () {
    const openAddModalButton = document.getElementById("open-add-modal");
    const addModal = document.getElementById("add-modal");
    const cancelAddButton = document.getElementById("cancel-add");
    const saveAddButton = document.getElementById("save-add");
    const itemList = document.getElementById("item-list").getElementsByTagName("tbody")[0];
    const editModal = document.getElementById("edit-modal");
    const cancelEditButton = document.getElementById("cancel-edit");
    const saveEditButton = document.getElementById("save-edit");
    let editItemId = null; // Variable para almacenar el ID del elemento en edición

    openAddModalButton.addEventListener("click", function () {
        addModal.style.display = "block";
    });

    cancelAddButton.addEventListener("click", function () {
        addModal.style.display = "none";
    });

    saveAddButton.addEventListener("click", function (event) {
        event.preventDefault();
        const inputValue = document.getElementById("input-tk").value;
        addModal.style.display = "none";

        // Agregar elemento a la lista
        const newRow = createTableRow(inputValue);
        itemList.appendChild(newRow);

        // Limpiar el valor del input
        document.getElementById("input-tk").value = "";
    });

    cancelEditButton.addEventListener("click", function () {
        editModal.style.display = "none";
    });

    saveEditButton.addEventListener("click", function (event) {
        event.preventDefault();
        const editedValue = document.getElementById("edit-input").value;
        editModal.style.display = "none";

        // Buscar el elemento correspondiente y actualizar su valor
        const row = document.getElementById(`row-${editItemId}`);
        if (row) {
            const cell = row.querySelector("td:first-child");
            cell.textContent = editedValue;
        }

        editItemId = null; // Restablecer el ID del elemento en edición
    });

    // Agregar evento click a los botones de editar y eliminar
    itemList.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("edit-button")) {
            const row = target.closest("tr");
            const value = row.querySelector("td:first-child").textContent;
            editItemId = row.getAttribute("data-item-id");
            document.getElementById("edit-input").value = value;
            editModal.style.display = "block";
        } else if (target.classList.contains("delete-button")) {
            const row = target.closest("tr");
            row.remove();
        }
    });

    function createTableRow(value) {
        const newRow = document.createElement("tr");
        const rowId = Date.now().toString(); // Generar un ID único para la fila
        newRow.id = `row-${rowId}`;
        newRow.setAttribute("data-item-id", rowId);
        const newCell1 = document.createElement("td");
        newCell1.textContent = value;
        const newCell2 = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.classList.add("edit-button");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("delete-button");
        newCell2.appendChild(editButton);
        newCell2.appendChild(deleteButton);
        newRow.appendChild(newCell1);
        newRow.appendChild(newCell2);
        return newRow;
    }
});
