import { destroyer } from "../../src/fcc-intermediate-algorithms/seek_and_destroy";

test('should remove values', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
});