"use strict";
// () => {}
// parameter, arguments, body, name, return value
const aFunction = () => {
    return 12;
};
const returnArrayFunction = (num1, num2) => {
    return [num1, num2];
};
const parsePassword = (password) => {
    if (password) {
        // hash password with db password using bcrypt
        return true;
    }
    return false;
};
const calcIncomeTax = (salary, state) => {
    if (state) {
        const total = salary * 1.30;
        return total * 1.20;
    }
    if (salary > 120000) {
        return salary * 1.3;
    }
    else {
        return salary * 1.25;
    }
};
