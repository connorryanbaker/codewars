const findMiddleIndex = (arr) => {
  if (arr.length % 2 === 0) {
    return (arr.length / 2) - 1;
  } else {
    return Math.floor(arr.length / 2);
  }
}

const foldArray = (arr, runs) => {
  if (runs == 0) return arr;
  const idx = findMiddleIndex(arr);
  let sliced = [arr.slice(0,idx + 1), arr.slice(idx + 1, arr.length)]
  let j = 0;
  for (let i = sliced[1].length - 1; i >= 0; i--) {
    sliced[0][j] += sliced[1][i];
    j++;
  }
  return foldArray(sliced[0], runs - 1);
}

