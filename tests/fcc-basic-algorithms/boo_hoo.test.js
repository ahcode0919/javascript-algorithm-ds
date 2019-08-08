import { booWho } from "../../src/fcc-basic-algorithms/boo_hoo";

test('should evaluate boolean primatives', () => {
    expect(booWho(true)).toBe(true);
    expect(booWho([1, 2, 3])).toBe(false);
    expect(booWho({ "a": 1 })).toBe(false);
});