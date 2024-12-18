const fizzbuzz = require("./index.js");

test("Testing Jest is working", () => {
  expect(2 + 2).toBe(4);
});

describe("Testing fizzbuzz return value", () => {
  test("Should return 8 when given 8", () => {
    const actual = fizzbuzz(8);
    const expected = 8;
    expect(actual).toBe(expected);
  });

  test("Should return 2 when given 2", () => {
    const actual = fizzbuzz(2);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  test("Should return Buzz when givin 10", () => {
    const actual = fizzbuzz(10);
    const expected = "Buzz";
    expect(actual).toBe(expected);
  });

  test("Should return FizzBuzz when givin 135", () => {
    const actual = fizzbuzz(135);
    const expected = "FizzBuzz";
    expect(actual).toBe(expected);
  });

  test("Should return Fizz when givin 24", () => {
    const actual = fizzbuzz(24);
    const expected = "Fizz";
    expect(actual).toBe(expected);
  });
});
