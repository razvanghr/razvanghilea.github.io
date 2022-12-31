"use strict";

const generatedNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

console.log(generatedNumber);

document.querySelector(".check").addEventListener("click", function () {
  const checkNumber = Number(document.querySelector(".guess").value);

  if (score !== 1) {
    if (!checkNumber) {
      document.querySelector(
        ".message"
      ).textContent = `Nici un numar introdus...  `;
    } else if (checkNumber === generatedNumber) {
      document.querySelector(".message").textContent = `Ai câstigat!`;
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").textContent = generatedNumber;
    } else if (checkNumber > generatedNumber) {
      document.querySelector(".message").textContent = `Prea mare.`;
      score--;
      document.querySelector(".score").textContent = score;
    } else if (checkNumber < generatedNumber) {
      document.querySelector(".message").textContent = `Prea mic.`;
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".score").textContent = "0";
    document.querySelector("body").style.backgroundColor = "#70081d";
    document.querySelector(".message").textContent = `Ai pierdut!`;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  location.reload();
});
