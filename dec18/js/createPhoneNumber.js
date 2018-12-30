
function createPhoneNumber(numbers){
  const areaCode = "(" + numbers.slice(0,3).join("") + ")";
  const group2 = numbers.slice(3,6).join("");
  const group3 = numbers.slice(6).join("");
  return areaCode + " " +group2 + "-" + group3;
}
