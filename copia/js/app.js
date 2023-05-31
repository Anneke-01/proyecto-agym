

// FUNCIÓN PARA DROPDOWN

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

function toggleDropdown1() {
    var dropdownContent1 = document.getElementById("dropdown-content1");
    var arrowIcon1 = document.getElementById("arrow-icon1");
    
    if (dropdownContent1.style.display === "block") {
      dropdownContent1.style.display = "none";
      arrowIcon1.classList.remove("fa-chevron-up");
      arrowIcon1.classList.add("fa-chevron-down");
    } else {
      dropdownContent1.style.display = "block";
      arrowIcon1.classList.remove("fa-chevron-down");
      arrowIcon1.classList.add("fa-chevron-up");
    }
}
// FIN DE FUNCIÓN PARA DROPDOWN
