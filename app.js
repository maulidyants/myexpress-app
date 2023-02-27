const express = require('express');
const app = express();
const port = 300;

const logger = (req, res, next) => {
    console.log('response sent');
    next();
};

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hi Brachio!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});