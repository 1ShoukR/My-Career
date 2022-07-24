// go to 1:29:42 for reference video in canvas


const express = require('express');
const {User, SoccerJersey, OrderStatus} = require("../database/models")
const app = express();
const PORT = process.env.PORT || 3004;

// middleware
app.use(express.json())





// create CRUD for User, SoccerJersey, OrderStatus
app.post("/user", async (req, res) =>{
    const { firstName, lastName, email, password } = req.body;
    const userToCreate = {
        firstName,
        lastName,
        email,
        password,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    try {
        const user = await User.create(userToCreate);
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})




app.post("/socerjersey", async (req, res) =>{
    const {team, kit, size } = req.body
    const createATeam = {
        team,
        kit,
        size,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    try {
        const jersey = await SoccerJersey.create(createATeam)
        res.status(200).send(jersey)
    } catch (error) {
        res.status(400).send(error)
    }
})



app.post("/order", async (req, res) =>{
    const {userId, soccerJerseyId, price} = req.body
    const createAnOrder = {
        userId,
        soccerJerseyId,
        price,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    try {
        const orderInception = await OrderStatus.create(createAnOrder)
        res.status(200).send(orderInception)
    } catch (error) {
        res.status(400).send(error)
    }
})



app.listen(PORT,console.log(`Server listening on port ${PORT}`))
