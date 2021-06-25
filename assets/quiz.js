var score = 0;

var startButton = document.querySelector("#start");
var quizContainer = document.querySelector("#quiz");

//array of quiz questions with answers
var questions = [
    {q: 'Inside which HTML element do we put the JavaScript?',
        answers: {
            a: "<script>",
            b: "<javascript>",
            c: "<scripting>",
            d: "<js>"
        },
        correctAnswer: "a"
    },
    {q: 'How can you add a comment in a JavaScript?',
        answers: {
            a: "'This is a comment",
            b: " //This is a comment",
            c: "<!--This is a comment-->",
            d: "-This is a comment-"   
        },
        correctAnswer: "b"
    },
    {q: 'What is the correct way to write a JavaScript array?', 
        answers: {
            a:`var colors = (1:"red",2:"green",3:"blue")`,
            b:`var colors = "red","green","blue"`,
            c:`var colors = 1=("red"), 2=("green"), 3=("blue")`,
            d:`var colors = ["red","green","blue"]`
        },
        correctAnswer: "d"
    },
    {q: 'How do you find the number with the highest value of x and y?',
        answers: {
            a: "Math.max(x, y)",  
            b: "ceil(x, y)",
            c: "Math.ceil(x, y)",
            d: "top(x, y)"
        },
        correctAnswer: "a"
    },
    {q: 'Which event occurs when the user clicks on an HTML element?',
        answers: {
            a:"onmouseclick",
            b:"onmouseover",
            c:"onclick",
            d:"onchange"
        },
        correctAnswer: "c"
    }
];

