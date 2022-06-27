console.log("hello")

// this is how comments are made

// variables
// use let, var, or const
//let and var can be reassigned their values to different datatypes
//const can only be the value it is assigned and nothing else
// it can have stuff added to it I.E a list or an object

let rahmin = "gamer" // can be reassigned
var carlos = "meme lord" // can be reassigned
const jason = "windows problem guy"; //const cannot be reassigned
// arrays are the same way as they were in python, and are access the same way 
// via index
const students = ["olivia","andrea", "amanda"]
students.push("ethan") // this just adds the name to the list
rahmin = "engineer";
console.log(rahmin);
console.log(jason);
console.log(students[1])

// objects (dictionaries)

const student = {
    name: "ethan",
    id: 3
}
// how to call something in an object
console.log(student["name"])
// OR (dot notation only works on objects)
console.log(student.name);

const restaurant = ["uchi", "bnb", 'gyu-kaka']

console.log(restaurant[2])
// or 
console.log(restaurant[restaurant.length-1])
// or
console.log(restaurant.at(-1))

// this is a "for loop" in java
// use the bottom one right under here for algorithims
// lets you choose the index of the list
// oldest way to do it 

// for (let index = 0; index < restaurant.length; index++) {
//     const restaurant = restaurant[index];
//     console.log(restaurant)   
// }

// or

// for(let i of restaurant){
//     console.log(restaurant)
// }



for (let key in student){
    console.log(key)
}

// this prints out every value in the object
for (let key in student){
    console.log(student[key])
}


//functions
// two ways to write them
// this will STILL WORK! It does not care how many arguments is in it
// if you havent assigned the arguments, it will not care

// this is the old way

function TwoSum(sum, number, userID=1){
    let name = "rayleigh"
    name = "not the TA anymore"
    return "she cant be our ta anymore ever again"
}
console.log(TwoSum())


//new way. Write them this way for now

const ThreeSum = () => {
    console.log("our fav algo <3")
}
ThreeSum()

// these are technically different


// constants cannot be reassigned
// but locations in a LET can be


let thing = {
    functionPower: ThreeSum
}

let namename = ThreeSum
let secondName = namename
secondName()

//if statements

let teacher = "joe"

if (teacher !== "joe"){
    teacher = "Rayleigh"
} else if (teacher == "joe"){
    console.log("boo")
} else{
    console.log("i dont know how we got to this statement")
}




