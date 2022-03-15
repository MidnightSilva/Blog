const express = require("express");



const router = require("express").Router(),
  { createUser, loginUser } = require("../Controllers/users");

router.post("/", createUser);

router.post("/login", loginUser);

module.exports = router;