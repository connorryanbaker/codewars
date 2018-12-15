function antiOptimizeAsyc(task) {
  const promise = new Promise((resolve, reject) => {
    if (task) {
      resolve(task);
    } else {
      reject(new Error("whoops"));
    }
  });

  return promise.then(setTimeout(() => { return; }, 11000))
                .then((task) => { return task(); },
                       (err) => { console.log(err) });
}
                                            
