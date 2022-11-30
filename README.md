# Pub Quiz #

The Live link can be found here - https://huddy2022.github.io/Pub-Quiz/

The pub quiz is a site aimed for any enthusiast of general knowledge that wants to challenge themselves with a fun quiz, with a variety of categories ranging from sports, movies, geography and history. The site will be targeted to a ranged audience of early teens to adults that have a keen interest in challenging themselves in a variety of subjects to test their general knowledge skills. The pub quiz can be challenging but encourages the user to push themselves to a achieve a perfect score in each category (thanks to the final score container), and even if they dont succeed first time around the user will be allowed to try again as many times as they wish until they reach 100% on any given category. If a question is answered wrong the computer will generate the right answer so the user can understand and learn.

![Responsive Mockup](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Am-I-Responsive.jpg)

## Features ##

- __Favicon__

  - Created a favicon for the website as a beer mug as a bit of fun for the user to feel more like a pub theme.

![Favicon](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Favicon.jpg)
- __Header__

  - The header grabs the attention of the user and with the help of the help of the font awesome Icon give its a bit of fun.
  - Explains to the user simply what this website is all about

![Header](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Header.jpg)

### Game area ###

![Game Area](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Game-Area.jpg)

- __Categories__

  - There are four categories in total, sports, movies, geography and history to offer the user variety.
  - All categories have ten questions in total to make it challenging.
  - Each category has a differnt color to give the overall webpage a bit more colourfull.
  - Once you have selected a category the category title will be displayed at the top of the page to remind the user which category they are in.
  - Once the user has selected a category the category buttons are disabled so the user has to complete the current quiz before starting another category.
  - Once the user has completed the quiz all the category buttons are enabled again.
  - At the start of the game there is a heading alerting the user they must select a category to start the game.

![Active category](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Category-Actioned.jpg)

- __Display Question__

  - The display question is wrapped in a container with a black background and yellow border to stand out.
  - Each question is displayed in this contained and a font color of white to be easily readable. 
  - The question will be hidden at the start of the game until the user has selected a category.
  - Once the user has submited an answer from the options the displayed question will autmotically change to the next question.

![Display Question](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Display-Question.jpg)

- __Options section__

  - The options section is wrapped in a similar container to the display question to give a better contrast on the game area.
  - In the options section there are three options for the user to click on.
  - Each option will turn green once the user has selected which answer they wish to go for.
  - The user is allowed to change their answer to a different option before they click submit.
  - The option buttons are hidden at the start of the game until the user has selected a category.
  - The user must select an option, otherwise if they click submit a pop up container will come up alerting the user to pick an option before moving forward.
  - Once the user has selceted and option and clicked submit, the option colors will revert back to white for the next question. 

- __Submit button__

   - The submit button is background yellow to stand out with black font to contrast well together.
   - The submit button has an onclick event which links to the checkAnswer function
   - Once the user has clicked on submit it will either check the option the user has selected or if nothing chosen will pop up with the please pick an option container.
   - If the user has selected the correct option, after clicking submit a pop up container saying congratulations will appear.
   - If the user has selected the incorrect option, after submit a pop up container saying incorrect answer and will show the user the right answer, so they can learn from it.
   - If the user clicks submit and all the questions have been answered it will pop up with the end game score container.
   - The submit button will be disabled at the start of the game until the user has selected a category.

![options & submit](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Options-%26-Submit.jpg)

- __Pop up container__

  - The pop up container is ther to alert the user on what they have done or what they should be doing.
  - There is a container to alert the user if they havent clicked on an option.
  - There is a container to alert the user if it was the correct answer with a font awesome smiley face.
  - Another container for the incorrect answer with a sad face and the correct answer displayed to help the user.
  - The final container works in three ways depending on what the users score is, such as a low, medium or 100%.

![pick an option](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/pick-an-option.jpg)
![correct answer](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Correct-option.jpg)
![incorrect answer](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Incorrect-option.jpg)
![low score end game](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/low-end-score.jpg)
![medium score end game](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Medium-end-score.jpg)
![100% end game](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/100%25-end-score.jpg)

- __Player score and Question number footer__ 

  - The player score will start on 0 and will be updated on each answer the user gets correct
  - The question number will start on 1 and will be updated when the user has submitted there answer on the previous question.
  - Once the user has completed one of the category quiz's the player score and question number will be reset.

![Footer](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Score-Area.jpg)

## Testing ##

- __Testing__

| Tested  | Display  | Fits in container | Disables/Hide/Visible | Media Quieries | Display title | On click function| hover/click color change| Resets end game/updates during|
| :------------ |:---------------:| :-----:| :------------:| :------------:| :-------------:| :-------:| :--------:| -------:|
| Sports Category | Displays all questions | Yes | Works | fits on all screens | Yes| Works| Works|n/a|
| Movies Category  | Displays all questions | Yes | Works| fits on all screens | Yes| Works|Works|n/a|
| Geography Category | Displays all questions | Yes| Works | fits on all screens | Yes|Works|Works|n/a|
| History Category | Displays all questions | Yes| Works | fits on all screens | Yes|Works|Works|n/a|
| Opening container | Displays heading | Yes| Works | fits on all screens | n/a|n/a|n/a|Works|
| Option one | Displays all option 1 answers | Yes| Works | fits on all screens | n/a|Works|Works|Works|
| Option two | Displays all option 2 answers | Yes| Works | fits on all screens | n/a|Works|Works|Works|
| Option three | Displays all option 3 answers | Yes| Works | fits on all screens | n/a|Works|Works|Works|
| Submit | Displays submit answer| Yes| Works | fits on all screens | n/a|Works|Works|n/a|
| Player score | Displays player score| Yes| Works | fits on all screens | n/a|Works|Works|Works|
| Question Number | Displays question number| Yes| n/a | fits on all screens | n/a|Works|Works|Works|
| Display Container| Displays please pick an option| Yes| Works | fits on all screens | n/a|Works|Works|Works|
| Display Container| Displays correct answer| Yes| Works | fits on all screens | n/a|Works|Works|Works|
| Display Container| Displays incorrect answer| Yes| Works | fits on all screens | n/a|Works|Works|Works|
| Display Container| Displays low score result| Yes| Works | fits on all screens | n/a|Works|Works|Works|
| Display Container| Displays medium score result| Yes| Works | fits on all screens | n/a|Works|Works|Works|
| Display Container| Displays 100% result| Yes| Works | fits on all screens | n/a|Works|Works|Works|

- I have tested through the whole the game, making sure all the questions are shown and fit in the display box. 
- All categories work once clicked and disabled once in the quiz, plus the category title shown once in the quiz. 
- I have also checked the player score and question number works throughout and even resets at the end of each game.
- All option buttons works, with the correct answers and onlick function to turn green.
- All the display containers work and show the relevant information to the user during the game.
 
### Validator Testing ###

- __HTML__
- Orginally i had 8 errors on the index.html.
- I can confirm now, no errors were returned when passing through the official w3c validator.

  ![W3C validator](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/W3C-Markup-validator.jpg)

- __CSS__
- Orginally i had one error on my style.css.
  - I can confirm now, no errors were found when passing through the official w3c css validator.
  
   ![Jigsaw validator](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/W3C-CSS-validator.jpg)

- __Javascript__
- I used the JSHint and orginally had 19 warnings. I can confirm there are no more warnings. JSHint is throwing some false positives regarding the undefined variables, but i have checked the console and the code works and there are no red dots next to my code. It also mentions about I have three unused variables but all three are used through the onClick event instead.

   ![JSHint validator](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/JShint.jpg)

- __Accessibility__
- I confirmed the colors and fonts are easy to read and i tested the colors i have chosen through the webaim contrast checker.
- I used the lighthouse in dev tools to test my web page on a desktop and mobile devices.

![Lighthouse mobile](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Mobile-lighthouse.jpg)
![Lighthouse desktop](https://github.com/Huddy2022/Pub-Quiz/blob/main/assets/images/Desktop-lighthouse.jpg)

### Bugs ###

- intially i tried a similar approach to the love maths project and tried a for loop with add event listners to start the game, but it didnt seem to work with the array questions - i fixed this by removing the add event listeners and focused on a onclick event with the submit and category buttons which would like to the rungame function and check answer function instead.
- one bug was getting the rungame function to correctly work. I corrected this bug by creating a game entry function to stop the game from starting until the user had clicked on a category.
- On the game entry it was looping through the whole game. I fixed this by hidding the visibilty of the options and disbaling the submit button until user had selected a category.
- Once a category quiz had started the user could click on another category which would carry on the same question number in the next category array. I fixed this by disabling the category buttons once the user had selected a category and started the quiz.
- When a category was chosen a bug i had was the computer didnt transfer through the next question in the array when a user submitted an answer - I fixed this by using the creating a variable index = 0 and added index++ when submitted correctly.
- checkanswer function was collecting the correct option in the array - i fixed this by .dataset.chosen which collected the correct option from the array and added it to the classname which was being submitted.
- next issue was once the user had selected the next question the previous correct answer was fixed which created all further question answers to be wrong - i fixed this by creating an unselect function which re set the array so when the next question had started the new correct answer will come from that array and not the previous question.
- when the user selected an option, it turned green but when the user submitted the answer and went to the next question the option would stay green - I fixed this by making a makewhite function to turn all the options back to white when the submit button was called.
- near the end the final score container continue button looped back through the run game function and basically started the same category quiz again without the users permitting this - i fixed this by using if and else statements and working the dom to go through and finish in the game entry function instead. 


### Un fixed bugs ###

- its not an unfixed bug, but i couldnt get the hover function to work on the options. It worked on the orginal question but once the makewhite function kicked in, i coudnt get the hover green to work properly afterwards. In the end i removed this function unfortunatley. 

## Deployment ##

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Main Branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://huddy2022.github.io/Pub-Quiz/


## Credits ##

### Content ###

- The text for the Home page (yoga) was taken from https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=1&contentid=2767
- The text for the Home page (pilates) was taken from https://dianesingleton.com/pilates
- The list content for the yoga classes was taken from https://www.myprotein.com/thezone/training/10-basic-yoga-exercises-for-beginners-yoga-made-easy/
- The list content for the pilated classes was taken from https://www.healthline.com/health/fitness/pilates-exercises
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- The code to make the header and navigation was taken from CI love running project
- Part of the code for the footer was taken from the CI love running project
- Part of the code for the sign up form was used from the love running project