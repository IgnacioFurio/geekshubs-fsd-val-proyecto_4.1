const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const db = require('./db.js');
require('dotenv').config()
const router = require('./router')

const PORT = process.env.PORT;

app.use(express.json());
app.use(router)

db.then(() => {
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
.catch((error) => console.log(error.message));
