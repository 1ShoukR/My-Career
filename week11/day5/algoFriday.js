// print out the duplicates of the numbers in the array 
const duplicateNumber = () => {
    console.log('i am working');
    let array = [2, 1, 5, 2, 3, 3, 4];
    const set = new Set();
    for (const number of array) {
    if (set.has(number)) {
        return number;
    } else {
    set.add(number)
    }
}
    return -1
};

console.log(duplicateNumber())


const longestPalindrome = () =>{
    let string = "abaxyyzyxf"
    
}



