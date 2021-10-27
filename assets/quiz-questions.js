scoresArr = []

let myQuestions = [
    {question: 'Inside which HTML element do we put the JavaScript?',
        answer: [
        "<script>",
        "<javascript>",
        "<scripting>",
        "<js>"
        ],
        correctAnswer: "<script>"
    },
    {question: 'How can you add a comment in a JavaScript?',
        answer: [
            "'This is a comment",
            " //This is a comment",
            "<!--This is a comment-->",
            "-This is a comment-"   
        ],
        correctAnswer: "//This is a comment"
    },
    {question: 'What is the correct way to write a JavaScript array?', 
        answer: [
            `var colors = (1:"red",2:"green",3:"blue")`,
            `var colors = "red","green","blue"`,
            `var colors = 1=("red"), 2=("green"), 3=("blue")`,
            `var colors = ["red","green","blue"]`
        ],
        correctAnswer: `var colors = ["red","green","blue"]`
    },
    {question: 'How do you find the number with the highest value of x and y?',
        answer: [
            "Math.max(x, y)",  
            "ceil(x, y)",
            "Math.ceil(x, y)",
            "top(x, y)"
        ],
        correctAnswer: "Math.max(x, y)"
    },
    {question: 'Which event occurs when the user clicks on an HTML element?',
        answer: [
            "onmouseclick",
            "onmouseover",
            "onclick",
            "onchange"
        ],
        correctAnswer: "onclick"
    }
];