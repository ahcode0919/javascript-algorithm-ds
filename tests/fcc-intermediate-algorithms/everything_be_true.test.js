import { truthCheck } from '../../src/fcc-intermediate-algorithms/everything_be_true';

test('should ', () => {
  expect(
    truthCheck(
      [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy', sex: 'male' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
      ],
      'sex'
    )
  ).toBe(true);
  expect(
    truthCheck(
      [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
      ],
      'sex'
    )
  ).toBe(false);
});
