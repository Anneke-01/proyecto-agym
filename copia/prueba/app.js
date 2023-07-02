/*const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementsByClassName("close")[0];


openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}); */

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

