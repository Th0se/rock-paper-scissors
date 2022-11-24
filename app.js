const bank = [`rock`, `paper`, `scissors`];

let win = 0;
let lose = 0;
let round = 0;


const getComputerInput = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

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
        if (win > lose) {
            return `Victory!`;
        } else if (win < lose) {
            return `Defeat!`;
        } else {
            return `Tie!`;
        };
};


const buttonHolder = document.querySelector('#buttonHolder');
buttonHolder.style.textAlign = 'center';

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
        gameResultIndicator.textContent = `You have ${win} win and ${lose} loss`;
    });
    i.style.color = `red`;
});

const rockButton = document.querySelector(`#rockButton`);
rockButton.textContent = `Rock`;

const paperButton = document.querySelector(`#paperButton`);
paperButton.textContent = `Paper`;

const scissorsButton = document.querySelector(`#scissorsButton`);
scissorsButton.textContent = `scissors`;

const gameResult = document.querySelector(`#gameResult`);
gameResult.style.borderColor = `black`;
gameResult.style.borderStyle = `solid`;
gameResult.style.textAlign = `center`;
gameResult.style.padding = `20px`;
gameResult.style.margin = `20px`;

const gameResultText = document.createElement(`div`);
gameResultText.innerHTML = `Choose one to start the game`;
gameResultText.style.marginBottom = `20px`;

const gameResultIndicator = document.createElement(`p`);


gameResult.appendChild(gameResultText);
gameResult.appendChild(gameResultIndicator);