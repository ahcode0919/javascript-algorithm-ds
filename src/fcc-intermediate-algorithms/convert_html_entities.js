export function convertHTML(str) {
  const getEscapedString = function (char) {
    switch (char) {
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return char;
    }
  };
  const newString = [];
  for (const char of str) {
    newString.push(getEscapedString(char));
  }

  return newString.join('');
}
