// const { expect, test } = require("@jest/globals");
const { expect, test } = require("@jest/globals");
const piggy = require("./script");




// tests for words that start with vowels
test("apple translates to appleway", () => {
    expect(piggy("apple")).toBe("appleway");
})

test("egg translates to eggway", () => {
    expect(piggy("egg")).toBe("eggway");
})

// tests for words that start with consonants
test("banana to ananabay", () => {
    expect(piggy("banana")).toBe("ananabay");
})
test("food translates to oodfay", () => {
    expect(piggy("food")).toBe("oodfay");
})

// consonant cluster starter
test("psychology to ologypsychay", () => {
    expect(piggy("psychology")).toBe("ologypsychay");
})
test("schwartz to artzschway", () => {
    expect(piggy("schwartz")).toBe("artzschway");
})


// Lowercasing it
test("DOOM to lowercase", () => {
    expect(piggy("DOOM")).toBe("oomday");
})
test("Frank to lowercase", () => {
    expect(piggy("Frank")).toBe("ankfray");
})