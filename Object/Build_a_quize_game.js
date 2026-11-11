let questions=[{
  category:"PCo",
  question:"fav color ?",
  choices:['Red', 'Black', 'Both'],
  answer:'Red'
},
{
   category: "PCa",
    question: "Fav car ?",
    choices: ['Honda', 'BMW', 'both'],
    answer: 'Honda'
},
{
  category: "PB",
    question: "Fav brand ?",
    choices: ['Amazon', 'Google', 'Both'],
    answer: 'Both'
},{
  category: "PF",
    question: "Fav fruit ?",
    choices: ['Apple', 'Grapes', 'Mango'],
    answer: 'Mango'
},{
  category: "PH",
    question: "fav hobby ?",
    choices: ['Singing', 'Coding', 'Both'],
    answer: 'Both'
}];
let randomNum = Math.floor(Math.random()*5)

let anotherRandom = Math.floor(Math.random()*3)

function getRandomQuestion(nofQuestions){
  return nofQuestions[randomNum];
}
function getRandomComputerChoice(noChoices){
  console.log(noChoices)
  return noChoices[anotherRandom];
}
function getResults(getQuestion,getChoice){
  if(getQuestion.answer===getChoice) return "The computer's choice is correct!"
  else return `The computer's choice is wrong. The correct answer is: ${getQuestion.answer}`
}
let questionObj = getRandomQuestion(questions)
let getChoice=getRandomComputerChoice(questions[randomNum].choices)
console.log(getResults(questionObj,getChoice))



