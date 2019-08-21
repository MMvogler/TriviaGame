
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
        answers : ["1972","1929","1884"],
        correct : "1929",
    },

    {
        question : "The Hershey Company was worth how much in 2017?",
        answers : ["$23 million","$254 million", "$783 million"],
        correct : "$783 million",
    },

    {
        question : "What is the largest candy company in the world?",
        answers: ["The Hershey Company","Mars Inc.","Nestle"],
        correct : "Mars Inc.",
    }
]

var counter = 12;


function count () {

    counter--;

    $("#timer").text(counter);

    if(counter === 0) {
        console.log("ran out of time");
    }
    
    }




// The start button counts one second at a time
$(".btn").on("click", function() {
    // startButton = setInterval(count, 1000);
    // console.log(startButton);
    $(".btn").hide();
    var timer = setInterval(count, 1000);

    for (let i = 0; i< questions.length; i++) {
        console.log(questions[i].question);
        $("#quiz-area").append("<h2>" + questions[i].question + "</h2>" );

        for (let j = 0; j < questions[i].answers.length; j++) {
            console.log(questions[i].answers[j]);
            $("#quiz-area").append("<p>" + questions[i].answers[j] + "</p>");
        }
        
    }
   
})

// for (var i = 0; i < questions.length; i++) {

// }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


