import twoSum from "../../src/algorithms/arrays/two_sum";

test("should find sum", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
