function getComputerChoice(){
    let pcList = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * pcList.length);
    let pcChoice = pcList[randomIndex]
    return pcChoice;
}

const humanContent = document.querySelector(".humanChoice");
const computerContent = document.querySelector(".computerChoice");
let humanChoice = "";
const buttons = document.querySelectorAll("button");

const humanScoreContent = document.querySelector("#humanScore");
const computerScoreContent = document.querySelector("#computerScore");

const winContent = document.querySelector("#win");

function currentScore() {
    humanScoreContent.textContent = humanScore;
    computerScoreContent.textContent = computerScore;
}

buttons.forEach((button) => {
    button.addEventListener("click", buttonClicked);
});

function buttonCheck(){
    if(humanScore >= 5){
        console.log("Human won");
        winContent.textContent = "YOU WON!";
        buttonsOff();
    } 
    if (computerScore >= 5){
        console.log("Computer won");
        winContent.textContent = "COMPUTER WON!";
        buttonsOff();
    }
}

function buttonClicked(){
    buttonCheck();
    humanChoice = this.id;
    humanContent.textContent = humanChoice;
    computerContent.textContent = getComputerChoice();
    let computer = computerContent.textContent;
    let human = humanContent.textContent;
    playRound(computer, human);
    buttonCheck();
}

let humanScore = 0;
let computerScore = 0;

const buttonsOff = function(){
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function playRound(computerChoice, humanChoice){
    if(humanScore >= 5){
        console.log("Human won");
        winContent.textContent = "YOU WON!";
        buttonsOff();
    } 
    if (computerScore >= 5){
        console.log("Computer won");
        winContent.textContent = "COMPUTER WON!";
        buttonsOff();
    }
    if(!(humanScore >= 5 || computerScore >= 5)) {
        if(computerChoice !== humanChoice){
            if(humanChoice === "rock"){
                switch(computerChoice){
                    case "scissors":
                        console.log("%cYou win! rock beats scissors.", "color:green; font-weight:bold;");
                        humanScore++;
                        currentScore();
                        break;
                    case "paper":
                        console.log("%cYou lost! paper beats rock.", "color:red; font-weight:bold;");
                        computerScore++;
                        currentScore();
                        break;
                }
                console.log("pc score:" + computerScore + " - human score: " + humanScore);
            }
            if(humanChoice === "paper"){
                switch(computerChoice){
                    case "scissors":
                        console.log("%cYou lost! scissors beats paper.", "color:red; font-weight:bold;");
                        computerScore++;
                        currentScore();
                        break;
                    case "rock":
                        console.log("%cYou win! paper beats rock.", "color:green; font-weight:bold;");
                        humanScore++;
                        currentScore();
                        break;
                }
                console.log("pc score:" + computerScore + " - human score: " + humanScore);
            }
            if(humanChoice === "scissors"){
                switch(computerChoice){
                    case "rock":
                        console.log("%cYou lost! rock beats scissors.", "color:red; font-weight:bold;");
                        computerScore++;
                        currentScore();
                        break;
                    case "paper":
                        console.log("%cYou win! scissors beats paper.", "color:green; font-weight:bold;");
                        humanScore++;
                        currentScore();
                        break;
                }
                console.log(`Pc score: ${computerScore} - human score: ${humanScore}`);
            }
        } else {
            console.log("%cYou are same! Try again...", "color:yellow; font-weight:bold;")
            currentScore();
        }
    }
}
