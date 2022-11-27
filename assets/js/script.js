// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
   console.log("page has loaded")
   gameEntry();
});
/* four categories of ten questions each */
const sportsQuestions = [

   { 
      question: ["Which country won the 2019 Rugby World Cup?"],
      optionA: ["South Africa"],
      optionB: ["England"],
      optionC: ["Wales"],
      correctOption: "South Africa"
   },

   { 
      question: ["How many F1 championships has Lewis Hamilton won?"],
      optionA: ["4"],
      optionB: ["2"],
      optionC: ["7"],
      correctOption: "7"
   },

   { 
      question: ["How many balls are in total are there on the table at the start of a game of snooker, including the white?"],
      optionA: ["20"],
      optionB: ["22"],
      optionC: ["18"],
      correctOption: "22"
   },

   { 
      question:["Who were Man Utd playing when Eric Cantona leaped into the crowd and kicked a fan?"],
      optionA: ["Crystal Palace"],
      optionB: ["Everton"],
      optionC: ["Liverpool"],
      correctOption: "Crystal Palace"
   },

   { 
      question: ["What is Usain Bolts world record time for 100m?"],
      optionA: ["10 seconds"],
      optionB: ["9.58 seconds"],
      optionC: ["9.2 seconds"],
      correctOption: "9.58 seconds"
   },

   { 
      question: ["Which team did Kobe Bryant spend his basketball career with?"],
      optionA: ["Chicago Bulls"],
      optionB: ["New York Knicks"],
      optionC: ["LA Lakers"],
      correctOption: "LA Lakers"
   },

   { 
      question: ["Which country did F1 legend Ayrton Senna come from?"],
      optionA: ["Brazil"],
      optionB: ["Argentina"],
      optionC: ["Columbia"],
      correctOption: "Brazil"
   },

   { 
      question: ["Who has scored the most Premier League hat-tricks?"],
      optionA: ["Sergio Agüero"],
      optionB: ["Alan Shearer"],
      optionC: ["Robbie Fowler"],
      correctOption: "Sergio Agüero"
   },

   { 
      question:  ["Who did Cristiano Ronaldo make his Premier League debut against in 2003?"],
      optionA: ["Manchester City"],
      optionB: ["Bolton Wanderers"],
      optionC: ["Newcastle"],
      correctOption: "Bolton Wanderers"
   },

   { 
      question:["Who did Conor McGregor fight in a one-off boxing match in 2017?"],
      optionA: ["Antony Joshua"],
      optionB: ["Tyson Furry"],
      optionC: ["Floyd Mayweather"],
      correctOption: "Floyd Mayweather"
   }, 

]

const moviesQuestions = [

   { 
      question: ["What is the name of the actor who plays the new 007 in the upcoming Bond film No Time To Die?"],
      optionA: ["Lashana Lynch"],
      optionB: ["Penélope Cruz"],
      optionC: ["Halle Berry"],
      correctOption: "Lashana Lynch"
   },

   { 
      question: ["How many Steven Spielberg films has Tom Hanks starred in?"],
      optionA: ["4"],
      optionB: ["5"],
      optionC: ["7"],
      correctOption: "5"
   },

   { 
      question: ["What year was the first Toy Story film released in cinemas?"],
      optionA: ["1995"],
      optionB: ["1997"],
      optionC: ["2000"],
      correctOption: "1995"
   },

   { 
      question: ["Who directed Titanic, Avatar and The Terminator?"],
      optionA: ["Steven Spielberg"],
      optionB: ["Martin Scorsese"],
      optionC: ["James Cameron"],
      correctOption: "James Cameron"
   },

   { 
      question: ["Which Oscar-winning actress is the voice of Helen Parr (Elastigirl) in The Incredibles?"],
      optionA: ["Holly Hunter"],
      optionB: ["Sarah Vowell"],
      optionC: ["Elizabeth Peña"],
      correctOption: "Holly Hunter"
   },

   { 
      question: ["Which actor broke two toes whilst filming The Lord of the Rings: The Two Towers?"],
      optionA: ["Sala Baker"],
      optionB: ["Viggo Mortensen"],
      optionC: ["Ian McKellen"],
      correctOption: "Viggo Mortensen"
   },

   { 
      question: ["What is the first word spoken in Star Wars: The Empire Strikes Back?"],
      optionA: ["Echo"],
      optionB: ["Jedi"],
      optionC: ["Star"],
      correctOption: "Echo"
   },

   { 
      question: ["Who played the lead role in the 2001 film Lara Croft: Tomb Raider?"],
      optionA: ["Jon Voight"],
      optionB: ["Daniel Craig"],
      optionC: ["Angelina Jolie"],
      correctOption: "Angelina Jolie"
   },

   { 
      question: ["How many Academy Awards has Leonardo DiCaprio won?"],
      optionA: ["1"],
      optionB: ["2"],
      optionC: ["3"],
      correctOption: "1"
   },

   { 
      question: ["What does Tom Hanks compare life to in Forest Gump?"],
      optionA: ["Jenny"],
      optionB: ["A box of chocolates"],
      optionC: ["Shrimp boating"],
      correctOption: "A box of chocolates"
   }, 
 
]

const geographyQuestions = [

   { 
      question: ["What country has the longest coastline in the world? "],
      optionA: ["Canada"],
      optionB: ["Spain"],
      optionC: ["United Knigdom"],
      correctOption: "Canada"
   },

   { 
      question: ["What is the capital of Malta?"],
      optionA: ["Mdina"],
      optionB: ["Valetta"],
      optionC: ["Sliema"],
      correctOption: "Valetta"
   },

   { 
      question: ["What country is the newest in the world to be recognised by the UN?"],
      optionA: ["Albania"],
      optionB: ["Brazil"],
      optionC: ["South Sudan"],
      correctOption: "South Sudan"
   },

   { 
      question: ["In which UK city would you find the river Clyde?"],
      optionA: ["London"],
      optionB: ["Glasgow"],
      optionC: ["Manchester"],
      correctOption: "Glasgow"
   },

   { 
      question: ["What is the oldest recorded town in the UK?"],
      optionA: ["Colchester"],
      optionB: ["Stamford"],
      optionC: ["Oundle"],
      correctOption: "Colchester"
   },

   { 
      question: ["If you travelled to the city of Volgograd, which country would be in?"],
      optionA: ["Switzerland"],
      optionB: ["Austria"],
      optionC: ["Russia"],
      correctOption: "Russia"
   },

   { 
      question: ["What is the name of the largest river to flow through Paris?"],
      optionA: ["The Seine"],
      optionB: ["The Loire"],
      optionC: ["The Garonne"],
      correctOption: "The Seine"
   },

   { 
      question: ["What did Ceylon change its name to in 1972?"],
      optionA: ["Sri Lanka"],
      optionB: ["Madagascar"],
      optionC: ["Bangladesh"],
      correctOption: "Sri Lanka"
   },

   { 
      question:  ["What is the most populous city in the US state of Illinois?"],
        optionA: ["Springfield"],
        optionB: ["Peoria"],
        optionC: ["Chicago"],
        correctOption: "Chicago"
   },

   { 
      question:["What is the highest mountain in Britain?"],
      optionA: ["Ben Nevis"],
      optionB: ["Scaffold Pike"],
      optionC: ["Snowden"],
      correctOption: "Ben Nevis"
   },

]
 
const historyQuestions = [
   
   { 
      question: ["Which saint was the first British Christian martyr?"],
      optionA: ["Saint Cecilla"],
      optionB: ["Cyprian"],
      optionC: ["Saint Alban"],
      correctOption: "Saint Alban"
   },

   { 
      question: ["Thon Buri was the capital of which Asian country during the 18th Century?"],
      optionA: ["Thailand"],
      optionB: ["Japan"],
      optionC: ["India"],
      correctOption: "Thailand"
   },

   { 
      question: ["Indian politician Sonia Gandhi was born in which country in 1946?"],
      optionA: ["Italy"],
      optionB: ["Spain"],
      optionC: ["Germany"],
      correctOption: "Italy"
   },

   { 
      question: ["Who was the first US President to be born in a hospital?"],
      optionA: ["Theodore Roosevelt"],
      optionB: ["Ronald Reagan"],
      optionC: ["Jimmy Carter "],
      correctOption: "Jimmy Carter"
   },

   { 
      question: ["Which artist fled Rome in 1606 after killing a man from Umbria?"],
      optionA: ["Titian"],
      optionB: ["Caravaggio "],
      optionC: ["Da Vinci"],
      correctOption: "Caravaggio"
   },

   {  
      question: ["English statesman John of Gaunt was regent to which future king of England while he was too young to take the throne?"],
      optionA: ["Richard II"],
      optionB: ["George III"],
      optionC: ["William IV"],
      correctOption: "Richard II"
   },

   { 
      question: ["What were the first names of poet W H Auden?"],
      optionA: ["Wallace Han"],
      optionB: ["William Hugh"],
      optionC: ["Wystan Hugh "],
      correctOption: "Wystan Hugh "
   },

   { 
      question: ["Seppuku, part of the code of Samurai warriors, is better known by what name?"],
      optionA: ["Hari-Kari"],
      optionB: ["Bushido"],
      optionC: ["Jin"],
      correctOption: "Hari-Kari"
   },

   { 
      question: ["In which year was Joan of Arc burnt at the stake"],
      optionA: ["1466"],
      optionB: ["1481"],
      optionC: ["1431"],
      correctOption: "1431"
   },

   { 
      question: ["In religion, who is said to be the maternal grandmother of Jesus?"],
      optionA: ["Saint Anne"],
      optionB: ["Saint Marie "],
      optionC: ["Saint Joan"],
      correctOption: "Saint Anne"
   },

]

let index = 0;
let currentQuestions = sportsQuestions;
let gameType = null;
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let options = document.getElementsByClassName("option");
let chosen = document.getElementsByClassName("chosen");
let score = document.getElementById("player-score");

function gameEntry() {

   disableGameButtons();
   document.getElementsByClassName("option")[0].style.display = "none";
   document.getElementsByClassName("option")[1].style.display = "none";
   document.getElementsByClassName("option")[2].style.display = "none";
   document.getElementById("display-question").style.display = "none";
   document.getElementById("opening").style.visibility = "visible";
   document.getElementById("type-category").style.visibility = "hidden";
   enableCategoryButtons();
   updateScore();
   updateQuestionNumber();
   wrongAttempt = 0;

}

/**
* The main game "loop", called when the script is loaded
* and after the user's answer is processed 
*/
function runGame() {
   
   updateScore();
   updateQuestionNumber();
   if(gameType === "Sports") {
      displaySportsQuestion();
   } else if(gameType === "Movies") {
      displayMoviesQuestion();
   } else if(gameType === "Geography") {
      displayGeographyQuestion();
   } else if(gameType === "History") {
      displayHistoryQuestion();
   } else {
      gameEntry();
   }

} 

function updateScore() {
   document.getElementById("player-score").innerHTML = playerScore;
}

function updateQuestionNumber() {
   document.getElementById("question-number").innerHTML = questionNumber;
}

function checkAnswer() {

    let currentQuestion = currentQuestions[index];
   let currentQuestionAnswer = currentQuestion.correctOption;
   let calculatedAnswer = document.getElementsByClassName("options-area")[0].dataset.chosen;

/* check the chosen option is correct or incorrect */
   if (calculatedAnswer === undefined) {
   document.getElementById("options-container-modal").style.display = "flex";
   } else if (currentQuestionAnswer === calculatedAnswer) {
      
      document.getElementById("correct-container-modal").style.display = "flex";
      playerScore++;
      updateScore();
      unSelect();
      index++;
      updateQuestionNumber()
      questionNumber++;
      makeWhite();

   } else {
      
      let answer = currentQuestionAnswer;
      document.getElementById("answer").innerHTML = answer;
      document.getElementById("incorrect-container-modal").style.display = "flex";
      unSelect();
      index++;
      wrongAttempt++;
      updateQuestionNumber()
      questionNumber++;
      makeWhite();

   }
}

function displaySportsQuestion() {

   gameType = "Sports";
   currentQuestions = sportsQuestions;
   document.getElementById("display-question").innerHTML = currentQuestions[index].question;
   document.getElementById("option1").innerHTML = currentQuestions[index].optionA;
   document.getElementById("option2").innerHTML = currentQuestions[index].optionB;
   document.getElementById("option3").innerHTML = currentQuestions[index].optionC;
   document.getElementsByClassName("option")[0].style.display = "block";
   document.getElementsByClassName("option")[1].style.display = "block";
   document.getElementsByClassName("option")[2].style.display = "block";
   document.getElementById("display-question").style.display = "block";
   document.getElementById("opening").style.visibility = "hidden";
   enableGameButtons();
   disableCategoryButtons();
   document.getElementById("type-category").innerHTML = "SPORTS CATEGORY";
   document.getElementById("type-category").style.color = "green";
   document.getElementById("type-category").style.visibility = "visible";

}

function displayMoviesQuestion() {

   gameType = "Movies";
   currentQuestions = moviesQuestions;
   document.getElementById("display-question").innerHTML = currentQuestions[index].question;
   document.getElementById("option1").innerHTML = currentQuestions[index].optionA;
   document.getElementById("option2").innerHTML = currentQuestions[index].optionB;
   document.getElementById("option3").innerHTML = currentQuestions[index].optionC;
   document.getElementsByClassName("option")[0].style.display = "block";
   document.getElementsByClassName("option")[1].style.display = "block";
   document.getElementsByClassName("option")[2].style.display = "block";
   document.getElementById("display-question").style.display = "block";
   document.getElementById("opening").style.visibility = "hidden";
   enableGameButtons();
   disableCategoryButtons();
   document.getElementById("type-category").innerHTML = "MOVIES CATEGORY";
   document.getElementById("type-category").style.color = "blue";
   document.getElementById("type-category").style.visibility = "visible";
}

function displayGeographyQuestion() {

   gameType = "Geography";
   currentQuestions = geographyQuestions;
   document.getElementById("display-question").innerHTML = currentQuestions[index].question;
   document.getElementById("option1").innerHTML = currentQuestions[index].optionA;
   document.getElementById("option2").innerHTML = currentQuestions[index].optionB;
   document.getElementById("option3").innerHTML = currentQuestions[index].optionC;
   document.getElementsByClassName("option")[0].style.display = "block";
   document.getElementsByClassName("option")[1].style.display = "block";
   document.getElementsByClassName("option")[2].style.display = "block";
   document.getElementById("display-question").style.display = "block";
   document.getElementById("opening").style.visibility = "hidden";
   enableGameButtons();
   disableCategoryButtons();
   document.getElementById("type-category").innerHTML = "GEOGRAPHY CATEGORY";
   document.getElementById("type-category").style.color = "purple";
   document.getElementById("type-category").style.visibility = "visible";
   
   
}

function displayHistoryQuestion() {
    
   gameType = "History";
   currentQuestions = historyQuestions;
   document.getElementById("display-question").innerHTML = currentQuestions[index].question;
   document.getElementById("option1").innerHTML = currentQuestions[index].optionA;
   document.getElementById("option2").innerHTML = currentQuestions[index].optionB;
   document.getElementById("option3").innerHTML = currentQuestions[index].optionC;
   document.getElementsByClassName("option")[0].style.display = "block";
   document.getElementsByClassName("option")[1].style.display = "block";
   document.getElementsByClassName("option")[2].style.display = "block";
   document.getElementById("display-question").style.display = "block";
   document.getElementById("opening").style.visibility = "hidden";
   enableGameButtons();
   disableCategoryButtons();
   document.getElementById("type-category").innerHTML = "HISTORY CATEGORY";
   document.getElementById("type-category").style.color = "red";
   document.getElementById("type-category").style.visibility = "visible";

}

function endGame() {

   if (index >= currentQuestions.length - 0) {
      
      endGameScore();
      index = 0;
      questionNumber = 1;
      playerScore = 0;
      gameType = null;
      gameEntry();
   } else if(index < 0){
      gameEntry();
   } else {
      runGame();
   }

}

function endGameScore() {
   
   let remark = null;
   let remarkColor = null;

   if (playerScore <= 5) {
      remark = "Bad score, keep practising"
      remarkColor = "red"
   } else if (playerScore >= 6 & playerScore <= 9) {
      remark = "Well done, Great effort"
      remarkColor = "orange"
   } else if (playerScore = 10) {
      remark = "Amazing you got them all right, try another category"
      remarkColor = "green"
   }

   const playerGrade = (playerScore / 10) *100

   document.getElementById("remarks").innerHTML = remark;
   document.getElementById("remarks").style.color = remarkColor;
   document.getElementById("grade-percentage").innerHTML = playerGrade;
   document.getElementById("wrong-answers").innerHTML = wrongAttempt;
   document.getElementById("right-answers").innerHTML = playerScore;
   document.getElementById("end-game-container-modal").style.display = "flex";


}

function selected(elem) {
   
   makeWhite();
   elem.style.backgroundColor = "green";      
   document.getElementsByClassName("options-area")[0].dataset.chosen = elem.innerText;
}  

function unSelect() {

   delete document.getElementsByClassName("options-area")[0].dataset.chosen;

}

function makeWhite() {
   
   document.getElementById("option1").style.backgroundColor = "white";
   document.getElementById("option2").style.backgroundColor = "white";
   document.getElementById("option3").style.backgroundColor = "white";
}

/*function hover() {
   
   document.getElementById("option1").onmouseover = function(){mouseOver()};
   document.getElementById("option2").onmouseover = function(){mouseOver()};
   document.getElementById("option3").onmouseover = function(){mouseOver()};
   document.getElementById("option1").onmouseout = function(){mouseOut()};
   document.getElementById("option2").onmouseout = function(){mouseOut()};
   document.getElementById("option3").onmouseout = function(){mouseOut()};
   
}

function mouseOver() {

   document.getElementById("option1").style.backgroundColor = "green";
   document.getElementById("option2").style.backgroundColor = "green";
   document.getElementById("option3").style.backgroundColor = "green";

}

function mouseOut() {

   document.getElementById("option1").style.backgroundColor = "white";
   document.getElementById("option2").style.backgroundColor = "white";
   document.getElementById("option3").style.backgroundColor = "white";

}*/

function disableCategoryButtons() {
   const category = document.getElementsByClassName("game-button");
   for (i = 0; i < category.length; ++i) {
      category[i].setAttribute('disabled', true);
      }
}

function disableGameButtons() {
   document.querySelector('.submit').disabled = true;
}

function enableCategoryButtons() {
   const category = document.getElementsByClassName("game-button");
   for (i = 0; i < category.length; ++i) {
      category[i].removeAttribute('disabled');
      }

}

function enableGameButtons() {
   document.querySelector('.submit').disabled = false;
}

function closeContainer() {
   document.getElementById("options-container-modal").style.display = "none";
   document.getElementById("correct-container-modal").style.display = "none";
   document.getElementById("incorrect-container-modal").style.display = "none";
   document.getElementById("end-game-container-modal").style.display = "none";
   endGame();
}