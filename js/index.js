"use strict";

// nav Hamburger

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Read More Text

const targetTextHidden = document.getElementById("ReadMoreIntroduction");
const buttonReadMoreText = document.getElementById("buttonReadMore");
buttonReadMoreText.innerHTML = "Lire plus... ▼";
targetTextHidden.style.display = "none";
let variableEtatText = "hidden";

buttonReadMoreText.addEventListener("click", () => {
  if (variableEtatText == "hidden") {
    buttonReadMoreText.innerHTML = "Lire moins... ▲";
    targetTextHidden.style.display = "block";
    variableEtatText = "more";
  } else {
    buttonReadMoreText.innerHTML = "Lire plus... ▼";
    targetTextHidden.style.display = "none";
    variableEtatText = "hidden";
  }
});
