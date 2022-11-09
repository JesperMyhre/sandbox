//https://replit.com/talk/learn/Add-sound-to-a-button-in-Html-and-JavaScript/120876
const audio = new Audio("../javascript/sound.mp3");
const buttons = document.querySelectorAll("sound-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

const menu = document.getElementById("nav-menu");

const navMenu = () => {
  if (menu.style.display == "block") {
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
}

console.log(menu);