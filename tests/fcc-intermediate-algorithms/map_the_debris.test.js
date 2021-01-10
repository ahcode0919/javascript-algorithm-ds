import { orbitalPeriod } from '../../src/fcc-intermediate-algorithms/map_the_debris';

test('should calculate orbital period', () => {
  expect(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }])).toEqual([
    { name: 'sputnik', orbitalPeriod: 86400 },
  ]);
});
