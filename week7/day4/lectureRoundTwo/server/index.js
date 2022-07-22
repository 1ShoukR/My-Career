const express = require('express');
const { Pets, Clients } = require("../models")
const app = express();
const PORT = process.env.PORT || 3004;
app.use(express.json())

// reads all data on database
app.get("/pets", async (req, res) => {
    const pets = await Pets.findAll()
    res.json
})


// make an app,post tha takes in a new pet and adds to the database
app.post("/pets/", async (req, res) => {
    const newPet = await Pets.create(req.body)
    res.json(newPet)
})



app.delete("/pets", async (req, res) => {
    const pet = await Pets.destroy()
})




app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
