let score = 0;
timer = 60;

const startButton = document.querySelector("#start");
const quizEl = document.querySelector("#quiz-container");
const timerEl = document.querySelector("#timer");

//array of quiz questions with answers
let myQuestions = [
    {q: 'Inside which HTML element do we put the JavaScript?',
        answers: [
        "<script>",
        "<javascript>",
        "<scripting>",
        "<js>"
        ],
        correctAnswer: "<script>"
    },
    {q: 'How can you add a comment in a JavaScript?',
        answers: [
            "'This is a comment",
            " //This is a comment",
            "<!--This is a comment-->",
            "-This is a comment-"   
        ],
        correctAnswer: "//This is a comment"
    },
    {q: 'What is the correct way to write a JavaScript array?', 
        answers: [
            `var colors = (1:"red",2:"green",3:"blue")`,
            `var colors = "red","green","blue"`,
            `var colors = 1=("red"), 2=("green"), 3=("blue")`,
            `var colors = ["red","green","blue"]`
        ],
        correctAnswer: `var colors = ["red","green","blue"]`
    },
    {q: 'How do you find the number with the highest value of x and y?',
        answers: [
            "Math.max(x, y)",  
            "ceil(x, y)",
            "Math.ceil(x, y)",
            "top(x, y)"
        ],
        correctAnswer: "Math.max(x, y)"
    },
    {q: 'Which event occurs when the user clicks on an HTML element?',
        answers: [
            "onmouseclick",
            "onmouseover",
            "onclick",
            "onchange"
        ],
        correctAnswer: "onclick"
    }
];

//start quiz function
function startQuiz() {
    //this will remove the intial laod page when the user clicks start
    let quizStart = document.getElementById("quiz-start");
    quizStart.remove();

    displayQuestions();
    countdown();
}

//this function will display the question/answer choices
function displayQuestions() {
    let firstQ = 0;
    //create div to display the question 
    var questionDisplayEl = document.createElement("div");
    questionDisplayEl.textContent = myQuestions[firstQ].q;
    questionDisplayEl.className = "question-display";
    quizEl.appendChild(questionDisplayEl);
    
    //adds answer choices to the question in button form
    let displayQ = function () {
    for (var i = 0; i < myQuestions[firstQ].answers.length; i++){
    let answerChoices = document.createElement("button");
    answerChoices.textContent = myQuestions.answers;
    answerChoices.className = "btn answer-choices";
    questionDisplayEl.appendChild(answerChoices);
    }
    };
    displayQ();
    
};
startButton.addEventListener("click", startQuiz);
//check questions for correct answer


//for(var i=0; i < myQuestions.length; i++){

   // var answer = confirm(myQuestions[i].correctAnswer);

 //   if( ??? )
    
    //increases score
   // score++;
//} 

//timer function
function countdown() {
    let timeLeft = 60;

    const timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            setTimeout(timeInterval,1000);
        }
    }, 1000);
}


//countdown();
//startButton.onclick = countdown;

//high score function