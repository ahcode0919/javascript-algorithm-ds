import { pairElements } from "../../src/fcc-intermediate-algorithms/dna_pairing";

test('should pair elements', () => {
    expect(pairElements("ATCGA")).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
});