let is_open = false;

const linkList = document.querySelector(".linkList");
const btnMenu = document.getElementById("btnMenu");
const linkMenu = document.querySelector(".linkMenu");

function seeMenu() {
  if (!is_open) linkMenu.classList.add("seeLinks");
  else linkMenu.classList.remove("seeLinks")

  is_open = !is_open
}

window.onresize = () => {
  if (window.innerWidth <= 925) {
  }
};
