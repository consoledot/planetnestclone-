const nav = document.querySelector("nav");
const image = document.querySelector("#logo");
const menu = document.querySelector("#menu");
const list = document.querySelector("#list");
const changeBackground = () => {
  if (window.scrollY > 0) {
    whiteBackground();
  } else {
    whiteText();
  }
};
const whiteBackground = () => {
  nav.classList.add("white");
  image.src = "assests/img/NESTLogo.png";
  menu.classList.add("black");
};
const whiteText = () => {
  nav.classList.remove("white");
  image.src = "assests/img/NESTLogoWhite.png";
  menu.classList.remove("black");
};
window.addEventListener("scroll", changeBackground);

const rotateMenu = () => {
  menu.classList.toggle("show");
  list.classList.toggle("show");
  const index = menu.classList.value.split(" ").findIndex((int) => {
    return int === "show";
  });
  if (index >= 0) {
    whiteBackground();
  } else if (index < 0 && window.scrollY <= 0) {
    whiteText();
  }
};

menu.addEventListener("click", rotateMenu);
