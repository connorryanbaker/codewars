const fibonacci = (n) => {
    if (n === 0) return 0;
    let f = fibs(n);
    return f[f.length - 1];
}

const fibs = (n) => {
   if (n <=2) {
      return [1,1].slice(0,n);
    }
    let prevFibs = fibs(n - 1);
    prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);
    return prevFibs;
}
