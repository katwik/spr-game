let pScore = 0;
let cScore = 0;


//Start game
const startGame = () => {
    let playBtn = document.querySelector(".start button");
    let startScreen = document.querySelector(".start");
    let match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
        startScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
    });
};

//Play Match
const playGame = () => {
    let options = document.querySelectorAll(".options button");
    let playerHand = document.querySelector(".player-hand");
    let computerHand = document.querySelector(".computer-hand");
    let hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
        hand.addEventListener("animationend", function () {
            this.style.animation = "";
        });
    });
    //Computer Options
    let computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
        option.addEventListener("click", function () {
            //Computer Choice
            let computerNumber = Math.floor(Math.random() * 3);
            let computerChoice = computerOptions[computerNumber];

            setTimeout(() => {
                //Compare hands
                compareHands(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `./assets/images/${this.textContent}.png`;
                computerHand.src = `./assets/images/${computerChoice}.png`;
            }, 2000);
            //Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
        });
    });
};



const updateScore = () => {
    let playerScore = document.querySelector(".player-score p");
    let computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
};


const compareHands = (playerChoice, computerChoice) => {
    let winner = document.querySelector(".winner");

    //Checking for a tie
    if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }
    }
    //Check for Paper
    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
        }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
        }
    }
};


function initializeGame() {
    startGame();
    playGame();
}

window.addEventListener("DOMContentLoaded", initializeGame);