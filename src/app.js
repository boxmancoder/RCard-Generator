/* eslint-disable */
import "bootstrap";
import "./style.css";

document.addEventListener("DOMContentLoaded", function() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "King",
    "Queen",
    "Jack",
    "Ace"
  ];
  const suits = {
    Hearts: "♥",
    Spades: "♠",
    Clubs: "♣",
    Diamonds: "♦"
  };

  function generateRandomCard() {
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSuit = Object.keys(suits)[Math.floor(Math.random() * 4)];
    const suitIcon = suits[randomSuit];

    document.getElementById("center-value").textContent = randomValue;
    document.getElementById("top-icon").textContent = suitIcon;
    document.getElementById("bottom-icon").textContent = suitIcon;

    if (randomSuit === "Spades" || randomSuit === "Clubs") {
      document.querySelector(".card").style.color = "black";
    } else {
      document.querySelector(".card").style.color = "red";
    }
  }

  function setCardSize() {
    const width = document.getElementById("widthInput").value;
    const height = document.getElementById("heightInput").value;
    const card = document.querySelector(".card");

    if (width && height) {
      card.style.width = `${width}px`;
      card.style.height = `${height}px`;
    }
  }

  generateRandomCard();
  setInterval(generateRandomCard, 10000);

  document
    .getElementById("generateCard")
    .addEventListener("click", generateRandomCard);
  document.getElementById("setSize").addEventListener("click", setCardSize);
});
