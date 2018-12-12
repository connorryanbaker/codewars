
function smallest(n) {
  var res = [];
  var indices = [];
  var numbers = n.toString();
  for (let i = 0; i < numbers.length; i++) {
    var tempChar = numbers[i];
    var tempS = i == 0 ? numbers.slice(i + 1) : numbers.slice(0, i) + numbers.slice(i + 1);
    for (let j = 0; j < numbers.length; j++) {
      if (j == 0) {
        res.push(parseInt(tempChar + tempS));
      } else {
        let newStr = tempS.slice(0,j) + tempChar + tempS.slice(j);
        res.push(parseInt(newStr));
      }
      indices.push([i,j]);
    }
  }
  const lowest = Math.min.apply(null,res);
  return [lowest].concat(indices[res.indexOf(lowest)]);
}
