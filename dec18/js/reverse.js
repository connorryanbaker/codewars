function reverser(sentence) {
    var split = sentence.split(" ");
    return split.map((word) => reverse(word)).join(" "); 
}

function reverse(word) {
    if (word.length === 0) {
      return "";
    } else {
      return word[word.length - 1].concat(reverse(word.slice(0, word.length - 1)));
    }
}
