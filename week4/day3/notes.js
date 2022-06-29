console.log("howdy")

// ternary operator: looks like a '?'
// const data = iftruthy ? do this, else: do this if falsy
// see below for example:
const admin = "rayleigh"
const username = admin === "joe" ? "jwfraiser" : "rrozier"
console.log(username)

const temp = 95
const weather = temp > 90 ? "stay inside" : "go outside and enjot the cool breeze"
console.log(weather)

const checkUser = (user) =>{
    if(user === "joe") return true;
    return false
}
const userThatIsLoggedIn = checkUser("joe") ? "jwfraiser" : "error invalid creds"
console.log(userThatIsLoggedIn)


// const loggedIn = username === "joe" ? "jwfraiser": null
// this can also be shorthanded
//AND operato: &&
const loggedIn = username === "joe" && "jwfraiser"

// OR operator: 
// || (above the enter key)
const permittedToStay = loggedIn || "child"

const doThing = (username) =>{
    const userToValidated = username || "guest"

}

// switch statements are typically better when you have a lot of arguments
// in your AND or OR statements

// how to add lists together

const array1 = ["andrea", "amanda", "jason"]
const array2 = ["west", "rahmin", "rahmins mother"]
const students = array1.concat(array2)
// OR use spread operator
const students2 = [...array1, ...array2]
console.log(students)
console.log(students2)

// this is a shortcut to make a string into an integer

const notANumber = "1"
console.log(typeof +notANumber)

// dot map is a useful function to do stuff in an array

// students.forEach(element => {
//     console.log(element.toUpperCase())
// });


// javascript doesnt need curly braces if you have it in one line of code
// more than one line of code = need curly braces and return statement
// only one line of code = dont need curly braces


// one line

// const upperCaseStudents = students.map((student) => students.toUpperCase())
// console.log(uppserCaseStudents)

// more than one line

// const upperCaseStudents = students.map((student) =>{
//     return upperCaseStudents
// })

const noogleEmployee = {
    name: "Carlos Silva",
    status: "noogler",
    salary: "not 1 billion dollars",
    department: "google cloud",
}
const googleEmployee = {
    name: "not Carlos Silva",
    status: "not noogler",
    salary: "1 billion dollars",
    projects:[
        {name: "project X"},
        {name: "google fi"},
        {name: "google maps 2.0"}
    ],
}
console.log(noogleEmployee.height)

// optional chain: ? (this prevents code from breaking)
// just in case that value does or does not exist
// always throw a optional chain to all objects
const allGoogleEmployees = [googleEmployee, noogleEmployee]
allGoogleEmployees.forEach((emp) => console.log(emp?.projects ? emp.projects[0] : emp.department))
console.log(allGoogleEmployees)


// read on dot reduce