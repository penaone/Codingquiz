var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");



    // create our questions
var quizQuestions = [
    {
        question : "Which of the following is true about variable naming conventions in JavaScript?",
        answerA : "You should not use any of the JavaScript reserved keywords as a variable name",
        answerB : "JavaScript variable names should not start with a number(0-9).",
        answerC : "Both of the above",
        answerD : "None of the above",
        correct : "C"
    },{
        question : "What language is used to design and give life to your webpage?",
        answerA : "Computer Source Systems", 
        answerB : "Cascading Style Sheet",
        answerC : "html",
        answerD : "C++",
        correct : "B"
    },{
        question : "What phrase is used in nearly all intro tutorials of JavaScript?",
        answerA : "What is this?",
        answerB : "My Awesome Code",
        answerC : "Hello World",
        answerD : "I am the greatest!",
        correct : "C"
    },{
        question : "Arrays do what in JavaScript?",
        answerA : "Eliminate objects",
        answerB : "Connect multiple source code",
        answerC : "Remove variable partitions to make cleaner code",
        answerD : "Store multiple values in a single variable",
        correct : "D"
    },{ 
        question : "What does DOM stand for?",
        answerA : "Dominate Outer Movement",
        answerB : "Document Order Model",
        answerC : "Document Object Model",
        answerD : "Decision Override Model",
        correct : "C"
    },{
        question : "What is a function?",
        answerA : "A function is code that can be called by other code or by itself",
        answerB : "A function has conjunctions",
        answerC : "A function passes variables through to scripts",
        answerD : "A function represents other values",
        correct : "A"
     
    },{
        question : "What is the purpose of a loop?",
        answerA : "A loop extends the code into multiple dimensions",
        answerB : "A loop increases the number of code blocks a person needs to write",
        answerC : "A loop eliminates the need to write repetitive code that accomplishes the same purpose",
        answerD : "A loop contains sugary fruity bits of goodness",
        correct : "C"

    },{
        question : "'undefined' tells us what when we run a function?",
        answerA : "the number is not a real number",
        answerB : "an absolute value has been declared for a given variable",
        answerC : "informal arguements have not been declared yet",
        answerD : "that variables have just been declared",
        correct : "D"
    },{
        question : "Iteration is used in JavaScript for what purpose?",
        answerA : "It allows the variables to render properly",
        answerB : "It is a method that allows a for loop to function proplerly",
        answerC : "It guides the user in what decisions they should make",
        answerD : "It allows the code to skip a function",
        correct : "B"
    },{
        question : "Javascript is a language that__________",
        answerA : "is varantly evolving and is essential in web development",
        answerB : "is outdated and soon to be replaced",
        answerC : "was created for writing machine language",
        answerD : "is slow and does not play well with others",
        correct : "A"
    }
];


           


var startquiz = function()
{   
    document.querySelector("#btn").onclick=buttonclicked()
    // document.querySelector(".timer").innerHTML=timer
    console.log(time)
    timerId = setInterval(clockTic,1000)
    timerEl.textContent = time

     If(time <= 0)
    // result = gameOver;
    // return result;

    

    }

    var Quiz = function() {

        // If quizAnswer = false
        // time = time - 10

      }
    


var buttonclicked = function()
{
console.log("startquiz")
}
// startquiz()


var clockTic = function() {
    console.log("clockTic")
    time--
    timerEl.textContent = time
    if (time === 0){
        return
    }

}

var timerfunction = function()

{
    setTimeout(function(){timer=(timer-1)},1000)
    console.log("timer")
}

var startbutton = document.getElementById("btn")
startbutton.onclick = startquiz

