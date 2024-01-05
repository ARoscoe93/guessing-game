let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10; // This will be decremented with each guess
function checkGuess() {
  const inputElement = document.getElementById("guess");
  const buttonElement = document.querySelector("button");
  let guess = Number(inputElement.value);
  const feedbackElement = document.getElementById("feedback");
  if (guess === randomNumber) {
    feedbackElement.innerHTML = "You Guessed Right! WOW!";
    feedbackElement.style.color = "green";
    inputElement.disabled = true;
    buttonElement.disabled = true;
  } else {
    attempts--;
    if (attempts > 0) {
      const direction = guess < randomNumber ? "low" : "high";
      feedbackElement.innerHTML = "Too " + direction +
        "! Try again. Attempts left: " + attempts;
      feedbackElement.style.color = "red";
    } else {
      feedbackElement.innerHTML =
        "Game over! No attempts left. The number was " + randomNumber + ".";
      feedbackElement.style.color = "red";
      inputElement.disabled = true;
      buttonElement.disabled = true;
    }
  }
} 