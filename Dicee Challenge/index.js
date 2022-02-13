function rollDice() {

  var randomNumber1F;
  var randomNumber2F;
  document.getElementsByClassName("h1")[0].innerHTML = "";
  document.getElementById("clickMe").innerHTML = "Rolling...";


  function rollFirst1() {
    var randomNumber11 = Math.ceil(Math.random() * 6);
    var randomImg11 = "img/dice" + randomNumber1 + ".png";
    document.getElementsByClassName("img1")[0].setAttribute("src", randomImg11);
  }

  function rollFirst2() {
    var randomNumber12 = Math.ceil(Math.random() * 6);
    var randomImg12 = "img/dice" + randomNumber12 + ".png";
    document.getElementsByClassName("img1")[0].setAttribute("src", randomImg12);
  }

  function rollFirst3() {
    var randomNumber13 = Math.ceil(Math.random() * 6);
    var randomImg13 = "img/dice" + randomNumber13 + ".png";
    document.getElementsByClassName("img1")[0].setAttribute("src", randomImg13);
  }

  function rollFirst4() {
    var randomNumber14 = Math.ceil(Math.random() * 6);
    var randomImg14 = "img/dice" + randomNumber14 + ".png";
    document.getElementsByClassName("img1")[0].setAttribute("src", randomImg14);
  }

  function rollFirstF() {
    randomNumber1F = Math.ceil(Math.random() * 6);
    var randomImg1F = "img/dice" + randomNumber1F + ".png";
    document.getElementsByClassName("img1")[0].setAttribute("src", randomImg1F);
  }



  function rollSecond1() {
    var randomNumber21 = Math.ceil(Math.random() * 6);
    var randomImg21 = "img/dice" + randomNumber21 + ".png";
    document.getElementsByClassName("img2")[0].setAttribute("src", randomImg21);
  }

  function rollSecond2() {
    var randomNumber22 = Math.ceil(Math.random() * 6);
    var randomImg22 = "img/dice" + randomNumber22 + ".png";
    document.getElementsByClassName("img2")[0].setAttribute("src", randomImg22);
  }

  function rollSecond3() {
    var randomNumber23 = Math.ceil(Math.random() * 6);
    var randomImg23 = "img/dice" + randomNumber23 + ".png";
    document.getElementsByClassName("img2")[0].setAttribute("src", randomImg23);
  }

  function rollSecond4() {
    var randomNumber24 = Math.ceil(Math.random() * 6);
    var randomImg24 = "img/dice" + randomNumber24 + ".png";
    document.getElementsByClassName("img2")[0].setAttribute("src", randomImg24);
  }

  function rollSecondF() {
    randomNumber2F = Math.ceil(Math.random() * 6);
    var randomImg2F = "img/dice" + randomNumber2F + ".png";
    document.getElementsByClassName("img2")[0].setAttribute("src", randomImg2F);

  }

  setTimeout(rollFirst1, 200);
  setTimeout(rollSecond1, 400);
  setTimeout(rollFirst2, 600);
  setTimeout(rollSecond2, 800);
  setTimeout(rollFirst3, 1000);
  setTimeout(rollSecond3, 1200);
  setTimeout(rollFirst4, 1400);
  setTimeout(rollSecond4, 1600);
  setTimeout(rollFirstF, 1800);
  setTimeout(rollSecondF, 2000);

  function result() {
    if (randomNumber1F === randomNumber2F) {
      document.getElementsByClassName("h1")[0].innerHTML = "It's a draw!"
    } else if (randomNumber1F > randomNumber2F) {
      document.getElementsByClassName("h1")[0].innerHTML = "🚩 Player 1 wins!"
    } else {
      document.getElementsByClassName("h1")[0].innerHTML = "Player 2 wins! 🚩"
    }

    document.getElementById("clickMe").innerHTML = "Roll again!"
  }

  setTimeout(result, 2200);
}

document.getElementById("clickMe").onclick = rollDice;
