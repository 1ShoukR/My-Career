// print in python
console.log("hello world");
// console.table(object);
//
// how to define variables in js
// let, var, const

// dictionary = {
//     "name": "Joe"
// }
let object = {
  name: "Joe",
  height: "5:8",
  age: "42",
  weight: "55kg",
};
// dot notation
console.log(object.age);
// this is how we did it in python and it also works as well
console.log(object["age"]);

const formerTas = ["rayleigh", "christian", "randy", "Q"];
console.log(formerTas[2]);
formerTas.push("joe");
console.log(formerTas);
const joe = "joe";

console.log(formerTas[0]);
// for loops
// var and let, var has a larger scope whereas let only has a block scope
for (var index = 0; index < formerTas.length; index++) {
  //   const element = formerTas[index];
  console.log("first for loop", index);
}
console.log(index);

for (let letIndex = 0; index < formerTas.length; letIndex++) {
  //   const element = formerTas[index];
  console.log("let index", letIndex);
}
// console.log(letIndex);
