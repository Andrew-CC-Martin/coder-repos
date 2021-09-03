## Content to cover

- Wireframing (in Balsamiq); user stories

- CSS
  - basics
  - layout, including responsive design and flexbox

## Before lesson

- Figure out how to record over loom. Check that it works

- Set up broadcasting over discord - and record using loom.

## General

- Try to avoid saying um. Pauses are ok.

- Much more class involvement. Ask them a lot of questions. Call out to Cat's room.

# Thurs

## Intro and Questions

- Apologies about not knowing everyone's names. Please put profile pics on canvas and discord to help.

- What we’re doing today (be clear and specific)

  - wireframing, user stories and site mapping
  
  - a little more terminal, git and html
  
  - CSS *show peter griffin gif and design is my passion

- Mention referencing. Personal preference for Harvard, but can use anything you want. Important thing is just to cite sources.

- Quick explanation of linux, and why windows need to set up WSL (windows subsystem linux). Reiterate that windows users should NOT use git bash or powershell. Also clarify that windows VSCode terminal needs to be set to use WSL.

- Now are starting to learn that computers being smart is a myth. Computers are fundamentally just machines that do exactly what they’re instructed to do. The intelligence is all coming from the programmer (with the borderline exception of machine learning, but that’s a whole other story)

- Coding syntax is totally unforgiving - one character out of place and everything breaks. *Clarify term syntax*. However, thanks to modern tools and techniques (eg IDEs, unit tests), this isn’t as scary as it sounds. *clarify term IDE*

- Interests. CSS/design/frontend vs CS/data/backend. The course contents and assessments cover everything you need to be ready to work as a junior full stack web developer. But you’ll likely find certain areas that are of more interest to you, that you’ll want to go deeper on. If you want to specialise in more backend or frontend, we encourage that.

- Questions:
  
  - something you learned from async content?
  
  - Anything you got stuck on or totally confused?
  
  - Which terminal command is especially dangerous? And which flag makes it even more dangerous?
  
  - When do we need to use the -rf flag?

## Kahoot

- do terminal Kahoot (mention that there were a couple of things in there which I didn't cover)

## Code Along

- Overview: A simple brochure type website, with at least 4 pages:
  - home
  - about
  - products
  - contact (submission form, map?)

- Ask for any suggestions on site idea. Brochure site for shop?

- Explain concept and benefit of wireframing

- Go over concept of user stories

- Use balsamiq to create wireframe for website, based on user stories.

- Start with mobile views. Mention both mobile-first design, and responsive design.

- Go slowly through process and ideation

- Start new site from scratch, to review using terminal and git again. note - do this in Ed for today

- ask ‘how to create a folder?’ ‘how to change into it’ ‘how to start the folder as a git repo?’ ‘how to create the files we need?’

- ask what file we need other than index.html, for a properly documented software project? *put some stuff into the readme as we go

- ask what file we need if we want some styling?

- init commit after adding files

- create HTML boilerplate
  - lang=’en’ 
    - explain accessibility value
    - ask if anyone knows the other main value of this (which also applies to semantic html)?

- show `git diff`. create second commit

- Quick explanation of what CSS is.

- Review inline, style tag, external css file
  
  - link the CSS file `<link rel="stylesheet" href="css/style.css" >`

- build out site
    
  - try cover more semantic tags eg:
    
    - `<nav>`
    
    - `<footer>`
    
    - `<em> <strong>`

  - possible stuff to use:

    - responsive design using media queries
      - `@media screen and (min-width: 480px) {}`

    - selectors: element, class, id

    - change font size, color, family, etc

    - text-align: center

    - absolute vs relative units
      
      - mm, cm, px
      
      - %, em, vw, vh

    - change background color

    - img height and width

    - use google fonts to demonstrate external style sheets from web

    - pseudo classes. demonstrate using links (nav bar)

    - background images. Use this to demonstrate opacity

    - relative and/or absolute positioning
    
    - get rid of `text-decoration` for links

### Stuff to explain/show while building

- show chrome devtools, and modifying css there (plus computed, and box model)

- When creating a second page, put it in a pages folder. Explain concept of a ‘root’ directory, and the convention to put index.html in there.

- Use this as chance to review absolute vs relative paths. Explain how browsers will look for a path based on the folder of the current html file it’s in.

- show html and css validation on W3C

### Questions while building:

- What is specificity (note):

  - inline 1000pts
  
  - id 100
  
  - class & pseudo 10
  
  - element 1

- what happens if specificity is the same? (Answer - the one that gets read last by the browser. This is the meaning of 'cascading')

## Afternoon

- Something to go on with based on the code along. Possibly responsive design.

- Possible encourage students who have time, to start their personal brand by creating a blog post (then tweeting it)

# Fri

## Intro

- HTML/CSS Kahoot

- Questions

- Mention:
  - Bianca's git review around 12
  - Renovations next week (access building through rear door in side alley)
  - arvo is continuing with canvas/Ed

## Code along

- Keep going with building out site

- Make a commit for where we're up to

- introduce git collaboration
  - branching

- Add some stuff to the readme

- ! shortcut

- meta tag
  - viewport
 `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - UTF encoding

- Possible extra stuff to cover:
  - footer (talk about DRY and copy pasting)(use text-align: center)
  - `<em>` and `<strong>`
  - flex-wrap (use this to put more items on the product page)
  - opacity
  - gradients
  - google fonts
  - pseudo classes and mouseover (good to combine with transition) eg fade in:
    - ```
        .button {
          opacity: 0.5;
          transition: 0.3s;
        }
      ```
    - `.button:hover { opacity: 1 }`
  - relative and absolute positioning
  - SCSS (rename the css file to scss, then get scss to generate the actual css file used by the browser)
    - `$ brew install sass/sass/sass`
    - `$ sass --watch style.scss:style.css`
    - variables
    - mixins
    - nesting
  - favicon: favicon.ico in root directory

### about page

copy:
Cats Cakes is a wonderland of sugar spice and everything nice. If you want a sweetness overload be sure to buy the Sugar Explosion Cake which will leave you buzzing from a natural sugar high. A cake for every animal on earth. We make cakes of any design, want a 3D life sized Optimus Prime cake? We got it. Need to make it up to your spouse for forgetting your anniversary (again)? We have you covered! Caking is our passion. So much so that we use caking as a verb. We hope it catches on. Our cakes are the best way to get BAKED! Need a cake for that special day? We got you Bro! Piece of cake 😉 Warm day? Going to the beach? Have some cake by the ocean! Cakes are what we are. Cakes are who we are. Cake: a bouquet of flour. We like big cakes and we cannot lie. ourCake == bestCake.

## Contact Page

- basic web form with labels, submit button
