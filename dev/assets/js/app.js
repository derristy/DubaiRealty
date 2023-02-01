let dropdown = document.querySelector(".dropdown");
let dropdownBtn = dropdown.querySelector(".dropdown-btn");
let dropdownMenu = dropdown.querySelector(".dropdown-menu");

dropdownBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dropdownBtn.classList.toggle("show");
    dropdownMenu.classList.toggle("show");
});