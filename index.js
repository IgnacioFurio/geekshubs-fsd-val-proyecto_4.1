const express = require('express');
const app = express();
const db = require('./db.js');
require('dotenv').config()
const router = require('./router')

const PORT = process.env.PORT;

app.use(express.json());
app.use(router)

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((error) => console.log(error.message));
