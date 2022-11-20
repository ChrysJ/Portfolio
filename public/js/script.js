// ***********BurgerMenu**********
const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");

burgerMenu.addEventListener("click", () => {
  document.body.classList.toggle("body-overflow");
  burger.classList.toggle("open");
  nav.classList.toggle("open");
});


