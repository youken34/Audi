let container = document.querySelector(".container");
const formulaire = document.querySelector(".formulaire");
let menu = true;
const boutonMenu = document.querySelector("#symbole");
const banner = document.querySelector(".banner");
const link = document.querySelector("#link");
const liens = document.querySelectorAll("#link a");

window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth.toFixed() > 750) {
    banner.style.height = "80px";
    menu = true;
    document.body.style.overflowY = "visible";
    boutonMenu.className = "fas fa-align-justify";
    var index = 0,
      length = liens.length;
    for (; index < length; index++) {
      liens[index].style.display = "block";
    }
  } else if (document.documentElement.clientWidth.toFixed() < 750) {
    if (menu === true) {
      var index = 0,
        length = liens.length;
      for (; index < length; index++) {
        liens[index].style.display = "none";
      }
    }
  }
});

function MenuDepliant() {
  menu = !menu;
  if (menu === true) {
    boutonMenu.className = "fas fa-align-justify";
    boutonMenu.className.remove = "close icon";
    document.body.style.height = "200vh";
    banner.style.height = "80px";
    document.body.style.overflowY = "visible";
    link.classList.remove("linkResponsive");
    var index = 0,
      length = liens.length;
    for (; index < length; index++) {
      liens[index].style.display = "none";
    }
  } else {
    boutonMenu.className = "close icon";
    boutonMenu.className.remove = "fas fa-align-justify";
    document.body.style.height = "100vh";
    banner.style.height = "100%";
    document.body.style.overflowY = "hidden";
    link.classList.add("linkResponsive"); // S'additionne seulement, ne modifie pas les propriétés
    var index = 0,
      length = liens.length;
    for (; index < length; index++) {
      liens[index].style.display = "block";
    }
  }
}

const navigation = document.querySelector("nav");
window.addEventListener("DOMContentLoaded", () => {
  if (window.scrollY > 200) {
    navigation.style.setProperty(
      "--banner-before-opacity",
      "rgba(255, 255, 255, 1)"
    );
  } else {
    navigation.style.setProperty(
      "--banner-before-opacity",
      "rgba(255, 255, 255, 0.5)"
    );
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navigation.style.setProperty(
      "--banner-before-opacity",
      "rgba(255, 255, 255, 1)"
    );
  } else {
    navigation.style.setProperty(
      "--banner-before-opacity",
      "rgba(255, 255, 255, 0.5)"
    );
  }
});

/* Clear form */
const inputElements = document.querySelectorAll(
  "input::not(input[type=submit])"
);
inputElements.forEach((element) => {
  element.value = "";
  console.log(element.value);
});
