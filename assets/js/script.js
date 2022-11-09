// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gametype);
            }
        });
        
    }
    runGame("Sports")
});
/**
 * The main game "loop", called when the script is loaded
 * and after the user's answer is processed 
 */
function runGame(gameType) {

    let sportsQuestion = ["Who has won more Grand Slams, Roger Federer or Serena Williams?", "Which country won the 2019 Rugby World Cup?", "How many F1 championships has Lewis Hamilton won?", "How many balls are in total are there on the table at the start of a game of snooker, including the white?", "What colours are the five Olympic rings?", "What is Usain Bolts world record time for 100m?", "Which team did Kobe Bryant spend his basketball career with?","Which country did F1 legend Ayrton Senna come from?", "Who has scored the most Premier League hat-tricks?", "Who did Cristiano Ronaldo make his Premier League debut against in 2003?"];
    for (let i = 0; i < sportsQuestion.length; i++) {
        i >= sportsQuestion.length
    
    }

    if(gameType === "Sports") {
        displaySportsQuestion(sportsQuestion[0]);
    } else {
        alert(`unkown game type ${gameType}`);
    }

}

function checkAnswer() {

}

function calucalteCorrectAnswer() {

}

function incrementScore() {

}

function incrmentWrongAnswer() {

}

function displaySportsQuestion(operand1) {
    document.getElementById('operand1').textContent = operand1;

}

function displayMoviesQuestion() {

}

function displayGeographyQuestion() {

}

function displayHisotryQuestion() {

}