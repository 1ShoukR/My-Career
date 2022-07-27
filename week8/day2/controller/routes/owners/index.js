const express = require('express');
const router = express.Router();
const { Owners } = require('../../../sequelize/models');


router.get('/get_owners', async (req, res) => {
    const ownersToGet = await Owners.findAll();
    console.log(ownersToGet);
    res.render('owners.html', {locals: {
        owners: ownersToGet,
    },
    });
});


module.exports = router;