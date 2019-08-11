import { myReplace } from "../../src/fcc-intermediate-algorithms/search_and_replace";

test('should replace the specified word', () => {
    expect(myReplace("His name is Tom", "Tom", "john")).toBe("His name is John");
    expect(myReplace("The boat is red", "red", "blue")).toBe("The boat is blue");
});