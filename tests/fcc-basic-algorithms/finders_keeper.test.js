import { findElement } from "../../src/fcc-basic-algorithms/finders_keepers";

test('should find matching elements', () => {
    expect(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).toBe(8);
    expect(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })).toBe(undefined);
});