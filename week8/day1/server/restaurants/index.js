const express = require('express');
const { Restaurants } = require('../../database/models');
const router = express.Router();


//FULL CRUD

// CREATE 1 or more restaurant
// Read 1 restaurant by id
// read 1 restaurant by name
// read 1 or more restaurant by address

// udate the name of restaurant
// update the address of the restaurant

// delete 1 restaurant by id
// delete 1 restaurant by name


// create a restaurant
router.post("/create_restaurant", async (req, res) => {
    const {name, address, reviewScore } = req.body
    const createARestaurant = {
        name,
        address,
        reviewScore,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    try {
        const createRestaurant = await Restaurants.create(createARestaurant)
        res.status(200).send(createRestaurant);
    } catch (error) {
        res.status(400).send(error)
    }
})

// read by ID

router.get("/by_id/:id", async (req, res) =>{
    const {id} = req.params
    const restaurantToGet = await Restaurants.findAll({
        where: {
            id: id
        }
    })
    res.send(restaurantToGet)
})

// read by name
router.get("/by_name/:name", async (req, res) => {
    const {name} = req.params
    const restaurantToGet = await Restaurants.findAll({
        where: {
            name: name
        }
    })
    res.send(restaurantToGet)
})


// read by address
router.get('/by_address/:address', async (req, res) => {
    const { address } = req.params;
    const restaurantToGet = await Restaurants.findAll({
    where: {
        address: address,
    },
    });
    res.send(restaurantToGet);
});

// update address by ID
router.put('/update_address/', async (req, res) => {
    const {id, address} = req.body
    const restaurantsToGet = await Restaurants.findOne({
        where: {
            id: id
        }
    })
    restaurantsToGet.update({
        address: address,
        updatedAt: new Date(),
    })
    res.send(restaurantsToGet)
})

// update name by ID
router.put('/update_name/', async (req, res) =>{
    const {id, name } = req.body
    const restaurantsToGet = await Restaurants.findOne({
        where: {
            id: id
        }
    })
    restaurantsToGet.update({
        name: name,
        updatedAt: new Date(),
    })
    res.send(restaurantsToGet)
})

// delete by name
router.delete('/delete_name', async (req, res) => {
    const {id, name } = req.body
    const restaurantsToGet = await Restaurants.findOne({
        where: {
            id: id
        }
    })
    restaurantsToGet.destroy()
})




module.exports = router