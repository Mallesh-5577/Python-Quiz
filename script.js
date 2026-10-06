const questions = [
  {"question": "Which keyword is used to define a function?", "options": ["function", "def", "fun", "define"], "answer": 1},
  {"question": "Which of these data types is immutable?", "options": ["list", "dict", "set", "tuple"], "answer": 3},
  {"question": "Which method adds an item to the end of a list?", "options": ["add()", "push()", "append()", "insert_end()"], "answer": 2},
  {"question": "What type of value does input() return?", "options": ["int", "str", "float", "bool"], "answer": 1},
  {"question": "What is the output of \"python\"[1:4]?", "options": ["pyt", "yth", "ytho", "tho"], "answer": 1},
  {"question": "What does len(set([1, 1, 2, 2, 3])) return?", "options": ["5", "3", "2", "1"], "answer": 1},
  {"question": "Which keyword skips the current loop iteration and moves to the next?", "options": ["break", "pass", "continue", "skip"], "answer": 2},
  {"question": "What is the output of [x * 2 for x in range(3)]?", "options": ["[0, 2, 4]", "[2, 4, 6]", "[0, 1, 2]", "[1, 2, 3]"], "answer": 0},
  {"question": "Which block always runs, whether or not an exception occurs?", "options": ["else", "finally", "except", "catch"], "answer": 1},
  {"question": "What is the output of print(10 / 2)?", "options": ["5", "5.0", "2", "Error"], "answer": 1},
  {"question": "What does *args allow a function to accept?", "options": ["Keyword arguments only", "Any number of positional arguments", "Exactly two arguments", "Pointer arguments"], "answer": 1},
  {"question": "What does the is operator check?", "options": ["Value equality", "Whether both names refer to the same object", "Data type only", "Membership in a list"], "answer": 1},
  {"question": "Which method is the constructor of a Python class?", "options": ["__init__", "__create__", "constructor", "__start__"], "answer": 0},
  {"question": "What does self refer to inside a class method?", "options": ["The class itself", "The current instance", "The parent class", "The module"], "answer": 1},
  {"question": "Which is the correct syntax for class B inheriting from class A?", "options": ["class B extends A", "class B(A):", "class B : A", "class B inherits A"], "answer": 1},
  {"question": "What does a decorator (using @) do?", "options": ["Defines a class", "Wraps a function to modify its behavior", "Imports a module", "Adds a comment"], "answer": 1},
  {"question": "Which keyword turns a function into a generator?", "options": ["return", "yield", "generate", "next"], "answer": 1},
  {"question": "def f(x, lst=[]): lst.append(x); return lst. What does f(2) return after f(1) was already called?", "options": ["[2]", "[1, 2]", "[1]", "Error"], "answer": 1},
  {"question": "What does GIL stand for in CPython?", "options": ["Global Interpreter Lock", "General Import Library", "Global Index List", "Generic Interface Layer"], "answer": 0},
  {"question": "What is the output of print(0.1 + 0.2 == 0.3)?", "options": ["True", "False", "Error", "None"], "answer": 1},
  {"question": "Which module provides deepcopy()?", "options": ["copy", "clone", "deep", "itertools"], "answer": 0},
  {"question": "Which methods must a class define to work with the with statement?", "options": ["__enter__ and __exit__", "__start__ and __end__", "__open__ and __close__", "__begin__ and __finish__"], "answer": 0},
  {"question": "What is the average time complexity of a dictionary lookup?", "options": ["O(n)", "O(log n)", "O(1)", "O(n^2)"], "answer": 2},
  {"question": "Which special method does print(obj) call to get a readable string?", "options": ["__repr__", "__str__", "__print__", "__show__"], "answer": 1},
  {"question": "What is the output of list(map(lambda x: x * x, [1, 2, 3]))?", "options": ["[1, 4, 9]", "[1, 2, 3]", "[2, 4, 6]", "[1, 8, 27]"], "answer": 0},
  {"question": "Which of these can be used as a dictionary key?", "options": ["list", "set", "tuple of integers", "dict"], "answer": 2},
  {"question": "Which keyword pauses a coroutine until an awaitable completes?", "options": ["yield", "await", "wait", "pause"], "answer": 1},
  {"question": "What does the nonlocal keyword do?", "options": ["Declares a global variable", "Refers to a variable in an enclosing (non-global) scope", "Makes a variable constant", "Deletes a variable"], "answer": 1},
  {"question": "What is the output of print(bool(\"False\"))?", "options": ["False", "True", "Error", "None"], "answer": 1},
  {"question": "a = [1, 2, 3]; b = a; b.append(4). What is print(a)?", "options": ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"], "answer": 1},
  {"question": "What is the output of print(-7 // 2)?", "options": ["-3", "-4", "3", "-3.5"], "answer": 1},
  {"question": "What is the output of print(round(2.5))?", "options": ["3", "2", "2.5", "Error"], "answer": 1},
  {"question": "What is the output of print([] == [], [] is [])?", "options": ["True True", "True False", "False False", "False True"], "answer": 1},
  {"question": "What happens when you run int(\"3.5\")?", "options": ["Returns 3", "Returns 4", "Raises ValueError", "Returns 3.5"], "answer": 2},
  {"question": "What happens with d = {}; d[[1, 2]] = \"x\"?", "options": ["It works", "TypeError: unhashable type: 'list'", "KeyError", "ValueError"], "answer": 1},
  {"question": "def f(): pass. What does print(f()) display?", "options": ["pass", "None", "0", "Error"], "answer": 1},
  {"question": "What is the output of print(list(range(10, 0, -3)))?", "options": ["[10, 7, 4, 1]", "[10, 7, 4]", "[10, 7, 4, 1, 0]", "[]"], "answer": 0},
  {"question": "After a, *b = [1, 2, 3], what is b?", "options": ["[2, 3]", "2", "[1, 2]", "Error"], "answer": 0},
  {"question": "x = 10 is global. Function f() prints x and afterwards assigns x = 5. What happens when f() is called?", "options": ["Prints 10", "Prints 5", "UnboundLocalError", "Prints None"], "answer": 2},
  {"question": "What is the output of print(all([]))?", "options": ["False", "True", "None", "Error"], "answer": 1},
  {"question": "What is the output of print(isinstance(True, int))?", "options": ["False", "True", "Error", "None"], "answer": 1},
  {"question": "What does if __name__ == \"__main__\": check?", "options": ["The file is run directly, not imported", "The file is imported", "The Python version", "Whether the module exists"], "answer": 0},
  {"question": "What does the walrus operator := do?", "options": ["Compares two values", "Assigns a value inside an expression", "Unpacks a list", "Defines a lambda"], "answer": 1},
  {"question": "What is the difference between list.sort() and sorted()?", "options": ["sort() returns a new list; sorted() sorts in place", "sort() sorts in place and returns None; sorted() returns a new list", "Both return new lists", "Both modify the list in place"], "answer": 1},
  {"question": "a = [[0]] * 3; a[0][0] = 1. What is print(a)?", "options": ["[[1], [0], [0]]", "[[1], [1], [1]]", "[[0], [0], [0]]", "Error"], "answer": 1},
  {"question": "funcs = [lambda: i for i in range(3)]. What does funcs[0]() return?", "options": ["0", "2", "3", "Error"], "answer": 1},
  {"question": "def f():\n    try:\n        return 1 / 0\n    finally:\n        return 2\n\nWhat does f() return?", "options": ["1", "2", "None", "Error"], "answer": 1},
  {"question": "How does Python pass arguments to functions?", "options": ["By value", "By reference", "By object reference (assignment)", "By pointer"], "answer": 2},
  {"question": "What is the output of print(3 > 2 > 2)?", "options": ["True", "False", "Error", "None"], "answer": 1},
  {"question": "What does functools.lru_cache do?", "options": ["Limits memory usage", "Caches function results by arguments", "Locks threads", "Logs function calls"], "answer": 1}
]
let current = 0;
const answers = Array(questions.length).fill(null);
let completed = false;

const questionEl = document.getElementById("question");
const optionEls = document.querySelectorAll(".option");
const resultEl = document.getElementById("result");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("prev");
const submitButton = document.getElementById("submit");
const analysisContent = document.getElementById("analysisContent");
const scoreRing = document.getElementById("scoreRing");
const scorePercent = document.getElementById("scorePercent");
const correctCount = document.getElementById("correctCount");
const totalCount = document.getElementById("totalCount");
const progressBar = document.getElementById("progressBar");
const finalResult = document.getElementById("finalResult");
const resultsBox = document.getElementById("resultsBox");
const resultsList = document.getElementById("resultsList");

function loadQuestion() {
  let q = questions[current];

  questionEl.textContent = `${current + 1}. ${q.question}`;
  const selectedAnswer = answers[current];

  optionEls.forEach((el, i) => {
    el.textContent = `${i + 1}. ${q.options[i]}`;
    el.style.cursor = "pointer";
    el.onclick = () => checkAnswer(i);
    el.classList.toggle("selected", selectedAnswer === i);
  });

  nextButton.textContent = "Next";
  nextButton.disabled = questions.length === 0
    || current === questions.length - 1
    || completed;
  previousButton.disabled = current === 0;
  submitButton.disabled = answers.every(answer => answer === null) || completed;
  updateAnalysis();
}

function checkAnswer(i) {
  answers[current] = i;
  optionEls.forEach((el, index) => {
    el.classList.toggle("selected", index === i);
  });
  updateAnalysis();
}

function updateAnalysis() {
  const answered = answers.filter(answer => answer !== null).length;
  const correct = answers.reduce(
    (total, answer, index) => total + (answer === questions[index].answer ? 1 : 0),
    0
  );
  const percentage = answered === 0
    ? 0
    : Math.round((correct / questions.length) * 100);
  const progress = questions.length === 0
    ? 0
    : Math.round((answered / questions.length) * 100);

  scorePercent.textContent = `${percentage}%`;
  correctCount.textContent = correct;
  totalCount.textContent = questions.length;
  progressBar.style.width = `${progress}%`;
  scoreRing.style.setProperty("--score", `${percentage}%`);
  submitButton.disabled = answered === 0 || completed;
}

nextButton.onclick = () => {
  if (current < questions.length - 1) {
    current++;
    loadQuestion();
  }
};

submitButton.onclick = () => {
  if (answers.some(answer => answer !== null)) {
    completed = true;
    showFinalResult();
  }
};

function showFinalResult() {
  const answered = answers.filter(answer => answer !== null).length;
  const correct = answers.reduce(
    (total, answer, index) => total + (answer === questions[index].answer ? 1 : 0),
    0
  );
  const percentage = Math.round((correct / questions.length) * 100);
  const rating = correct >= 41
    ? {
      title: "Perfect! 🎉",
      message: "Congratulations! Excellent work."
    }
    : correct >= 30
      ? {
        title: "Better! 👍",
        message: "Practice more to become perfect."
      }
      : correct >= 20
        ? {
          title: "Good! 🙂",
          message: "Practice more to get better."
        }
        : {
          title: "Keep Practicing! 💪",
          message: "Review the topics and try again."
        };

  resultEl.innerHTML = `<strong>${rating.title}</strong><br>${rating.message}<br>You scored ${correct}/${questions.length} (${percentage}%).`;
  finalResult.className = `final-result score-${correct >= 61 ? "perfect" : correct >= 41 ? "better" : correct >= 20 ? "good" : "practice"}`;
  analysisContent.hidden = false;
  renderAnswerReview();
  nextButton.disabled = true;
  submitButton.disabled = true;
  previousButton.disabled = true;
  optionEls.forEach(el => {
    el.style.cursor = "default";
    el.onclick = null;
  });
}

function renderAnswerReview() {
  resultsList.replaceChildren();

  questions.forEach((question, index) => {
    const item = document.createElement("div");
    const answer = answers[index];
    const isCorrect = answer === question.answer;
    const status = answer === null
      ? "Not attempted"
      : isCorrect
        ? "Correct"
        : "Wrong";

    item.className = `review-item ${answer === null ? "unanswered" : isCorrect ? "correct" : "wrong"}`;

    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${status}`;
    item.appendChild(title);

    const details = document.createElement("span");
    details.textContent = answer === null
      ? "No answer selected"
      : isCorrect
        ? `Your answer: ${question.options[answer]}`
        : `Your answer: ${question.options[answer]} | Correct: ${question.options[question.answer]}`;
    item.appendChild(details);

    resultsList.appendChild(item);
  });

  resultsBox.hidden = false;
}

previousButton.onclick = () => {
  if (current > 0 && !completed) {
    current--;
    loadQuestion();
  }
};


loadQuestion();