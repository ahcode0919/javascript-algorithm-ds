import { repeatStringNumTimes } from "../../src/fcc-basic-algorithms/repeat_string";

test('should repeat a string', () => {
    expect(repeatStringNumTimes('abc', 3)).toBe('abcabcabc');
    expect(repeatStringNumTimes('abc', 0)).toBe('');
});