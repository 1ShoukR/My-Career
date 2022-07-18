
// old way (need to remove type: module from package.JSON for it to work)

// const app = require("express")

// new way
import * as cowsay from 'cowsay';
import express from "express"
const app = express() 
const PORT = 3000
app.use(express.json())
console.log("hi")
// routes
// Routes usually will have its http method on it. (this one happens to be 'get')
// it will always include in this order
// a req and a res (request and response)
console.log("im outside the route")
app.get('/', (req, res) => {
    // inside of this function body, you can do whatever you want
    // it wil only work if you call this tho 
    console.log("i am inside this route")
    res.send('this is the home page');
});


app.get("/benji", (req,res) => {
    res.send("lizard")
})


app.post("/beer", (req,res) => {
    res.send("rona")
})


app.post("/create_user", (req, res) => {
    res.send(`created user ${req.body.discplayer}`)
})




app.listen(PORT, console.log(`Listening on port ${PORT}`))

// make 3 routes
// 1 get, 2 post

app.get("/animal", (req,res) =>{
res.send(
  cowsay.say({
    text: "I'm a moooodule",
    e: 'oO',
    T: 'U ',
  })
);
})


app.post("/animal", (req,res) => {
    res.send(
      cowsay.say({
        text: "I'm a moooodule from POST",
        e: 'oO',
        T: 'U ',
      })
    );
})

app.post("/animalss", (req,res) => {
    res.send(cowsay.think({text: "I'm thinking from moodule POST 2", e: 'oO', T: 'U'}))
})

