import { sumAll } from "../../src/fcc-intermediate-algorithms/sum_all_numbers_in_a_range";

test('should sum all numbers in a range', () => {
    expect(sumAll([1, 4])).toBe(10);
    expect(sumAll([4, 1])).toBe(10);
});