import { spinalCase } from "../../src/fcc-intermediate-algorithms/spinal_tap_case";

test('should join all words as lower case seperated by dashes', () => {
    let str = "this_Is SpinalTap"
    expect(spinalCase(str)).toBe("this-is-spinal-tap");
    expect(str).toBe("this_Is SpinalTap");
});