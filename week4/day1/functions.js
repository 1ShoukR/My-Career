// //



// D R Y: stands for dont repeat your code
// if oyu find yourself repeating, probably needs to be a functions

let count = 0
count = 1;
count = 2;
count = 3;
// using keyword fucntion is how we can define a function (the old way)
function incrementNumber(number=0){
    // function body
    let total = number +1;
    return total
}
// this is a way that increments the number that you input in the below argument
console.log(incrementNumber(12))


// es6 way of writing a function (also called a fat arrow function)


const functionName = (number) => {
    let total = number +1
    return total
}
console.log(functionName(3))

// new way
const getName = (name) =>{
    console.log(name)
}

// old way 
function multiply(number){
    return number * 10
}

const nullFunction = () =>{
    return null
}

const nameReverse = (name) =>{
    return name.reverse()
}

const printHouse = () =>{
    console.log("house")
    return 0
}

const invHouse = () =>{
    printHouse();
}
invHouse()

const palindrome = (word) =>{
    if (typeof word === "string"){
        console.log("its a string")
    }
}

const recursiveFunction = () =>{
    recursiveFunction()
}

// this function receueves a function as an argument, if it doesnt receive a function
// print an error message
const funkyFunction = (argument) =>{
    console.log(argument)
    argument("racecar")
}

funkyFunction(palindrome)


const whatUser = () =>{
    // some async code
    return {name: "joe"}
}

const findUserInDatabase = (user) =>{
    console.log(user())
    // runs some code that grabs data from data base and returns it like this {Name: "Joe"}
}

findUserInDatabase(whatUser)




const myName = () =>{
    console.log("rahmin")
    let array = ["1",2, "one"]
    for (let index = 0; index < array.length; index++) {
        console.log("im looping")
        
    }
    return undefined
}