//deals with navbar animation
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

//scroll animation for background
var controller = new ScrollMagic.Controller({ vertical: true });
var tween = new TimelineMax().add([
  TweenMax.fromTo(
    ".parallax-background #back-building-img",
    1,
    { left: 100 },
    { left: -150, ease: Linear.easeNone }
  ),
  TweenMax.fromTo(
    ".parallax-background #mid-building-img",
    1,
    { left: 80 },
    { left: -80, ease: Linear.easeNone }
  ),
]);

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger",
  duration: $(window).width(),
})
  .setTween(tween)
  .addTo(controller);

//animation for contact me buttons
const linkedinLink = document.querySelector("#linkedin");
const githubLink = document.querySelector("#github");
const freecodecampLink = document.querySelector("#freecodecamp");
const linkNameLabel = document.querySelector("#link-name");

function addLinkTitle(element) {
  const linkName = element.path[0].id;
  linkNameLabel.innerHTML = linkName.toUpperCase();
}

function clearLinkTitle(element) {
  linkNameLabel.innerHTML = "";
}

linkedinLink.addEventListener("mouseenter", addLinkTitle);
githubLink.addEventListener("mouseenter", addLinkTitle);
freecodecampLink.addEventListener("mouseenter", addLinkTitle);

linkedinLink.addEventListener("mouseleave", clearLinkTitle);
githubLink.addEventListener("mouseleave", clearLinkTitle);
freecodecampLink.addEventListener("mouseleave", clearLinkTitle);
