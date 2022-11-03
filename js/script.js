const btnPlay = document.getElementById("btn-play");
const eleGrid = document.querySelector(".grid");
const eleStart = document.querySelector(".start");

btnPlay.addEventListener("click", function() {
    eleGrid.innerHTML = "";
    eleStart.classList.add("hidden");
    eleGrid.classList.remove("hidden");

    for (i=1; i<=100; i++) {
        const eleCell = document.createElement("div");
        eleCell.classList.add("cell");
        eleCell.innerHTML += i;
        eleGrid.append(eleCell);

        eleCell.addEventListener("click", function() {
            eleCell.classList.toggle("active");
        });
    }
});