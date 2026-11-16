function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphaArr = alphabet.split("");

  let strArr = str.split("");

  const firstLetter = strArr[0];

  const lastLetter = strArr[str.length - 1];
  const indx_firstLetter = alphaArr.indexOf(firstLetter);

  const ind_lastLetter = alphaArr.indexOf(lastLetter);

  const targetString = alphaArr.slice(indx_firstLetter, ind_lastLetter + 1);

  for (let char of targetString) {
    if (str.includes(char) === false) {
      return char;
    }
    //
  }
  return undefined;
}
let result = fearNotLetter("abce");

console.log(result);
