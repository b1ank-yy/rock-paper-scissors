function computerChoice() {
    num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return "r";
    } else if (num == 1) {
        return "p";
    } else {
        return "s";
    }
}   

function checkValidity(val) {
    if (val === "rock" || val === "paper" || val === "scissors") {
        return true;
    } else {
        return false;
    }
}

function humanChoice() {
    _status = false;

    while (_status === false) {
        choice = String(prompt("Pick either rock, paper or scissors"));
        _status = checkValidity(choice.toLowerCase());

        if (_status === false) {
            console.log("Invalid input, try again.");
        }
    }

    if (choice.toLowerCase() === "rock") {
        return "r";
    } else if (choice.toLowerCase() === "paper") {
        return "p";
    } else if (choice.toLowerCase() === "scissors") {
        return "s";
    }
}

function converter(val) {
    if (val === "r") {
        return "Rock";
    } else if (val === "s") {
        return "Scissors";
    } else {
        return "Paper";
    }
}

let pointCount = Number(prompt("To how many points should the game be?"));
let humanScore = 0;
let computerScore = 0;

function checkRules(h, c) {
    if (h === c) {
        console.log("\nIt's a draw!");
    } else if (h === "r" && c === "s" || h === "s" && c === "p" || h === "p" && c === "r") {
        humanScore++;
        console.log(`\nYou won ${converter(h)} beats ${converter(c)}.`);
        console.log(`Player's score: ${humanScore}.\nComputer's score: ${computerScore}.`);
    } else if (c === "r" && h === "s" || c === "s" && h === "p" || c === "p" && h === "r") {
        computerScore++;
        console.log(`\nYou lost ${converter(c)} beats ${converter(h)}.`);
        console.log(`Player's score: ${humanScore}.\nComputer's score: ${computerScore}.`);
    }
}

function playRound(player, computer) {
    h = humanChoice();
    c = computerChoice();

    checkRules(h, c);
}

function checkForWinCondition(hscore, cscore, points) {
    if (hscore === points || cscore === points) {
        return true;
    } else {
        return false;
    }
}

function playGame() {
    condition = false;

    while (condition === false) {
        playRound();
        condition = checkForWinCondition(humanScore, computerScore, pointCount);
    }
}

playGame();