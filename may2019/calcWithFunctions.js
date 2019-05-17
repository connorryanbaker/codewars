function plus(n) {
  return function(num) {
    return n + num;
  }
}
function minus(n) {
  return function(num) {
    return num - n;
  }
}
function times(n) {
  return function(num) {
    return n * num;
  }
}
function dividedBy(n) {
  return function(num) {
    return Math.floor(num / n);
  }
}

const zero = (fn) => fn ? fn(0) : 0;
const one = (fn) => fn ? fn(1) : 1;
const two = (fn) => fn ? fn(2) : 2;
const three = (fn) => fn ? fn(3) : 3;
const four = (fn) => fn ? fn(4) : 4;
const five = (fn) => fn ? fn(5) : 5;
const six = (fn) => fn ? fn(6) : 6;
const seven = (fn) => fn ? fn(7) : 7;
const eight = (fn) => fn ? fn(8) : 8;
const nine = (fn) => fn ? fn(9) : 9;
