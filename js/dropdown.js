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
