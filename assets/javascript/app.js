
// Variable to position the timer on the page
var timerText = $("#timer");

// Variables for game scoring
var corrAnswers = 0;
var incorrAnswers = 0;
var unansweredQs = 0;
var countDown = 60;

// The start button
var startButton;

// Array of questions with their answers 

var questions = [
    {
        question : "Twizzlers were made in what year?",
        choiceA : "1972",
        choiceB : "1929",
        choiceC : "1884",
        correct : "B",
    },

    {
        question : "The Hershey Company was worth how much in 2017?",
        choiceA : "$23 million",
        choiceB : "$254 million",
        choiceC : "$783 million",
        correct : "C",
    },

    {
        question : "What is the largest candy company in the world?",
        choiceA : "The Hershey Company",
        choiceB : "Mars Inc.",
        choiceC : "Nestle",
        correct : "B",
    }
]

// The start button counts one second at a time
$(".btn").on("click", function() {
    startButton = setInterval(count, 1000);
    console.log(startButton);

    // The timer counts down and is displayed as text on the screen
    function count () {

        countDown--;

        timerText.text(countDown);

        var converted = timeConverter(countDown);
    

        $("#display").text(converted);
    }

    // Converts the timer to minutes and then seconds
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
    
    timerText.textContent = "Time Remaining: " + timerText;
})


