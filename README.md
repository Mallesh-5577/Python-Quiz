# Python Quiz

A responsive browser-based Python quiz application built with HTML, CSS, and
vanilla JavaScript.

## Features

- 80 Python multiple-choice questions.
- Previous and Next navigation.
- Answer selection without revealing the correct answer during the quiz.
- Submit button enabled after at least one question is attempted.
- Analysis panel displayed after submission.
- Score shown out of the full 80-question quiz.
- Circular score indicator and answer progress bar.
- Performance feedback:
  - 0-19 correct: Keep Practicing
  - 20-40 correct: Good
  - 41-60 correct: Better
  - 61-80 correct: Perfect
- Answer Review panel showing:
  - Correct answers
  - Wrong answers with the correct answer
  - Questions that were not attempted
- Responsive three-panel layout for laptops, tablets, and mobile devices.

## Project structure

```text
Quiz-application/
├── index.html   # Application markup
├── script.js    # Questions, quiz logic, scoring, and answer review
├── style.css    # Layout, colors, components, and responsive styles
└── README.md    # Project documentation
```

## Running the application

This project does not require a build step or external dependencies.

1. Open the project folder in Visual Studio Code.
2. Open `index.html` with a local development server, such as the Live Server
   extension.
3. Select an option and use **Next** to move through the quiz.
4. Click **Submit** after attempting at least one question.

Opening `index.html` directly in a browser also works because the application
uses local HTML, CSS, and JavaScript files only.

## How scoring works

The score is calculated against all 80 questions:

```text
percentage = correct answers / 80 × 100
```

Unanswered questions count as incorrect in the final score. The Answer Review
panel identifies them separately as **Not attempted**.
