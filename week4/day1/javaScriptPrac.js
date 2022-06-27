// print in python
console.log("hello world")
// console.table(object);
// console.table(array);

//how to define variables in js
// let, var, const

//dot notation


let dictionary= {
    name: "rahmin",
    age: "23",
    height: "5'10",
    weight: "needs to go on a cut",

}
console.log(dictionary)
console.log(dictionary.keys(dictionary))
console.log(dictionary.age)



console.log(object["age"])

console.log(formerTas[2])


// let object = {
//     name: "joe",
//     height: "5'8",
//     age: "42",
//     weight: "55kg",
// };

const formerTas = ["raleighy", "christian", "randy", "Q"]
formerTas[0] = "youre no longer here rayleigh";

// to add to an array: 

formerTas.push("Matt", "ethan","etc")
formerTas.push(["matt","ethan"])
console.log(formerTas)


// for loops
// var has larger scope while let has block scope
for (var index = 0; index < formerTas.length; index++) {
    // const element = array[index];
    console.log("first for loop", index)
    
}
// console.log(index)

for (let letindex = 0; index < formerTas.length; index++) {
    // const element = array[index];
    console.log("let index", letindex)
}
// console.log(letindex)

// const has scope within its function
// for (const consty = 0; 1 < formerTas.length; consty++) {
//     // const element = array[index];
//     console.log("consty index", consty)
    
// }
// console.log(consty);


