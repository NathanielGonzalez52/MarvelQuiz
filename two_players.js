

function playersNames() {
  var playerOne = document.getElementById("playerOne").value;
  var playerTwo = document.getElementById("playerTwo").value;
  console.log(playerOne);
  console.log(playerTwo);
}

const ready = document.getElementsByClassName("confirm")[0];

ready.addEventListener("click", () => {
  // console.log("working");
  var playerOne = document.getElementById("playerOne").value;
  var playerTwo = document.getElementById("playerTwo").value;
  if (playerOne == "" || playerTwo == "") {
    alert("Please enter names for both players.")
  }
  else {
    localStorage.getItem("playerOne", playerOne);
    localStorage.getItem("playerTwo", playerTwo);
    window.location = "playerOne.html";
  }

})
