//

// D R Y
// don't repeat yourself
// probably needs to be a function

let count = 0;
count = 1;
count = 2;
count = 3;
//
// def pythonFunc():
//     return

// using the keyword function, is how we can define a function (the old way)
function incrementNumber(number = 0) {
  // function body
  let total = number + 1;
  return total;
}
// console.log(incrementNumber(12));
// console.log(undefined === false);

// ES6 way of writing a function

const arrowIncrement = (number) => {
  let total = number + 1;
  return total;
};

const getName = (name) => {
  console.log(name);
};

function mulitply(number) {
  return number * 10;
}

const nullFunction = () => {
  return null;
};

const reverseFunk = (name) => {
  return name.reverse();
};

const printHouse = () => {
  console.log("🏠");
  return 0;
};

const invokeHouse = () => {
  printHouse();
};

const palindrome = (word) => {
  if (typeof word === "string") {
    console.log("it's a string");
  }
};

const recursiveFunction = () => {
  recursiveFunction();
};

// this function receives a function as an argument, if it doesn't receive a function
// print an error message
const weirdFunctionThatReceivesaFunctionAsAnArgument = (argument) => {
  console.log(argument);
  argument("racecar");
};
// a function by reference
// palindrome;
// a function by invocation
// palindrome()
weirdFunctionThatReceivesaFunctionAsAnArgument(palindrome);

const printNameAgain = () => {
  console.log("Ethan");
  let array = ["1", 2, "one"];
  for (let index = 0; index < array.length; index++) {
    console.log("i'm looping");
  }
  return undefined;
};

// if (condition) {

// }

const calcTotal = (total, tipPercent) => {
  // 3 conditionals if statements
  // / if (> 100)
  // multiply by .3
  // 50-99
  // multiply by .25
  // less than 50
  // multiply by .2

  // return value as .toFixed(2)
  let mealTotal = total * tipPercent;
  return mealTotal + total;
};
console.log(calcTotal(12, 0.63).toFixed(2));
// > 100 30% grat
// 50-99 25% grat
//  < 50 20% grat

// create a function that receives a number
// the number is guaranteed to be in the range of 1 to 5
// time slot, "7:30PM"
// (1, "7:30pm")

// function makeAReservation (vipStatus, timeslot){}
// if the vipStatus is a 4-5, they  are placed in the list first
// if it is 3, they are placed second
// anything below three is placed last
// you will run this function 3 times, with 3 different data sets
// 5
// 3
// 1
// output [ {vipStatus: 5, timeslot: "7:30pm"},{vipStatus: 3, timeslot: "6:30pm"},{vipStatus: 1, timeslot: "7:30pm"}]

const reservationList = [];
const vipData = [
  { number: 5, timeslot: "7:30pm" },
  { number: 3, timeslot: "5:30pm" },
  { number: 1, timeslot: "3:30pm" },
  { number: 5, timeslot: "7:30pm" },
];
const makeReservation = (status, time) => {
  // if(status => 4){
  let reservationGuest = {
    vipStatus: status,
    timeslot: time,
  };
  reservationList.push(reservationGuest);
};
for (let index = 0; index < vipData.length; index++) {
  makeReservation(vipData[index].number, vipData[index].timeslot);
}
reservationList.sort((a, b) => b.vipStatus - a.vipStatus);
console.log(reservationList);

function mul(x) {
  return function (y) {
    // anonymous function
    return function (z) {
      // anonymous function
      return x * y * z;
    };
  };
}

mul(6)(5)(7);

const increment2 = (
  (count) => () =>
    count++
)(0);

const mull = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};

let count2 = increment2();
console.log(count2);
count2 = increment2();
console.log(count2);
count2 = increment2();
console.log(count2);

function lvl6exercise1(num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
  // use a switch statement
  switch (num) {
    case 1:
      // code block
      return "hello";

    case 2:
      return "world";

    default:
      // code block
      return "bye";
  }
}
console.log(lvl6exercise1("asdklfjalsdkjlakdjs"));
