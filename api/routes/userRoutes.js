const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    return res.send({
      users,
      status: true,
    });
  } catch (e) {
    return res.send({
      error: e.message,
      status: false,
    });
  }
});

router.post("/sign-up", async (req, res) => {
  try {
    let existingUser = await userModel.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res.send({
        message: "User already exists!",
        status: false,
      });
    }
    let newUser = new userModel(req.body);
    const hash = bcrypt.hashSync(req.body.password, 10);
    newUser.password = hash;
    await newUser.save();
    return res.send({
      message: "Signup successful",
      status: true,
    });
  } catch (e) {
    return res.send({
      error: e,
      status: false,
    });
  }
});

router.post("/sign-in", async (req, res) => {
  try {
    if (!req.body.email) {
      return res.send({
        message: "Email is required",
        status: false,
      });
    }
    let existingUser = await userModel.findOne({
      email: req.body.email,
    });
    if (!existingUser) {
      return res.send({
        message: "User doesn't exist!",
        status: false,
      });
    }

    const isValid = bcrypt.compareSync(
      req.body.password,
      existingUser.password
    );
    if (!isValid) {
      return res.send({
        message: "Wrong Password",
        status: false,
      });
    } else {
      return res.send({
        message: "Signin successful",
        status: true,
      });
    }
  } catch (e) {
    return res.send({
      error: e,
      status: false,
    });
  }
});

module.exports = router;
