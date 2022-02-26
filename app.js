const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')


// Import Routes 
const postsRoute = require('./Routes/post')

// middleware 
//
app.use('/post', postsRoute);

//routes
app.get('/', (req, res )=>{
    res.send('we are home')
})

// Connecting to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  // "mongodb+srv://admin_17:jG6Ff9DRZUrQkJUZ@cluster0.02x1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => {
    console.log("Connected to db!");
  }
);
//listening to port 
app.listen(3000)

