function firstNonRepeatingLetter(s) {
  let arr = s.toLowerCase().split("");
  for (let i = 0; i < s.length; i++) {
    if (arr.count(arr[i]) == 1) {
      return s[i];
    }
  }
  return '';
}

Array.prototype.count = function(el) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] == el) count ++;
  }
  return count;
}



