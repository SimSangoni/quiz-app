let currentQuestion = 0;
let score = 0;
let wrongQuestions = [];

const originalQuestions = [...questions]; // 🔥 preserve original
let quizQuestions = [];

let totalQuestions = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

/* =========================
   SHUFFLE FUNCTIONS
========================= */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleOptions(question) {
  const combined = question.options.map((opt, index) => ({
    text: opt,
    isCorrect: index === question.answer
  }));

  shuffle(combined);

  question.options = combined.map(item => item.text);
  question.answer = combined.findIndex(item => item.isCorrect);
}

/* =========================
   SETUP QUIZ DATA
========================= */

function prepareQuestions(source) {
  quizQuestions = source.map(q => ({
    ...q,
    options: [...q.options]
  }));

  shuffle(quizQuestions);
  quizQuestions.forEach(q => shuffleOptions(q));

  totalQuestions = quizQuestions.length;
}

/* =========================
   LOAD QUESTION
========================= */

function loadQuestion() {
  feedbackEl.textContent = "";
  answersEl.innerHTML = "";

  const q = quizQuestions[currentQuestion];

  questionEl.textContent = `(${currentQuestion + 1}/${totalQuestions}) ${q.question}`;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });
}

/* =========================
   SELECT ANSWER
========================= */

function selectAnswer(index) {
  const q = quizQuestions[currentQuestion];
  const correct = q.answer;
  const buttons = answersEl.children;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;

    if (i === correct) {
      buttons[i].classList.add("correct");
    } else {
      buttons[i].classList.add("wrong");
    }
  }

  if (index === correct) {
    feedbackEl.textContent = "Correct";
    score++;
  } else {
    feedbackEl.textContent = "Wrong";

    if (!wrongQuestions.find(w => w.id === q.id)) {
      wrongQuestions.push(q);
    }
  }

  scoreEl.textContent = `Score: ${score} / ${totalQuestions}`;

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {
      showEndScreen();
    } else {
      loadQuestion();
    }
  }, 800);
}

/* =========================
   END SCREEN
========================= */

function showEndScreen() {
  const percentage = Math.round((score / totalQuestions) * 100);

  questionEl.textContent = "Quiz Complete";

  answersEl.innerHTML = `
    <div style="text-align:center;">
      <p><strong>Final Score:</strong> ${score} / ${totalQuestions}</p>
      <p><strong>Accuracy:</strong> ${percentage}%</p>
      <p><strong>Mistakes:</strong> ${totalQuestions - score}</p>
    </div>
  `;

  // 🔁 Restart button
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz";
  restartBtn.onclick = restartQuiz;
  answersEl.appendChild(restartBtn);

  // 🔁 Review button
  if (wrongQuestions.length > 0) {
    const reviewBtn = document.createElement("button");
    reviewBtn.textContent = "Review Mistakes";
    reviewBtn.onclick = startReviewMode;
    answersEl.appendChild(reviewBtn);
  }
}

/* =========================
   REVIEW MODE
========================= */

function startReviewMode() {
  currentQuestion = 0;
  score = 0;

  const reviewSet = [...wrongQuestions];
  wrongQuestions = [];

  prepareQuestions(reviewSet);

  scoreEl.textContent = `Score: 0 / ${totalQuestions}`;

  loadQuestion();
}

/* =========================
   RESTART
========================= */

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  wrongQuestions = [];

  prepareQuestions(originalQuestions);

  scoreEl.textContent = `Score: 0 / ${totalQuestions}`;

  loadQuestion();
}

/* =========================
   INIT
========================= */

function init() {
  prepareQuestions(originalQuestions);

  scoreEl.textContent = `Score: 0 / ${totalQuestions}`;

  loadQuestion();
}

init();