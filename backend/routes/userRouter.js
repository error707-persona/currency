const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");
const { generateToken, isAuth } = require("../utils.js");

const userRouter = express.Router();

// Sign in
userRouter.post("/signin", async (req, res) => {
  const password = req.body.password;
  const user = await User.findOne({ email: req.body.email });

  if (user)
    if (bcrypt.compareSync(password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user),
        watchlist: user.watchlist,
      });
      return;
    }

  res.status(401).send({ message: "Invalid email or password." });
});

// Sign up
userRouter.post("/signup", async (req, res) => {
  // Check if user already exists
  console.log("hello world")
  if (await User.findOne({ email: req.body.email })) {
    res.status(401).send({ message: "Email already exists." });
    return;
  }

  // Create User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    watchlist: [],
  });

  // Save user
  const createdUser = await user.save();
  console.log(req.body, "req")
  // Send details and jwt token
  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    token: generateToken(createdUser),
  });
});

userRouter.get("/", isAuth, async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  if (user)
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      watchlist: user.watchlist,
    });
  return;
});

module.exports = userRouter;
