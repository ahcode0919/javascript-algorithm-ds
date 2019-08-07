import { findLongestWordLength } from "../../src/fcc-basic-algorithms/find_longest_string";

test('should find longest word length', () => {
    expect(findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe(6);
});