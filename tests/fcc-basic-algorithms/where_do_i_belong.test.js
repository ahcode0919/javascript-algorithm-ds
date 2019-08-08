import { getIndexToIns } from "../../src/fcc-basic-algorithms/where_do_i_belong";

test('should find the correct insert position to preserve order', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
    expect(getIndexToIns([5, 3, 20, 3], 5)).toBe(2);
});