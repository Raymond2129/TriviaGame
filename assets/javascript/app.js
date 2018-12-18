$(document).ready(function() {
    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function() {
            this.time = 30;
            $('timer').html('<h3>You only have: ' + this.time + ' seconds remaining</h3>')
        },
        start: function() {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function() {
            clearInterval(counter);
        },
        count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if(index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".anserchoice").hide();
                    showScore();
                }
            }
        }
     };
//enter var sounds and put into function to pick a random one to play
var soundOne = new Audio ("../sounds/Countdown-Me-728881159.mp3"); 
var soundTwo = new Audio ("../sounds/alien-spaceship_daniel_simion.mp3");
var soundThree = new Audio ("../sounds/Appear-KP-1137861048.mp3"); 
var soundFour = new Audio ("../sounds/Spaceship_Takeoff-Richard-902554369.mp3");
var correct = 0;
var wrong = 0;


var q1 = {
    question : "What is the largest moon in the Solar System?",
    possibleAnswers : ['A. Ganymede',
                        'B. Titan', 
                        'C. The Moon',
                        'D. Europa'],
    flags : [true, false, false, false],
    answer : 'A. Ganymede'
};
var q2 = {
    question : "How far is the moon moving away from Earth each year?",
    possibleAnswers : ['A. 1 cm',
                        'B. 4.4 cm', 
                        'C. 3.8 cm',
                        "D. Are you crazy the moon isn't moving away from Earth!"],
    flags : [false, false, true, false],
    answer : 'C. 3.8 cm'
};
var q3 = {
    question : "In our solar system which planet has the most moons?",
    possibleAnswers : ['A. Mars',
                        'B. Jupiter', 
                        'C. Pluto',
                        'D. Uranus'],
    flags : [false, true, false, false],
    answer : 'B. Jupiter'
};
var q4 = {
    question : "Which planet is the densest in our Solar System?",
    possibleAnswers : ['A. Mars',
                        'B. Jupiter', 
                        'C. Earth',
                        'D. Venus'],
    flags : [false, false, true, false],
    answer : 'C. Earth'
};
var q5 = {
    question : "How long is a cosmic year? (The amount of time it takes the Sun to revolve around the Milky Way)",
    possibleAnswers : ['A. 1 year',
                        'B. 150 thousand years', 
                        'C. 1 million years',
                        'D. 225 million years'],
    flags : [false, false, false, true],
    answer : 'D. 225 million years'
};
var q6 = {
    question : "How many times larger is the Sun to Earth?",
    possibleAnswers : ['A. 50 times larger',
                        'B. 330,330 times larger', 
                        'C. 1 million times larger',
                        'D. 150,000 times larger'],
    flags : [false, true, false, false],
    answer : 'B. 330,330 times larger'
};
var q7 = {
    question : "What is the name of Pluto's moon?",
    possibleAnswers : ['A. Charon',
                        'B. Phobus', 
                        'C. Pandora',
                        'D. Titan'],
    flags : [true, false, false, false],
    answer : 'A. Charon'
};
var q8 = {
    question : "The three main parts of a comet are the nucleus, the tail, and the ___?",
    possibleAnswers : ['A. Zenith',
                        'B. Umbra', 
                        'C. Radiant',
                        'D. Coma'],
    flags : [false, false, false, true],
    answer : 'D. Coma'
};
var q9 = {
    question : "Which of the following was discovered in 2002?",
    possibleAnswers : ['A. Titan',
                        'B. Varuna', 
                        'C. Quaoar',
                        'D. Nereid'],
    flags : [false, false, true, false],
    answer : 'C. Quaoar'
};
var q10 = {
    question : "What was the name of the first US space station that was launced in 1973?",
    possibleAnswers : ['A. Mir',
                        'B. Almaz', 
                        'C. ISS',
                        'D. Skylab'],
    flags : [false, false, false, true],
    answer : 'D. Skylab'
}
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countdownTimer.reset();
    $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
    $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
    $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
    $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
    $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Click to start the Trivia Game! </button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
         loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
        loadQuestion();
        soundOne.play();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>You got " + correct + " correct!!</p></h2>");
	$('.question').append("<h2><p>And " + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});















//List out global var... this may need to be the questions that will be asked. Ask 8 to 10 questions
// var questions = [{
//     "question": "This is the first question?",
//     "option1": "yes", 
//     "option2": "yes",
//     "option3": "no",
//     "option4": "maybe",
//     "answer": "2"
// },
// {
//     "question": "This is the first question?",
//     "option1": "yes", 
//     "option2": "yes",
//     "option3": "no",
//     "option4": "maybe",
//     "answer": "1"  
// },
// {
//     "question": "This is the first question?",
//     "option1": "yes", 
//     "option2": "yes",
//     "option3": "no",
//     "option4": "maybe",
//     "answer": "3"  
// }
// ],

// var currentQuestion = 0;
// var score = 0;
// //get html question container and set to a var to call
// var container = document.getElementById("questionContainer");
// var questionEntry = document.getElementById("question");
// //get all of the id's 1-4 for questions and set to var
// var opt1 = document.getElementById("opt1");
// var opt2 = document.getElementById("opt2");
// var opt3 = document.getElementById("opt3");
// var opt4 = document.getElementById("opt4");
// var nextButton = document.getElementById("nextButton");
// var resultConter = document.getElementById("result");

// //create a function to pull the questions var and set the index
// function loadQuestion (questionsIndex) {
//     var quest = questions[questionsIndex];
//     questionEntry.textContent(questionsIndex +) + ". " + quest.question;
//     opt1.textContent = quest.option1;
//     opt2.textContent = quest.option2;
//     opt3.textContent = quest.option3;
//     opt4.textContent = quest.option4;
// };

// function loadNextQuestion() {
//     var selectedOption = document.querySelector('input[type=radio]:checked');
//     if (!selectedOption){
//         alert("Please selected your answer");
//         return;
//     }
//     var answer = selectedOption.value;
//     if(questions[currentQuestion].answer == answer){
//         score++
//     }
//     selectedOption.checked = false;
//     currentQuestion++
//     if(currentQuestion == questions - 1){
//         nextButton.textContent = "finish";
//     }
//     if (currentQuestion == questions) {
//         container.style.display = 'none';
//         resultConter.style.display = "";
//         resultConter.textContent = "Your Score; " = score;
//     }
//     loadQuestion(currentQuestion);
// }
// loadQuestion(currentQuestion);
//have a set time limit to answer each question.
//each question will have multiply choose
//once a selction is made ensure that it is saved into an open array to be shown at the end.
//list correct and incorrect answers 