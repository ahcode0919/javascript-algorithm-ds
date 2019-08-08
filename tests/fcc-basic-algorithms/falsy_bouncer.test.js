import { bouncer } from "../../src/fcc-basic-algorithms/falsy_bouncer";

test('should remove falsy values', () => {
    expect(bouncer([undefined, 7, null, true, "ate", "", false, 9, NaN])).toEqual([7, true, "ate", 9]);
});