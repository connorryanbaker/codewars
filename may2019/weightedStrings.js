function orderWeight(strng) {
    if (strng.length === 0) return '';
    const obj = {};
    const weights = strng.split(/\s+/);
    for (let i = 0; i < weights.length; i++) {
      let current = weights[i].split("").map(e => parseInt(e))
      let ttl = current.reduce((a,b) => a + b);
      obj[ttl] ? obj[ttl].push(weights[i]) : obj[ttl] = [weights[i]];
    }
    const srt = Object.keys(obj).sort((a,b) => a - b);
    const vals = srt.map(k => obj[k].sort((a,b) => strNumSort(a,b)));
    return [].concat(...vals).join(" ");
}
function strNumSort(a,b) {
  for (let i = 0; i < b.length; i++) {
    if (parseInt(a[i]) < parseInt(b[i])) {
      return -1;
    } else if (parseInt(b[i]) < parseInt(a[i])) {
      return 1;
    }
  }
  return a.length > b.length ? 1 : -1;
}
