const optionsHands = ["Rock", "Paper", "Scissor"]

const winningConditions = {
    Rock: "Scissor",
    Paper: "Rock",
    Scissor: "Paper"
};

const handPlayed = () => optionsHands[Math.floor(Math.random() * optionsHands.length)];


const showPlays = (handHuman, handComputer) => {
    document.getElementById("playerPlayed").src = `resources/images/${handHuman}.svg`;
    document.getElementById("computerPlayed").src = `resources/images/${handComputer}.svg`;
    document.getElementById("main__containerMove").classList.replace("main__containerMove--hidden", "main__containerMove--show");
};


const determineWinner = (handHuman, handComputer) => {

    const resultContainer = document.getElementById("main__containerResult");
    const resultText = document.getElementById("containerResult");
    const mainTitle = document.getElementById("main__title");

    mainTitle.textContent = "Let's see his hands";

    if (handHuman === handComputer) {
        resultContainer.className = "main__containerResult--tie";
        resultText.textContent = "Tie";
    } else if (winningConditions[handHuman] === handComputer) {
        resultContainer.className = "main__containerResult--win";
        resultText.textContent = "Win";
    } else {
        resultContainer.className = "main__containerResult--youLose";
        resultText.textContent = "You lose";
    }
}


function playAgain(){
    console.log(containerDecisions);
}


window.addEventListener("load", () => {
    const hands = document.querySelectorAll(".containerDecision__img");
    const showHands = document.getElementById("main__containerMove");

    hands.forEach(hand => {
        hand.addEventListener("click", () => {
            const handHuman = hand.dataset.choice;
            const handComputer = handPlayed();
            showPlays(handHuman, handComputer);
            determineWinner(handHuman, handComputer);

            const containerDecisions = document.getElementById("main__containerDecisions");
            containerDecisions.style.display = "none";
            setTimeout(() => {
                containerDecisions.style.display = "flex";
                showHands.classList.replace("main__containerMove--show", "main__containerMove--hidden");
                document.getElementById("main__containerResult").className = "";
                document.getElementById("containerResult").textContent = "";
                document.getElementById("main__title").textContent = "Choose your move";
            }, 3000);
        });
    });
});
