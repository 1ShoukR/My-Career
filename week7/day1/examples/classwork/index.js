import * as cowsay from 'cowsay';
import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());
console.log('hi');
console.log('Hello World, I am in Node.');
// get joe to look at this later (not working)
app.get('/', (req, res) => {
    res.send('Hello World');
});
