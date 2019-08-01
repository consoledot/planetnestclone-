const nav = document.querySelector("nav");
const image = document.querySelector("#logo");
const menu = document.querySelector("#menu");
const list = document.querySelector("#list");

const changeBackground = () => {
  if (window.scrollY > 0) {
    nav.classList.add("white");
    menu.classList.add("black");
    image.src = "assests/img/NESTLogo.png";
  } else {
    nav.classList.remove("white");
    menu.classList.remove("black");
    image.src = "assests/img/NESTLogoWhite.png";
  }
};
window.addEventListener("scroll", changeBackground);

const rotateMenu = () => {
  menu.classList.toggle("show");

  list.classList.toggle("show");
};

menu.addEventListener("click", rotateMenu);
