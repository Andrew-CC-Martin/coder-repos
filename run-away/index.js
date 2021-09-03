import { randomLocation } from "./utilities/utilities.js"

function initialise() {
  const runner = document.getElementById("runner")
  const runnerLength = parseInt(runner.style.width)
  const width = document.body.clientWidth - runnerLength
  const height = document.body.clientHeight - runnerLength
  runner.addEventListener("mouseover", () => runAway(runner, height, width))
}

function runAway(runner, height, width) {
  runner.style.top = randomLocation(height)
  runner.style.left = randomLocation(width)
}

window.onload = initialise()
