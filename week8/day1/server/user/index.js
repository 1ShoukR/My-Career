const express = require('express');
const { user } = require('../../database/models');
const router = express.Router();
const bcrypt = require('bcrypt');


router.get("/all_users", async (req, res) =>{
    const usersToGet = await user.findAll()
    res.send(usersToGet)
})

router.get('/by_id/:id', async (req, res) => {
    const {id} = req.params
    const usersToGet = await user.findAll({
        where: {
            id: id
        }
    });
    res.send(usersToGet);
});

// create a user name and password
router.post('/create_user', async (req, res) => {
    const { username, password } = req.body;
    console.log(password);
    try {
    const salt = await bcrypt.genSalt(5);
    console.log("Salt",salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Hashed password",hashedPassword);
    const encryptedUser = {
        username: username,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    const createUser = await user.create(encryptedUser);
    console.log(createUser)
    res.send(createUser);
    } catch (error) {
    res.send(error);
    }
    console.log(req.body)
});

// login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(password);
    try {
    // find user based on username in our database
    const findUser = await user.findOne({
        where: {
            username: username
        }
    })
    const userWeFound = findUser.dataValues
    // console.log(findUser)
    const validated = await bcrypt.compare(password, userWeFound.password)
    console.log(userWeFound.password)
    console.log(validated)
    if (!validated) {
      res.status(400).send('That user does not exist'); // .redirect("/login") this redirects you to the login application page
    } else {
      res.status(200).send('Successful Login'); // .redirect("/home") this redirects you to an html page template
    }
    } catch (error) {
    res.status(400).send(error);
    }
  // console.log(req.body)
});

// update password
router.put ('/update_password', async (req, res) => {
    const { username, password } = req.body
    try {
        const findUser = await user.findOne({
            where: {
                username: username,
            }
        })
        try {
            const salt = await bcrypt.genSalt(5)
            const hashedPassword = await bcrypt.hash(password, salt)
            findUser.password = hashedPassword
            findUser.update({
                username: username,
                password: hashedPassword,
                updatedAt: new Date()
            })
            res.send("Updated password")
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


module.exports = router