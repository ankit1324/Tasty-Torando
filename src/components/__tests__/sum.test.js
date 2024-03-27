import { sum } from "../sum";

test("Sum function should return the sum of two numbers", () => {
  const result = sum(1, 2);

  //!Assertion
  expect(result).toBe(3);
});
