# Pub Quiz #

The Live link can be found here - https://huddy2022.github.io/Pub-Quiz/

The pub quiz is a site aimed for any enthusiast of general knowledge that wants to challenge themselves with a fun quiz, with a variety of categories ranging from sports, movies, geography and history. The site will be targeted to a ranged audience of early teens to adults that have a keen interest in challenging themselves in a variety of subjects to test their general knowledge skills. The pub quiz can be challenging but encourages the user to push themselves to a achieve a perfect score in each category (thanks to the final score container), and even if they dont succeed first time around the user will be allowed to try again as many times as they wish until they reach 100% on any given category. If a question is answered wrong the computer will generate the right answer so the user can understand and learn.

![Responsive Mockup]()

## Features ##

- __Favicon__

  - Created a favicon for the website as a beer mug as a bit of fun for the user to feel more like a pub theme.

- __Header__

  - The header grabs the attention of the user and with the help of the help of the font awesome Icon give its a bit of fun.
  - Explains to the user simply what this website is all about

![Header]()

### Game area ###

![Game Area]()

- __Categories__

  - There are four categories in total, sports, movies, geography and history to offer the user variety.
  - All categories have ten questions in total to make it challenging.
  - Each category has a differnt color to give the overall webpage a bit more colourfull.
  - Once you have selected a category the category title will be displayed at the top of the page to remind the user which category they are in.
  - Once the user has selected a category the category buttons are disabled so the user has to complete the current quiz before starting another category.
  - Once the user has completed the quiz all the category buttons are enabled again.
  - At the start of the game there is a heading alerting the user they must select a category to start the game.

![Active category]()

- __Display Question__

  - The display question is wrapped in a container with a black background and yellow border to stand out.
  - Each question is displayed in this contained and a font color of white to be easily readable. 
  - The question will be hidden at the start of the game until the user has selected a category.
  - Once the user has submited an answer from the options the displayed question will autmotically change to the next question.

![Display Question]()

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

![options & submit]()

- __Pop up container__

  - The pop up container is ther to alert the user on what they have done or what they should be doing.
  - There is a container to alert the user if they havent clicked on an option.
  - There is a container to alert the user if it was the correct answer with a font awesome smiley face.
  - Another container for the incorrect answer with a sad face and the correct answer displayed to help the user.
  - The final container works in three ways depending on what the users score is, such as a low, medium or 100%.

![pick an option]()
![correct answer]()
![incorrect answer]()
![low score end game]()
![medium score end game]()
![100% end game]()

- __Player score and Question number footer__ 

  - The player score will start on 0 and will be updated on each answer the user gets correct
  - The question number will start on 1 and will be updated when the user has submitted there answer on the previous question.
  - Once the user has completed one of the category quiz's the player score and question number will be reset.

![Footer](https://github.com/Huddy2022/Mind-Body-project/blob/main/assets/images/footer.jpg)

## Testing ##

- __Testing__

- I tested my page on different browsers such as google chrome and microsoft edge and both worked fine
- I confirmed my page is responsive, looks good and functions on different devices such as computer, tablet and phone by using dev tools device toolbar.
- I confirmed the header, logo, navigation, club ethos, about us, footer, classes section, sign up and thank you page text are readable and easy to understand.
- I have confirmed that the form works on the sign up page, with all sections required to have been filled out, an email address in the email input and the submit button works and links to the thank you page.
- I confirmed all three social network links work on all four pages and open on a separate tab.

### Validator Testing ###

- __HTML__
- Orginally i had 8 errors on the index.html.
- I can confirm now, no errors were returned when passing through the official w3c validator.

  ![W3C validator]()

- __CSS__
- Orginally i had one error on my style.css.
  - I can confirm now, no errors were found when passing through the official w3c css validator.
  
   ![(Jigsaw) validator]()

- __Javascript__
- 

- __Accessibility__
- I confirmed the colors and fonts are easy to read and i tested the colors i have chosen through the webaim contrast checker.
- I used the lighthouse in dev tools to test my web page on a desktop and mobile devices.

![Lighthouse]()

### Bugs ###

- First bug i had was my hero image wasnt loading, but i manged to change its position, height and width in style.css to fix this
- Second bug was my about us list and table not fitting together on the screen or overlapping each other. I fixed this with by adding a class and ID attritbute to both and styled them in css.
- Third bug was getting the font awesome icons to work. I fixed this when i found out i hadnt added the font awesome script to the bottom of the page.
- Fourth bug was the load time on the hero image being too long. I fixed this as best i can by changing its pixel size and re adding the image.
- Fifth bug was the media quieries not aligning with the code i was setting up. I fixed this by re going over the course work and understanding the postions, floats and margins better and implented this in the style.css media queries section.

### Un fixed bugs ###

- No unfixed bugs left in the code.

## Deployment ##

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Main Branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://huddy2022.github.io/Mind-Body-project/


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

### Media ###

- All images on pages home, classes, signup and thankyou were taken from pexels.