/* eslint-disable */
import "bootstrap";
import "./style.css";

document.addEventListener("DOMContentLoaded", function() {
  // ... (rest of your existing variables and functions)

  function generateRandomCard() {
    // ... (existing code inside this function)
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

  // Existing code for generating the initial card and setting the interval
  generateRandomCard();
  setInterval(generateRandomCard, 10000);

  // Event listeners for buttons
  document
    .getElementById("generateCard")
    .addEventListener("click", generateRandomCard);
  document.getElementById("setSize").addEventListener("click", setCardSize);
});
