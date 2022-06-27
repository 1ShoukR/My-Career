

// practice one

function lvl5exercise1() {
  // Push the string "hello" into the array and return the array
  var arr = [1, "adam"];
  arr.push("Hello")
  return arr

}
console.log(lvl5exercise1())

function lvl5exercise2() {
  // Remove the last element from the array and return the array
  var arr = [1, "adam"];
  arr.pop()
  return arr
}
console.log(lvl5exercise2())

function lvl5exercise3() {
  // Return the length of the array
  var arr = [1, "adam"];
  let length = arr.length
  return length
}
console.log(lvl5exercise3())

function lvl5exercise4() {
  // Return the index of item "adam" in the array
  var arr = [1, "adam"];
  let index = arr.indexOf("adam")
  return index
}
console.log(lvl5exercise4())





// practice 2




function lvl6exercise1(num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
  // use a switch statement
    switch (num) {
    case 1:
        return "hello";
    case 2:
        return "world"
    default:
        return "bye"
    }
}
console.log(lvl6exercise1(1));
console.log(lvl6exercise1(2));

function lvl6exercise2() {
  // Push 10 'hello' strings into the array using a for loop, then return it
  var arr = [];
  for (let index = 0; index < 10; index++) {
    arr.push("Hello")
  }
  return arr
}
console.log(lvl6exercise2())

function lvl6exercise3() {
  // Empty this array using a while loop and return it
  var arr = [
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
  ];
  while (arr.length > 0) {
    arr.pop()
  }
  return arr
}
console.log(lvl6exercise3())





// practice 3

// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number. If the input is anything other than a positive
// integer return an empty array
//
// Name the function "finalFunction"

const finalFunction = (number) =>{
    const emptyArray = []
    for (let index = 0; index < number; index++) {
        emptyArray.push("hello")
        
    }
    return emptyArray
}
console.log(finalFunction(1))
console.log(finalFunction(10))
console.log(finalFunction(-1))


// This is called currying down below

function mul(x){
    return function (y){
        // anonymous function
        return function(z){
            // anonymous function
            return x * y * z
        }
    }
}

console.log(mul(2)(3)(4))
