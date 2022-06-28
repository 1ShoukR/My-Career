// Comment
// Variables
// let, var, const
// let and var can be reassigned their values to different datatypes
// const can only be the value it is assigned and nothing else
// it can have stuff added to it

let rahmin = "gamer";
rahmin = "engineer";
console.log(rahmin);
var carlos = "meme lord";
carlos = "great question guy";
const jason = "windows problem guy";
console.log(jason);
// arrays (list) are the same as they were in python, and you access them
// the same way via index
const students = ["Olivia", "Andrea", "Amanda"];
console.log(students[1]);
students.push("Ethan");
console.log(students);

// Objects (dictionaries)
const student = {
  name: "Ethan",
  id: 3,
};

console.log(student["name"]);
console.log(student.name);

const restaurants = ["uchi", "bnb", "gyu-kaku"];
// console.log(restaurants[2]);
// console.log(restaurants[restaurants.length - 1]);
// console.log(restaurants.at(-1));

//oldest way to write for loops can work on anything that is iterable
for (let index = 0; index < restaurants.length; index++) {
  const restaurant = restaurants[index];
  console.log(restaurant);
}
// for loop used for arrays
// the for..of loop
// for (let restaurant of restaurants) {
//   console.log(restaurant);
// }

// const student = {
//   name: "Ethan",
//   id: 3,
// };

// for loop used for an object, the for..in loop
for (let key in student) {
  // this prints out every key
  console.log(key);
  // this prints out every value in the object
  console.log(student[key]);
}

// def function():
//  body

function TwoSum(sum, number, userId = 1) {
  let name = "rayleigh";
  name = "not the ta anymore";
  return "she can't be our ta anymore ever again";
}
console.log(TwoSum(1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2));

const ThreeSum = () => {
  console.log("Our fav algo 🧡");
};
// ThreeSum();

// if (teacher !== "Joe") {
//   teacher = "Rayleigh 👯‍♂️";
//   console.log(teacher);
// } else if (teacher === "Joe") {
//   console.log("boooo");
// } else {
//   console.log("i don't know how we got to this statement");
// }
