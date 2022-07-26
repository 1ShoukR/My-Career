const express = require('express');
const router = express.Router();

// read
router.get('/get_pets', (req, res) => {
    res.render("index.html")
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