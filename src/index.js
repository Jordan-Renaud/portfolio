const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

function showHideMenu(event) {
  if (menu.className === "closed") {
    menu.className = "open";
  } else {
    menu.className = "closed";
  }
}

menuButton.addEventListener("click", showHideMenu);
