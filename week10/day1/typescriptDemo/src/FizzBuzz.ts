const fizzBuzz = (num1: number): string => {
    if (num1 % 3 === 0 && num1 % 5 === 0){
        return "FizzBuzz"
    }
    if (num1 % 3 === 0) {
        return "fizz"
    }
    if (num1 % 5 == 0){
        return "Buzz"
    }
    return "nothing"
}