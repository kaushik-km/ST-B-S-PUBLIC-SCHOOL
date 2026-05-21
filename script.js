// script.js

// Welcome Button Alert
function showMessage() {
  alert("Welcome to ST B. S. PUBLIC SCHOOL Admission Section!");
}

// Smooth Scroll Animation for Cards
const cards = document.querySelectorAll(".card");

function revealCards() {
  cards.forEach((card) => {
    const windowHeight = window.innerHeight;
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

// Initial Card Style
cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
});

// Run Animation on Scroll
window.addEventListener("scroll", revealCards);

// Run Once on Load
revealCards();

// Form Submit Message
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Admission Form Submitted Successfully!");

  form.reset();
});

// Navbar Active Link Effect
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "yellow";
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "white";
  });
});

// Typing Effect
const heroText = document.querySelector(".hero h2");

const text = "Welcome to ST B. S. PUBLIC SCHOOL";

let index = 0;

function typeEffect() {
  if (index < text.length) {
    heroText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

heroText.innerHTML = "";

typeEffect();