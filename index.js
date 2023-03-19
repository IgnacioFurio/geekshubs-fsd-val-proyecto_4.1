const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./db.js');
require('dotenv').config()
const router = require('./router')

const PORT = process.env.PORT;

let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

db.then(() => {
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
.catch((error) => console.log(error.message));
