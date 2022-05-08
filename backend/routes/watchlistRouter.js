const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");
const { generateToken, isAuth } = require("../utils.js");

const watchlistRouter = express.Router();

// Add Watchlist
watchlistRouter.post("/add", async (req, res) => {
  // Check if user already exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(401).send({ message: "User does not exist" });
    return;
  }

  if (!req.body.coinId) {
    res.status(400).send({ message: "Coin id was not provided" });
    return;
  }

  let watchlist = !user.hasOwnProperty("watchlist")
    ? [...user.watchlist, req.body.coinId]
    : [req.body.coinId];

  // Save user
  const updatedUser = await User.findOneAndUpdate(
    { email: user.email },
    { watchlist: watchlist },
    { new: true }
  );

  // Send details and jwt token
  res.send({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    watchlist: updatedUser.watchlist,
    token: generateToken(updatedUser),
  });
});

module.exports = watchlistRouter;
