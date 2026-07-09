

let currentQuestion = 0;
let score = 0;


function loadQuestion(){

let q = questions[currentQuestion];


document.querySelector(".quiz-box h2").innerHTML =
"Прашање " + (currentQuestion + 1) + " од " + questions.length;


document.querySelector(".quiz-box p").innerHTML =
q.question;


let labels = document.querySelectorAll(".quiz-box label");


labels.forEach((label,index)=>{

label.innerHTML =
`
<input type="radio" name="answer" value="${index}">
${q.answers[index]}
`;

});


}



function nextQuestion(){


let selected =
document.querySelector('input[name="answer"]:checked');


if(!selected){

alert("Ве молиме изберете одговор.");

return;

}


if(parseInt(selected.value) === questions[currentQuestion].correct){

score++;

}


currentQuestion++;


if(currentQuestion < questions.length){

loadQuestion();

}

else{


let playerName = localStorage.getItem("name") || "Играч";


let playerSurname = localStorage.getItem("surname") || "";


document.querySelector(".quiz-box").innerHTML = `

<h2>Квизот е завршен! 🏆</h2>


<p>
Браво ${playerName} ${playerSurname}!
</p>


<p>
Ваш резултат е:
<strong>${score} / ${questions.length}</strong>
</p>


<button onclick="location.href='index.html'">
Почетна
</button>

`;

}


}



loadQuestion();
