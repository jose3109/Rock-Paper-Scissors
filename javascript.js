console.log("Hello World");
let humanScore = 0;
let computerScore = 0; 

function getComputerChoice() {
    let number = (Math.random() * 100 + 1 );
    if (number <= 33 ) {
        return ("rock"); 
    } else if (number <= 66) {
        return ("paper");
    } else if (number <= 100 || number > 100 ) {
        return ("scissors"); 
    }
}

function getHumanChoice() { 
     let choice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
     return(choice);

}

function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert("It's a tie");
        } else if (humanChoice === "rock" && computerChoice === "scissors" ) {
            alert("You Win! Rock beats scissors")
            humanScore++;
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            alert("You Lost :(! Rocks beat scissors")
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            alert("You Win! Scissors beat paper")
            humanScore++;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            alert("You Lost! Scissors beat paper")
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            alert("You Win! Paper beat rock")
            humanScore++;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            alert("You Lost! Paper beat rock")
            computerScore++;
        }
}




function playGame () {
    humanScore;
    computerScore;
    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());


    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());


    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore === 5 || humanScore > computerScore ) {
        alert("YOU WON!!")
    } else {
        alert("You Lost")
    }
 
}


playGame();

console.log(humanScore);
