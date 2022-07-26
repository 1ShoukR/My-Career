const express = require('express');
const router = express.Router();
const { Pets } = require('../../../sequelize/models/')

// read
router.get('/get_pets', async (req, res) => {
    const petToGet = await Pets.findAll()
    console.log(petToGet)
    res.render("index.html", {locals:{
        title: ["Blake", "Ethan", "west", "Stacy"],
        Pets: petToGet
}})
})

//create
router.post('/add_pets', (req, res) => {
    res.send("added your new pet!")
})

//update
router.put('/update_pet', (req, res) => {
    res.send("updated your new pet")
})

//destroy
router.delete("/destroy_pet", (req, res) => {
    res.send("you have killed your pet")
})



module.exports = router