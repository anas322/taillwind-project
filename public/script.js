const HUMBURGER = "http://127.0.0.1:5500/public/images/icon-hamburger.svg";
const CLOSE_BUTTON = "http://127.0.0.1:5500/public/images/icon-close.svg";

const button = document.querySelector("#toggle-button");
const menu = document.querySelector("#menu-bar");

button.addEventListener("click", () => {
  button.src = button.src == HUMBURGER ? CLOSE_BUTTON : HUMBURGER;
  menu.classList.toggle("h-56");
  menu.classList.toggle("h-0");
});
