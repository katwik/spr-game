# Scissors paper rock

[Link to website](https://katwik.github.io/spr-game/)

## Project Goals

Make the classic scissors, paper, rock game to users who plays by themselves.

### User Goals

* Play a fun game.

### Site Owner Goals

* Create a game that that is fun and engaging.
* The game is responsive so it can be played on different devices.

## User Stories

* As a user, I want to see animation simular to the real game
* As a user, I want to pick my own option
* As a user, I want to be able to see the scores
* As a user, I want to play a game that functions and flows correctly

### Site Owner Stories

* As a site owner, I want people to have fun plaing the game.

## Color and fonts

The font used is Caveat cursive.

## The Structure

* The page has a user-friendly structure.

### Wireframes

<img src="/assets/images/readme/wirestart.png" alt="Wireframe start">
<img src="/assets/images/readme/wiregame.png" alt="Wireframe game">

## Technologies Used

### Languages

* HTML
* CSS
* JavaScript

### Frameworks & Tools

* GitHub
* Balsamiq
* Font Awesome
* Lighthouse
* W3C Markup validation service
* W3C Jigsaw CSS validation service
* WAVE WebAIM web accessibility evaluation tool

## Features

Upon arriving at the website the user sees a screen with the the name of the game, score table for the player and the computer, and a "Click to start!"-button. When pressed, two hands are seen in the middle of the screen and the text "Pick your option" over it, and three buttons under it with the avaliable options: scissors, paper, rock. The hand to the left is the player hand and the one to the right is the computer hand.
<img src="/assets/images/readme/start.png" alt="Start page">

<img src="/assets/images/readme/game.png" alt="Game page">

<img src="/assets/images/readme/player.png" alt="Player wins">

<img src="/assets/images/readme/computer.png" alt="Computer wins">

<img src="/assets/images/readme/tie.png" alt="It's a tie">

### Future features

* Add a reset button
* Add limited moves, the game ends when moves reaches the limit and results are displayed.

## Validation

* HTML Validation
The W3C Markup Validation Service was used to validate the HTML of the website and it passed with no errors or warnings.
<img src="/assets/images/readme/htmlvalid.png" alt="HTML validation test">

* CSS Validation
The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website and it passed with no errors or warnings.
<img src="/assets/images/readme/cssvalid.png" alt="Css validation test">

* JavaScript Validation
JSHint was used to validate the Javascript of the website and it passed with no errors or warnings.
  
## Accessibility

### Performance

* Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website.
  After the first test the performance was on the lower end of the green side, but after compressing the images I got theese results down below.
  
Accessibility for desktop:
<img src="/assets/images/readme/accessibility.png" alt="Accessibility test">

Accesibility for mobile devices:
<img src="/assets/images/readme/maccessibility.png" alt="Accessibility test">
 
### Browser Compatability

The website were tested with no remarks on theese browsers 
* Google Chrome
* Microsoft Edge

## Testing user stories

As a user, I want  | Result
------------- | -------------
 to see animation simular to the real game  | The user see the hands moving
 to pick my own option  | The user can pick an option
 to be able to see the scores  | The scores are shown and visible
to play a game that functions and flows correctly  | The game is functional and flows correctly

## Manual testing

Feature  | Expect | Action  | Result
------------- | -------------   ------------- | -------------
Click to start  | When pressed the game page appears  | Clicked the "Click to start"-button    | Game commence and score table, options and hand are shown
Click scissors-button  | Player hand shakes and changes to scissor  | Clicked "scissors"-button  | Player hand shakes and changes to scissor
Click paper-button  | Player hand shakes and changes to paper  | Clicked "paper"-button  | Player hand shakes and changes to paper
When player click on one option, the computer hand makes a pick  | Computer hand shakes and changes to an option randomly picked  | Clicked "scissors"-button, Clicked "paper"-button, Clicked "paper"-button   | Computer hand shakes and changes to a random option
The score table  | The scores uppdates after every round | Clicked "paper"-button   | The scores upptates with one point after every round; one point to the winner and no point to the opponent
It's a tie  | The scores uppdates after every round | Clicked "paper"-button   | The scores upptates with one point after every round; one point to the winner and no point to the opponent


## Bugs
No bugs were found during my testings.

## Deployment

The website was deployed using GitHub Pages by following these steps:

* In the GitHub repository navigate to the Settings tab
* On the left-hand menu select Pages
* For the source select Branch: main
* After the webpage refreshes automatically you will ses a ribbon on the top saying: "Your site is published at https://katwik.github.io/spr-game/"

### You can fork the repository by following these steps

* Go to the GitHub repository
* Click on Fork button in the upper right hand corner

### You can clone the repository by following these steps

* Go to the GitHub repository
* Locate the Code button above the list of files and click it
* Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your 

## Credits

### Code
Inspiration was taken from Developed by Ed on developedbyed.com


## Acknowledgments

I would like to take the opportunity to thank my mentor Rohit Sharma for the help and support he provided during this project.
