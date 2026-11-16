function findLongestWordLength(sentence){
  let lword=0;
  
  let arr=sentence.trim().split(" ");
  // console.log(arr[4])
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
    
    if(arr[i].length > lword){
      lword=arr[i].length;
    }
  }
  return lword;
}

  

findLongestWordLength("The quick brown fox jumped over the lazy dog");