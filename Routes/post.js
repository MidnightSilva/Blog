const express  = require('express');
const { model } = require('mongoose');
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Post Only");
});

router.get("/specific", (req, res) => {
  res.send("specific post");
});



module.exports = router