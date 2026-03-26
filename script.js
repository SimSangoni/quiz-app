let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

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

function selectAnswer(index) {
  const correct = questions[currentQuestion].answer;
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
  }

  scoreEl.textContent = "Score: " + score;
}

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    questionEl.textContent = "Finished";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    return;
  }

  loadQuestion();
};

loadQuestion();