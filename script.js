


let randomNumber = Math.floor(Math.random() * 20) + 1;

let highScore = 0;
let score = 20;


function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}


function displayScore(score) {
  document.querySelector(".score-value").textContent = score;
}


function displayHighScore(highScore) {
  document.querySelector(".highscore").textContent = highScore;
}


document.querySelector(".check").addEventListener("click", function () {
  
  const guess = Number(document.querySelector(".guess").value);

  
  if (!guess || guess < 1 || guess > 20) {
    displayMessage("⛔️ Invalid guess! Enter a number between 1 and 20.");
  }

  else if (guess === randomNumber) {
    displayMessage("🎉 Correct guess! You won!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = randomNumber;

  
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }
  }
  
  else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});


document.querySelector(".again").addEventListener("click", function () {
  
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
});


displayScore(score);
displayHighScore(highScore);