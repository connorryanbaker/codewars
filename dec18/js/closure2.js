
function createFunctions(n) {
  var callbacks = [];
  
  function createFunction(n) {
        return function() {
                return n;
              }
      }
  
  for (var i=0; i<n; i++) {
        callbacks.push(createFunction(i));
      }
  
  return callbacks;
}
