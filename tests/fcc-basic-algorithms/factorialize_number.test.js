import { factorialize } from "../../src/fcc-basic-algorithms/factorialize_number";

test('should generate factorial', () => {
    expect(() => { factorialize(-1) }).toThrow('Number must be positive');
    expect(factorialize(0)).toBe(1);
    expect(factorialize(5)).toBe(120);
    expect(factorialize(10)).toBe(3628800);
});