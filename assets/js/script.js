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
var firstCBtnEl = document.getElementById("a1");
var secondCBtnEl = document.getElementById("a2");
var thirdCBtnEl = document.getElementById("a3");
var fourthCBtnEl = document.getElementById("a4");
var finalScoreEl = document.getElementById("final-score");
var nameInputEl = document.getElementById("names");
var highscoreListEl = document.getElementById("score-list");
var highscoreBtnEl = document.getElementById("modal-show");
var closeHighscoreBtnEl = document.getElementById("close-modal");
var modalEl = document.getElementById("modal");
var playAgainBtnEl = document.getElementById("play-again-btn");
// Data States

var timeLeft = 100;
var qIndex = 0;
var timer;
var score = 0;
var testBank = [
  {
    q: "Which of the following signifies strictly equal to?",
    c: ["===", "==", "!==", "!="],
    a: "a1",
  },
  {
    q: "What does CSS stand for?",
    c: [
      "Casual Styling Sheet",
      "Cascading Sick Styles",
      "Cascading Style Sheet",
      "Cool Style Sheet",
    ],
    a: "a3",
  },
  {
    q: "Which of these is a JSON method?",
    c: [".querySelector", ".parse()", ".textContent", ".getElementById"],
    a: "a2",
  },
  {
    q: "Which of the following refers place data resides on your local device?",
    c: ["Storage", "Hard Drive", "Local Storage", "External Storage"],
    a: "a3",
  },
  {
    q: "Which CSS style do we use to round out boxes?",
    c: ["border-radius", "box-shadow", "box-rounded", "skew"],
    a: "a1",
  },
  {
    q: "Where do we put our script tags to link our javascript file?",
    c: [
      "At the footer",
      "Anywhere",
      "Right before the body's closing tag",
      "In the Head Tag",
    ],
    a: "a3",
  },
  {
    q: "How do you target a class residing in your HTML code?",
    c: [".select", ".selectQuery()", ".target", ".querySelector()"],
    a: "a4",
  },
];

//Functions

var quizStart = function () {
  startPageEl.setAttribute("class", "hidden");
  testPageEl.removeAttribute("class", "hidden");
  renderQ();
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

var renderQ = function () {
  var displayQ = testBank[qIndex];
  questionEl.textContent = qIndex + 1 + ". " + displayQ.q;
  firstCBtnEl.textContent = displayQ.c[0];
  secondCBtnEl.textContent = displayQ.c[1];
  thirdCBtnEl.textContent = displayQ.c[2];
  fourthCBtnEl.textContent = displayQ.c[3];
};

var ansCheck = function (event) {
  if (event.target.value !== testBank[qIndex].a) {
    timeLeft -= 20;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  } else {
    score += 5;
    scoreEl.textContent = "Score: " + score;
  }
  if (testBank.length === qIndex + 1) {
    gameOver();
    console.log(qIndex);
  } else {
    qIndex++;
    renderQ();
  }

  console.log(event.target.value);
};

var gameOver = function () {
  clearInterval(timer);
  scorePageEl.removeAttribute("class", "hidden");
  testPageEl.setAttribute("class", "hidden");
  finalScoreEl.textContent = score + " with " + timeLeft + " s remaining!";
};

var storeScore = function (event) {
  var userName = nameInputEl.value.trim();
  if (userName) {
    var finalScore = JSON.parse(localStorage.getItem("finalScore")) || [];
    var currentScore = {
      userName: userName,
      points: score,
      time: timeLeft,
    };
    finalScore.push(currentScore);
    localStorage.setItem("finalScore", JSON.stringify(finalScore));
  }
};

var resetScore = function () {
  localStorage.removeItem("finalScore");
  location.reload();
};

function getScore() {
  var finalScore = JSON.parse(localStorage.getItem("finalScore")) || [];
  console.log(finalScore);
  finalScore.forEach(function (item) {
    var listEl = document.createElement("li");
    listEl.textContent =
      "Name: " +
      item.userName +
      " Score: " +
      item.points +
      " Time Left: " +
      item.time;
    highscoreListEl.appendChild(listEl);
  });
}

//User Interactions

startBtnEl.addEventListener("click", quizStart);

submitBtnEl.addEventListener("click", storeScore);

resetBtnEl.addEventListener("click", resetScore);

answerEl.addEventListener("click", ansCheck);

highscoreBtnEl.addEventListener("click", function () {
  modalEl.removeAttribute("class", "hidden");
});
closeHighscoreBtnEl.addEventListener("click", function () {
  modalEl.setAttribute("class", "hidden");
});

playAgainBtnEl.addEventListener("click", function () {
  location.reload();
});
//Initialization

init();
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
