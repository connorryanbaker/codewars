
function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === undefined || arrayOfArrays == null || 
    arrayOfArrays.includes(null) || arrayOfArrays.length == 0) {
    return 0;
  }
  const lengths = arrayOfArrays.map((a) => a.length);
  if (lengths.includes(0)) {
    return 0;
  }
  return myRange(Math.min(...lengths), Math.max(...lengths)).filter((a) => {
    return !lengths.includes(a)
  })[0];
}

const myRange = (a, b) => {
 let res = [];
 for (let i = a; i <= b; i++) {
   res.push(i);
 }
 return res;
}
