let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

function toggleMenu() {
  navbar.classList.toggle("active");
}

menuIcon.addEventListener("click", toggleMenu);
