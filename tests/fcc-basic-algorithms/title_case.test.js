import { titleCase } from "../../src/fcc-basic-algorithms/title_case";

test('should capitalize first letter of each word', () => {
    expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
    expect(titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
});