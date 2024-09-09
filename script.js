let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const getComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was drawn");
    msg.innerText = "Game was drawn, PLAY AGAIN!!";
    msg.style.backgroundColor = "#081B31";

}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        console.log("you won");
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `you won, ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        console.log("you lost");
        computerScore++;
        compScorepara.innerText = computerScore;
        msg.innerText = `you lost, ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";


    }
}

const playGame = (userChoice) =>{
    console.log("Use Choice = ", userChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer Choice = ", computerChoice);
    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice==="rock"){
            userWin = computerChoice === "paper"? false : true;
        } 
        else if(userChoice==="paper"){
            userWin = computerChoice === "scissors"? false : true;
        }
        else{
            userWin = computerChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
        }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        // console.log("Choices was clicked!", choiceId);
        playGame(choiceId);
    })
})


