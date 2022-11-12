// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked submit");
            } else if (this.getAttribute("data-type") === "next-question") {
                alert("you clicked next question");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
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

    
    

    if(gameType === "Sports") {
        displaySportsQuestion();
    }
    else {
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

function nextQuestion() {
    document.GetElementsByClassName("next-question") = i++

}
function displaySportsQuestion() {
    let sportsQuestion = [
        { question: ["Which country won the 2019 Rugby World Cup?"],
          optionA: ["South Africa"],
          optionB: ["England"],
          optionC: ["Wales"],
          correctOption: ["optionA"]
         },
         { question: ["How many F1 championships has Lewis Hamilton won?"],
           optionA: ["4"],
           optionB: ["2"],
           optionC: ["7"],
           correctOption: ["optionC"]
        },
        { question: ["How many balls are in total are there on the table at the start of a game of snooker, including the white?"],
           optionA: ["20"],
           optionB: ["22"],
           optionC: ["18"],
           correctOption: ["optionB"]
        },
        { question:["Who were Man Utd playing when Eric Cantona leaped into the crowd and kicked a fan?"],
           optionA: ["Crystal Palace"],
           optionB: ["Everton"],
           optionC: ["Liverpool"],
           correctOption: ["optionA"]
        },
        { question: ["What is Usain Bolts world record time for 100m?"],
           optionA: ["10 seconds"],
           optionB: ["9.58 seconds"],
           optionC: ["9.2 seconds"],
           correctOption: ["optionB"]
        },
        { question: ["Which team did Kobe Bryant spend his basketball career with?"],
           optionA: ["Chicago Bulls"],
           optionB: ["New York Knicks"],
           optionC: ["LA Lakers"],
           correctOption: ["optionC"]
        },
        { question: ["Which country did F1 legend Ayrton Senna come from?"],
           optionA: ["Brasil"],
           optionB: ["Argentina"],
           optionC: ["Columbia"],
           correctOption: ["optionA"]
        },
        { question: ["Who has scored the most Premier League hat-tricks?"],
           optionA: ["Sergio Agüero"],
           optionB: ["Alan Shearer"],
           optionC: ["Robbie Fowler"],
           correctOption: ["optionA"]
        },
        { question:  ["Who did Cristiano Ronaldo make his Premier League debut against in 2003?"],
           optionA: ["Manchester City"],
           optionB: ["Bolton Wanderers"],
           optionC: ["Newcastle"],
           correctOption: ["optionB"]
        },
        { question:["Who did Conor McGregor fight in a one-off boxing match in 2017?"],
           optionA: ["Antony Joshua"],
           optionB: ["Tyson Furry"],
           optionC: ["Floyd Mayweather"],
           correctOption: ["optionC"]
        },
             ];
    let i = 0

    document.getElementById("display-question").innerHTML = sportsQuestion[i].question;
    document.getElementById("option1").innerHTML = sportsQuestion[i].optionA;
    document.getElementById("option2").innerHTML = sportsQuestion[i].optionB;
    document.getElementById("option3").innerHTML = sportsQuestion[i].optionC; 
    
}

function displayMoviesQuestion() {

}

function displayGeographyQuestion() {

}

function displayHisotryQuestion() {

}