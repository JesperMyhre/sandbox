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

//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
let mybutton = document.getElementById("toppknapp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}