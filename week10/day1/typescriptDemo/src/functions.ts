// () => {}
// parameter, arguments, body, name, return value

const aFunction = (): number => {
    return 12
}

const returnArrayFunction = (num1: number, num2: number): number[] => {
    return [num1, num2]
}

const parsePassword = (password: string | number): boolean =>{
    if(password){
        // hash password with db password using bcrypt
        return true
    }
    return false
}


const calcIncomeTax = (salary: number, state?:string): number =>{
    if (state) {
        const total = salary * 1.30
        return total * 1.20
    }
    if (salary > 120_000){
        return salary *1.3
    } else {
        return salary*1.25
    }
}

