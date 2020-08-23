var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");



// create our questions
var quizQuestions = [{
    question: "Which of the following is true about variable naming conventions in JavaScript?",
    answerA: "You should not use any of the JavaScript reserved keywords as a variable name",
    answerB: "JavaScript variable names should not start with a number(0-9).",
    answerC: "Both of the above",
    answerD: "None of the above",
    correct: "C"
}, {
    question: "What language is used to design and give life to your webpage?",
    answerA: "Computer Source Systems",
    answerB: "Cascading Style Sheet",
    answerC: "html",
    answerD: "C++",
    correct: "B"
}, {
    question: "What phrase is used in nearly all intro tutorials of JavaScript?",
    answerA: "What is this?",
    answerB: "My Awesome Code",
    answerC: "Hello World",
    answerD: "I am the greatest!",
    correct: "C"
}, {
    question: "Arrays do what in JavaScript?",
    answerA: "Eliminate objects",
    answerB: "Connect multiple source code",
    answerC: "Remove variable partitions to make cleaner code",
    answerD: "Store multiple values in a single variable",
    correct: "D"
}, {
    question: "What does DOM stand for?",
    answerA: "Dominate Outer Movement",
    answerB: "Document Order Model",
    answerC: "Document Object Model",
    answerD: "Decision Override Model",
    correct: "C"
}, {
    question: "What is a function?",
    answerA: "A function is code that can be called by other code or by itself",
    answerB: "A function has conjunctions",
    answerC: "A function passes variables through to scripts",
    answerD: "A function represents other values",
    correct: "A"

}, {
    question: "What is the purpose of a loop?",
    answerA: "A loop extends the code into multiple dimensions",
    answerB: "A loop increases the number of code blocks a person needs to write",
    answerC: "A loop eliminates the need to write repetitive code that accomplishes the same purpose",
    answerD: "A loop contains sugary fruity bits of goodness",
    correct: "C"

}, {
    question: "'undefined' tells us what when we run a function?",
    answerA: "the number is not a real number",
    answerB: "an absolute value has been declared for a given variable",
    answerC: "informal arguements have not been declared yet",
    answerD: "that variables have just been declared",
    correct: "D"
}, {
    question: "Iteration is used in JavaScript for what purpose?",
    answerA: "It allows the variables to render properly",
    answerB: "It is a method that allows a for loop to function proplerly",
    answerC: "It guides the user in what decisions they should make",
    answerD: "It allows the code to skip a function",
    correct: "B"
}, {
    question: "Javascript is a language that__________",
    answerA: "is varantly evolving and is essential in web development",
    answerB: "is outdated and soon to be replaced",
    answerC: "was created for writing machine language",
    answerD: "is slow and does not play well with others",
    correct: "A"
}];





// create some variables

var lastQuestion = quizQuestions.length - 1;
var runningQuestion = 0;
// var testTime = 100;
var testTime = 100; // 10s
var gaugeWidth = 500; // 150px
var gaugeUnit = gaugeWidth / testTime;
var TIMER;
var score = 0;

// render a question
function renderQuestion() {
    var qz = quizQuestions[runningQuestion];

    question.innerHTML = "<p>" + qz.question + "</p>";

    answerA.innerHTML = qz.answerA;
    answerB.innerHTML = qz.answerB;
    answerC.innerHTML = qz.answerC;
    answerD.innerHTML = qz.answerD;
    console.log("Time Left: ", testTime, "\n Is time up? , ", testTime <= 0)
    if (testTime <= 0) {
        endGame();
    }

}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    TIMER = setInterval(renderCounter, 1000);



}

// render progress
function renderProgress() {
    for (let qzIndex = 0; qzIndex <= lastQuestion; qzIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qzIndex + "></div>";
    }
}

// counter render



function renderCounter() {
    testTime--
    counter.innerHTML = testTime;
    if (testTime <= 0) {
        endGame();
    }
}


function nextQuestion() {
    // answerIsWrong();
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
        console.log(runningQuestion)
    } else {
        endGame();
    }


}

// verifyAnswer

function verifyAnswer(answer) {
    if (answer == quizQuestions[runningQuestion].correct) {
        // answer is correct
        score++;

        answerIsCorrect();
    } else {
        answerIsWrong();
    }

}

// answer is correct
function answerIsCorrect() {
    nextQuestion();

}

// answer is Wrong
function answerIsWrong() {

    nextQuestion();
    testTime = testTime - 10


}

function endGame() {
    alert("The quiz is OVER!")
    (clearInterval(TIMER))
    
    scoreRender();
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amo0unt of question percent answered by the user
    var scorePerCent = Math.round(100 * score / quizQuestions.length);
    scoreDiv.textContent = "You scored " + scorePerCent + "%";
}