let num=5;
function factorialCalculator(number){
  let result=1;
  for(let i=1;i<=number;i++){
    result *= i;
  }
  return result;
}
console.log(factorialCalculator(num))
let factorial= factorialCalculator(num)
let resultMsg=`Factorial of ${num} is ${factorial}`
console.log(resultMsg)