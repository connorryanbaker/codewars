
function solution(str){
  const arr = str.match(/.{2}/g);
  if (str.length % 2 !== 0) {
    arr.push(str[str.length-1] + "_");
  }
  return arr;
}
