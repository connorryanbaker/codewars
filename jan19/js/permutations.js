function permutations(str) {
  let res = [];
  if (str.length <= 1) {
    res.push(str);
    return res;
  }
  for (let i = 0; i < str.length; i++) {
    let firstChar = str[i];
    let otherChars = str.slice(0,i) + str.slice(i + 1);
    let ocPermutations = permutations(otherChars);
    for (let j = 0; j < ocPermutations.length; j++) {
      res.push(firstChar + ocPermutations[j]);
    }
  }
  return res;
}

