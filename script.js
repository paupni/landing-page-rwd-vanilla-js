let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

function toggleMenu() {
  console.log(navbar.classList);

  navbar.classList.toggle("active");
}

menuIcon.addEventListener("click", toggleMenu);
