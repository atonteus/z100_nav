console.log('Hi');

const z100_navbar = document.querySelector(".z100_navbar");
const navLinks = document.querySelector(".z100_navbar-links");
const links = document.querySelectorAll(".z100_navbar-links li");

z100_navbar.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
