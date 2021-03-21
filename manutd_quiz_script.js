//create an array with all the years that Man Utd have won the Premier League
//create an input section for the "years"
//every time the year matches a year in the array increase score by one
//BUT you can't repeat years. otherwise you could fix the game.
//SO, store all the inputs into a separate array and any new input must be checked against this array. Output "Error you have already used this number."

//create an array called titleYears
//create an input section in the HTML
//each time they click submit the value should go to a playerAttempts array

const titleYears = [
    "1993",
    "1994",
    "1996",
    "1997",
    "1999",
    "2000",
    "2001",
    "2003",
    "2007",
    "2008",
    "2009",
    "2011",
    "2013",
];

let playerAttempts = [];

document.querySelector(".start").addEventListener("click", function() {
    document.querySelector("#input-area").classList.add("visible");
});

//reset game
document.querySelector(".reset-game").addEventListener("click", function() {
    location.reload();
});

document.querySelector(".submit").addEventListener("click", function() {
    //capturing the entry into a variable 'guess'
    const guess = document.querySelector(".submission").value;

    //checking for blank entry
    if (guess === "") {
        alert("No entry detected. Try again!");
        return;
    }

    //checking for repeat guessing
    for (x = 0; x < playerAttempts.length; x++) {
        if (playerAttempts[x] === guess) {
            alert("You have already played this year, try a different year!");
            return;
        }
    }

    //updating the player's entries array
    playerAttempts.push(guess);
    console.log(`The current guessed attempt is ${guess}`);

    //clearing the input field after each entry
    // document.querySelector(".submission").value = " ";

    //updating 'number of submissions' counter
    document.querySelector(".submissions-counter").textContent =
        Number(document.querySelector(".submissions-counter").textContent) + 1;

    //updating 'your score' counter
    for (i = 0; i < titleYears.length; i++) {
        if (titleYears[i] === guess) {
            document.querySelector(".score-counter").textContent =
                Number(document.querySelector(".score-counter").textContent) + 1;
        }
    }

    console.log(playerAttempts);
});