function rollDice() {

  var randomNumber1 = Math.ceil(Math.random() * 6);
  var randomNumber2 = Math.ceil(Math.random() * 6);

  var randomImg1 = "img/dice" + randomNumber1 + ".png";
  var randomImg2 = "img/dice" + randomNumber2 + ".png";

  document.getElementsByClassName("img1")[0].setAttribute("src", randomImg1);
  document.getElementsByClassName("img2")[0].setAttribute("src", randomImg2);

  if (randomNumber1 === randomNumber2) {
    document.getElementsByClassName("h1")[0].innerHTML = "It's a draw!"
  } else if (randomNumber1 > randomNumber2) {
    document.getElementsByClassName("h1")[0].innerHTML = "🚩 Player 1 wins!"
  } else {
    document.getElementsByClassName("h1")[0].innerHTML = "Player 2 wins! 🚩"
  }
document.getElementById("clickMe").innerHTML = "Roll agian!"
}

document.getElementById("clickMe").onclick = rollDice;
