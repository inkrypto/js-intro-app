var winningBox = Math.floor((Math.random() * 3)); // Picks a random number between 0 and 2:

function guessBox(boxGuessed) {

  if (boxGuessed === winningBox) {
    alert("You win!");
  } else {
    console.log("wrong");
  }

}


