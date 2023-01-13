function welcomeMessage() {
  let confirmation = confirm("Welcome to Rock, Paper, Scissors");
  if (confirmation) {
    return;
  } else {
    goodbye();
    errorKillScript();
  }
}

function goodbye() {
    alert("I guess you don't want to play, another time maybe");
}

function errorKillScript () {
  throw new Error("This isn't an error, just exiting Javascript");
}

let computerChoice = function () {
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

let playerChoice = function () {
  let getPlayerChoice = prompt("Choose either 'Rock', 'Paper', or 'Scissors'");
  if (getPlayerChoice === null) {
    goodbye();
    errorKillScript();
  }
  getPlayerChoice = `${getPlayerChoice.charAt(0).toUpperCase()}${getPlayerChoice.substring(1).toLowerCase()}`;
  if (getPlayerChoice === "Rock" || getPlayerChoice === "Paper" || getPlayerChoice === "Scissors") {
    return getPlayerChoice;
  } else if (getPlayerChoice === "") {
    alert("Please enter a valid name");
    return playerChoice();
  } else {
    alert("Please enter a valid name");
    return playerChoice();
  }
}

let winCheck = function (computerChoice, playerChoice) {
  if (computerChoice === "Rock" && playerChoice === "Paper") {
    alert(`${playerChoice} beats ${computerChoice} you win this round!`);
  } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
    alert(`${computerChoice} beats ${playerChoice} you lose this round!`);
  } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
    alert(`${playerChoice} beats ${computerChoice} you win this round!`);
  } else if (computerChoice === "Paper" && playerChoice === "Rock") {
    alert(`${computerChoice} beats ${playerChoice} you lose this round!`);
  } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
    alert(`${playerChoice} beats ${computerChoice} you win this round!`);
  } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
    alert(`${computerChoice} beats ${playerChoice} you lose this round!`);
  } else {
    alert(`You chose ${playerChoice} and the computer chose ${computerChoice} the round was a draw.`);
  }
}

winCheck(computerChoice(), playerChoice());
