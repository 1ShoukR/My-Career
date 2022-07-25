// this file can have all the commented code taken off. We are using
// routes to "route" the required code into here.
// create a user is in the 'user' folder

const express = require('express');
const { user } = require('../database/models');
const app = express();
const bcrypt = require('bcrypt');
const PORT = 3008;
const router = express.Router()

const userRoutes = require("./user")

// middleware
app.use(express.json());
// request object
// req.body as long as you have the above middleware
// {
// "username": "joeissmort"
// "Password": "notreally"
// }
// req.body.password -> "notreally"


app.use("/users", userRoutes)


// create a user name and password
// app.post('/create_user', async (req, res) => {
//     const { username, password } = req.body;
//     console.log(password);
//     try {
//     const salt = await bcrypt.genSalt(5);
//     // console.log("Salt",salt);
//     const hasedPassword = await bcrypt.hash(password, salt);
//     // console.log("Hashed password",hasedPassword);
//     const encryptedUser = {
//         username: username,
//         password: hasedPassword,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     };

//     const createUser = await user.create(encryptedUser);
//     // console.log(createUser)
//     res.send(createUser);
//     } catch (error) {
//     res.send(error);
//     }
//   // console.log(req.body)
// });

// // login
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     console.log(password);
//     try {
//     // find user based on username in our database
//     const findUser = await user.findOne({
//         where: {
//             username: username
//         }
//     })
//     const userWeFound = findUser.dataValues
//     // console.log(findUser)
//     const validated = await bcrypt.compare(password, userWeFound.password)
//     console.log(userWeFound.password)
//     console.log(validated)
//     if (!validated) {
//       res.status(400).send('That user does not exist'); // .redirect("/login") this redirects you to the login application page
//     } else {
//       res.status(200).send('Successful Login'); // .redirect("/home") this redirects you to an html page template
//     }
//     } catch (error) {
//     res.status(400).send(error);
//     }
//   // console.log(req.body)
// });


// update password
// app.put ('/update_password', async (req, res) => {
//     const { username, password } = req.body
//     try {
//         const findUser = await user.findOne({
//             where: {
//                 username: username,
//             }
//         })
//         try {
//             const salt = await bcrypt.genSalt(5)
//             const hashedPassword = await bcrypt.hash(password, salt)
//             findUser.password = hashedPassword
//             findUser.update({
//                 username: username,
//                 password: hashedPassword,
//                 updatedAt: new Date()
//             })
//             res.send("Updated password")
//         } catch (error) {
//             console.log(error)
//             res.status(400).send(error)
//         }
//     } catch (error) {
//         console.log(error)
//         res.status(400).send(error)
//     }
// })


// delete a username

app.listen(PORT, console.log(`Listening on port ${PORT}`));
