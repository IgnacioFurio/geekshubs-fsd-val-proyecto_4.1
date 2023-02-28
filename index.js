const express = require('express');
const app = express();
const db = require('./db.js');
require('dotenv').config()

const PORT = process.env.PORT;

app.use(express.json());

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((error) => console.log(error.message));
