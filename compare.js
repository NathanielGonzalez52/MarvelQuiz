playerOne = localStorage.getItem("playerOne");
playerTwo = localStorage.getItem("playerTwo");
oneScore = localStorage.getItem("oneScore");
twoScore = localStorage.getItem("twoScore");
const greeting = document.getElementsByClassName("playerGreeting")[0];

greeting.innerText = playerOne + " got " + oneScore + " questions correct. \n " + playerTwo + " got " + twoScore + " questions correct." ;
