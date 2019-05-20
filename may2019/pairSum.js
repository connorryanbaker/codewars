const sum_pairs = (ints, s) => {
  const obj = {};
  let diff;
  for (let i = 0; i < ints.length; i++) {
    diff = s - ints[i];
    if (obj[ints[i]] !== undefined) {
      return [obj[ints[i]],ints[i]];
    } else {
      obj[diff] = ints[i];
    }
  }
}
