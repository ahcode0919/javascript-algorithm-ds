export function binaryAgents(str) {
  const binaryArray = str.split(' ');
  const stringArray = binaryArray.map((val) =>
    String.fromCharCode(parseInt(val, 2))
  );
  return stringArray.join('');
}
