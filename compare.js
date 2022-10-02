playerOne = localStorage.getItem("playerOne");
playerTwo = localStorage.getItem("playerTwo");
oneScore = localStorage.getItem("oneScore");
twoScore = localStorage.getItem("twoScore");
const greeting = document.getElementsByClassName("playerGreeting")[0];
const winner = document.getElementsByClassName("winner")[0];
const oneAnswer = document.getElementsByClassName("oneAnswer")[0];
const twoAnswer = document.getElementsByClassName("twoAnswer")[0];

oneAnswer.innerText = playerOne + "'s answer key";
twoAnswer.innerText = playerTwo + "'s answer key";

oneAnswer.addEventListener("click", ()=> {
  window.location = "oneAnswerKey.html";
})

twoAnswer.addEventListener("click", ()=> {
  window.location = "twoAnswerKey.html";
})

var tie = false;

winningPlayer = "";

if (oneScore == twoScore) {
  tie = true;
}

else if (oneScore > twoScore) {
  winningPlayer = playerOne;
}

else {
  winningPlayer = playerTwo;
}

greeting.innerText = playerOne + " got " + oneScore + " questions correct. \n " + playerTwo +
" got " + twoScore + " questions correct."

if (!tie) {
  winner.innerText = "Congratulations, " + winningPlayer + "!\n You are the more loyal fan!"
}

else {
  winner.innerText = "It's a tie! \nGuess you'll have to try again, true-believers..."
}

const playAgain = document.getElementsByClassName("play-again")[0];

playAgain.addEventListener("click", () => {
  window.location = "welcome.html";
})
