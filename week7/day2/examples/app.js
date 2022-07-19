import express from "express"
import es6Renderer from "express-es6-template-engine"
const app = express()
const PORT = 3001


// middleware
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// routes
app.get("/", (req, res) => {
    // res.send("Hello from Express!")
    res.render('home')
})


app.post('/home', (req, res) => {
  res.send('Hello from Express!');
});

app.get("/firstPage", (req, res) => {
    res.render('firstPage')
})



app.listen(PORT, console.log(`listening on port ${PORT}`))