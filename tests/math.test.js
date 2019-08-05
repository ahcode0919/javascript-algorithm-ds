import { sum } from '../src/math';

test('add two numbers', () => {
    expect(sum(5, 5)).toBe(10);
});