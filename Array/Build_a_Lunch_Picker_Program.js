const lunches=[];
function addLunchToEnd(lunches,str){
  let newArr=lunches.push(str);
  console.log(`${str} added to the end of the lunch menu.`)
  return lunches;
}
console.log(addLunchToEnd(lunches,"Tacos"));
console.log(addLunchToEnd(["Pizza", "Tacos"],"Burger"))
function addLunchToStart(lunches,str){
  lunches.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return lunches;

}
console.log(addLunchToStart(lunches, "Pizza"))
function removeLastLunch(lunches){
  if(lunches.length==0){
    console.log("No lunches to remove.");
    
  }
  let newArr=lunches.pop();
  console.log(`${newArr} removed from the end of the lunch menu.`)
  
  return lunches;
}
console.log(removeLastLunch([]))
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]))


function removeFirstLunch(lunches){
  if(lunches.length===0){
    console.log("No lunches to remove.")
  }
  let newArr=lunches.shift();
  console.log(`${newArr} removed from the start of the lunch menu.`);
  return lunches;

}
function getRandomLunch(lunches){
  if(lunches.length===0){
    console.log("No lunches available.")
  }
  let atIndex=Math.floor(Math.random()*lunches.length)
  let RandomLunch=lunches[atIndex];
  console.log(`Randomly selected lunch: ${RandomLunch}`);
  
}

function showLunchMenu(lunches){
  let [lunch1,lunch2, ...rest]=lunches;
  if(lunches.length!==0){
    console.log(`Menu items: ${lunch1}, ${lunch2}, ${rest.join(", ")}`);
  }else if(lunches.length===0){
    console.log("The menu is empty.") ;
  }
  
  
}
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);