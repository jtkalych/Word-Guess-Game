// global variables
var letters = ["x", "q", "t","u"];
var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 10;
var wins = 0;
var losses = 0;

// functions
var updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};
var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var reset = function() {
    guessesLeft = 10;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

// code starts here -- initialize stuff
updateLetterToGuess();
updateGuessesLeft();

// wait for key press 
document.onkeydown = function(event) {guessesLeft--;
    var letter = event.key.toLowerCase();

    guessedLetters.push(letter);

    updateGuessesLeft();
    updateGuessesSoFar();

    if (letter === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    } else {
        losses++; 
        document.querySelector("#losses").innerHTML = losses;
    }
    if (guessesLeft <=0) {
       
        reset();
    }
  };
  