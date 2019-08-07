import { reverseString } from "../../src/fcc-basic-algorithms/reverse_string";

test('should reverse a string', () => {
    expect(reverseString('test')).toBe('tset');
    expect(reverseString('ada')).toBe('ada');
    expect(reverseString('1234')).toBe('4321');
});