function rollDices() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

    var player1Value = document.querySelector(".img1").getAttribute("src");
    var player2Value = document.querySelector(".img2").getAttribute("src");

    if (player1Value === player2Value) {
        document.querySelector(".container h1").innerHTML = "Draw!";
    }
    else if (player1Value > player2Value) {
        document.querySelector(".container h1").innerHTML = "Dabbu Wins!";
    }
    else {
        document.querySelector(".container h1").innerHTML = "Rest of the World Wins!";
    }
}
