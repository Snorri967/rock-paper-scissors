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


