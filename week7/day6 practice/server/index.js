const express = require('express');
const {User, SoccerJersey, Order} = require("../database/models")
const app = express();
const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
