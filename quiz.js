const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Computer Style Sheets",
    b: "Cascading Style Sheets",
    c: "Creative Style Sheets",
    d: "Colorful Style Sheets",
    correct: "b",
  },
  {
    question: "Which HTML tag is used for JavaScript?",
    a: "<js>",
    b: "<javascript>",
    c: "<script>",
    d: "<code>",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentData = quizData[currentQuiz];

  questionEl.textContent = currentData.question;
  a_text.textContent = currentData.a;
  b_text.textContent = currentData.b;
  c_text.textContent = currentData.c;
  d_text.textContent = currentData.d;
}

function deselectAnswers() {
  answerEls.forEach(answer => (answer.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach(ans => {
    if (ans.checked) answer = ans.id;
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (!answer) return alert("Please select an option");

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>You answered ${score}/${quizData.length} correctly 🎉</h2>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
});
