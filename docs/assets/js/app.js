let dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((element) => {
    let dropdownBtn = element.querySelector(".dropdown-btn");

    element.addEventListener("click", (event) => {
        element.classList.toggle("show");
        event.preventDefault();

        document.querySelectorAll(".dropdown.show").forEach((element) => {
            if(element != event.target.closest(".dropdown.show")){
                element.classList.remove("show");
            }
        });
    });
});