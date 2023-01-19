const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const playerChoiceDiv = document.createElement("div");
playerChoiceDiv.classList.add("playerChoiceDiv");
container.appendChild(playerChoiceDiv);

const resultDiv = document.createElement("div");
resultDiv.classList.add("resultDiv");
container.appendChild(resultDiv);

const rockButton = document.createElement("button");
rockButton.classList.add("rockButton");
rockButton.textContent = "Rock";
playerChoiceDiv.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.classList.add("paperButton");
paperButton.textContent = "Paper";
playerChoiceDiv.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("scissorsButton");
scissorsButton.textContent = "Scissors";
playerChoiceDiv.appendChild(scissorsButton);

const allRPSButtons = document.querySelectorAll(".playerChoiceDiv button");

const roundResultPara = document.createElement("p");
roundResultPara.classList.add("roundResult");

const scorePara = document.createElement("p");
scorePara.classList.add("score");

const finalResultPara = document.createElement("p");
finalResultPara.classList.add("finalResult");

const playAgainButton = document.createElement("button");
playAgainButton.classList.add("playAgainButton");
playAgainButton.innerHTML = '<i class="fa-solid fa-rotate-right fa-2xl"></i>';
 
const welcomeDiv = document.createElement("div");
welcomeDiv.classList.add("welcomeDiv");
document.body.appendChild(welcomeDiv);

function welcome() {
  let welcomePara = document.createElement("p");
  welcomePara.classList.add("welcomePara");
  welcomePara.textContent = "Welcome to Rock, Paper, Scissors click the button to play!";
  welcomeDiv.appendChild(welcomePara);
  let welcomeButton = document.createElement("button");
  welcomeButton.classList.add("welcomeButton");
  welcomeButton.innerHTML = '<i class="fa-solid fa-play fa-2xl"></i>';
  welcomeDiv.appendChild(welcomeButton);
  welcomeButton.addEventListener("click", () => {
    welcomeDiv.style.display = "none";
    container.style.display = "flex";
    playGame();
  })
}

let getComputerChoice = function () {
  let getComputerChoice = Math.floor(Math.random() * 3) + 1;
  if (getComputerChoice === 1) {
    getComputerChoice = "Rock";
  } else if (getComputerChoice === 2) {
    getComputerChoice = "Paper";
  } else {
    getComputerChoice = "Scissors";
  }
  return getComputerChoice;
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  allRPSButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const playerChoice = event.target.textContent;
      console.log(playerChoice);
      let checkRound = winCheck(getComputerChoice(), playerChoice, playerScore, computerScore);
      if (checkRound === 0) {
        playerScore++;
        scorePara.textContent = `Your score: ${playerScore} vs Computer score: ${computerScore}`;
        resultDiv.appendChild(scorePara);
      } else if (checkRound === 1) {
        computerScore++;
        scorePara.textContent = `You score: ${playerScore} vs Computer score: ${computerScore}`
        resultDiv.appendChild(scorePara);
      }
      if (playerScore === 5) {
        playerChoiceDiv.style.display = "none";
        roundResultPara.style.display = "none";
        scorePara.style.display = "none";
        finalResultPara.textContent = `Congratulations you win!`;
        resultDiv.appendChild(finalResultPara);
        playAgain();
      } else if (computerScore === 5) {
        playerChoiceDiv.style.display = "none";
        roundResultPara.style.display = "none";
        scorePara.style.display = "none";
        finalResultPara.textContent = `Unlucky you lost better luck next time!`;
        resultDiv.appendChild(finalResultPara);
        playAgain();
      }
    });
  });
}

function winCheck(computerChoice, playerChoice) {
  if (computerChoice === "Rock" && playerChoice === "Paper") {
    roundResultPara.textContent = `${playerChoice} beats ${computerChoice} you win this round!`;
    resultDiv.appendChild(roundResultPara);
    return 0
  } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
    roundResultPara.textContent = `${computerChoice} beats ${playerChoice} you lose this round!`;
    resultDiv.appendChild(roundResultPara);
    return 1
  } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
    roundResultPara.textContent = `${playerChoice} beats ${computerChoice} you win this round!`;
    resultDiv.appendChild(roundResultPara);
    return 0
  } else if (computerChoice === "Paper" && playerChoice === "Rock") {
    roundResultPara.textContent = `${computerChoice} beats ${playerChoice} you lose this round!`;
    resultDiv.appendChild(roundResultPara);
    return 1
  } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
    roundResultPara.textContent = `${playerChoice} beats ${computerChoice} you win this round!`;
    resultDiv.appendChild(roundResultPara);
    return 0
  } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
    roundResultPara.textContent = `${computerChoice} beats ${playerChoice} you lose this round!`;
    resultDiv.appendChild(roundResultPara);
    return 1
  } else {
    roundResultPara.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice} the round was a draw.`;
    resultDiv.appendChild(roundResultPara);
  }
}

function playAgain() {
  container.appendChild(playAgainButton);
  playAgainButton.addEventListener("click", () => location.reload());
}

welcome();