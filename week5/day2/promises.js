// what is a promise? 

// an action you take and you wait on an expected result
// it will either be what you wanted or not
// resolve or reject

// asynchronous (async)
function getCoffee(type){
    // we look for the type of coffee in our database
    console.log("you walk up and  grab a cup of joe")
}
// asynch function, action, promise
// const oliviasCoffee = async getTypeOfCoffee()
// getCoffee()

// two ways to handle promises
// you can use .then (built for promises)
// OR
// async await (this is ES6 standard)


const getCoffeePromise = new Promise((resolve,reject) => {
    const coffee = "Blond Roast"
    // some kind of action will happen up here ("credentials, username/password". If it matches, it will resolve. If not, it will reject you)
    if (coffee === "black"){
        resolve("I have your black coffee")
    }else {
        reject("I do not have black coffee")
    }
})
    .then((message)=> console.log(message))
    .then((finalMessage) => console.log(finalMessage))
    .catch((error) =>{
        console.log("Error",error)
    })

// another method (this way is clearer)

async function order(){
    try {
        const coffeeTime = await getCoffeePromise;
    } catch (error) {
        console.log(error)
    }

}
order()

// HTTP REQUEST status codes (look up a glossary to see all of the results)
// if everything is good, you will receive a status of 200

