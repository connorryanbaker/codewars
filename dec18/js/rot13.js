
function convertUC(c) {
  let charCode = c.charCodeAt(0);
  charCode + 13 <= 90 ? charCode = charCode + 13 : charCode = 65 + charCode + 12 - 90;
  return String.fromCharCode(charCode);
}
function convertLC(c) {
  let charCode = c.charCodeAt(0);
  charCode + 13 <= 122 ? charCode = charCode + 13 : charCode = 97 + charCode + 12 - 122;
  return String.fromCharCode(charCode);
}
function rot13(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      res += convertUC(str[i]);
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      res += convertLC(str[i]);
    } else {
      res += str[i];
    }
  }
  return res;
}
