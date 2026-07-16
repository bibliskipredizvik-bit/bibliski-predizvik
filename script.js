// Измешај ги прашањата
const quizQuestions = [...questions].sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    let q = quizQuestions[currentQuestion];

    let percent =
        ((currentQuestion + 1) / quizQuestions.length) * 100;

    document.getElementById("progress-bar").style.width =
        percent + "%";

    document.getElementById("question-number").innerHTML =
        "Прашање " + (currentQuestion + 1) + " од " + quizQuestions.length;

    document.getElementById("question-text").innerHTML =
        q.question;

    let answersDiv =
        document.getElementById("answers");

    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {

        answersDiv.innerHTML += `
<label>
<input type="radio" name="answer" value="${index}">
${answer}
</label><br><br>
`;

    });

}

function nextQuestion() {

    let selected =
        document.querySelector('input[name="answer"]:checked');

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

        saveResult();

        let name =
            localStorage.getItem("name") || "";

        let surname =
            localStorage.getItem("surname") || "";

        document.querySelector(".quiz-box").innerHTML = `

<h2>🏆 Квизот е завршен!</h2>

<p><strong>${name} ${surname}</strong></p>

<h3>Резултат: ${score} / ${quizQuestions.length}</h3>

<button onclick="location.href='index.html'">
Почетна
</button>

`;

    }

}

function saveResult() {

    let player = {

        name: localStorage.getItem("name"),

        surname: localStorage.getItem("surname"),

        city: localStorage.getItem("city"),

        phone: localStorage.getItem("phone"),

        score: score,

        total: quizQuestions.length,

        date: new Date().toLocaleString()

    };

    let results =
        JSON.parse(localStorage.getItem("results")) || [];

    results.push(player);

    localStorage.setItem(
        "results",
        JSON.stringify(results)
    );

}

loadQuestion();
