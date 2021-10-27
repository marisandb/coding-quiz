let startQuiz = function () {
    let pageContentEl = document.getElementById("pageContent");
    pageContentEl.remove();
    displayQuestions();
};

function displayQuestions() {
    let questionAreaContentEl = document.createElement("section");
    questionAreaContentEl.id = "question-content"
    document.body.append(questionAreaContentEl);

    let currentQuestion = 0
    let questionHeader = document.createElement("h3");
    questionAreaContentEl.append(questionHeader)

    let addBtn = function () {
        for (i = 0; i < myQuestions[currentQuestion].answer.length; i++) {
            let button = document.createElement("button");
            button.className = "btn"
            questionAreaContentEl.append(button);
        }
    }
    addBtn();

    let choicesElement = document.querySelectorAll(".btn");

    function iterate() {
        questionHeader.textContent = myQuestions[currentQuestion].question
        choicesElement.forEach((choicesButton, i) => {
            choicesButton.textContent = myQuestions[currentQuestion].answer[i]
        })
    }
    choicesElement.forEach(el => {
        el.addEventListener("click", function (event) {
            let choice = this.textContent
            if (choice === myQuestions[currentQuestion].correctAnswer) {
                let correctAnswer = document.createElement("h3")
                correctAnswer.textContent = "Correct!"
                $(correctAnswer).delay(200).fadeOut(500);
                document.body.append(correctAnswer)
            } else {
                let incorrectAnswer = document.createElement("h3")
                incorrectAnswer.textContent = "Incorrect!"
                $(incorrectAnswer).delay(200).fadeOut(500);
                document.body.append(incorrectAnswer)
                penalty();
            }
            currentQuestion++;
            if (currentQuestion < myQuestions.length) {
                iterate()
            } else {
                setTimeout(displayScore, 1000);
            }
        }
        );
        iterate();
    })
}

let displayScore = function () {
    document.getElementById("timer").remove();
    document.getElementById("question-content").remove();

    let Score = timer

    let alertBoxEl = document.createElement("section")
    alertBoxEl.id = "alert-box"
    document.body.append(alertBoxEl);

    let gameOver = document.createElement("p")
    gameOver.textContent = "Finished! Your score is " + Score + " Congrats please enter your initials."
    alertBoxEl.append(gameOver);

    let playerInitForm = document.createElement("form")
    alertBoxEl.append(playerInitForm)

    let playerInitTxtbox = document.createElement("input")
    playerInitTxtbox.setAttribute("type", "text");
    playerInitTxtbox.id = "player-initials";
    playerInitTxtbox.className = "textbox";
    alertBoxEl.append(playerInitTxtbox);

    let playerInitSubmitBtn = document.createElement("input")
    playerInitSubmitBtn.setAttribute("type", "submit")
    playerInitSubmitBtn.id = "submit-btn"
    playerInitSubmitBtn.className = 'btn'
    alertBoxEl.append(playerInitSubmitBtn);

    playerInitSubmitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let playerInits = document.querySelector('#player-initials').value;

        if (playerInits === "") {
            alert("Must Enter Initials!");
        } else {
            let obj = {
                player: playerInits,
                score: Score
            }
            if(localStorage.getItem("scoreTable")){
                scoresArr = JSON.parse(localStorage.getItem("scoreTable"))
            }
            scoresArr.push(obj)

            localStorage.setItem("scoreTable", JSON.stringify(scoresArr))
            localStorage.setItem("playerInitials", playerInits);
            localStorage.setItem("score", Score);
            alertBoxEl.remove();
            displayAllScores();
        }
    })
};

let displayAllScores = function () {
    let hiScores = document.createElement("section");
    hiScores.id = "pageContent"
    document.body.append(hiScores);

    let scoreHeader = document.createElement("h2");
    scoreHeader.textContent = "High Scores"
    hiScores.append(scoreHeader);

    let scoreList = document.createElement("ol")
    scoreList.id = "scoreList"
    hiScores.append(scoreList);

    let addScores = function () {
        let scoreScreenObject = JSON.parse(localStorage.getItem("scoreTable"))
        scoreScreenObject.sort((a, b) => b.score - a.score);

        for (i = 0; i < 3; i++) {
            let scoreItem = document.createElement("li");
            if (scoreScreenObject[i]){
                scoreItem.textContent = (scoreScreenObject[i].player + " " + scoreScreenObject[i].score);
            } else {
                scoreItem.textContent = ""
            }
            scoreList.append(scoreItem);
        }
    }
    addScores();

    let buttonsDiv = document.createElement("div")
    hiScores.append(buttonsDiv);

    let restartButtonEl = document.createElement("button")
    restartButtonEl.textContent = "Start Quiz!"
    restartButtonEl.id = "restart-btn"
    restartButtonEl.className = "btn"
    buttonsDiv.append(restartButtonEl);
    
    let clearScoresEl = document.createElement("button")
    clearScoresEl.textContent = "Clear High Scores"
    clearScoresEl.id = "clear-scores-btn"
    clearScoresEl.className = "btn"
    buttonsDiv.append(clearScoresEl);

    clearScoresEl.addEventListener("click", () => {
        localStorage.clear();
        scoreList.remove();
        clearScoresEl.remove();
    });
    
    restartButtonEl.addEventListener("click", () => {
        let timerCreate = document.createElement("h2");
        timerCreate.id = "timer"
        timer = 75
        header.append(timerCreate);
        startTimer();
        startQuiz();
    });
}

let startButtonEl = document.getElementById("startBtn");
startButtonEl.addEventListener("click", () => {
    startTimer();
    startQuiz();
});

timer = 60;

let startTimer = function () {
    document.getElementById("timer").innerHTML = "Timer:" + timer;
    timer--;
    if (timer < 0) {
        alert("Time expired!")
        document.getElementById("question-content").remove();
        displayScores();
    }
    else {
        setTimeout(startTimer, 1000);
    }
};
let penalty = function () {
    timer -= 5;
};