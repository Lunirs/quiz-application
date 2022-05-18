// Dependencies

var startBtnEl = document.getElementById("startbtn");
var submitBtnEl = document.getElementById("submitbtn");
var resetBtnEl = document.getElementById("resetbtn");
//use this to add hide class to this
var startPageEl = document.getElementById("start-page");
//use this to add/ remove the hide class
var testPageEl = document.getElementById("question-page");
//use this to add/remove hide class
var scorePageEl = document.getElementById("score-page");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");

//Functions

var quizStart = function () {
  countdown();
};

var countdown = function () {
  timer = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
};

var init = function () {
  getScore();
};

var renderQ = function () {};

var gameOver = function () {};

var storeScore = function () {};

var resetScore = function () {};

function getScore() {}

//User Interactions

startBtnEl.addEventListener("click", quizStart);

submitBtnEl.addEventListener("click", storeScore);

// resetBtnEl.addEventListener("click", resetScore);

answerEl.addEventListener("click", ansCheck);

// Start button that runs the quiz
// Need start quiz function
// When button is pressed, timer starts, and quiz questions are displayed

// Question is answered (right or wrong)
// render question function
// displays question based on index
// creates 4 answer choices all in button format
// basically has an event.target to determine that the correct answer choice was clicked on
//once clicked it checks our answer

// function that checks our answer
// if wrong then time penalty and move on to next question
// displays incorrect
// if correct then display correct then move onto next question.

// countdown function
// time goes down at an interval of 1 second
// if time goes to 0 it ends the quiz
// end the game
// if user answers all questions and there are no more questions to be answered
// we clear the interval for time left and end the game

// function to end the game
// displays the score page
//asks user for name input
//once submit button is pressed, then data is stored on local storage

// data store function
// if there isn't an input then return
// else take the input and store on local storage

//high score page
// gets scores stored on local storage and displays them
// clear high score button
// function to delete local storage data
