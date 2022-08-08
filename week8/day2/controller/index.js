const express = require('express');
const app = express();
const cors = require('cors')
const es6Renderer = require('express-es6-template-engine');
const PORT = 3005;
const petRoutes = require('./routes/pets');
const ownerRoutes = require('./routes/owners')
// middleware
app.use(express.static('public'));
app.engine('html', es6Renderer);
app.set('views', './public/views');
app.set('view engine', 'html');
app.use(express.json())
app.use(cors())
app.use("/pets", petRoutes)
app.use('/pets', ownerRoutes)





app.listen(PORT, console.log(`Listening on port ${PORT}`));
