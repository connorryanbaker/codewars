function iqTest(numbers) {
  const map = new Map();
  map["even"] = [0,[]];
  map["odd"] = [0,[]];
  numbers.split(" ").forEach((num, idx) => {
    if (num % 2 == 0) {
      map["even"][0]++;
      map["even"][1].push(idx + 1);
    } else {
      map["odd"][0]++;
      map["odd"][1].push(idx + 1);
    }
  });
  if (map["even"][0] > map["odd"][0]) {
    return map["odd"][1][0];
  } else {
    return map["even"][1][0];
  }
}

