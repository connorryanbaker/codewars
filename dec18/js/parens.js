function validParentheses(parens){
  var openStack = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      openStack.push(1);
    } else {
      if (openStack.length == 0) return false;
      openStack.pop();
    }
  }
  if (openStack.length > 0) return false;
  return true;
}
