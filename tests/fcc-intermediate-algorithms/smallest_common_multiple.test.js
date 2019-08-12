import { smallestCommons } from "../../src/fcc-intermediate-algorithms/smallest_common_multiple";

test('should find the smallest common multiple', () => {
    expect(smallestCommons([1, 5])).toBe(60);
    expect(smallestCommons([2, 10])).toBe(2520);
    expect(smallestCommons([23, 18])).toBe(6056820);
});
