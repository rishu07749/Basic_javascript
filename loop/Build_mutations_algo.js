function mutation(arr){
  let firstWord=arr[0].toLowerCase().split("");
   
  let count=0;
  
  
  let secWord=arr[1].toLowerCase().split("");
  console.log(secWord);
  for(const char of secWord){
    if(firstWord.includes(char)){
      count++;}
      
    }
  for(const char of firstWord){
    if(secWord.includes(char)){
      count1++;}
      
    }
    console.log(count)
    if(count==secWord.length  ){
        return true
      }else{
        return false;
      }
   
}

let result=mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
console.log(result);