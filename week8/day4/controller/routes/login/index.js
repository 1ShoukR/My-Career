const express = require('express');
const router = express.Router();
const { Login } = require("../../../sequelize/models")

router.get("/login", (req, res) =>{
    res.send("login")
})






module.exports = router;