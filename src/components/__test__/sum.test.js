const { Sum } = require("../Sum");

test("Sum function should return sum of two number", () => {
  const result = Sum(5, 6);

  //Assertion
  expect(result).toBe(11);
});
