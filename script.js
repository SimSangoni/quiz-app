const questions = [
  {
    question: "“月”“我”“云”三字的拼音中没有（ ）",
    answers: ["声母", "韵母", "声调", "音节"],
    correct: 0
  },
  {
    question: "“心安理得”的正确拼音是？",
    answers: ["xīnānlǐdé", "xīn’ān lǐdé", "xīnān lǐdé", "xīn’ānlǐdé"],
    correct: 2
  },
  {
    question: "哪个成语表示心情忐忑不安？",
    answers: ["七上八下", "三心二意", "一心一意", "三头六臂"],
    correct: 0
  },
  {
    question: "端午节是为了纪念谁？",
    answers: ["孔子", "屈原", "李白", "杜甫"],
    correct: 1
  }
];

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

  let q = questions[currentQuestion];
  questionEl.textContent = q.question;

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  const correct = questions[currentQuestion].correct;
  const buttons = answersEl.children;

  for (let i = 0; i < buttons.length; i++) {
    if (i === correct) buttons[i].classList.add("correct");
    else buttons[i].classList.add("wrong");
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