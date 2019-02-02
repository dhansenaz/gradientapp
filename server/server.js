const express = require('express')
const bodyParser = require('body-parser')
const PORT = 4000;
const ctrl = require('./controller')

const app = express();

app.use(bodyParser.json());

app.get('/api/gradients', ctrl.read)

app.listen(PORT, () => console.log("You are running on port 4000"))