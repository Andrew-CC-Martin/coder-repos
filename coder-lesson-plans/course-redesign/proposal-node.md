# Proposed new web dev course - JS only

## Changes overview, in order of strength of feeling

- Drop server-side rendering
  - lean JSON APIs and heavy frontends is very much the way the industry is heading
- build things from scratch before using a framework. Eg:
  - do vanilla JS before React
  - build a full DB in SQL before using an ORM
- Prefer lean frameworks 
  - sinatra over rails
  - flask over django
  - react over gatsby
- learn programming on the frontend first
  - visual environment
  - can build cooler stuff
  - early and continuous exposure to web technology
- If we keep CS, tailor it to coding interview questions and practical applications
  - drop stuff that won't be directly useful eg set theory

## Questions/notes

- Should there actually be a CS fundamentals course?
- learn two languages or one?
  - Learning two languages is really valuable
  - But learning JS first allows some unique opportunities
- needs more groupwork/collaboration. Eg could do vanilla JS app as group assignment

## Core subjects/learning outcomes

- Programmer's toolkit: IDE, version control, command line
- Frontend web development: HTML, CSS
- Intro to programming
- Databases and data modelling
- HTTP and networking
- backend development and APIs
- modern frontend development (ReactJS)
- CS fundamentals(?)
- major project

## Term 1

By the end of term 1, students will have built a web app, using modern tools/workflow.

- intro to HTML/CSS
  - include intro to terminal/git/IDE
  - __assessment__ - portfolio site
- intro to programming
  - __assessment__ - vanilla JS web app
    - consume 3rd party API
    - use local storage for persistence

## Term 2

They've had a chance to hack around on the frontend, and get a real feel for 'programming'.
Now they're ready for some backend dev.

- intro to backend development (focus on databases and networking)
  - Intro to HTTP and networking
    - theory stuff - TCP/IP etc
    - __assessment__ - use vanilla Node to deploy basic JSON API (and consume it on frontend)
  - Intro to databases and SQL, covering:
    - ERDs, normalisation
    - different SQL join types
    - SQL injection & prepared statements
    - indexing and performance
    - __assessment__ - create a full stack web app, with:
      - database written in plain SQL
      - connected to ExpressJS REST API
      - consumed by vanilla JS frontend
      - note: auth handled by 3rd party service eg firebase

## Term 3

They've seen all the pain that comes from consuming an API and managing state in vanilla JS.
Time to introduce ReactJS.

- Modern frontend - ReactJS
  - all the usual react stuff: lifecycle, hooks, redux, controlled components, etc
  - create a few apps to consume various APIs
  - __assessment__ - full stack ExpressJS/ReactJS app

- CS fundamentals
  - data structures and algorithms
  - algorithmic complexity and big O notation
  - __assessment__ mock coding interview (how would we mark this???)

- __assessment__ - major project
