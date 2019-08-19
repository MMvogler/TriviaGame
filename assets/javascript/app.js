

// Variable tha will hold setInterval that runs stopwatch
var intervalId;

// Variable for where things need to go on the page
var timerText = document.getElementById("timer");

// Variables for game scoring
var corrAnswers = 0;
var incorrAnswers = 0;
var unansweredQs = 0;

// var clockRunning = false;

var startButton;

$(".btn").on("click", function() {
    startButton = setInterval(count, 60000);
    console.log(startButton);


// The timer starts counting down from 1 minute
// if (!clockRunning) {
//     intervalId = setInterval(count, 60000);
//     clockRunning = true;
// }

// // When the timer ends
// function oneMinute () {
    
//     $("#timer-done").append("<h2>All Done!</h2>");
    
// }

// Convert timer to minutes/seconds and display countdown
    function count () {

        --timerText;

        var converted = timeConverter(timerText);
    

        $("#display").text(converted);
    }

    function timeConverter(i) {

        var minutes = Math.floor(i / 60);
        var seconds = i - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if(minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;

    
    }
    
    timerText.textContent = "Time Remaining: " + count;
})
