function findUniq(arr) {
  let dupsRemoved = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr.count(arr[i]) === 1) {
      return arr[i];
    } else {
      dupsRemoved = arr.filter((a) => a !== arr[i]);
      break 
    }
  }
  return findUniq(dupsRemoved);
}
Array.prototype.count = function(el) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    this[i] == el ? count++ : count;
  }
  return count;
}
