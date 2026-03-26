let currentQuestion = 0;
let score = 0;
let wrongQuestions = [];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
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

function initialiseQuiz() {
  shuffle(questions);
  questions.forEach(q => shuffleOptions(q));
}

/* =========================
   LOAD QUESTION
========================= */

function loadQuestion() {
  feedbackEl.textContent = "";
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

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
  const q = questions[currentQuestion];
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

    // Track wrong question (no duplicates)
    if (!wrongQuestions.find(w => w.id === q.id)) {
      wrongQuestions.push(q);
    }
  }

  scoreEl.textContent = "Score: " + score;
}

/* =========================
   NEXT BUTTON
========================= */

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    questionEl.textContent = "Finished";
    answersEl.innerHTML = "";

    // Show review button when done
    if (wrongQuestions.length > 0) {
      const reviewBtn = document.createElement("button");
      reviewBtn.textContent = "Review Mistakes";
      reviewBtn.onclick = startReviewMode;
      answersEl.appendChild(reviewBtn);
    }

    nextBtn.style.display = "none";
    return;
  }

  loadQuestion();
};

/* =========================
   REVIEW MODE
========================= */

function startReviewMode() {
  currentQuestion = 0;
  score = 0;

  // Replace questions with wrong ones
  const reviewSet = [...wrongQuestions];

  wrongQuestions = [];

  questions.length = 0;
  reviewSet.forEach(q => questions.push(q));

  // Re-randomise
  shuffle(questions);
  questions.forEach(q => shuffleOptions(q));

  nextBtn.style.display = "block";
  scoreEl.textContent = "Score: 0";

  loadQuestion();
}

/* =========================
   INIT
========================= */

initialiseQuiz();
loadQuestion();