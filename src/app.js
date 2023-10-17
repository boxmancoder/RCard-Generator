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
      document.getElementById("top-icon").style.color = "black";
      document.getElementById("bottom-icon").style.color = "black";
    } else {
      document.getElementById("top-icon").style.color = "red";
      document.getElementById("bottom-icon").style.color = "red";
    }
  }

  // Generate the card when the page loads
  generateRandomCard();
  setInterval(generateRandomCard, 10000);

  document
    .getElementById("generateCard")
    .addEventListener("click", generateRandomCard);
  document.getElementById("setSize").addEventListener("click", setCardSize);
});