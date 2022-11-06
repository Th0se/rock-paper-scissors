const bank = [`rock`, `paper`, `scissors`];

const getComputerInput = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

let win = 0;
let lose = 0;
let round = 0;

const rockPaperScissors = (playerSelection, computerSelection = getComputerInput(bank)) => {
    if (playerSelection === `scissors`) {
        if (computerSelection === `scissors`) {
            return `You tied!`;
        } else if (computerSelection === `paper`) {
            return `You won!`;
        } else if (computerSelection === `rock`) {
            return `You lost!`;
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `paper`) {
            return `You tied!`;
        } else if (computerSelection === `rock`) {
            return `You won!`;
        } else if (computerSelection === `scissors`) {
            return `You lost!`;
        }
    } else if (playerSelection === `rock`) {
        if (computerSelection === `rock`) {
            return `You tied!`;
        } else if (computerSelection === `scissors`) {
            return `You won!`;
        } else if (computerSelection === `paper`) {
            return `You lost!`;
        }
    };
}

const game = () => {
    if (round >= 5) {
        if (win > lose) {
            return `Victory!`;
        } else if (win < lose) {
            return `Defeat!`;
        } else {
            return `Tie!`;
        }
    } else if (round < 5) {
        return `Not enough round!`;
    };
}


const button = document.querySelectorAll(`.button`);
button.forEach((i) => {
    i.addEventListener(`click`, () => {
        if (i.id === `rockButton`) {
            playerChoice = `rock`;
        } else if (i.id === `paperButton`) {
            playerChoice = `paper`;
        } else if (i.id === `scissorsButton`) {
            playerChoice = `scissors`;
        };
        console.log(rockPaperScissors(playerChoice));
        round++;
        if (rockPaperScissors(playerChoice) === `You won!`) {
            win++;
        } else if (rockPaperScissors(playerChoice) === `You lost!`) {
            lose++;
        };
        console.log(`Round: ${round}`);
        console.log(`Win: ${win}`);
        console.log(`Lost: ${lose}`);
        console.log(`Result: ${game()}`);
        gameResultText.innerHTML = game();
    });
});

const rockButton = document.querySelector(`#rockButton`);
rockButton.textContent = `Rock`;

const paperButton = document.querySelector(`#paperButton`);
paperButton.textContent = `Paper`;

const scissorsButton = document.querySelector(`#scissorsButton`);
scissorsButton.textContent = `scissors`;

const gameResultText = document.createElement(`div`);
gameResultText.innerHTML = `Choose one to start the game`;

const gameResultIndicator = document.createElement(`p`);
gameResultIndicator.textContent = `You have ${win} win and ${lose} lose`;

/* document.querySelector(`#gameResultText`).innerHTML = `Choose one to start the game`; */

gameResult.appendChild(gameResultText);
gameResult.appendChild(gameResultIndicator);