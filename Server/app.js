const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
require('dotenv/config')


// Import Routes 
const postsRoute = require('./routes/posts')

    const openRoutes1 = require("./routes/users")
    const passport = require("./middleware/auth/index")
    const path = require("path");


// middleware 
app.use(bodyParser.json())

// app.use(cookieParser());

// ***********************************************//
// open Routes
// ***********************************************//
app.get("/", (req, res) => {
  res.send("we are home");
});

app.use("/posts", postsRoute);
app.use("/", openRoutes1);
// ***********************************************//
// Create a Closed Routes 
// ***********************************************//
// need to move blog posting, editing to closed routes 
// login and see if you can post / then log back out anf try to post again 




// Connecting to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  () => {
    console.log("Connected to db!");
  }
);
//listening to port 
app.listen(3000)

