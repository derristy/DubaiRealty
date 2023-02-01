let dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        element.classList.toggle("show");

        document.querySelectorAll(".dropdown.show").forEach((element) => {
            if(element != event.target.closest(".dropdown.show")){
                element.classList.remove("show");
            }
        });
    });

    element.querySelector(".dropdown-menu").addEventListener("click", (event) => {
        event.stopPropagation();
    });
});

window.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.show").forEach((element) => {
        element.classList.remove("show");
    });
});