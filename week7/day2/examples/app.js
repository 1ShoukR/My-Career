import express from "express"
import es6Renderer from "express-es6-template-engine"
const app = express()
const PORT = 3001


// middleware
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
// this line lets us use local pathing for our html and css
app.use(express.static("public"))
app.use(express.json())


//
console.log("I am on the server")
// routes
app.get("/", (req, res) => {
    // res.send("Hello from Express!")
    const user = {name: "Rahmin"}
    res.render('home', {locals:
        {user: user,
        teacher: "Joe",
        students: ["Amanda", "Carlos"]
    }})
})


app.post('/home', (req, res) => {
    console.log(req.body.message)
  res.json(req.body.message);
});

app.get("/firstPage", (req, res) => {
    res.render('firstPage')
})

app.post('/firstPage', (req, res) => {
  console.log(req.body.message);
  res.json(req.body.message);
});




app.listen(PORT, console.log(`listening on port ${PORT}`))