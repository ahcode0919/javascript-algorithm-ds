import { confirmEnding } from "../../src/fcc-basic-algorithms/confirm_ending";

test('should checking ending string', () => {
    expect(confirmEnding('Bastian', 'ian')).toBe(true);
    expect(confirmEnding('Bastian', 't')).toBe(false);
    expect(confirmEnding('Congratulation', 'on')).toBe(true);
});