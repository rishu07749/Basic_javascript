function chunkArrayInGroups(array, n) {
  const arraysWithSamelength = Math.floor(array.length / n);
  console.log(arraysWithSamelength)
  let splitCount = arraysWithSamelength;
  if (array.length % n != 0) splitCount++ ;
  const newArray = [];
  for (let i = 1; i <= splitCount; i++) {
    if (array.length > n) {
      newArray.push(array.splice(0, n))
    } else {
      newArray.push(array)
    }
  }
  return newArray
}


console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))

