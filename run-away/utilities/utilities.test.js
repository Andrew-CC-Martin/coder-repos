import { randomLocation } from "./utilities.js"

describe("randomLocation provides a string, representing a location on the screen", () => {
  const width = 1000
  test("it returns a random number between 0 and the scope", () => {
    // since this function is random, repeat the test many times
    for (let i = 0; i < 10000; i++) {
      const horizontalLocation = randomLocation(width)
      const locationInteger = parseInt(horizontalLocation)
      expect(locationInteger).toBeGreaterThan(-1)
      expect(locationInteger).toBeLessThan(1001)
    }
  })

  test("it returns a string with px at the end", () => {
    const location = randomLocation(9)
    // for random 0-9, string should be eg 5px, 7px etc
    // therefore string should always be length 3
    expect(location.length).toBe(3)
    expect(location[location.length - 1]).toBe("x")
    expect(location[location.length - 2]).toBe("p")
  })
})
