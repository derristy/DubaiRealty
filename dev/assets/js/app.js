window.addEventListener("DOMContentLoaded", () => {
    $(".first-screen .owl-carousel").owlCarousel({
        "nav": true,
        "items": 1,
        "navContainer": ".first-screen__nav",
        "navText": ["Prev", "Next"],
        "dotsContainer": ".first-screen__dots",
        "dotsData": true,
    });

    let dropdown = document.querySelectorAll(".dropdown");
    let modal = document.querySelectorAll(".modal");
    let navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", () => {
        document.querySelector(".header").classList.toggle("show");
    });

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

    modal.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.target.classList.remove("show");
        });

        element.querySelector(".modal-close").addEventListener("click", (event) => {
            event.target.closest(".modal").classList.remove("show");
        });


        element.querySelector(".modal-dialog").addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });

    window.addEventListener("click", () => {
        document.querySelectorAll(".dropdown.show").forEach((element) => {
            element.classList.remove("show");
        });
    });
});

const modalShow = (id) => {
    document.querySelectorAll(".modal.show").forEach((element) => {
        element.classList.remove("show");
    });
    document.querySelector(id).classList.add("show");
    $(".first-screen .owl-carousel").trigger("refresh.owl.carousel");
};