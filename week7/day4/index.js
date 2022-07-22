const express = require('express');
const {User} = require("./models")
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});




// read all users
app.get('/users', async (req, res) => {
    console.log(User)
    const users = await User.findAll();
    res.send(users)
});



// read a user by id
app.get('/users/:id', async (req, res) => {
    const id = req.params.id
    // console.log(id)
    // res.send("Hello World")
    const user = await User.findByPk(id)
    res.send(user)
//   console.log(User);
//   const users = await User.findAll();
//   res.send(users);
});


// read user by name

app.get("/users/:name", async )


app.listen(port, () => console.log(`Listening on port ${port}`));
