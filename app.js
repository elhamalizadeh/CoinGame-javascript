const coinArray = ["Heads", "Tails"];
let score = [0, 0];

let message = document.querySelector(".message");
let buttons = document.querySelectorAll("button");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
  console.log(e.target.innerText);
  let playerGuess = e.target.innerText;
  let computerToss = Math.floor(Math.random() * 2);
  let computerGuess = coinArray[computerToss];
  message.innerHTML = "Computer Selected: " + computerGuess;
  let output;
  if (playerGuess === computerGuess) {
    output = " <br/> <b> Player Win </b>";
    score[0]++;
    var color = "green";
  } else {
    output = " <br/> <b>Computer Win </b>";
    score[1]++;
    var color = "red";
  }
  message.innerHTML +=
    output + "<br/> Player : " + score[0] + " Computer : " + score[1];
    message.style.color = color;
}