let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, property) {
  for (let person of contacts) {
    // console.log(person.firstName)
    if (person.firstName === name) {
      if (person[property]) {
        return person[property];
      } else {
        return "No such property";
      }
    }
  }

  return "No such contact";
}

let result = lookUpProfile("Harry", "likes");
console.log(result);
