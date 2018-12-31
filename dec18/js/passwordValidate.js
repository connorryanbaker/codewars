function validate(password) {
  let length = password.length >= 6;
  let lc = /[a-z/.test(password);
  let uc = /[A-Z]/.test(password);
  let d = /\d/.test(password);
  let nospace = !/\W/.test(password);
  return length && ls && uc && d && nospace;
}
