let humanScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update chosen buttons
  const humanChoiceButton = document.getElementById("human-choice");
  const computerChoiceButton = document.getElementById("computer-choice");
  var imageHuman = document.createElement("img");
  if (humanChoiceButton.getElementsByTagName("img").length > 0) {
    humanChoiceButton.removeChild(humanChoiceButton.getElementsByTagName("img")[0]);
  }
  imageHuman.src = playerChoice + ".png";
  humanChoiceButton.appendChild(imageHuman);
  var imageComputer = document.createElement("img");
  if (computerChoiceButton.getElementsByTagName("img").length > 0) {
    computerChoiceButton.removeChild(computerChoiceButton.getElementsByTagName("img")[0]);
  }
  imageComputer.src = computerChoice + ".png";
  computerChoiceButton.appendChild(imageComputer);
  let roundResult = "";
  if (playerChoice === computerChoice) {
    roundResult = "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    roundResult = "You win this round!";
    humanScore++;
  } else {
    roundResult = "Computer wins this round!";
    computerScore++;
  }

  // Update scores
  const humanScoreDisplay = document.getElementById("human-score");
  const computerScoreDisplay = document.getElementById("computer-score");
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  // Show the result and chosen buttons
  const resultSection = document.getElementById("result");
  const roundResultDisplay = document.getElementById("round-result");
  roundResultDisplay.textContent = roundResult;
  resultSection.style.display = "block";

  // Toggle button visibility
  const buttonsContainer = document.getElementById("buttons-container");
  buttonsContainer.style.display = "none";

  // Check if human wins to show the Next button
  if (roundResult.includes("win")) {
    createNextButton();
  }
}

function createNextButton() {
  const nextSection = document.getElementById("next-section");
  const nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.textContent = "Next";
  nextButton.onclick = openWinPage;
  nextSection.innerHTML = "";
  nextSection.appendChild(nextButton);
  nextSection.style.display = "block";
}

function playAgain() {
  // Hide the result and chosen buttons
  const resultSection = document.getElementById("result");
  resultSection.style.display = "none";

  // Show the buttons container
  const buttonsContainer = document.getElementById("buttons-container");
  buttonsContainer.style.display = "flex";

  // Hide the Next button
  const nextSection = document.getElementById("next-section");
  nextSection.style.display = "none";
}

function toggleRules() {
  const rulesPopup = document.getElementById("rules-popup");
  rulesPopup.style.display = rulesPopup.style.display === "none" ? "block" : "none";
}

function openWinPage() {
  // Open the next page
  window.location.href = "win-page.html";
}
