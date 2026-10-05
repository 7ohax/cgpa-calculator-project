# Scaler CGPA Calculator

This is a small student project for calculating CGPA. Add a subject, choose its grade, and enter its credits. The page shows the subjects and updates the CGPA.

## What it can do

- Add a subject with its grade and credits
- Show the grade points for each subject
- Delete a subject
- Calculate CGPA using the subject credits
- Save the subject list in the browser with localStorage

## Grade points used

| Grade | Points |
| --- | ---: |
| O | 10 |
| A+ | 9 |
| A | 8 |
| B+ | 7 |
| B | 6 |
| C | 5 |
| F | 0 |

The CGPA is calculated like this:

`CGPA = total of (grade points × credits) ÷ total credits`

## Files

- `index.html` has the page structure.
- `style.css` controls how the page looks.
- `script.js` adds subjects, saves them, and calculates the CGPA.

## How to open it

Download or clone this project, then open `index.html` in a web browser. No installation is needed.

The subject list is saved in the browser's localStorage, so it stays in that browser when the page is opened again.

## About this project

This project was made to practise HTML, CSS, and JavaScript. Add your name and course details here if your instructor requires them.
