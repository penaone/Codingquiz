var timer = 60
var timerEl = document.getElementById("time")
var time = 100
var timerId 
var quizAnswer
var gameOver = "Game Over"


var quizQuestions = [
    {

            question : "What does HTML stand for?",
        
            
        
            choiceA : "Correct",
        
            choiceB : "Wrong",
        
            choiceC : "Wrong",

            choiceD : "Wrong",
        
            correct : "A"
        
          },{
        
            question : "What does CSS stand for?",
        
            
        
            choiceA : "Wrong",
        
            choiceB : "Correct",
        
            choiceC : "Wrong",
        
            correct : "B"
        
          },{
        
            question : "What does JS stand for?",
        
           
        
            choiceA : "Wrong",
        
            choiceB : "Wrong",
        
            choiceC : "Correct",
        
            correct : "C"
        
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

