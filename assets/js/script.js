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

runGame()

checkAnswer()

calucalteCorrectAnswer()

increment+Score()

incrment+WrongAnswer()

displaySportQuestion()

displayMoviesQuestion()

displayGeographyQuestion()

displayHisotryQuestion()