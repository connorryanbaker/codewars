function buildFun(n){
  var res = []

  for (var i = 0; i< n; i++){
    (function () {
      var j = i;
      res[i] = function() { return j; };
    })();
  }
  return res;
}
