import * as cowsay from 'cowsay';
import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());
console.log('hi');
console.log('Hello World, I am in Node.');
// get joe to look at this later (not working)
app.get('/homework', (req, res) => {
    res.send(`I am listening on port ${PORT}`);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));


app.get('/cowsay', (req, res) => {
    res.send(cowsay.say({
        text: "suck ma dick",
        e: 'oO',
        T: "8=====D~"
    }));
})