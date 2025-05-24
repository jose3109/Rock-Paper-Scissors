console.log("Hello World");
let humanScore = 0;
let computerScore = 0; 

function getComputerChoice() {
    let number = (Math.random() * 100 + 1 );
    if (number <= 33 ) {
        return ("rock"); 
    } else if (number <= 66) {
        return ("paper");
    } else {
        return ("scissors"); 
    }
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


 const btn = document.querySelectorAll("button");
        btn.forEach((button) => { 
            button.addEventListener("click", () => {
                const choice = button.id;
            playRound(choice, getComputerChoice());
    scoreSet();
            } ); 

         });

let round = 1;
   
function scoreSet() {
            const score = document.querySelector("div");
    score.textContent = `Score: ${humanScore} Lost: ${computerScore} Round: ${round}`;
    if (humanScore === 5) {
        setTimeout(() => {
       if (confirm("You Won this ROUND!! Next round?")) {
        newRound(score);
    } else {
        resetGame(score);
    } 
}, 100);
    }   else if (computerScore === 5) { 
        setTimeout(() => {
       if ( confirm("You Lost the computer beat you start a new round?") ) {
        newRound(score);
       } else {
        resetGame(score);
       }
    }, 100);
    }
}


 function newRound (score) {
  score.textContent = `Score: ${0} Lost: ${0} Round: ${++round}`;
             humanScore = 0;
           computerScore = 0;
 }

function resetGame (score) {
alert("OKay GOODBYE")
       score.textContent = `Score: ${0} Lost: ${0} Round: ${1}`;
           humanScore = 0;
           computerScore = 0;
           round = 1;
} 
