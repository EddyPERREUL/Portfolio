'use strict'

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/* Animation Background */

const newDiv = document.getElementById("animate");
const icon = 150;


for(let i = 0; i < icon; i++) {
const logo = document.createElement("img");
logo.src = "../img/Logo_EP.png";
logo.classList.add("all-icon")

let size = Math.random() * 50;
size = Math.floor(size);
logo.style.width = size + "px";

let right_position = Math.random() * 101;
right_position = Math.floor(right_position);
logo.style.right = right_position + "%";

let left_position = Math.random() * 101;
left_position = Math.floor(left_position);
logo.style.left = left_position + "%";

let speed_move = Math.random() * 450;
speed_move = Math.floor(speed_move);
logo.style.animation = `move ${speed_move}s ease infinite`;

newDiv.append(logo)
}