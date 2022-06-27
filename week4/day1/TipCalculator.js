// make a tip calculator receieves (bill amount, percentage)

const tipCalculator = (bill, percentage) =>{
    let total = bill * percentage
    return total + bill
}
// console.log(tipCalculator(12, .63).toFixed(2))


// > 100 add 30% grat
// > 50 add 25% grat
// < 50 add 20% grat




// const newTipCalc = (total) =>{

//     let mealTotal = 0
//     if (total <= 100) {
//         mealTotal - total + total *.3
//     }
//     if (total <= 99 && total >= 50) {
//         mealTotal - total + total *.25
//     }
//     if (total < 50){
//         mealTotal = total +total *.2
//     }
//     return mealTotal
// }
// console.log(newTipCalc(100))



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
// output [ {vipStatus: 5, timeslot: "7:30pm"},{vipStatus: 3, timeslot: "6:30pm"},{vipStatus: 1, timeslot: "8:30pm"}]


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