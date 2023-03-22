const express = require('express');
const app = express();


app.use(express.json());
app.get('/welcome', (req, res) => {
    return res.send('Bienvenido a mi app')
})


const db = require('./db.js');
require('dotenv').config()
const router = require('./router')



const PORT = process.env.PORT;
const cors = require ("cors")
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions))

app.use(express.json());
app.use(router)

db.then(() => {
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((error) => console.log(error.message));
