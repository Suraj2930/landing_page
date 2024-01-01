document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if(window.scrollY == 0){
            navbar.style.backgroundColor = "#399999";
        }
        else if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#555"; // Change background color on scroll
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });
});

function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
function toggleMenu() {
    var nav = document.getElementById('navbar');
    nav.classList.toggle('show');
}