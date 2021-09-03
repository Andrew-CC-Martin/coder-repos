# Proposed new web dev course

## Changes overview, in order of strength of feeling

- Drop server-side rendering
- program on the frontend before the backend
- Drop use of large frameworks
- build things from scratch before using a framework
- double down on JS instead of learning two languages
- keep CS, but tailor it to coding interview questions and practical applications (no set theory)

## Questions/uncertainties

- Is terminal app actually worthwhile?
- Should there actually be a CS fundamentals course?

# Course version 2 - language agnostic (written here with Python, but sub with your own language of choice)
## Core subjects/learning outcomes

- Frontend web development: HTML, CSS, Frontend JS
- Intro to programming: NodeJS and terminal app
- Programmer's toolkit: IDE, version control, command line
- Databases and data modelling: database theory & postgres
- HTTP and networking
- backend development and APIs
- modern frontend development: ReactJS
- CS fundamentals
- major project

## Term 1

Jump right in and start programming. Not the 'softest' intro, but that is a feature not a bug.
Anyone who can't handle git/command-line/terminal apps from day 1 probabaly isn't a good fit.

- terminal/git/intro to programming in JS
- assessment #1 - terminal app in NodeJS
- intro to HTML/CSS
- assessment #2 - portfolio site in HTML/CSS/JS
- intro to frontend JS
- assessment #3 - consume API with vanilla JS

## Term 2

They've had a chance to hack around on the frontend, and get a real feel for 'programming'.
Now they're ready for some backend dev.

- intro to backend development (focus on databases and networking)
  - use express to create basic JSON API, and consume it on frontend
  - learn databases and SQL, covering:
    - ERDs, normalisation
    - different SQL join types
    - SQL injection & prepared statements
    - indexing and performance
  - create database using raw SQL
- assessment #4
  - create a full stack web app, with:
    - database written in plain SQL
    - connected to ExpressJS REST API
    - consumed by vanilla JS frontend

Now they've seen all the pain that comes from consuming an API in vanilla JS.
Time to introduce ReactJS.

- Modern frontend - ReactJS
  - all the usual react stuff: lifecycle, hooks, redux, controlled components, etc
  - create a few apps to consume various APIs

- assessment #5 - full stack ExpressJS/ReactJS app

## Term 3

- CS fundamentals
  - data structures and algorithms
  - algorithmic complexity and big O notation
  - assessment #6 CS exam???

- assessment #7 - major project
