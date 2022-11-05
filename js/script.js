const btnPlay = document.getElementById("btn-play");
const eleGrid = document.querySelector(".grid");
const eleStart = document.querySelector(".start");
const eleSelectLevel = document.querySelector("#select-level");

let bombNumbers;
let score;
let maxScore;

btnPlay.addEventListener("click", function() {
    score = 0;
    const nBombs = 16;

    eleGrid.innerHTML = "";
    eleStart.classList.add("hidden");
    eleGrid.classList.remove("hidden");

    const nCells = parseInt(eleSelectLevel.value);
    const sideSquare = Math.sqrt(nCells);
    eleGrid.style.setProperty("--sideSquare", sideSquare);

    maxScore = nCells - nBombs;
    bombNumbers = [];

    for (let i=1; i<=16; i++) {
        let randomNumber;
        do {
            randomNumber = getRndInteger(1, nCells);
        } while (bombNumbers.includes(randomNumber));
        bombNumbers.push(randomNumber);
    }

    console.log(bombNumbers.sort((a, b) => a - b));

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    

    for (i=1; i<=nCells; i++) {
        const eleCell = document.createElement("div");
        eleCell.classList.add("cell");
        eleCell.innerHTML = i;
        eleGrid.append(eleCell);

        eleCell.addEventListener("click", toggleCell);
    }

});

function toggleCell() {
    if (bombNumbers.includes(parseInt(this.innerHTML))) {
        disableCells();
        alert("Ops, hai pestato una bomba. Punti totalizzati: " + score);
        console.log("Ops, hai pestato una bomba. Punti totalizzati: " + score);
    } else {
        this.removeEventListener("click", toggleCell);
        score++;
        this.classList.add("active");
        if (score == maxScore) {
            alert("Complimenti hai vinto! Punti totalizzati: " + score);
            console.log("Complimenti hai vinto! Punti totalizzati: " + score);
            disableCells();
        }
    }
}

function disableCells() {
    const allCells = eleGrid.querySelectorAll(".cell");
        for (let i = 0; i < allCells.length; i++) {
            if (bombNumbers.includes(parseInt(allCells[i].innerHTML))) {
                    allCells[i].classList.add("bomb");
            }
            allCells[i].removeEventListener("click", toggleCell);
        }
}