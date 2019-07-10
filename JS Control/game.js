var secretNumber = 4;

var guessNumber = prompt("guess a number");

if (guessNumber < secretNumber) {
    alert("Nay, too low!");
}
else if (guessNumber > secretNumber) {
    alert("Oops, you are way too high!");
}
else {
    alert("Your lucky day, you guessed it!");
}