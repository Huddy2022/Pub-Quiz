// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit")
            } else {
                alert("Game not ready")
            }
        })
        
    }
});

function runGame() {

}

function checkAnswer() {

}

function calucalteCorrectAnswer() {

}

function incrementScore() {

}

function incrmentWrongAnswer() {

}

function displaySportQuestion() {

}

function displayMoviesQuestion() {

}

function displayGeographyQuestion() {

}

function displayHisotryQuestion() {

}