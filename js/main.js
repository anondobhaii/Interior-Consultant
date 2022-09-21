const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");
const nav_link = document.querySelectorAll(".nav_link")[0];

menu.addEventListener("click", () => {
    console.log(nav)
  nav.classList.toggle("d-none");
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-xmark");
});


console.log(nav_link)   