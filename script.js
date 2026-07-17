import { quizData } from './data.js';

// Your script.js has only one job : i.e

// Control the quiz flow.
// It must:
// Show a question
// Wait for user answer
// Check if correct
// Move to next question
// Show final score
// That’s it.

let index = 0;
let score = 0;


//accessing question & options placeholders
let qnPlaceHolder = document.querySelector("#question");
let optA = document.querySelector("#a_text");
let optB = document.querySelector("#b_text");
let optC = document.querySelector("#c_text");
let optD = document.querySelector("#d_text");

//accessing your radio buttons
let radioButtons = document.querySelectorAll("input");

//function to display question
function showQuestion(){
    let currentQuestion = quizData[index];
    qnPlaceHolder.innerText = currentQuestion.question;
    optA.innerText = currentQuestion.a;
    optB.innerText = currentQuestion.b;
    optC.innerText = currentQuestion.c;
    optD.innerText = currentQuestion.d;

    radioButtons.forEach(radio => radio.checked = false);
}

showQuestion();

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(){
    // alert("hola");
    //user clicks submit after selecting an answer 
    //answer validation should happen
    //score has to update in backend
    let answerChoosen = selectedAnswer();
    let currentQuestion = quizData[index];
    if(answerChoosen === currentQuestion.correct) score++;
    // & next question should display
    index++;
    if(index < quizData.length) showQuestion();
    else showResult();
}

function selectedAnswer(){
    let choosenAnswer = null;
    for(let i = 0; i < radioButtons.length; i++){
        let radio = radioButtons[i];
        if(radio.checked) choosenAnswer = radio.value;
    }
    return choosenAnswer;
}

function showResult(){
    alert("your score is "+score);
}
