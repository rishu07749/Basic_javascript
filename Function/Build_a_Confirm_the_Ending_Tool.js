function confirmEnding(str, strCheck) {
  let Atindex = str.length;
  let index = strCheck.length;

  console.log(str.slice(Atindex - index));
  if (str.slice(Atindex - index) === strCheck) {
    return true;
  } else {
    return false;
  }
}
let result = confirmEnding("Congratulation", "on");
console.log(result);
