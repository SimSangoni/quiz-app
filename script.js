let currentQuestion = 0;
let score = 0;
let wrongQuestions = [];
let currentOptions = [];
let hasAnswered = false;

const originalQuestions = [...questions];
let quizQuestions = [];
let activeQuestions = [];
let totalQuestions = 0;
let shuffleEnabled = true;

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

function toggleShuffle() {
  shuffleEnabled = !shuffleEnabled;

  const toggleBtn = document.getElementById("shuffle-toggle");
  toggleBtn.textContent = shuffleEnabled ? "Shuffle: ON" : "Shuffle: OFF";

  restartQuiz();
}

/* =========================
   SETUP QUIZ DATA
========================= */

function prepareQuestions(source) {
  quizQuestions = source.map(q => ({
    ...q,
    options: q.options ? [...q.options] : [],
    explanations: q.explanations ? [...q.explanations] : [],
  }));

  if (shuffleEnabled) {
    shuffle(quizQuestions);
  } else {
    quizQuestions.sort((a, b) => a.id - b.id);
  }

  totalQuestions = quizQuestions.length;
}

/* =========================
   QUIZ RANGE
========================= */

function startQuiz() {
  const input = document.getElementById("range-input").value;

    if (!input) {
      alert("Enter a range");
      return;
    }

    let selectedIds = [];

    // Split by comma → ["1-10", "60-70"]
    const parts = input.split(",");

    parts.forEach(part => {
      const range = part.trim().split("-");

      if (range.length === 2) {
        let start = parseInt(range[0]);
        let end = parseInt(range[1]);

        if (!isNaN(start) && !isNaN(end)) {
          for (let i = start; i <= end; i++) {
            selectedIds.push(i);
          }
        }
      } else {
        // Single number support: "5"
        let num = parseInt(range[0]);
        if (!isNaN(num)) {
          selectedIds.push(num);
        }
      }
    });

    // Remove duplicates
    selectedIds = [...new Set(selectedIds)];

    // Filter questions
    const filtered = originalQuestions.filter(q => selectedIds.includes(q.id));

    if (filtered.length === 0) {
      alert("No valid questions found");
      return;
    }


  // 🔁 Reset quiz state
  currentQuestion = 0;
  score = 0;
  wrongQuestions = [];

activeQuestions = filtered;
prepareQuestions(activeQuestions);

  scoreEl.textContent = `Score: 0 / ${totalQuestions}`;

  // 👇 Switch screens
  document.getElementById("setup-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  loadQuestion();
}

/* =========================
   LOAD QUESTION
========================= */

function loadQuestion() {
  feedbackEl.textContent = "";
  answersEl.innerHTML = "";
  

  const q = quizQuestions[currentQuestion];
  hasAnswered = false;

  if (!q) {
  questionEl.textContent = "Error loading question.";
  return;
}

questionEl.innerHTML = `
    <div class="question-main">(${currentQuestion + 1}/${totalQuestions}) ${q.question}</div>
    
    ${q.image ? `
      <div class="question-image" style="margin-top:10px;">
        <img src="${q.image}" alt="question image" style="max-width:100%; border-radius:8px;">
      </div>
    ` : ""}

    <div id="question-translation" style="display:none; margin-top:8px; font-size:0.95em; opacity:0.85;">
      ${q.translation || ""} 
    </div>
  `;

    const translationEl = document.getElementById("question-translation");
  questionEl.onclick = () => {
    if (!q.translation) return;
    translationEl.style.display =
      translationEl.style.display === "none" ? "block" : "none";
  };

  // HANDLE FILL TYPE
if (q.type === "fill") {
  answersEl.innerHTML = "";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Type your answer...";
  input.className = "fill-input";

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.className = "submit-btn";

  let answered = false;

    submitBtn.onclick = () => {
      if (answered) return; // 🚫 prevent second click

      const userAnswer = input.value.trim();
      if (!userAnswer) return;

      answered = true; // 🔒 lock

      // 🔒 disable input + button
      input.disabled = true;
      submitBtn.disabled = true;

      checkFillAnswer(userAnswer, q);
    };

  answersEl.appendChild(input);
  answersEl.appendChild(submitBtn);

  return; // 🚨 IMPORTANT: stop MCQ rendering
}


  currentOptions = q.options.map((opt, i) => ({
    text: opt,
    explanation: q.explanations?.[i] || null,
    originalIndex: i
  }));

if (shuffleEnabled) {
  shuffle(currentOptions);
}
  currentOptions.forEach((optObj, index) => {
    const row = document.createElement("div");
    row.className = "option-row";

    const topRow = document.createElement("div");
    topRow.className = "option-top-row";

    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = optObj.text;
    btn.onclick = () => selectAnswer(index);

    const infoBtn = document.createElement("button");
    infoBtn.className = "info-btn";
    infoBtn.textContent = "?";
    infoBtn.disabled = false;
    infoBtn.onclick = (e) => {
      e.stopPropagation();
      toggleExplanation(row, optObj);
    };

    topRow.appendChild(btn);
    topRow.appendChild(infoBtn);
    row.appendChild(topRow);

    answersEl.appendChild(row);
  });
}

function toggleExplanation(row, optObj) {
  let existing = row.querySelector(".option-explanation");

  if (existing) {
    existing.remove();
    return;
  }

  const exp = optObj.explanation;
  if (!exp) return;

  const box = document.createElement("div");
  box.className = "option-explanation";

  box.innerHTML = `
    <div><strong>English:</strong> ${exp.en || ""}</div>
    <div><strong>Note:</strong> ${exp.note || ""}</div>
    ${exp.link ? `<div><a href="${exp.link}" target="_blank" rel="noopener noreferrer">Learn more</a></div>` : ""}
  `;

  row.appendChild(box);
}
/* =========================
   SELECT ANSWER
========================= */

function selectAnswer(index) {
  const correctOriginal = quizQuestions[currentQuestion].answer;
  const rows = answersEl.querySelectorAll(".option-row");

  if (hasAnswered) return;
  hasAnswered = true;

  rows.forEach((row, i) => {
    const btn = row.querySelector(".answer-btn");
    const infoBtn = row.querySelector(".info-btn");

    btn.disabled = true;
    infoBtn.disabled = false;

    if (currentOptions[i].originalIndex === correctOriginal) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
  });

  if (currentOptions[index].originalIndex === correctOriginal) {
    feedbackEl.textContent = "Correct";
    score++;
  } else {
    feedbackEl.textContent = "Wrong";

    const q = quizQuestions[currentQuestion];
    if (!wrongQuestions.find(w => w.id === q.id)) {
      wrongQuestions.push(q);
    }
  }

  scoreEl.textContent = `Score: ${score} / ${totalQuestions}`;

  const continueBtn = document.createElement("button");
  continueBtn.className = "continue-btn";
  continueBtn.textContent = "Continue";

  continueBtn.onclick = () => {
    currentQuestion++;
    currentOptions = [];

    if (currentQuestion >= quizQuestions.length) {
      showEndScreen();
    } else {
      loadQuestion();
    }
  };

  answersEl.appendChild(continueBtn);
}

function checkFillAnswer(userAnswer, q) {
  answersEl.innerHTML = ""; // 🔥 clear old buttons (prevents duplicates)
  const correct = q.answer.trim();

  if (userAnswer === correct) {
    feedbackEl.textContent = "Correct";
    score++;
  } else {
    feedbackEl.textContent = `Wrong (Correct: ${correct})`;

    if (!wrongQuestions.find(w => w.id === q.id)) {
      wrongQuestions.push(q);
    }
  }

  // Explanation display
if (q.explanation) {
  const infoBtn = document.createElement("button");
  infoBtn.textContent = "?";
  infoBtn.className = "info-btn";

  infoBtn.onclick = () => {
    let existing = answersEl.querySelector(".option-explanation");

    if (existing) {
      existing.remove();
      return;
    }

    const expBox = document.createElement("div");
    expBox.className = "option-explanation";

    expBox.innerHTML = `
      <div><strong>English:</strong> ${q.explanation.en || ""}</div>
      <div><strong>Note:</strong> ${q.explanation.note || ""}</div>
    `;

    answersEl.appendChild(expBox);
  };

  answersEl.appendChild(infoBtn);
}

  scoreEl.textContent = `Score: ${score} / ${totalQuestions}`;

  const continueBtn = document.createElement("button");
  continueBtn.textContent = "Continue";
  continueBtn.className = "continue-btn";

  continueBtn.onclick = () => {
    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {
      showEndScreen();
    } else {
      loadQuestion();
    }
  };

  answersEl.appendChild(continueBtn);
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
  // 🔁 Reset all state
  currentQuestion = 0;
  score = 0;
  wrongQuestions = [];
  activeQuestions = [];
  quizQuestions = [];

  feedbackEl.textContent = "";
  answersEl.innerHTML = "";
  questionEl.innerHTML = "";

  // 🏠 Show setup screen again
  document.getElementById("setup-screen").style.display = "block";
  document.getElementById("quiz-container").style.display = "none";
}

/* =========================
   INIT
========================= */

function init() {
  prepareQuestions(originalQuestions);

  scoreEl.textContent = `Score: 0 / ${totalQuestions}`;

  loadQuestion();
}
