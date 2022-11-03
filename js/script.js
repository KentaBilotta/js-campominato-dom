const btnPlay = document.getElementById("btn-play");
const eleGrid = document.querySelector(".grid");
const eleStart = document.querySelector(".start");
const eleSelectLevel = document.querySelector("#select-level");

btnPlay.addEventListener("click", function() {

    eleGrid.innerHTML = "";
    eleStart.classList.add("hidden");
    eleGrid.classList.remove("hidden");

    const nCells = parseInt(eleSelectLevel.value);
    const sideSquare = Math.sqrt(nCells);
    eleGrid.style.setProperty("--sideSquare", sideSquare);

        
    const Numbers = [];

    for (let i=1; i<=16; i++) {
        const randomNumber = getRndInteger(1, nCells);
        console.log(randomNumber);
        Numbers.push(randomNumber);
    }

    console.log(Numbers);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    

    for (i=1; i<=nCells; i++) {
        const eleCell = document.createElement("div");
        eleCell.classList.add("cell");
        eleCell.innerHTML += i;
        eleGrid.append(eleCell);

        if (Numbers.includes(i)) {
            eleCell.addEventListener("click", function() {
                eleCell.classList.toggle("bomb");
            });
            } else {
                eleCell.addEventListener("click", function() {
                    eleCell.classList.toggle("active");
                });
            }
    }

});