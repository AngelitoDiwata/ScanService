const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts));

const jsonParser = bodyParser.json()

app.post('/', jsonParser, (req, res) => {
    saveArrayToJsonFile(req.body, res)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


function saveArrayToJsonFile(data, res) {
    const fs = require('fs');
    const filename = './tmp/' + 'data' + Date.now() + '.csv';
    fs.writeFile(filename, data, 'utf8', (err) => {
        if (err) {
            res.err(err);
            return;
        }
        res.send('Successfully saved the file!')
    });
}