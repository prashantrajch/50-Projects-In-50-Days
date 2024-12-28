import quizData from "./data.js";

const container = document.getElementsByClassName("container")[0];
const question = document.getElementById("question");
const allRadioBtn = document.querySelectorAll(".answer");
const a_text = document.getElementById("a").nextElementSibling;
const b_text = document.getElementById("b").nextElementSibling;
const c_text = document.getElementById("c").nextElementSibling;
const d_text = document.getElementById("d").nextElementSibling;

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSelectAnswer();
  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deSelectAnswer() {
  allRadioBtn.forEach((radio) => (radio.checked = false));
}

function getSelectedAnswer() {
  // First method if you don't know filter method

  // let answer;
  // allRadioBtn.forEach((radionInput) =>{
  //     if(radionInput.checked){
  //       answer = radionInput.id;
  //     }
  // })
  // return answer;

  // Second Method using Filter method and also extract using map method.

  //return Array.from(allRadioBtn).filter((radioInput) => radioInput.checked).map((radioInput) => radioInput.id);

  // Third Method using Filter method without using map method

  return Array.from(allRadioBtn).filter((radioInput) => radioInput.checked)[0]
    ?.id;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelectedAnswer();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      container.innerHTML = `
                <h2 style="text-align: center;">You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
