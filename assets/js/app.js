var timer = 60

var startquiz = function()
{
    document.querySelector("#btn").onclick=buttonclicked()
    document.querySelector(".timer").innerhtml=timer
}

var buttonclicked = function()
{
console.log("startquiz")
}
startquiz()

var timerfunction = function()
{
    setTimeout(function(){timer=timer-1},10000)
    console.log("timer")
}
