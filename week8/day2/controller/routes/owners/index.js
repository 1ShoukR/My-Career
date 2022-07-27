const express = require('express');
const router = express.Router();
const { Owners } = require('../../../sequelize/models');


router.get('/get_owners', async (req, res) => {
  const ownersToGet = await Owners.findAll();
  console.log();
  res.render('owners.html', {
    locals: {
      title: ['Blake', 'Ethan', 'west', 'Stacy'],
      owners: ownersToGet,
    },
  });
});


module.exports = router;