// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    console.log("page has loaded")
    runGame()
});

const sportsQuestions = [

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

]

const moviesQuestions = [

    { question: ["What is the name of the actor who plays the new 007 in the upcoming Bond film No Time To Die?"],
       optionA: ["Lashana Lynch"],
       optionB: ["Penélope Cruz"],
       optionC: ["Halle Berry"],
       correctOption: ["optionA"]
      },
      { question: ["How many Steven Spielberg films has Tom Hanks starred in?"],
        optionA: ["4"],
        optionB: ["5"],
        optionC: ["7"],
        correctOption: ["optionB"]
     },
     { question: ["What year was the first Toy Story film released in cinemas?"],
        optionA: ["1995"],
        optionB: ["1997"],
        optionC: ["2000"],
        correctOption: ["optionA"]
     },
     { question:["Who directed Titanic, Avatar and The Terminator?"],
        optionA: ["Steven Spielberg"],
        optionB: ["Martin Scorsese"],
        optionC: ["James Cameron"],
        correctOption: ["optionC"]
     },
     { question: ["Which Oscar-winning actress is the voice of Helen Parr (Elastigirl) in The Incredibles?"],
        optionA: ["Holly Hunter"],
        optionB: ["Sarah Vowell"],
        optionC: ["Elizabeth Peña"],
        correctOption: ["optionA"]
     },
     { question: ["Which actor broke two toes whilst filming The Lord of the Rings: The Two Towers?"],
        optionA: ["Sala Baker"],
        optionB: ["Viggo Mortensen"],
        optionC: ["Ian McKellen"],
        correctOption: ["optionB"]
     },
     { question: ["What is the first word spoken in Star Wars: The Empire Strikes Back?"],
        optionA: ["Echo"],
        optionB: ["Jedi"],
        optionC: ["Star"],
        correctOption: ["optionA"]
     },
     { question: ["Who played the lead role in the 2001 film Lara Croft: Tomb Raider?"],
        optionA: ["Jon Voight"],
        optionB: ["Daniel Craig"],
        optionC: ["Angelina Jolie"],
        correctOption: ["optionC"]
     },
     { question:  ["How many Academy Awards has Leonardo DiCaprio won?"],
        optionA: ["1"],
        optionB: ["2"],
        optionC: ["3"],
        correctOption: ["optionA"]
     },
     { question:["What does Tom Hanks compare life to in Forest Gump?"],
        optionA: ["Jenny"],
        optionB: ["A box of chocolates"],
        optionC: ["Shrimp boating"],
        correctOption: ["optionB"]
     }, 
 
 ]

let index = 0;
let gameType = "Sports";

/**
 * The main game "loop", called when the script is loaded
 * and after the user's answer is processed 
 */
function runGame() {
    if(gameType === "Sports") {
        displaySportsQuestion();
    } else if(gameType === "Movies") {
        displayMoviesQuestion();
    } else {
        alert("unkown game type");
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

function displaySportsQuestion() {

    document.getElementById("display-question").innerHTML = sportsQuestions[index].question;
    document.getElementById("option1").innerHTML = sportsQuestions[index].optionA;
    document.getElementById("option2").innerHTML = sportsQuestions[index].optionB;
    document.getElementById("option3").innerHTML = sportsQuestions[index].optionC;
    
}

function displayMoviesQuestion() {
    gameType = "Movies"
    document.getElementById("display-question").innerHTML = moviesQuestions[index].question;
    document.getElementById("option1").innerHTML = moviesQuestions[index].optionA;
    document.getElementById("option2").innerHTML = moviesQuestions[index].optionB;
    document.getElementById("option3").innerHTML = moviesQuestions[index].optionC;
}

function displayGeographyQuestion() {

}

function displayHisotryQuestion() {
    gameType = "History";
    currentQuestions = historyQuestions;
    runGame();
}

function nextQuestion() {
    index++;
    runGame();
}