const arrayOfIndividualSquareElements = document.getElementsByClassName("individual-tic-tac-toe-square");
const mapOfIdsAndElements = htmlCollectionOfElementsTurnedIntoMap(arrayOfIndividualSquareElements);
const turnButton = document.getElementById("turn-button");
let roundCounter = 1;
let playersTurn = "X";
turnButton.innerText = `${playersTurn} TURN`;

function htmlCollectionOfElementsTurnedIntoMap(arrayOfHtmlElements) {
    const mapOfIdsAndElements = new Map();
    for (let element of arrayOfHtmlElements) {
        mapOfIdsAndElements.set(element.id, element);
    }
    return mapOfIdsAndElements;
}

// Note: This function might not even be needed if the computer is playing so quickly after the user.
function switchTurns() {
    if (playersTurn === "X") {
        playersTurn = "O";
        turnButton.innerText = `${playersTurn} TURN`;
    } else {
        playersTurn = "X";
        turnButton.innerText = `${playersTurn} TURN`;
    }
}

function pickRandomCornerSquare() {
    let availableCornerSquares = [mapOfIdsAndElements.get("top-right-square"),
        mapOfIdsAndElements.get("top-left-square"), mapOfIdsAndElements.get("bottom-right-square"),
        mapOfIdsAndElements.get("bottom-left-square")];
    let randomNumber = Math.floor(Math.random() * (availableCornerSquares.length));
    availableCornerSquares[randomNumber].innerText = "O";
}

function cornersAreEmpty() {
    return (mapOfIdsAndElements.get("top-right-square").innerText === "" &&
        mapOfIdsAndElements.get("top-left-square").innerText === "" &&
        mapOfIdsAndElements.get("bottom-right-square").innerText === "" &&
        mapOfIdsAndElements.get("bottom-right-square").innerText === "");
}

function rowOfTwo() {
    let isTrue = false;
    let elementToBlockOrWin = null;
    let symbol = null;
    if ((mapOfIdsAndElements.get("top-left-square").innerText ===
            mapOfIdsAndElements.get("top-middle-square").innerText) && mapOfIdsAndElements.get("top-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("top-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-right-square");
        symbol = mapOfIdsAndElements.get("top-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("top-left-square").innerText ===
        mapOfIdsAndElements.get("top-right-square").innerText) && mapOfIdsAndElements.get("top-left-square").innerText !== "" &&
    mapOfIdsAndElements.get("top-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-middle-square");
        symbol = mapOfIdsAndElements.get("top-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("top-middle-square").innerText ===
            mapOfIdsAndElements.get("top-right-square").innerText) && mapOfIdsAndElements.get("top-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("top-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-left-square");
        symbol = mapOfIdsAndElements.get("top-middle-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("middle-left-square").innerText ===
            mapOfIdsAndElements.get("middle-middle-square").innerText) && mapOfIdsAndElements.get("middle-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-right-square");
        symbol = mapOfIdsAndElements.get("middle-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("middle-left-square").innerText ===
            mapOfIdsAndElements.get("middle-right-square").innerText) && mapOfIdsAndElements.get("middle-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-middle-square");
        symbol = mapOfIdsAndElements.get("middle-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("middle-middle-square").innerText ===
            mapOfIdsAndElements.get("middle-right-square").innerText) && mapOfIdsAndElements.get("middle-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-left-square");
        symbol = mapOfIdsAndElements.get("middle-middle-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("bottom-left-square").innerText ===
            mapOfIdsAndElements.get("bottom-middle-square").innerText) && mapOfIdsAndElements.get("bottom-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-right-square");
        symbol = mapOfIdsAndElements.get("bottom-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("bottom-left-square").innerText ===
            mapOfIdsAndElements.get("bottom-right-square").innerText) && mapOfIdsAndElements.get("bottom-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-middle-square");
        symbol = mapOfIdsAndElements.get("bottom-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("bottom-middle-square").innerText ===
            mapOfIdsAndElements.get("bottom-right-square").innerText) && mapOfIdsAndElements.get("bottom-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-left-square");
        symbol = mapOfIdsAndElements.get("bottom-middle-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    return [isTrue, elementToBlockOrWin, symbol];
}

function pickRandomOpenSquare() {
    let arrayOfOpenSquares = [];
    for (let [key, value] of mapOfIdsAndElements) {
        if(value.innerText === "") {
            arrayOfOpenSquares.push(value);
        }
    }
    let randomNumber = Math.floor(Math.random() * (arrayOfOpenSquares.length));
    arrayOfOpenSquares[randomNumber].innerText = "O";
}

function determinePossibleWins() {
    let horizontalResults = rowOfTwo();
    if (horizontalResults[2] !== null) {
        horizontalResults[1].innerText = "O";
    } else if (horizontalResults[2] === null) {
        pickRandomOpenSquare();
    }
}

// console.log(pickRandomCornerSquare(arrayOfIndividualSquareElements));
function computerTurnToPlay() {
    if (roundCounter === 1 && cornersAreEmpty()) {
        pickRandomCornerSquare();
    } else if (roundCounter === 1 && mapOfIdsAndElements.get("middle-middle-square").innerText === "") {
        mapOfIdsAndElements.get("middle-middle-square").innerText = "O";
    } else {
        determinePossibleWins();
    }
    roundCounter++;
    switchTurns();
}

for (let element of arrayOfIndividualSquareElements) {
    element.onclick = function () {
        if (playersTurn === "X") {
            element.innerText = "X";
        }
        switchTurns();
        setTimeout(computerTurnToPlay, 1000);
    }
}