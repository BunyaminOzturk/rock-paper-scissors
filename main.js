function getComputerChoice(){
    let pcList = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * pcList.length);
    let pcChoice = pcList[randomIndex]
    //console.log("pc choice: " + pcChoice);
    return pcChoice;

}
//getComputerChoice();

function getHumanChoice(){
    let a = prompt("rock? paper? scissors?");
    let humanChoice = a.toLowerCase();
    if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        //console.log("human choice: " + humanChoice);
        return humanChoice;
    }
    getComputerChoice();
    console.log("Please write only 'rock' or 'paper' or 'scissors':");
    
    getHumanChoice();
}
//getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    //console.log(humanChoice);
    //console.log(computerChoice);
    if(computerChoice !== humanChoice){
        if(humanChoice === "rock"){
            switch(computerChoice){
                case "scissors":
                    console.log("%cYou win! rock beats scissors.", "color:green; font-weight:bold;");
                    humanScore++;
                    //console.log("human score: " + humanScore);
                    break;
                case "paper":
                    console.log("%cYou lost! paper beats rock.", "color:red; font-weight:bold;");
                    computerScore++;
                    //console.log("pc score: " + computerScore);
                    break;
            }
            console.log("pc score:" + computerScore + " - human score: " + humanScore);
        }
        if(humanChoice === "paper"){
            switch(computerChoice){
                case "scissors":
                    console.log("%cYou lost! scissors beats paper.", "color:red; font-weight:bold;");
                    computerScore++;
                    //console.log("pc score: " + computerScore);
                    break;
                case "rock":
                    console.log("%cYou win! paper beats rock.", "color:green; font-weight:bold;");
                    humanScore++;
                    //console.log("human score: " + humanScore);
                    break;
            }
            console.log("pc score:" + computerScore + " - human score: " + humanScore);
        }
        if(humanChoice === "scissors"){
            switch(computerChoice){
                case "rock":
                    console.log("%cYou lost! rock beats scissors.", "color:red; font-weight:bold;");
                    computerScore++;
                    //console.log("pc score: " + computerScore);
                    break;
                case "paper":
                    console.log("%cYou win! scissors beats paper.", "color:green; font-weight:bold;");
                    humanScore++;
                    //console.log("human score: " + humanScore);
                    break;
            }
            console.log(`Pc score: ${computerScore} - human score: ${humanScore}`);
        }
    } else {
        console.log("%cYou are same! Try again...", "color:yellow; font-weight:bold;")
        i--;
    }

}

let i = 1;
function playGame(){
    for(; i<=5; i++){
        playRound();
        //console.log(i + ". round ended: ");
        
    }
}
playGame();