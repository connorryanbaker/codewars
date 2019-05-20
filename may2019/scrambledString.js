function scramble(str1, str2) {
 let [obj1, obj2] = [{}, {}];
 for (let i = 0; i < str2.length; i++) {
   obj2[str2[i]] ? obj2[str2[i]] = obj2[str2[i]] + 1 : obj2[str2[i]] = 1;
 }
 
 for (let i = 0; i < str1.length; i++) {
   obj1[str1[i]] ? obj1[str1[i]] = obj1[str1[i]] + 1 : obj1[str1[i]] = 1;
 }
 let bool = true;
 Object.keys(obj2).forEach(k => {
   if (obj1[k] < obj2[k] || !obj1[k]) bool = false;
 });
 return bool;
}
