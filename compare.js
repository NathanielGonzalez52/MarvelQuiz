playerOne = localStorage.getItem("playerOne");
playerTwo = localStorage.getItem("playerTwo");

const greeting = document.getElementsByClassName("playerGreeting")[0];

greeting.innerText = playerOne + " got " + "score" + " questions correct. \n " + playerTwo + " got " + "score" + " questions correct." ;
