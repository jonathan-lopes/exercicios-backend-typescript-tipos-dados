function spelling(word: string) {
  const str = word.split("").join("-");
  return str;
}

console.log(spelling("programador"));
