function wordMesh(arr) {
  let res = "";
  for (let i = 0; i < arr.length - 1; i++) {
    let match = null;
    for (let j = 0; j < arr[i].length; j++) {
      let substring = arr[i].slice(j);
      if (i < arr.length - 1) {
        if (arr[i + 1].slice(0,(arr[i].length - j)) === substring) {
          match = substring;
          break;
        }
      }
    }
    if (match === null) {
      return "failed to mesh";
    } else {
      res += match;
    }
  }
  return res;
}
