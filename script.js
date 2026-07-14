// Измешај ги прашањата
const quizQuestions = [...questions].sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    let q = quizQuestions[currentQuestion];

    document.getElementById("question-number").innerHTML =
        "Прашање " + (currentQuestion + 1) + " од " + quizQuestions.length;

    document.getElementById("question-text").innerHTML =
        q.question;

    let answersDiv = document.getElementById("answers");

    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {

        answersDiv.innerHTML += `
        <label>
            <input type="radio" name="answer" value="${index}">
            ${answer}
        </label><br>
        `;

    });

}

function nextQuestion() {

    let selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {

        alert("Изберете одговор.");

        return;

    }

    if (Number(selected.value) === quizQuestions[currentQuestion].correct) {

        score++;

    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        loadQuestion();

    }

    else {

        let name = localStorage.getItem("name") || "Играч";
        let surname = localStorage.getItem("surname") || "";

        document.querySelector(".quiz-box").innerHTML = `

<h2>🏆 Квизот е завршен!</h2>

<p><strong>${name} ${surname}</strong></p>

<h3>${score} / ${quizQuestions.length}</h3>

<button onclick="location.href='index.html'">
Почетна
</button>

`;

    }

}

loadQuestion();
