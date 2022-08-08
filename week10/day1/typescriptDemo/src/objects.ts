// objects
// const user = {name: "Joe"}


// type alias


type User = {
    name: string,
    username: string,
    age?: number,
    emailAddress?: string,
    [k: string]: any
}

let rahmin: User = {
    name: "Rahmin",
    username: "rahminnoodles",
    age: 20,
    emailAddress: "SAEFBGAESRFAEG"
}

let west: User = {
    name: "West",
    username: "Mochiopia",
    herMans: "Rahmin"
}

let sherry: User = {
    name: 'West',
    username: 'Mochiopia',
    herMans: 'Rahmin',
};

// if you dont know what the keys will be called or the type of data it will be
// you can use this on your obj
// const obj = {[key: string]: any}

//type alias carpenter

type Carpenter = {
    companyName: string,
    readonly id: number,
}

let Carlos: Carpenter = {
    companyName: "Carlos Carpentary Company",
    id: 1
}
// Carlos.id = 200 cant do it cause of 'readonly' variable to prevent changing of data


// declare an array variable called list of carpenters that only recieves the type of carpenters

const listOfCarpenters: Carpenter[] = []
listOfCarpenters.push(Carlos)






type Password = {
    password: string | number,
    securityClearance: "Basic" | "Top-Secret"
}

type softwareEngineer = {
    readonly id: number,
    password: Password
}



const blke: softwareEngineer = {
    id: 2000,
    password: {
        password: 7777,
        securityClearance: "Basic"
    }
}

// create listofUsers that accepts either Users, or masterUsers

type clearanceLevel = {
    securityClearance: "Basic" | "top secret"
}

type masterUser = {
    readonly id: number
    password: string | number
    email?: string,
    createdAt: Date,
    updatedAt: Date,
    clearanceLevel : clearanceLevel
}

type Users = {
    readonly id: number,
    password: string | number
    email?: string
    createdAt: Date,
    updatedAt: Date,
    clearanceLevel: clearanceLevel
}

const listOfUsers: Users[] | masterUser[] = []


let me: masterUser = {
    id: 1,
    password: 4262,
    email: "rahminshoukoohi@gmail.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    clearanceLevel: {
        securityClearance: "top secret"
    }
}

listOfUsers.push(me)

