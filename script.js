const questions = [

{
question: "Кој ја изградил Ноевата арка?",
answers: [
"Авраам",
"Ное",
"Мојсеј"
],
correct: 1
},

{
question: "Колку ученици имал Исус Христос?",
answers: [
"10",
"12",
"20"
],
correct: 1
},

{
question: "Кој го победил џинот Голијат?",
answers: [
"Давид",
"Соломон",
"Петар"
],
correct: 0
},

{
question: "Кој бил првиот човек според Библијата?",
answers: [
"Адам",
"Мојсеј",
"Павле"
],
correct: 0
},

{
question: "Кој го предал Исус?",
answers: [
"Јован",
"Јуда",
"Лука"
],
correct: 1
},

{
question: "Кој го разделил Црвеното Море?",
answers: [
"Мојсеј",
"Давид",
"Ное"
],
correct: 0
},

{
question: "Кој бил таткото на Исак?",
answers: [
"Авраам",
"Јаков",
"Јосиф"
],
correct: 0
},

{
question: "Кој бил првиот цар на Израел?",
answers: [
"Давид",
"Саул",
"Соломон"
],
correct: 1
},

{
question: "Кој го напишал најголемиот број Псалми?",
answers: [
"Давид",
"Петар",
"Матеј"
],
correct: 0
},

{
question: "Во кој град бил роден Исус?",
answers: [
"Назарет",
"Витлеем",
"Ерусалим"
],
correct: 1
}

];



let currentQuestion = 0;
let score = 0;



function loadQuestion(){

const q = questions[currentQuestion];


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

alert("Изберете одговор пред да продолжите.");

return;

}



if(Number(selected.value) === questions[currentQuestion].correct){

score++;

}



currentQuestion++;



if(currentQuestion < questions.length){

loadQuestion();

}

else{


document.querySelector(".quiz-box").innerHTML =

`
<h2>Квизот е завршен!</h2>

<h3>
Ваш резултат:
<br><br>
${score} / ${questions.length}
</h3>

<p>
${Math.round((score / questions.length) * 100)}%
</p>

<p>
Продолжете со проучување на Светото Писмо.
</p>
`;

}



}



loadQuestion();
