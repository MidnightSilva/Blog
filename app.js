const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
require('dotenv/config')


// Import Routes 
const postsRoute = require('./Routes/posts')

    const openRoutes1 = require("./Routes/users")
    const passport = require("./middleware/auth/index")
    const path = require("path");


// middleware 
app.use(bodyParser.json())
app.use('/posts', postsRoute);
app.use('/', openRoutes1);

// app.use(cookieParser());

//routes
app.get('/', (req, res )=>{
    res.send('we are home')
})

// Connecting to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  () => {
    console.log("Connected to db!");
  }
);
//listening to port 
app.listen(3000)

