var randomLoc = Math.floor (Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hitscount = 0;
var guessescount = 0;
var isSunk = false;
var choice = [];

while (isSunk == false) {
    guess = prompt ("Hi! This is a mini Battleship game :) Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert ("Please enter a valid cell number");
    }   else {
        guessescount = guessescount + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert ("Hit!");

            hitscount = hitscount + 1;

            if (choice.includes(guess)){
                console.log("you have fired at this location already");
              }
            if (hitscount == 3) {
                isSunk = true;
                alert ("Good job! The battleship is sunk!");
            }
        }
            else {
                alert ("Miss!")
            }
        }
    }

    var stats = "You took " + guessescount + " guesses to sink the battleship. Your shooting accuracy was " + (3 / guessescount);
    alert (stats);
