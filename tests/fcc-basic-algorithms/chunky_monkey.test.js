import { chunkArrayInGroups } from "../../src/fcc-basic-algorithms/chunky_monkey";

test('should chunk array into groups', () => {
    expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).toStrictEqual([["a", "b"], ["c", "d"]]);
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toStrictEqual( [[0, 1, 2, 3], [4, 5]]);
});