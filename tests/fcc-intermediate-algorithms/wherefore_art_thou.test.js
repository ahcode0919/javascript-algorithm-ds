import { whatIsInAName } from '../../src/fcc-intermediate-algorithms/wherefore_art_thou';

test('should find matching name pairs', () => {
  expect(
    whatIsInAName(
      [
        { first: 'Romeo', last: 'Montague' },
        { first: 'Mercutio', last: null },
        { first: 'Tybalt', last: 'Capulet' },
      ],
      { last: 'Capulet' }
    )
  ).toEqual([{ first: 'Tybalt', last: 'Capulet' }]);
  expect(
    whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
      apple: 1,
    })
  ).toEqual([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]);
});
