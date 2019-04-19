const path =  require('path');
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const ctrl = require("./controller");

const app = express();

app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}

app.get("/api/gradients", ctrl.read);

app.listen(PORT, () => console.log(`You are running on port ${PORT}`));
