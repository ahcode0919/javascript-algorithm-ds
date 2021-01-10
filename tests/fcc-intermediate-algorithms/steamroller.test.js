import { steamrollArray } from '../../src/fcc-intermediate-algorithms/steamroller';

test('should flatten an array', () => {
  expect(steamrollArray([[['a']], [['b']]])).toEqual(['a', 'b']);
  expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
});
