<!-- ## Content to cover 

- git collaboration

- deployment

- subresource integrity

- image optimisation

- project MGMT with Trello and user stories

- sitemaps

- SCSS -->

### Intro Thurs

- mention portfolio site is released tomorrow

- mention lightning talks

- overview of what to cover:
  - improvements for site
  - git collaboration
  - SRI
  - deployment
  - SCSS
  - image optimisation

### Thurs challenge

- `favicon.ico`

### Git collaboration pt1

- refresh git vs github, and connection between the two (concept of a local repository)

- show remote repos with `git remote -v` (will be empty for cats-cakes since doesn't have a remote repo yet)

- Create Github repo called 'cats-cakes'

- `$git remote add origin git@github.com/Andrew-CC-Martin/cats-cakes.git`

- `$git remote -v` to confirm it's there

- `$ git push origin <branch name>`

- confirm that master branch is on github

### Updates to site

- *Try to be very clear about why I'm making these changes*

- create new branch for changes

- For navbar, change wrapper div to `<header>`

- Use find and replace in VSCode to do all at once

- Change wrapper divs for products-content etc to be `<main>`

- use flexbox to create sticky footer:
```html
<body>
<main>
```

```css
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
```

- go through process of fixing the transition bug - show the stack overflow thread

- fix the scrollability on homepage

```css
#front-page-image {
  width: 40%;
}
```

- add some padding on home page copy, for mobile view

### Git collaboration pt2

- Overview of what we're going to do
  - review branches and reverting changes
  - connect github as a remote repository
  - push some new code, and create a PR
  - merge the PR, then pull those changes back to local

- talk about what branches are, and why they're useful (could be good chance to use canvas whiteboard)

- listing branches with `git branch`

- refresh reverting unstaged changes with `checkout .`

- unstaging added stuff with `git reset`

- undo commit with `git reset ~HEAD`

- `git --amend`

- run through the PR process on github (including code review comments), then pull the updated master to local

### Deployment

- do drag and drop deployment on netlify

### SRI

- Explain how we are improving security by making sure that the resources we link to out html have the contents that we expect.

- go through this is a kind of 'recipe' first, just to show what to do.

- Emphasise that understanding all the parts of this is unrealistic at this stage.

- Mention that this is one of the assessable criteria on the portfolio assignment.

- go to MDN docs and copy the line.

- copy the generated hash and add to the integrity attribute on the element, prepended by the name of the hash algorithm.

- eg `<link rel="stylesheet" integrity="sha384-<hash>"`

## Fri

### Intro

- Growth mindset kahoot

- Growth mindset. Ok not to understand everything. Some days better than others. 

- Reminder than workbook assignment exists

- Check how people went with favicon

### Randomise script for lightning talks

- refresh what lightining talks are

- run script

### SRI continued

- Explain what a server is. "cloud", just a box somewhere

- create web server in VSCode. get students to connect to it

- explain how this was the reason why SRI wasn't working.

### Project management and Trello

- Create a trello board, with cards for:
  - sass
  - site map

### site map

- draw.io

### Sass

- install live sass compiler extension

- mention that if sass doesn't work locally, you can play with it in Ed. also mention possible to install CLI with homebrew.

- mixins and inheritance

```scss
@mixin aligned-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact-form {
  @include aligned-column;
}
```

- variables

```scss
  $brand-orange: #e07b39;

  button {
    background-color: brand-orange;
  }
```

- nesting

### image optimisation

- resize a couple of the images appropriately

### Possible extras

- google fonts

- `.gitignore` and

- svgs

- gradients

- box-shadow

- add favicon
