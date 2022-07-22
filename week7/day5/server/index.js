const express = require('express');
const { User, Longboard, Order } = require('../database/models');
const app = express();
const PORT = 3009;


// middleware
app.use(express.json())



// crud for user, longboard, order
app.post("/user", async (req,res) => {
    // destructuring purely to look nice
    console.log(req.body)
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password)

    const userToCreate = {
        firstName,
        lastName,
        email,
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    try {
            const user = await User.create(userToCreate);
            res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error)
    }

})



app.post("/longboard", async (req,res) => {
        // destructuring purely to look nice
    console.log(req.body)
    const { name, brand, length } = req.body;
    console.log(name, brand, length)

    const longboardToCreate = {
        name,
        brand,
        length,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    try {
        const longboard = await Longboard.create(longboardToCreate);
        res.status(200).send(longboard);
    } catch (error) {
        res.status(400).send(error)
    }
})





app.post("/order", async (req,res) => {
    console.log(req.body)
    const { userId, longboardId, price } = req.body;
    console.log(userId, longboardId, price)

    const orderToCreate = {
        userId,
        longboardId,
        price,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    try {
        const order = await Order.create(orderToCreate);
        res.status(200).send(order);
    } catch (error) {
        res.status(400).send(error)
    }
})


app.listen(PORT, console.log(`Listening on port ${PORT}!`));
