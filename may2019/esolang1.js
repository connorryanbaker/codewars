const myFirstInterpreter = (code) => {
  const stripped = code.split("").filter(c => {
    return c === "+" | c === ".";
  }).join("");

  let memoryVal = 0;
  const res = [];

  for (let i = 0; i < stripped.length; i++) {
    if (stripped[i] === "+") {
      memoryVal++;
      memoryVal = memoryVal % 256;
    } else {
      res.push(memoryVal);
    }
  }

  return res.map(e => String.fromCharCode(e)).join("");
}
