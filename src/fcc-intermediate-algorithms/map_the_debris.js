export function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map((object) => {
    const a = (earthRadius + object.avgAlt) ** 3;
    const computedOrbitalPeriod = Math.round(Math.PI * 2 * Math.sqrt(a / GM));
    return { name: object.name, orbitalPeriod: computedOrbitalPeriod };
  });
}
